import React from "react";
import {
  MapPin,
  Building2,
  Layers3,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const Hero = () => {
  const locations = ["Mumbai", "Delhi", "Bangalore"];
  const properties = ["Flat", "Villa", "Plot"];
  const types = ["Rent", "Sale"];

  return (
    <div className="p-5 lg:p-10 flex flex-col lg:flex-row justify-between gap-12 lg:gap-10">
      {/* Left section */}
      <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-1/2 items-center lg:items-center text-center lg:text-center ">
        {/* Headline */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter leading-tight flex flex-col gap-3">
          <h1>
            <span className="text-gray-400">✴︎</span> Best{" "}
            <span className="">place to</span>
          </h1>
          <div className="flex justify-center lg:justify-start items-center gap-2 sm:gap-4">
            <h1>partner</h1>
            <img
              src="https://framerusercontent.com/images/pHeNoUaGUEbE10uydcGyM1Rk1xA.webp?scale-down-to=512"
              alt="Partner"
              className="h-12 w-20 sm:h-16 sm:w-28 rounded-full object-cover"
            />
            <h1 className="">finding</h1>
          </div>
          <h1>
            <span className="">your</span> dream house{" "}
            <span className="text-gray-400">✴︎</span>
          </h1>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-1">
          <button className="px-5 py-3 text-white bg-[#191c1e] rounded-2xl text-sm sm:text-base">
            Start Exploring
          </button>
          <div className="bg-[#191c1e] rounded-full h-12 w-12 flex items-center justify-center cursor-pointer hover:bg-[#2a2d2f] transition">
            <ArrowRight className="text-white w-5 h-5 -rotate-45" />
          </div>
        </div>

        {/* Dropdowns */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full border border-slate-300 rounded-3xl  p-4">
          {/* Location Dropdown */}
          <div className="relative w-full sm:min-w-[200px] flex-1">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
            <select
              className="w-full pl-10 pr-10 py-3 text-base  rounded-xl shadow-sm focus:outline-none   appearance-none"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Location
              </option>
              {locations.map((loc, index) => (
                <option key={index} value={loc.toLowerCase()}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Property Dropdown */}
          <div className="relative w-full sm:min-w-[200px] flex-1">
            <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
            <select
              className="w-full pl-10 pr-10 py-3 text-base  rounded-xl shadow-sm focus:outline-none   appearance-none"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Property
              </option>
              {properties.map((prop, index) => (
                <option key={index} value={prop.toLowerCase()}>
                  {prop}
                </option>
              ))}
            </select>
          </div>

          {/* Type Dropdown */}
          <div className="relative w-full sm:min-w-[200px] flex-1">
            <Layers3 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
            <select
              className="w-full pl-10 pr-10 py-3 text-base  rounded-xl shadow-sm focus:outline-none  appearance-none"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Type
              </option>
              {types.map((type, index) => (
                <option key={index} value={type.toLowerCase()}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div></div>
        <div className="hidden md:flex h-full w-full  gap-10 items-center justify-center p-4 rounded-3xl text-black md:-mt-7">
          <button className="bg-[#fff7ed] border-2 border-orange-300 rounded-3xl px-4 py-3 text-black">
            <i className="fa-solid fa-magnifying-glass mr-2"></i> Search
            property
          </button>
          <div className="flex gap-2 items-center">
            <p className=" font-semibold tracking-tighter">
              Trusted By Buyers
              <br /> and purhcases
            </p>
            <div className="flex -space-x-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User 1"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User 2"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/65.jpg"
                alt="User 3"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/71.jpg"
                alt="User 4"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/85.jpg"
                alt="User 5"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-black font-bold text-sm border-2 border-white">
                +5
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right section - Images */}
      <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
        <img
          src="https://framerusercontent.com/images/93Cxsep5zX8709HWfq8ZQUjdrOc.png?scale-down-to=512"
          alt="House 1"
          className="w-full lg:h-60 sm:h-72 object-cover rounded-xl"
        />
        <img
          src="https://framerusercontent.com/images/9iOCryNrB7hYwEiN51ZC4yacRdg.png?scale-down-to=512"
          alt="House 2"
          className="w-full lg:h-48 sm:h-64 object-cover rounded-xl"
        />
        <img
          src="https://framerusercontent.com/images/eqdRD2hUbm9mF1btVinGnGOwpsw.png?scale-down-to=512"
          alt="House 3"
          className="w-full lg:h-52 sm:h-60 object-cover rounded-xl"
        />
        <img
          src="https://framerusercontent.com/images/LbrZluq2fZHITWnzE2pd0uc.png?scale-down-to=512"
          alt="House 4"
          className="w-full lg:h-72 sm:h-80 object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
