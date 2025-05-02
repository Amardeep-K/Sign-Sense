import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../App.css";

const people = [
  {
    name: "Sania",
    title: "E-Commerce 2.0",
    image: "/images/yomi.jpg",
  },
  {
    name: "Siddhartha",
    title: "E-Commerce 2.0",
    image: "/images/yomi.jpg",
  },
  {
    name: "Ankush",
    title: "Closing",
    image: "/images/david.jpg",
  },
  {
    name: "Amardeep",
    title: "Investissement Immobilier",
    image: "/images/manuel.jpg",
  },
];

const About = () => {
  
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % people.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + people.length) % people.length);
  };

  const visiblePeople = [
    people[index % people.length],
    people[(index + 1) % people.length],
    people[(index + 2) % people.length],
    people[(index + 3) % people.length],
  ];

  return (
    <section className=" text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-white">
          Team <br />
         
        </h2>
      </div>
      <div className="relative mt-12">
        <div className="flex justify-between items-center mb-4 px-4 ">
          <button onClick={prev} className="text-white hover:text-pink-400">
            <FaArrowLeft />
          </button>
          <button onClick={next} className="text-white hover:text-pink-400">
            <FaArrowRight />
          </button>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex justify-evenly item-center transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(index % people.length) * 25}%)` }}
          >
            {visiblePeople.map((person, i) => (
              <div
                key={i}
                className="bg-[#1e1029] rounded-2xl p-4 text-left w-full max-w-[260px] min-h-[380px] relative hover:scale-[1.02] transition-transform duration-300 shadow-md hover:shadow-pink-500/40"
                style={{
                  backgroundImage: person.description
                    ? "linear-gradient(to bottom right,rgb(255, 255, 255),rgb(255, 255, 255))"
                    : `url(${person.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {!person.description && (
                  <img
                    src={person.image}
                    alt={person.name}
                    className="rounded-2xl w-full h-full object-cover absolute inset-0 z-0 opacity-80"
                  />
                )}
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <h3 className="text-lg font-semibold mb-1">{person.name}</h3>
                  <p className="text-sm text-pink-300 mb-2">{person.title}</p>
                  {person.description && (
                    <p className="text-xs text-pink-100 leading-relaxed">
                      {person.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
