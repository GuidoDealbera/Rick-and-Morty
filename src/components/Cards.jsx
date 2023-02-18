import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
   <div>
      {characters.map((elemento) => {
         return <Card name={elemento.name} species={elemento.species} gender={elemento.gender} image={elemento.image} onClose={() => window.alert('Emulamos que se cierra la card')}/>
      })}
   </div>
   );
}
