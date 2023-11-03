import { useState } from 'react'
import TrackList from "./Tracklist";
// import Track from "./Track";


const Playlist = (props) => {

  const [plName, setPLName] = useState("");

  return (
    <div className='w-2/5 h-full px-4'>
      <h1 className='text-3xl text-white font-bold my-3'>Playlist</h1>
      <TrackList PlayList={props.playList} />

      <input type="text" 
        className='py-3 px-3 rounded-xl w-full'
        onChange={(e) => setPLName(e.target.value)} />

      {props.favoriteSong.map((song) => (
        <div key={song.id} className='w-full h-auto py-2 px-3 flex items-center justify-between border-b border-white bg-transparent'>
          <div>
            <h1 className='text-white text-lg font-bold'>{song.name}</h1>
            <h2 className='text-stone-400'>{song.artist}</h2>
          </div>
        <button 
          onClick={() => props.removePlaylist(song)}
          className='w-12 h-12 rounded-full text-white border-2'
          >-</button>
      </div>
    ))}
    <button
      onClick={()=>props.createPL(plName)}
      className='py-2 px-3 text-2xl bg-amber-300 rounded-xl mt-3'
    >Save to Spotify</button>
  </div>
  )
}

export default Playlist