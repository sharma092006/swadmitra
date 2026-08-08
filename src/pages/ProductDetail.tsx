import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import darjeelingImg from '../assets/darjeeling_first_flush_1786083109823.png';

export default function ProductDetail() {
  return (
    <main className="min-h-screen bg-[#fcfbf9] dark:bg-[#050505] transition-colors duration-300 pt-40 md:pt-48 pb-32">
      <div className="px-4 sm:px-6 md:px-8 xl:px-16 mb-8">
        <Link to="/shop" className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-800 hover:text-black dark:text-gray-500 dark:hover:text-white transition-colors duration-300">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Collection</span>
        </Link>
      </div>

      <div className="px-4 sm:px-6 md:px-8 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24">
          
          {/* Image */}
          <div className="bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-[#333] aspect-square relative p-12">
            <img 
              src={darjeelingImg} 
              alt="Darjeeling First Flush" 
              className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <span className="text-[#d4a373] text-xs uppercase font-bold tracking-[0.2em] mb-4">Darjeeling</span>
            <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white uppercase tracking-tighter leading-none mb-6">
              Darjeeling First Flush Reserve
            </h1>
            <p className="text-3xl font-light text-black dark:text-white mb-8">₹3,499</p>

            <div className="w-full h-px bg-black/10 dark:bg-[#333] mb-8"></div>

            <p className="text-gray-800 dark:text-gray-400 text-lg font-light leading-relaxed mb-12">
              Harvested during the early spring, this exquisite first flush Darjeeling offers a delicate, floral aroma with crisp, bright notes. A true champagne of teas, crafted for the most discerning palates.
            </p>

            <button className="w-full md:w-auto bg-black dark:bg-white text-white dark:text-black px-12 py-6 font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center space-x-3 hover:bg-[#d4a373] dark:hover:bg-[#d4a373] hover:text-white transition-colors duration-300 shadow-2xl">
              <ShoppingBag className="w-5 h-5" />
              <span>Add to Cart - ₹3,499</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
