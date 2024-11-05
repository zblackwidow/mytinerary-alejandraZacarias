import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from '../Components/Loading';
import { Link } from 'react-router-dom';


function CityDetail() {
    const { id } = useParams(); // Obtenemos el id desde los parámetros de la URL
    const [city, setCity] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5050/api/cities/id/${id}`)
            .then(response => {
                setCity(response.data.res); // Asegúrate de que response.data.res contenga los datos de la ciudad
            })
            .catch(error => {
                console.error("Error al cargar la ciudad:", error);
            });
    }, [id]);

    if (!city) {
        return <Loading/>;
    }

    return (
        <div className="flex md:w-2/4 m-6 flex-col items-center bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
            <img src={city.image} alt={city.name} className="w-full h-64 object-cover rounded-t-lg" />
            <h1 className="text-4xl font-bold mt-4 text-gray-900">{city.name}</h1>
            <p className="text-gray-700 my-4">{city.descripsion}</p>
            
            <div className="text-gray-500">
                <p><strong>Población:</strong> {city.population}</p>
                <p><strong>Moneda:</strong> {city.currency}</p>
                <p><strong>Idiomas:</strong> {city.languages}</p>
            </div>
            <Link to={`/itinerary/id/${city._id}`} className="bg-slate-400 p-2 rounded text-white text-center">
                    Ver Itinerarios
                </Link>
        </div>
    );
}

export default CityDetail;
