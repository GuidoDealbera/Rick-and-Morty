import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";
import { Menu, X } from "react-feather";

export default function NavBar(props) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex justify-between items-center px-4 py-4 bg-gray-900/60 border-b-2 border-lime-400">
      <div
        className={`z-[999] sm:hidden text-[#adff2f]`}
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? (
          <X size={30} />
        ) : (
          <Menu size={30} />
        )}
      </div>
      <div
        className={`sm:hidden text-gray-900 absolute z-[99] w-60 h-screen bg-gray-900/90 top-0 duration-300 ${
          showMenu ? "left-0" : "left-[-100%]"
        }`}
      >
        <ul className="flex flex-col justify-start pt-28 items-center h-full text-lg">
        <NavLink to="/" className='w-full'>
          <li onClick={() => setShowMenu(false)} className="border-b-2 border-t-2 border-[#adff2f] p-2 w-full bg-transparent text-center text-[#adff2f] hover:text-gray-900 hover:bg-[#adff2f] font-medium">
          <button className="">
            LogOut
          </button>
          </li>
        </NavLink>
          <NavLink to="/home" className='w-full'>
          <li onClick={() => setTimeout(()=> setShowMenu(false), 300)} className="border-b-2 border-[#adff2f] p-2 w-full bg-transparent text-center text-[#adff2f] hover:text-gray-900 hover:bg-[#adff2f] font-medium">
          <button className="">
            Home
          </button>
          </li>
        </NavLink>
        <NavLink to="/favorites" className='w-full'>
          <li onClick={() => setTimeout(()=> setShowMenu(false), 300)} className="border-b-2  border-[#adff2f] p-2 w-full bg-transparent text-center text-[#adff2f] hover:text-gray-900 hover:bg-[#adff2f] font-medium">
          <button className="">
            Favorites ❤
          </button>
          </li>
        </NavLink>
        </ul>
      </div>
      <NavLink to="/" className="hidden sm:block">
        <button className="bg-[#adff2f] py-1 px-2 rounded-full font-medium hover:bg-lime-400 shadow-md shadow-lime-300 active:shadow-none">
          LogOut
        </button>
      </NavLink>
      <div className="flex gap-8">
        <NavLink to="/home" className="hidden sm:block">
          <button className="bg-[#adff2f] py-1 px-2 rounded-full font-medium hover:bg-lime-400 shadow-md shadow-lime-300 active:shadow-none">
            Home
          </button>
        </NavLink>
        <NavLink to="/favorites" className="hidden sm:block">
          <button className="bg-[#adff2f] py-1 px-2 rounded-full font-medium hover:bg-lime-400 shadow-md shadow-lime-300 active:shadow-none">
            Favorites ❤
          </button>
        </NavLink>
      </div>

      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
