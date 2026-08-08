import ProductCard from '../components/shop/ProductCard';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

import assamCtcImg from '../assets/assam_ctc_tea_1786083099298.png';
import darjeelingImg from '../assets/darjeeling_first_flush_1786083109823.png';
import masalaChaiImg from '../assets/masala_chai_1786083121309.png';
import earlGreyImg from '../assets/earl_grey_1786083131352.png';

export default function Products() {
  const products = [
    { id: '1', name: 'Premium Assam CTC Black Tea', category: 'Assam CTC', price: 2499, image: assamCtcImg },
    { id: '2', name: 'Darjeeling First Flush Reserve', category: 'Darjeeling', price: 3499, image: darjeelingImg },
    { id: '3', name: 'Authentic Indian Masala Chai', category: 'Blends', price: 1999, image: masalaChaiImg },
    { id: '4', name: 'Earl Grey Royal Blend', category: 'Blends', price: 2899, image: earlGreyImg },
    { id: '5', name: 'Organic Green Tea Enigma', category: 'Orthodox', price: 3199, image: darjeelingImg },
    { id: '6', name: 'Spiced Cardamom Chai', category: 'Blends', price: 2199, image: masalaChaiImg },
    { id: '7', name: 'Golden Assam Second Flush', category: 'Assam CTC', price: 2799, image: assamCtcImg },
    { id: '8', name: 'Classic English Breakfast', category: 'Blends', price: 2599, image: earlGreyImg },
  ];

  const categories = [
    'All Collections',
    'Assam CTC',
    'Darjeeling',
    'Orthodox',
    'Blends',
    'Green Tea',
    'Herbal Infusions',
    'Spiced Chai',
    'Enterprise Bulk',
    'Gift Boxes'
  ];

  const [activeCategory, setActiveCategory] = useState('All Collections');

  const filteredProducts = activeCategory === 'All Collections'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#fcfbf9] dark:bg-[#050505] transition-colors duration-300 pt-24 md:pt-32 pb-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Minimalist Page Header */}
        <div className="text-center py-10 md:py-16 border-b border-black/5 dark:border-white/5 mb-10 md:mb-16">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#d4a373] mb-4 block">
            Premium Tea Catalog
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black dark:text-white mb-6 tracking-tight">
            Our Collections
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
            Hundreds of exclusive, expertly crafted, and rigorously tested premium tea blends. We curate our collections to inspire your tasting journey and elevate your brand's offerings.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-64 xl:w-72 shrink-0">
            {/* Sticky Container */}
            <div className="lg:sticky lg:top-[120px]">
              
              {/* Desktop Sidebar (hidden on mobile, shown on lg+) */}
              <div className="hidden lg:block bg-black dark:bg-[#111] rounded-2xl p-6 lg:p-8 shadow-2xl">
                <h3 className="text-white text-lg font-bold mb-6 pb-4 border-b border-white/10">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                          activeCategory === cat 
                            ? 'bg-[#d4a373]/20 text-[#d4a373] font-bold' 
                            : 'text-gray-400 hover:text-white hover:bg-white/5 font-medium'
                        }`}
                      >
                        <span className="text-sm tracking-wide">{cat}</span>
                        {activeCategory === cat && <ChevronRight className="w-4 h-4" />}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Horizontal Pill Navigation (hidden on lg+) */}
              <div className="lg:hidden flex overflow-x-auto no-scrollbar pb-4 gap-3 snap-x">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`snap-start shrink-0 px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                      activeCategory === cat
                        ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white shadow-lg'
                        : 'bg-white dark:bg-[#111] text-gray-800 dark:text-gray-300 border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            
            {/* Grid Header Info */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/5 dark:border-white/5">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-black dark:text-white">
                {activeCategory}
              </h2>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                {filteredProducts.length} Results
              </span>
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="py-20 text-center border border-dashed border-black/10 dark:border-white/10 rounded-3xl bg-black/5 dark:bg-white/5">
                <p className="text-gray-500 dark:text-gray-400 font-medium">No products found in this category.</p>
                <button 
                  onClick={() => setActiveCategory('All Collections')}
                  className="mt-6 text-xs font-bold uppercase tracking-widest text-[#d4a373] hover:text-black dark:hover:text-white transition-colors"
                >
                  View All Collections
                </button>
              </div>
            )}

            {/* Masonry-Style Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
