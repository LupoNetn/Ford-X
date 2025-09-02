import { Dot } from "lucide-react";
import React from "react";

const AtYourService = () => {
  return (
    <section className="relative overflow-hidden px-4 md:px-12 lg:px-20 py-10 md:py-16 bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 md:gap-16 relative">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Heading with Dot */}
          <div className="flex items-center gap-2">
            <Dot size={40} className="text-red-500 shrink-0" />
            <h4 className="text-base sm:text-lg md:text-xl font-semibold text-blue-950 tracking-wide">
              FORDX AT YOUR SERVICE
            </h4>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 leading-snug">
            We Provide{" "}
            <span className="text-red-500">End-to-end Logistics Services</span>{" "}
            for Timely & Secure Delivery.
          </h2>

          {/* Vision & Mission */}
          <div className="space-y-8">
            {/* Vision */}
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
              <div className="text-lg md:text-xl font-semibold text-red-500 min-w-[70px] md:min-w-[80px]">
                <p>01</p>
                <p>Vision</p>
              </div>
              <p className="text-gray-700 leading-relaxed text-base md:text-sm lg:text-base">
                Our mission is to lead the global logistics industry by providing
                seamless, reliable, and innovative solutions that not only meet
                but exceed client expectations, driving long-term success and
                growth for businesses worldwide.
              </p>
            </div>

            {/* Mission */}
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
              <div className="text-lg md:text-xl font-semibold text-red-500 min-w-[70px] md:min-w-[80px]">
                <p>02</p>
                <p>Mission</p>
              </div>
              <p className="text-gray-700 leading-relaxed text-base md:text-sm lg:text-base">
                We connect businesses to a streamlined and efficient supply
                chain by offering innovative and responsible logistics solutions
                that enhance operational performance, reduce costs, and foster
                growth in a dynamic global market.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mb-8 md:mb-0">
          <img
            src="/truck.jpeg"
            alt="Logistics Truck"
            className="w-[90vw] max-w-[400px] sm:max-w-[500px] md:w-[350px] md:max-w-[400px] lg:w-[450px] lg:max-w-[500px] xl:w-[550px] xl:max-w-[600px] rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AtYourService;