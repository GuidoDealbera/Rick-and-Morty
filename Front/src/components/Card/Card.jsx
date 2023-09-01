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
    <div className=''>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <div className=''>
        <button onClick={() => props.onClose()}></button>
      </div>
      <Link to={`/detail/${props.id}`}>
        <div>
          <img className='' src={props.image} alt={props.name} />
        </div>
      </Link>
      <div className=''>
        <h2>{props.name}</h2>
        <br />
        <div className=''>
          <h6>{props.species}</h6>
          <h6>{props.gender}</h6>
        </div>
      </div>
    </div>
  );
}
