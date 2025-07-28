import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useHeadingGroupAnimation } from "../hooks";
import { useInView } from "../hooks/useInView";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const features = [
  { image: "/Event_Features/Distinguished_Speakers_2.jpg" },
  { image: "/Event_Features/Global_Solution_Providers_2.jpg" },
  { image: "/Event_Features/Network_of_Industry_Associations_2.jpg" },
  { image: "/Event_Features/Pre_Qualified_Delegates_2.jpg" },
  { image: "/Event_Features/Prior_Notification_of_Attendees_1-08.jpg" },
  { image: "/Event_Features/Strategized_Networking_2.jpg" },
  { image: "/Event_Features/Strategized_Networking_1.jpg" },
  { image: "/Event_Features/Global_Solution_Providers_1.jpg" },
  { image: "/Event_Features/Pre_Qualified_Delegates_1.jpg" },
  { image: "/Event_Features/Prior_Notification_of_Attendees_1-07.jpg" },
];

const Gallery = () => {
  const headRef = useRef(null);
  const smootherRef = useRef<ScrollSmoother | null>(null);
  useHeadingGroupAnimation(headRef, 0.1);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  // Refs for each column
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);

  useEffect(() => {
    gsap.to(col1Ref.current, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: col1Ref.current,
        start: "top bottom",
        scrub: true,
        markers: false,
      },
    });

    gsap.to(col2Ref.current, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: col2Ref.current,
        start: "top bottom",
        scrub: true,
        markers: false,
      },
    });

    gsap.to(col3Ref.current, {
      yPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: col3Ref.current,
        start: "top bottom",
        scrub: true,
        markers: false,
      },
    });

    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const col1Features = [features[0], features[1], features[2], features[3]];
  const col2Features = [features[4], features[5], features[6]];
  const col3Features = [features[7], features[8], features[9]];

  return (
    <div>
      <div className="main-container pt-16" ref={ref}>
        {/* Header */}
        <SectionTitle title="Photos" subtitle="Gallery" ref={headRef} />
        {/* Gallery Grid */}
        <div className="flex mt-15 gap-4">
          {/* Column 1 */}
          <div
            className="flex flex-col gap-4 lg:w-1/3 will-change-transform"
            ref={col1Ref}
          >
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-10"></div>
            {col1Features.map((feature, index) => (
              <div key={index} className="h-[19rem] w-full relative">
                <img
                  src={feature.image}
                  alt="image"
                  className={`h-full w-full object-cover opacity-80 delay-animation] ${
                    isInView ? "animate-reveal-left-to-right" : "opacity-0"
                  }`}
                />

                {index === col1Features.length - 1 && (
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10"></div>
                )}
              </div>
            ))}
          </div>

          {/* Column 2 with adjusted margin */}
          <div
            className="flex flex-col gap-4 lg:w-1/3 mt-20 will-change-transform"
            ref={col2Ref}
          >
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-10"></div>
            {col2Features.map((feature, index) => (
              <div key={index} className="h-[26rem] w-full relative">
                <img
                  src={feature.image}
                  alt="image"
                  className={`h-full w-full object-cover opacity-80 delay-animation] ${
                    isInView ? "animate-reveal-left-to-right" : "opacity-0"
                  }`}
                />
                {index === col2Features.length - 1 && (
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10"></div>
                )}
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div
            className="flex flex-col gap-4 lg:w-1/3 mt-10 will-change-transform"
            ref={col3Ref}
          >
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-10"></div>
            {col3Features.map((feature, index) => (
              <div key={index} className="h-[24rem] w-full relative">
                <img
                  src={feature.image}
                  alt="image"
                  className={`h-full w-full object-cover opacity-80 delay-animation] ${
                    isInView ? "animate-reveal-left-to-right" : "opacity-0"
                  }`}
                />
                {index === col3Features.length - 1 && (
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
