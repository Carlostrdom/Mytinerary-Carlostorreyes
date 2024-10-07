import React, { useState } from "react";
import { Link } from "react-router-dom";
const routes = [
  { to: "/home", text: "Home" },
  { to: "/cities", text: "Cities" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" flex imgbg bg-cover bg-center object-cover bg-fixed bg-no-repeat justify-between items-center bg-gray-400 w-full h-[40vh] text-black ">
      <div>
        <h1 className="text-xl">MyTinerary</h1>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)} // Alternar el estado del menú
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
      <nav className={`md:block ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          {routes.map(({ to, text }) => (
            <li key={to}>
              <Link to={to} className="hover:underline">
                {text}
              </Link>
            </li>
          ))}
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
