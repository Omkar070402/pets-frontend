import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold">🐶 PetAdopt</h3>
            <p className="mt-3 text-gray-400">
              Helping stray dogs find loving homes. Adopt, don’t shop! ❤️
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/browsePets" className="hover:text-blue-400">Browse Pets</a></li>
              <li><a href="/how-it-works" className="hover:text-blue-400">How It Works</a></li>
              <li><a href="/donate" className="hover:text-blue-400">Donate</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="mt-3 flex space-x-4">
              <FaFacebook className="text-2xl cursor-pointer hover:text-blue-400" />
              <FaInstagram className="text-2xl cursor-pointer hover:text-pink-400" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-300" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-500">
          © 2024 PetAdopt. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
