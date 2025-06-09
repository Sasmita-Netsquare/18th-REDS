import { useRef } from "react";
import { useHeadingGroupAnimation } from "../hooks";
import { useInView } from "../hooks/useInView";
import SectionTitle from "./SectionTitle";

const Gallery = () => {
  const headRef = useRef(null);
  useHeadingGroupAnimation(headRef, 0.1);

  const { ref, isInView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="main-container py-16" ref={ref}>
      {/* Header */}
      <SectionTitle title="Photos" subtitle="Gallery" ref={headRef} />
      {/* Gallery Grid */}
      <div ref={ref} className="grid grid-cols-3 gap-1 pt-5">
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
