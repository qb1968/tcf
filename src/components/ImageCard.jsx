import React from "react";
import { Link } from "react-router-dom";
const ImageCard = () => {
  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-3xl overflow-hidden">
      <img
        className="w-full h-100 object-cover"
        src="/images/book.jpg"
        alt="Card Image"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
        <p className="text-gray-600 mt-2">
          Based on real events, the book follows the author's journey of
          dreaming of business success as a teenager from a poor community to
          securing The American Dream, the pinnacle of leadership achievement at
          The Organization; followed by the emptiness of the accomplishment. 
        </p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl">
          <Link to="/book">Learn More</Link>
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
