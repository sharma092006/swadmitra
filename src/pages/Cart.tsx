import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import assamCtcImg from '../assets/assam_ctc_tea_1786083099298.png';

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const basePrice = 2499;
  const total = basePrice * quantity;

  return (
    <main className="min-h-screen bg-[#fcfbf9] dark:bg-[#050505] transition-colors duration-300 pt-40 md:pt-48 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        
        <h1 className="text-4xl font-bold text-black dark:text-white uppercase tracking-tighter mb-12 border-b border-black/10 dark:border-[#333] pb-6">
          Your Cart ({quantity})
        </h1>

        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12 border border-black/10 dark:border-[#333] p-6 md:p-8 bg-white dark:bg-[#0a0a0a]">
          
          <div className="w-full md:w-48 aspect-square bg-[#0a0a0a] flex-shrink-0 border border-black/10 dark:border-[#333]">
            <img src={assamCtcImg} alt="Assam CTC" className="w-full h-full object-cover" />
          </div>

          <div className="flex-1 flex flex-col justify-center w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-6 sm:mb-2">
              <div>
                <span className="text-[#d4a373] text-[10px] uppercase font-bold tracking-[0.2em] mb-3 block">Assam CTC</span>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-black dark:text-white uppercase tracking-tight mb-2">Premium Assam CTC Black Tea</h3>
              </div>
              <span className="text-2xl font-light text-black dark:text-white mt-2 sm:mt-0">₹{basePrice.toLocaleString('en-IN')}</span>
            </div>

            <div className="mt-auto flex justify-between items-end">
              <div className="flex items-center border border-black/10 dark:border-[#555]">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-gray-800 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 text-sm font-bold text-black dark:text-white border-x border-black/10 dark:border-[#555]">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-gray-800 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  +
                </button>
              </div>
              <button className="text-xs uppercase tracking-[0.1em] font-bold text-gray-800 hover:text-red-600 dark:text-gray-500 dark:hover:text-red-500 transition-colors">
                Remove
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-end">
          <div className="w-full md:w-96 bg-white dark:bg-[#111] p-8 border border-black/10 dark:border-[#333]">
            <div className="flex justify-between mb-4 text-sm font-bold text-black dark:text-gray-300">
              <span>Subtotal</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between mb-8 text-sm font-bold text-black dark:text-gray-300 pb-6 border-b border-black/10 dark:border-[#333]">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="flex justify-between mb-8 text-xl font-bold text-black dark:text-white uppercase tracking-tight">
              <span>Total</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>
            
            <Link to="/checkout" className="w-full bg-black dark:bg-white text-white dark:text-black py-5 font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center space-x-3 hover:bg-[#d4a373] dark:hover:bg-[#d4a373] hover:text-white transition-colors duration-300">
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
