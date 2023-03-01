import style from "./Detail.module.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function Detail (props) {
   const [character, setCharacter] = useState({});
   const URL_BASE = "https://be-a-rym.up.railway.app/api";
   const API_KEY = "dcfc10d73e5d.2a52928cb7f6acd5e30a";
   const { detailId } = useParams();
   useEffect(() => {
    fetch(`${URL_BASE}character/${detailId}${API_KEY}`)
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