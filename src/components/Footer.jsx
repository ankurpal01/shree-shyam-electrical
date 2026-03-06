import React from 'react';
import { Zap, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 border-t-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Zap className="h-6 w-6 text-blue-500 mr-2" />
              <h2 className="text-xl font-bold text-white">Shree Shyam Electrical</h2>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Your trusted partner for industrial electrical solutions, specializing in PLC, VFD, and control panel repairs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Our Work', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => setCurrentPage(item.toLowerCase().replace(' ', ''))}
                    className="text-sm hover:text-blue-400 flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" /> {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4 uppercase">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start"><MapPin className="h-5 w-5 mr-2 text-blue-500" /> Baanke Colony, Near Lakhmi Dharam Kanta, Sersa Kundali, Sonipat , Haryana  Kundali, Haryana 131028</p>
              <p className="flex items-center"><Phone className="h-5 w-5 mr-2 text-blue-500" /> +91 9587742574 , +917690021359</p>
              <p className="flex items-center"><Mail className="h-5 w-5 mr-2 text-blue-500" /> Kartikarvind52@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Shree Shyam Electrical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;