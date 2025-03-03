import React, { useState } from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Gaming Pro X",
    category: "Dla Graczy",
    price: 5999,
    oldPrice: 6499,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    specs: ["Intel Core i7", "RTX 4070", "32GB RAM", "1TB SSD"],
    isNew: true,
    isHot: false,
  },
  {
    id: 2,
    name: "Creator Station",
    category: "Dla Grafików",
    price: 7999,
    oldPrice: null,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    specs: ["AMD Ryzen 9", "RTX 4080", "64GB RAM", "2TB SSD"],
    isNew: true,
    isHot: true,
  },
  {
    id: 3,
    name: "Student Lite",
    category: "Dla Uczniów",
    price: 2999,
    oldPrice: 3299,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80",
    specs: ["Intel Core i5", "Intel Iris Xe", "16GB RAM", "512GB SSD"],
    isNew: false,
    isHot: false,
  },
  {
    id: 4,
    name: "Gaming Elite",
    category: "Dla Graczy",
    price: 8999,
    oldPrice: 9499,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    specs: ["Intel Core i9", "RTX 4090", "64GB RAM", "2TB SSD"],
    isNew: false,
    isHot: true,
  },
];

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(product => {
        if (activeTab === 'new') return product.isNew;
        if (activeTab === 'hot') return product.isHot;
        return product.category.toLowerCase() === activeTab.toLowerCase();
      });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Polecane produkty</h2>
        <p className="text-gray-600 text-center mb-8">Odkryj nasze najlepsze komputery i akcesoria</p>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 mx-1 mb-2 rounded-full transition-all duration-300 ${
              activeTab === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Wszystkie
          </button>
          <button 
            onClick={() => setActiveTab('Dla Graczy')}
            className={`px-4 py-2 mx-1 mb-2 rounded-full transition-all duration-300 ${
              activeTab === 'Dla Graczy' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Dla Graczy
          </button>
          <button 
            onClick={() => setActiveTab('Dla Grafików')}
            className={`px-4 py-2 mx-1 mb-2 rounded-full transition-all duration-300 ${
              activeTab === 'Dla Grafików' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Dla Grafików
          </button>
          <button 
            onClick={() => setActiveTab('Dla Uczniów')}
            className={`px-4 py-2 mx-1 mb-2 rounded-full transition-all duration-300 ${
              activeTab === 'Dla Uczniów' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Dla Uczniów
          </button>
          <button 
            onClick={() => setActiveTab('new')}
            className={`px-4 py-2 mx-1 mb-2 rounded-full transition-all duration-300 ${
              activeTab === 'new' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Nowości
          </button>
          <button 
            onClick={() => setActiveTab('hot')}
            className={`px-4 py-2 mx-1 mb-2 rounded-full transition-all duration-300 ${
              activeTab === 'hot' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Hity sprzedaży
          </button>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 p-2 flex gap-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">NOWOŚĆ</span>
                  )}
                  {product.isHot && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">HIT</span>
                  )}
                </div>
                <button className="absolute top-2 right-2 bg-white rounded-full p-1.5 text-gray-600 hover:text-red-500 transition-colors duration-300">
                  <Heart size={18} />
                </button>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm ml-1">{product.rating}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <ul className="text-xs text-gray-600 space-y-1">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold text-lg">{product.price} zł</span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">{product.oldPrice} zł</span>
                    )}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-300">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition-all duration-300">
            Zobacz wszystkie produkty
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;