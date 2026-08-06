import { ArrowRight, MapPin, Mail, Sparkles } from 'lucide-react';

export default function SampleRequestCTA() {
  return (
    <section className="relative py-8 lg:py-12 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Deep Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505]/85 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-full max-h-[600px] bg-[#d4a373] opacity-[0.03] blur-[100px] rounded-full z-10 pointer-events-none"></div>
        <img 
          src="https://images.unsplash.com/photo-1576092762791-dd9e2220c9d8?q=80&w=2000&auto=format&fit=crop" 
          alt="Dark tea leaves texture" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Floating Glass CTA Card */}
        <div className="bg-[#0a0a0a]/70 backdrop-blur-xl border border-white/10 rounded-xl lg:rounded-2xl p-6 md:p-8 lg:p-10 text-center shadow-2xl relative overflow-hidden group">
          
          {/* Internal ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-20 bg-[#d4a373] opacity-[0.05] group-hover:opacity-[0.08] blur-[40px] transition-opacity duration-1000 pointer-events-none"></div>

          {/* Top Badge */}
          <div className="inline-flex items-center space-x-1.5 bg-[#d4a373]/10 border border-[#d4a373]/20 px-3 py-1 rounded-full mb-4">
            <Sparkles className="w-2.5 h-2.5 text-[#d4a373]" />
            <span className="text-[8px] font-bold text-[#d4a373] uppercase tracking-widest">
              Ready to elevate your brand?
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3 leading-[1.1]">
            Your first <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] to-[#e3c19e] pr-2">master blend</span> is on us.
          </h2>

          {/* Subtext */}
          <p className="text-[11px] md:text-xs text-gray-400 font-light max-w-xl mx-auto mb-6 leading-relaxed">
            Request a complimentary corporate sample kit. Experience our premium Assam and Darjeeling CTC grades firsthand, engineered for high-volume FMCG markets.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <button className="w-full sm:w-auto bg-[#d4a373] text-gray-900 px-5 py-2.5 rounded-lg flex items-center justify-center space-x-1.5 font-bold text-[10px] tracking-wide hover:bg-[#e3c19e] transition-all duration-300 shadow-[0_0_15px_rgba(212,163,115,0.15)] hover:shadow-[0_0_25px_rgba(212,163,115,0.3)] group/btn">
              <span>REQUEST FREE SAMPLES</span>
              <ArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform" />
            </button>
            
            <button className="w-full sm:w-auto bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/5 px-5 py-2.5 rounded-lg flex items-center justify-center font-bold text-[10px] tracking-wide transition-all duration-300">
              EXPLORE PROGRAMS
            </button>
          </div>

          {/* Bottom Contact Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-[8px] font-bold text-gray-500 uppercase tracking-widest">
            <div className="flex items-center space-x-1.5 hover:text-[#d4a373] transition-colors cursor-default">
              <MapPin className="w-2.5 h-2.5" />
              <span>Global Headquarters, India</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20"></div>
            <a href="mailto:enterprise@swadmitra.com" className="flex items-center space-x-1.5 hover:text-[#d4a373] transition-colors">
              <Mail className="w-2.5 h-2.5" />
              <span>enterprise@swadmitra.com</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
