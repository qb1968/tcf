import React from "react";
import { Link } from "react-router-dom";

const ImageCard = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200">
      <div className="p-8 sm:p-10 text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-1 text-gray-900 tracking-tight ">
          IMPƎRFƎCT
        </h1>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 tracking-wide">
           HAPPINESS 
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-700">
          A Journey Of Perfect Twists
        </h2>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-light font-custom">
          Based on real events, the book follows the author&#39;s journey from
          dreaming of success as a teenager in a poor community to securing the
          American Dream and experiencing a life of executive-level privilege.
          Lavish trips, private jets, and access to powerful leaders are
          contrasted by the eventual realization that this lifestyle and the
          Organization behind it are deeply flawed. Through spiritual awakening,
          the author discovers a higher calling — a life devoted to Christ,
          purpose, and true contentment.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link
            to="/book"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-medium py-2 px-6 rounded-xl shadow-md"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
