import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-6">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-6xl md:text-6xl lg:text-7xl">
          swole<span className="text-blue-400">normous</span>
        </h1>
        <p className="text-sm md:text-base font-light">
          I hereby acknowledge that i may become,{" "}
          <span className="text-blue-400 font-medium ">
            unbelievably swolenormous
          </span>{" "}
          and accept all risks of becoming the local<span>mass montrosity</span>
          , afflicted with severe dismorphia, unable to fit through doors
        </p>
        <button className="px-8 py-4 rounded-md border-[2px] bg- border-blue bg-slate border-blue-400 border-solid blueShadow duration-200">
          <p>Accept & Begin</p>
        </button>
      </div>
    </div>
  );
};

export default Hero;
