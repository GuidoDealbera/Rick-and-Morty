import style from "./Detail.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail(props) {
  const [character, setCharacter] = useState({});
  const URL_BASE = "https://be-a-rym.up.railway.app/api";
  const API_KEY = "dcfc10d73e5d.2a52928cb7f6acd5e30a";
  const { detailId } = useParams();
  useEffect(() => {
    fetch(`${URL_BASE}/character/${detailId}?key=${API_KEY}`)
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
      <div className={style.imagen}>
        <img src={character.image} alt={character.name} />
      </div>
      <div className={style.info}>
        <h1>DETALLE:</h1>
        <h2>NOMBRE: {character.name}</h2>
        <h4>ESPECIE: {character.species}</h4>
        <h4>GÉNERO: {character.gender}</h4>
        <h4>STATUS: {character.status}</h4>
        <h4>ORIGEN: {character.origin?.name}</h4>
      </div>
    </div>
  );
}
