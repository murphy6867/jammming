import { useState } from "react";

const SearchBar = (props) => {

  const [word, setWord] = useState("");

  return (
    <div className="w-full h-auto flex flex-col items-center gap-5">
      <input 
        className="w-1/2 rounded-xl py-3 px-4"
        onChange={(e) => setWord(e.target.value)}
        type="text" />
      <button 
        className="text-2xl bg-sky-500 py-3 px-4 uppercase rounded-xl hover:bg-amber-700 hover:text-white"
        onClick={() => props.searchFunc(word)}>Search</button>
    </div>
  )
}

export default SearchBar