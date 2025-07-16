// import React, { useState } from "react";
// import NewsletterSubscription from "../components/NewsLetter";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [status, setStatus] = useState(null);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("loading");

//     try {
//       const response = await fetch("https://submit-form.com/5tqkiLikJ", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setStatus("success");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setStatus("error");
//       }
//     } catch (error) {
//       setStatus("error");
//     }
//   };

//   return (
//     <section className="min-h-screen bg-gray-50 py-16 px-4">
//       <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
//         <div className="mb-6 text-center">
//           <img
//             src="/images/water3.jpg"
//             alt="Contact Banner"
//             className="w-full h-52 object-cover rounded-lg mb-6"
//           />
//           <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
//             Contact Us
//           </h2>
//           <p className="text-gray-600">
//             We'd love to hear from you. Send us a message below.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-semibold text-gray-700 mb-1"
//             >
//               Full Name
//             </label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-semibold text-gray-700 mb-1"
//             >
//               Email Address
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="message"
//               className="block text-sm font-semibold text-gray-700 mb-1"
//             >
//               Your Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="5"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
//             disabled={status === "loading"}
//           >
//             {status === "loading" ? "Sending..." : "Send Message"}
//           </button>

//           {status === "success" && (
//             <p className="text-green-600 font-medium text-center mt-2">
//               ✅ Your message was sent successfully.
//             </p>
//           )}
//           {status === "error" && (
//             <p className="text-red-600 font-medium text-center mt-2">
//               ❌ Something went wrong. Please try again.
//             </p>
//           )}
//         </form>
//       </div>

//       <div className="mt-16 max-w-2xl mx-auto">
//         <NewsletterSubscription />
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";
import NewsletterSubscription from "../components/NewsLetter";
import {
  EnvelopeIcon,
  UserIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/solid";
// Optional

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://submit-form.com/5tqkiLikJ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 font-custom">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl transition-all">
        <div className="text-center mb-8">
          <img
            src="/images/water3.jpg"
            alt="Contact Banner"
            className="w-full h-52 object-cover rounded-lg mb-6 shadow"
          />
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We'd love to hear from you. Send us a message and we’ll get back to
            you soon.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1"
            >
              Full Name
            </label>
            <div className="relative">
              <UserIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1"
            >
              Email Address
            </label>
            <div className="relative">
              <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Reason for Contact
            </label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="" disabled>
                Select a reason
              </option>
              <option value="General Inquiry">Business & Leadership Info</option>
              <option value="Prayer Request">Prayer Request</option>
              <option value="Speaking Engagement">Speaking Engagement</option>
              <option value="Book Feedback">Prostate Cancer Info
              </option>
              <option value="Other">Share A Positive Story</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1"
            >
              Your Message
            </label>
            <div className="relative">
              <ChatBubbleLeftIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300 ${
              status === "loading" ? "opacity-60 cursor-not-allowed" : ""
            }`}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {/* Message Feedback */}
          {status === "success" && (
            <p className="text-green-600 font-medium text-center mt-2">
              ✅ Your message was sent successfully.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-medium text-center mt-2">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>

      {/* Newsletter */}
      <div className="mt-16 max-w-2xl mx-auto">
        <NewsletterSubscription />
      </div>
    </section>
  );
}
