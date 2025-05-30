import React from 'react';
import { ChevronRight } from 'lucide-react';

const CityProperty = () => {
  const cities = [
    {
      name: "Delhi / NCR",
      properties: "1,55,000+",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=300&h=200&fit=crop&auto=format",
      alt: "India Gate Delhi"
    },
    {
      name: "Mumbai",
      properties: "34,000+",
      image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=300&h=200&fit=crop&auto=format",
      alt: "Gateway of India Mumbai"
    },
    {
      name: "Bangalore",
      properties: "38,000+",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=300&h=200&fit=crop&auto=format",
      alt: "Bangalore Palace"
    },
    {
      name: "Hyderabad",
      properties: "22,000+",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&auto=format",
      alt: "Hyderabad Cityscape"
    },
    {
      name: "Pune",
      properties: "35,000+",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=300&h=200&fit=crop&auto=format",
      alt: "Pune Architecture"
    },
    {
      name: "Kolkata",
      properties: "28,000+",
      image: "https://images.unsplash.com/photo-1558431382-27e303142255?w=300&h=200&fit=crop&auto=format",
      alt: "Victoria Memorial Kolkata"
    },
    {
      name: "Chennai",
      properties: "33,000+",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=300&h=200&fit=crop&auto=format",
      alt: "Chennai Central Station"
    },
    {
      name: "Ahmedabad",
      properties: "24,000+",
      image: "https://images.unsplash.com/photo-1558431382-27e303142255?w=300&h=200&fit=crop&auto=format",
      alt: "Statue of Unity Ahmedabad"
    }
  ];

  return (
    <div className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-medium text-gray-500 tracking-wide uppercase mb-2">
            TOP CITIES
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900">
            Explore <span className='text-orange-500'>Property</span> in Popular Indian Cities
          </h2>
        </div>

        {/* Cities Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {cities.map((city, index) => (
              <div
                key={city.name}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105 "
              >
                <div className="bg-white rounded-xl overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={city.image}
                      alt={city.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 border-b-2 border-orange-300">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors duration-300">
                      {city.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {city.properties} Properties
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

         
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center mt-6 lg:hidden">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            <span>View More Cities</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityProperty;