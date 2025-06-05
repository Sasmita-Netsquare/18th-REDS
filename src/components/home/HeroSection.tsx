/* eslint-disable react-hooks/rules-of-hooks */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useHeadingGroupAnimation } from "../hooks";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const infoRef = useRef(null);
  const headRef = useRef(null);

  useHeadingGroupAnimation(headRef, 1);
  // Delay the animation for infoRef
  setTimeout(() => {
    useHeadingGroupAnimation(infoRef, 1);
  }, 2000);

  useEffect(() => {
    // Animate the title words on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top+=1",
        end: "+=300",
        scrub: true,
      },
    });

    tl.to(leftRef.current, {
      x: -120,
      opacity: 0.7,
      ease: "power3.out",
    }).to(
      rightRef.current,
      {
        x: 120,
        opacity: 0.7,
        ease: "power3.out",
      },
      0 // same time as previous
    );
  }, []);

  return (
    <>
      <div className="main-container py-10" id="hero">
        <div className="text-center" ref={headRef}>
          <h1 className="lg:text-8xl text-5xl flex justify-center space-x-6 lg:mt-40 mt-30">
            <span ref={leftRef}>Africa</span>
            <span ref={rightRef}>Risen</span>
          </h1>

          <div className="mt-4 text-lg" ref={infoRef}>
            <p>8-9 Oct 2025</p>
            <p>Dubai, UAE</p>
          </div>
        </div>
      </div>
      <img src="/hero_bg.png" alt="Hero Background" className="w-auto h-auto" />
    </>
  );
}
