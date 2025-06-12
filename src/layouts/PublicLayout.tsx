import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const PublicLayout = () => {
  const headerInnerRef = useRef(null);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
    });

    gsap.set(headerInnerRef.current, {
      width: "70%",
      borderBottom: "none",
    });

    gsap.to(headerInnerRef.current, {
      width: "100%",
      borderBottom: "1px solid #e5e7eb",
      duration: 0.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#hero",
        start: "bottom top", // When bottom of hero hits top of viewport
        toggleActions: "play none none reverse",
        scrub: false,
      },
    });

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="flex flex-col">
        {/* Header */}
        <header className="bg-black text-white flex justify-center items-center fixed top-0 w-full z-50">
          <div
            ref={headerInnerRef}
            className="transition-all duration-1000 ease-in-out"
            style={{ borderBottom: "none" }}
          >
            <Header />
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="text-white">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default PublicLayout;
