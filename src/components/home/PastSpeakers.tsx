import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useHeadingGroupAnimation } from "../hooks";
import SectionTitle from "./SectionTitle";

const speakerArr = [
  {
    image: "/speaker/speaker1.jpg",
    name: "Ira Sundukova",
    title: "Founder of Sundukovy Sisters",
    company: "Sundukovy Sisters (S+S) Studio",
  },
  {
    image: "/speaker/speaker2.jpg",
    name: "Mohamed Shehata",
    title: "Group CDO",
    company: "Abu Soma Development Company [Somabay]",
  },
  {
    image: "/speaker/speaker3.jpg",
    name: "Ahmed El-Halawany",
    title: "Chief Development Officer",
    company: "SODIC",
  },
  {
    image: "/speaker/speaker4.jpg",
    name: "Mohamed Abudagher",
    title: "Executive Director of Hospitality (Owner Representative)",
    company: "Talaat Moustafa Holding Group",
  },
  {
    image: "/speaker/speaker5.jpg",
    name: "Ajay K. Bakaya",
    title: "Managing Director, Sarovar Hotels & Director",
    company: "Louvre Hotels",
  },
  {
    image: "/speaker/speaker6.jpg",
    name: "Shady Hassan",
    title: "Vice President Development, North Africa",
    company: "Marriott International",
  },
  {
    image: "/speaker/speaker7.jpg",
    name: "Justin Wells",
    title: "Founder & CEO",
    company: "Wells International",
  },
  {
    image: "/speaker/speaker8.jpg",
    name: "Amir Golbarg",
    title: "Senior Vice President - Middle East & Africa",
    company: "Minor Hotels",
  },
  {
    image: "/speaker/speaker9.jpg",
    name: "Lee-Anne Singer",
    title: "Partner",
    company: "HVS Middle East & Africa",
  },
  {
    image: "/speaker/speaker10.jpg",
    name: "Tarek Hegazy",
    title: "Principal & Creative Director",
    company: "Living Design of Sweden AB",
  },
  {
    image: "/speaker/speaker11.jpg",
    name: "Dipo Adebo",
    title: "Senior Partner, Principal Architect & Senior Project Manager",
    company: " DAA Architects Ltd.",
  },
  {
    image: "/speaker/speaker12.jpg",
    name: "Turab Saleem",
    title: "Hospitality, Tourism & Leisure Advisory Services",
    company: "Knight Frank",
  },
  {
    image: "/speaker/speaker13.jpg",
    name: "Jameel Verjee",
    title: "Founder & CEO",
    company: "CityBlue Hotels",
  },
  {
    image: "/speaker/speaker14.jpg",
    name: "Alban Mabille de Poncheville",
    title: "Head of Business Development - Middle East & Africa",
    company: "United Hospitality Management",
  },
  {
    image: "/speaker/speaker15.jpg",
    name: "Chike Ogeah",
    title: "Managing Director",
    company: "Mac-Folly Hospitality",
  },
  {
    image: "/speaker/speaker16.jpg",
    name: "Ezana Kirubel",
    title: "Owner",
    company: "Anyana Hospitality",
  },
  {
    image: "/speaker/speaker17.jpg",
    name: "JS Anand",
    title: "Founder & CEO",
    company: "LEVA Hotels",
  },
  {
    image: "/speaker/speaker18.jpg",
    name: "Neale Petersen",
    title:"Founder & CEO",
    company: "Real Estate Investor Magazine",
  },
  {
    image: "/speaker/speaker19.jpg",
    name: "Shadi El Ghoneimi",
    title: "Partner and Head of Design",
    company: "El Ghoneimi International",
  },
  {
    image: "/speaker/speaker20.jpg",
    name: "MARDRE MEYER",
    title: "Creative Director",
    company: "Source",
  },
  {
    image: "/speaker/speaker21.jpg",
    name: "Diane Thorsen",
    title: "Design Principal, Global Hospitality Lead",
    company: "Gensler",
  }
];

const PastSpeakers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const headRef = useRef(null);
  useHeadingGroupAnimation(headRef, 0.1);

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
          <SectionTitle title="Our Past" subtitle="Speakers" ref={headRef} />
      <div className="flex lg:justify-end md:justify-end justify-center items-center gap-4 sm:gap-12">
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
              className="speaker-card min-w-[250px] flex-shrink-0 snap-center "
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
              <p className="text-sm text-gray-300 w-[14.1rem] py-1">{speaker.title}</p>
              <p className="text-sm text-gray-300">{speaker.company}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastSpeakers;
