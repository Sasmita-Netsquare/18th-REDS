import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useHeadingGroupAnimation = (ref: any, delay: number) => {
  useEffect(() => {
    if (ref.current) {
      const lines = Array.from(ref.current.children); 

      // Set initial state
      gsap.set(lines, { y: 60, opacity: 0 });

      // Animate
      gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "restart none restart none",
        },
        delay,
      }).to(lines, {
        y: -10,
        opacity: 1,
        duration: 1.2,         
        ease: "power2.out", 
        stagger: 0.12,         
      });
    }
  }, [ref, delay]);
};

export default useHeadingGroupAnimation;
