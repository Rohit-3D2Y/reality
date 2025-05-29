import React from 'react';
import { MapPin, Home, Bed, Bath, PhoneCall, MessageCircle } from 'lucide-react';

const PropertyCard = ({ 
  image, 
  price, 
  title, 
  address, 
  sqft, 
  bedrooms, 
  bathrooms, 
  status,
  statusColor = "bg-red-500",
  brokerName,
  brokerImage,
  brokerPhone
}) => (
  <div className="bg-orange-50 rounded-lg overflow-hidden">
    <div className="relative">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 sm:h-56 lg:h-64 object-cover"
      />
      <div className={`absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium`}>
        {status}
      </div>
    </div>
    
    <div className="p-4 sm:p-5">
      <div className="mb-3">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">{price}</h3>
        <h4 className="text-base sm:text-lg font-medium text-gray-800 mb-2">{title}</h4>
        <div className="flex items-center text-gray-600 text-sm">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className="truncate">{address}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-gray-600 text-sm mb-4">
        <div className="flex items-center">
          <Home className="w-4 h-4 mr-1" />
          <span>{sqft} sqft</span>
        </div>
        {bedrooms && (
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>{bedrooms}</span>
          </div>
        )}
        {bathrooms && (
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{bathrooms}</span>
          </div>
        )}
      </div>

      {/* Broker Info */}
      <div className="border-t pt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={brokerImage} 
            alt={brokerName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">{brokerName}</p>
            <p className="text-xs text-gray-500">Broker</p>
          </div>
        </div>
        <div className="flex gap-2">
          <a href={`tel:${brokerPhone}`} className="p-2 bg-orange-300 rounded-full hover:bg-orange-200 transition">
            <PhoneCall className="w-4 h-4 text-gray-600" />
          </a>
          <button className="p-2 bg-orange-300 rounded-full hover:bg-orange-200 transition">
            <MessageCircle className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default function PropertyListing() {
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=2070&q=80",
      price: "$8,495,000",
      title: "Home in Downtown, Los Angeles",
      address: "8706 Herrick Ave, Los Angeles",
      sqft: "2508",
      bedrooms: "3",
      bathrooms: "2.5",
      status: "For Rent",
      statusColor: "bg-red-500",
      brokerName: "Alex Johnson",
      brokerImage: "https://randomuser.me/api/portraits/men/32.jpg",
      brokerPhone: "+1234567890"
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2058&q=80",
      price: "$1,295,000",
      title: "Modern Loft in San Francisco, CA",
      address: "3335 21 St, San Francisco",
      sqft: "1833",
      bedrooms: "3",
      bathrooms: "2",
      status: "For Sale",
      statusColor: "bg-white text-gray-800 border border-gray-300",
      brokerName: "Sophia Carter",
      brokerImage: "https://randomuser.me/api/portraits/women/45.jpg",
      brokerPhone: "+1987654321"
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2058&q=80",
      price: "$4,800",
      title: "Apartment in Downtown, San Diego",
      address: "356 La Jolla, San Diego",
      sqft: "741",
      bedrooms: "2",
      bathrooms: "2",
      status: "For Rent",
      statusColor: "bg-red-500",
      brokerName: "Daniel Lee",
      brokerImage: "https://randomuser.me/api/portraits/men/65.jpg",
      brokerPhone: "+1478523690"
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2058&q=80",
      price: "$3,150",
      title: "Executive Office, San Diego",
      address: "90071, South Grand Avenue, San Diego",
      sqft: "1,385",
      bedrooms: "2",
      bathrooms: "2",
      status: "For Rent",
      statusColor: "bg-red-500",
      brokerName: "Nina Patel",
      brokerImage: "https://randomuser.me/api/portraits/women/21.jpg",
      brokerPhone: "+1654321879"
    },
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2075&q=80",
      price: "$5,290,000",
      title: "Home in Los Angeles Heart",
      address: "2569 El Segundo, Los Angeles",
      sqft: "4787",
      bedrooms: "6",
      bathrooms: "5",
      status: "For Sale",
      statusColor: "bg-white text-gray-800 border border-gray-300",
      brokerName: "Maria Green",
      brokerImage: "https://randomuser.me/api/portraits/women/52.jpg",
      brokerPhone: "+1123581321"
    },
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2075&q=80",
      price: "$3,259,000",
      title: "Home in Mid-City, Los Angeles",
      address: "21817 Dock St, Los Angeles",
      sqft: "2618",
      bedrooms: "3",
      bathrooms: "3",
      status: "For Sale",
      statusColor: "bg-white text-gray-800 border border-gray-300",
      brokerName: "Thomas Young",
      brokerImage: "https://randomuser.me/api/portraits/men/12.jpg",
      brokerPhone: "+1098765432"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tighter text-[#191c1e] mb-4 sm:mb-0">
            All <span className='text-orange-500'>Properties</span>
          </h1>
          <button className="text-gray-600 hover:text-gray-800 font-medium text-sm sm:text-base border border-gray-800 p-2">
            Browse all properties
          </button>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>

       
      </div>
    </div>
  );
}
