import Header from './components/layout/Header'
import Hero from './components/home/Hero'

function App() {
  return (
    <div className="min-h-screen bg-[#fcfbf9] dark:bg-[#121212] transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* Main Content Area Placeholder for Future Sections */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 xl:px-16 py-12">
        {/* Further components like Categories, Best Sellers, etc., will go here */}
      </main>
    </div>
  )
}

export default App
