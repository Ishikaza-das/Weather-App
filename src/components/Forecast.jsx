
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
  if (!data) return null;
  
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <div className="container mx-auto px-8 mt-8">
      <label className="text-white font-bold text-2xl block mb-4">Daily Forecast</label>
      
      <div className="grid grid-cols-7 gap-4">
        {data.list.splice(0, 7).map((item, index) => (
          <div 
            key={index} 
            className="bg-slate-800 rounded-xl p-4 text-white flex flex-col items-center"
          >
            <span className="font-medium mb-2">{forecastDays[index]}</span>
            <img 
              src={`icons/${item.weather[0].icon}.png`}
              alt="weather" 
              className="w-16 h-16"
            />
            <span className="font-bold mt-2">{Math.round(item.main.temp)}°C</span>
            <span className="text-sm text-gray-300">{item.weather[0].description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;