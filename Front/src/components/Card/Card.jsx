import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, deleteFavorites } from "../../redux/actions";

export default function Card(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorites(props.id));
    } else {
      setIsFav(true);
      dispatch(addFavorites(props));
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
    <div className="flex flex-col bg-lime-400 w-fit p-2 rounded-3xl">
        <div className="w-48 rounded-3xl shadow-md shadow-black relative">
        <img className="rounded-3xl" src={props.image} alt={props.name} />
        <span className="absolute top-0  bg-black/80 w-full h-full rounded-3xl"></span>
        </div>
      <div className="flex justify-end text-xl">
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-center text-2xl">{props.name}</h2>
        <div className="flex justify-around">
          <h6>{props.species}</h6>
          <h6>{props.gender}</h6>
        </div>
      </div>
      <div className="flex justify-end">
      <Link to={`/detail/${props.id}`}>
    
      </Link>
      </div>
    </div>
  );
}
