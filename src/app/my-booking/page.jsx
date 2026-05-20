import Image from "next/image";
import React from "react";
import {
  FaCalendarCheck,
  FaCarSide,
  FaLocationDot,
  FaMoneyBillWave,
  FaUser,
} from "react-icons/fa6";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import BookingCard from "@/Components/BookingCard";

const MyBookingPage = async () => {
  const { user } = await auth.api.getSession({
    headers: await headers(),
  });

  const res = await fetch(
    `http://localhost:8000/car-booking-collection/${user?.id}`,
    {
      cache: "no-store",
    }
  );

  const booking = await res.json();

  return (
    <section className="min-h-screen bg-[#f8fafc] py-14 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-[#004078]">
            My Bookings
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            Manage and track all your booked cars.
          </p>
        </div>

        {/* Empty State */}
        {booking?.length === 0 && (
          <div className="bg-white rounded-3xl p-14 text-center shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-[#004078]">
              No Bookings Found
            </h2>

            <p className="text-gray-500 mt-4">
              You haven’t booked any cars yet.
            </p>
          </div>
        )}

        {/* Booking Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {booking?.map((item) => (
            <BookingCard key={item._id} item={item}></BookingCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyBookingPage;