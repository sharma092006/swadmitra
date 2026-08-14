import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Shop from './pages/Shop'
import Products from './pages/Products'
import OurStory from './pages/OurStory'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Contact from './pages/Contact'
import Quality from './pages/Quality'

function App() {
  return (
    <div className="min-h-screen bg-[#fcfbf9] dark:bg-[#121212] transition-colors duration-300 flex flex-col">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Products />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/shop/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quality" element={<Quality />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
