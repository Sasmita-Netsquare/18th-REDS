import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

gsap.registerPlugin(ScrollTrigger);

const PublicLayout = () => {
  const headerInnerRef = useRef(null);

  useEffect(() => {
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
  }, []);
  return (
    <div className="flex flex-col">
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
      <main className="flex-1 bg-black  overflow-y-auto">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className=" bg-black text-white p-4 ">
        <Footer />
      </footer>
    </div>
  );
};

export default PublicLayout;
