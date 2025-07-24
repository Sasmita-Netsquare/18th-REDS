import { useRef } from "react";
import { useHeadingGroupAnimation, useMarqueeAnimation } from "../hooks";
import useIsDesktop from "../hooks/useIsDesktop";
import { usePinScroll } from "../hooks/usePinScroll";
import SectionTitle from "./SectionTitle";

const PastPartners = () => {
  const rows1 = [
    {
      image: "/sumit_partners/row1/summit-row1-1.png",
    },
    {
      image: "/sumit_partners/row1/summit-row1-2.png",
    },
    {
      image: "/sumit_partners/row1/summit-row1-3.png",
    },
    {
      image: "/sumit_partners/row1/summit-row1-4.png",
    },
    {
      image: "/sumit_partners/row1/summit-row1-5.png",
    },
    {
      image: "/sumit_partners/row1/summit-row1-6.png",
    },
    {
      image: "/sumit_partners/row1/summit-row1-7.png",
    },
    {
      image: "/sumit_partners/row1/summit-row1-8.png",
    },
    {
      image: "/sumit_partners/row1/summit-row1-9.png",
    },
    {
      image: "/sumit_partners/row1/summit-row1-10.png",
    },
    {
      image: "/sumit_partners/row1/summit-row1-11.png",
    },
    {
      image: "/sumit_partners/row1/summit-row1-12.png",
    },
    // {
    //   image: "/sumit_partners/row1/summit-row1-13.png",
    // },
    // {
    //   image: "/sumit_partners/row1/summit-row1-14.png",
    // },
    // {
    //   image: "/sumit_partners/row1/summit-row1-15.png",
    // },
    // {
    //   image: "/sumit_partners/row1/summit-row1-16.png",
    // },
    // {
    //   image: "/sumit_partners/row1/summit-row1-17.png",
    // },
    // {
    //   image: "/sumit_partners/row1/summit-row1-18.png",
    // },
    // {
    //   image: "/sumit_partners/row1/summit-row1-19.png",
    // },
    // {
    //   image: "/sumit_partners/row1/summit-row1-20.png",
    // },
    // {
    //   image: "/sumit_partners/row1/summit-row1-21.png",
    // },
  ];

   const rows2 = [
    {
      image: "/sumit_partners/row2/summit-row2-1.png",
    },
    {
      image: "/sumit_partners/row2/summit-row2-2.png",
    },
    {
      image: "/sumit_partners/row2/summit-row2-3.png",
    },
    {
      image: "/sumit_partners/row2/summit-row2-4.png",
    },
    {
      image: "/sumit_partners/row2/summit-row2-5.png",
    },
    {
      image: "/sumit_partners/row2/summit-row2-6.png",
    },
    {
      image: "/sumit_partners/row2/summit-row2-7.png",
    },
    // {
    //   image: "/sumit_partners/row2/summit-row2-8.png",
    // },
    {
      image: "/sumit_partners/row2/summit-row2-9.png",
    },
    {
      image: "/sumit_partners/row2/summit-row2-10.png",
    },
    {
      image: "/sumit_partners/row2/summit-row2-11.png",
    },
    {
      image: "/sumit_partners/row2/summit-row2-12.png",
    },
    {
      image: "/sumit_partners/row2/summit-row2-13.png",
    },
    {
      image: "/sumit_partners/row2/summit-row2-14.png",
    },
    {
      image: "/sumit_partners/row2/summit-row2-15.png",
    },
    {
      image: "/sumit_partners/row2/summit-row2-16.png",
    },
    {
      image: "/sumit_partners/row2/summit-row2-17.png",
    },
    {
      image: "/sumit_partners/row2/summit-row2-18.png",
    },
    {
      image: "/sumit_partners/row2/summit-row2-19.png",
    },
  ]
  
  const headRef = useRef(null);
  useHeadingGroupAnimation(headRef, 0.1);
  // const mid = Math.ceil(mediaPartners.length / 2);
  // const topLogos = mediaPartners.slice(0, mid);
  // const bottomLogos = mediaPartners.slice(mid);
  const leftRowRef = useRef<HTMLDivElement>(null);
  const rightRowRef = useRef<HTMLDivElement>(null);
  const leftCopyRef = useRef<HTMLDivElement>(null);
  const RowCopyRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null!);
  const isDesktop = useIsDesktop(1024);
  usePinScroll(pinRef, { endOffset: 530, disabled: !isDesktop });

  useMarqueeAnimation(leftRowRef, rightRowRef, "x", 100);
  useMarqueeAnimation(leftCopyRef, RowCopyRef, "x", 180);

  return (
    <div className="main-container py-16">
      <div className="relative">
        <div ref={pinRef}>
          <SectionTitle title="Our Past" subtitle="Partners" ref={headRef} />
        </div>
      </div>
      {/* Summit Partners */}
      <div className="flex md:justify-end lg:justify-end my-2 pb-3 md:pr-1 sm:justify-center">
        <p className="text-white text-right text-2xl">Summit Partners</p>
      </div>
      <div className="w-full flex justify-end overflow-hidden pb-6 px-[0.05rem]">
        <div className="lg:w-[75%] overflow-hidden">
          <div ref={leftRowRef} className="flex gap-1 mb-4 w-max ">
            {rows1.map((item, index) => (
              <div
                key={index}
                className="aspect-[4/2] px-3 w-full h-28 overflow-hidden "
              >
                <img
                  src={item.image}
                  alt="logo"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
          <div ref={rightRowRef} className="flex gap-1 mb-4 w-max">
            {rows2.map((item, index) => (
              <div
                key={index}
                className="aspect-[4/2] w-full h-28 overflow-hidden px-3"
              >
                <img
                  src={item.image}
                  alt="logo"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
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
            {rows1.map((item, index) => (
              <div
                key={index}
                className="aspect-[4/2] px-3 w-full h-28 overflow-hidden"
              >
                <img
                  src={item.image}
                  alt="logo"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
          <div ref={RowCopyRef} className="flex gap-1 mb-4 w-max">
            {rows2.map((item, index) => (
              <div
                key={index}
                className="aspect-[4/2] px-3 w-full h-28 overflow-hidden"
              >
                <img
                  src={item.image}
                  alt="logo"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
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
