import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useHeadingGroupAnimation, useMarqueeAnimation } from "../hooks";
import useIsDesktop from "../hooks/useIsDesktop";
import { usePinScroll } from "../hooks/usePinScroll";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger);
const InvestorMeet = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  useHeadingGroupAnimation(headRef, 0.1);

  const leftContainerRef = useRef<HTMLDivElement>(null);
  const rightContainerRef = useRef<HTMLDivElement>(null);
  useMarqueeAnimation(leftContainerRef, rightContainerRef, "y", 30);

  const pinRef = useRef<HTMLDivElement>(null!);
  const isDesktop = useIsDesktop(1024);
  usePinScroll(pinRef, { endOffset: 100,  disabled: !isDesktop }); 

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
        stagger: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="main-container text-white py-16" id="investor-meet">
      <div className="flex flex-col gap-6">
        <SectionTitle title="GBB Xclusive" subtitle="Investor-Developer-Operator Meet" ref={headRef} />
        <div className="flex lg:flex-row flex-col gap-4 ">
          {/* Image Animation Wrapper */}
          <div className="w-full flex md:flex-row flex-col gap-2 overflow-hidden lg:max-h-[800px] md:max-h-[500px] max-h-[800px]">
            <div className="flex flex-col gap-2 w-full h-[650px] overflow-hidden relative">
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-10"></div>
              <div
                ref={leftContainerRef}
                className="flex flex-col gap-2 relative z-0"
              >
                <div className="relative lg:w-80 w-full h-auto overflow-hidden">
                  <img
                    src="/Investor_Meet/image1.jpeg"
                    alt="Meeting 1"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-md"></div>
                </div>
                <div className="relative lg:w-80 w-full h-auto overflow-hidden">
                  <img
                    src="/Investor_Meet/image2.jpeg"
                    alt="Meeting 3"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-md"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full h-[650px] mt-12 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-10"></div>
              <div
                ref={rightContainerRef}
                className="flex flex-col gap-2 relative z-0"
              >
                <div className="relative lg:w-80 w-full h-auto overflow-hidden">
                  <img
                    src="/Investor_Meet/image3.jpeg"
                    alt="Meeting 2"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-md"></div>
                </div>
                <div className="relative lg:w-80 w-full h-auto overflow-hidden">
                  <img
                    src="/Investor_Meet/image4.jpeg"
                    alt="Meeting 4"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-md"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
            </div>
          </div>
          <div className=" w-full mt-10 " ref={containerRef}>
            <div ref={pinRef} className="flex flex-col gap-4">
            <p className="leading-relaxed text-gray-300 lg:w-[75%] sm:w-full">
            A premier platform bringing together global investors, top developers, and key operators 
            shaping the future of real estate across the African Continent. This session provides a unique 
            opportunity to dive into investment strategies, build impactful partnerships, and tap into the 
            region's rapidly expanding real estate industry. Capitalize on the chance to lead Africa’s growth 
            and carve your path in its thriving sector.
            </p>
          <Link
            to="/gbb-xclusive-investor-developer-operator-meet"
            className="text-black w-fit py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-[0_0_20px_4px_rgba(240,175,18,0.7)] hover:text-white"
            style={{
              background: "linear-gradient(96.18deg, #F0AF12 0%, #B2680A 100%)",
            }}
          >
            Enquire Now
          </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorMeet;
