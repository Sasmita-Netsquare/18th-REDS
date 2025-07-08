import { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useHeadingGroupAnimation } from "../hooks";
import SectionTitle from "./SectionTitle";

const testimonials = [
  {
    text: `GBB is different from most business networking events. In fact, we flip the conventional model on its head! Rather than putting people in a room and letting them discover the value, we believe it’s our responsibility to connect our event participants with pre-qualified opportunities.`,
    author: "Founder & CEO",
    company: "Artevo Consulting",
  },
  {
    text: `This event provided excellent opportunities and networking with industry leaders. The experience was truly transformational and well-organized. The experience was truly transformational and well-organized. The experience was truly transformational and well-organized.`,
    author: "Managing Director",
    company: "InnovateX",
  },
  {
    text: `A must-attend summit for anyone looking to engage with top-tier professionals and gain valuable insights. Kudos to the organizing team!The experience was truly transformational and well-organized. The experience was truly transformational and well-organized. The experience was truly transformational and well-organized.`,
    author: "CMO",
    company: "TechFront",
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
                  _ {testimonial.author}
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
