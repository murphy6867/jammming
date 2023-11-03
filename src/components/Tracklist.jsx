import { useState } from "react"

const Tracklist = (props) => {

  const [toggle, setToggle] = useState(false)
  // console.log(props.PlayList[0])


  return (
    <div className='mb-4 h-[20vh]  overflow-auto'>
      {props.PlayList.map((item, index) => (
        <div key={index}
          className=" border-b-2 my-2 py-2 flex flex-col justify-between"
        >
          <div className="flex justify-between mb-2">
            <h1
              className='text-xl text-stone-300 font-bold'
            >{item.name}</h1>
            <button
              className="px-2 text-stone-400 hover:text-white text-xl"
              onClick={() => setToggle(!toggle)}
              >{toggle === true ? '◄' : '▼'}</button>
          </div>
          {toggle === true ?
            item.songs.map(song => (
              <div className="flex items-center justify-between pb-2" key={song.id}>
                <h1 
                  className="text-white"
                >
                  {song.name}
                </h1>
                <button 
                  onClick={() => props.removeTrackInPL(item.name ,song.id)}
                  className='w-6 h-6 flex items-center justify-center me-3 rounded-full text-white border-2 hover:bg-white hover:text-black'
                >-</button>
              </div>
            )):
            null
          }
        </div>
      ))}
    </div>
  )
}

export default Tracklist