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
        
        <p className="text-gray-800 mt-2 font-custom">
          Based on real events, the book follows the author&#39;s journey of
          dreaming of business success as a teenager from a poor community to
          securing The American Dream, the pinnacle of leadership achievement at
          The Organization; followed by the emptiness of the accomplishment. He
          experiences the benefits and power of Executive Level success
          including a country club lifestyle of exotic cars, lavish trips,
          private jets and access to powerful American leaders in multiple
          industries coined The CLUB. Over time the author discovers that The
          Organization is evil; the surrounding community immoral, the
          combination having a detrimental impact on his young family.
          Simultaneously, during weekly meetings with a group of Godly Men he
          comes to realize that God brought him to Florida, not to be a
          successful leader, but to dedicate his life to Christ on October 19,
          1995. Ready to follow, but overwhelmed by what to do, the author&#39;s
          decades long journey of Imperfect Happiness details life&#39;s dead
          ends, contrasted by the inspirational message of happiness and
          contentment of living life well with God.
        </p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl">
          <Link to="/book">Learn More</Link>
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
