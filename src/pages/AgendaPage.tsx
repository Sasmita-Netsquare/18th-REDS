import { useState } from "react";

const agendaData = {
  day1: [
    { time: "07:45 – 08:30", title: "Welcome Breakfast" },
    { time: "08:30 – 09:30", title: "Registration" },
    { time: "09:30 – 09:40", title: "Introduction and Welcome Speech" },
    {
      time: "09:40 – 10:20",
      title: "Propelling Growth",
      description:
        "Industry leaders unravelling innovative and breakthrough solutions to deliver value",
    },
    {
      time: "10:20 – 10:50",
      title: "In the Spotlight",
      description:
        "Presentation series covering some of the most innovative solutions to common real estate problems",
    },
    {
      time: "10:50 - 11:00",
      title: "Photo Session",
    },
    {
      time: "11:00 - 11:20",
      title: "Coffee Break",
    },
    {
      time: "11:20 - 11:55",
      title: "In the Spotlight",
      description:
        "Presentation series covering some of the most innovative solutions to common real estate problems",
    },
    {
      time: "11:55 - 12:00",
      title: "Stretch Session by Technogym",
      description:
        "A fun fitness session helping you relax on the go",
    },
    {
      time: "12:00 - 12:05",
      title: "Introduction to GBB Signature Meetings",
      description:
        "A run through of the pre-arranged face-to-face meetings ensuring you get the best for your time",
    },
    {
      time: "12:05 – 14:00",
      title: "Meetings 1-5",
    },
    {
      time: "14:00 – 15:15",
      title: "Networking Luncheon",
    },
    {
      time: "15:15 – 16:00",
      title: "Design Outlook: What's shaping the future?",
      description:"Dive into the latest design trends and innovative approaches to cater to myriad of design demands"
    },
    {
      time: "16:00 – 18:00",
      title: "Meetings 6-10"
    },
    {
      time: "18:00 - 19:30",
      title: "Unwinding Break"
    },
    {
      time: "19:30 - 23:00",
      title: "Cocktail Dinner"
    },
  ],
  day2: [
    { time: "08:30 - 09:30", title: "Registration & Recap" },
    { time: "09:30 – 09:45", title: "Realty Check",
      description:"A presentation on the latest market insights from across the continent" 
    },
    {
      time: "9:45 – 10:30",
      title: "African Real Estate: Identifying Opportunity, Tranforming Realty",
      description:
        "A panel of market leaders addressing where the future of investment and development is heading and ways to realize Africa’s fullest potential",
    },
    {
      time: "10:30 – 10:50",
      title: "Coffee Break"
    },
    {
      time: "10:50 – 11:10",
      title: "Case Study: Visionaries of Africa Risen",
      description:"A deep dive into the visionary projects that are heightening global interest in the continent"
    },
    {
      time: "11:10 - 13:00",
      title: "Meetings 11 - 15",
    },
    {
      time: "13:00 - 13:50",
      title: "GBB Connect",
      description:"Time to meet more clients and expand network for more opportunities."
    },
    {
      time: "13:50 - 14:00",
      title: "Closing Remarks & Feedback",
    },
    {
      time: "14:00 - 16:00",
      title: "Networking Luncheon",
    },
    {
      time: "16:00 - 17:30",
      title: "Investor Spotlight",
      description:"Get to know the Investors!"
    },
    {
      time: "17:30 - 19:00",
      title: "Investor Connect",
      description:"A fast – paced networking session where key players mutually expore new ventures"
    },
    {
      time: "19:00 - 22:00",
      title: "Closing Dinner",
    },
  ],
};

export default function AgendaPage() {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");

  const agenda = agendaData[activeDay];

  return (
    <div className="main-container text-white px-4 py-10 font-sans mt-30" id="hero">
      {/* Tabs */}
    <div className="flex justify-center space-x-4 mb-8 sticky top-0 z-50 backdrop-blur py-4">
      <button
        onClick={() => setActiveDay("day1")}
        className={`px-6 py-2 font-semibold rounded cursor-pointer transition ${
          activeDay === "day1"
            ? "bg-yellow-500 text-black"
            : "bg-gray-100 text-black"
        }`}
      >
        Day 01
      </button>
      <button
        onClick={() => setActiveDay("day2")}
        className={`px-6 py-2 font-semibold rounded cursor-pointer transition ${
          activeDay === "day2"
            ? "bg-yellow-500 text-black"
            : "bg-gray-100 text-black"
        }`}
      >
        Day 02
      </button>
    </div>

      {/* Agenda List */}
      <div className="divide-y divide-gray-500 lg:px-10">
        {agenda.map((item, index) => (
          <div key={index} className="py-6 flex lg:flex-row flex-col lg:space-x-20 w-full">
            <div className="text-orange-400 text-3xl mb-1 lg:w-[21%]">
              {item.time}
            </div>
            <div className="lg:w-[79%] flex flex-col gap-2">
            <div className="text-white text-2xl">{item.title}</div>
            {item.description && (
              <div className="text-gray-300 mt-1 text-lg">{item.description}</div>
            )}
          </div>
            </div>

        ))}
      </div>
    </div>
  );
}
