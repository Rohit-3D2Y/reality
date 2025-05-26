import React, { useState } from 'react';
import { MapPin, Square, Bed, Bath, Sofa, MessageCircle, PhoneCall } from 'lucide-react';

export default function FeaturedPropertiesSection() {
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tag: "For Rent",
      tagColor: "bg-orange-500",
      address: "8706 Herrick Ave, Los Angeles",
      title: "Home in Downtown, Los Angeles",
      description: "Spacious and modern home featuring an open kitchen and luxury finishes, perfect for urban living.",
      price: "$8,495,000",
      priceColor: "text-red-500",
      sqft: "2508 sqft",
      bedrooms: 3,
      bathrooms: 2,
      other: 2.5,
      brokerName: "Alex Johnson",
      brokerImage: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tag: "For Sale",
      tagColor: "bg-orange-500",
      address: "3335 21 St, San Francisco",
      title: "Modern Loft in San Francisco, CA",
      description: "Elegant loft with natural light, high ceilings, and a prime location in the heart of the city.",
      price: "$1,295,000",
      priceColor: "text-red-500",
      sqft: "1833 sqft",
      bedrooms: 3,
      bathrooms: 1,
      other: 2,
      brokerName: "Emily Clark",
      brokerImage: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tag: "For Rent",
      tagColor: "bg-orange-500",
      address: "356 La Jolla, San Diego",
      title: "Apartment in Downtown, San Diego",
      description: "Charming apartment with modern decor, close to shops and dining in the lively downtown area.",
      price: "$4,800",
      priceColor: "text-red-500",
      sqft: "741 sqft",
      bedrooms: 2,
      bathrooms: 0,
      other: 2,
      brokerName: "Michael Lee",
      brokerImage: "https://randomuser.me/api/portraits/men/65.jpg"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tag: "For Rent",
      tagColor: "bg-orange-500",
      address: "90071, South Grand Avenue, San Diego",
      title: "Executive Office, San Diego",
      description: "Premium office space designed for professionals, featuring modern amenities and a prime location.",
      price: "$3,150",
      priceColor: "text-red-500",
      sqft: "1,385 sqft",
      bedrooms: 2,
      bathrooms: 2,
      other: 2,
      brokerName: "Sophia Turner",
      brokerImage: "https://randomuser.me/api/portraits/women/32.jpg"
    }
  ];

  const [visibleCount, setVisibleCount] = useState(2);
  const isAllVisible = visibleCount >= properties.length;

  const handleLoadMore = () => {
    if (!isAllVisible) {
      setVisibleCount(prev => prev + 2);
    }
  };

  return (
    <div className="bg-white py-5 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#191c1e] tracking-tighter">Featured <span className='text-orange-500'>properties</span></h2>
          <button className="text-gray-600 hover:text-gray-900 font-medium border border-gray-800 p-2">
            Browse all properties
          </button>
        </div>

        {/* Properties List */}
        <div className="space-y-8 mb-12">
          {properties.slice(0, visibleCount).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Load More / View All Button */}
        <div className="text-center">
          {!isAllVisible ? (
            <button
              onClick={handleLoadMore}
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-red-600 transition-colors"
            >
              {visibleCount + 2 >= properties.length ? 'Load More' : 'Load More'}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function PropertyCard({ property }) {
  return (
    <div className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden border border-slate-300">
      {/* Property Image */}
      <div className="lg:w-2/5 relative">
        <div className="h-64 lg:h-80 relative overflow-hidden">
          <img 
            src={property.image} 
            alt={property.title}
            className="w-full h-full object-cover"
          />
          {/* Tag */}
          <div className={`absolute top-4 right-4 ${property.tagColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
            {property.tag}
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-between">
        <div>
          {/* Address */}
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <MapPin className="w-4 h-4 mr-2" />
            {property.address}
          </div>

          {/* Title and Price */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
            <h3 className="text-xl lg:text-2xl font-semibold tracking-tighter text-[#191c1e] mb-2 lg:mb-0 lg:w-2/3">
              {property.title}
            </h3>
            <div className={`text-2xl lg:text-3xl font-semibold ${property.priceColor}`}>
              {property.price}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {property.description}
          </p>

          {/* Broker Info and Contact Options */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Broker Info */}
            <div className="flex items-center gap-3">
              <img 
                src={property.brokerImage} 
                alt={property.brokerName}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-gray-800 font-medium">{property.brokerName}</span>
            </div>

            {/* Contact Buttons */}
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-sm text-[#191c1e] bg-orange-300 px-4 py-2 rounded-full hover:bg-orange-400 transition">
                <MessageCircle className="w-4 h-4" /> Chat
              </button>
              <button className="flex items-center gap-2 text-sm text-[#191c1e] bg-orange-300 px-4 py-2 rounded-full hover:bg-orange-400 transition">
                <PhoneCall className="w-4 h-4" /> Call
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-6 text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 border border-gray-400 rounded flex items-center justify-center">
              <Square className="w-3 h-3" />
            </div>
            <span className="text-sm">{property.sqft}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Bed className="w-5 h-5" />
            <span className="text-sm">{property.bedrooms}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Bath className="w-5 h-5" />
            <span className="text-sm">{property.bathrooms}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Sofa className="w-5 h-5" />
            <span className="text-sm">{property.other}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
