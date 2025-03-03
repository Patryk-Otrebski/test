import React from 'react';
import { Cpu } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ProductCategory from './components/ProductCategory';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <HeroBanner />
        <ProductCategory />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
}

export default App;