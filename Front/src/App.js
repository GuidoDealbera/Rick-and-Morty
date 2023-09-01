import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"; //HICE UN CAMBIO ACÁ
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";
//import { deleteFavorite } from "./redux/actions";
//import { useDispatch } from "react-redux";
axios.defaults.baseURL = "http://localhost:3001/rickandmorty/"
function App() {
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "guidojdealbera@gmail.com";
  const password = "gjd1995cv.";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = (character) => {
    let arrId = characters.map(e => e.id)
    if (!arrId.includes(character*1)){
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.name)
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          navigate('/home')
       }
    }).catch(()=>{
      window.alert('No hay personajes con ese ID');
    });}
    else window.alert('Ese personaje ya esta en tu lista!')
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }
  const location = useLocation();

  return (
    <div>
      <div>{location.pathname !== "/" && <NavBar onSearch={onSearch} />}</div>
      <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
