import { MapPin, Navigation, Star, ExternalLink } from 'lucide-react';

export default function MapAndReviews() {
  return (
    <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 mt-12 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Compact Interactive Map */}
        <div className="lg:col-span-7 bg-white dark:bg-[#0a0a0a] rounded-[2rem] border border-black/10 dark:border-white/10 overflow-hidden relative min-h-[400px] group shadow-xl dark:shadow-none flex flex-col">
          
          {/* Real Interactive Map */}
          <div className="absolute inset-0 z-0">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114827184852!2d77.2065321852178!3d28.63274218683533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xc46188cb2ce25d98!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="w-full h-full border-0 grayscale dark:invert dark:contrast-125 dark:opacity-90"
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            
            {/* Extremely subtle dark overlay to ensure UI elements pop */}
            <div className="absolute inset-0 bg-black/5 dark:bg-black/20 pointer-events-none"></div>
          </div>

          {/* Top Left Floating Pill */}
          <div className="absolute top-5 left-5 z-10 bg-[#111]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 max-w-[200px] shadow-lg">
            <h4 className="text-white text-sm font-bold mb-1">Connaught Place</h4>
            <p className="text-gray-400 text-[10px] leading-tight mb-2">Block A, New Delhi, 110001</p>
            <p className="text-[#d4a373] text-[10px] font-semibold">Swadmitra HQ</p>
          </div>

          {/* Bottom Floating Card */}
          <div className="absolute bottom-5 left-5 right-5 md:left-1/2 md:-translate-x-1/2 md:w-[360px] z-10 bg-[#151515]/95 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-5 shadow-2xl flex flex-col items-center text-center transform transition-transform duration-500 group-hover:-translate-y-2">
            <div className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center mb-3 border border-green-500/20">
              <MapPin className="w-3.5 h-3.5 text-green-400" />
            </div>
            
            <h3 className="text-base font-bold text-white tracking-tight mb-1">Swadmitra Headquarters</h3>
            <p className="text-gray-400 text-[11px] mb-5">Block A, Connaught Place, Inner Circle, New Delhi</p>
            
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black hover:bg-gray-100 px-5 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all shadow-md flex items-center space-x-2">
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Right Column: Google Reviews Only (Removed Redundant Contact Info) */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="bg-white dark:bg-[#0a0a0a] rounded-[2rem] border border-black/10 dark:border-white/10 p-6 shadow-xl dark:shadow-none flex flex-col h-full">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Google Reviews</h3>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}
                </div>
                <span className="text-xs font-bold text-gray-900 dark:text-white">4.9 <span className="text-gray-500 font-normal">(3,412)</span></span>
              </div>
            </div>

            {/* Inner Review Box */}
            <div className="flex-grow bg-gray-50 dark:bg-[#111] rounded-xl border-l-4 border-l-green-500 border border-black/5 dark:border-white/5 p-5 pr-2 relative overflow-hidden h-[250px] max-h-[250px]">
              
              <style>{`
                .custom-review-scroll::-webkit-scrollbar {
                  width: 14px;
                }
                .custom-review-scroll::-webkit-scrollbar-track {
                  background: white;
                }
                .custom-review-scroll::-webkit-scrollbar-thumb {
                  background: #a1a1aa;
                  border-radius: 9999px;
                  border: 3px solid white;
                }
                .custom-review-scroll::-webkit-scrollbar-button:single-button:vertical:decrement {
                  height: 16px;
                  background: white url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="%2371717a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>') center no-repeat;
                }
                .custom-review-scroll::-webkit-scrollbar-button:single-button:vertical:increment {
                  height: 16px;
                  background: white url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="%2371717a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>') center no-repeat;
                }
              `}</style>

              {/* Scrollable Area */}
              <div className="overflow-y-auto h-full pr-3 pb-2 space-y-6 custom-review-scroll">
                
                {/* Review 1 */}
                <div className="flex flex-col">
                  <div className="flex mb-2.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-2.5 h-2.5 text-yellow-500 fill-yellow-500" />)}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed mb-4 font-medium">
                    "Partnering with Swadmitra for our luxury hotel chain was the best decision. The quality of their Assam CTC is unmatched, and their executive support team provides transparent guidance."
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#d4a373] to-[#8b5a2b] flex items-center justify-center text-white text-[10px] font-bold">
                        AS
                      </div>
                      <span className="text-[11px] font-bold text-gray-900 dark:text-white">Ashutosh Singh</span>
                    </div>
                    <span className="text-[10px] text-gray-500">7 months ago</span>
                  </div>
                </div>

                <div className="w-full h-px bg-black/5 dark:bg-white/5"></div>

                {/* Review 2 */}
                <div className="flex flex-col">
                  <div className="flex mb-2.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-2.5 h-2.5 text-yellow-500 fill-yellow-500" />)}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed mb-4 font-medium">
                    "Incredible attention to detail. The custom blending services are top-notch and they always deliver on time. Highly professional team."
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-600 flex items-center justify-center text-white text-[10px] font-bold">
                        MJ
                      </div>
                      <span className="text-[11px] font-bold text-gray-900 dark:text-white">Meera Joshi</span>
                    </div>
                    <span className="text-[10px] text-gray-500">1 year ago</span>
                  </div>
                </div>

              </div>
            </div>

            <button className="w-full mt-4 py-3 rounded-xl border border-black/10 dark:border-white/10 text-gray-800 dark:text-gray-300 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2 group">
              <ExternalLink className="w-3.5 h-3.5 group-hover:text-[#d4a373] transition-colors" />
              <span>View All Reviews</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
