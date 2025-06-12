/* eslint-disable react-hooks/rules-of-hooks */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useHeadingGroupAnimation } from "../hooks";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const leftRef = useRef<HTMLSpanElement>(null);
  const rightRef = useRef<HTMLSpanElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);

  useHeadingGroupAnimation(headRef, 1.2);
  useHeadingGroupAnimation(infoRef, 1.2);

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
      <div className="main-container lg:py-10 md:pb-6 pb-4" id="hero">
        <div className="text-center" ref={headRef}>
          <h1 className="lg:text-9xl md:text-6xl text-4xl flex justify-center lg:space-x-6 md:space-x-4 space-x-2 lg:mt-40 mt-32">
            <span ref={leftRef}>Africa</span>
            <span ref={rightRef}>Risen</span>
          </h1>

          <div className="mt-4 text-lg" ref={infoRef}>
            <p>8-9 Oct 2025</p>
            <p>Dubai, UAE</p>
          </div>
        </div>
      </div>
      <img
        src="/hero_bg.png"
        alt="Hero Background"
        className="w-auto h-auto px-[0.80rem] md:px-[1.670rem] lg:px-[3.300rem]"
      />
    </>
  );
}
