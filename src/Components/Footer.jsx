import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#004078] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Rentify
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Rentify is a modern car rental platform that helps you
            find premium and affordable cars anytime, anywhere.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Contact Info
          </h3>

          <div className="space-y-3 text-gray-300">
            <p>📍 Dhaka, Bangladesh</p>
            <p>📞 +880 1234-567890</p>
            <p>✉️ support@rentify.com</p>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Useful Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-300">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>

            <Link
              href="/explore-car"
              className="hover:text-white transition"
            >
              Available Cars
            </Link>

            <Link
              href="/my-booking"
              className="hover:text-white transition"
            >
              My Bookings
            </Link>

            <Link
              href="/add-car"
              className="hover:text-white transition"
            >
              Add Car
            </Link>
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Follow Us
          </h3>

          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#753fdb] transition flex items-center justify-center"
            >
              <FaFacebookF />
            </Link>

            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#753fdb] transition flex items-center justify-center"
            >
              <FaInstagram />
            </Link>

            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#753fdb] transition flex items-center justify-center"
            >
              <FaTwitter />
            </Link>

            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#753fdb] transition flex items-center justify-center"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-white/20" />

      {/* Bottom Footer */}
      <div className="text-center py-5 text-gray-300 text-sm">
        © {new Date().getFullYear()} Rentify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;