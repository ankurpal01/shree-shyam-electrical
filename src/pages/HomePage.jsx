import React from 'react';
import { Clock, ShieldCheck, Cpu, Phone } from 'lucide-react';
import WorkSlider from '../components/WorkSlider';
import bgImage from '../assets/sh.png';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section with Background Image */}
      <section 
        className="relative text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        // YAHAN APNI IMAGE KA URL YA PATH DAALEIN
    style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Dark Gradient Overlay - Taaki text padhne me aasan ho */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">
              Industrial Automation Experts
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-lg">
              Rapid Solutions for <span className="text-blue-400">Industrial Electrical</span> Systems.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
             Complete electrical solutions for homes, shops, and industrial setups — installation, repair, and motor winding services.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => setCurrentPage('services')}
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-md font-bold uppercase tracking-wider transition-colors text-center shadow-lg shadow-blue-900/50"
              >
                Explore Services
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-md font-bold uppercase tracking-wider transition-colors text-center backdrop-blur-sm"
              >
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start p-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-4 shadow-sm">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Round-the-clock emergency troubleshooting for critical breakdowns.</p>
              </div>
            </div>
            <div className="flex items-start p-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-4 shadow-sm">
                <ShieldCheck className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Quality Guaranteed</h3>
                <p className="text-gray-600 text-sm">Expert repairs with comprehensive testing and warranty on parts.</p>
              </div>
            </div>
            <div className="flex items-start p-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-4 shadow-sm">
                <Cpu className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Advanced Diagnostics</h3>
                <p className="text-gray-600 text-sm">State-of-the-art tools to pinpoint faults in complex automation systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Slider Section */}
      <WorkSlider />

      {/* CTA Section */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Experiencing a Control Panel Failure?</h2>
          <p className="text-lg text-gray-600 mb-8">Don't let equipment failure halt your production. Our experts are ready to diagnose and repair your industrial electronics.</p>
          <a href="tel:+919587742574" className="inline-flex items-center bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-md font-bold uppercase tracking-wider transition-colors shadow-lg">
            <Phone className="mr-2 h-5 w-5" /> Call +91 9587742574
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;