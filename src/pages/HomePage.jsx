import React from "react";
import { ArrowBigRight, Expand, LocationEditIcon, Play } from "lucide-react";

const HomePage = () => {
  return (
    <>
      <div className="px-4 mt-7">
        {/* Mobile Headline */}
        <div className="md:hidden text-blue-950 text-left flex flex-col gap-5 my-10">
          <h1 className="text-5xl md:text-4xl lg:text-7xl">
            Delivering More Than Just Freight
          </h1>
          <p className="text-lg md:text-lg">
            We prioritize reliability, precision, and strong partnerships in
            every shipment ensuring a seamless and efficient logistics
            experience from start to finish.
          </p>

          <button className="flex gap-3 items-center bg-blue-950 text-amber-50 px-4 py-2 rounded-[40px] w-[50%]">
            Get Started{" "}
            <span className="bg-white text-blue-950 p-1 rounded-full">
              <ArrowBigRight />
            </span>
          </button>

          <button className="flex gap-3 items-center bg-white text-blue-950 border border-blue-950 px-4 py-2 rounded-[40px] w-[50%]">
            Learn More{" "}
            <span className="bg-blue-950 text-white p-1 rounded-full">
              <ArrowBigRight />
            </span>
          </button>
        </div>

        <div className="px-custom bg-[url('/hero-port1.jpg')] rounded-md w-full mx-auto max-md:h-[500px] py-10 bg-cover relative overflow-hidden">
          {/* BG Image details */}
          <div className="absolute top-10 right-4 flex items-center gap-2">
            <span className="bg-white text-blue-950 rounded-full p-2">
              <LocationEditIcon size={16} />
            </span>
            <div className="bg-white text-blue-950 rounded-3xl p-2">
              <p className="text-xs">Port of Singapore</p>
            </div>
          </div>

          <div className="absolute bottom-10 right-4 w-[200px] md:w-[200px] md:p-3 p-1 flex items-center gap-3 bg-white text-blue-950 rounded-md md:rounded-2xl">
            <div>
              <p className="max-sm:text-xs">
                We <span className="text-red-500">cover</span> shipment around
                the <span className="text-red-500">globe</span>
              </p>
              <div className="flex gap-2 mt-2">
                <span className="bg-blue-950 text-white rounded-full p-1">
                  <Play size={16} />
                </span>
                <span className="bg-white text-blue-950 rounded-1 p-1">
                  <Expand size={16} />
                </span>
              </div>
            </div>
            <div>
              <img
                src="/plane-in-port.jpeg"
                alt="shipment"
                className="h-full"
              />
            </div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/20 bg-opacity-[2px] rounded-md pointer-events-none"></div>

          <div className="relative z-10">
            <div className="hidden text-white text-left w-[90%] md:w-[70%] lg:w-[50%] md:flex flex-col gap-5 mt-20 md:mt-32 lg:mt-40">
              <h1 className="text-6xl md:text-4xl lg:text-7xl">
                Delivering More Than Just Freight
              </h1>
              <p className="text-lg md:text-lg">
                We prioritize reliability, precision, and strong partnerships in
                every shipment ensuring a seamless and efficient logistics
                experience from start to finish.
              </p>

              <div className="flex items-center gap-4">
                <button className="flex gap-3 items-center bg-blue-950 text-amber-50 px-4 py-2 rounded-[40px]">
                  Get Started{" "}
                  <span className="bg-white text-blue-950 p-1 rounded-full">
                    <ArrowBigRight />
                  </span>
                </button>

                <button className="flex gap-3 items-center bg-white text-blue-950 border border-blue-950 px-4 py-2 rounded-[40px]">
                  Learn More{" "}
                  <span className="bg-blue-950 text-white p-1 rounded-full">
                    <ArrowBigRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
