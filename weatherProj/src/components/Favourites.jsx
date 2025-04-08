function Favourites({ cities ,func}){
    
    return (
        <div className="p-4">
            <div className="text-xl font-semibold mb-2">Favourite Places</div>
            {cities.length === 0 ? (
            <p className="text-gray-500 italic">No favourites yet.</p>):(<ul className="space-y-2">{cities.map((city, index) => (<li key={index} onClick={() => func(city)} className="p-2 bg-gray-100 rounded-md">{city}</li>))}</ul>
            )}
        </div>
    );
  };
  
  export default Favourites;