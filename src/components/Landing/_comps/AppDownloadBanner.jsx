import React from "react";

const AppDownloadBanner = () => {
  return (
    <div className="md:px-40 px-4 py-16 flex flex-col lg:flex-row gap-4 lg:gap-5">
      {/* Left Banner (Image or Content Area) */}

    <div className="w-full lg:w-2/3 bg-orange-400 rounded-3xl p-4 md:p-6 lg:px-8 flex flex-col items-center justify-between relative overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] lg:h-auto min-h-[300px]">
      {/* Logo Section */}
      <div className="flex items-center gap-2 z-10 mb-4 sm:mb-6">
        <img
          src="/assets/hiring.png"
          alt="Logo"
          className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
        />
        <h1 className="text-3xl sm:text-xl  md:text-3xl font-semibold tracking-tighter text-white">
           Intel Realty
        </h1>
      </div>
      {/* Phone Image */}
      <div className="w-full flex items-center justify-center absolute -bottom-3 md:-bottom-10 left-0 right-0">
        <img
          src="/assets/phone.png"
          alt="App Mockup"
          className="h-[180px] sm:h-[200px] md:h-[250px] lg:h-[280px] object-contain"
        />
      </div>
    </div>






      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto lg:w-1/3 min-h-[300px] sm:min-h-[320px] md:min-h-[340px] lg:h-auto bg-slate-300 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 flex flex-col gap-3 sm:gap-4 md:gap-5 items-center justify-center">
        {/* App Icon */}
        <div className="flex-shrink-0">
          <div className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 mx-auto rounded-2xl flex items-center justify-center">
            {/* Placeholder for hiring.png - replace with actual image */}
            <img src="/assets/hiring.png" alt="" />
          </div>
        </div>

        {/* Title Text */}
        <div className="text-center space-y-1 sm:space-y-2">
          <h1 className="text-lg sm:text-xl lg:text-2xl text-center tracking-tighter font-semibold text-slate-800 leading-tight">
            Download our{" "}
            <span className="bg-orange-400 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-xl sm:rounded-2xl text-white whitespace-nowrap">
               Intel Realty
            </span>
          </h1>
          <h1 className="text-lg sm:text-xl lg:text-2xl  text-center tracking-tighter font-semibold text-slate-800 leading-tight">
            app for Easy Access
          </h1>
        </div>

        {/* App Store Buttons */}
        <div className="flex flex-wrap sm:flex-row gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none justify-center items-center">
          {/* App Store Button */}
          <div className="flex items-center gap-2 sm:gap-3 bg-orange-400 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl cursor-pointer hover:bg-orange-500 transition-colors w-full sm:w-auto justify-center sm:justify-start min-w-0">
            {/* Apple Icon Placeholder */}
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-md flex items-center justify-center flex-shrink-0">
              <img src="/assets/apple.png" alt="" />
            </div>
            <div className="flex flex-col leading-none min-w-0">
              <h1 className="text-sm">Appstore</h1>
            </div>
          </div>

          {/* Google Play Button */}
          <div className="flex  items-center gap-2 sm:gap-3 bg-white text-black px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl cursor-pointer hover:bg-gray-50 transition-colors border border-gray-200 w-full sm:w-auto justify-center sm:justify-start min-w-0">
            {/* Google Play Icon Placeholder */}
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center flex-shrink-0">
              <img src="/assets/playstore.png" alt="" />
            </div>
            <div className="flex flex-col leading-none min-w-0">
              <h1 className="text-xs">Playstore</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadBanner;
