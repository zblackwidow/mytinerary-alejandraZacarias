
export default function Footer() {
  return (
    <>
      <footer className="h-[40vh] flex-col flex md:flex-row md:justify-around justify-center items-center  bg-slate-950 text-slate-400">
        <div className="p-16">
          <p className="text-xl font-bold text-white">MyTinerary</p>
          <p className="text-lg ">
            Find your perfect trip, designed by insiders who know and love their
            cities!
          </p>
        </div>
        <div>
          <p className="text-xl font-bold">Follow us</p>
          <ul className="flex gap-4 text-xl">
            <li className="hover:text-pink-400">
              <a href="#">Instagram</a>
            </li>
            <li className="hover:text-pink-400">
              <a href="#">Facebook</a>
            </li>
            <li className="hover:text-pink-400">
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

// Footer:
// Recapitular la información del sitio e incluir un menú de navegación adicional, así como cualquier otra información relevante (dirección, redes sociales, mapa, etc.).
