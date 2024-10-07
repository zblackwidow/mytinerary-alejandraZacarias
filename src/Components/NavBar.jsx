import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const routes = [
  { to: "/", text: "Home" },
  { to: "/cities", text: "Cities" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-transparent text-lg h-[9vh] flex justify-around text-white items-center">
        <div className="flex items-center">
          <a href="#">
            <img
              className="w-10"
              src="https://cdn-icons-png.flaticon.com/512/826/826070.png"
              alt="planet and world"
            />
          </a>
        </div>
        {/* Hamburger menu */}
        <button
          onClick={toggleMenu}
          className="md:hidden w-auto flex flex-col justify-between  items-center focus:outline-none"
        >
          <div className="h-1 w-5 bg-white mb-1"></div>
          <div className="h-1 w-5 bg-white mb-1"></div>
          <div className="h-1 w-5 bg-white mb-1"></div>
        </button>

        {/* Menú desplegable */}
        <div
          className={`absolute w-full text-xl bg-black bg-opacity-30 transition-transform ${
            isOpen ? "translate-y-28" : "-translate-y-full"
          } md:hidden`}
        >
          <ul className="flex items-center flex-col text-white p-4">
            {routes.map((route, index) => (
              <li className="hover:border-2 hover:px-8 p-2 hover:text-pink-400" key={index}>
                <NavLink to={route.to} className={({ isActive }) => (isActive ? 'text-pink-400' : 'hover:text-pink-400')}>{route.text}</NavLink>
              </li>
            ))}
            <li className="py-2 hover:border-2 hover:px-8 hover:text-pink-400">
              <a href="#">Login</a>
            </li> 
          </ul>
        </div>
        <ul className="flex max-[740px]:hidden font-serif gap-6 text-white items-center">
        
        {routes.map((route, index) => (
              <li className="hover:text-pink-400" key={index}>
                <NavLink to={route.to} className={({ isActive }) => (isActive ? 'text-pink-400' : 'hover:text-pink-400 ')}>{route.text}</NavLink>
              </li>
            ))}

        </ul>
        <button className="flex max-[740px]:hidden justify-between w-28 items-center hover:brightness-90 rounded-3xl">
          <img
            className="w-10"
            src="https://cdn-icons-png.flaticon.com/512/15218/15218567.png"
            alt="login icon"
          />
          <a href="#">Login</a>
        </button>
      </nav>
    </>
  );
}
