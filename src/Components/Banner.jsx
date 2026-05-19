"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const bannerImages = [
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1883&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2070&auto=format&fit=crop",
];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === bannerImages.length - 1 ? 0 : prev + 1,
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Background Images */}
      {bannerImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Find Your Perfect Ride With Rentify
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              Explore premium, affordable, and luxury cars for every journey.
              Rent anytime, anywhere with a smooth and secure booking
              experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/explore-car"
                className="px-8 py-4 rounded-xl bg-[#004078] hover:bg-[#00315f] transition-all duration-300 text-white font-semibold"
              >
                Explore Cars
              </Link>

              <Link
                href="/my-add"
                className="px-8 py-4 rounded-xl border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold"
              >
                Add Your Car
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentImage === index ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
