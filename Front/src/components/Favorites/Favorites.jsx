import styles from './Favorites.module.css'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Favorites = (props) => {
  const { myFavorites } = useSelector((state) => state);
  return (
    <div className={styles.espacio}>
      {myFavorites.map((char) => {
        return (
          <div className={styles.contenedor}>
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
