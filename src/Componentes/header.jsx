import React, { useState } from "react";
import { Link } from "react-router-dom";
const routes = [
  { to: "/home", text: "Home" },
  { to: "/cities", text: "Cities" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="imgbg bg-cover bg-center bg-no-repeat flex justify-between items-start bg-gray-400 w-full h-[50vh] text-black p-4">
      {" "}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none"
      >
        {/* Icono del menú hamburguesa */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <nav className={`md:block hidden`}>
        <ul className="flex flex-col md:flex-row bg-black bg-opacity-50 rounded  font-bold p-4 text-white space-y-2 md:space-y-0 md:space-x-4">
          {routes.map(({ to, text }) => (
            <li key={to}>
              <Link to={to} className="hover:underline">
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav
        className={` ${
          isOpen ? "block" : " hidden"
        } relative  -bottom-[10.5vh] left-[50vw]`}
      >
        <ul className="flex flex-col md:flex-row bg-black bg-opacity-50 rounded  font-bold p-4 text-white space-y-2 md:space-y-0 md:space-x-4">
          {routes.map(({ to, text }) => (
            <li key={to}>
              <Link to={to} className="hover:underline">
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <h1 className="text-xl  bg-black bg-opacity-50 rounded   p-4 text-white font-bold flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2" // Añadir margen a la derecha para separación
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
          />
        </svg>
        MyTinerary
      </h1>
    </header>
  );
};

export default NavBar;
