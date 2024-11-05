import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const routes = [
  { to: "/", text: "Home" },
  { to: "/cities", text: "Cities" },
  { to: "/itineraries", text: "Itineraries" }
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className=" text-lg h-[9vh] flex justify-around text-white items-center  ">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="w-10"
              src="https://cdn-icons-png.flaticon.com/512/826/826070.png"
              alt="planet and world"
            />
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden w-auto flex flex-col justify-between  items-center focus:outline-none"
        >
          <div className="h-1 w-5 bg-white mb-1"></div>
          <div className="h-1 w-5 bg-white mb-1"></div>
          <div className="h-1 w-5 bg-white mb-1"></div>
        </button>
        <div
          className={`absolute w-full text-xl bg-black h-[22vh] bg-opacity-80 transition-transform ${
            isOpen ? "translate-y-36" : "-translate-y-full"
          } md:hidden`}
        >
          <ul className="flex items-center flex-col text-white h-auto">
            {routes.map((route, index) => (
              <li
                className="hover:border-b-2 hover:px-8 h-[5vh] p-4  hover:text-pink-400"
                key={index}
              >
                <NavLink
                  to={route.to}
                  className={({ isActive }) =>
                    isActive ? "text-pink-400" : "hover:text-pink-400"
                  }
                >
                  {route.text}
                </NavLink>
              </li>
            ))}
            <li className="py-4 hover:border-b-2 hover:px-8 hover:text-pink-300 ">
              <Link to="/">Login</Link>
            </li>
          </ul>
        </div>
        <ul className="flex max-[740px]:hidden font-serif gap-6 text-white text-xl items-center">
          {routes.map((route, index) => (
            <li className="hover:text-pink-400" key={index}>
              <NavLink
                to={route.to}
                className={({ isActive }) =>
                  isActive ? "text-pink-400" : "hover:text-pink-400 "
                }
              >
                {route.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="flex max-[740px]:hidden justify-between w-28 items-center hover:brightness-90 rounded-3xl">
          <img
            className="w-10"
            src="https://cdn-icons-png.flaticon.com/512/15218/15218567.png"
            alt="login icon"
          />
          <Link to="/">Login</Link>
        </button>
      </nav>
    </>
  );
}
