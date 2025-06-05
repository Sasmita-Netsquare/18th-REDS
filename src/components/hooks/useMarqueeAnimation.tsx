/* eslint-disable @typescript-eslint/no-explicit-any */
import { gsap } from "gsap";
import { useEffect } from "react";

const useMarqueeAnimation = (
  ref1: any,
  ref2: any,
  direction: string,
  duration: number
) => {
  useEffect(() => {
    const el1 = ref1.current;
    const el2 = ref2.current;

    if (el1 && el2) {
      el1.innerHTML += el1.innerHTML;
      el2.innerHTML += el2.innerHTML;

      gsap.to(el1, {
        [direction]: "-50%",
        duration,
        ease: "none",
        repeat: -1,
      });
      gsap.set(el2, { [direction]: "-50%" });
      gsap.to(el2, {
        [direction]: "0%",
        duration,
        ease: "none",
        repeat: -1,
      });
      const pauseOnHover = (el: HTMLDivElement) => {
        el.addEventListener("mouseenter", () =>
          gsap.getTweensOf(el).forEach((tween) => tween.pause())
        );
        el.addEventListener("mouseleave", () =>
          gsap.getTweensOf(el).forEach((tween) => tween.play())
        );
      };

      pauseOnHover(el1);
      pauseOnHover(el2);
    }
  }, [ref1, ref2, direction, duration]);
};

export default useMarqueeAnimation;
