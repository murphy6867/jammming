
const Tracklist = (props) => {
  return (
    <div className='mb-4'>
      {props.PlayList.map((item, index) => (
        <h1 key={index}
          className='text-xl text-stone-400 font-bold border-b-2 my-2 py-2'
        >{item.name}</h1>
      ))}
    </div>
  )
}

export default Tracklist