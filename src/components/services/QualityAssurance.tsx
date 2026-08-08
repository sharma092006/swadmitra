import { ShieldCheck, Award, Factory, Fingerprint } from 'lucide-react';

export default function QualityAssurance() {
  const pillars = [
    {
      title: 'State-of-the-Art Facilities',
      description: 'Fully automated, humidity-controlled processing units ensuring zero contamination and maximum freshness retention for all FMCG products.',
      icon: <Factory className="w-8 h-8 text-[#d4a373]" />
    },
    {
      title: 'Global Certifications',
      description: 'ISO 22000, HACCP, GMP, and FSSAI certified. We meet the strictest international food safety standards globally.',
      icon: <Award className="w-8 h-8 text-[#d4a373]" />
    },
    {
      title: 'Rigorous Testing',
      description: 'In-house sensory evaluation and chemical profiling laboratories test every batch for moisture, ash content, and pesticide residue.',
      icon: <ShieldCheck className="w-8 h-8 text-[#d4a373]" />
    },
    {
      title: '100% Traceability',
      description: 'From the specific tea estate to the final packaged carton, our systems ensure complete transparency.',
      icon: <Fingerprint className="w-8 h-8 text-[#d4a373]" />
    }
  ];

  return (
    <section className="py-24 bg-[#fcfbf9] dark:bg-[#050505] text-black dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[linear-gradient(to_left,#d4a37305,transparent)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-black/10 dark:border-white/10 pb-8 gap-6 transition-colors duration-300">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-none text-black dark:text-white transition-colors duration-300">
              Uncompromising <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] to-[#e3c19e]">Quality</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-800 dark:text-gray-400 text-sm leading-relaxed border-l-2 border-[#d4a373]/30 pl-4 transition-colors duration-300">
              For B2B partners, consistency is non-negotiable. Our quality assurance frameworks deliver exact flavor profiles, metric ton after metric ton.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 p-8 hover:border-[#d4a373] hover:bg-gray-50 dark:hover:bg-[#111] transition-all duration-300 group flex flex-col h-full"
            >
              <div className="mb-8 w-16 h-16 bg-gray-50 dark:bg-[#111] border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:border-[#d4a373]/50 transition-all duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wide group-hover:text-[#d4a373] transition-colors text-black dark:text-white">{pillar.title}</h3>
              <p className="text-gray-800 dark:text-gray-400 text-sm leading-relaxed mt-auto transition-colors duration-300">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
