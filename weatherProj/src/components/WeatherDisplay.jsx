function WeatherDisplay({ weatherData, onAddFavourite }){
    if (!weatherData) {
        return (
          <div className="p-4 text-center text-gray-600">
            Enter any City Name to get Weather Details :)
          </div>
        );
    }
    const {name,main: { temp, humidity }, weather} = weatherData;
    return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 text-center">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-xl">🌡️ Temp: {temp}°C</p>
      <p className="text-lg">💧 Humidity: {humidity}%</p>
      <p className="text-lg">🌤️ Condition: {weather[0].main}</p>
      <button onClick={() => onAddFavourite(name)} className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-200">⭐ Add to Favourite</button>
    </div>
    );
  };
  
export default WeatherDisplay;