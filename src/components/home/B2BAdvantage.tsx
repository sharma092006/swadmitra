import { useState } from 'react';
import { Shield, TrendingUp, Leaf, Globe, CheckCircle2 } from 'lucide-react';

import img1 from '../../assets/bulk_tea_supply_1786082123663.png';
import img2 from '../../assets/assam_ctc_tea_1786083099298.png';
import img3 from '../../assets/masala_chai_1786083121309.png';
import img4 from '../../assets/earl_grey_1786083131352.png';

export default function B2BAdvantage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const advantages = [
    {
      num: '01',
      title: 'Uncompromising Quality',
      description: 'Rigorous multi-stage cupping and ISO-certified lab testing to guarantee consistency and flavor profile across massive volumes.',
      icon: Shield,
      image: img1
    },
    {
      num: '02',
      title: 'Limitless Scale',
      description: 'State-of-the-art machinery and direct plantation access allow us to seamlessly meet the demands of global FMCG giants.',
      icon: TrendingUp,
      image: img2
    },
    {
      num: '03',
      title: 'Turn-Key OEM',
      description: 'From custom sourcing to premium packaging design, we provide a complete Private Label ecosystem. You sell, we manufacture.',
      icon: Leaf,
      image: img3
    },
    {
      num: '04',
      title: 'Global Export',
      description: 'Our dedicated export division navigates complex international customs and logistics, ensuring delivery to over 40 countries.',
      icon: Globe,
      image: img4
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-[#fcfbf9] dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 xl:px-16">
        
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-bold tracking-[0.25em] text-[#d4a373] uppercase mb-2 flex items-center">
              <span className="w-6 h-[1px] bg-[#d4a373] mr-3"></span>
              The SwadMitra Standard
            </h2>
            <h3 className="text-2xl md:text-4xl font-light text-black dark:text-white leading-[1.1] tracking-tight">
              Built for <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#8b3d3d] to-[#d4a373] dark:from-[#d4a373] dark:to-[#e3c19e]">Scale.</span>
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center space-x-2 bg-black/5 dark:bg-white/5 backdrop-blur-md px-3 py-2 rounded-full border border-black/5 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#d4a373]" />
              <span className="text-[9px] font-bold text-gray-900 dark:text-gray-200 uppercase tracking-widest">ISO 9001:2015</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/5 dark:bg-white/5 backdrop-blur-md px-3 py-2 rounded-full border border-black/5 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#d4a373]" />
              <span className="text-[9px] font-bold text-gray-900 dark:text-gray-200 uppercase tracking-widest">HACCP Certified</span>
            </div>
          </div>
        </div>

        {/* Premium Responsive Accordion Grid */}
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 w-full lg:h-[500px]">
          {advantages.map((adv, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onClick={() => setHoveredIndex(idx)}
                className={`group relative rounded-[1.5rem] overflow-hidden cursor-pointer transition-all duration-700 ease-out flex flex-col justify-end border border-black/5 dark:border-white/10 shadow-lg
                  ${isHovered 
                    ? 'h-[340px] lg:h-full lg:flex-[3_3_0%]' 
                    : 'h-[80px] lg:h-full lg:flex-[1_1_0%]'
                  }
                `}
              >
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                  <div className={`absolute inset-0 z-10 transition-all duration-700 
                    ${isHovered 
                      ? 'bg-gradient-to-t from-black/90 via-black/20 to-transparent dark:from-black/95 dark:via-black/40' 
                      : 'bg-black/60 dark:bg-black/80 group-hover:bg-black/50'}
                  `}></div>
                  <img 
                    src={adv.image} 
                    alt={adv.title}
                    className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-out ${isHovered ? 'scale-105' : 'scale-100 grayscale-[30%]'}`}
                  />
                </div>

                {/* Content Overlay */}
                <div className="relative z-20 h-full flex flex-col justify-between p-5 md:p-6">
                  
                  {/* Top Area: Number and Mobile Title */}
                  <div className="flex items-center justify-between lg:block">
                    <div className={`font-serif italic font-bold tracking-tighter transition-all duration-700 
                      ${isHovered ? 'text-4xl text-white/90 drop-shadow-lg' : 'text-3xl text-white/50 drop-shadow-sm'}
                    `}>
                      {adv.num}
                    </div>
                    <div className={`lg:hidden font-semibold text-white/80 transition-all duration-500 text-lg
                      ${isHovered ? 'opacity-0 hidden' : 'opacity-100 block'}
                    `}>
                      {adv.title}
                    </div>
                  </div>

                  {/* Bottom Text Area - Glassmorphic on hover */}
                  <div className={`transition-all duration-700 ease-in-out flex flex-col justify-end
                    ${isHovered ? 'bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-5 -mx-2 -mb-2' : ''}
                    ${!isHovered ? 'hidden lg:flex' : 'flex'}
                  `}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-700 shrink-0
                        ${isHovered ? 'bg-[#d4a373] text-white shadow-[0_0_20px_rgba(212,163,115,0.4)]' : 'bg-white/10 border border-white/20 text-white/70 group-hover:text-white'}
                      `}>
                        <adv.icon className="w-5 h-5" />
                      </div>
                      
                      <div className={`transition-all duration-700 overflow-hidden flex flex-col justify-center
                        ${isHovered ? 'w-auto opacity-100 translate-x-0' : 'w-0 opacity-0 -translate-x-8 lg:w-0 lg:opacity-0'}
                      `}>
                        <h4 className="font-bold text-white text-xl lg:text-2xl tracking-tight whitespace-nowrap drop-shadow-md">
                          {adv.title}
                        </h4>
                      </div>
                    </div>

                    {/* Expandable Description */}
                    <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isHovered ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                      <p className="text-gray-200 text-sm font-light leading-relaxed max-w-lg drop-shadow-sm">
                        {adv.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
