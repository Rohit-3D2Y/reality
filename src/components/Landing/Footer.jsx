
const Footer = () => {
  return (
    <footer className="bg-orange-100 rounded-2xl text-[#191c1e] pt-10 lg:mx-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-10">
          {/* Company Info */}
          <div className="space-y-6 md:pl-4">
            <img src="/assets/logo.webp" alt="logo" className="h-16 mx-auto md:mx-0 bg-white p-2 rounded-2xl" />
            <p className="text-sm text-center md:text-left">
              A marketplace for brokers and buyers to list and buy properties seamlessly.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="hover:text-[#94b4c1]">
                <i className="fa-brands fa-facebook text-xl"></i>
              </a>
              <a href="#" className="hover:text-[#94b4c1]">
                <i className="fa-brands fa-twitter text-xl"></i>
              </a>
              <a href="#" className="hover:text-[#94b4c1]">
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-6 border-b border-orange-500 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li>Home</li>
              <li>Services</li>
              <li>Discover</li>
              <li>About Us</li>
              <li>Register as broker</li>

            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-6 border-b border-orange-500 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <a href="tel:+912246077327" className="flex items-center gap-3 hover:text-[#94b4c1]">
                  <i className="fa-solid fa-phone text-orange-500"></i>
                  <span>+91 123455667</span>
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <a href="mailto:dssgroup9@gmail.com" className="flex items-center gap-3 hover:text-[#94b4c1]">
                  <i className="fa-solid fa-envelope text-orange-500"></i>
                  <span>rohit@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <i className="fa-solid fa-location-dot text-orange-500"></i>
                <span>My Home</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#edefca]/20 py-6">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-2">
            <p className="text-center text-sm">
              © {new Date().getFullYear()} Intel Realty. All rights reserved.
            </p>
            <p className="text-lg font-semibold tracking-tighter text-orange-800 hover:text-orange-600 cursor-pointer transition-colors">
               Made with ❤️ by Somvanshi technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
