import { BookingModel } from "@/Components/BookingModel";
import Image from "next/image";
import React from "react";
import {
  FaCarSide,
  FaChair,
  FaLocationDot,
  FaMoneyBillWave,
  FaUser,
  FaEnvelope,
  FaCircleCheck,
} from "react-icons/fa6";

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:8000/car-collection/${id}`, {
    cache: "no-store",
  });

  const car = await res.json();

  const {
    carImage,
    carName,
    description,
    location,
    price,
    seat,
    status,
    type,
    userEmail,
    usrName,
  } = car;

  return (
    <section className="min-h-screen bg-[#f8fafc] py-14 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Side Image */}
          <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={carImage}
              alt={carName}
              fill
              className="object-cover"
            />

            {/* Status Badge */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold text-[#004078] shadow-lg">
              {status}
            </div>
          </div>

          {/* Right Side Content */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">
            
            {/* Title */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-[#eef5ff] text-[#004078] flex items-center justify-center text-2xl">
                <FaCarSide />
              </div>

              <div>
                <h1 className="text-4xl font-extrabold text-[#004078]">
                  {carName}
                </h1>

                <p className="text-gray-500 mt-1">
                  {type}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-[#004078] mb-3">
                Description
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Car Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
              
              <div className="bg-[#f8fafc] rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#eef5ff] text-[#004078] flex items-center justify-center">
                  <FaMoneyBillWave />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Daily Rent
                  </p>

                  <h4 className="text-xl font-bold text-[#004078]">
                    ${price}/day
                  </h4>
                </div>
              </div>

              <div className="bg-[#f8fafc] rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#eef5ff] text-[#004078] flex items-center justify-center">
                  <FaChair />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Seat Capacity
                  </p>

                  <h4 className="text-xl font-bold text-[#004078]">
                    {seat} Seats
                  </h4>
                </div>
              </div>

              <div className="bg-[#f8fafc] rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#eef5ff] text-[#004078] flex items-center justify-center">
                  <FaLocationDot />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Pickup Location
                  </p>

                  <h4 className="text-lg font-bold text-[#004078]">
                    {location}
                  </h4>
                </div>
              </div>

              <div className="bg-[#f8fafc] rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#eef5ff] text-[#004078] flex items-center justify-center">
                  <FaCircleCheck />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Availability
                  </p>

                  <h4 className="text-lg font-bold text-[#004078] capitalize">
                    {status}
                  </h4>
                </div>
              </div>
            </div>

            {/* Owner Info */}
            <div className="mt-10 border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold text-[#004078] mb-5">
                Owner Information
              </h3>

              <div className="space-y-4">
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#eef5ff] text-[#004078] flex items-center justify-center">
                    <FaUser />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Owner Name
                    </p>

                    <h4 className="font-semibold text-[#004078]">
                      {usrName}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#eef5ff] text-[#004078] flex items-center justify-center">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Contact Email
                    </p>

                    <h4 className="font-semibold text-[#004078]">
                      {userEmail}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <BookingModel car={car}></BookingModel>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;