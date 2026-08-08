import { Check } from 'lucide-react';


export default function Checkout() {
  return (
    <main className="min-h-screen bg-[#fcfbf9] dark:bg-[#050505] transition-colors duration-300 pt-40 md:pt-48 pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        <h1 className="text-4xl font-bold text-black dark:text-white uppercase tracking-tighter mb-12">
          Secure Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          
          {/* Form */}
          <div className="lg:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black dark:text-white mb-6 border-b border-black/10 dark:border-[#333] pb-4">
                1. Contact Information
              </h2>
              <input type="email" placeholder="Email Address" className="w-full bg-transparent border border-black/20 dark:border-[#444] px-6 py-4 text-sm focus:border-black dark:focus:border-white focus:outline-none transition-colors text-black dark:text-white" />
            </section>

            <section>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black dark:text-white mb-6 border-b border-black/10 dark:border-[#333] pb-4">
                2. Shipping Address
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="w-full bg-transparent border border-black/20 dark:border-[#444] px-6 py-4 text-sm focus:border-black dark:focus:border-white focus:outline-none transition-colors text-black dark:text-white" />
                <input type="text" placeholder="Last Name" className="w-full bg-transparent border border-black/20 dark:border-[#444] px-6 py-4 text-sm focus:border-black dark:focus:border-white focus:outline-none transition-colors text-black dark:text-white" />
                <input type="text" placeholder="Address" className="col-span-2 w-full bg-transparent border border-black/20 dark:border-[#444] px-6 py-4 text-sm focus:border-black dark:focus:border-white focus:outline-none transition-colors text-black dark:text-white" />
                <input type="text" placeholder="City" className="w-full bg-transparent border border-black/20 dark:border-[#444] px-6 py-4 text-sm focus:border-black dark:focus:border-white focus:outline-none transition-colors text-black dark:text-white" />
                <input type="text" placeholder="Postal Code" className="w-full bg-transparent border border-black/20 dark:border-[#444] px-6 py-4 text-sm focus:border-black dark:focus:border-white focus:outline-none transition-colors text-black dark:text-white" />
              </div>
            </section>
            
            <button className="w-full bg-black dark:bg-white text-white dark:text-black py-6 font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#d4a373] dark:hover:bg-[#d4a373] hover:text-white transition-colors duration-300 shadow-xl flex items-center justify-center space-x-2">
              <span>Complete Order</span>
              <Check className="w-4 h-4" />
            </button>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-[#0a0a0a] p-8 border border-black/10 dark:border-[#333] sticky top-32">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black dark:text-white mb-6 border-b border-black/10 dark:border-[#333] pb-4">
                Order Summary
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm text-gray-800 dark:text-gray-400">
                  <span>1x Premium Assam CTC</span>
                  <span className="text-black dark:text-white font-bold">₹2,499</span>
                </div>
              </div>
              <div className="space-y-4 mb-8 border-t border-black/10 dark:border-[#333] pt-6">
                <div className="flex justify-between text-sm text-gray-800 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-black dark:text-white font-bold">₹2,499</span>
                </div>
                <div className="flex justify-between text-sm text-gray-800 dark:text-gray-400">
                  <span>Shipping</span>
                  <span className="text-black dark:text-white font-bold">Free</span>
                </div>
              </div>
              <div className="flex justify-between text-xl font-bold uppercase tracking-tight text-black dark:text-white border-t border-black/10 dark:border-[#333] pt-6">
                <span>Total</span>
                <span>₹2,499</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
