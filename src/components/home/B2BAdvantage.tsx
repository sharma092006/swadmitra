import { useState } from 'react';
import { Shield, TrendingUp, Leaf, Globe, CheckCircle2 } from 'lucide-react';

export default function B2BAdvantage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const advantages = [
    {
      num: '01',
      title: 'Uncompromising Quality',
      description: 'Rigorous multi-stage cupping and ISO-certified lab testing to guarantee consistency and flavor profile across massive volumes.',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1668587877964-16488273b0ab?q=80&w=800&auto=format&fit=crop'
    },
    {
      num: '02',
      title: 'Limitless Scale',
      description: 'State-of-the-art machinery and direct plantation access allow us to seamlessly meet the demands of global FMCG giants.',
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1708010433898-2685301f61ed?q=80&w=800&auto=format&fit=crop'
    },
    {
      num: '03',
      title: 'Turn-Key OEM',
      description: 'From custom sourcing to premium packaging design, we provide a complete Private Label ecosystem. You sell, we manufacture.',
      icon: Leaf,
      image: 'https://images.unsplash.com/photo-1702987908200-de80baec74e4?q=80&w=800&auto=format&fit=crop'
    },
    {
      num: '04',
      title: 'Global Export',
      description: 'Our dedicated export division navigates complex international customs and logistics, ensuring delivery to over 40 countries.',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1644335471325-52e2d44fca64?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 xl:px-16">
        
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-bold tracking-[0.25em] text-[#d4a373] uppercase mb-3 flex items-center">
              <span className="w-8 h-px bg-[#d4a373] mr-4"></span>
              The SwadMitra Standard
            </h2>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 dark:text-white leading-[1.1] tracking-tight">
              Built for <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#8b3d3d] to-[#d4a373] dark:from-[#d4a373] dark:to-[#e3c19e]">Scale.</span>
            </h3>
          </div>
          
          <div className="flex gap-4">
            <div className="flex items-center space-x-2 bg-gray-50 dark:bg-[#111] px-4 py-2 rounded-full border border-gray-100 dark:border-white/5">
              <CheckCircle2 className="w-4 h-4 text-[#d4a373]" />
              <span className="text-[10px] font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-widest">ISO 9001:2015</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 dark:bg-[#111] px-4 py-2 rounded-full border border-gray-100 dark:border-white/5">
              <CheckCircle2 className="w-4 h-4 text-[#d4a373]" />
              <span className="text-[10px] font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-widest">HACCP Certified</span>
            </div>
          </div>
        </div>

        {/* Compact Horizontal Accordion Grid */}
        <div className="flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[450px]">
          {advantages.map((adv, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(idx)} // keep it expanded if mouse leaves
                className={`group relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-700 ease-in-out flex flex-col justify-end border border-gray-200 dark:border-white/5 shadow-sm
                  ${isHovered ? 'lg:flex-[3_3_0%] flex-[3_3_0%]' : 'lg:flex-[1_1_0%] flex-[1_1_0%]'}
                `}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <div className={`absolute inset-0 z-10 transition-colors duration-700 ${isHovered ? 'bg-black/40 dark:bg-black/40' : 'bg-black/70 dark:bg-black/80'}`}></div>
                  <img 
                    src={adv.image} 
                    alt={adv.title}
                    className={`w-full h-full object-cover transition-transform duration-1000 ${isHovered ? 'scale-105' : 'scale-100'}`}
                  />
                </div>

                {/* Content Overlay */}
                <div className="relative z-20 p-6 md:p-8 h-full flex flex-col justify-end">
                  
                  {/* Top Number */}
                  <div className={`absolute top-6 left-6 font-bold text-white/50 tracking-tighter transition-all duration-500 ${isHovered ? 'text-4xl' : 'text-2xl'}`}>
                    {adv.num}
                  </div>

                  <div className="flex items-center gap-4 mb-2">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md transition-all duration-500 ${isHovered ? 'bg-[#d4a373] border-transparent' : 'bg-white/10 border border-white/20'}`}>
                      <adv.icon className={`w-5 h-5 ${isHovered ? 'text-white' : 'text-white/80'}`} />
                    </div>
                    <h4 className={`font-bold text-white whitespace-nowrap transition-all duration-500 ${isHovered ? 'text-2xl lg:text-3xl' : 'text-lg lg:opacity-0 lg:hidden'}`}>
                      {adv.title}
                    </h4>
                  </div>

                  {/* Expandable Description */}
                  <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isHovered ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-200 text-sm md:text-base font-light leading-relaxed max-w-md">
                      {adv.description}
                    </p>
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
