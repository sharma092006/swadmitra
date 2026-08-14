import { Sprout, Activity, PackageCheck, Zap } from 'lucide-react';
import packagingImg from '../../assets/bulk_tea_supply_1786082123663.png';
import originImg from '../../assets/premium_tea_hero_1786082060617.png';
import leafImg from '../../assets/darjeeling_first_flush_1786083109823.png';

import step1Img from '../../assets/darjeeling_first_flush_1786083109823.png';
import step2Img from '../../assets/assam_ctc_tea_1786083099298.png';
import step3Img from '../../assets/earl_grey_1786083131352.png';
import step4Img from '../../assets/masala_chai_1786083121309.png';

export default function QualityBentoGrid() {
  return (
    <section className="w-full py-4 px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto mb-16">
      
      {/* CSS Grid - More compact auto-rows and gaps */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[240px]">
        
        {/* Box 1: The Origin (Tall) */}
        <div className="md:col-span-2 lg:col-span-2 row-span-2 rounded-3xl bg-[#1a1a1a] relative overflow-hidden group border border-black/10 dark:border-white/5 shadow-lg hover:border-black/20 dark:hover:border-white/10 transition-all duration-300">
          <img 
            src={originImg} 
            alt="Assam Origin" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out group-hover:opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20 text-white shadow-sm">
              <Sprout className="w-5 h-5" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 tracking-tight">The Assam Origin</h2>
            <p className="text-gray-300 text-xs md:text-sm max-w-sm leading-relaxed">
              We source our tea leaves exclusively from trusted, sustainable estates where the climate, soil, and elevation create the perfect terroir.
            </p>
          </div>
        </div>

        {/* Box 2: Hand Plucked Precision */}
        <div className="rounded-3xl bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5 shadow-lg p-6 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300">
          <div className="w-10 h-10 rounded-full bg-[#f4ebd0] dark:bg-white/5 flex items-center justify-center text-[#7b2c2c] dark:text-[#d4a373]">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5">Two Leaves & a Bud</h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
              Meticulous hand-plucking ensures only the youngest, most tender shoots are selected.
            </p>
          </div>
        </div>

        {/* Box 3: Image Square */}
        <div className="rounded-3xl bg-[#111] border border-black/5 dark:border-white/5 overflow-hidden relative group shadow-lg">
          <img 
            src={leafImg} 
            alt="Raw Leaves" 
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
        </div>

        {/* Box 4: The Processing Journey (Wide Span) */}
        <div className="md:col-span-3 lg:col-span-2 rounded-3xl bg-white dark:bg-[#111] border border-black/5 dark:border-white/5 shadow-lg p-6 flex flex-col justify-between overflow-hidden relative group">
          <div className="absolute top-0 right-0 p-6 opacity-5 text-8xl font-serif text-[#7b2c2c] dark:text-[#d4a373] transform translate-x-4 -translate-y-6 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
            P
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-1.5">
              <Activity className="w-3.5 h-3.5 text-[#7b2c2c] dark:text-[#d4a373]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#7b2c2c] dark:text-[#d4a373]">Processing</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4">Masterful Crafting</h3>
          </div>
          
          <div className="grid grid-cols-4 gap-2 h-20 md:h-24">
            {[
              { name: 'Withering', img: step1Img },
              { name: 'Rolling', img: step2Img },
              { name: 'Oxidation', img: step3Img },
              { name: 'Sorting', img: step4Img }
            ].map((step, i) => (
              <div key={i} className="relative rounded-lg overflow-hidden group/mini cursor-pointer bg-black shadow-sm">
                <img src={step.img} className="absolute inset-0 w-full h-full object-cover group-hover/mini:scale-110 transition-transform duration-500 opacity-70 group-hover/mini:opacity-100" />
                <div className="absolute inset-0 bg-black/60 group-hover/mini:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center p-1.5 text-center">
                  <span className="text-white text-[9px] font-bold tracking-wider uppercase leading-tight">{step.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Box 5: Packaging */}
        <div className="md:col-span-2 lg:col-span-2 rounded-3xl bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-black/5 dark:border-white/5 shadow-lg p-6 flex flex-col md:flex-row gap-5 relative overflow-hidden group">
          <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-[#d4a373]/10 rounded-full blur-[60px] group-hover:bg-[#d4a373]/20 transition-colors duration-500 pointer-events-none"></div>
          
          <div className="flex-1 flex flex-col justify-center z-10">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#d4a373] mb-3">
              <PackageCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1.5">Zero-Touch Packaging</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Automated sealing with multi-layer barrier materials and advanced nitrogen flushing to maximize freshness.
            </p>
          </div>
          <div className="w-full md:w-40 h-32 md:h-auto rounded-xl overflow-hidden relative shadow-md z-10">
            <img 
              src={packagingImg} 
              alt="Packaging" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
