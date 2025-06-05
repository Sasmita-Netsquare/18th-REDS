import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useHeadingGroupAnimation } from "../hooks";

gsap.registerPlugin(ScrollTrigger);

const EventAbout = () => {
  const containerRef = useRef(null);
  const headRef = useRef(null);
  useHeadingGroupAnimation(headRef, 0.1);

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
    <div className="main-container flex items-center justify-center py-16">
      <div className="flex flex-col justify-center items-center gap-8 w-full">
        <div className="w-full" ref={headRef}>
          <p className="text-5xl">About our</p>
          <p className="text-yellow-600 text-7xl">Event</p>
        </div>
        <div className="flex lg:flex-row flex-col w-full">
          <div className="mt-10 w-full">
            <img
              src="/image_1.png"
              alt="image"
              className="w-full lg:w-[70rem] h-auto rounded-md"
            />
          </div>

          {/* Right Section */}
          <div
            className="flex flex-col gap-5 justify-start items-start w-2/3 lg:pl-[5rem]"
            ref={containerRef}
          >
            <p>
              Saudi Arabia’s Real Estate Market size is estimated at USD 69.51
              billion in 2024, and is expected to reach USD 101.62 billion by
              2029. Saudi Arabia has identified housing, tourism and commercial
              as some of its key projects under Vision 2030. As the demand
              continues to surpass supply in these sectors, owners, developers,
              operators, contractors, architects, designers and consultants are
              working wonders to create projects of the future, projects that
              redefine human limitations, projects that push the boundaries of
              possibilities. What they need are, right partners and products to
              count on.
            </p>
            <p>
              Real Estate Development Summit provides a gateway to these
              possibilities. By efficiently putting your time to use for
              valuable knowledge exchange, guidance of the thought leaders and
              most importantly connecting you, to the right people with right
              requirement at the right time. Breaking the confines of the
              conventional, embark on this journey to explore the world of
              opportunities as we are Connecting Beyond Boundaries!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventAbout;
