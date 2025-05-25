import React from 'react';

const Steps = () => {
  return (
    <section className="bg-orange-50 py-16 px-4 relative overflow-hidden">
      {/* Rotating asterisk */}
      <div className="absolute top-8 right-8 md:top-16 md:right-16">
        <div className="w-16 h-16 md:w-20 md:h-20 animate-spin" style={{animationDuration: '8s'}}>
          <svg viewBox="0 0 100 100" className="w-full h-full text-orange-300">
            <g fill="currentColor">
              {/* Create 8 rays for the asterisk */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
                <rect
                  key={index}
                  x="48"
                  y="20"
                  width="4"
                  height="80"
                  rx="2"
                  transform={`rotate(${rotation} 50 50)`}
                />
              ))}
            </g>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://framerusercontent.com/images/cIJE9sct5OGAFsgLnpy6nsx5rI.jpg"
                alt="Professional real estate agent"
                className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-lg"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-200 rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Header */}
            <div className='hidden md:block'>
              <h2 className="text-4xl tracking-tighter w-2/3 font-semibold text-gray-900 leading-tight mb-4">
                Discover the range of real estate{' '}
                <span className="text-orange-500">services</span> we offer
              </h2>
            </div>
            <div className='block md:hidden'><h2 className='text-4xl tracking-tighter font-semibold text-gray-900 leading-tight mb-4'>Our <span className='text-orange-500'>Services</span></h2></div>

            {/* Services List */}
            <div className="space-y-8">
              {/* Service 1 - Buy a home */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="text-2xl md:text-3xl  text-gray-400">01</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-3xl  text-gray-900 mb-3 tracking-tighter">
                    Search for your Favourite House in your location
                  </h3>
                  <p className="text-gray-500 text-sm md:text-lg leading-relaxed">
                    Easily find your dream home tailored to your location and preferences.
                  </p>
                </div>
              </div>

              {/* Service 2 - Rent a home */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="text-2xl md:text-3xl text-gray-400">02</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-3xl  text-gray-900 mb-3 tracking-tighter">
                    Make a chat / call appointment with one of the agents
                  </h3>
                  <p className="text-gray-500 text-sm md:text-lg leading-relaxed">
                    Schedule a chat or call with one of our trusted agents for personalized assistance.
                  </p>
                </div>
              </div>

              {/* Service 3 - Property management */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="text-2xl md:text-3xl  text-gray-400">03</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-3xl  text-gray-900 mb-3 tracking-tighter">
                    Get your dream house in a month or less
                  </h3>
                  <p className="text-gray-500 text-sm md:text-lg leading-relaxed">
                    Easily discover and move into your ideal home with expert guidance and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default Steps;