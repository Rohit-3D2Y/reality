import React from 'react';
import { Heart, MapPin, Building, DollarSign, Bed, MoreHorizontal, MessageCircle, Contact, Search } from 'lucide-react';

export default function DiscoverHero() {
  return (
    <div className="min-h-screen p-4 lg:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className='flex flex-col md:flex-row items-center mb-5 md:items-start md:justify-between'>
            <h1 className="text-3xl lg:text-5xl font-semibold tracking-tighter text-gray-900 mb-8 lg:mb-12">
          <span className='mr-2'>✴︎</span> Buy, Sell or Rent Your <span className='text-orange-500'>Property</span> with Ease <span className='ml-2'>✴︎</span>
        </h1>
        <div >
            <button className='border border-orange-500 text-lg  md:text-xl py-2 px-4 md:p-5 rounded-2xl font-semibold tracking-tighter flex gap-4 items-center'><Search /> Search Properties</button>
        </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Property Image */}
            <div className="lg:w-2/3 relative">
              <div className="h-auto relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?cs=srgb&dl=pexels-pixabay-259588.jpg&fm=jpg" 
                  alt="Modern house with wooden slats and large windows"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Property Details */}
            <div className="lg:w-1/3 p-6 lg:p-8 flex flex-col justify-between h-auto bg-orange-50">
              {/* Top Section */}
              <div>
                {/* Address and Save */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <p className="text-gray-700 text-sm md:text-lg mb-1">201 Sanctum Sanctorum,</p>
                    <p className="text-gray-700 text-sm md:text-lg">Kamar Taj, CA 95119</p>
                  </div>
                  <button className="p-2  hover:text-white  rounded-lg transition-colors">
                    {/* <Heart className="w-5 h-5 text-gray-400" /> */}
                    ❤️
                  </button>
                </div>

                {/* Property Stats */}
                <div className="flex justify-between mb-4 md:mb-8">
                  <div className="text-center">
                    <div className="text-xl md:text-4xl font-semibold text-[#191c1e] mb-1">4</div>
                    <div className="text-sm text-gray-500">beds</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl md:text-4xl font-semibold text-[#191c1e] mb-1">3</div>
                    <div className="text-sm text-gray-500">rooms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl md:text-4xl font-semibold text-[#191c1e] mb-1">1,868</div>
                    <div className="text-sm text-gray-500">sqft</div>
                  </div>
                </div>

                {/* Price and Split Options */}
                <div className="flex flex-col gap-2 md:flex-row items-center justify-between mb-5 md:mb-10">
                  <div className="text-xl md:text-4xl font-semibold text-[#191c1e] ">$1,650,000</div>
                  <button className="px-4 py-2 border border-orange-800 rounded-full text-sm text-orange-800 bg-orange-200 transition-colors flex items-center">
                    View Properties
                    <span className="ml-2">→</span>
                  </button>
                </div>

                {/* Agent Info */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 md:w-12 h-8 md:h-12 bg-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm md:text-lg">A</span>
                    </div>
                    <div>
                      <div className="font-semibold tracking-tighter text-gray-900 text-sm md:text-base">Amelia</div>
                      <div className="font-semibold tracking-tighter text-gray-900 text-sm md:text-base">Stephenson</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <button className="px-6 py-2 border border-orange-300 rounded-full text-sm text-black hover:bg-orange-500 hover:text-white transition-colors flex items-center  gap-2">
                     <Contact className='w-5 h-5'/> Contact
                    </button>
                  </div>
                </div>
                   
              </div>

              {/* Bottom Section */}
              <div>
                {/* Request Tour Button */}
                <button className="w-full bg-orange-400 text-white py-4 rounded-full font-semibold tracking-tighter  transition-colors mb-2 text-xl md:text-2xl flex justify-center items-center gap-3">
                 <MessageCircle /> Message agent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}