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

  return (
    <>
      <div className="px-custom mt-5 md:mt-7 lg:mt-10">
        <div className="text-center space-y-4 mb-6">
          <p className="text-blue-950 text-xs md:text-md">
            <span>🔴</span>OUR FREIGHT SOLUTION
          </p>
          <h2 className="text-blue-950 text-xl md:text-xl lg:text-3xl font-bold">
            <span className="text-red-500">
              Expertly Managing </span> Every Step From Transit to Warehousing
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {freightSolution.map((items, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-lg bg-cover bg-center min-h-[300px] flex flex-col justify-center w-full mx-auto transition-transform duration-300 hover:scale-[1.025]"
              style={{
                backgroundImage: `url(${images[items.src]})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1a1d45cc] z-0" />
              {/* Card Content */}
              <div className="relative z-10 p-6 flex flex-col gap-2">
                <h3 className="font-bold bg-black/40 text-white border border-white/20 px-3 py-1 rounded-2xl w-fit text-lg mb-2 shadow">
                  {items.label}
                </h3>
                <p className="text-white text-base md:text-2xl w-[95%] drop-shadow">
                  {items.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FreightSolution;