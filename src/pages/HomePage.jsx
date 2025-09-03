import React from "react";
import { ArrowBigRight, Expand, LocationEditIcon, Play } from "lucide-react";
import Hero from "../components/Home/Hero";
import AtYourService from "../components/Home/AtYourService";
import FreightSolution from "../components/Home/FreightSolution";
import HowWeWork from "../components/Home/HowWeWork";
import OurServices from "../components/Home/OurServices";
import Pricing from "../components/Home/Pricing";
import Article from "../components/Home/Article";

const HomePage = () => {
  return (
    <>
      <div className=" md:mt-7">
       
       {/* Hero */}
        <Hero />
        
        {/* Home Service */}
       <div className="px-custom">
         <AtYourService />
       </div>

        {/* Freight Solutin */}
       <div className="px-custom">
         <FreightSolution />
       </div>

        {/* How We Work */}
      <div className="px-custom">
          <HowWeWork />
      </div>

        {/* Our Services */}
        <div className="px-custom">
          <OurServices />
        </div>

        {/* Pricing Plan */}
        <Pricing />

        {/* Article */}
        <Article />
      </div>
    </>
  );
};

export default HomePage;
