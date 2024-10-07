// src/components/CallToAction.jsx
import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="text-center my-10">
      <Link
        to="/cities"
        className="bg-yellow-400 text-black p-2 rounded hover:bg-yellow-500 flex items-center justify-center"
      >
        <span>Explore Cities</span>
        <svg className="ml-2 h-5 w-5" /* icon here */ />
      </Link>
    </div>
  );
};

export default CallToAction;
