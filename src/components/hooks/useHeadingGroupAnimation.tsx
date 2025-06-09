/* eslint-disable @typescript-eslint/no-explicit-any */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useHeadingGroupAnimation = (ref: any, delay: number) => {
  useEffect(() => {
    if (ref.current) {
      const elements = ref.current.children;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
        delay,
      });

      tl.fromTo(
        elements,
        { y: 80, opacity: 0 },
        {
          y: -10,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.12,
        }
      ).to(
        elements,
        {
          y: 0,
          duration: 0.3,
          ease: "power1.out",
          stagger: 0.12,
        },
        "-=0.3"
      );
    }
  }, [ref, delay]);
};

export default useHeadingGroupAnimation;
