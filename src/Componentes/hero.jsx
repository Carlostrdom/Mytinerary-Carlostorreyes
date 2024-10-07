import React from "react";
import CarouselComponent from "./carrusel";
const Hero = () => {
  return (
    <div className="flex justify-center items-center text-center w-full p-10 bg-blue-500 text-white ">
      <section className="flex flex-col items-center">
        <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          MyTinerary
        </h2>
        <p className="mt-4 text-sm md:text-base lg:text-lg">
          Discover dream destinations with personalized itineraries crafted by
          local experts who know their cities inside out. Whether you're seeking
          authentic cultural experiences, adventurous trips, or relaxing
          getaways, MyTinerary connects you with passionate guides who turn your
          interests into unforgettable adventures. Uncover exclusive
          recommendations, plan your ideal trip, and let each step of your
          itinerary reveal the best of every destination. Your next adventure
          starts here with MyTinerary!
        </p>
      </section>
      <CarouselComponent />
    </div>
  );
};

export default Hero;
