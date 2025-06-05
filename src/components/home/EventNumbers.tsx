import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { useHeadingGroupAnimation } from "../hooks";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  suffix = "",
}) => {
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!numberRef.current) return;

    const obj = { val: 0 };

    const anim = gsap.to(obj, {
      val: value,
      duration: 2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: numberRef.current,
        start: "top 80%",
        toggleActions: "restart none none none",
      },
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.textContent =
            Math.floor(obj.val).toLocaleString() + suffix;
        }
      },
    });

    return () => {
      anim.kill();
    };
  }, [value, suffix]);

  return (
    <div ref={numberRef} className="md:text-5xl text-4xl">
      0{suffix}
    </div>
  );
};

const EventNumbers: React.FC = () => {
  const headRef = useRef(null);
  useHeadingGroupAnimation(headRef, 0.1);

  return (
    <div className="main-container flex items-center justify-center py-16">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 w-full ">
        {/* Left Section */}
        <div className="w-full" ref={headRef}>
          <p className="text-5xl">Event by</p>
          <p className="text-yellow-600 text-7xl">Numbers</p>
        </div>

        {/* Right Section - Stats Grid */}
        <div className="text-white flex items-center justify-center border-4 border-[#1c1c1e] lg:mt-36">
          <div className="grid grid-cols-3 grid-rows-3 max-w-3xl w-full">
            {/* Top full-width box */}
            <div className="col-span-3 bg-[#111] border-2 border-[#1c1c1e] flex flex-col gap-3 items-center justify-center py-12 ">
              <AnimatedNumber value={24} />
              <div className="text-xl">Events</div>
            </div>

            {/* Middle 3 boxes */}
            <div className="bg-[#111] border-2 border-[#1c1c1e] flex flex-col gap-3 items-center justify-center py-7">
              <AnimatedNumber value={381} suffix="+" />
              <div className="text-xl">Speakers</div>
            </div>
            <div className="bg-[#111] border-2 border-[#1c1c1e] flex flex-col gap-3 items-center justify-center py-7">
              <AnimatedNumber value={1050} suffix="+" />
              <div className="text-xl">Solution Providers</div>
            </div>
            <div className="bg-[#111] border-2 border-[#1c1c1e] flex flex-col gap-3 items-center justify-center py-7">
              <AnimatedNumber value={2592} suffix="+" />
              <div className="text-xl">Buyers</div>
            </div>

            {/* Bottom 2 boxes */}
            <div className="flex col-span-3 w-full ">
              <div className="bg-[#111] border-2 border-[#1c1c1e] flex flex-col gap-3 items-center justify-center py-12 w-full">
                <AnimatedNumber value={24400} suffix="+" />
                <div className="text-xl">B2B Meetings</div>
              </div>
              <div className="bg-[#111] border-2 border-[#1c1c1e] flex flex-col gap-3 items-center justify-center py-12 w-full">
                <AnimatedNumber value={24400} suffix="+" />
                <div className="text-xl">B2B Meetings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventNumbers;
