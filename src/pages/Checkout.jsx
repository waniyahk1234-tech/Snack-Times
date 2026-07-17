import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { businessInfo } from '../data/menuData';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    society: 'Inner Society',
    paymentMethod: 'Cash on Delivery',
    notes: ''
  });

  // 🛡️ FIX 1: Prevent checkout if cart is empty
  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="bg-orange-100 p-6 rounded-full mb-6">
          <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Add some delicious items before checking out!</p>
        <button 
          onClick={() => navigate('/')}
          className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
        >
          Back to Menu
        </button>
      </div>
    );
  }

  const deliveryCharge = formData.society === 'Inner Society'
    ? businessInfo.deliveryCharges.innerSociety
    : businessInfo.deliveryCharges.outerSociety;

  const grandTotal = cartTotal + deliveryCharge;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Auto-fill society based on address keyword (optional QoL feature)
    if (e.target.name === 'address' && e.target.value.toLowerCase().includes('outer')) {
      setFormData(prev => ({ ...prev, society: 'Outer Society' }));
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // 🛡️ FIX 2: Strict Phone Number Validation (Pakistani format: 03XXXXXXXXX)
    const cleanPhone = formData.phone.replace(/\s|-/g, ''); // Remove spaces or dashes
    const phoneRegex = /^03\d{9}$/;
    
    if (!phoneRegex.test(cleanPhone)) {
      alert("Please enter a valid 11-digit Pakistani mobile number (e.g., 03001234567)");
      return; // Stop the order from submitting
    }

    setIsSubmitting(true);

    // 1. Format the Order Message
    const orderItems = cart.map(item => 
      `• ${item.quantity}x ${item.name} - Rs. ${item.price * item.quantity}`
    ).join('\n');

    const message = `*NEW ORDER - SNACK TIMES* \n\n` +
      ` *Customer:* ${formData.name}\n` +
      ` *Phone:* ${cleanPhone}\n` +
      ` *Area:* ${formData.society}\n` +
      ` *Address:* ${formData.address}\n\n` +
      ` *Order Details:*\n${orderItems}\n\n` +
      `*Delivery:* Rs. ${deliveryCharge}\n` +
      ` *Grand Total:* Rs. ${grandTotal}\n` +
      ` *Payment:* ${formData.paymentMethod}\n` +
      (formData.notes ? `\n *Special Notes:* ${formData.notes}\n` : '') +
      `\nPlease confirm this order. Thank you!`;

    // 2. FAKE WhatsApp Number FOR DEMO ONLY! 
    // CHANGE THIS TO "923123128488" ONLY WHEN YOU ACTUALLY SELL THE SITE!
    const ownerPhone = "923431206453"; 

    // 3. Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${ownerPhone}?text=${encodeURIComponent(message)}`;
    
    // 4. Open WhatsApp and clear cart
    window.open(whatsappUrl, '_blank');
    
    setTimeout(() => {
      clearCart();
      navigate('/');
      setIsSubmitting(false);
    }, 1000);
  };

  // Check if phone number is currently valid for UI feedback
  const cleanPhone = formData.phone.replace(/\s|-/g, '');
  const isPhoneValid = /^03\d{9}$/.test(cleanPhone);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>

      {/* Order Summary */}
      <div className="bg-white p-4 rounded-lg shadow mb-6 border border-gray-100">
        <h2 className="font-bold text-lg mb-3 text-gray-800">Order Summary</h2>
        {cart.map(item => (
          <div key={item.id} className="flex justify-between text-sm mb-2 text-gray-700">
            <span>{item.quantity}x {item.name}</span>
            <span>Rs. {item.price * item.quantity}</span>
          </div>
        ))}
        <div className="border-t pt-2 mt-2 flex justify-between font-bold text-gray-800">
          <span>Subtotal</span>
          <span>Rs. {cartTotal}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Delivery ({formData.society})</span>
          <span>Rs. {deliveryCharge}</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-orange-600 mt-2">
          <span>Grand Total</span>
          <span>Rs. {grandTotal}</span>
        </div>
      </div>

      {/* Checkout Form */}
      <form onSubmit={handlePlaceOrder} className="bg-white p-4 rounded-lg shadow space-y-4 border border-gray-100">
        <h2 className="font-bold text-lg text-gray-800">Delivery Details</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            pattern="03[0-9]{9}"
            title="Please enter a valid 11-digit Pakistani mobile number (e.g., 03001234567)"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all ${
              formData.phone.length > 0 ? (isPhoneValid ? 'border-green-500' : 'border-red-300') : ''
            }`}
            placeholder="03XX-XXXXXXX"
          />
          
          {/* Dynamic Helper Text */}
          {formData.phone.length === 0 ? (
            <p className="text-xs text-gray-400 mt-1">Enter your 11-digit mobile number</p>
          ) : isPhoneValid ? (
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Valid number format
            </p>
          ) : (
            <p className="text-xs text-red-500 mt-1">Must be 11 digits, starting with 03</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Area</label>
          <select
            name="society"
            value={formData.society}
            onChange={handleChange}
            className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
          >
            <option value="Inner Society">Inner Society (Rs. {businessInfo.deliveryCharges.innerSociety})</option>
            <option value="Outer Society">Outer Society (Rs. {businessInfo.deliveryCharges.outerSociety})</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Address</label>
          <textarea
            name="address"
            required
            rows="3"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
            placeholder="House #, Street #, Block"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Special Notes (Optional)</label>
          <textarea
            name="notes"
            rows="2"
            value={formData.notes}
            onChange={handleChange}
            className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
            placeholder="e.g., Extra spicy, no onions, ring the bell twice..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full text-white py-3 rounded-lg font-bold text-lg transition-all shadow-lg flex items-center justify-center space-x-2 ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-orange-500 hover:bg-orange-600 active:scale-95'
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Placing Order...</span>
            </>
          ) : (
            <span>Place Order (Cash on Delivery)</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default Checkout;