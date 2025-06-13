import { useEffect, useRef, useState } from "react";
import { useHeadingGroupAnimation } from "../hooks";
import SectionTitle from "./SectionTitle";

const PastSpeakers = () => {
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

  const scrollRef = useRef<HTMLDivElement>(null);
  const headRef = useRef(null);
  useHeadingGroupAnimation(headRef, 0.1);

  const [clonedSpeakers, setClonedSpeakers] = useState(speakerArr);

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
      }, 500);
    }, 2000); 

    return () => clearInterval(interval);
  }, [clonedSpeakers]);

  return (
    <div className="main-container py-16 flex flex-col gap-5">
      <SectionTitle title="Our Past" subtitle="Speakers" ref={headRef} />
      <div className="flex justify-end items-end overflow-hidden lg:ml-22 md:px-[2px]">
        <div
          ref={scrollRef}
          className="flex gap-5 w-full lg:w-[80%] overflow-x-hidden"
        >
          {clonedSpeakers.map((speaker, index) => (
            <div
              key={index}
              className="speaker-card min-w-[250px] flex-shrink-0"
            >
              <div className="border-4 border-yellow-500 aspect-square mb-2">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-[250px] object-cover"
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
