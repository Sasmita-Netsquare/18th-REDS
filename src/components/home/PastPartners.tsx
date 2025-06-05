import { useRef } from "react";
import { useHeadingGroupAnimation, useMarqueeAnimation } from "../hooks";

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

  useMarqueeAnimation(leftRowRef, rightRowRef, "x", 40);
  useMarqueeAnimation(leftCopyRef, RowCopyRef, "x", 40);

  return (
    <div className="main-container py-16">
      <div className="w-full" ref={headRef}>
        <p className="text-5xl">Our Past</p>
        <p className="text-yellow-600 text-7xl">Partners</p>
      </div>

      {/* Summit Partners */}
      <div className="flex justify-end mb-4">
        <p className="text-white text-right text-2xl">Summit Partners</p>
      </div>
      <div className="w-full flex justify-end overflow-hidden">
        <div className="w-[81%] overflow-hidden">
          <div ref={leftRowRef} className="flex mb-4 w-max ">
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
          <div ref={rightRowRef} className="flex mb-4 w-max">
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
      <div className="flex justify-end my-2 mt-8">
        <p className="text-white text-right text-2xl">
          Media Association Partners
        </p>
      </div>
      <div className="w-full flex justify-end overflow-hidden">
        <div className="w-[81%] overflow-hidden">
          <div ref={leftCopyRef} className="flex mb-4 w-max ">
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
          <div ref={RowCopyRef} className="flex mb-4 w-max">
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
