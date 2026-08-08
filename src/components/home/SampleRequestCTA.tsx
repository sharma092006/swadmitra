import { ArrowRight, MapPin, Mail, Sparkles } from 'lucide-react';
import heroBgImg from '../../assets/premium_tea_hero_1786082060617.png';

export default function SampleRequestCTA() {
  return (
    <section className="relative py-20 lg:py-24 bg-[#fcfbf9] dark:bg-[#050505] overflow-hidden border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      {/* Deep Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/80 dark:bg-[#050505]/90 z-10 transition-colors duration-300"></div>
        {/* Boxy grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] z-10"></div>
        <img 
          src={heroBgImg} 
          alt="Dark premium textures" 
          className="w-full h-full object-cover opacity-20 grayscale"
        />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Sharp Boxy CTA Card */}
        <div className="bg-white dark:bg-[#111]/90 border-2 border-[#d4a373]/20 shadow-[0_0_50px_rgba(0,0,0,0.05)] dark:shadow-none p-10 lg:p-14 text-center relative group transition-colors duration-300">
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#d4a373] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#d4a373] translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#d4a373] -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#d4a373] translate-x-1/2 translate-y-1/2"></div>

          {/* Top Badge */}
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-[#050505] border border-black/10 dark:border-white/10 px-4 py-1.5 mb-8 transition-colors duration-300">
            <Sparkles className="w-3 h-3 text-[#d4a373]" />
            <span className="text-[10px] font-bold text-[#d4a373] uppercase tracking-widest">
              Exclusive Enterprise Evaluation
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white tracking-tight mb-6 leading-none uppercase transition-colors duration-300">
            Your first <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] to-[#e3c19e]">master blend</span> is on us.
          </h2>

          {/* Subtext */}
          <p className="text-sm md:text-base text-gray-800 dark:text-gray-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed transition-colors duration-300">
            Request a complimentary corporate sample kit. Experience our premium Assam and Darjeeling CTC grades firsthand, engineered for high-volume FMCG markets.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="mailto:enterprise@swadmitra.com" className="w-full sm:w-auto bg-[#d4a373] text-[#050505] px-8 py-4 flex items-center justify-center space-x-2 font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors duration-300 group/btn">
              <span>Request Free Samples</span>
              <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
            </a>
            
            <a href="/services" className="w-full sm:w-auto bg-transparent text-black dark:text-white border border-black/20 dark:border-white/20 hover:border-[#d4a373] dark:hover:border-[#d4a373] hover:text-[#d4a373] dark:hover:text-[#d4a373] px-8 py-4 flex items-center justify-center font-bold text-xs uppercase tracking-widest transition-colors duration-300">
              Explore Programs
            </a>
          </div>

          {/* Bottom Contact Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[10px] font-bold text-gray-800 dark:text-gray-500 uppercase tracking-widest border-t border-black/10 dark:border-white/10 pt-8 transition-colors duration-300">
            <div className="flex items-center space-x-2 hover:text-[#d4a373] transition-colors cursor-default">
              <MapPin className="w-3 h-3" />
              <span>Global Headquarters, India</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-black/20 dark:bg-white/20 transition-colors duration-300"></div>
            <a href="mailto:enterprise@swadmitra.com" className="flex items-center space-x-2 hover:text-[#d4a373] transition-colors">
              <Mail className="w-3 h-3" />
              <span>enterprise@swadmitra.com</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
