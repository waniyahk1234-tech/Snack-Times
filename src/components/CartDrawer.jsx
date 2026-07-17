import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { businessInfo } from '../data/menuData';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  // Don't render anything if the cart is closed
  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    // Overlay
    <div className="fixed inset-0 z-50 flex justify-end">
      
      {/* Transparent Backdrop (Replaced dark background with transparent) */}
      <div
        className="absolute inset-0 bg-transparent"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* The Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col border-l border-gray-100">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <span className="text-6xl mb-4">🛒</span>
              <p className="text-lg font-medium">Your cart is empty</p>
              <p className="text-sm">Add some delicious items!</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-100">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.name}</h3>
                  <p className="text-orange-600 font-bold text-sm">Rs. {item.price * item.quantity}</p>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 bg-white rounded-full shadow-sm hover:bg-gray-100 border border-gray-200"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="font-bold w-6 text-center text-sm">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 bg-white rounded-full shadow-sm hover:bg-gray-100 border border-gray-200"
                  >
                    <Plus size={14} />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1 text-red-500 hover:bg-red-50 rounded-full ml-2"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout Button */}
        {cart.length > 0 && (
          <div className="border-t p-4 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-700">Total:</span>
              <span className="text-2xl font-bold text-orange-600">Rs. {cartTotal}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg active:scale-95"
            >
              Proceed to Checkout
            </button>
            <p className="text-xs text-center text-gray-500 mt-3">
              Delivery: Rs. {businessInfo.deliveryCharges.innerSociety} (Inner Society)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
