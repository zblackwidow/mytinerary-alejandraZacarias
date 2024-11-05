// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function ItineraryList() {
//     const [itinerarios, setItinerarios] = useState([]);

//     useEffect(() => {
//         const fetchItinerarios = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5050/api/itinerary/id/${id} ');
//                 setItinerarios(response.data.res); 
//             } catch (error) {
//                 console.error("Error al cargar los itinerarios:", error);
//             }
//         };

//         fetchItinerarios();
//     }, []);

//     if (itinerarios.length === 0) {
//         return <p>No hay itinerarios disponibles.</p>;
//     }

//     return (
//         <div>
//             <h1 className="text-2xl font-bold">Lista de Todos los Itinerarios</h1>
//             <ul>
//                 {itinerarios.map(itinerario => (
//                     <li key={itinerario._id} className="border p-3 rounded mb-3 shadow">
//                         <h2 className="text-xl font-semibold">{itinerario.name}</h2>
//                         <p className="text-gray-700">{itinerario.descripcion}</p>
//                         <p><strong>Ciudad:</strong> {itinerario.city}</p>
                       
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default ItineraryList;
