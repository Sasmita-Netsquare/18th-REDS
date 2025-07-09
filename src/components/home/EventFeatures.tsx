import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useHeadingGroupAnimation } from "../hooks";
import { useInView } from "../hooks/useInView";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: "Distinguished Speakers", image: "/Event_Features/Distinguished_Speakers_1.jpg" },
  { title: "Network of Industry Associations", image: "/Event_Features/Network_of_Industry_Associations_1.jpg" },
  { title: "Prior Notification of Attendees", image: "/Event_Features/Prior_Notification_of_Attendees_1-07.jpg" },
  { title: "Strategized Networking", image: "/Event_Features/Strategized_Networking_1.jpg" },
  { title: "Pre-Qualified Delegates", image: "/Event_Features/Pre_Qualified_Delegates_1.jpg" },
  { title: "Global Solution Providers", image: "/Event_Features/Global_Solution_Providers_1.jpg" },
];

const EventFeatures = () => {
  const headRef = useRef(null);
  useHeadingGroupAnimation(headRef, 0.1);

  const { ref, isInView } = useInView({ threshold: 0.1 });

  // Column refs
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);

  useEffect(() => {
    gsap.to(col1Ref.current, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: col1Ref.current,
        start: "top bottom",
        scrub: true,
      },
    });

    gsap.to(col2Ref.current, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: col2Ref.current,
        start: "top bottom",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Split features
  const col1Features = [features[0], features[2], features[4]];
  const col2Features = [features[1], features[3], features[5]];

  return (
    <div className="main-container text-white pt-16" ref={ref}>
      <SectionTitle title="Event" subtitle="Features" ref={headRef} />
      <div className="flex gap-4 mt-12">
        {/* Column 1 */}
        <div
          className="flex flex-col gap-4 w-1/2 will-change-transform"
          ref={col1Ref}
        >
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-10"></div>
          {col1Features.map((feature, index) => (
            <div className="relative h-[22rem] w-full" key={`col1-${index}`}>
              <img
                src={feature.image}
                alt={feature.title}
                className={`h-full w-full object-cover opacity-60 delay-[${
                  index * 200
                }ms] ${
                  isInView ? "animate-reveal-left-to-right" : "opacity-0 "
                }`}
              />
              <div className="absolute bottom-2 left-2 text-sm sm:text-base font-medium px-3 py-1 rounded">
                {feature.title}
              </div>
              {index === col1Features.length - 1 && (
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div
          className="flex flex-col gap-4 w-1/2 mt-20 will-change-transform"
          ref={col2Ref}
        >
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-10"></div>
          {col2Features.map((feature, index) => (
            <div className="relative h-[22rem] w-full" key={`col2-${index}`}>
              <img
                src={feature.image}
                alt={feature.title}
                className={`h-full w-full object-cover opacity-60 delay-[${
                  index * 200 + 100
                }ms] ${
                  isInView ? "animate-reveal-left-to-right" : "opacity-0"
                }`}
              />
              <div className="absolute bottom-2 left-2 text-sm sm:text-base font-medium px-3 py-1 rounded">
                {feature.title}
              </div>
              {index === col2Features.length - 1 && (
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventFeatures;
