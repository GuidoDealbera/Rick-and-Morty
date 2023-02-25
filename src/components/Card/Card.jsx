import styles from "./Card/Card.module.css"
export default function Card(props) {
   return (
      <div className={styles.contenedor}>
         <div>
         <button 
         className={styles.boton}
         onClick={props.onClose}>X</button>
         </div>
         <div className={styles.divData}>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         </div>
         <img className={styles.image} src={props.image} alt={props.name} />
      </div>
   );
}
