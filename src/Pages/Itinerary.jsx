import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Itineraries() {
    const { id } = useParams(); // Obtén el ID de la ciudad desde la URL
    const [itinerarios, setItinerarios] = useState([]);

    useEffect(() => {
        const fetchItinerarios = async () => {
            try {
                const response = await axios.get(`http://localhost:5050/api/itinerary/id/${id}`);
                setItinerarios(response.data.res); // Ajusta según la estructura de tu API
            } catch (error) {
                console.error("Error al cargar los itinerarios:", error);
            }
        };

        fetchItinerarios();
    }, [id]);

    if (itinerarios.length === 0) {
        return <p>No hay itinerarios disponibles.</p>;
    }

    return (
        <div>
            <h1>Itinerarios para la ciudad ID: {id}</h1>
            <ul>
                {itinerarios.map(itinerario => (
                    <li key={itinerario._id}>
                        <h2>{itinerario.titulo}</h2>
                        <p>{itinerario.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Itineraries;
