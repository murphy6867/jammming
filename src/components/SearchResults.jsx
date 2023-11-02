import React from 'react'

const SearchResults = (props) => {


  return (
    <div className='w-2/5 px-4'>
      <h1 className='text-3xl text-white font-bold my-3'>Results</h1>
      {props.songs.map((song) => (
        <div key={song.id} className='w-full h-auto py-2 px-3 flex items-center justify-between border-b border-white bg-transparent'>
          <div>
            <h1 className='text-white text-lg font-bold'>{song.name}</h1>
            <h2 className='text-stone-400'>{song.artist}</h2>
          </div>
          <button 
            className='w-12 h-12 rounded-full text-white border-2'
            onClick={() => props.addPlaylist(song)}>+</button>
        </div>
      ))}
    </div>
  )
}

export default SearchResults