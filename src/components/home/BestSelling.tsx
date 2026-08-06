import { useState, useRef, useEffect } from 'react';
import { Star, ShoppingBag, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export default function BestSelling() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const products = [
    {
      id: 1,
      name: 'PREMIUM ASSAM CTC',
      description: 'Robust, full-bodied malty flavor profile. Engineered for high-extraction milk teas and strong breakfast blends.',
      origin: 'Assam, India',
      rating: 5.0,
      reviews: 124,
      price: '₹1,499',
      unit: '5kg',
      image: 'https://images.unsplash.com/photo-1702987908200-de80baec74e4?q=80&w=600&auto=format&fit=crop',
      badge: 'BESTSELLER'
    },
    {
      id: 2,
      name: 'ORGANIC MATCHA',
      description: 'Ceremonial grade vibrance with a smooth umami finish. Perfect for premium café lattes and retail packaging.',
      origin: 'Kyoto, Japan',
      rating: 5.0,
      reviews: 89,
      price: '₹4,299',
      unit: '1kg',
      image: 'https://images.unsplash.com/photo-1767721887917-ad186b3f5f2d?q=80&w=600&auto=format&fit=crop',
      badge: null
    },
    {
      id: 3,
      name: 'SIGNATURE MASALA',
      description: 'A proprietary master blend of high-grown CTC and pure aromatic Indian spices. A timeless classic.',
      origin: 'Master Blend',
      rating: 4.8,
      reviews: 210,
      price: '₹2,199',
      unit: '5kg',
      image: 'https://images.unsplash.com/photo-1572232189109-8462e31c1202?q=80&w=600&auto=format&fit=crop',
      badge: null
    },
    {
      id: 4,
      name: 'WHITE PEONY',
      description: 'Delicate, sweet, and floral notes with early spring buds. A highly sought-after rarity for luxury private labels.',
      origin: 'Fujian, China',
      rating: 5.0,
      reviews: 56,
      price: '₹6,499',
      unit: '2kg',
      image: 'https://images.unsplash.com/photo-1527398317618-b3da8a79e0ca?q=80&w=600&auto=format&fit=crop',
      badge: 'LIMITED'
    },
    {
      id: 5,
      name: 'DARJEELING 1ST FLUSH',
      description: 'The "Champagne of Teas" featuring a light, brisk liquor with distinct muscatel notes and floral aroma.',
      origin: 'Darjeeling, India',
      rating: 5.0,
      reviews: 178,
      price: '₹8,999',
      unit: '5kg',
      image: 'https://images.unsplash.com/photo-1651608154985-dcc87b27a63e?q=80&w=600&auto=format&fit=crop',
      badge: 'AWARDED'
    },
    {
      id: 6,
      name: 'CEYLON BREAKFAST',
      description: 'A crisp, bright, and citrusy high-grown black tea. Exceptionally balanced for traditional English blends.',
      origin: 'Nuwara Eliya, Sri Lanka',
      rating: 4.9,
      reviews: 342,
      price: '₹1,899',
      unit: '5kg',
      image: 'https://images.unsplash.com/photo-1644335471325-52e2d44fca64?q=80&w=600&auto=format&fit=crop',
      badge: null
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
          className="flex space-x-5 lg:space-x-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div 
              key={product.id}
              className="snap-start flex-none w-[280px] sm:w-[300px] h-full group cursor-pointer"
            >
              <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-[#d4a373]/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                
                {/* Image Section */}
                <div className="relative h-[220px] w-full bg-gray-50 dark:bg-black/50 overflow-hidden shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-95 group-hover:opacity-100"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-white/95 dark:bg-black/90 backdrop-blur-md border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-[9px] font-bold tracking-widest px-2.5 py-1.5 rounded uppercase shadow-sm">
                      {product.badge}
                    </div>
                  )}

                  {/* Floating Action Button */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full flex items-center justify-center shadow-lg opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#d4a373] dark:hover:bg-[#d4a373] hover:text-white dark:text-white hover:border-[#d4a373]">
                    <ShoppingBag className="w-4 h-4 text-gray-900 dark:text-white hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Content Section - Detailed & Balanced */}
                <div className="p-5 flex flex-col flex-grow">
                  
                  {/* Title & Rating */}
                  <div className="flex justify-between items-start mb-1 gap-2">
                    <h3 className="text-[15px] font-bold text-gray-900 dark:text-white uppercase tracking-wider group-hover:text-[#d4a373] transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1 shrink-0 bg-gray-50 dark:bg-white/5 px-1.5 py-0.5 rounded border border-gray-100 dark:border-white/5">
                      <Star className="w-3 h-3 text-[#d4a373] fill-[#d4a373]" />
                      <span className="text-[10px] font-medium text-gray-600 dark:text-gray-300">{product.rating}</span>
                    </div>
                  </div>

                  {/* Origin Tag */}
                  <div className="flex items-center space-x-1 mb-3">
                    <MapPin className="w-3 h-3 text-gray-400 dark:text-gray-500" />
                    <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                      {product.origin}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 mb-4 flex-grow">
                    {product.description}
                  </p>
                  
                  {/* Price Row */}
                  <div className="pt-4 mt-auto border-t border-gray-100 dark:border-white/10 flex items-end justify-between">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-1">Wholesale</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-black text-gray-900 dark:text-white tracking-tight">{product.price}</span>
                        <span className="text-[11px] text-gray-400 font-medium">/ {product.unit}</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
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
