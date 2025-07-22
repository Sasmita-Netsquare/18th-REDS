import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useHeadingGroupAnimation } from "../hooks";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const EventAbout = () => {
  const containerRef = useRef(null);
  const headRef = useRef(null);
  const imageRef = useRef(null);
  useHeadingGroupAnimation(headRef, 0.3);
  useHeadingGroupAnimation(imageRef, 0.3);

  useEffect(() => {
    if (!containerRef.current) return;

    // const paragraphs = containerRef.current.querySelectorAll("p");
    const paragraphs = (containerRef.current as HTMLElement).querySelectorAll(
      "p"
    );

    gsap.fromTo(
      paragraphs,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.5, // delay between each <p> animation
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // when top of container hits 80% viewport height
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <div className="main-container flex items-center justify-center lg:py-10">
      <div className="flex flex-col justify-center items-center w-full">
        <SectionTitle title="" subtitle="Overview" ref={headRef} />
        <div className="flex lg:flex-row flex-col w-full md:gap-5 gap-4 sm:justify-center sm:items-center">
        <div
          className="relative mt-10 md:w-full lg:px-[0.01rem] md:px-[0.1rem]"
          ref={imageRef}
        >
          <img
            src="/Meetings-Section-15.png"
            alt="image"
            className="w-full h-auto lg:h-full rounded-md"
          />
          <div className="absolute inset-0 bg-black/30 rounded-md"></div>
        </div>

          {/* Right Section */}
          <div
            className="flex flex-col gap-5 justify-start items-start lg:w-[100%] lg:pl-[3.8rem] lg:pr-[12rem] md:w-[100%] sm:w-[98%]"
            ref={containerRef}
          >
            <p>
              Africa's real estate market is poised to reach US$17.64 trillion by 2025, 
              driven by rapid urbanization and increased infrastructure investments. 
               This if further expected to grow at an annual rate of 5.58% from 2025 to 2029, 
               reaching US$21.92 trillion by 2029. The Residential Market dominates this growth 
               with a projected volume of US$14.87 trillion in 2025. The hotel market is not far 
               behind with market projections of the revenue in this market expected to surge from 
               US$11.29bn in 2025 to US$15.00bn by 2029, at an annual growth rate of 7.36%. The 
               Commercial Real Estate market in Africa is anticipated to achieve a significant milestone, 
               with a projected value of US$2.77tn in 2025 and expected growth to US$3.20tn by 2029.
            </p>
            <p>
              While the entire continent is showing exponential growth, some countries with notable 
              developments are Mauritius, Seychelles, Morocco, Egypt, Namibia, South Africa, Rwanda, 
              Nigeria, Ethiopia, Ghana, Tanzania and Kenya. With such strong market factors, the demand 
              for delivering these massive volumes of real estate projects as per the international standards 
              and within the stringent time frames is huge which is why the 18th Edition Real Estate Development 
              Summit Africa plays such a vital role in bringing the decision makers together, to meet these demands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventAbout;
