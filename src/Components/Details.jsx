import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from '../Components/Loading';

function CityDetail() {
  const { id } = useParams(); // Obtenemos el id desde los parámetros de la URL
  const [city, setCity] = useState(null);
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const cityResponse = await axios.get(`http://localhost:5050/api/cities/id/${id}`);
        const city = cityResponse.data.res;
        setCity(city);
  
        const itinerariesResponse = await axios.get(`http://localhost:5050/api/itinerary/all`);
        const allItineraries = itinerariesResponse.data.res;
        const cityItineraries = allItineraries.filter(itinerary => itinerary.city === city.name);
        setItineraries(cityItineraries);
      } catch (error) {
        console.error("Error al cargar la ciudad o los itinerarios:", error);
      }
    };
  
    fetchCityData();
  }, [id]);

  if (!city) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex md:w-1/4 m-6 flex-col items-center bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
        <img src={city.image} alt={city.name} className="w-full h-64 object-cover rounded-t-lg" />
        <h1 className="text-4xl font-bold mt-4 text-gray-900">{city.name}</h1>
        <div className="text-gray-500">
          <p>{city.descripcion}</p>
          <p><strong>Population:</strong> {city.population}</p>
          <p><strong>Currency:</strong> {city.currency}</p>
          <p><strong>Languages:</strong> {city.languages}</p>
          <p><strong>Itineraries:</strong> {city.itineraries}</p>
        </div>
      </div>
      <div className="flex justify-center items-center bg-white md:w-1/4 w-4/4 mt-6 mb-3">
        {itineraries.length === 0 ? (
          <div className='h-[10vh] flex items-center'> <p>No itineraries available for this city.</p></div>
        ) : (
          <div className=" ">	
            {itineraries.map(itinerary => (
              <div key={itinerary.id} className="mb-4 p-5">
                <h3 className="text-xl font-semibold">{itinerary.name}</h3>
                <img src={itinerary.image} alt={itinerary.name} className="w-full h-48 object-cover rounded-lg mb-2" />
                <p>{itinerary.description}</p>
                <p><strong>Price: </strong><img src="https://img.icons8.com/?size=100&id=gocRNuXaqnqs&format=png&color=000000" alt="icon price" className="w-4 h-4 inline-block align-middle"/> {itinerary.price} {itinerary.currency}</p>
                <p><strong>Duration:</strong> {itinerary.duration} hours</p>
                <p><strong>Hashtags:</strong> {itinerary.hashtags}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default CityDetail;
