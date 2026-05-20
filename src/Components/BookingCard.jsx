import Image from "next/image";
import React from "react";
import {
  FaCalendarCheck,
  FaCarSide,
  FaMoneyBillWave,
  FaUser,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const BookingCard = ({ item }) => {
  console.log(item.carImage);
  return (
    <div
      key={item._id}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative max-h-40 w-full overflow-hidden">
        <Image
          src={item.carImage}
          alt={item.carName}
          fill
          className="object-cover hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-[#004078] shadow">
          Booked
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        {/* Top */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#004078]">
              {item.carName}
            </h2>

            <p className="text-gray-500 mt-1">Premium Rental Experience</p>
          </div>

          <div className="text-right">
            <h3 className="text-2xl font-extrabold text-[#753fdb]">
              ${item.price}
            </h3>

            <span className="text-sm text-gray-500">/day</span>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div className="bg-[#f8fafc] rounded-2xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#eef5ff] text-[#004078] flex items-center justify-center">
              <FaLocationDot />
            </div>

            <div>
              <p className="text-sm text-gray-500">Pickup Location</p>

              <h4 className="font-semibold text-[#004078]">{item.location}</h4>
            </div>
          </div>

          <div className="bg-[#f8fafc] rounded-2xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#eef5ff] text-[#004078] flex items-center justify-center">
              <FaCarSide />
            </div>

            <div>
              <p className="text-sm text-gray-500">Driver Needed</p>

              <h4 className="font-semibold text-[#004078] capitalize">
                {item.driverNeed || "No"}
              </h4>
            </div>
          </div>

          <div className="bg-[#f8fafc] rounded-2xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#eef5ff] text-[#004078] flex items-center justify-center">
              <FaUser />
            </div>

            <div>
              <p className="text-sm text-gray-500">Booked By</p>

              <h4 className="font-semibold text-[#004078]">{item.userName}</h4>
            </div>
          </div>

          <div className="bg-[#f8fafc] rounded-2xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#eef5ff] text-[#004078] flex items-center justify-center">
              <FaMoneyBillWave />
            </div>

            <div>
              <p className="text-sm text-gray-500">Payment</p>

              <h4 className="font-semibold text-[#004078]">Pending</h4>
            </div>
          </div>
        </div>

        {/* Note */}
        {item.note && (
          <div className="mt-6 bg-[#f8fafc] border border-gray-100 rounded-2xl p-5">
            <h3 className="font-bold text-[#004078] mb-2">Additional Note</h3>

            <p className="text-gray-600 leading-relaxed">{item.note}</p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-green-600 font-medium">
            <FaCalendarCheck />
            Booking Confirmed
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingCard;
