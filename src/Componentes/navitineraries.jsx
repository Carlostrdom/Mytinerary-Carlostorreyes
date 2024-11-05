import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navitineraries() {
  const location = useLocation();
  const selectedCity = location.state;
  if (selectedCity !== null) {
    return (
      <div className="relative w-full ">
        <img
          src={selectedCity.image}
          alt="City"
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
          <h2 className="text-4xl font-bold text-white mb-2 text-center ">
            Itineraries for {selectedCity.name}
          </h2>
          <p className="text-white text-center px-4">
            The capital is {selectedCity.capital}
          </p>
          <p className="text-white text-center px-4">
            {selectedCity.description}
          </p>
          <p className="text-white text-center px-4">
            Continent {selectedCity.continent}.
          </p>
          <NavLink to="/cities">
            <button className="  text-white py-2 px-4 bg-opacity-50 bg-black rounded">
              return to cities
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
  return (
    <div>
      <p>city not select</p>
    </div>
  );
}

export default Navitineraries;
