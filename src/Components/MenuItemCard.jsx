import { useState } from 'react';
import { Plus, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const MenuItemCard = ({ item }) => {
  const { addToCart } = useCart();
  
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState(item.flavors ? item.flavors[0] : null);

  const hasVariants = item.variants && item.variants.length > 0;
  const hasFlavors = item.flavors && item.flavors.length > 0;
  
  const currentPrice = hasVariants ? item.variants[selectedVariantIndex].price : item.price;
  const currentSize = hasVariants ? item.variants[selectedVariantIndex].size : null;

  const handleAddToCart = () => {
    let itemToAdd = { ...item, price: currentPrice };
    
    if (hasVariants) {
      itemToAdd.name = `${item.name} (${currentSize})`;
      itemToAdd.id = `${item.id}-${currentSize}`; 
    }
    
    if (hasFlavors) {
      itemToAdd.name = `${item.name} (${selectedFlavor})`;
      itemToAdd.id = `${item.id}-${selectedFlavor}`; 
    }
    
    addToCart(itemToAdd);
    toast.success(`${itemToAdd.name} added to cart!`, { icon: null });
  }; // <-- CRITICAL FIX: Function closes HERE

  // <-- CRITICAL FIX: Return is now safely OUTSIDE the function
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
      {/* Image Area */}
      <div className="h-40 bg-gray-200 relative overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-orange-100 to-orange-200">
            <span className="text-6xl">{item.name.toLowerCase().includes('pizza') ? '🍕' : '🍔'}</span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-lg mb-1">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>

        {/* Size Variants */}
        {hasVariants && (
          <div className="flex space-x-2 mb-3">
            {item.variants.map((variant, index) => (
              <button
                key={variant.size}
                onClick={() => setSelectedVariantIndex(index)}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedVariantIndex === index
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {variant.size}
              </button>
            ))}
          </div>
        )}

        {/* Flavor Variants */}
        {hasFlavors && (
          <div className="relative mb-3">
            <select
              value={selectedFlavor}
              onChange={(e) => setSelectedFlavor(e.target.value)}
              className="w-full appearance-none bg-gray-50 border text-gray-700 text-sm rounded-lg p-2.5 pr-8 focus:ring-orange-500 focus:border-orange-500 outline-none"
            >
              {item.flavors.map((flavor) => (
                <option key={flavor} value={flavor}>{flavor}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        )}

        {/* Price and Add Button */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-orange-600">
            Rs. {currentPrice}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors shadow-md active:scale-95"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;