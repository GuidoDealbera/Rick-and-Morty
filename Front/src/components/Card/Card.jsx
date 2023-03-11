import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/actions";

export default function Card(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(props.id));
    } else {
      setIsFav(true);
      dispatch(addFavorite(props));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [myFavorites, props.id]);

  return (
    <div className={styles.contenedor}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <div className={styles.boton}>
        <button onClick={() => props.onClose()}></button>
      </div>
      <Link to={`/detail/${props.id}`}>
        <div>
          <img className={styles.image} src={props.image} alt={props.name} />
        </div>
      </Link>
      <div className={styles.divData}>
        <h2>{props.name}</h2>
        <br />
        <div className={styles.characters}>
          <h6>{props.species}</h6>
          <h6>{props.gender}</h6>
        </div>
      </div>
    </div>
  );
}
