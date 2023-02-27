import React from 'react'
import SearchBar from '../SearchBar/SearchBar.jsx'
import style from './NavBar.module.css'
import { NavLink } from 'react-router-dom';

export default function NavBar(props){
    return (
        <div className={style.barra}>
            
            <NavLink to="/home">
            <button>Home</button>
            </NavLink>
            <NavLink to="/about">
            <button>About</button>
            </NavLink>
            
            <SearchBar onSearch= {props.onSearch}/>
            
        </div>
    );
};
