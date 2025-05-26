import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

export default function TopAgentsSection() {
  const agents = [
    {
      id: 1,
      name: "Amelia Stephenson",
      rating: 5.0,
      propertiesSold: 453,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 2,
      name: "Kacie Velasquez",
      rating: 5.0,
      propertiesSold: 325,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 3,
      name: "Fletcher Morse",
      rating: 5.0,
      propertiesSold: 289,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 4,
      name: "Bibi Shelton",
      rating: 5.0,
      propertiesSold: 230,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  return (
    <div className=" py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Left Side - Header */}
          <div className="lg:w-1/3 mb-12 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tighter text-gray-900 leading-tight mb-4">
              Buy from<br />
              <span className='text-orange-500'>Top</span> Brokers
            </h2>
            <p className="text-gray-600 text-sm mb-8">
              Skip the hustle and let the<br />
              pros get things done
            </p>
            <button className="inline-flex items-center px-6 bg-orange-100 py-3 border border-orange-300 rounded-full text-sm font-medium text-orange-700 hover:bg-white hover:shadow-sm transition-all">
              Top Brokers
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Right Side - Agents Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {agents.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AgentCard({ agent }) {
  return (
    <div className="bg-orange-50 border-orange-300 border rounded-2xl p-6 text-center ">
      {/* Agent Image */}
      <div className="relative mb-4">
        <img 
          src={agent.image} 
          alt={agent.name}
          className="w-16 h-16 rounded-full mx-auto object-cover"
        />
        {/* Rating Badge */}
        <div className="absolute -top-2 -right-2 bg-white rounded-full px-2 py-1 shadow-sm flex items-center space-x-1">
          <span className="text-xs font-medium text-gray-900">{agent.rating}</span>
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        </div>
      </div>

      {/* Agent Name */}
      <h3 className="font-semibold text-gray-900 text-sm mb-2">{agent.name}</h3>

      {/* Properties Sold */}
      <p className="text-xs text-gray-500 mb-4">
        {agent.propertiesSold} properties sold
      </p>

      {/* Contact Button */}
      <button className="w-full py-2 border border-orange-300 bg-orange-100 rounded-full text-sm text-orange-700 hover:bg-gray-50 transition-colors">
        Contact
      </button>
    </div>
  );
}