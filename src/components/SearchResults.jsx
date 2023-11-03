import React from 'react'

const SearchResults = (props) => {


  return (
    <div className='w-4/5 h-[60vh] px-4 overflow-auto'>
      {props.tracks.map((song) => (
        <div key={song.id} className='w-full h-auto py-2 px-3 flex items-center justify-between border-b border-white bg-transparent '>
          <div>
            <h1 className='text-white text-lg font-bold '>{song.name}</h1>
            <h2 className='text-stone-400'>{song.artists[0].name}</h2>
          </div>
          <button 
            className='w-8 h-8 rounded-full text-white border-2 hover:bg-white hover:text-black'
            onClick={() => props.addPlaylist(song)}>+</button>
        </div>
      ))}
    </div>
  )
}

export default SearchResults