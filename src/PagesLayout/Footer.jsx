import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h1 className="text-4xl font-bold">
              Ford
              <span className="text-transparent bg-gradient-to-r from-red-500 to-blue-950 bg-clip-text">
                X
              </span>
            </h1>
          <p className="mt-3 text-gray-300 text-sm md:text-base">
            Driving innovation in logistics. Reliable. Scalable. Global.
          </p>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-gray-300 text-sm md:text-base">
            <li>Fleet Management</li>
            <li>Supply Chain Optimization</li>
            <li>Last Mile Delivery</li>
            <li>Warehouse Automation</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300 text-sm md:text-base">
            <li>About Us</li>
            <li>Careers</li>
            <li>Partners</li>
            <li>Newsroom</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300 text-sm md:text-base">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center px-6 max-w-7xl mx-auto">
        <p className="text-gray-400 text-xs md:text-sm">
          © {new Date().getFullYear()} FordX. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">
            LinkedIn
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">
            Twitter
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
