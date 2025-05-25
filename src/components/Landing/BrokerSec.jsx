import React from "react";

export default function BrokerSec() {
  return (
    <section className="bg-white py-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <img
            src="https://media.istockphoto.com/id/91830963/photo/couple-shakes-hands-with-real-estate-agent-outside-new-house.jpg?s=612x612&w=0&k=20&c=W3r57iGxV769JluGpSbP6acJmVsHw8j3RN6TRN7mQhc="
            alt="Couple posting property"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="space-y-6">
          <div className="text-sm text-gray-500 uppercase font-semibold">
            Are you a Broker?
          </div>
          <h2 className="text-2xl md:text-4xl tracking-tighter font-semibold text-gray-800 leading-snug">
            Sell or Rent your property faster with{" "}
            <span className="text-orange-500"> Intel Realty</span>
          </h2>
          <p className="text-sm md:text-lg text-gray-600">
            Register now to list your residential or commercial property. It's
            completely free and takes less than a minute.
          </p>
          <div className="flex items-center space-x-3">
            <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
              FREE
            </span>
            <span className="text-sm text-gray-500">
              No extra charges but limited listings
            </span>
          </div>
          <button className="mt-4 px-4  md:px-6 py-2 md:py-3 bg-orange-500 text-white rounded-xl text-base tracking-tighter hover:bg-orange-400 transition duration-200">
            Post your property for FREE
          </button>
        </div>
      </div>
    </section>
  );
}
