"use client";

import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Rahim Ahmed",
    role: "Business Traveler",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Rentify made my trip super comfortable. The car quality and customer service were excellent.",
    rating: 5,
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Tourist",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Very smooth booking experience and affordable pricing. I loved the premium car collection.",
    rating: 5,
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    role: "Entrepreneur",
    image:
      "https://randomuser.me/api/portraits/men/68.jpg",
    review:
      "The best car rental platform I’ve used in Bangladesh. Fast support and secure process.",
    rating: 4,
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 px-6 ">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#004078]">
            What Our Customers Say
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Thousands of customers trust Rentify for reliable,
            affordable, and premium car rental services.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {reviews.map((review) => (
            <div
              key={review.id}
              className=" rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-300"
            >
              
              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#004078]">
                    {review.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {review.role}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-6 text-yellow-400">
                {[...Array(review.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              {/* Review Text */}
              <p className="mt-5 text-gray-600 leading-relaxed">
                “{review.review}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;