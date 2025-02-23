// import axios from "axios";

export const geoApiOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
    }
  };
  
  // try {
  //     const response = await axios.request(geoApiOptions);
  //     console.log(response.data);
  // } catch (error) {
  //     console.error(error);
  // }  

  export const GEO_API_URL = import.meta.env.VITE_GEO_API_URL;
  export const WEARTHER_API = import.meta.env.VITE_WEATHER_API_URL;
  export const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;