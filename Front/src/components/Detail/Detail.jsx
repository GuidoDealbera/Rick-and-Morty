import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail(props) {
  const [character, setCharacter] = useState({});
  //const URL_BASE = "https://be-a-rym.up.railway.app/api";
  //const API_KEY = "dcfc10d73e5d.2a52928cb7f6acd5e30a";
  const { detailId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className='flex flex-col h-[90vh] sm:flex-row gap-12 p-10 justify-center items-center'>
      <div className='min-w-6xl rounded-xl shadow-xl shadow-[#adff2f]'>
        <img src={character.image} alt={character.name} className="rounded-xl"/>
      </div>
      <div className='flex flex-col gap-4 border-b-2 border-r-2 sm:border-r-0 sm:border-l-2 border-[#adff2f] rounded-xl p-2'>
        <h1 className="bg-[#adff2f] py-1 px-4 w-fit bg-opacity-80 rounded-full sm:text-2xl text-xl uppercase font-bold">{character.name}</h1>
        <h4 className="flex items-center gap-2 bg-[#adff2f] pr-4 rounded-full"><span className="text-[#adff2f] bg-blue-900 py-1 px-4 rounded-full font-medium">SPECIE:</span> {character.species}</h4>
        <h4 className="flex items-center gap-2 bg-[#adff2f] pr-4 rounded-full"><span className="text-[#adff2f] bg-blue-900 py-1 px-4 rounded-full font-medium">GENDER:</span> {character.gender}</h4>
        <h4 className="flex items-center gap-2 bg-[#adff2f] pr-4 rounded-full"><span className="text-[#adff2f] bg-blue-900 py-1 px-4 rounded-full font-medium">STATUS:</span> {character.status}</h4>
        <h4 className="flex items-center gap-2 bg-[#adff2f] pr-4 rounded-full"><span className="text-[#adff2f] bg-blue-900 py-1 px-4 rounded-full font-medium">ORIGIN:</span> {character.origin?.name}</h4>
      </div>
    </div>
  );
}
