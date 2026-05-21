import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CarCard = ({ car }) => {
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
    userId,
    usrName,
    _id,
    bookingCount,
  } = car;
  const carImg =
    car?.carImage ||
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <Card className="min-w-[320px] bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Image */}
      <div className="relative h-56 w-full">
        <Image src={carImage} alt={carName} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-[#004078]">{carName}</h3>

          <span className="text-sm bg-[#eef5ff] text-[#004078] px-3 py-1 rounded-full">
            {type}
          </span>
        </div>

        <p className="text-gray-500 mt-3 line-clamp-1">{description}</p>
        <p>
          Total Bookings : 
          <strong> {bookingCount} </strong>
          Times
        </p>

        <div className="flex items-center justify-between mt-6">
          <div>
            <p className="text-sm text-gray-500">Daily Rent</p>

            <h4 className="text-2xl font-bold text-[#753fdb]">৳{price}</h4>
          </div>

          <Link
            href={`/explore-car/${_id}`}
            className="px-5 py-3 rounded-xl bg-[#004078] text-white hover:bg-[#00315f] transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default CarCard;
