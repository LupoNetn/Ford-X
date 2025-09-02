import { CheckCircle, Group, Leaf, LightbulbIcon } from "lucide-react";
import React from "react";

// Dynamically import all images from assets folder
const images = import.meta.glob("../../assets/*.jpeg", {
  eager: true,
  as: "url",
});

const FreightSolution = () => {
  const freightSolution = [
    {
      label: "Air Freight",
      desc: "Fast, reliable shipping for high-priority items across the globe.",
      src: "../../assets/air-freight.jpeg",
    },
    {
      label: "Sea Freight",
      desc: "Cost-effective solutions for bulk goods with extensive port-to-port coverage",
      src: "../../assets/sea-freight.jpeg",
    },
    {
      label: "Rail Freight",
      desc: "Economical and friendly environmental, ideal for large volumes and long distnaces",
      src: "../../assets/raill-freight.jpeg",
    },
    {
      label: "Road Freight",
      desc: "Efficient transportation for regional shipments with flexible schedules",
      src: "../../assets/road-freight.jpeg",
    },
  ];

  const values = [
    {
      label: "Reliability",
      icon: <CheckCircle size={40} />,
      desc: "We ensure everydelivery meets our high standards, from start to finish",
      grid: "md:row-start-1 md:row-end-3 flex flex-col justify-between",
    },
    {
      label: "Innovation",
      icon: <LightbulbIcon size={40} />,
      desc: "Embracing the latest technology for a seamless logistics experience.",
      grid: "md:row-start-3 md:row-end-6 flex flex-col justify-between",
    },
    {
      label: "Customer",
      icon: <Group size={40} />,
      desc: "Your needs are our priority - every mile of the journey",
      grid: "md:row-start-4 md:row-end-6 flex flex-col justify-between",
    },
    {
      label: "Sustainability",
      icon: <Leaf size={40} />,
      desc: "Commited to eco-friendly practices in every aspect of our service",
      grid: "md:row-start-1 md:row-end-4 flex flex-col justify-between",
    },
  ];

  return (
    <>
      <div className="mt-5 md:mt-7 lg:mt-10 px-2 sm:px-4 md:px-8">
        <div className="text-center space-y-2 sm:space-y-4 mb-4 sm:mb-6">
          <p className="text-blue-950 text-xs sm:text-sm md:text-base">
            <span className="bg-blue-100/60 text-blue-900 px-2 py-1 rounded-full font-semibold">OUR FREIGHT SOLUTION</span>
          </p>
          <h2 className="text-blue-950 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
            <span className="text-red-500">Expertly Managing </span>
            Every Step From Transit to Warehousing
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {freightSolution.map((items, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-lg bg-cover bg-center min-h-[220px] sm:min-h-[260px] md:min-h-[300px] flex flex-col justify-center w-full mx-auto transition-transform duration-300 hover:scale-[1.025]"
              style={{
                backgroundImage: `url(${images[items.src]})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-blue-950/70 z-0" />
              {/* Card Content */}
              <div className="relative z-10 p-4 sm:p-6 flex flex-col gap-2">
                <h3 className="font-bold bg-blue-100/60 text-blue-950 border border-blue-200/40 px-3 py-1 rounded-2xl w-fit text-base sm:text-lg mb-2 shadow">
                  {items.label}
                </h3>
                <p className="text-blue-100/90 text-sm sm:text-base md:text-lg lg:text-xl w-[95%] drop-shadow">
                  {items.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CORE VALUES */}
      <div className="mt-8 md:mt-12 lg:mt-16 px-2 sm:px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="flex-1 space-y-2 sm:space-y-4">
            <p className="text-blue-950 text-xs sm:text-sm md:text-base">
              <span className="bg-blue-100/60 text-blue-900 px-2 py-1 rounded-full font-semibold">CORE VALUES</span>
            </p>
            <h2 className="text-blue-950 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              Built on
              <span className="text-red-500"> Trust</span> and
              <span className="text-red-500"> Excellence</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl">
              We Foster strong relationships by staying true to our values of
              integrity, quality and accountability
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 grid-rows-6 gap-4">
            {values.map((value, idx) => (
              <div
                key={idx}
                className={`${value.grid} border border-blue-100 rounded-xl p-4 sm:p-5 md:p-3 bg-blue-50/60 shadow-sm`}
              >
                {/* Responsive fix: Wrap icon and label, allow wrapping and prevent overflow */}
                <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-4">
                  <span className="p-2 bg-blue-100/60 text-blue-950 rounded-full flex-shrink-0">
                    {value.icon}
                  </span>
                  <span className="text-xs sm:text-sm bg-blue-100/60 text-blue-900 p-[0.3rem] rounded-full break-words font-semibold">
                    {value.label}
                  </span>
                </div>
                <div>
                  <p className="text-blue-950 text-base sm:text-sm md:text-base lg:text-lg mt-2">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FreightSolution