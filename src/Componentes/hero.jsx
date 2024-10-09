import React from "react";
import CarouselComponent from "./carrusel";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center bgmain bg-cover bg-center bg-fixed bg-no-repeat items-center text-center w-full p-5 bg-blue-500 text-white">
      <section className="flex flex-col p-4 items-center">
        <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          TourTravel
        </h2>
        <p className="mt-4 bg-black bg-opacity-50 p-4 text-sm md:text-base lg:text-lg">
          Discover dream destinations with personalized itineraries crafted by
          local experts who know their cities inside out. Whether you're seeking
          authentic cultural experiences, adventurous trips, or relaxing
          getaways, TourTravel connects you with passionate guides who turn your
          interests into unforgettable adventures. Uncover exclusive
          recommendations, plan your ideal trip, and let each step of your
          itinerary reveal the best of every destination. Your next adventure
          starts here with TourTravel!
        </p>
        <Link
          to="/cities"
          className="flex items-center space-x-2 bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
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
        </Link>
      </section>

      <CarouselComponent />
    </div>
  );
};

export default Hero;
