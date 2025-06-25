import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Allison Web Consultants, LLC</h2>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="/about" className="hover:text-white transition">
            About
          </a>
          <a href="/book" className="hover:text-white transition">
            Book
          </a>
          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
