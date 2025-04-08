import { useState } from "react";

function SearchBar({setWeatherData}){
    const [searchInput, setSearchInput] = useState("");

    const fetchWeather = async () => {
        if (searchInput=="") {
          console.log("Search input is empty");
          return;
        }
        try{
          const apiKey = "4821e0b5f2196cc28cead68d1f72f331";
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`;
          console.log("Fetching:", url);
      
          const res = await fetch(url);
          const data = await res.json();
      
          if (res.ok) {
            console.log("Weather data:", data);
            setWeatherData(data);
          } 
          else {
            setWeatherData(null);
            console.error("API error:", data.message);
            alert(data.message)
          }
        }
        catch (err) {
          console.error("Fetch error:", err);
        }
      };
    
    return (
      <div className="flex justify-center p-4">
        <input type="text" placeholder="Enter place name" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="mr-2 w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <button onClick={fetchWeather} className="px-4 py-2 ml-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">Search</button>
      </div>
    );
  };
  
  export default SearchBar;
  