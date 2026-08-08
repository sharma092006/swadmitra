import { useState } from 'react';
import { Factory, PackageCheck, Globe, Leaf, ArrowRight, ChevronRight } from 'lucide-react';

export default function B2BSolutions() {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      title: 'Bulk Sourcing & Manufacturing',
      description: 'End-to-end processing of premium tea grades to supply global distributors and FMCG brands at immense scale with uncompromising quality.',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1651608154985-dcc87b27a63e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Private Label & OEM',
      description: 'Complete turn-key solutions. We blend, design, pack, and ship premium teas entirely under your own corporate brand identity.',
      icon: PackageCheck,
      image: 'https://images.unsplash.com/photo-1702987908200-de80baec74e4?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Master Custom Blending',
      description: 'Collaborate with our elite master tasters to develop proprietary, signature flavor profiles exclusive to your target market.',
      icon: Leaf,
      image: 'https://images.unsplash.com/photo-1765809411613-9870f2f2d459?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Global Export Logistics',
      description: 'Reliable, fully compliant international shipping and supply chain management ensuring your bulk orders arrive factory-fresh.',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1644335471325-52e2d44fca64?q=80&w=1200&auto=format&fit=crop',
    }
  ];

  return (
    <section id="b2b-solutions" className="py-12 lg:py-16 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Minimalist & High-End */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 lg:mb-12">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-bold tracking-[0.25em] text-[#d4a373] uppercase mb-3 flex items-center">
              <span className="w-6 h-[1px] bg-[#d4a373] mr-3"></span>
              Enterprise Manufacturing
            </h2>
            <h3 className="text-2xl md:text-4xl font-light text-gray-900 dark:text-white leading-[1.2] tracking-tight">
              Scale your brand with <br/>
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#8b3d3d] to-[#d4a373] dark:from-[#d4a373] dark:to-[#e3c19e]">
                World-Class Expertise.
              </span>
            </h3>
          </div>
          <button className="hidden md:flex group items-center text-sm font-semibold text-gray-900 dark:text-white hover:text-[#d4a373] dark:hover:text-[#d4a373] transition-colors">
            Request Corporate Catalog
            <div className="ml-3 w-10 h-10 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center group-hover:border-[#d4a373] group-hover:bg-[#d4a373] group-hover:text-white transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Interactive Split Layout - Ultra Compact & Clean */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left: Dynamic Image Display */}
          <div className="lg:col-span-7 h-[300px] sm:h-[400px] lg:h-[450px] relative rounded-[1.5rem] overflow-hidden bg-gray-100 dark:bg-[#111]">
            {solutions.map((solution, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  activeSolution === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
                }`}
              >
                <div className="absolute inset-0 bg-black/10 dark:bg-black/30 z-10 mix-blend-multiply"></div>
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            
            {/* Quick Stats Overlay on Image */}
            <div className="absolute bottom-4 left-4 right-4 z-20 grid grid-cols-3 gap-2 bg-white/90 dark:bg-[#111]/90 backdrop-blur-md p-3 rounded-xl border border-white/20 dark:border-white/5 shadow-xl">
              <div className="text-center border-r border-gray-200 dark:border-white/10">
                <div className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">50k+</div>
                <div className="text-[8px] sm:text-[9px] font-semibold text-gray-500 uppercase tracking-widest mt-0.5">Tons / Year</div>
              </div>
              <div className="text-center border-r border-gray-200 dark:border-white/10">
                <div className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">ISO</div>
                <div className="text-[8px] sm:text-[9px] font-semibold text-gray-500 uppercase tracking-widest mt-0.5">Certified</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">500+</div>
                <div className="text-[8px] sm:text-[9px] font-semibold text-gray-500 uppercase tracking-widest mt-0.5">Partners</div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Tabs */}
          <div className="lg:col-span-5 flex flex-col space-y-2 lg:space-y-3">
            {solutions.map((solution, idx) => {
              const isActive = activeSolution === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveSolution(idx)}
                  className={`group cursor-pointer p-3 lg:p-4 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-gray-50 dark:bg-white/5' 
                      : 'bg-transparent hover:bg-gray-50/50 dark:hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1 lg:mb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        isActive ? 'bg-[#d4a373]/10 text-[#d4a373]' : 'bg-transparent text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white'
                      }`}>
                        <solution.icon className="w-4 h-4" />
                      </div>
                      <h4 className={`text-sm md:text-base font-medium transition-colors duration-300 ${
                        isActive ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                      }`}>
                        {solution.title}
                      </h4>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                      isActive ? 'text-[#d4a373] opacity-100 translate-x-0' : 'text-gray-300 dark:text-gray-600 opacity-0 -translate-x-2 group-hover:opacity-100'
                    }`} />
                  </div>
                  
                  <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                    isActive ? 'grid-rows-[1fr] opacity-100 mt-1 lg:mt-2' : 'grid-rows-[0fr] opacity-0'
                  }`}>
                    <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed pl-11 overflow-hidden">
                      {solution.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
