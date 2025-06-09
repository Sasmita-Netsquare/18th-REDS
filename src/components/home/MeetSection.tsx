// components/MeetGrid.tsx
import { useRef } from "react";
import { useHeadingGroupAnimation } from "../hooks";
import SectionTitle from "./SectionTitle";
const MeetGrid = () => {
  const people = [
    "Architects",
    "Interior Designers",
    "Developers",
    "Hotel Operators",
    "Hotel Owners",
    "Consultants",
    "Global Solution Providers",
    "Media / Associations",
  ];
  const headRef = useRef(null);
  useHeadingGroupAnimation(headRef, 0.1);

  return (
    <div className="main-container flex items-center justify-center py-16">
      <div className=" w-full flex flex-col gap-7">
        <SectionTitle title="Who you will" subtitle="Meet" ref={headRef} />
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
  );
};

export default MeetGrid;
