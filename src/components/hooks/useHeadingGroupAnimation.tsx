import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useHeadingGroupAnimation = (ref:any, delay: number) => {
  useEffect(() => {
    if (ref.current) {
      const lines = Array.from(ref.current.children);

      gsap.set(lines, { y: 60, opacity: 0 });

      gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
        delay,
      }).to(lines, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
      });
    }
  }, [ref, delay]);
};

export default useHeadingGroupAnimation;
