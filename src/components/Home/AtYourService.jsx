//import { Dot } from "lucide-react";
import React from "react";

const AtYourService = () => {
  return (
    <section className="relative overflow-hidden px-4 md:px-12 lg:px-20 py-10 md:py-16 bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 relative">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Heading with Dot */}
          <div className="flex items-center gap-2">
            <span>🔴</span>
            <h4 className="text-md font-semibold text-blue-950 tracking-wide">
              FORDX AT YOUR SERVICE
            </h4>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl md:text-2xl lg:text-4xl font-bold text-blue-950 leading-snug">
            We Provide{" "}
            <span className="text-red-500">End-to-end Logistics Services</span>{" "}
            for Timely & Secure Delivery.
          </h2>

          {/* Vision & Mission */}
          <div className="space-y-8">
            {/* Vision */}
            <div className="flex flex-col lg:flex-row md:items-start lg:gap-14">
              <div className="text-xl font-semibold text-red-500 min-w-[80px]">
                <p>01</p>
                <p>Vision</p>
              </div>
              <p className="text-gray-700 leading-relaxed md:text-sm lg:text-base">
                Our mission is to lead the global logistics industry by providing
                seamless, reliable, and innovative solutions that not only meet
                but exceed client expectations, driving long-term success and
                growth for businesses worldwide.
              </p>
            </div>

            {/* Mission */}
            <div className="flex flex-col lg:flex-row md:items-start lg:gap-14">
              <div className="text-xl font-semibold text-red-500 min-w-[80px]">
                <p>02</p>
                <p>Mission</p>
              </div>
              <p className="text-gray-700 leading-relaxed md:text-sm lg:text-base">
                We connect businesses to a streamlined and efficient supply
                chain by offering innovative and responsible logistics solutions
                that enhance operational performance, reduce costs, and foster
                growth in a dynamic global market.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="/truck.jpeg"
            alt="Logistics Truck"
            className="w-[120%] md:w-[140%] lg:w-[160%] max-w-none object-contain md:translate-x-10 lg:translate-x-20"
          />
        </div>
      </div>
    </section>
  );
};

export default AtYourService;