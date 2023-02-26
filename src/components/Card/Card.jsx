import styles from "./Card.module.css"
export default function Card(props) {
   return (
      <div className={styles.contenedor}>
         <div className={styles.boton}>
         <button 
         onClick={props.onClose}>X</button>
         </div>
         
         <div>
         <img className={styles.image} src={props.image} alt={props.name} />
         </div>
         <div className={styles.divData}>
         <h2>{props.name}</h2>
         <h6>{props.species}</h6>
         <h6>{props.gender}</h6>
         </div>
      </div>
   );
}
