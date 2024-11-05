import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import videoSrc from "../assets/image/Black-Simple-Travel-Logo.mp4";
import { useDispatch } from "react-redux";
import { fetchCities } from "../store/actionCities/actionCities";

const routes = [
  { to: "/home", text: "Home" },
  { to: "/cities", text: "Cities" },
];

const burg =
  "flex flex-col bg-black bg-opacity-70 rounded font-bold p-4 top-[6vh] text-white space-y-2 transition-all duration-300 ease-in-out";

const NavBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCities());
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <header className="relative bg-cover bg-center bg-no-repeat flex justify-between items-start w-full h-[80vh] text-black p-4">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover brightness-90 contrast-110 -z-10"
      >
        <source
          src="https://videos.pexels.com/video-files/3135808/3135808-hd_1920_1080_24fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative flex w-[20vw] max-w-[200px] md:w-[10vw] h-[10vh] md:h-[10vh] items-center justify-center rounded-full border-2 border-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Botón de menú hamburguesa en la derecha */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none ml-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
          />
        </svg>
      </button>

      <nav className="relative">
        <ul
          className={`${
            isOpen && windowSize.width <= 768 ? burg : "hidden"
          } md:flex md:bg-black md:bg-opacity-50 rounded font-bold p-4 text-white space-y-2 md:space-y-0 md:space-x-4 transition-all duration-300 ease-in-out absolute right-0 top-full mt-2`}
        >
          {routes.map(({ to, text }) => (
            <li key={to}>
              <Link to={to} className="hover:underline">
                {text}
              </Link>
            </li>
          ))}
          <li>
            <h1 className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
              MyTinerary
            </h1>
          </li>
        </ul>
      </nav>
      {/* Mensaje de viajeros centrado */}
      <div className="absolute inset-x-0 bottom-10 text-center text-white text-xl font-bold max-w-md mx-auto p-4 bg-opacity-50 bg-black rounded">
        "Are you ready for an adventure that will change your life? We invite
        you to an exciting journey to explore some of the most fascinating
        destinations in the world."
      </div>
    </header>
  );
};

export default NavBar;
