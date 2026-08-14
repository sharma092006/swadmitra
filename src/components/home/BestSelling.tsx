import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../shop/ProductCard';

import img1 from '../../assets/assam_ctc_tea_1786083099298.png';
import img2 from '../../assets/darjeeling_first_flush_1786083109823.png';
import img3 from '../../assets/masala_chai_1786083121309.png';
import img4 from '../../assets/earl_grey_1786083131352.png';
import img5 from '../../assets/bulk_tea_supply_1786082123663.png';

export default function BestSelling() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const mockImages = [
    img1,
    img2,
    img3,
    img4,
    img5
  ];

  const products = [
    {
      id: 1,
      name: 'PREMIUM ASSAM CTC',
      description: 'Robust, full-bodied malty flavor profile. Engineered for high-extraction milk teas and strong breakfast blends.',
      origin: 'Assam, India',
      price: 1499,
      unit: '5kg',
      images: [mockImages[0], mockImages[1], mockImages[2]],
      badge: 'BESTSELLER'
    },
    {
      id: 2,
      name: 'ORGANIC MATCHA',
      description: 'Ceremonial grade vibrance with a smooth umami finish. Perfect for premium café lattes and retail packaging.',
      origin: 'Kyoto, Japan',
      price: 4299,
      unit: '1kg',
      images: [mockImages[1], mockImages[2], mockImages[3]],
    },
    {
      id: 3,
      name: 'SIGNATURE MASALA',
      description: 'A proprietary master blend of high-grown CTC and pure aromatic Indian spices. A timeless classic.',
      origin: 'Master Blend',
      price: 2199,
      unit: '5kg',
      images: [mockImages[2], mockImages[3], mockImages[4]],
    },
    {
      id: 4,
      name: 'WHITE PEONY',
      description: 'Delicate, sweet, and floral notes with early spring buds. A highly sought-after rarity for luxury private labels.',
      origin: 'Fujian, China',
      price: 6499,
      unit: '2kg',
      images: [mockImages[3], mockImages[4], mockImages[0]],
      badge: 'LIMITED'
    },
    {
      id: 5,
      name: 'DARJEELING 1ST FLUSH',
      description: 'The "Champagne of Teas" featuring a light, brisk liquor with distinct muscatel notes and floral aroma.',
      origin: 'Darjeeling, India',
      price: 8999,
      unit: '5kg',
      images: [mockImages[4], mockImages[0], mockImages[1]],
      badge: 'AWARDED'
    },
    {
      id: 6,
      name: 'CEYLON BREAKFAST',
      description: 'A crisp, bright, and citrusy high-grown black tea. Exceptionally balanced for traditional English blends.',
      origin: 'Nuwara Eliya, Sri Lanka',
      price: 1899,
      unit: '5kg',
      images: [mockImages[0], mockImages[2], mockImages[4]],
    }
  ];

  // Auto-scroll logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3500); 

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden border-t border-gray-100 dark:border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 xl:px-16">
        
        {/* Premium Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col">
            <h2 className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#d4a373] uppercase mb-4 flex items-center">
              <span className="w-8 h-[1px] bg-[#d4a373] mr-4"></span>
              Corporate Collection
            </h2>
            <div className="flex flex-wrap items-center md:items-baseline gap-x-4 gap-y-2">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                <span className="font-semibold">Best</span> Selling <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8b3d3d] to-[#d4a373] dark:from-[#d4a373] dark:to-[#e3c19e]">Products.</span>
              </h3>
              <div className="hidden md:flex items-center space-x-2 bg-gray-50 dark:bg-white/5 px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4a373]"></span>
                <span className="text-[10px] font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-widest">In Stock</span>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button 
              onClick={scrollLeft}
              className="w-8 h-8 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-8 h-8 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Premium Auto Carousel */}
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex items-stretch space-x-5 lg:space-x-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div 
              key={product.id}
              className="snap-start flex-none w-[280px] sm:w-[300px] h-auto cursor-pointer"
            >
              <ProductCard 
                id={product.id.toString()}
                name={product.name}
                category="Corporate Bulk"
                price={product.price}
                images={product.images}
                description={product.description}
              />
            </div>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
