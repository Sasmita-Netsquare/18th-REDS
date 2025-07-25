// components/MeetGrid.tsx
import { useRef } from "react";
import { useHeadingGroupAnimation } from "../hooks";
import useIsDesktop from "../hooks/useIsDesktop";
import { usePinScroll } from "../hooks/usePinScroll";
import SectionTitle from "./SectionTitle";
const MeetGrid = () => {
  const people = [
    "Architects",
    "Interior Designers",
    "Developers",
    "Hotel Operators",
    "Hotel Owners",
    "Consultants",
    "Contractors",
    "Global Solution Providers",
    "Media / Associations",
    "Investors",
  ];
  const headRef = useRef(null);
  useHeadingGroupAnimation(headRef, 0.1); const 
  pinRef = useRef<HTMLDivElement>(null!);
  const isDesktop = useIsDesktop(1024);
  usePinScroll(pinRef, { endOffset: 485, disabled: !isDesktop });

  return (
    <div className="main-container flex items-center justify-center py-16">
      <div className=" w-full flex flex-col gap-7">
        <div ref={pinRef}>
        <SectionTitle title="Who you will" subtitle="Meet" ref={headRef} />
        </div>
        <div className="flex justify-end items-end">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:w-9/12">
            {people.map((person, index) => (
              <div
                key={index}
                className="bg-[#111] border-2 border-[#1c1c1e] text-white text-center px-4 text-lg font-medium py-20 hover:bg-white hover:text-black transition-all duration-800 ease-in-out"
              >
                {person}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetGrid;
