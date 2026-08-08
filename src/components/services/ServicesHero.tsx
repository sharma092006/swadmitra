import { ArrowRight } from 'lucide-react';
import heroBgImg from '../../assets/premium_tea_hero_1786082060617.png';

export default function ServicesHero() {
  return (
    <section className="relative min-h-[80vh] flex items-end pb-20 bg-[#fcfbf9] dark:bg-[#050505] overflow-hidden pt-24 border-b border-black/10 dark:border-white/10 transition-colors duration-300">
      {/* Background with Grid Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/70 dark:bg-[#050505]/70 z-10 transition-colors duration-300"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#fcfbf9] dark:from-[#050505] via-transparent to-transparent z-10 transition-colors duration-300"></div>
        {/* Boxy grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] z-10"></div>
        
        <img 
          src={heroBgImg} 
          alt="Premium Indian Tea Leaves and Infusions" 
          className="w-full h-full object-cover opacity-60 scale-105"
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          <div className="lg:col-span-8">
            <div className="inline-flex items-center space-x-3 mb-6 bg-white dark:bg-[#111] border border-black/10 dark:border-[#d4a373]/30 px-4 py-2 transition-colors duration-300">
              <div className="w-2 h-2 bg-[#d4a373]"></div>
              <span className="text-xs font-bold text-[#d4a373] uppercase tracking-[0.25em]">
                Enterprise FMCG Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white tracking-tight mb-6 leading-[1.05] uppercase transition-colors duration-300">
              Authentic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] to-[#e3c19e]">Origins.</span><br/>
              Global Scale.
            </h1>
          </div>

          <div className="lg:col-span-4 bg-white/80 dark:bg-[#111]/80 backdrop-blur-md border border-black/10 dark:border-white/10 p-8 flex flex-col justify-between transition-colors duration-300">
            <p className="text-gray-800 dark:text-gray-300 text-sm md:text-base font-light leading-relaxed mb-8 transition-colors duration-300">
              End-to-end B2B manufacturing, custom master blending, and private-label (OEM) partnerships for premium tea. Designed for scale and uncompromising quality.
            </p>
            
            <a href="#services" className="w-full bg-[#d4a373] text-white dark:text-[#050505] hover:bg-gray-900 dark:hover:bg-white px-6 py-4 flex items-center justify-between font-bold text-sm tracking-widest uppercase transition-colors duration-300 group">
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
