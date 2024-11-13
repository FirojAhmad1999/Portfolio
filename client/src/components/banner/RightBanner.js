import React from 'react';
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full md:w-1/2 flex justify-center items-center relative">
      {/* Image with rounded corners */}
      <img
        className="w-[220px] h-[400px] sm:w-[270px] sm:h-[400px] md:w-[370px] md:h-[400px] lg:w-[470px] lg:h-[480px] z-10 rounded-lg transform translate-x-3 -translate-y-2"
        src={bannerImg}
        alt="bannerImg"
      />
      
      {/* Transparent background with rounded corners and shadow */}
      <div className="absolute bottom-0 transform translate-x-3 -translate-y-4 w-[220px] h-[180px] sm:w-[270px] sm:h-[270px] md:w-[370px] md:h-[320px] lg:w-[470px] lg:h-[470px] bg-gradient-to-r from-[#1e2024] to-[#202327] bg-opacity-80 shadow-shadowOne rounded-lg flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
