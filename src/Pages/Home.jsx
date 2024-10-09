import Footer from "../Components/Footer";
import Carrousel from "../Components/Carrousel";
import Navbar from "../Components/NavBar";
import Space from "../Components/Space";
import Hero from "../Components/Hero";
import AboutUs from "../Components/AboutUs";

export default function Home() {
  return (
    <>
      <div className=" bg-no-repeat bg-cover bg-local bg-center h-[100vh] bg-[url('https://images.unsplash.com/photo-1499063078284-f78f7d89616a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <div className=" flex items-center justify-center">
      <div className=" bg-slate-600 w-[90%] h-auto rounded-b-3xl flex flex-col items-center justify-center mb-40">
        <Space></Space>
        <Carrousel></Carrousel>
        <Space></Space>
        <AboutUs></AboutUs>
      </div>
      </div>
      <Footer></Footer>
    </>
  );
}

// Hero/Welcome:
// Presentar el nombre de la app MyTinerary y el eslogan: "Find your perfect trip, designed by insiders who know and love their cities!" de manera estética y destacada.
// Call to Action:
// Incluir un call to action llamativo que invite al usuario a acceder a la página de Cities, utilizando un icono y una frase, complementado con imágenes o animaciones para hacerlo atractivo.
