
import ServicesHero from '../components/services/ServicesHero';
import CoreServicesBento from '../components/services/CoreServicesBento';
import OEMProcess from '../components/services/OEMProcess';
import QualityAssurance from '../components/services/QualityAssurance';
import SampleRequestCTA from '../components/home/SampleRequestCTA';

export default function Services() {
  return (
    <main className="min-h-screen bg-[#fcfbf9] dark:bg-[#050505] transition-colors duration-300">
      <ServicesHero />
      <CoreServicesBento />
      <OEMProcess />
      <QualityAssurance />
      <SampleRequestCTA />
    </main>
  );
}
