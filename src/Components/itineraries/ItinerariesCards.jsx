import { useEffect, useState } from 'react';
import axios from 'axios';

function ItineraryList() {
    const [itineraries, setItineraries] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5050/api/itinerary/all')
            .then(response => {
                setItineraries(response.data.res); // Asume que los itinerarios están en response.data.res
            })
            .catch(error => {
                console.error("Error al cargar los itinerarios:", error);
            });
    }, []);

    return (
       
        <div >
           
            {itineraries.length > 0 ? (
                <div className='flex flex-wrap justify-center'>
                    {itineraries.map(itinerary => (
                         <div className="max-w-sm md:w-[30vw] mt-4 rounded overflow-hidden shadow-lg bg-white bg-opacity-80 mx-auto" key={itinerary._id}>
                            <img src={itinerary.Image} alt={itinerary.name} className="w-full h-48 object-cover"  />
                            <div className="px-6 py-4">
                            <h2 className='text-xl font-semibold'>{itinerary.name}</h2>
                            <p>{itinerary.description}</p>
                            <p>City: {itinerary.city}</p>
                            <p>Duration: {itinerary.duration} hours</p>
                            
                            </div>
                          
                        </div>
                    ))}
                </div>
            ) : (
                <p>Charging itineraries...</p>
            )}
        </div>
    );
}

export default ItineraryList;
