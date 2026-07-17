import { Phone, MapPin, Clock, Truck } from "lucide-react";
import { businessInfo } from "../data/menuData";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand & Delivery Section */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-2">
              {businessInfo.name}
            </h3>
            <p className="text-gray-400 text-sm mb-6">{businessInfo.tagline}</p>

            {/* Delivery Charges Box */}
            <div className="bg-gray-800/50 border border-gray-700 p-4 rounded-xl">
              <div className="flex items-center space-x-2 mb-3">
                <Truck size={20} className="text-orange-500" />
                <h4 className="text-orange-400 font-bold text-sm">
                  DELIVERY CHARGES
                </h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Inner Society:</span>
                  <span className="text-white font-semibold">
                    Rs. {businessInfo.deliveryCharges.innerSociety}
                  </span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Outer Society:</span>
                  <span className="text-white font-semibold">
                    Rs. {businessInfo.deliveryCharges.outerSociety}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-orange-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  {businessInfo.contactNumbers.map((number, index) => (
                    <div key={index}>
                      <a
                        href={`tel:${number}`}
                        className="text-gray-300 text-sm hover:text-orange-400 transition-colors block"
                      >
                        {number}
                      </a>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Location & Hours Section */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">Visit Us</h4>

            <div className="flex items-start space-x-3 mb-6">
              <MapPin size={20} className="text-orange-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-300 text-sm leading-relaxed mb-2">
                  {businessInfo.address}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(businessInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 text-xs font-semibold hover:text-orange-300 transition-colors"
                >
                  Get Directions on Google Maps →
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock
                size={20}
                className="text-orange-500 shrink-0 mt-0.5"
              />
              <div className="text-gray-300 text-sm">
                <p className="text-white">Mon - Sun:</p>
                <p>5:00 PM - 1:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-500 text-xs text-center md:text-left">
              © {new Date().getFullYear()} {businessInfo.name}. All rights
              reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Fast Food • Burgers • Pizza • Rolls
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
