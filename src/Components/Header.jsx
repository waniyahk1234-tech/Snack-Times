import { ShoppingCart, Menu, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { businessInfo } from '../data/menuData';

const Header = () => {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Main Row */}
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Logo & Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-sm bg-orange-50 flex items-center justify-center border border-gray-100">
              <img 
                src="/logo.png" 
                alt="Snack Times" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <h1 className="text-lg sm:text-2xl font-bold text-gray-900 tracking-tight leading-tight">
              {businessInfo.name}
            </h1>
          </div>

          {/* Right: Contact & Cart */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Contact (Desktop only) */}
            <a href={`tel:${businessInfo.contactNumbers[0]}`} className="hidden lg:flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors">
              <Phone size={18} className="text-orange-500" />
              <span className="text-sm font-semibold">{businessInfo.contactNumbers[0]}</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center space-x-2 bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-full hover:bg-orange-600 transition-colors shadow-md"
            >
              <ShoppingCart size={20} />
              <span className="hidden sm:inline font-semibold text-sm">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;