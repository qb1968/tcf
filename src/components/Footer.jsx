import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600  py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left ">
          <h2 className="text-lg font-semibold text-white hover:text-gray-800 underline">
            Allison Web Consultants, LLC
          </h2>
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6 ">
          <a href="/" className="text-white hover:text-gray-800">
            Home
          </a>
          <a href="/about" className="text-white hover:text-gray-800">
            About
          </a>
          <a href="/book" className="text-white hover:text-gray-800">
            About The Book
          </a>
          <a href="/contact" className="text-white hover:text-gray-800">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
