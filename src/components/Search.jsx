import { useEffect, useState } from 'react';
import axios from 'axios';
import { GEO_API_URL, geoApiOptions } from '../source/api';

const Search = ({onLocationSelect}) => {

    const [search, setSearch] = useState();
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState([]);
    useEffect(() => {
        const handelSearch = async() => {
            if(!search){
                setShowResult(false);
                return;
            }
            try {
                const response = await axios.get(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${search}`,geoApiOptions);
                setShowResult(true);
                setResult(response.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        const debounce = setTimeout(() => {
            handelSearch();
        },500);
        return () => clearTimeout(debounce);
    },[search])

    const handelCitySelect = (city) => {
        console.log('Selected:', city);
        setSearch(city.name);
        setShowResult(false);
        onLocationSelect({
            lat: city.latitude,
            lon: city.longitude,
            name: city.name
        });
    }

  return (
    <div className="relative flex items-center flex-col gap-2 w-full max-w-2xl">
    <div className='flex w-full shadow-lg'>
        <input 
        type="text" 
        className="w-full h-12 bg-slate-300 px-6 rounded-xl focus:outline-none hover:bg-slate-200 transition-colors"
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder='Search for city...'
        />
    </div>

    {showResult && result.length > 0 && search.trim() !== '' && (
        <div className='absolute top-14 bg-slate-700 w-full rounded-xl shadow-xl max-h-[300px] overflow-y-auto z-50'>
        {result.map((city, index) => (
            <div 
            key={index} 
            className="p-4 border-b border-slate-600 cursor-pointer hover:bg-slate-600 transition-colors"
            onClick={ () => handelCitySelect(city)}
            >
            <div className="flex items-center justify-between">
                <span className="font-medium text-white">{city.name}</span>
                <span className="text-sm text-slate-300">{city.country}</span>
            </div>
            </div>
        ))}
        </div>
        )}
    </div>
  )
}

export default Search
