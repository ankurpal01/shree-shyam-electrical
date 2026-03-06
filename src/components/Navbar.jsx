import React from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Our Work' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-slate-900 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <Zap className="h-8 w-8 text-blue-500 mr-2" />
            <div>
              <h1 className="text-xl font-bold tracking-tight">SHREE SHYAM</h1>
              <p className="text-xs text-blue-400 font-semibold tracking-widest uppercase">Electrical</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm uppercase font-semibold tracking-wider transition-colors duration-200 ${
                  currentPage === item.id ? 'text-blue-400 border-b-2 border-blue-400 pb-1' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md text-sm font-bold uppercase tracking-wider transition-colors"
            >
              Get Quote
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white">
              {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 shadow-xl absolute w-full border-t border-slate-700">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium uppercase ${
                  currentPage === item.id ? 'bg-slate-900 text-blue-400' : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;