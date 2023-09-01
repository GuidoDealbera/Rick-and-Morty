import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div className='flex justify-around py-4 bg-gray-900/60 border-b-2 border-lime-400'>
      <NavLink to="/">
        <button className="bg-[#adff2f] py-1 px-2 rounded-full font-medium hover:bg-lime-400 shadow-md shadow-lime-300 active:shadow-none">LogOut</button>
      </NavLink>
      <div className="flex gap-8">
      <NavLink to="/home">
        <button className="bg-[#adff2f] py-1 px-2 rounded-full font-medium hover:bg-lime-400 shadow-md shadow-lime-300 active:shadow-none">Home</button>
      </NavLink>
      <NavLink to="/favorites">
        <button className="bg-[#adff2f] py-1 px-2 rounded-full font-medium hover:bg-lime-400 shadow-md shadow-lime-300 active:shadow-none">Favorites ❤</button>
      </NavLink>

      </div>


      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
