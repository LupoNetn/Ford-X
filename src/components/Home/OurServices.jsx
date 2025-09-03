import { Truck, Package, Ship, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const OurServices = () => {
  const services = [
    {
      icon: <Truck className="w-8 h-8 text-red-500" />,
      name: "Warehousing & Distribution",
      desc: "Secure storage and efficient distribution solutions to keep your inventory flowing smoothly.",
    },
    {
      icon: <Package className="w-8 h-8 text-red-500" />,
      name: "Last-Mile Delivery",
      desc: "Reliable last-mile delivery services ensuring your products reach customers quickly and safely.",
    },
    {
      icon: <Ship className="w-8 h-8 text-red-500" />,
      name: "International Shipping",
      desc: "Global freight and customs solutions to help your business expand without borders.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Logistics Manager, TechCorp",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "FordX transformed our supply chain efficiency. Their innovative approach and timely deliveries helped us scale seamlessly.",
    },
    {
      name: "Michael Chen",
      role: "CEO, GlobalTrade Ltd.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Reliable, transparent, and fast. FordX is the logistics partner every business dreams of having.",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, FreshFoods",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Our perishable goods always arrive fresh and on time. FordX has been instrumental in building customer trust.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div className="mt-5 md:mt-7 lg:mt-14 px-4">
        {/* Section Heading */}
        <div className="flex-1 space-y-2 sm:space-y-4 mx-auto max-w-[900px] text-center">
          <p className="text-blue-950 text-xs sm:text-sm md:text-base">
            <span className="bg-blue-100/60 text-blue-900 px-2 py-1 rounded-full font-semibold">
              OUR LOGISTICS SERVICES
            </span>
          </p>
          <h2 className="text-blue-950 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Comprehensive
            <span className="text-red-500"> FordX Services</span> Tailored to
            meet Your Unique
            <span className="text-red-500"> Needs</span>
          </h2>
        </div>

        {/* Service Cards */}
        <div className="mt-10 flex flex-col gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-6 rounded-2xl shadow-md border border-gray-100 bg-white hover:shadow-lg transition duration-300"
            >
              <div className="flex-shrink-0">{service.icon}</div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg md:text-xl font-semibold text-blue-950">
                  {service.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mt-1">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= Testimonial Section ================= */}
        <div className="mt-20 max-w-[1000px] mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6">
            <div>
              <p className="text-blue-950 text-xs sm:text-sm md:text-base">
                <span className="bg-blue-100/60 text-blue-900 px-2 py-1 rounded-full font-semibold">
                  TESTIMONIALS
                </span>
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2">
                <span className="text-red-500">Trusted</span> Worldwide
              </h2>
            </div>
            <div className="lg:max-w-xl text-gray-700 text-sm sm:text-base">
              Companies across industries rely on FordX to streamline logistics,
              enhance efficiency, and deliver exceptional results.
            </div>
          </div>

          {/* Carousel */}
          <div className="relative mt-12 overflow-hidden">
            <div
              className="flex w-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0 flex justify-center"
                >
                  <div className="flex flex-col md:flex-row items-center border border-blue-950 rounded-2xl p-10 gap-8 bg-white max-w-[900px] w-full shadow-xl">
                    {/* Left - Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-48 h-48 md:w-56 md:h-56 rounded-xl object-cover border-4 border-blue-950 shadow-md"
                      />
                    </div>
                    {/* Right - Testimonial */}
                    <div className="text-center md:text-left max-w-xl">
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                        "{t.text}"
                      </p>
                      <h3 className="text-blue-950 font-semibold text-lg md:text-xl">
                        {t.name}
                      </h3>
                      <p className="text-gray-500 text-sm md:text-base">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Prev / Next buttons at bottom-right */}
            <div className="absolute bottom-4 right-4 flex space-x-3">
              <button
                onClick={prevSlide}
                className="bg-blue-950 text-white p-3 rounded-full shadow hover:bg-blue-800 transition"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={nextSlide}
                className="bg-blue-950 text-white p-3 rounded-full shadow hover:bg-blue-800 transition"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
