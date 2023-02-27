import style from "./Detail.module.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function Detail (props) {
   const [character, setCharacter] = useState({});
   
   const { detailId } = useParams();
   useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);
   
   
    return (
        <div className={style.detail}>
            <h1>DETALLES:</h1>
            <div>NOMBRE: {character.name}</div>
            <div>ESPECIE: {character.species}</div>
            <img src={character.image} alt={character.name} />
            <div>GÉNERO: {character.gender}</div>
            <div>STATUS: {character.status}</div>
            <div>ORIGEN: {character.origin?.name}</div>
        </div>
    )
}