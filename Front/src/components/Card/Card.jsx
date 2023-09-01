import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addFavorites, deleteFavorites } from "../../redux/actions";

function Card(props) {
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
//      console.log(props);
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [props.myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false)
      props.deleteFavorites(props.id)
    }
    else {
      const obj = {
        id: props.id,
        name: props.name,
        species: props.species,
        gender: props.gender,
        image: props.image
      }
      setIsFav(true)
      props.addFavorites(obj)
    }
  }

  return (
    <div className="flex flex-col bg-lime-400 w-52 h-fit p-2 rounded-3xl relative hover:scale-105 duration-500">
      <div className="flex gap-2 justify-end items-center text-xl absolute right-3 top-3 drop-shadow-lg">
        {isFav ? (
          <button
            onClick={handleFavorite}
            className="hover:scale-125 duration-100"
          >
            ❤️
          </button>
        ) : (
          <button
            onClick={handleFavorite}
            className="hover:scale-125 duration-100"
          >
            🤍
          </button>
        )}
        <button onClick={() => props.onClose()} className="bg-red-600 w-4 h-4 rounded-full"></button>
      </div>
      <div className="w-48 rounded-3xl shadow-md shadow-black">
      <Link to={`/detail/${props.id}`}>
        <img className="rounded-3xl" src={props.image} alt={props.name} />
      </Link>
      </div>
      <h2 className="text-center text-2xl py-2 font-semibold text-gray-900 shadowtext">{props.name}</h2>
    </div>
  );
}

export function mapStateToProps(state) {
  return{
    myFavorites: state.myFavorites
  }
}

export function mapDispatchToProps(dispatch){
  return {
    addFavorites: (personaje) => {dispatch(addFavorites(personaje))},
    deleteFavorites: (id) => {dispatch(deleteFavorites(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)