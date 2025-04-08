import './App.css'
import { useState, useEffect} from 'react';
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import Favourites from "./components/Favourites";

function App() {
  const [weatherData,setWeatherData] = useState(null);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem("favouriteCities")) || [];
    setFavourites(storedFavourites);
  }, []);

  const addToFavourites = (city) => {
    if (!favourites.includes(city)) {
      const updated = [...favourites, city];
      setFavourites(updated);
      localStorage.setItem("favouriteCities", JSON.stringify(updated));
    }
  };
  const func = async (city) => {
    try {
      const apiKey = "4821e0b5f2196cc28cead68d1f72f331";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const res = await fetch(url);
      const data = await res.json();
      if (res.ok) {
        setWeatherData(data);
      } else {
        console.error("API error:", data.message);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  return (
    <>
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-4 space-y-6">
        <SearchBar setWeatherData={setWeatherData}/>
        <WeatherDisplay weatherData={weatherData} onAddFavourite={addToFavourites}/>
        <Favourites cities={favourites} func={func} />
      </main>
    </div>
    </>
  )
}

export default App
