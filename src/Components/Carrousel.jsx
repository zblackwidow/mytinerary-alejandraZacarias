import React from "react";
import Slice from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Carrousel() {
    const settings ={
        accessibility:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]  

    };
    // auto play
    // autoplay: true,
    // autoplaySpeed: 3000,
  return (
    <> <div className="w-3/4 m-auto">
       <div className="mt-20">
        <Slice {...settings}>
        {images.map((d)=> (
            <>
            <div  className=" bg-color1 h-[450px] text-black rounded-xl">
                <div className="rounded-t-xl flex justify-center bg-violet-500items-center">
                    <img src={d.url} alt={d.name} className="h-96 w-96 rounded-lg" />
                </div>
            </div>
            <div>
                <div className="flex flex-col justify-center items-center gap-4 p-4 bg-yellow-300 ">
                    <p className="text-xl font-semibold">{d.city}</p>
                    <p>{d.descripcion}</p>
                    <button className="bg-slate-900 text-white text-lg px-6 py1 rounded-xl">Go</button>
                </div>
            </div>
            </>
        ))}
        </Slice>
        </div> 
    </div>
    </>
  );
}
// recorrer y mostras las imagenes de los objetos dentro del array
// {d.urls.map((url, imgIndex) => (
//     <img key={imgIndex} src={url} alt={`${d.city} Image ${imgIndex + 1}`} className="h-96 w-96 rounded-lg m-2" />
// ))}


