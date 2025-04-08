function Navbar(){

    const handleClick = () => {
        alert("Soon");
    };

    return (
      <nav className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
        <div className="text-xl font-bold">WeatherApp</div>
        <div className="space-x-4">
          <button onClick={handleClick} className="px-4 py-2 bg-blue-800 rounded-lg">Sign Up</button>
          <button onClick={handleClick} className="px-4 py-2 bg-blue-800 rounded-lg">Login</button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;