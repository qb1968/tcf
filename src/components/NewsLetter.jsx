import React, { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Get the latest updates and offers delivered to your inbox.
        </p>

        {submitted ? (
          <div className="text-green-600 text-center font-medium">
            Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterSubscription;
