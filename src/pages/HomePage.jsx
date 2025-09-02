import React from "react";
import { ArrowBigRight, Expand, LocationEditIcon, Play } from "lucide-react";
import Hero from "../components/Home/Hero";
import AtYourService from "../components/Home/AtYourService";
import FreightSolution from "../components/Home/FreightSolution";
import HowWeWork from "../components/Home/HowWeWork";

const HomePage = () => {
  return (
    <>
      <div className="px-custom md:mt-7">
       
       {/* Hero */}
        <Hero />
        
        {/* Home Service */}
        <AtYourService />

        {/* Freight Solutin */}
        <FreightSolution />

        {/* How We Work */}
        <HowWeWork />
      </div>
    </>
  );
};

export default HomePage;
