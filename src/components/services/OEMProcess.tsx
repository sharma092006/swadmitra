import { ClipboardList, Leaf, Package, Truck } from 'lucide-react';

export default function OEMProcess() {
  const steps = [
    {
      id: '01',
      title: 'Consultation',
      description: 'We analyze your market needs and brand positioning to suggest perfect FMCG grades and custom blends.',
      icon: <ClipboardList className="w-6 h-6" />
    },
    {
      id: '02',
      title: 'Sourcing & Blending',
      description: 'Our masters source premium tea leaves, engineering a signature blend exclusive to you.',
      icon: <Leaf className="w-6 h-6" />
    },
    {
      id: '03',
      title: 'Packaging',
      description: 'From bulk sacks to premium retail boxes, we provide compliant, retail-ready packaging geometries.',
      icon: <Package className="w-6 h-6" />
    },
    {
      id: '04',
      title: 'Fulfillment',
      description: 'End-to-end logistics, documentation, and quality certifications ensuring smooth global delivery.',
      icon: <Truck className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-[#fcfbf9] dark:bg-[#0a0a0a] text-black dark:text-white border-y border-black/10 dark:border-white/10 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <div className="inline-block bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 px-4 py-1.5 mb-6 transition-colors duration-300">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-800 dark:text-gray-400">Private Label (OEM) Lifecycle</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-none text-black dark:text-white transition-colors duration-300">
              Your Brand.<br />
              <span className="text-[#d4a373]">Our Infrastructure.</span>
            </h2>
            <p className="text-gray-800 dark:text-gray-400 text-sm md:text-base max-w-xl leading-relaxed lg:text-right transition-colors duration-300">
              A completely hands-off manufacturing experience. We handle the complexities of sourcing, blending, packing, and compliance so you can focus on scaling.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-black/10 dark:border-white/10 transition-colors duration-300">
          {steps.map((step, idx) => (
            <div 
              key={step.id} 
              className={`relative p-8 group transition-colors duration-300 bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-[#111] ${idx !== steps.length - 1 ? 'border-b md:border-b-0 md:border-r border-black/10 dark:border-white/10' : ''} ${idx === 1 ? 'lg:border-b-0 border-b md:border-b-0' : ''}`}
            >
              <div className="flex justify-between items-start mb-12">
                <div className="text-[#d4a373] transition-transform duration-300 group-hover:-translate-y-1">
                  {step.icon}
                </div>
                <span className="text-4xl font-bold text-gray-300 dark:text-white/5 group-hover:text-gray-400 dark:group-hover:text-white/10 transition-colors pointer-events-none">
                  {step.id}
                </span>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide group-hover:text-[#d4a373] transition-colors text-black dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-800 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
