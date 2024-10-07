// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="text-center">
        <p>&copy; 2024 MyTinerary. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/path-to-social-media" className="hover:underline">
            Facebook
          </a>
          <a href="/path-to-social-media" className="hover:underline">
            Instagram
          </a>
          <a href="/path-to-social-media" className="hover:underline">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
