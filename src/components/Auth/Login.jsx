import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, ChevronLeft, ChevronRight, MapPin, Bed, Bath, Square } from 'lucide-react';

const RealEstateLogin = () => {
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const properties = [
    {
      id: 1,
      title: "MODERN VILLA",
      subtitle: "Luxury Home",
      location: "Beverly Hills, CA",
      price: "$2,850,000",
      beds: 4,
      baths: 3,
      sqft: "3,200",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "PENTHOUSE SUITE", 
      subtitle: "City Living",
      location: "Manhattan, NY",
      price: "$4,200,000",
      beds: 3,
      baths: 2,
      sqft: "2,800",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "BEACHFRONT ESTATE",
      subtitle: "Oceanview Property", 
      location: "Malibu, CA",
      price: "$6,750,000",
      beds: 5,
      baths: 4,
      sqft: "4,500",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      console.log('Authentication successful:', { state, name, email, password });
      setIsLoading(false);
      alert(`${state === 'Sign Up' ? 'Account created' : 'Login'} successful!`);
    }, 2000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + properties.length) % properties.length);
  };

  const currentProperty = properties[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      {/* Left Side - Hero Content */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
          style={{ backgroundImage: `url(${currentProperty.image})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-between p-8 lg:p-12 text-white w-full">
          {/* Top Section */}
          <div className="space-y-4">
            <div className="text-sm font-medium text-gray-200 tracking-wider">
              INTEL REALTY
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                POWERED BY
              </h1>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-orange-400">PROFESSIONALS</span> AROUND
              </h1>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                THE WORLD.
              </h1>
              <div className="flex space-x-2 mt-4">
                <div className="w-12 h-3 bg-orange-400 rounded-full"></div>
                <div className="w-8 h-3 bg-orange-300 rounded-full"></div>
                <div className="w-6 h-3 bg-orange-200 rounded-full"></div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-gray-300 mb-4">Don't have an account?</p>
              <button 
                onClick={() => setState(state === "Login" ? "Sign Up" : "Login")}
                className="text-white bg-orange-500 p-4 rounded-2xl text-base"
              >
                {state === "Login" ? "Create account" : "Sign in instead"} →
              </button>
            </div>
          </div>

          {/* Bottom Section - Property Info */}
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-sm text-gray-300 mb-2">About us</div>
              <div className="text-sm text-gray-200 leading-relaxed">
                a one stop platform connecting buyers and sellers of real estate properties,
                providing a seamless experience for property transactions. Our platform offers a wide range of listings, detailed property information, and expert guidance to help you find your dream home or investment.
              </div>
            </div>

           

            {/* Navigation */}
            <div className="flex justify-end space-x-2">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full bg-orange-50 lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Hero Section */}
          <div className="lg:hidden mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome to <span className="text-orange-500">Intel Realty</span>
            </h1>
            <p className="text-gray-600">Find your dream property today</p>
          </div>

          {/* Login Card */}
          <div className="bg-orange-50 rounded-3xl  p-8 lg:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {state === "Sign Up" ? "Create your account" : "Login to your account"}
              </h2>
              <p className="text-gray-600 text-sm">
                {state === "Sign Up" 
                  ? "Join thousands of property sellers and buyers" 
                  : "Welcome back! Please enter your details"
                }
              </p>
            </div>

            <div className="space-y-6">
              {state === "Sign Up" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {state === "Sign Up" ? "Email Address" : "Username"}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={state === "Sign Up" ? "email" : "text"}
                    placeholder={state === "Sign Up" ? "Enter your email" : "jackob blonde"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {state === "Login" && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded border-gray-300 text-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <button className="text-sm text-orange-600 hover:text-orange-500 font-medium">
                    Forgot your password?
                  </button>
                </div>
              )}

              <button
                onClick={onSubmitHandler}
                disabled={isLoading}
                className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>{state === "Sign Up" ? "Create Account" : "Login"}</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Mobile Toggle */}
              <div className="lg:hidden text-center">
                <p className="text-gray-600">
                  {state === "Sign Up" ? "Already have an account?" : "Don't have an account?"}{" "}
                  <button
                    onClick={() => setState(state === "Login" ? "Sign Up" : "Login")}
                    className="text-green-600 hover:text-green-500 font-medium"
                  >
                    {state === "Login" ? "Sign up" : "Sign in"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateLogin;