import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { useHeadingGroupAnimation } from "../hooks";
import useIsDesktop from "../hooks/useIsDesktop";
import { usePinScroll } from "../hooks/usePinScroll";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  className?: string;
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
        toggleActions: "restart none restart none",
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
    <div ref={numberRef} className="lg:text-5xl md:text-5xl text-2xl">
      0{suffix}
    </div>
  );
};

const EventNumbers: React.FC = () => {
  const headRef = useRef(null);
  useHeadingGroupAnimation(headRef, 0.1);
  const pinRef = useRef<HTMLDivElement>(null!);
  const isDesktop = useIsDesktop(1024);
  usePinScroll(pinRef, { endOffset: 485, disabled: !isDesktop });

  return (
    <div className="main-container flex items-center justify-center py-16">
      <div className="w-full flex flex-col gap-7">
        {/* Left Section */}
          <div ref={pinRef}>
            <SectionTitle title="Event by" subtitle="Numbers" ref={headRef} />
          </div>

        {/* Right Section - Stats Grid */}
        <div className="flex justify-end">
        <div className="text-white border-4 border-[#1c1c1e] md:mt-5 mt-5 lg:w-9/12 w-full">
          <div className="grid grid-cols-3 grid-rows-3 lg:w-full">
            {/* Top full-width box */}
            <div className="col-span-3 bg-[#111] border-2 border-[#1c1c1e] flex flex-col gap-3 items-center justify-center py-12 ">
              <AnimatedNumber value={25} />
              <div className="lg:text-xl md:text-xl text-lg">Events</div>
            </div>

            {/* Middle 3 boxes */}
            <div className="bg-[#111] border-2 border-[#1c1c1e] flex flex-col gap-3 items-center justify-center py-7">
              <AnimatedNumber value={402} suffix="+" />
              <div className="lg:text-xl md:text-xl text-lg">Speakers</div>
            </div>
            <div className="bg-[#111] border-2 border-[#1c1c1e] flex flex-col gap-3 items-center justify-center py-7">
              <AnimatedNumber value={1158} suffix="+" />
              <div className="lg:text-xl md:text-xl text-lg text-center">
                Solution Providers
              </div>
            </div>
            <div className="bg-[#111] border-2 border-[#1c1c1e] flex flex-col gap-3 items-center justify-center py-7">
              <AnimatedNumber value={2750} suffix="+" />
              <div className="lg:text-xl md:text-xl text-lg">Buyers</div>
            </div>

            {/* Bottom 2 boxes */}
            <div className="flex col-span-3 w-full ">
              <div className="bg-[#111] border-2 border-[#1c1c1e] flex flex-col gap-3 items-center justify-center py-12 w-full">
                <AnimatedNumber value={25400} suffix="+" />
                <div className="lg:text-xl md:text-xl text-lg">
                  B2B Meetings
                </div>
              </div>
              <div className="bg-[#111] border-2 border-[#1c1c1e] flex flex-col gap-3 items-center justify-center py-12 w-full">
                <AnimatedNumber value={25400} suffix="+" />
                <div className="lg:text-xl md:text-xl text-lg">
                  B2B Meetings
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default EventNumbers;
