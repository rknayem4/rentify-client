import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-[#004078]">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link href="/">
          <button className="mt-8 px-6 py-3 rounded-xl bg-[#004078] text-white font-medium hover:bg-[#00315c] transition-all duration-300">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;