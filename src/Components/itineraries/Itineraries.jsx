// import { Link } from 'react-router-dom';

// function ItineraryList({ itineraries }) {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {itineraries.map(itinerary => (
//                 <div key={itinerary._id} className="border p-4 rounded shadow-lg bg-white">
//                     <img src={itinerary.Image} alt={itinerary.name} className="w-full h-48 object-cover rounded-md mb-4" />
//                     <h2 className="text-xl font-semibold mb-2">{itinerary.name}</h2>
//                     <p className="text-gray-600 mb-2">{itinerary.description}</p>
//                     <p className="text-gray-500 mb-4">Price: {itinerary.price} {itinerary.currency}</p>
//                     <Link to={`/itineraries/${itinerary._id}`} className="text-blue-500 hover:underline">
//                         View Details
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default ItineraryList;
