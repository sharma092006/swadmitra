import { Factory, Leaf, TestTube2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import processingVideo from '../../assets/video/15959078_960_540_30fps.mp4';

export default function PartnershipJourney() {
  const pillars = [
    {
      title: 'High-Volume Bulk Supply',
      description: 'Sourcing and manufacturing for global FMCG networks with unparalleled scale.',
      icon: Factory
    },
    {
      title: 'Turn-Key Private Label',
      description: 'End-to-end OEM packaging and design entirely under your brand.',
      icon: Leaf
    },
    {
      title: 'Bespoke Custom Blending',
      description: 'Collaborate with elite master tasters to engineer proprietary flavor profiles.',
      icon: TestTube2
    }
  ];

  return (
    <section className="py-8 lg:py-12 bg-[#fcfbf9] dark:bg-[#080808] transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 xl:px-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Side: Luxurious Visual Anchor with Video */}
          <div className="lg:col-span-7 relative order-last lg:order-first mt-6 lg:mt-0">
            
            {/* The Main Media Container - Premium Video */}
            <div className="relative w-full aspect-video lg:aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-gray-100 dark:bg-[#111] shadow-xl border border-black/10 dark:border-white/5 group">
              <div className="absolute inset-0 bg-black/10 dark:bg-black/30 z-10 mix-blend-overlay group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"></div>
              <video 
                src={processingVideo} 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-out"
              />
            </div>

            {/* Floating Glassmorphic Badge - Top Right */}
            <div className="absolute -top-4 -right-4 lg:-right-6 z-20 animate-[float_6s_ease-in-out_infinite]">
              <div className="bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-xl p-3 shadow-lg flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-[9px] font-bold text-black dark:text-white uppercase tracking-widest leading-tight">
                  ISO 9001:2015 <br/> Certified
                </span>
              </div>
            </div>

            {/* Floating Glassmorphic Badge - Bottom Left */}
            <div className="absolute -bottom-4 -left-4 lg:-left-6 z-20 animate-[float_7s_ease-in-out_infinite_reverse]">
              <div className="bg-black/95 dark:bg-[#111]/95 backdrop-blur-md border border-black/20 dark:border-white/10 rounded-xl p-3 shadow-lg flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#d4a373] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col pr-2">
                  <span className="text-[8px] font-bold text-[#d4a373] uppercase tracking-widest mb-0.5">
                    Live Status
                  </span>
                  <span className="text-xs font-bold text-white tracking-tight">
                    Active Capacity: 85%
                  </span>
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Side: Corporate Narrative */}
          <div className="lg:col-span-5 flex flex-col order-first lg:order-last">
            
            {/* Pre-Header Badge */}
            <div className="inline-flex items-center space-x-2 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-1 rounded-full mb-4 shadow-sm w-max">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a373] animate-pulse"></span>
              <span className="text-[9px] font-bold text-gray-800 dark:text-gray-300 tracking-[0.2em] uppercase">
                Global Partnerships
              </span>
            </div>

            {/* Compact Typographic Hero */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white leading-[1.1] tracking-tight mb-6">
              Three ways to partner. <br />
              <span className="font-light italic text-[#d4a373]">
                One standard
              </span>{' '}
              of excellence.
            </h2>

            {/* Tightly Packed Vertical List (Now as Proportional Cards) */}
            <div className="flex flex-col gap-3 mb-6 w-full">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-center w-full p-3 sm:p-4 rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-[#111]/50 hover:border-[#d4a373]/30 hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#d4a373]/10 dark:bg-white/5 flex items-center justify-center border border-[#d4a373]/20 dark:border-white/10 mr-4 group-hover:bg-[#d4a373] transition-all duration-300">
                    <pillar.icon className="w-4 h-4 text-[#d4a373] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-black dark:text-white mb-0.5 group-hover:text-[#d4a373] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400 font-light leading-relaxed pr-2">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Compact CTAs */}
            <div className="flex flex-wrap items-center gap-2">
              <button className="flex items-center space-x-2 bg-[#d4a373] text-white px-5 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-wider hover:bg-[#b0855b] transition-all duration-300 group">
                <span>View Capabilities</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center space-x-2 bg-transparent text-black dark:text-white border border-black/20 dark:border-white/20 px-5 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-wider hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300">
                <span>Book Consultation</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
