import React from "react";
import introPhone from "../assets/introPhone.png";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center pt-40 ">
      <div>
        <p className="md:text-[193px] text-[90px] text-white font-[800] md:leading-[166px] tracking-[10.5px] relative leading-[90px]">
          CASH
        </p>
      </div>

      <div className="-z-1 absolute">
        <img src={introPhone} className="md:w-full w-[200px]"></img>
      </div>

      <div>
        <p className="md:text-[193px] text-[90px] text-white font-[800] md:leading-[166px] tracking-[10.5px]  relative">
          APP
        </p>
      </div>
    </div>
  );
}

export default Hero;
