import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
function App () {
  const [characters, setCharacters] = useState([]);
  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name) {
        let existe=characters.find ((e)=> e.id === data.id)
        if(existe){
          alert('Personaje ya existente')
        }else{
          setCharacters((oldChars) => [...oldChars, data]);
        }
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
}

 const onClose = (id) => {
    setCharacters((data) => {
       return data.filter((evento) => evento.id !== id)
    })
 }
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <NavBar
        onSearch={onSearch}/>  
      </div>
      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="detail/:detailId" element={<Detail/>}/>
        {/* <Route path="/" element={<Login/>}/> */}
      </Routes>
    </div>

  )
}

export default App
