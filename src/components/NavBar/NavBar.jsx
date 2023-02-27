import React from 'react'
import SearchBar from '../SearchBar/SearchBar.jsx'
import style from './NavBar.module.css'

export default function NavBar(props){
    return (
        <div className={style.barra}>
            <div>
            <button>Home</button> <button>Filter</button>
            </div>
            <SearchBar onSearch= {props.onSearch}/>
            
        </div>
    );
};
