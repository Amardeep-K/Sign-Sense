import React from "react";
import team from "../assets/team.webp"; // Ensure the path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FaPlay } from "react-icons/fa";

const Button = ({ children, className = '', ...props }) => (
  <button className={`px-4 py-2 rounded font-semibold ${className}`} {...props}>
    {children}
  </button>
);

export default function Herosection() {
  return (
    
      <div className="bg-white rounded-2xl shadow-lg grid md:grid-cols-2 w-full max-w-6xl  overflow-hidden m-auto ">
        {/* Left section */}
        <div className="p-10 flex flex-col justify-center">
          <span className="inline-block bg-orange-100 text-orange-600 text-lg center font-medium p-2.5 rounded-full w-fit mb-4">
            About
          </span>
          <h2 className="text-3xl font-bold text-black leading-tight mb-4">
            We believe in doing <br /> the right thing
          </h2>
          <p className="text-gray-600 mb-6">
          We foster inclusive communication by bridging the gap between spoken and signed language—because accessibility is a right, not a privilege.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-100 p-3 rounded-2xl">
              <div className="text-yellow-500 text-2xl mb-2">🤝</div>
              <h3 className="text-lg font-semibold text-black">Inclusion 
              </h3>
              <p className="text-sm text-gray-600">Everyone deserves to be understood.</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-2xl">
              <div className="text-green-500 text-2xl mb-2">💡</div>
              <h3 className="text-lg font-semibold text-black">Innovation </h3>
              <p className="text-sm text-gray-600">Real-time ASL meets modern video chat.</p>
            </div>
          </div>
         
        </div>

        {/* Right section */}
        <div className="relative overflow-hidden">
          <img
            src={team}
            alt="Team Working"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full p-4 shadow-lg cursor-pointer flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <FaPlay className="hand-icon text-black" size={25} />
            </div>
          </div>
        </div>
      </div>
    
  );
}
