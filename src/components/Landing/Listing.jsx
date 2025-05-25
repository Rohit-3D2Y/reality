import React from 'react';

const PropertyShowcase = () => {
  const properties = [
    {
      id: 1,
      title: 'Luxury waterfront',
      price: '$235,000',
      address: '505 Oceanview Avenue, Miami, FL',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Lakeside retreat',
      price: '$625,000',
      address: '789 Lake Road, Greenfield, MI',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Charming cottage',
      price: '$845,000',
      address: '101 Oak Lane, Hillsboro, OR',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Grandview haven',
      price: '$540,000',
      address: '202 Ridge Drive, Beverly Hills, CA',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Sunny view manor',
      price: '$430,000',
      address: '123 Maple Street, Sunnyvale, CA',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Ocean breeze villa',
      price: '$420,000',
      address: '456 Elm Avenue, Downtown, NY',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 mb-4">
            Find your home with <span className="text-orange-500">unique preferences</span> by our top brokers
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Explore a curated selection of homes designed to match your unique preferences, making it effortless to find the ideal property that perfectly fits your lifestyle and needs.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* First Row */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <img 
                src={properties[0].image} 
                alt={properties[0].title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#191c1e] text-lg">{properties[0].title}</h3>
                  <span className="font-semibold text-[#191c1e] text-lg">{properties[0].price}</span>
                </div>
                <p className="text-gray-500 text-sm">{properties[0].address}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <img 
                src={properties[1].image} 
                alt={properties[1].title}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#191c1e] text-lg">{properties[1].title}</h3>
                  <span className="font-semibold text-[#191c1e] text-lg">{properties[1].price}</span>
                </div>
                <p className="text-gray-500 text-sm">{properties[1].address}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <img 
                src={properties[2].image} 
                alt={properties[2].title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#191c1e] text-lg">{properties[2].title}</h3>
                  <span className="font-semibold text-[#191c1e] text-lg">{properties[2].price}</span>
                </div>
                <p className="text-gray-500 text-sm">{properties[2].address}</p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <img 
                src={properties[3].image} 
                alt={properties[3].title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#191c1e] text-lg">{properties[3].title}</h3>
                  <span className="font-semibold text-[#191c1e] text-lg">{properties[3].price}</span>
                </div>
                <p className="text-gray-500 text-sm">{properties[3].address}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <img 
                src={properties[4].image} 
                alt={properties[4].title}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#191c1e] text-lg">{properties[4].title}</h3>
                  <span className="font-semibold text-[#191c1e] text-lg">{properties[4].price}</span>
                </div>
                <p className="text-gray-500 text-sm">{properties[4].address}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <img 
                src={properties[5].image} 
                alt={properties[5].title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#191c1e] text-lg">{properties[5].title}</h3>
                  <span className="font-semibold text-[#191c1e] text-lg">{properties[5].price}</span>
                </div>
                <p className="text-gray-500 text-sm">{properties[5].address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-[#fff7ed] border-2 border-orange-300  text-gray-800 font-medium px-6 py-3 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
            View All Properties
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyShowcase;