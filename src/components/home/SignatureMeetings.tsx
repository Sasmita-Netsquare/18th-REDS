import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const SignatureMeetings = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // const paragraphs = containerRef.current.querySelectorAll("p");
    const paragraphs = (containerRef.current as HTMLElement).querySelectorAll(
      "p"
    );

    gsap.fromTo(
      paragraphs,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.5, // delay between each <p> animation
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // when top of container hits 80% viewport height
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <div className="main-container text-white py-16">
      <div className="flex flex-col gap-6">
        <div className="w-full">
          <p className="text-5xl">Signature</p>
          <p className="text-yellow-600 text-7xl">Meetings</p>
        </div>
        <div className="flex lg:flex-row flex-col gap-8">
          <div className="flex md:flex-row flex-col gap-2 w-full">
            <div className="flex flex-col gap-2">
              <div className="lg:w-80 w-full h-auto overflow-hidden">
                <img
                  src="/meeting_1.png"
                  alt="Meeting 1"
                  className=" w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="lg:w-80 w-full h-auto overflow-hidden">
                <img
                  src="/meeting_3.png"
                  alt="Meeting 3"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-10">
              <div className="lg:w-80 w-full h-auto overflow-hidden">
                <img
                  src="/meeting_2.png"
                  alt="Meeting 2"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="lg:w-80 w-full h-auto overflow-hidden">
                <img
                  src="/meeting_4.png"
                  alt="Meeting 4"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
            </div>
          </div>
          <div className=" w-full" ref={containerRef}>
            <p className=" leading-relaxed text-gray-300">
              The key offering of Summits organized by GBB are the pre-arranged,
              diligently curated B2B meetings scheduled for the delegates and
              suppliers. The invited delegates are pre-qualified based on a
              number of criteria including the projects represented, size of
              these projects, their decision-making capacity and the budgets to
              source. They then provide their project requirements which is
              carefully matched with the offerings of the renowned global
              suppliers attending the summit. This robust process ensures
              high-quality business matches, based on which the face-to-face
              meetings are organized with the help of dedicated account managers
              at the summit. Every meeting therefore is sure to be productive
              while leaving each attendee with long-term and valuable business
              network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignatureMeetings;
