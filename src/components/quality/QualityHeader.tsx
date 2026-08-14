import { Award, ChevronRight } from 'lucide-react';
import heroImg from '../../assets/premium_tea_hero_1786082060617.png';
export default function QualityHeader() {
  return (
    <section className="w-full pt-32 pb-6 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
      <div className="bg-[#111] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl relative flex flex-col lg:flex-row min-h-[500px]">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        {/* Content Side */}
        <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit mb-8 backdrop-blur-md">
            <Award className="w-4 h-4 text-[#d4a373]" />
            <span className="text-[#d4a373] text-xs font-bold uppercase tracking-[0.2em]">Our Commitment</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-[1.1]">
            Uncompromising <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] to-[#b0875e] italic">
              Excellence.
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-md">
            A state-of-the-art journey from the misty gardens of Assam straight to your cup, ensuring perfect purity.
          </p>
          
          <button className="flex items-center space-x-3 text-white font-semibold text-sm uppercase tracking-widest group w-fit">
            <span>Explore the Standard</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full overflow-hidden bg-black">
          {/* Blend mask */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#111] to-transparent z-10 hidden lg:block"></div>
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#111] to-transparent z-10 block lg:hidden"></div>
          
          <img 
            src={heroImg} 
            alt="Premium Tea Garden" 
            className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-[10s] opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
