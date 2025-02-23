import { useState } from "react";
import CurrentWeather from "./components/CurrentWeather"
import Search from "./components/Search"
import axios from "axios";
import { WEARTHER_API, WEATHER_API_KEY } from "./source/api";
import Forecast from "./components/Forecast";

function App() {

  const [ currentWeather, setCurrentWeather] = useState();
  const [ forecast, setForecast] = useState();

  const handelLocationSelect = async(coordinated) => {
    try {
      const currentWeatherFetch = await axios.get(`${WEARTHER_API}/weather?lat=${coordinated.lat}&lon=${coordinated.lon}&appid=${WEATHER_API_KEY}&units=metric`);
      const forecastFetch = await axios.get(`${WEARTHER_API}/forecast?lat=${coordinated.lat}&lon=${coordinated.lon}&appid=${WEATHER_API_KEY}&units=metric`);
      setCurrentWeather(currentWeatherFetch.data);
      setForecast(forecastFetch.data);
    } catch (error) {
      console.log(error);
    }
  }
  // console.log("Currentweather",currentWeather);
  // console.log("Forecast", forecast);
  return (
    <div className="py-4 bg-slate-950 h-screen">
            <div className="flex justify-evenly">
                <h1 className="text-white font-bold text-4xl">BreezeNow 🍃</h1>
                <Search onLocationSelect={handelLocationSelect} />
            </div>
            { currentWeather && <CurrentWeather data={currentWeather}/>}
            {forecast && <Forecast data={forecast}/>}
        </div>
  )
}

export default App