// src/components/ui/button.jsx
import React from "react";

export function Button({ children, onClick, className = "", type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 text-white bg-gray-900 hover:bg-gray-800 rounded-full transition duration-200 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
}
