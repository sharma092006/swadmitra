import { PackageSearch, Beaker, Globe2, Truck, ArrowRight } from 'lucide-react';
import bulkSupplyImg from '../../assets/bulk_tea_supply_1786082123663.png';
import globalExportImg from '../../assets/global_export_luxury_1786080964704.png';

export default function CoreServicesBento() {
  const services = [
    {
      title: 'Bulk Tea Supply',
      description: 'Premium CTC and Orthodox teas sourced directly from elite estates in Assam and Darjeeling. Guaranteed consistency at massive scale.',
      icon: <Truck className="w-6 h-6 text-white dark:text-[#050505]" />,
      colSpan: 'md:col-span-2 lg:col-span-2',
      bgClass: 'bg-white dark:bg-[#111]',
      image: bulkSupplyImg
    },
    {
      title: 'Private Label (OEM)',
      description: 'Turnkey manufacturing for your brand. From sourcing to final retail box, we handle the entire process.',
      icon: <PackageSearch className="w-6 h-6 text-[#d4a373]" />,
      colSpan: 'md:col-span-1 lg:col-span-1',
      bgClass: 'bg-gray-50 dark:bg-[#0a0a0a]',
      image: null
    },
    {
      title: 'Custom Master Blending',
      description: 'Work with our master tasters to engineer unique tea flavor profiles that set your brand apart.',
      icon: <Beaker className="w-6 h-6 text-[#d4a373]" />,
      colSpan: 'md:col-span-1 lg:col-span-1',
      bgClass: 'bg-gray-50 dark:bg-[#0a0a0a]',
      image: null
    },
    {
      title: 'Global Export & Logistics',
      description: 'Seamless logistics and compliance handling to over 40+ countries. We deliver excellence worldwide, managing all regulatory requirements securely and efficiently.',
      icon: <Globe2 className="w-6 h-6 text-white dark:text-[#050505]" />,
      colSpan: 'md:col-span-2 lg:col-span-2',
      bgClass: 'bg-white dark:bg-[#111]',
      image: globalExportImg
    }
  ];

  return (
    <section className="py-24 bg-[#fcfbf9] dark:bg-[#050505] text-black dark:text-white relative transition-colors duration-300">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none transition-colors duration-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-block bg-[#d4a373] text-white dark:text-[#050505] font-bold text-[10px] tracking-widest uppercase px-3 py-1 mb-4">
              Core Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">Strategic <span className="text-[#d4a373]">Solutions</span></h2>
          </div>
          <p className="text-gray-800 dark:text-gray-400 max-w-md text-sm md:text-base leading-relaxed border-l-2 border-[#d4a373]/30 pl-4 transition-colors duration-300">
            We provide a comprehensive suite of B2B solutions, engineered for scalability, reliability, and unparalleled quality control across the FMCG spectrum.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className={`group relative p-8 border border-black/10 dark:border-white/10 hover:border-[#d4a373] transition-colors duration-300 overflow-hidden flex flex-col justify-between min-h-[340px] ${service.colSpan} ${service.bgClass}`}
            >
              {/* Background Image Overlay */}
              {service.image && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#050505] via-white/80 dark:via-[#050505]/80 to-transparent z-10 group-hover:bg-white/90 dark:group-hover:bg-[#050505]/90 transition-colors duration-500"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 z-0 grayscale-[20%]"
                  />
                </>
              )}
              
              <div className="relative z-20">
                <div className={`w-12 h-12 flex items-center justify-center mb-6 transition-transform duration-300 ${service.image ? 'bg-[#d4a373]' : 'bg-gray-100 dark:bg-white/5 border border-black/10 dark:border-white/10 group-hover:border-[#d4a373]'}`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide group-hover:text-[#d4a373] transition-colors duration-300 text-black dark:text-white">{service.title}</h3>
                <p className="text-gray-800 dark:text-gray-400 text-sm leading-relaxed max-w-md transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              <div className="relative z-20 mt-8">
                <a href="#contact" className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-black dark:text-white group-hover:text-[#d4a373] dark:group-hover:text-[#d4a373] transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
