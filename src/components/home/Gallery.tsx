import { useRef } from "react";
import { useHeadingGroupAnimation } from "../hooks";

const Gallery = () => {
  const headRef = useRef(null);
  useHeadingGroupAnimation(headRef, 0.1);

  return (
    <div className="main-container py-16">
      {/* Header */}
      <div className="w-full pb-5" ref={headRef}>
        <p className="text-5xl">Photos</p>
        <p className="text-yellow-600 text-7xl">Gallery</p>
      </div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-3 gap-1">
        {/* Column 1 */}
        <div className="flex flex-col gap-2 ">
          <div className="h-[19rem] w-auto overflow-hidden">
            <img
              src="/image_1.png"
              alt="image"
              className="h-full w-auto hover:scale-110 delay-animation"
            />
          </div>
          <div className="h-[19rem] w-auto overflow-hidden">
            <img
              src="/image_2.png"
              alt="image"
              className="h-full w-auto hover:scale-110 delay-animation"
            />
          </div>
          <div className="h-[19rem] w-auto overflow-hidden">
            <img
              src="/image_1.png"
              alt="image"
              className="h-full w-auto hover:scale-110 delay-animation"
            />
          </div>
          <div className="h-[19rem] w-auto overflow-hidden">
            <img
              src="/image_2.png"
              alt="image"
              className="h-full w-auto hover:scale-110 delay-animation"
            />
          </div>
          <div className="h-[19rem] w-auto overflow-hidden">
            <img
              src="/image_1.png"
              alt="image"
              className="h-full w-auto hover:scale-110 delay-animation"
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2">
          <div className="h-[26rem] w-auto overflow-hidden">
            <img
              src="/image_2.png"
              alt="image"
              className="h-full w-auto hover:scale-110 delay-animation"
            />
          </div>
          <div className="h-[26rem] w-auto overflow-hidden">
            <img
              src="/image_1.png"
              alt="image"
              className="h-full w-auto hover:scale-110 delay-animation"
            />
          </div>
          <div className="h-[26rem] w-auto overflow-hidden">
            <img
              src="/image_2.png"
              alt="image"
              className="h-full w-auto hover:scale-110 delay-animation"
            />
          </div>
          <div className="h-[26rem] w-auto overflow-hidden">
            <img
              src="/image_1.png"
              alt="image"
              className="h-full w-auto hover:scale-110 delay-animation"
            />
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2">
          <div className="h-[24rem] w-auto overflow-hidden">
            <img
              src="/image_1.png"
              alt="image"
              className="h-full w-auto hover:scale-110 delay-animation"
            />
          </div>
          <div className="h-[24rem] w-auto overflow-hidden">
            <img
              src="/image_2.png"
              alt="image"
              className="h-full w-auto hover:scale-110 delay-animation"
            />
          </div>
          <div className="h-[24rem] w-auto overflow-hidden">
            <img
              src="/image_1.png"
              alt="image"
              className="h-full w-auto hover:scale-110 delay-animation"
            />
          </div>
          <div className="h-[24rem] w-auto overflow-hidden">
            <img
              src="/image_2.png"
              alt="image"
              className="h-full w-auto hover:scale-110 delay-animation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
