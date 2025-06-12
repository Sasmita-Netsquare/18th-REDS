import { useRef } from "react";
import { useHeadingGroupAnimation, useMarqueeAnimation } from "../hooks";
import SectionTitle from "./SectionTitle";

const PastPartners = () => {
  const mediaPartners = [
    {
      image: "/partner1.jpg",
    },
    {
      image: "/partner2.jpg",
    },
    {
      image: "/partner3.jpg",
    },
    {
      image: "/partner4.jpg",
    },
    {
      image: "/partner1.jpg",
    },
    {
      image: "/partner2.jpg",
    },
    {
      image: "/partner3.jpg",
    },
    {
      image: "/partner4.jpg",
    },
    {
      image: "/partner1.jpg",
    },
    {
      image: "/partner2.jpg",
    },
    {
      image: "/partner3.jpg",
    },
    {
      image: "/partner4.jpg",
    },
  ];
  const headRef = useRef(null);
  useHeadingGroupAnimation(headRef, 0.1);
  const mid = Math.ceil(mediaPartners.length / 2);
  const topLogos = mediaPartners.slice(0, mid);
  const bottomLogos = mediaPartners.slice(mid);
  const leftRowRef = useRef<HTMLDivElement>(null);
  const rightRowRef = useRef<HTMLDivElement>(null);
  const leftCopyRef = useRef<HTMLDivElement>(null);
  const RowCopyRef = useRef<HTMLDivElement>(null);

  useMarqueeAnimation(leftRowRef, rightRowRef, "x", 30);
  useMarqueeAnimation(leftCopyRef, RowCopyRef, "x", 30);

  return (
    <div className="main-container py-16">
      <SectionTitle title="Our Past" subtitle="Partners" ref={headRef} />
      {/* Summit Partners */}
      <div className="flex md:justify-end lg:justify-end my-2 pb-3 md:pr-1 sm:justify-center">
        <p className="text-white text-right text-2xl">Summit Partners</p>
      </div>
      <div className="w-full flex justify-end overflow-hidden pb-6 px-[0.05rem]">
        <div className="lg:w-[75%] overflow-hidden">
          <div ref={leftRowRef} className="flex gap-1 mb-4 w-max ">
            {topLogos.map((item, index) => (
              <div
                key={index}
                className="aspect-[4/2] w-full h-28 overflow-hidden"
              >
                <img
                  src={item.image}
                  alt="logo"
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
          <div ref={rightRowRef} className="flex gap-1 mb-4 w-max">
            {bottomLogos.map((item, index) => (
              <div
                key={index}
                className="aspect-[4/2] w-full h-28 overflow-hidden"
              >
                <img
                  src={item.image}
                  alt="logo"
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Media Association Partners */}
      <div className="flex md:justify-end lg:justify-end my-2 pb-3 md:pr-1 sm:justify-center">
        <p className="text-white text-right text-2xl">
          Media Association Partners
        </p>
      </div>
      <div className="w-full flex justify-end overflow-hidden px-[0.05rem]">
        <div className="lg:w-[75%] overflow-hidden">
          <div ref={leftCopyRef} className="flex gap-1 mb-4 w-max ">
            {topLogos.map((item, index) => (
              <div
                key={index}
                className="aspect-[4/2] w-full h-28 overflow-hidden"
              >
                <img
                  src={item.image}
                  alt="logo"
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
          <div ref={RowCopyRef} className="flex gap-1 mb-4 w-max">
            {bottomLogos.map((item, index) => (
              <div
                key={index}
                className="aspect-[4/2] w-full h-28 overflow-hidden"
              >
                <img
                  src={item.image}
                  alt="logo"
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastPartners;
