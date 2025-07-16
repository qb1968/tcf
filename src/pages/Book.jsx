import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AboutTheBook() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => setIsExpanded(!isExpanded);

  const [reviews] = useState([
    {
      name: "Construction Worker - Treyvon",
      rating: 5,
      text: "Imperfect Happiness reminded me that real joy is found in pursuing God's purpose, not perfection. A must‑read!",
    },
    {
      name: "Law Enforcement - Larramie",
      rating: 5,
      text: "I have a young adult with special needs. IMPERFECT HAPPINESS is packed with common sense ideas which young people, parents and our country need. Terry's biblically-based tips for developing kids are brilliantly simple, positive and effective.",
    },
    {
      name: "Deacon - Dan",
      rating: 5,
      text: "It is one thing to know about God. It is another matter entirely to know God. Terry's book is a journey of what it is to come to know God deeply and personally, and to live that out in every aspect of life on this earth. After all, life on this earth should lead us to life with God in the Kingdom.",
    },
  ]);

  const [form, setForm] = useState({ name: "", rating: 5, text: "" });
  const [pendingMessage, setPendingMessage] = useState("");
  const [preview, setPreview] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const StarRating = ({ count }) => (
    <div
      className="flex gap-0.5 text-yellow-500"
      aria-label={`${count} star rating`}
    >
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <span key={i}>{i < count ? "★" : "☆"}</span>
        ))}
    </div>
  );

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 font-custom">
      {/* Book Section */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <img
            src="/images/book.jpg"
            alt="Book Cover"
            className="rounded-2xl shadow-xl w-full"
          />
          <h2 className="text-blue-600 font-semibold mt-4 text-center">
            From Publisher:{" "}
            <Link
              to="https://christianfaithpublishing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Christian Faith Publishing
            </Link>
          </h2>
        </div>

        <div>
          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
            About the Book
          </h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              IMPERFECT HAPPINESS is a thought-provoking and encouraging story
              highlighting God's many resources to live our best life. Written
              during the author's 2+ year cancer battle, it's a journey through
              leadership, faith, relationships, and family.
            </p>
            <p>
              Grounded in biblical principles and paired with proven business
              techniques, the book explores The Caring Continuum (Philippians
              2:4), In Front, Not Above (Matthew 20:26), Brilliant on the Basics
              (Psalm 19:7), and 21 Steps to Being the Best Imperfect You (2
              Timothy 2:15).
            </p>
            <p>
              The author invites readers to return our communities and nation to
              kindness and greatness by living the Bible, not just reading it.
              {!isExpanded && (
                <span
                  className="inline text-blue-500 cursor-pointer ml-2 font-medium"
                  onClick={handleToggle}
                >
                  Read More
                </span>
              )}
            </p>
            {isExpanded && (
              <div className="space-y-4">
                <p>
                  Whether you're young, new to faith, or seeking God, this book
                  offers real-life applications and lessons born from the
                  author's own mistakes and victories. The pillars: Scripture,
                  the life of Jesus, prayer, and Christian music.
                </p>
                <p>
                  The Thirty-Day Devotional challenge helps readers reflect on
                  what truly matters.
                </p>
                <p>
                  "Imperfect Happiness" is about letting go of perfection,
                  growing in Godly wisdom, and developing the skill of living
                  well with God.
                </p>
                <p>Read it your way:</p>
                <ul className="list-disc list-inside pl-4 space-y-1">
                  <li>Thirty Bible studies and a glossary of terms</li>
                  <li>
                    Topical life journey sections with verses from 18
                    translations
                  </li>
                  <li>
                    Thirty-one bold and authentic prayers for daily challenges
                  </li>
                  <li>
                    Ninety-eight Christian songs that highlight Scripture and
                    Jesus's life
                  </li>
                </ul>
                <button
                  onClick={handleToggle}
                  className="mt-2 text-blue-500 hover:underline font-medium"
                >
                  Read Less
                </button>
              </div>
            )}
          </div>
          <div className="mt-8 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow transition-all duration-300">
              <Link
                to="https://buy.stripe.com/test_aFaeVe3TTa0T1242EoeZ201"
                target="_blank"
              >
                Buy Now
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-24">
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">
          What Readers Are Saying
        </h3>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          className="max-w-2xl mx-auto"
        >
          {reviews.map((rev, idx) => (
            <SwiperSlide key={idx}>
              <article className="bg-white border border-gray-200 rounded-xl shadow-md p-8 text-center space-y-4">
                <StarRating count={rev.rating} />
                <p className="text-gray-700 italic">“{rev.text}”</p>
                <p className="font-semibold text-gray-900">— {rev.name}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Submit Review */}
      <div className="mt-20 max-w-xl mx-auto bg-gray-50 border border-gray-200 rounded-xl p-8 shadow">
        <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Leave a Review
        </h3>

        {pendingMessage && (
          <div className="text-green-600 font-medium text-center mb-4">
            {pendingMessage}
          </div>
        )}

        {!preview ? (
          <form
            className="space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();

              const response = await fetch(
                "https://submit-form.com/uAsqUWhhu",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  body: JSON.stringify({
                    name: form.name,
                    rating: form.rating,
                    text: form.text,
                  }),
                }
              );

              if (response.ok) {
                setPendingMessage(
                  "Thanks! Your review was submitted and is pending approval."
                );
                setForm({ name: "", rating: 5, text: "" });
                setPreview(false);
              } else {
                setPendingMessage("Something went wrong. Please try again.");
              }
            }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Rating
              </label>
              <select
                id="rating"
                name="rating"
                value={form.rating}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>
                    {r} Star{r > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Review
              </label>
              <textarea
                id="text"
                name="text"
                rows="4"
                value={form.text}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
              Preview Review
            </button>
          </form>
        ) : (
          <form
            action="https://submit-form.com/uAsqUWhhu"
            method="POST"
            className="space-y-4"
            target="_blank"
            onSubmit={() => {
              setPendingMessage(
                "Thanks! Your review was submitted and is pending approval."
              );
              setForm({ name: "", rating: 5, text: "" });
              setPreview(false);
            }}
          >
            <input type="hidden" name="name" value={form.name} />
            <input type="hidden" name="rating" value={form.rating} />
            <input type="hidden" name="text" value={form.text} />

            <h4 className="text-lg font-semibold text-gray-800">
              Preview Your Review
            </h4>
            <article className="bg-white border border-gray-300 rounded-xl p-4">
              <StarRating count={form.rating} />
              <p className="text-gray-700 italic">“{form.text}”</p>
              <p className="font-semibold text-gray-900 mt-2">— {form.name}</p>
            </article>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setPreview(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-lg"
              >
                Edit
              </button>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
              >
                Confirm & Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
