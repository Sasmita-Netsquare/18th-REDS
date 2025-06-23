import { useEffect, useRef, useState } from "react";
import { useHeadingGroupAnimation } from "../hooks";
import SectionTitle from "./SectionTitle";
import { usePinScroll } from "../hooks/usePinScroll";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const speakerArr = [
  {
    image: "/speaker1.jpg",
    name: "Mark Kennedy",
    title: "Head of Design",
    company: "MAGNA – NEOM",
  },
  {
    image: "/speaker2.jpg",
    name: "Jane Doe",
    title: "Chief Architect",
    company: "RedSea Global",
  },
  {
    image: "/speaker3.jpg",
    name: "Ali Mohammed",
    title: "Lead Engineer",
    company: "Saudi Vision",
  },
  {
    image: "/speaker4.jpg",
    name: "Sara Smith",
    title: "Innovation Officer",
    company: "NEOM",
  },
  {
    image: "/speaker5.jpg",
    name: "John Wilson",
    title: "CEO",
    company: "Giga Projects",
  },
];

const PastSpeakers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const headRef = useRef(null);
  useHeadingGroupAnimation(headRef, 0.1);
  const pinRef = useRef<HTMLDivElement>(null!);
  usePinScroll(pinRef, { endOffset: 275 });

  const [clonedSpeakers, setClonedSpeakers] = useState(speakerArr);

  const handlePrev = () => {
     const container = scrollRef.current;
  if (!container) return;

  const firstChild = container.querySelector(".speaker-card") as HTMLElement;
  if (!firstChild) return;

  const cardWidth = firstChild.getBoundingClientRect().width + 20;
  container.scrollBy({ left: -cardWidth, behavior: "smooth" });
  setTimeout(() => {
    const last = clonedSpeakers[clonedSpeakers.length - 1];
    const rest = clonedSpeakers.slice(0, -1);
    setClonedSpeakers([last, ...rest]);

    container.scrollTo({ left: 0 });
  }, 350);
  };

  const handleNext = () => {
  const container = scrollRef.current;
  if (!container) return;

  const firstChild = container.querySelector(".speaker-card") as HTMLElement;
  if (!firstChild) return;

  const cardWidth = firstChild.getBoundingClientRect().width + 20;

  container.scrollBy({ left: cardWidth, behavior: "smooth" });
  setTimeout(() => {
    const first = clonedSpeakers[0];
    const rest = clonedSpeakers.slice(1);
    setClonedSpeakers([...rest, first]);

    container.scrollTo({ left: 0 });
  }, 350);    
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const firstChild = container.querySelector(".speaker-card");
      if (!firstChild) return;

      const cardWidth = firstChild.getBoundingClientRect().width + 20; // Including gap

      container.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });

      setTimeout(() => {
        const first = clonedSpeakers[0];
        const rest = clonedSpeakers.slice(1);
        setClonedSpeakers([...rest, first]);

        container.scrollTo({ left: 0 });
      }, 350);
    }, 1500);

    return () => clearInterval(interval);
  }, [clonedSpeakers]);

  return (
    <div className="main-container py-16 flex flex-col gap-5">
      <div className="relative">
        <div ref={pinRef}>
          <SectionTitle title="Our Past" subtitle="Speakers" ref={headRef} />
        </div>
      </div>
      <div className="flex justify-end items-center gap-4 sm:gap-12">
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="bg-[#1c1d1f] p-3 cursor-pointer"
          >
            <FaArrowLeft className="text-yellow-600" />
          </button>
          <button
            onClick={handleNext}
            className="bg-[#1c1d1f] p-3 cursor-pointer"
          >
            <FaArrowRight className="text-yellow-600" />
          </button>
        </div>
      </div>

      <div className="flex justify-end items-end overflow-hidden lg:ml-22 md:px-[2px]">
        <div
          ref={scrollRef}
          className="flex gap-5 w-full lg:w-[80%] overflow-x-hidden justify-center lg:justify-start lg:mx-0  md:justify-center md:mx-0 mx-2"
        >
          {clonedSpeakers.map((speaker, index) => (
            <div
              key={index}
              className="speaker-card min-w-[250px] flex-shrink-0 snap-center"
            >
              <div className="border-4 border-yellow-500 w-[250px] h-[250px] mb-2">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-white font-semibold">{speaker.name}</p>
              <p className="text-sm text-gray-300">{speaker.title}</p>
              <p className="text-sm text-gray-300">{speaker.company}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastSpeakers;
