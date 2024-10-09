import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="h-[40vh] text-white bg-slate-950">
        {/* flex-col flex md:flex-row justify-around items-center */}
        <div
          id="contendorPadre"
          className="flex flex-col h-auto md:flex-row border-2 border-red-500"
        >
          <div id="pages" className="border-2 w-1/3 h-3/5 border-red-500">
            <h3>My Tinerary</h3>
            <ul>
              <li className="hover:text-pink-400">
                <Link to="/cities">Cities</Link>
              </li>
              <li className="hover:text-pink-400">
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
          <div id="contacto" className="border-2 w-1/3 border-red-500">
            <h3>Contact US</h3>
            <ul>
              <li>
                <a href="mailto:mytinerary@gmail.com">
                  mytinerary@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+5622222222">+56 22 222 222</a>
              </li>
              <li>
                Adress <br />
                <a href="https://www.google.com">
                  Houston , 1588, Texas, EEUU
                </a>
              </li>
            </ul>
          </div>
          <div id="map" className="border-2 w-1/3 border-red-500">
            <p>askdnkasndkasnkns</p>
          </div>
        </div>
        <div id="redes" className=" border-2 border-red-500 w-auto h-28">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi
            officiis dolores dignissimos deleniti voluptatum minus ad. Sequi
            voluptatum impedit sit recusandae, quibusdam incidunt aspernatur
            provident dolores iusto omnis velit?
          </p>
        </div>
      </footer>
    </>
  );
}

{
  /* <div>
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
</div> */
}
