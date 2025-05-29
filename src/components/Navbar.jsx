import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can use Heroicons or SVGs if not using lucide-react
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="text-black px-6 sm:px-10 py-5 flex justify-between items-center relative">
      {/* Logo */}
      <div>
        <img src="/logo.png" alt="logo" className="h-8" />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-7 text-lg">
        <div>Home</div>
        <div>Discover</div>
        <div>About Us</div>
        <div className='cursor-pointer' onClick={()=> {navigate('/broker-profile')}}>Register as Broker</div>
      </div>

      {/* Login Button */}
      <div className="hidden md:block">
        <button className="text-white bg-[#191c1e] px-4 py-2 rounded-2xl" onClick={() => navigate('/login')}>
          Login
        </button>
      </div>

      {/* Hamburger Button */}
      <div className="md:hidden z-20">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
          <div>Home</div>
          <div>Discover</div>
          <div>About Us</div>
          <div>Register as Broker</div>
          <button className="text-white bg-[#191c1e] px-4 py-2 rounded-2xl" onClick={()=> navigate('/login')}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
