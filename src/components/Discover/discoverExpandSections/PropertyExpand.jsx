import React, { useState } from "react";
import {
  MapPin,
  MessageCircle,
  PhoneCall,
  Square,
  Bed,
  Bath,
  Sofa,
  Star,
  UserCircle2,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
} from "lucide-react";

const dummyProperty = {
  images: [
    "https://www.decorilla.com/online-decorating/wp-content/uploads/2020/07/Cozy-mid-century-modern-apartment-design-with-contemporay-lighting-for-a-living-and-dining-room-by-Tatiana-nicol.jpg",
    "https://amazingarchitecture.com/storage/8307/modern-apartment-moscow-ariana-ahmad-design.jpg",
    "https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.jpg?s=612x612&w=0&k=20&c=vgQesOXDRzz0UfOZxmUtE-rFe75YgA9GvkKS8eeeumE=",
    "https://i.homeadore.com/wp-content/uploads/2019/02/010-modern-apartment-by-hi-light-architects-460x307.jpg",
    "https://media.gettyimages.com/id/1287051178/photo/balconies-in-modern-apartment-building.jpg?s=612x612&w=gi&k=20&c=8vHUlqldGNfXRmNAefxvMyvlWM6BN-QOr0MVolxIjK0=",
  ],
  title: "Elegant 3BHK Apartment in Central Mumbai",
  address: "123 Marine Drive, Mumbai",
  price: "₹2.5 Cr",
  priceColor: "text-orange-500",
  tag: "Sale",
  tagColor: "bg-orange-500",
  description:
    "This spacious 3BHK apartment offers beautiful sea views, modern amenities, and close proximity to top schools, hospitals, and business hubs. The property features premium finishes, floor-to-ceiling windows, and access to world-class facilities including a swimming pool, gym, and 24/7 security.",
  sqft: "1800 sqft",
  bedrooms: "3 Beds",
  bathrooms: "2 Baths",
  other: "Furnished",
  brokerName: "Amit Sharma",
  brokerImage: "https://randomuser.me/api/portraits/men/45.jpg",
};



const PropertyExpand = () => {

    const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Rohit Sharma",
      rating: 5,
      comment: "Spacious and clean! The broker was responsive and helpful.",
    },
    {
      id: 2,
      name: "Neha Verma",
      rating: 4,
      comment: "Great locality and worth the price. A few minor issues inside though.",
    },
  ]);

   const averageRating =
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length || 0;

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment && newReview.rating > 0) {
      const newEntry = {
        ...newReview,
        id: reviews.length + 1,
      };
      setReviews([newEntry, ...reviews]);
      setNewReview({ name: "", rating: 0, comment: "" });
    }
  };

    const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const property = dummyProperty;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };


  return (
    <div className="min-h-screen bg-orange-50 pb-10">
      {/* Hero Section with Image Gallery */}
      <div className="relative h-96 md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={property.images[currentImageIndex]}
            alt={`Property view ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {property.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                idx === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>

        {/* Floating Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 transition-all duration-200">
            <Heart className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Hot Deal Tag */}
        <div className="absolute top-4 left-4">
          <span className={`${property.tagColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
            {property.tag}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 ">
            {/* Property Info */}
            <div className=" rounded-2xl bg-gray-50 p-6 md:p-8 mb-6">
              {/* Address */}
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                {property.address}
              </div>

              {/* Title + Price */}
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900 mb-2">
                    {property.title}
                  </h1>
                  <div className={`text-3xl font-semibold ${property.priceColor}`}>
                    {property.price}
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-orange-100 rounded-xl p-4 text-center">
                  <Square className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                  <div className="text-sm text-gray-600">Area</div>
                  <div className="font-semibold text-gray-900">{property.sqft}</div>
                </div>
                <div className="bg-orange-100 rounded-xl p-4 text-center">
                  <Bed className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                  <div className="text-sm text-gray-600">Bedrooms</div>
                  <div className="font-semibold text-gray-900">{property.bedrooms}</div>
                </div>
                <div className="bg-orange-100 rounded-xl p-4 text-center">
                  <Bath className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                  <div className="text-sm text-gray-600">Bathrooms</div>
                  <div className="font-semibold text-gray-900">{property.bathrooms}</div>
                </div>
                <div className="bg-orange-100 rounded-xl p-4 text-center">
                  <Sofa className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                  <div className="text-sm text-gray-600">Condition</div>
                  <div className="font-semibold text-gray-900">{property.other}</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-semibold tracking-tighter text-gray-900 mb-4">About This Property</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {property.description}
                </p>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
      {/* Heading */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold tracking-tighter text-gray-900">
          Reviews & Ratings
        </h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {Array(Math.floor(averageRating))
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
          </div>
          <span className="text-xl font-bold text-gray-900">
            {averageRating.toFixed(1)}
          </span>
          <span className="text-gray-500">({reviews.length} reviews)</span>
        </div>
      </div>

      {/* Add Review Form */}
      <form onSubmit={handleReviewSubmit} className="mb-6">
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
            value={newReview.name}
            onChange={(e) =>
              setNewReview((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-6 h-6 cursor-pointer ${
                  newReview.rating >= star
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
                onClick={() =>
                  setNewReview((prev) => ({ ...prev, rating: star }))
                }
              />
            ))}
          </div>
        </div>
        <textarea
          placeholder="Write your review..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-300"
          rows={3}
          value={newReview.comment}
          onChange={(e) =>
            setNewReview((prev) => ({ ...prev, comment: e.target.value }))
          }
        />
        <button
          type="submit"
          className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded-full"
        >
          Submit Review
        </button>
      </form>

      {/* Review List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
          >
            <UserCircle2 className="w-12 h-12 text-gray-400 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{review.name}</h3>
                <div className="flex items-center gap-1">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
          </div>

          {/* Right Column - Broker & Contact */}
          <div className="lg:col-span-1">
            <div className=" rounded-2xl border-b-2 border-b-orange-500 bg-gray-50 p-6 md:p-8 sticky top-8">
              {/* Broker Info */}
              <div className="text-center mb-6">
                <img
                  src={property.brokerImage}
                  alt={property.brokerName}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-orange-100"
                />
                <h3 className="text-xl font-semibold tracking-tighter text-gray-900 mb-1">{property.brokerName}</h3>
                <p className="text-gray-500">Property Consultant</p>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3 mb-6">
                <button className="w-full flex items-center justify-center gap-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105">
                  <PhoneCall className="w-5 h-5" />
                  Call Now
                </button>
                <button className="w-full flex items-center justify-center gap-3 bg-orange-400 hover:bg-orange-500 text-white  font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105">
                  <MessageCircle className="w-5 h-5" />
                  Send Message
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Quick Info</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property ID:</span>
                    <span className="font-medium">#PRP2024001</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Listed:</span>
                    <span className="font-medium">2 days ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property Type:</span>
                    <span className="font-medium">Apartment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyExpand;