import { useRef } from "react";
import { useHeadingGroupAnimation } from "../hooks";
import { useInView } from "../hooks/useInView";
import SectionTitle from "./SectionTitle";

interface FeatureItem {
  title: string;
  image: string;
  css: string;
}

const features: FeatureItem[] = [
  {
    title: "Distinguished Speakers",
    image: "/image_1.png",
    css: "col-span-5",
  },
  {
    title: "Network of Industry Associations",
    image: "/image_2.png",
    css: "col-span-7",
  },
  {
    title: "Prior Notification of Attendees",
    image: "/image_2.png",
    css: "col-span-7",
  },
  {
    title: "Strategized Networking",
    image: "/image_1.png",
    css: "col-span-5",
  },
  {
    title: "Pre-Qualified Delegates",
    image: "/image_1.png",
    css: "col-span-5",
  },
  {
    title: "Global Solution Providers",
    image: "/image_2.png",
    css: "col-span-7",
  },
];

const EventFeatures = () => {
  const headRef = useRef(null);
  useHeadingGroupAnimation(headRef, 0.1);

  const { ref, isInView } = useInView({
    threshold: 0.3,
  });

  return (
    <div className="main-container text-white py-12 " ref={ref}>
      <div className=" mx-auto flex flex-col gap-6">
        <SectionTitle title="Event" subtitle="Features" ref={headRef} />
        <div className="grid grid-cols-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative bg-[#111] border-4 border-[#1c1c1e] group overflow-hidden ${feature.css}`}
            >
              <img
                src={feature.image}
                alt={feature.title}
                style={{ animationDelay: `${index * 200}ms` }}
                className={`w-full md:h-96 h-60 object-cover opacity-80 
              ${isInView ? "animate-reveal-left-to-right" : "opacity-0"}
            `}
              />
              <div className="absolute bottom-2 left-2 text-sm sm:text-base font-medium bg-opacity-50 px-3 py-1 rounded font-size:xl ">
                {feature.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventFeatures;
