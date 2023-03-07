import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Card(props) {
  const [isFav, setIsFav] = useState(false);
const favoritos = useSelector((state) => state.myFavorites)
  useEffect(() => {
    favoritos.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [favoritos, props.id]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorites(props.id);
    } else {
      const obj = {
        id: props.id,
        name: props.name,
        species: props.species,
        gender: props.gender,
        image: props.image,
      };
      setIsFav(true);
      props.addFavorites(obj);
    }
  };
  return (
    <div className={styles.contenedor}>
      <div className={styles.boton}>
        <button onClick={() => props.onClose()}></button>
      </div>
      <div>
        {isFav ? (
          <button onClick={handleFavorite}>♥</button>
        ) : (
          <button onClick={handleFavorite}>♡</button>
        )}
      </div>
      <Link to={`/detail/${props.id}`}>
        <div>
          <img className={styles.image} src={props.image} alt={props.name} />
        </div>
      </Link>
      <div>
        <h2>{props.name}</h2>
        <br />
        <div>
          <h6>{props.species}</h6>
          <h6>{props.gender}</h6>
        </div>
      </div>
    </div>
  );
}

//PROBANDO x2
