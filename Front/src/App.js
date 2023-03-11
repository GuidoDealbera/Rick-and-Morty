import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"; //HICE UN CAMBIO ACÁ
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

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

  const URL_BASE = "https://be-a-rym.up.railway.app/api";
  const API_KEY = "dcfc10d73e5d.2a52928cb7f6acd5e30a";

  function onSearch(id) {
    fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let existe = characters.find((e) => e.id === data.id);
          if (existe) {
            alert("Personaje ya existente");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  const onClose = (id) => {
    setCharacters((data) => {
      return data.filter((evento) => evento.id !== id);
    });
  };
  const location = useLocation();

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>{location.pathname !== "/" && <NavBar onSearch={onSearch} />}</div>
      <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
