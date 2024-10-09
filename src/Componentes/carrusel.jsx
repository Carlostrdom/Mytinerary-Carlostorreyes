import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  const cities = [
    {
      name: "Paris",
      image:
        "https://cdn2.civitatis.com/francia/paris/galeria/torre-eiffel-altura.jpg",
    },
    {
      name: "New York",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/nueva-york-1521191396.jpg",
    },
    {
      name: "Tokyo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjPyrTJVAPc9KPEkwS5yoqwHXou7LlUun1w&s",
    },
    {
      name: "London",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGiIhx7jNez9yivxjBT1up1f0852Bvihu0yA&s",
    },
    {
      name: "Berlin",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRCIzbkXMj8M0p5_H7nqxJ3P03fdXmljc-w&s",
    },
    {
      name: "Sydney",
      image:
        "https://images.gostudy.com.au/w:1400/h:800/q:mauto/f:best/ig:avif/id:1619b76004c98e623b2e00397e8e6d0a/https://gostudyaus.es/SYD_header.jpg",
    },
    {
      name: "Rome",
      image:
        "https://cdn.britannica.com/45/196945-050-CCF8BD72/Temple-of-Saturn-Arch-Septimius-Severus-Forum.jpg",
    },
    {
      name: "Moscow",
      image: "https://media.timeout.com/images/105237890/750/422/image.jpg",
    },
    {
      name: "Cairo",
      image:
        "https://www.kayak.com.co/rimg/dimg/85/e5/d763bad9-city-9087-164429be177.jpg?width=1366&height=768&xhint=2760&yhint=1285&crop=true",
    },
    { name: "Barcelona", image: "https://img2.rtve.es/v/868498/" },
    {
      name: "Mexico",
      image:
        "https://cdn.pixabay.com/photo/2015/07/20/16/22/mexico-853048_1280.jpg",
    },
    {
      name: "Venezuela",
      image: "https://unionradio.net/wp-content/uploads/2023/08/turisjmo.jpg",
    },
  ];

  const [itemsPerGroup, setItemsPerGroup] = useState(4);

  useEffect(() => {
    const updateItemsPerGroup = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerGroup(1);
      } else if (width < 1024) {
        setItemsPerGroup(2);
      } else {
        setItemsPerGroup(4);
      }
    };

    updateItemsPerGroup();
    window.addEventListener("resize", updateItemsPerGroup);

    return () => window.removeEventListener("resize", updateItemsPerGroup);
  }, []);

  const groupedCities = [];
  for (let i = 0; i < cities.length; i += itemsPerGroup) {
    groupedCities.push(cities.slice(i, i + itemsPerGroup));
  }

  return (
    <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false}>
      {groupedCities.map((group, index) => (
        <div
          key={index}
          className={`grid  gap-2 p-4 ${
            itemsPerGroup === 1 ? "grid-cols-1" : "grid-cols-2 md:grid-cols-2"
          }`}
        >
          {group.map((city, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center h-[50vh] md:w-full"
            >
              <img
                src={city.image}
                alt={city.name}
                className="object-cover md:w-full h-[80%] w-[60%] rounded-md"
              />
              <p className="text-center mt-2 text-sm text-white bg-black rounded-md bg-opacity-50 font-bold">
                {city.name}
              </p>
            </div>
          ))}
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
