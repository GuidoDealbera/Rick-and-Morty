import styles from "./Card.module.css"
import { Link } from "react-router-dom";



export default function Card(props) {
   return (
      <div className={styles.contenedor}>
         <div className={styles.boton}>
         <button 
         onClick={() => props.onClose()}></button>
         </div>
         <Link to={`/detail/${props.id}`}>
         <div>
         <img className={styles.image} src={props.image} alt={props.name} />
         </div>
         </Link>
         <div className={styles.divData}>
         <h2>{props.name}</h2>
         <br/>
         <div className={styles.characters}>
         <h6>{props.species}</h6>
         <h6>{props.gender}</h6>
         </div>
         </div>
      </div>
   );
}
