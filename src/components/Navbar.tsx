import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Search, Menu, X, ChevronDown, Cpu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white shadow-sm py-3'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">PGO-Computers</span>
            </a>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Czego szukasz?"
                className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => toggleDropdown('computers')}
              >
                Komputery <ChevronDown size={16} className="ml-1" />
              </button>
              {activeDropdown === 'computers' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-50 animate-fadeIn">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Dla Graczy</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Dla Grafików</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Dla Uczniów</a>
                </div>
              )}
            </div>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Akcesoria</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Promocje</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Nowości</a>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 relative">
              <User size={24} />
            </button>
            <button className="text-gray-700 hover:text-blue-600 relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </button>
            <button 
              className="md:hidden text-gray-700 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeIn">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Czego szukasz?"
                className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600">
                <Search size={20} />
              </button>
            </div>
            <nav className="flex flex-col space-y-3">
              <div>
                <button 
                  className="flex items-center justify-between w-full py-2 text-gray-700 font-medium"
                  onClick={() => toggleDropdown('mobileComputers')}
                >
                  <span>Komputery</span>
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'mobileComputers' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobileComputers' && (
                  <div className="pl-4 mt-2 space-y-2 animate-fadeIn">
                    <a href="#" className="block py-1 text-gray-700 hover:text-blue-600">Dla Graczy</a>
                    <a href="#" className="block py-1 text-gray-700 hover:text-blue-600">Dla Grafików</a>
                    <a href="#" className="block py-1 text-gray-700 hover:text-blue-600">Dla Uczniów</a>
                  </div>
                )}
              </div>
              <a href="#" className="py-2 text-gray-700 font-medium">Akcesoria</a>
              <a href="#" className="py-2 text-gray-700 font-medium">Promocje</a>
              <a href="#" className="py-2 text-gray-700 font-medium">Nowości</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;