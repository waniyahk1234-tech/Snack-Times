import { useState } from 'react';
import { Search, Utensils } from 'lucide-react';
import { menuCategories } from '../data/menuData';
import CategoryNav from '../components/CategoryNav';
import MenuItemCard from '../components/MenuItemCard';
import HeroBanner from '../components/HeroBanner';
import { useCart } from '../context/CartContext';

const Home = () => {
  // Added cartTotal here so we can show the price in the bottom bar!
  const { cartCount, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = menuCategories.map(category => {
    const filteredItems = category.items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...category, items: filteredItems };
  }).filter(category => category.items.length > 0);

  const hasResults = filteredCategories.length > 0;

  return (
    <div className="min-h-screen pb-24"> {/* Added padding bottom so content doesn't hide behind the bar */}
      <HeroBanner />
      
      <div className="sticky top-0 z-30 bg-gray-50/90 backdrop-blur-md border-b border-gray-200 py-4 px-4 min-h-20">
        <div className="max-w-3xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for burgers, pizza, fries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>
      </div>

      <CategoryNav />
      
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        {!hasResults && searchQuery && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <Utensils size={48} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No items found!
            </h3>
            <p className="text-gray-500 mb-6">
              We couldn't find "{searchQuery}" in our menu
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}

        {hasResults && filteredCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-40 pt-4"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-orange-500">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* PREMIUM BOTTOM CART BAR */}
      {cartCount > 0 && !isCartOpen && (
        <div className="fixed bottom-4 left-4 right-4 z-50 md:bottom-6 md:right-6 md:left-auto md:w-80">
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-orange-500 text-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] flex items-center justify-between p-3 hover:bg-orange-600 active:scale-[0.98] transition-all border border-orange-400"
          >
            <div className="flex items-center space-x-3">
              {/* Cart Icon with Count Badge */}
              <div className="relative bg-white/20 p-2 rounded-xl">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              
              {/* Item Count & Total Price */}
              <div className="text-left">
                <p className="text-xs text-orange-100 font-medium">{cartCount} {cartCount === 1 ? 'Item' : 'Items'}</p>
                <p className="font-bold text-lg">Rs. {cartTotal}</p>
              </div>
            </div>
            
            {/* View Cart Button */}
            <div className="bg-white text-orange-600 font-bold px-4 py-2 rounded-xl text-sm shadow-sm">
              View Cart
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;