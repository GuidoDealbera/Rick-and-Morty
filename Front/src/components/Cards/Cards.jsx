import styles from "./Cards.module.css"
import Card from '../Card/Card.jsx';

export default function Cards(props) {
   const { characters } = props;
   return (
   <div className={styles.contenedor}>
      {characters.map((elemento) => {
         return <Card 
         id={elemento.id}
         key={elemento.id}
         name={elemento.name} 
         species={elemento.species} 
         gender={elemento.gender} 
         image={elemento.image} 
         onClose={() => props.onClose(elemento.id)}/>
      })}
   </div>
   );
}
