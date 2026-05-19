import React from "react";
import {
  FaCarSide,
  FaUsers,
  FaMapMarkedAlt,
  FaStar,
} from "react-icons/fa";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      icon: <FaCarSide />,
      title: "500+ Premium Cars",
      description:
        "Choose from luxury, sports, SUV, and family cars for every journey.",
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "10K+ Happy Customers",
      description:
        "Thousands of customers trust Rentify for secure and smooth rentals.",
    },
    {
      id: 3,
      icon: <FaMapMarkedAlt />,
      title: "Nationwide Service",
      description:
        "Pick up and drop off your car from multiple locations across Bangladesh.",
    },
    {
      id: 4,
      icon: <FaStar />,
      title: "Top Rated Experience",
      description:
        "Enjoy premium customer support and highly rated rental experiences.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#004078]">
            Experience Comfortable Car Rentals
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Rentify delivers a smooth and modern car rental experience
            with premium vehicles, trusted support, and affordable pricing.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {experiences.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#eef5ff] text-[#004078] flex items-center justify-center text-3xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#004078] mt-6">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-4 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;