import { useEffect, useRef } from "react";
import { useHeadingGroupAnimation } from "../hooks";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const headRef = useRef(null);
  useHeadingGroupAnimation(headRef, 0.1);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let currentIndex = 0;

    const scroll = () => {
      const speakerCards = container.querySelectorAll(".speaker-card");
      if (speakerCards.length === 0) return;

      const card = speakerCards[0] as HTMLElement;
      const cardWidth = card.offsetWidth + 20; // add 20px gap

      currentIndex = (currentIndex + 1) % speakerArr.length;

      container.scrollTo({
        left: cardWidth * currentIndex,
        behavior: "smooth",
      });
    };

    const interval = setInterval(scroll, 1000); // every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-container py-16 flex flex-col gap-5">
      <div className="w-full" ref={headRef}>
        <p className="text-5xl">Our Past</p>
        <p className="text-yellow-600 text-7xl">Speakers</p>
      </div>

      <div className="flex justify-end items-end overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-5 w-full lg:w-[80%] overflow-x-auto scroll-smooth no-scrollbar"
        >
          {speakerArr.map((speaker, index) => (
            <div
              key={index}
              ref={cardRef}
              className="speaker-card min-w-[calc(25%-1.25rem)] flex-shrink-0"
            >
              <div className="border-4 border-yellow-500 aspect-square mb-2">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-68 h-auto object-cover"
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
