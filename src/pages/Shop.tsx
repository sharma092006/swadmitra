import ProductCard from '../components/shop/ProductCard';
import { Filter } from 'lucide-react';
import { useState } from 'react';

import assamCtcImg from '../assets/assam_ctc_tea_1786083099298.png';
import darjeelingImg from '../assets/darjeeling_first_flush_1786083109823.png';
import masalaChaiImg from '../assets/masala_chai_1786083121309.png';
import earlGreyImg from '../assets/earl_grey_1786083131352.png';
import heroBgImg from '../assets/premium_tea_hero_1786082060617.png';

export default function Shop() {
  const products = [
    { id: '1', name: 'Premium Assam CTC Black Tea', category: 'Assam CTC', price: 2499, image: assamCtcImg },
    { id: '2', name: 'Darjeeling First Flush Reserve', category: 'Darjeeling', price: 3499, image: darjeelingImg },
    { id: '3', name: 'Authentic Indian Masala Chai', category: 'Blends', price: 1999, image: masalaChaiImg },
    { id: '4', name: 'Earl Grey Royal Blend', category: 'Blends', price: 2899, image: earlGreyImg }
  ];

  const categories = ['All Collections', 'Assam CTC', 'Darjeeling', 'Orthodox', 'Blends'];

  const [activeCategory, setActiveCategory] = useState('All Collections');

  const filteredProducts = activeCategory === 'All Collections'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#fcfbf9] dark:bg-[#050505] transition-colors duration-300 pt-40 md:pt-48">
      
      {/* Magazine Split Hero */}
      <div className="flex flex-col lg:flex-row min-h-[70vh] border-b border-black/10 dark:border-white/10">
        {/* Left: Typography */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-white dark:bg-[#0a0a0a] border-r border-black/10 dark:border-white/10">
          <span className="text-[#d4a373] text-xs uppercase font-bold tracking-[0.3em] mb-6">Shop the Archive</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-gray-900 dark:text-white leading-[0.9] mb-8">
            Purity <br/>
            In Every <br/>
            <span className="italic font-light text-gray-400 dark:text-gray-500">Pour.</span>
          </h1>
          <p className="text-gray-800 dark:text-gray-400 max-w-md text-lg font-light leading-relaxed">
            A curated selection of the finest Indian teas, rigorously sourced for uncompromising quality and luxury.
          </p>
        </div>

        {/* Right: Full Bleed Image */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-10 mix-blend-multiply"></div>
          <img 
            src={heroBgImg} 
            alt="Premium Tea Background" 
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
        </div>
      </div>

      {/* Sticky Top Bar Filter */}
      <div className="sticky top-[76px] lg:top-[84px] z-40 bg-white/95 dark:bg-[#050505]/95 backdrop-blur-md border-b border-black/10 dark:border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
          
          <div className="flex items-center space-x-8 overflow-x-auto w-full sm:w-auto no-scrollbar pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase font-bold tracking-[0.2em] whitespace-nowrap transition-colors duration-300 ${activeCategory === cat ? 'text-[#d4a373]' : 'text-gray-800 hover:text-black dark:text-gray-400 dark:hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4 flex-shrink-0 w-full sm:w-auto justify-end border-t sm:border-t-0 border-black/10 dark:border-white/10 pt-4 sm:pt-0">
            <Filter className="w-4 h-4 text-gray-800 dark:text-gray-500" />
            <select className="bg-transparent border-none text-xs font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white focus:ring-0 cursor-pointer">
              <option className="bg-white text-black dark:bg-[#050505] dark:text-white">Featured</option>
              <option className="bg-white text-black dark:bg-[#050505] dark:text-white">Price: Low to High</option>
              <option className="bg-white text-black dark:bg-[#050505] dark:text-white">Price: High to Low</option>
            </select>
          </div>

        </div>
      </div>

      {/* Dense Product Grid */}
      <div className="bg-[#fcfbf9] dark:bg-[#050505] p-4 sm:p-6 md:p-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}
