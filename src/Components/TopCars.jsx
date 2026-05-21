import Image from "next/image";
import Link from "next/link";
import React from "react";
import CarCard from "./CarCard";

const TopCars = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/car-collection`);

  const cars = await res.json();

  const topCars = cars.slice(0, 6);

  return (
    <section className="py-20 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#004078]">
            Top Featured Cars
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Explore our most popular and premium rental cars
            chosen by thousands of happy customers.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="flex gap-6 animate-scroll whitespace-nowrap">
            {topCars.map((car) => (
              <CarCard key={car._id} car={car}></CarCard>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default TopCars;