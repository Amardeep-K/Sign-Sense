// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header'; // Import Header component
import Footer from '../components/Footer'; // Import Footer component
 // Reusable Button component
 import Herosection from '../components/Herosection';
// If you have a Features component
const Button = ({ children, className = '', ...props }) => (
    <button className={`px-4 py-2 rounded font-semibold ${className}`} {...props}>
      {children}
    </button>
  );

  import { Card, CardContent } from "../components/UI/Card"; // adjust path as needed

import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: "✅ ",
    title: "Real-Time ASL Detection",
    description:
      "Holistic communication support enabling real-time detection and translation of American Sign Language during video calls",
  },
  {
    icon: "🤝",
    title: "Inclusive Video Chat",
    description:
      "Designed to foster inclusion by bridging communication gaps for the Deaf and Hard of Hearing communities.",
  },
  {
    icon: "📱",
    title: " Use It Anywhere",
    description:
      "Cross-platform support ensures seamless chatting and signing on mobile, desktop, and tablet—wherever you are.",
  },
  {
    icon: "💬",
    title: "Chat Your Way",
    description:
      "Integrated chat feature lets users type messages alongside video—perfect for quiet environments or switching between signing and typing.",
  },
];


const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen text-white font-sans">
      {/* Header */}
      <Herosection/>
    <div className="px-6 py-16 text-center">
      <div className="inline-block p-2 px-3 mb-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-orange-400 rounded-full">
      Features
      </div>
      <h2 className="text-4xl font-bold text-white">Unleash Your Potential</h2>
      <p className="max-w-2xl mx-auto mt-4 text-white">
      This section highlights the unique strengths of your ASL-integrated video chat app, showcasing its value for accessibility, innovation, and connection.
      </p>

      <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Card key={index} className="rounded-2xl shadow-sm text-left">
            <CardContent className="p-6">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-black mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              
            </CardContent>
          </Card>
        ))}
      </div>

      
    </div>
  

      

      {/* Features Section */}
     {/* If you have a Features component to display */}

      {/* Footer */}
      
    </div>
  );
};

export default HomePage;
