import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import CityCard from './CityCard';

function CitiesList() {
    const [cities, setCities] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5050/api/cities/all')
            .then(response => {
                setCities(response.data.res);
            })

    }, []);

    return (
        <>
        
        <div>
           
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {cities.length > 0 ? (
                    cities.map(city => (
                        <CityCard key={city._id} city={city} /> // Pasar la ciudad al componente CityCard
                    ))
                ) : (
                    <Loading/>
                )}
            </div>
        </div>
        </>
    );
}

export default CitiesList;
