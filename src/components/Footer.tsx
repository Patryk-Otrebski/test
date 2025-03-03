import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Cpu className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">PGO-Computers</span>
            </div>
            <p className="text-gray-400 mb-4">
              Twój zaufany sklep komputerowy z najlepszymi ofertami na rynku. Dostarczamy sprzęt najwyższej jakości dla graczy, grafików i uczniów.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kategorie</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Komputery dla graczy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Komputery dla grafików</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Komputery dla uczniów</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Akcesoria</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Promocje</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Nowości</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Informacje</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">O nas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Dostawa i płatność</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Zwroty i reklamacje</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Polityka prywatności</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Regulamin</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-400">ul. Komputerowa 123<br />00-000 Warszawa</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <a href="tel:+48123456789" className="text-gray-400 hover:text-white transition-colors duration-300">+48 123 456 789</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <a href="mailto:kontakt@pgo-computers.pl" className="text-gray-400 hover:text-white transition-colors duration-300">kontakt@pgo-computers.pl</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PGO-Computers. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-4">
              <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa" className="h-8 w-auto" />
              <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="MasterCard" className="h-8 w-auto" />
              <img src="https://cdn-icons-png.flaticon.com/512/196/196565.png" alt="PayPal" className="h-8 w-auto" />
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968299.png" alt="BLIK" className="h-8 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;