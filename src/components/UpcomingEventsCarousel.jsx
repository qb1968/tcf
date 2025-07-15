import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const events = [
  //   {
  //     title: "Book Signing – Miami",
  //     date: "August 10, 2025",
  //     place: "Books & Co., Coral Gables",
  //     blurb:
  //       "Meet the author, get your book signed, and hear the story behind *Imperfect Happiness*.",
  //   },
  {
    title: "Speaking Engagement – Maumee, OH",
    date: "August 17, 2025",
    place: "St. Paul's Lutheran Church",
    blurb:
      "Join me at 8:30 & 10:30 AM",
  },
  //   {
  //     title: "Live Interview – Online",
  //     date: "October 1, 2025",
  //     place: "Zoom / YouTube Live",
  //     blurb:
  //       "Tune in for a live interview with exclusive insights and reader Q&A.",
  //   } /* same data objects as above */,
];

export default function UpcomingEventsCarousel() {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      navigation
      loop
      className="max-w-lg mx-auto"
    >
      {events.map((ev) => (
        <SwiperSlide key={ev.title}>
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
              {ev.title}
            </h3>
            <p className="text-gray-600 text-center">📅 {ev.date}</p>
            <p className="text-gray-600 text-center">📍 {ev.place}</p>
            <p className="mt-2 text-gray-700 text-sm text-center">{ev.blurb}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
