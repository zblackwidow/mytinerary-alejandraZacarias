import React from "react";
// import Citis from "./Citis";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Carrousel from "../Components/Carrousel";

export default function Home() {
  return (
    <>
      <header><NavBar /></header>
      <main className="bg-color4" >
       <div className="h-96 bg-color3" > <h1>AQUI VA A IR EL HERO con el call to accion</h1></div> 
       <p>divisor</p>
    <Carrousel></Carrousel>
        <p>divisor</p>
        <div className="h-96 bg-red-400"><p>who we are </p></div>

      </main>
      <Footer></Footer>
    </>
  );
}

// Hero/Welcome:
// Presentar el nombre de la app MyTinerary y el eslogan: "Find your perfect trip, designed by insiders who know and love their cities!" de manera estética y destacada.
// Call to Action:
// Incluir un call to action llamativo que invite al usuario a acceder a la página de Cities, utilizando un icono y una frase, complementado con imágenes o animaciones para hacerlo atractivo.

