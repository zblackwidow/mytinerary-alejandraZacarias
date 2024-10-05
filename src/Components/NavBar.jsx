import React from "react";

export default function NavBar() {
  return (
    <>
      <nav className="font-semibold bg-transparent text-lg pt-5 h-[7vh] flex justify-around text-white items-center">
        <div className="flex items-center">
          <img
            className="w-10"
            src="https://cdn-icons-png.flaticon.com/512/826/826070.png"
            alt="planet and world"
          />
        </div>
        <ul className="flex gap-6 ">
          <li className="hover:text-pink-400 ">Home</li>  
          <li className="hover:text-pink-400">Cities</li>
        </ul>
        <button className="flex justify-between w-28 items-center border-2 border-white hover:brightness-90 rounded-3xl">
          <img
            className="w-10"
            src="https://cdn-icons-png.flaticon.com/512/15218/15218567.png"
            alt="login icon"
          />
          <p className="pr-2">Login</p>
        </button>
      </nav>
      ;
    </>
  );
}

// https://cdn-icons-png.flaticon.com/512/15218/15218567.png
// https://cdn-icons-png.flaticon.com/512/6676/6676023.png
