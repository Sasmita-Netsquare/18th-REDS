import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useHeadingGroupAnimation } from "../hooks";
import { useInView } from "../hooks/useInView";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Gallery = () => {
  const headRef = useRef(null);
  const smootherRef = useRef<ScrollSmoother | null>(null);
  useHeadingGroupAnimation(headRef, 0.1);
  const { ref, isInView } = useInView({ threshold: 0.3 });

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

  return (
      <div >
        <div className="main-container pt-16" ref={ref}>
          {/* Header */}
          <SectionTitle title="Photos" subtitle="Gallery" ref={headRef} />
          {/* Gallery Grid */}
          <div className="flex gap-1 mt-15 gap-4">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 w-1/3 will-change-transform" ref={col1Ref}>
              <div className="h-[19rem] w-full">
                <img
                  src="/image_1.png"
                  alt="image"
                  className={`h-full w-full object-cover opacity-80 delay-animation] ${
                  isInView ? "animate-reveal-left-to-right" : "opacity-0"
                }`}
                />
              </div>
              <div className="h-[19rem] w-full">
                <img
                  src="/image_2.png"
                  alt="image"
                  className={`h-full w-full object-cover opacity-80 delay-animation] ${
                  isInView ? "animate-reveal-left-to-right" : "opacity-0"
                }`}
                />
              </div>
              <div className="h-[19rem] w-full">
                <img
                  src="/image_1.png"
                  alt="image"
                  className={`h-full w-full object-cover opacity-80 delay-animation] ${
                  isInView ? "animate-reveal-left-to-right" : "opacity-0"
                }`}
                />
              </div>
              <div className="h-[19rem] w-full">
                <img
                  src="/image_2.png"
                  alt="image"
                  className={`h-full w-full object-cover opacity-80 delay-animation] ${
                  isInView ? "animate-reveal-left-to-right" : "opacity-0"
                }`}
                />
              </div>
            </div>

            {/* Column 2 with adjusted margin */}
            <div className="flex flex-col gap-4 w-1/3 mt-20 will-change-transform"  ref={col2Ref}>
              <div className="h-[26rem] w-full">
                <img
                  src="/image_2.png"
                  alt="image"
                  className={`h-full w-full object-cover opacity-80 delay-animation] ${
                  isInView ? "animate-reveal-left-to-right" : "opacity-0"
                }`}
                />
              </div>
              <div className="h-[26rem] w-full">
                <img
                  src="/image_1.png"
                  alt="image"
                  className={`h-full w-full object-cover opacity-80 delay-animation] ${
                  isInView ? "animate-reveal-left-to-right" : "opacity-0"
                }`}
                />
              </div>
              <div className="h-[26rem] w-full">
                <img
                  src="/image_2.png"
                  alt="image"
                  className={`h-full w-full object-cover opacity-80 delay-animation] ${
                  isInView ? "animate-reveal-left-to-right" : "opacity-0"
                }`}
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 w-1/3 mt-10 will-change-transform"  ref={col3Ref}>
              <div className="h-[24rem] w-full">
                <img
                  src="/image_1.png"
                  alt="image"
                  className={`h-full w-full object-cover opacity-80 delay-animation] ${
                  isInView ? "animate-reveal-left-to-right" : "opacity-0"
                }`}
                />
              </div>
              <div className="h-[24rem] w-full">
                <img
                  src="/image_2.png"
                  alt="image"
                  className={`h-full w-full object-cover opacity-80 delay-animation] ${
                  isInView ? "animate-reveal-left-to-right" : "opacity-0"
                }`}
                />
              </div>
              <div className="h-[24rem] w-full">
                <img
                  src="/image_1.png"
                  alt="image"
                  className={`h-full w-full object-cover opacity-80 delay-animation] ${
                  isInView ? "animate-reveal-left-to-right" : "opacity-0"
                }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Gallery;
