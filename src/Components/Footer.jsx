import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="h-auto flex justify-between  bg-gradient-to-r from-slate-900 to-slate-900 text-white">
        <div className="ml-4 mt-4">
          <p className="text-xl text-slate-800 font-bold">MyTinerary <br /> © 2024</p>
        </div>
        <div className="m-6 text-slate-600 flex flex-col items-end">
          <h2>Redes</h2>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </footer>
     
    </>
  );
}

// Footer:
// Recapitular la información del sitio e incluir un menú de navegación adicional, así como cualquier otra información relevante (dirección, redes sociales, mapa, etc.).
