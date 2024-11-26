import { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext"; 

const routes = [
  { to: "/", text: "Home" },
  { to: "/cities", text: "Cities" }
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContext(UserContext); 
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <nav className="text-lg bg-transparent h-[9vh] flex justify-between items-center px-10 text-white">
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
          className="md:hidden w-auto flex flex-col justify-between items-center focus:outline-none"
        >
          <div className="h-1 w-5 bg-white mb-1"></div>
          <div className="h-1 w-5 bg-white mb-1"></div>
          <div className="h-1 w-5 bg-white mb-1"></div>
        </button>
        <div
          className={`absolute w-full text-xl bg-black h-[22vh] bg-opacity-80 transition-transform ${isOpen ? "translate-y-36" : "-translate-y-full"
            } md:hidden`}
        >
          <ul className="flex flex-col items-center text-white h-auto">
            {routes.map((route, index) => (
              <li
                className="hover:border-b-2 hover:px-8 h-[5vh] p-4 hover:text-pink-400"
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
            {!user && (
              <>
                <li className="py-4 hover:border-b-2 hover:px-8 hover:text-pink-300">
                  <Link to="/signin">Login</Link>
                </li>
                <li className="py-4 hover:border-b-2 hover:px-8 hover:text-pink-300">
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
            {user && (
              <li className="py-4 hover:border-b-2 hover:px-8 hover:text-pink-300">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src={user.photo}
                    alt={user.name}
                  />
                  <span>{user.name}</span>
                  <button
                    onClick={handleSignOut}
                    className="ml-4 bg-red-500 text-white rounded px-2 py-1"
                  >
                    Sign Out
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
        <ul className="flex justify-center items-center gap-6 text-white text-xl">
          {routes.map((route, index) => (
            <li className="hover:text-pink-400" key={index}>
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
          {!user && (
            <li className="hover:text-pink-400">
              <Link to="/register">Register</Link>
            </li>
          )}
        </ul>
        <div className="flex items-center justify-between max-[740px]:hidden">
          {user ? (
            <div className="flex items-center">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src={user.photo}
                alt={user.name}
              />
              <span>{user.name}</span>
              <button
                onClick={handleSignOut}
                className="ml-4 bg-red-500 text-white rounded px-2 py-1"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <img
                className="w-10 mr-4"
                src="https://cdn-icons-png.flaticon.com/512/15218/15218567.png"
                alt="login icon"
              />
              <Link to="/signin">Login</Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
