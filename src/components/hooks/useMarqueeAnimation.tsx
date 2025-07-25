import {gsap} from "gsap";
import { useEffect } from "react";

const useMarqueeAnimation = (
  ref1: any,
  ref2: any,
  property: string,
  duration: number = 20 
) => {
  useEffect(() => {
    const el1 = ref1.current;
    const el2 = ref2.current;

    if (el1 && el2) {
      const isTranslate = property === "x" || property === "y";

      if (isTranslate) {
        el1.innerHTML += el1.innerHTML;
        el2.innerHTML += el2.innerHTML;
      }
      if (isTranslate) {
        gsap.set(el2, { [property]: "-50%" });
      }
      gsap.to(el1, {
        [property]: isTranslate ? "-50%" : "+=360", 
        duration,
        ease: "none",
        repeat: -1,
      });

      if (isTranslate) {
        gsap.to(el2, {
          [property]: "0%",
          duration,
          ease: "none",
          repeat: -1,
        });
      }
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
  }, [ref1, ref2, property, duration]);
};

export default useMarqueeAnimation;
