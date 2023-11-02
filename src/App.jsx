import { useState } from "react";
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Track from "./components/Track";
import TrackList from "./components/TrackList";
import Data from "./assets/data.js";

function App() {

  const [data, setData] = useState(Data);
  const [song, setSong] = useState([]);
  const [keyword, setKeyword] = useState("");

  const SearchHandle = async (word) => {

    setKeyword(word)

    if (word === "") {
      setData(Data)
    } else {
      setData(data.filter(item => item.name.toLowerCase().includes(word.toLowerCase()) || item.artist.toLowerCase().includes(word.toLowerCase())))
    }
  };

  const AddToPlaylistHandle = async (songId) => song.includes(songId) ? console.log(`Dupplicate Song`) : setSong(() => {return [...song, songId]})

  const RemovePlaylistHandle = async (songId) => setSong(song => song.filter(item => item.id !== songId.id))
  

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <header className=" w-full h-auto flex flex-col items-center justify-center gap-3 p-5 ">
        <h1 className="text-4xl font-bold text-amber-300 m-4">Jammming application.</h1>
        <SearchBar searchFunc={SearchHandle} />
      </header>

      <section className="w-4/5 h-auto flex items-center justify-center bg-transparent">
        <SearchResults songs={data} addPlaylist={AddToPlaylistHandle} />
        <Playlist favoriteSong={song} removePlaylist={RemovePlaylistHandle} />
      </section>
    </main>
  )
}

export default App
