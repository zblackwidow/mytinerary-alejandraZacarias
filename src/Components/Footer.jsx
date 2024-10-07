
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <>
      <footer className="h-[40vh] flex-col flex md:flex-row justify-around items-center  bg-slate-950 text-slate-400">
        <div>
          <p className="text-xl font-bold md:m-0 mb-8 text-white">MyTinerary</p>
          <ul className="flex gap-8 text-xl ">
            <li className="hover:text-pink-400">
            <Link to="/cities">Cities</Link>
            </li>
            <li className="hover:text-pink-400">
              <Link  to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-bold">Follow us</p>
          <ul className="flex gap-4 text-xl">
            <li className="hover:text-pink-400">
              <Link to="/">Instagram</Link>
            </li>
            <li className="hover:text-pink-400">
             <Link to="/">Facebook</Link>
            </li>
            <li className="hover:text-pink-400">
              <Link to="/">Twitter</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

// Footer:
// Recapitular la información del sitio e incluir un menú de navegación adicional, así como cualquier otra información relevante (dirección, redes sociales, mapa, etc.).
