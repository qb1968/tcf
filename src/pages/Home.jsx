
import ImageCard from "../components/ImageCard";
import ImageContainer from "../components/ImageContainer";
import UpcomingEventsCarousel from "../components/UpcomingEventsCarousel";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto font-custom text-gray-800">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900">
        <img
          alt="Scenic beach background"
          src="/images/beach2.jpg"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        {/* Overlay */}
        

        {/* Hero Content */}
        <div className="relative z-10 py-32 px-6 sm:px-12 text-center text-white">
         
        </div>
      </div>

      {/* ImageCard Section */}
      <div className="px-6 py-12 sm:py-16">
        <ImageCard />
      </div>

      {/* ImageContainer Section */}
      <div className="px-6 pb-20">
        <ImageContainer />
      </div>
      <div className="px-6 pb-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-blue-800">
          Upcoming Events
        </h2>
        <UpcomingEventsCarousel/>
      </div>

      {/* Footer */}
    </section>
  );
}
