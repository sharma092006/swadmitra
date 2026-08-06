import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/home/Hero'
import TeaCollection from './components/home/TeaCollection'
import B2BSolutions from './components/home/B2BSolutions'
import B2BAdvantage from './components/home/B2BAdvantage'
import PartnershipJourney from './components/home/PartnershipJourney'
import BestSelling from './components/home/BestSelling'
import CorporateFAQ from './components/home/CorporateFAQ'
import B2BConnect from './components/home/B2BConnect'
import SampleRequestCTA from './components/home/SampleRequestCTA'

function App() {
  return (
    <div className="min-h-screen bg-[#fcfbf9] dark:bg-[#121212] transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <Hero />

      <main>
        <TeaCollection />
        <B2BSolutions />
        <B2BAdvantage />
        <PartnershipJourney />
        <BestSelling />
        <CorporateFAQ />
        <B2BConnect />
        <SampleRequestCTA />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
