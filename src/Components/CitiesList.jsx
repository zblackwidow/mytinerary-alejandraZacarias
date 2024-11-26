import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import CityCard from './CityCard';

function CitiesList({ searchText }) {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5050/api/cities/all')
            .then(response => {
                setCities(response.data.res);
            })
            .catch(error => {
                console.log('Error fetching cities:', error);
            });
    }, []);

    const filteredCities = cities.filter(city => {
        const name = city.name ? city.name.toLowerCase() : '';
        const country = city.country ? city.country.toLowerCase() : '';
        const descripcion = city.descripcion ? city.descripcion.toLowerCase() : '';
        const region = city.region ? city.region.toLowerCase() : '';

        return (
            name.includes(searchText.toLowerCase()) ||
            country.includes(searchText.toLowerCase()) ||
            descripcion.includes(searchText.toLowerCase()) ||
            region.includes(searchText.toLowerCase())
        );
    });

    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredCities.length > 0 ? (
                    filteredCities.map(city => (
                        <CityCard key={city._id} city={city} />
                    ))
                ) : (
                    <><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /><Loading />
                    <Loading />
                    </>
                )}
            </div>
        </>
    );
}

export default CitiesList;
