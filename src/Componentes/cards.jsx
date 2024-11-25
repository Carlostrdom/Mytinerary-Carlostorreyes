import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCities,
  selectCities,
  setSearch,
} from "../store/actionCities/actionCities";

const CityList = () => {

  const token = useSelector((state) => state.signinStore.token);

  const navigate = useNavigate();
  const handlerNavigate = (city) => {
    navigate("/itineraries", { state: city });
  };

  const { cities, search } = useSelector((state) => state.citiesStore);
  const dispatch = useDispatch();

  useEffect(() => {
    if (search != "") {
      dispatch(fetchCities({search: search})); 
      console.log(search,"buscado");
    }
    
  }, [search]);

  return (
    <>
      <div className="w-full flex flex-col items-center bgmain bg-cover bg-center bg-fixed bg-no-repeat p-4 shadow-lg cursor-pointer">
        <div className="flex flex-col items-center p-4 w-full mb-6">
          <div className="w-full flex justify-center mb-4">
            <h1 className="text-2xl font-bold text-center rounded-lg text-white bg-black/50 p-4">
              Explore your destination.
            </h1>
          </div>
          <div className="w-full flex justify-center">
            <input
              type="text"
              value={search}
              onChange={(e) => dispatch(setSearch(e.target.value))}
              placeholder="Search city"
              className="w-[200px] p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {cities.response ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cities.response.map((city) => (
              <div
                key={city._id}
                className="bg-blue-100 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{city.name}</h2>
                  <p> Capital: {city.capital}</p>
                </div>

                <button
                  className="flex items-center space-x-2 bg-blue-100 text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
                  onClick={() => handlerNavigate(city)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                  <span>Explore Now</span>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Charging...</p>
        )}
      </div>
    </>
  );
};

export default CityList;
