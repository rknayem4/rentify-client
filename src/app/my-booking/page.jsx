import React from "react";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import BookingCard from "@/Components/BookingCard";

const MyBookingPage = async () => {
  const { user } = await auth.api.getSession({
    headers: await headers(),
  });
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/car-booking-collection/${user.id}`,

    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
    {
      cache: "no-store",
    },
  );

  const booking = await res.json();
  const totalPrice = booking.reduce(
    (total, item) => total + Number(item.price),
    0,
  );
  console.log(booking);

  return (
    <section className="min-h-screen  py-14 px-6">
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
          <div className=" rounded-3xl p-14 text-center shadow-sm border border-gray-100">
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
          {booking.map((item, ind) => (
            <BookingCard key={ind} item={item}></BookingCard>
          ))}

          <div className="col-span-full mt-8 rounded-3xl p-8 shadow-sm border border-gray-300 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-[#004078]">
              Total Booking Price
            </h2>

            <span className="text-4xl font-extrabold text-[#753fdb]">
              ${totalPrice}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBookingPage;
