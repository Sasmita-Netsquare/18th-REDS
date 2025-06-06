import { useRef } from "react";
import { useHeadingGroupAnimation } from "../hooks";
import { useInView } from "../hooks/useInView";

const Gallery = () => {
  const headRef = useRef(null);
  useHeadingGroupAnimation(headRef, 0.1);

  const { ref, isInView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="main-container py-16" ref={ref}>
      {/* Header */}
      <div className="w-full pb-5" ref={headRef}>
        <p className="lg:text-5xl md:text-5xl text-3xl">Photos</p>
        <p className="text-yellow-600 lg:text-8xl md:text-6xl text-5xl">Gallery</p>
      </div>

      {/* Gallery Grid */}
      <div ref={ref} className="grid grid-cols-3 gap-1">
        {[0, 1, 2].map((colIdx) => (
          <div key={colIdx} className={`flex flex-col gap-1`}>
            {[...Array(4)].map((_, rowIdx) => {
              const imageIndex = (colIdx + rowIdx) % 2 === 0 ? 1 : 2;
              const src = `/image_${imageIndex}.png`;
              return (
                <div
                  key={rowIdx}
                  className={` w-full overflow-hidden ${
                    colIdx === 1 ? "h-[26rem]" : "h-[24rem]"
                  }`}
                >
                  <img
                    src={src}
                    alt={`image ${imageIndex}`}
                    style={{
                      animationDelay: `${(colIdx * 4 + rowIdx) * 150}ms`,
                    }}
                    className={`h-full w-full object-cover transition-transform duration-500 ease-in-out
                ${isInView ? "animate-reveal-left-to-right" : "opacity-0"}`}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
