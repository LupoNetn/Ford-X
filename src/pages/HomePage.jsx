import React from "react";
import { ArrowBigRight, Expand, LocationEditIcon, Play } from "lucide-react";
import Hero from "../components/Home/Hero";
import AtYourService from "../components/Home/AtYourService";
import FreightSolution from "../components/Home/FreightSolution";

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
      </div>
    </>
  );
};

export default HomePage;
