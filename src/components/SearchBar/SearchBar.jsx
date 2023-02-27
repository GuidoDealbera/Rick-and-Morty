import style from "./SearchBar.module.css"
import React from "react";
export default function SearchBar(props) {
   const [character, setCharacter] = React.useState("");
   
   const handleInput = (evento) => {
      setCharacter(evento.target.value)
   }

   return (
      <div className={style.searchbar}>
         <input type='text' name='search' placeholder="ID" 
         onChange={(evento) => handleInput(evento)} value={character}/>
      <button onClick={()=>props.onSearch(character)}>Agregar</button>
      </div>
   );
}
