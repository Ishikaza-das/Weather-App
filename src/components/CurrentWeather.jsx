

const CurrentWeather = ({data}) => {
  return (
    <div className="container mx-auto px-8 py-8">
      <div className="flex justify-between items-center bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-extrabold text-white">{data.name}</h1>
          <h2 className="text-2xl font-bold text-gray-300">{data.weather[0].description}</h2>
          <p className="text-7xl font-medium text-white">{Math.round(data.main.temp)}°C</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img 
            src={`icons/${data.weather[0].icon}.png` }
            className="h-40 w-40 mb-4"
          />
          <div className="bg-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Details</h3>
            <div className="flex flex-col gap-3">
              <p className="text-lg text-gray-200">Feels like {Math.round(data.main.feels_like)}°C</p>
              <p className="text-lg text-gray-200">Wind {data.wind.speed} m/s</p>
              <p className="text-lg text-gray-200">Humidity {Math.round(data.main.humidity)}%</p>
              <p className="text-lg text-gray-200">Pressure {data.main.pressure} Pha</p>
            </div>
          </div>
        </div>
    </div>
  </div>
)}

export default CurrentWeather
