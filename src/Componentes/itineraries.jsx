import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItineraries } from "../store/actionCities/actionitineraries";
import { useLocation } from "react-router-dom";
import backgroundImage from "../assets/image/moviment.gif";
const ItinerariesDetail = () => {
  const [selectedActivity, setSelectedActivity] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (activity) => {
    setSelectedActivity(activity);
    console.log(activity);

    setShowModal((e) => (e = !e));
  };

  const location = useLocation();

  const { itineraries, loading, error } = useSelector(
    (state) => state.itinerariesStore
  );

  const selectedCity = location.state;

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCity?._id) {
      dispatch(fetchItineraries(selectedCity._id));
    }
  }, [dispatch, selectedCity?._id]);

  if (loading) {
    return <p>Cargando itinerarios...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[80vh] p-6"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
     
      {showModal && (
        <div className="flex justify-center items-center w-full top-20 absolute z-40 rounded-lg">
          <div className="w-[50%] h-[40vh] bg-slate-500 relative">
            <img
              src={selectedActivity.city.image}
              alt={selectedActivity.city.name}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="flex flex-col absolute w-full justify-around items-center h-full top-0 bg-black bg-opacity-50 rounded-lg">
              <p className="text-white font-bold p-4 bg-black bg-opacity-70 rounded-lg">
                {selectedActivity.city.name}
              </p>
              <p className="text-white font-bold p-4 bg-black bg-opacity-70 rounded-lg">
                Activity Under Construction
              </p>
              <button
                className="text-white font-bold bg-red-600 bg-opacity-50 hover:bg-red-700 p-4 z-50 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center items-center gap-6 p-2 rounded-lg">
        {itineraries.length === 0 ? (
          <div className="flex flex-col items-center">
            <p className="text-xl font-semibold text-black">
              There are no itineraries available.
            </p>
            <img
              src="https://images.unsplash.com/photo-1584824486516-0555a07fc511?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="No encontrado"
              className="w-70 h-48 object-cover mb-4 rounded-lg gap-5"
            />
          </div>
        ) : (
          itineraries.map((itinerary) => (
            <div
              key={itinerary._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <img
                src={itinerary.userPhoto || "https://via.placeholder.com/150"}
                alt={itinerary.userName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{itinerary.userName}</h2>
                <div className="itinerary-price flex items-center mb-2">
                  <span className="font-semibold mr-2">Price:</span>
                  {Array.from({ length: itinerary.price }).map((_, index) => (
                    <span key={index + 1} className="text-green-500 mr-1">
                      💵
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">
                  Duration: {itinerary.duration} Hs
                </p>
                <p className="text-gray-600">Likes: {itinerary.likes}</p>
                <div className="itinerary-hashtags flex flex-wrap mt-2">
                  <span className="font-semibold mr-2">Hashtags:</span>
                  {itinerary.hashtags.map((tag, index) => (
                    <span
                      key={index + 1}
                      className="bg-blue-200 text-blue-700 px-2 py-1 rounded text-sm mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleShowModal(itinerary)}
                className="flex relative items-center justify-center w-full bg-blue-100 text-blue-600 font-semibold py-2 px-4 hover:bg-blue-500 hover:text-white transition duration-300"
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
                <span>See more</span>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default ItinerariesDetail;
