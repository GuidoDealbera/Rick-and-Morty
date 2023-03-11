import styles from './Favorites.module.css'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { orderCards, filterCards } from '../../redux/actions';
import { useEffect } from 'react';

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handlerOrder = (evento) => {
    dispatch(orderCards(evento.target.value))
  }
  const handlerFilter = (evento) => {
    dispatch(filterCards(evento.target.value))
  }
  useEffect(()=>{
    return (
      dispatch(orderCards('Ascendente')),
      ()=>{ dispatch(filterCards('none'))
    dispatch(orderCards('Ascendente'))
})
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
  return (
    <div className={styles.espacio}>
      <div>
        <select onChange={handlerOrder}>
          <option value="order" disabled="disable">Order By</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handlerFilter}>
        <option value="filter" disabled="disable">Filter By</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
      </div>
      {myFavorites.map((char) => {
        return (
          <div key={char.id}className={styles.contenedor}>
            <div className={styles.boton}>
              <button onClick={() => char.onClose()}></button>
            </div>
            <Link to={`/detail/${char.id}`}>
              <div>
                <img
                  className={styles.image}
                  src={char.image}
                  alt={char.name}
                />
              </div>
            </Link>
            <div className={styles.divData}>
              <h2>{char.name}</h2>
              <br />
              <div className={styles.characters}>
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
