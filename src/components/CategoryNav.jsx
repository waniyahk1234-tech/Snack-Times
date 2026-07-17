import { menuCategories } from '../data/menuData';

const CategoryNav = () => {
  const scrollToCategory = (categoryId) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Horizontal scrollable container */}
        <div className="flex space-x-2 overflow-x-auto py-3 no-scrollbar scroll-smooth">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToCategory(category.id)}
              className="px-4 py-2 rounded-full whitespace-nowrap font-medium bg-gray-100 text-gray-700 hover:bg-orange-500 hover:text-white transition-all cursor-pointer active:scale-95 shrink-0"
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
