import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHeadingGroupAnimation } from "../hooks";
import { useInView } from "../hooks/useInView";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: "Distinguished Speakers", image: "/image_1.png" },
  { title: "Network of Industry Associations", image: "/image_2.png" },
  { title: "Prior Notification of Attendees", image: "/image_2.png" },
  { title: "Strategized Networking", image: "/image_1.png" },
  { title: "Pre-Qualified Delegates", image: "/image_1.png" },
  { title: "Global Solution Providers", image: "/image_2.png" },
];

const EventFeatures = () => {
  const headRef = useRef(null);
  useHeadingGroupAnimation(headRef, 0.1);

  const { ref, isInView } = useInView({ threshold: 0.3 });

  // Column refs
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);

  useEffect(() => {
    gsap.to(col1Ref.current, {
      yPercent: -5,
      ease: "none",
      scrollTrigger: {
        trigger: col1Ref.current,
        start: "top bottom",
        scrub: true,
      },
    });

    gsap.to(col2Ref.current, {
      yPercent: -20,
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
        <div className="flex flex-col gap-4 w-1/2 will-change-transform" ref={col1Ref}>
          {col1Features.map((feature, index) => (
            <div className="relative h-[22rem] w-full" key={`col1-${index}`}>
              <img
                src={feature.image}
                alt={feature.title}
                className={`h-full w-full object-cover opacity-80 delay-[${index * 200}ms] ${
                  isInView ? "animate-reveal-left-to-right" : "opacity-0"
                }`}
              />
              <div className="absolute bottom-2 left-2 text-sm sm:text-base font-medium bg-opacity-50 px-3 py-1 rounded">
                {feature.title}
              </div>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 w-1/2 mt-20 will-change-transform" ref={col2Ref}>
          {col2Features.map((feature, index) => (
            <div className="relative h-[22rem] w-full" key={`col2-${index}`}>
              <img
                src={feature.image}
                alt={feature.title}
                className={`h-full w-full object-cover opacity-80 delay-[${index * 200 + 100}ms] ${
                  isInView ? "animate-reveal-left-to-right" : "opacity-0"
                }`}
              />
              <div className="absolute bottom-2 left-2 text-sm sm:text-base font-medium bg-opacity-50 px-3 py-1 rounded">
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
