import React from 'react'
import { ArrowBigRight,LocationEditIcon,Play,Expand } from 'lucide-react'

const Hero = () => {
  return (
    <>
     <div className="md:hidden text-blue-950 text-left flex flex-col gap-5 mt-5 mb-10">
          <h1 className="text-5xl md:text-4xl lg:text-7xl">
            Delivering More Than Just Freight
          </h1>
          <p className="text-lg md:text-lg">
            We prioritize reliability, precision, and strong partnerships in
            every shipment ensuring a seamless and efficient logistics
            experience from start to finish.
          </p>

          <button className="flex gap-3 items-center bg-blue-950 text-amber-50 px-4 py-2 rounded-[40px] w-[60%] sm:w-[50%]">
            Get Started{" "}
            <span className="bg-white text-blue-950 p-1 rounded-full">
              <ArrowBigRight />
            </span>
          </button>

          <button className="flex gap-3 items-center bg-white text-blue-950 border border-blue-950 px-4 py-2 rounded-[40px] w-[60%] sm:w-[50%]">
            Learn More{" "}
            <span className="bg-blue-950 text-white p-1 rounded-full">
              <ArrowBigRight />
            </span>
          </button>
        </div>

        {/* ---------- Hero Image Container ---------- */}
        <div className="px-custom bg-[url('/hero-port1.jpg')] rounded-md w-full mx-auto max-md:h-[500px] py-10 bg-cover relative overflow-hidden">
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/20 rounded-md pointer-events-none z-10" />

          {/* ---------- Red Route Path ---------- */}
          <svg
            className="absolute inset-0 w-full h-full z-20 pointer-events-none"
            viewBox="0 0 1200 700"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Glow */}
            <path
              d="M1100 90 L1100 440 Q1100 610 950 610 L320 610 Q220 610 220 520 L220 360"
              fill="none"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="26"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Main red line */}
            <path
              d="M1100 90 L1100 440 Q1100 610 950 610 L320 610 Q220 610 220 520 L220 360"
              fill="none"
              stroke="#ef4444"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Start marker */}
            <circle cx="220" cy="360" r="22" fill="#fff" />
            <circle cx="220" cy="360" r="12" fill="#ef4444" />
          </svg>

          {/* ---------- Floating Cards + Connector Arches ---------- */}

          {/* Port of Singapore (top-right) */}
          <div className="absolute z-30 top-[12%] right-4 flex items-center gap-2">
            <span className="bg-white text-blue-950 rounded-full p-2 shadow relative z-10">
              <LocationEditIcon size={16} />
            </span>
            <div className="bg-white/90 backdrop-blur rounded-3xl px-3 py-1 shadow border border-white/60 relative z-10">
              <p className="text-xs font-medium whitespace-nowrap">
                The Port of Singapore
              </p>
            </div>
          </div>

          {/* Bound for China */}
          <div className="absolute z-30 top-[28%] left-[62%] flex flex-col items-center">
            <div className="px-3 py-1 rounded-full bg-white/85 backdrop-blur border border-white/60 shadow relative z-10">
              <p className="text-xs font-medium whitespace-nowrap">
                Bound for China
              </p>
              <p className="text-[10px] opacity-60 -mt-0.5">ETA: 1 Week</p>
            </div>
          </div>

          {/* Bound for Germany */}
          <div className="absolute z-30 top-[48%] left-[42%] flex flex-col items-center">
            <div className="px-3 py-1 rounded-full bg-white/85 backdrop-blur border border-white/60 shadow relative z-10">
              <p className="text-xs font-medium whitespace-nowrap">
                Bound for Germany
              </p>
              <p className="text-[10px] opacity-60 -mt-0.5">ETA: 5 Days</p>
            </div>
          </div>

          {/* Bottom-right Info Card */}
          <div className="absolute z-30 bottom-12 right-4 sm:right-6 w-[200px] sm:w-[240px] md:p-3 p-2 flex items-center gap-3 bg-white text-blue-950 rounded-xl md:rounded-2xl shadow-lg">
            <div className="min-w-0 relative z-10">
              <p className="text-[12px] leading-tight">
                We <span className="text-red-500 font-semibold">cover</span>{" "}
                shipment around the{" "}
                <span className="text-red-500 font-semibold">globe</span>
              </p>
              <div className="flex gap-2 mt-2">
                <span className="bg-blue-950 text-white rounded-full p-1">
                  <Play size={16} />
                </span>
                <span className="bg-white text-blue-950 rounded-full p-1 border border-blue-950/20">
                  <Expand size={16} />
                </span>
              </div>
            </div>
            <div className="shrink-0 overflow-hidden rounded-md">
              <img
                src="/plane-in-port.jpeg"
                alt="shipment"
                className="h-16 w-20 sm:w-24 object-cover"
              />
            </div>
          </div>

          {/* ---------- Desktop Headline ---------- */}
          <div className="relative z-30">
            <div className="hidden text-white text-left w-[90%] md:w-[70%] lg:w-[50%] md:flex flex-col gap-5 mt-20 md:mt-32 lg:mt-40">
              <h1 className="text-5xl md:text-6xl lg:text-7xl">
                Delivering More Than Just Freight
              </h1>
              <p className="text-lg md:text-xl">
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
    </>
  )
}

export default Hero
