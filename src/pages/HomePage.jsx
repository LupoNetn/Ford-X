import React from "react";
import { ArrowBigRight, Expand, LocationEditIcon, Play } from "lucide-react";
import Hero from "../components/Home/Hero";
import AtYourService from "../components/Home/AtYourService";

const HomePage = () => {
  return (
    <>
      <div className="px-4 md:mt-7">
       
       {/* Hero */}
        <Hero />
        
        {/* Home Service */}
        <AtYourService />
      </div>
    </>
  );
};

export default HomePage;
