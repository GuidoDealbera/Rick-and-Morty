import React from "react";
export default function SearchBar({onSearch}) {
   const [character, setCharacter] = React.useState("");
   
   const handleInput = (evento) => {
      setCharacter(evento.target.value)
   }
   const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        onSearch(character)
        setCharacter('')
      }
    }
   return (
      <div className='flex gap-2'>
         <input type='text' name='search' placeholder="ID" className="bg-transparent w-40 min-[350px]:w-full focus:bg-lime-400/60 duration-100 outline-none text-gray-900 p-1 rounded-full font-medium border-2 border-lime-400"
         onChange={(evento) => handleInput(evento)} value={character}
         onKeyDown={handleKeyPress}/>
      <button onClick={()=>onSearch(character)} className="bg-[#adff2f] py-1 px-2 rounded-full font-medium hover:bg-lime-400 shadow-md shadow-lime-300 active:shadow-none">Add</button>
      </div>
   );
}
