import { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useHeadingGroupAnimation } from "../hooks";
import SectionTitle from "./SectionTitle";

const testimonials = [
  {
    text: `It’s a great chance so much time with the buyer, and it’s very important 
    to maximize our presence in Saudi Arabia. It’s a great opportunity to interact with
    a lot of players in the business in a very short time and to have very effective conversations.
    If I had to do it in a different way, it would take me much more time and would be less effective, 
    so I’m grateful for this chance`,
    designation: "VP Global Marketing - Smart Buildings",
    company: "ABB",
  },
  {
    text: `We are a famous luxury experience brand, and I was here today to present our hospitality
    and real estate opportunities. I’m very happy about this experience. I had a chance to present 
    what we do to the Saudi market, which is very important. We think that it is a great opportunity indeed, 
    and I was very happy to be here and to have very interesting meetings. I would like to thank GBB for having 
    me here. Everything was so well organized, and I’m really happy with the experience. I think it was highly 
    professional but also very informal, and we were just very comfortable. We enjoyed it a lot! Thank you!`,
    designation: "COO Hospitality and Real Estate Development",
    company: "Tonino Lamborghini",
  },
  {
    text: `Hospitality is booming in the region so it is definitely the right time to host such an event 
    and bring together the hospitality leaders to discuss and to shape the future of the industry. 
    It was a very good opportunity for the suppliers to meet the buyers, but at the same time, it was a good 
    opportunity for the buyers to see the new innovations, technologies and products offered by the suppliers. 
    I'm very happy to be a part of this event, and we are looking forward to the next one.`,
    designation: "Leader Architecture and Design MENA",
    company: "LIXIL EMENA",
  },
  {
    text: `This is my first time here in the Hospitality Innovation Summit and this has been a great experience 
    for me, and I see a lot of opportunities. Hopefully, I get to come here many years to come, and I wish everyone 
    the best of luck and we’ll do great! Thank you!`,
    designation: "VP of Sales",
    company: "Gruppo Bounifante",
  },
  {
    text: `I’m very happy to be here today at the HIS 2023. It’s an amazing place where we can meet industry leaders.`,
    designation: "MEA Hotel Segment Director",
    company: "Schneider Electric",
  },
  {
    text: `I am the CEO and founder of RKF Group from France. I appreciate so much the way that it is because 
    I came here for the third time because each time I feel like it's increasing the level, the category and the 
    qualification of the people attending the event, from both sides, buyers and suppliers. The quality of the connection
    and the organisation itself is really high-end.And when you know the key people coming here and that's why 
    I congratulate the organizer for bringing these people.`,
    designation: "CEO and Founder",
    company: "RKF Linen",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const headRef = useRef(null);
  useHeadingGroupAnimation(headRef, 0.1);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="main-container pt-16">
      <section>
        <SectionTitle title="Client" subtitle="Testimonials" ref={headRef} />
      </section>
      <div className="flex justify-end w-full pb-16">
        <div className="w-full lg:w-[75%] flex flex-col gap-10">
          {/* Navigation Buttons */}
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

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-3">
            {[
              testimonials[index], // always show this one
              ...(window.innerWidth >= 768
                ? [testimonials[(index + 1) % testimonials.length]]
                : []),
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-[#1c1d1f] p-6 sm:p-8 rounded shadow w-full"
              >
                <p className="text-sm sm:text-base leading-relaxed text-white">
                  {testimonial.text}
                </p>
                <p className="mt-6 text-sm sm:text-base text-yellow-500">
                  _ {testimonial.designation}
                </p>
                <p className="text-sm sm:text-base text-gray-300">
                  _ {testimonial.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
