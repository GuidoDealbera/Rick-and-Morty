import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../redux/actions";
import { useEffect, useState } from "react";
import { deleteFavorites } from "../../redux/actions";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);
  const [isFav, setIsFav] = useState(true);
  const dispatch = useDispatch();
  const handleFavorite = (id) => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorites(id));
    }
  };
  const handlerOrder = (evento) => {
    dispatch(orderCards(evento.target.value));
  };
  const handlerFilter = (evento) => {
    dispatch(filterCards(evento.target.value));
  };
  useEffect(() => {
    return (
      dispatch(orderCards("Ascendente")),
      () => {
        dispatch(filterCards("none"));
        dispatch(orderCards("Ascendente"));
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='py-2'>
      <div>
        <select onChange={handlerOrder}>
          <option value="order" disabled="disable">
            Order By
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handlerFilter}>
          <option value="filter" disabled="disable">
            Filter By
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
      </div>
      {myFavorites.map((char) => {
        return (
          <div key={char.id} className=''>
            <div className=''>
              {isFav ? (
                <button onClick={() => handleFavorite(char.id)}>❤️</button>
              ) : (
                <button onClick={() => handleFavorite(char.id)}>🤍</button>
              )}
            </div>
            <Link to={`/detail/${char.id}`}>
              <div>
                <img
                  className=''
                  src={char.image}
                  alt={char.name}
                />
              </div>
            </Link>
            <div className=''>
              <h2>{char.name}</h2>
              <br />
              <div className=''>
                <h6>{char.species}</h6>
                <h6>{char.gender}</h6>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
