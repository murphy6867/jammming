import { useState, useEffect } from "react";
import axios from "axios";
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
// import Data from "./assets/data.js";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET


function App() {

  const [token, setToken] = useState(null);
  const [result, setResult] = useState([]);
  const [song, setSong] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const AddToPlaylistHandle = async (songId) => { 
    song.includes(songId) ? console.log(`Dupplicate Song`) 
    : 
    setSong(() => {return [...song, songId]})
  }

  const RemoveTrackHandle = async (songId) => setSong(song => song.filter(item => item.id !== songId.id))
  
  const CreatePlayList = async (playListName) => {

    if (song.length === 0) {
      return console.log(`Please Add Song`);
      
    } else if (playListName === "") {
      return console.log(`Please Provide Playlist Name`)

    } else {
      setPlaylist(() => {
        return [...playlist, {name: playListName, songs: song}]
      })

      setSong([]);
    }

  }

  const RemoveTrackInPlaylistHandler = (trackName, songId) => {
   
    let selectedPlayListIndex = playlist.findIndex(pl => pl.name === trackName);
  
    if (selectedPlayListIndex !== -1) {
      
      let filteredSongs = playlist[selectedPlayListIndex].songs.filter(song => song.id !== songId);

      let newPlaylist = [...playlist];
  
      newPlaylist[selectedPlayListIndex].songs = filteredSongs;

      setPlaylist(newPlaylist);
      
    } else {
      console.log(`Playlist with name ${trackName} not found.`);
    }
  }

  useEffect(() => {
    const getAccessToken = async () => {
      const base64Credentials = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
      const authOptions = {
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        headers: {
          'Authorization': 'Basic ' + base64Credentials,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: 'grant_type=client_credentials'
      };
  
      try {
        const response = await axios(authOptions);
        setToken(response.data.access_token);

      } catch (error) {
        console.error(error);
      }
    }
  
    getAccessToken();
  }, []);

  const SearchHandle = async (keyword) => {
    // const TEST = "taylor swift"
    // const TEST2 = "Cruel Summer"

    let accessParameters = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    }

    try {
      let artistID = await fetch('https://api.spotify.com/v1/search?q=' + keyword + '&type=track', accessParameters)
      let data = await artistID.json()
      setResult(data.tracks.items)
      
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <main className="w-screen h-screen flex flex-col items-center justify-start bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <header className=" w-full h-54 flex flex-col items-center justify-center gap-3 p-5 ">
        <h1 className="text-4xl font-bold text-amber-300 m-4">Jammming application.</h1>
        <SearchBar searchFunc={SearchHandle} />
      </header>
      <section className="w-full h-full flex items-center justify-center bg-transparent p-2 my-2">
        <div className="w-full h-full flex flex-col items-center">
          <h1 className='text-3xl text-white font-bold my-3'>Results</h1>
          <SearchResults tracks={result} addPlaylist={AddToPlaylistHandle} />
        </div>
        <div className="w-full h-full flex justify-center">
          <Playlist 
            favoriteSong={song} 
            removeTrack={RemoveTrackHandle} 
            createPL={CreatePlayList} 
            playList={playlist}
            removeTrackInPL={RemoveTrackInPlaylistHandler} />
        </div>
      </section>
    </main>
  )
}

export default App
