import { useState } from "react"

const Tracklist = (props) => {
  const [toggle, setToggle] = useState(false)

  // console.log(props.PlayList[0])

  return (
    <div className='mb-4'>
      {props.PlayList.map((item, index) => (
        <div key={index}
          className=" border-b-2 my-2 py-2 flex flex-col justify-between"
        >
          <div className="flex justify-between">
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
              <h1 key={song.id}>{song.name}</h1>
              
            )):
            null
          }
        </div>
      ))}
    </div>
  )
}

export default Tracklist