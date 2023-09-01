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
      <div className=''>
         <input type='text' name='search' placeholder="ID" 
         onChange={(evento) => handleInput(evento)} value={character}
         onKeyDown={handleKeyPress}/>
      <button onClick={()=>onSearch(character)}>Agregar</button>
      </div>
   );
}
