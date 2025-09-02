import React, { useState } from "react";
import image from "../../assets/truck-drone-img.jpeg";
import illustration1 from "../../assets/illustration1.jpeg";
import illustration2 from "../../assets/illustration2.jpeg";
import illustration3 from "../../assets/illustration3.jpeg";
import illustration4 from "../../assets/illustration4.jpeg";
import {
  ArrowBigRight,
  ChevronLeft,
  ChevronRight,
  Circle,
} from "lucide-react";

const HowWeWork = () => {
  // Steps in the process
  const Process = [
    {
      no: "01",
      headline: "In-Depth Consultation",
      text: "Carefully assessing your logistics needs to ensure tailored and effective solutions",
      img: illustration1,
    },
    {
      no: "02",
      headline: "Strategic Planning",
      text: "Designing a plan to ensure efficient and optimal delivery of your goods",
      img: illustration2,
    },
    {
      no: "03",
      headline: "Efficient Execution",
      text: "Carefully coordinating every detail of the shipment process to ensure smooth and timely execution.",
      img: illustration3,
    },
    {
      no: "04",
      headline: "On-Time Delivery",
      text: "Gaining a deep understanding of your logistics needs to offer the best possible solutions",
      img: illustration4,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Go to previous slide
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? Process.length - 1 : prev - 1));
  };

  // Go to next slide
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === Process.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Background hero section */}
      <div
        className="mt-5 md:mt-7 lg:mt-10 relative rounded-2xl overflow-hidden shadow-lg bg-cover bg-center p-6 md:p-10"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200/70 to-blue-950 z-0" />

        {/* Foreground content */}
        <div className="relative z-10 text-white">
          {/* Heading + CTA */}
          <div className="flex flex-col gap-8 sm:gap-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-5xl font-semibold max-w-3xl">
              We're revolutionizing logistics to meet a growing market
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <p className="text-sm sm:text-base md:text-lg max-w-2xl">
                Transforming logistics with innovative solutions by using
                advanced technologies and data-driven strategies to improve
                efficiency, reduce costs, and meet the growing demands of the
                market.
              </p>

              <button className="flex items-center justify-center gap-2 bg-blue-950 text-white hover:text-blue-950 border border-blue-950 px-5 py-2 rounded-full font-semibold text-sm sm:text-base w-full sm:w-auto shadow hover:bg-blue-50 transition">
                Learn More{" "}
                <span className="bg-blue-950 text-white p-1 rounded-full">
                  <ArrowBigRight size={18} />
                </span>
              </button>
            </div>
          </div>

          {/* Work Progress Section */}
          <div className="mt-16 flex flex-col items-center">
            {/* Section title */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 w-full">
              <div className="">
                <p className="flex items-center gap-2 text-sm sm:text-base">
                  <span role="img" aria-label="dot">
                    🔴
                  </span>{" "}
                  Work Progress
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.25rem] font-semibold my-4">
                  How We Work
                </h2>
              </div>
              <div className="max-w-lg">
                <p className="text-sm sm:text-base md:text-lg">
                  Our process is simple yet effective. From the initial
                  consultation to careful planning and execution, we ensure
                  every detail is handled with precision.
                </p>
              </div>
            </div>

            {/* === Carousel === */}
            <div className="relative w-full max-w-[600px] mt-10 mx-auto">
              {/* Slides wrapper */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {Process.map((step, i) => {
                  const darkBg = i === 0 || i === 2;
                  return (
                    <div key={step.no} className="w-full flex-shrink-0">
                      <div
                        className={`rounded-xl shadow-lg p-6 h-80 flex flex-col items-center justify-center text-center transition-all duration-500 ${
                          darkBg
                            ? "bg-blue-950 text-white"
                            : "bg-white text-blue-950"
                        }`}
                      >
                        {/* Number */}
                        <div className="text-3xl font-bold mb-2">{step.no}</div>
                        {/* Headline */}
                        <h3 className="text-lg font-semibold mb-3">
                          {step.headline}
                        </h3>
                        {/* Image */}
                        <img
                          src={step.img}
                          alt={step.headline}
                          className="w-24 h-24 object-cover rounded-full shadow mb-3"
                        />
                        {/* Text */}
                        <p
                          className={`text-sm max-w-xs ${
                            darkBg ? "text-blue-100" : "text-gray-700"
                          }`}
                        >
                          {step.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Prev/Next buttons */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 -left-6 -translate-y-1/2 bg-white text-blue-950 p-2 rounded-full shadow hover:bg-blue-100 transition"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 -right-6 -translate-y-1/2 bg-white text-blue-950 p-2 rounded-full shadow hover:bg-blue-100 transition"
              >
                <ChevronRight size={20} />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {Process.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`transition ${
                      activeIndex === i ? "text-white" : "text-gray-400"
                    }`}
                  >
                    <Circle
                      size={10}
                      fill={activeIndex === i ? "currentColor" : "none"}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