const images = [
    {
      "name": "Tokio, Japón",
      "url": "https://imgs.search.brave.com/hMYOlfQGpyRDEzoM6pGlqgz0aih1Srdn7bSUpgK9mZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXNp/emVyLmdsYW5hY2lv/bi5jb20vcmVzaXpl/ci92Mi9sYS1jaXVk/YWQtZGUtYnVlbm9z/LWFpcmVzLWVuLTEw/MC1hbm9zLWRlLWFj/dWVyZG8tNk01NzZW/N1RJQkRUTFA2U0lZ/VUJZVkdUSkkuamZp/Zj9hdXRoPWY5MDE5/YWJjMjc4YTg2MmM1/MDgwOGQ3ZjQwZjNi/ZGExYTFmM2YzZGM2/NGM4NWJkMDIzZDY2/ODlmYTMyOTFjODEm/d2lkdGg9NDIwJmhl/aWdodD00MjAmcXVh/bGl0eT03MCZzbWFy/dD10cnVl",
      "descripcion": "Una metrópoli vibrante que combina tradición y modernidad, famosa por su gastronomía, tecnología y cultura pop."
    },
    {
      "name": "Barcelona, España",
      "url": "https://imgs.search.brave.com/hMYOlfQGpyRDEzoM6pGlqgz0aih1Srdn7bSUpgK9mZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXNp/emVyLmdsYW5hY2lv/bi5jb20vcmVzaXpl/ci92Mi9sYS1jaXVk/YWQtZGUtYnVlbm9z/LWFpcmVzLWVuLTEw/MC1hbm9zLWRlLWFj/dWVyZG8tNk01NzZW/N1RJQkRUTFA2U0lZ/VUJZVkdUSkkuamZp/Zj9hdXRoPWY5MDE5/YWJjMjc4YTg2MmM1/MDgwOGQ3ZjQwZjNi/ZGExYTFmM2YzZGM2/NGM4NWJkMDIzZDY2/ODlmYTMyOTFjODEm/d2lkdGg9NDIwJmhl/aWdodD00MjAmcXVh/bGl0eT03MCZzbWFy/dD10cnVl",
      "descripcion": "Conocida por su arquitectura única de Gaudí, playas y una rica vida cultural y gastronómica."
    },
    {
      "name": "Nueva York, EE.UU.",
      "url": "https://imgs.search.brave.com/hMYOlfQGpyRDEzoM6pGlqgz0aih1Srdn7bSUpgK9mZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXNp/emVyLmdsYW5hY2lv/bi5jb20vcmVzaXpl/ci92Mi9sYS1jaXVk/YWQtZGUtYnVlbm9z/LWFpcmVzLWVuLTEw/MC1hbm9zLWRlLWFj/dWVyZG8tNk01NzZW/N1RJQkRUTFA2U0lZ/VUJZVkdUSkkuamZp/Zj9hdXRoPWY5MDE5/YWJjMjc4YTg2MmM1/MDgwOGQ3ZjQwZjNi/ZGExYTFmM2YzZGM2/NGM4NWJkMDIzZDY2/ODlmYTMyOTFjODEm/d2lkdGg9NDIwJmhl/aWdodD00MjAmcXVh/bGl0eT03MCZzbWFy/dD10cnVl",
      "descripcion": "La ciudad que nunca duerme, famosa por sus rascacielos, Broadway, museos y diversidad cultural."
    },
    {
      "name": "París, Francia",
      "url": "https://imgs.search.brave.com/hMYOlfQGpyRDEzoM6pGlqgz0aih1Srdn7bSUpgK9mZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXNp/emVyLmdsYW5hY2lv/bi5jb20vcmVzaXpl/ci92Mi9sYS1jaXVk/YWQtZGUtYnVlbm9z/LWFpcmVzLWVuLTEw/MC1hbm9zLWRlLWFj/dWVyZG8tNk01NzZW/N1RJQkRUTFA2U0lZ/VUJZVkdUSkkuamZp/Zj9hdXRoPWY5MDE5/YWJjMjc4YTg2MmM1/MDgwOGQ3ZjQwZjNi/ZGExYTFmM2YzZGM2/NGM4NWJkMDIzZDY2/ODlmYTMyOTFjODEm/d2lkdGg9NDIwJmhl/aWdodD00MjAmcXVh/bGl0eT03MCZzbWFy/dD10cnVl",
      "descripcion": "La ciudad del amor, conocida por sus monumentos icónicos, arte y exquisita gastronomía."
    },
    {
      "name": "Sídney, Australia",
      "url": "https://imgs.search.brave.com/hMYOlfQGpyRDEzoM6pGlqgz0aih1Srdn7bSUpgK9mZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXNp/emVyLmdsYW5hY2lv/bi5jb20vcmVzaXpl/ci92Mi9sYS1jaXVk/YWQtZGUtYnVlbm9z/LWFpcmVzLWVuLTEw/MC1hbm9zLWRlLWFj/dWVyZG8tNk01NzZW/N1RJQkRUTFA2U0lZ/VUJZVkdUSkkuamZp/Zj9hdXRoPWY5MDE5/YWJjMjc4YTg2MmM1/MDgwOGQ3ZjQwZjNi/ZGExYTFmM2YzZGM2/NGM4NWJkMDIzZDY2/ODlmYTMyOTFjODEm/d2lkdGg9NDIwJmhl/aWdodD00MjAmcXVh/bGl0eT03MCZzbWFy/dD10cnVl",
      "descripcion": "Famosa por su Ópera y hermosas playas, Sídney ofrece una mezcla de naturaleza y vida urbana."
    },
    {
      "name": "Kioto, Japón",
      "url": "https://imgs.search.brave.com/hMYOlfQGpyRDEzoM6pGlqgz0aih1Srdn7bSUpgK9mZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXNp/emVyLmdsYW5hY2lv/bi5jb20vcmVzaXpl/ci92Mi9sYS1jaXVk/YWQtZGUtYnVlbm9z/LWFpcmVzLWVuLTEw/MC1hbm9zLWRlLWFj/dWVyZG8tNk01NzZW/N1RJQkRUTFA2U0lZ/VUJZVkdUSkkuamZp/Zj9hdXRoPWY5MDE5/YWJjMjc4YTg2MmM1/MDgwOGQ3ZjQwZjNi/ZGExYTFmM2YzZGM2/NGM4NWJkMDIzZDY2/ODlmYTMyOTFjODEm/d2lkdGg9NDIwJmhl/aWdodD00MjAmcXVh/bGl0eT03MCZzbWFy/dD10cnVl",
      "descripcion": "Una ciudad histórica conocida por sus templos, jardines tradicionales y cultura japonesa."
    },
    {
      "name": "Cape Town, Sudáfrica",
      "url": "https://imgs.search.brave.com/hMYOlfQGpyRDEzoM6pGlqgz0aih1Srdn7bSUpgK9mZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXNp/emVyLmdsYW5hY2lv/bi5jb20vcmVzaXpl/ci92Mi9sYS1jaXVk/YWQtZGUtYnVlbm9z/LWFpcmVzLWVuLTEw/MC1hbm9zLWRlLWFj/dWVyZG8tNk01NzZW/N1RJQkRUTFA2U0lZ/VUJZVkdUSkkuamZp/Zj9hdXRoPWY5MDE5/YWJjMjc4YTg2MmM1/MDgwOGQ3ZjQwZjNi/ZGExYTFmM2YzZGM2/NGM4NWJkMDIzZDY2/ODlmYTMyOTFjODEm/d2lkdGg9NDIwJmhl/aWdodD00MjAmcXVh/bGl0eT03MCZzbWFy/dD10cnVl",
      "descripcion": "Con vistas impresionantes de la montaña de la Mesa, ofrece una mezcla de historia, cultura y naturaleza."
    },
    {
      "name": "Reykjavik, Islandia",
      "url": "https://imgs.search.brave.com/hMYOlfQGpyRDEzoM6pGlqgz0aih1Srdn7bSUpgK9mZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXNp/emVyLmdsYW5hY2lv/bi5jb20vcmVzaXpl/ci92Mi9sYS1jaXVk/YWQtZGUtYnVlbm9z/LWFpcmVzLWVuLTEw/MC1hbm9zLWRlLWFj/dWVyZG8tNk01NzZW/N1RJQkRUTFA2U0lZ/VUJZVkdUSkkuamZp/Zj9hdXRoPWY5MDE5/YWJjMjc4YTg2MmM1/MDgwOGQ3ZjQwZjNi/ZGExYTFmM2YzZGM2/NGM4NWJkMDIzZDY2/ODlmYTMyOTFjODEm/d2lkdGg9NDIwJmhl/aWdodD00MjAmcXVh/bGl0eT03MCZzbWFy/dD10cnVl",
      "descripcion": "La capital más septentrional del mundo, famosa por sus paisajes naturales y cultura vibrante."
    },
    {
      "name": "Lima, Perú",
      "url": "https://imgs.search.brave.com/hMYOlfQGpyRDEzoM6pGlqgz0aih1Srdn7bSUpgK9mZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXNp/emVyLmdsYW5hY2lv/bi5jb20vcmVzaXpl/ci92Mi9sYS1jaXVk/YWQtZGUtYnVlbm9z/LWFpcmVzLWVuLTEw/MC1hbm9zLWRlLWFj/dWVyZG8tNk01NzZW/N1RJQkRUTFA2U0lZ/VUJZVkdUSkkuamZp/Zj9hdXRoPWY5MDE5/YWJjMjc4YTg2MmM1/MDgwOGQ3ZjQwZjNi/ZGExYTFmM2YzZGM2/NGM4NWJkMDIzZDY2/ODlmYTMyOTFjODEm/d2lkdGg9NDIwJmhl/aWdodD00MjAmcXVh/bGl0eT03MCZzbWFy/dD10cnVl",
      "descripcion": "Conocida por su gastronomía de clase mundial y rica historia colonial."
    },
    {
      "name": "Berlín, Alemania",
      "url": "https://imgs.search.brave.com/hMYOlfQGpyRDEzoM6pGlqgz0aih1Srdn7bSUpgK9mZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXNp/emVyLmdsYW5hY2lv/bi5jb20vcmVzaXpl/ci92Mi9sYS1jaXVk/YWQtZGUtYnVlbm9z/LWFpcmVzLWVuLTEw/MC1hbm9zLWRlLWFj/dWVyZG8tNk01NzZW/N1RJQkRUTFA2U0lZ/VUJZVkdUSkkuamZp/Zj9hdXRoPWY5MDE5/YWJjMjc4YTg2MmM1/MDgwOGQ3ZjQwZjNi/ZGExYTFmM2YzZGM2/NGM4NWJkMDIzZDY2/ODlmYTMyOTFjODEm/d2lkdGg9NDIwJmhl/aWdodD00MjAmcXVh/bGl0eT03MCZzbWFy/dD10cnVl",
      "descripcion": "Una ciudad con una rica historia, arte contemporáneo y una vibrante vida nocturna."
    },
    {
      "name": "Copenhague, Dinamarca",
      "url": "https://imgs.search.brave.com/hMYOlfQGpyRDEzoM6pGlqgz0aih1Srdn7bSUpgK9mZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXNp/emVyLmdsYW5hY2lv/bi5jb20vcmVzaXpl/ci92Mi9sYS1jaXVk/YWQtZGUtYnVlbm9z/LWFpcmVzLWVuLTEw/MC1hbm9zLWRlLWFj/dWVyZG8tNk01NzZW/N1RJQkRUTFA2U0lZ/VUJZVkdUSkkuamZp/Zj9hdXRoPWY5MDE5/YWJjMjc4YTg2MmM1/MDgwOGQ3ZjQwZjNi/ZGExYTFmM2YzZGM2/NGM4NWJkMDIzZDY2/ODlmYTMyOTFjODEm/d2lkdGg9NDIwJmhl/aWdodD00MjAmcXVh/bGl0eT03MCZzbWFy/dD10cnVl",
      "descripcion": "Conocida por su diseño escandinavo, canales y ambiente acogedor."
    },
    {
      "name": "Buenos Aires, Argentina",
      "url": "https://imgs.search.brave.com/hMYOlfQGpyRDEzoM6pGlqgz0aih1Srdn7bSUpgK9mZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXNp/emVyLmdsYW5hY2lv/bi5jb20vcmVzaXpl/ci92Mi9sYS1jaXVk/YWQtZGUtYnVlbm9z/LWFpcmVzLWVuLTEw/MC1hbm9zLWRlLWFj/dWVyZG8tNk01NzZW/N1RJQkRUTFA2U0lZ/VUJZVkdUSkkuamZp/Zj9hdXRoPWY5MDE5/YWJjMjc4YTg2MmM1/MDgwOGQ3ZjQwZjNi/ZGExYTFmM2YzZGM2/NGM4NWJkMDIzZDY2/ODlmYTMyOTFjODEm/d2lkdGg9NDIwJmhl/aWdodD00MjAmcXVh/bGl0eT03MCZzbWFy/dD10cnVl",
      "descripcion": "Famosa por su cultura del tango, arquitectura europea y deliciosa gastronomía."
    }
  ]
  

// Carrusel:
// Incluir un carrusel que cambie las slides de forma automática y manual, con el título "Popular Mytineraries".
// El carrusel debe tener 3 slides con 4 fotos cada una, mostrando un total de 12 ciudades del mundo, con su name indicado en inglés.
// Aunque la información puede estar hardcodeada, el renderizado de las slides debe ser dinámico (el código no debe estar hardcodeado para mostrar las fotos en las slides)
