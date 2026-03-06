import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const WorkSlider = () => {
  // Internet se high-quality industrial images link kar di hain
  const slides = [
    { 
      id: 1, 
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200", 
      title: "Control Panel Assembly & Wiring" 
    },
    { 
      id: 2, 
      img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1200", 
      title: "VFD Drive Repair & Load Testing" 
    },
    { 
      id: 3, 
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200", 
      title: "PLC Automation Setup & Programming" 
    },
    { 
      id: 4, 
      img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=1200", 
      title: "On-Site Industrial Troubleshooting" 
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); 
    return () => clearInterval(timer);
  }, [slides.length]);

  const next = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prev = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Glimpse of Our Work</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="relative rounded-xl overflow-hidden shadow-xl group border border-gray-200">
          <div 
            className="flex transition-transform duration-700 ease-in-out h-[250px] sm:h-[400px] md:h-[500px]"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
                <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 w-full p-6 md:p-8">
                  <h3 className="text-white text-xl md:text-3xl font-bold drop-shadow-lg">{slide.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-blue-600 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-lg">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-blue-600 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-lg">
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex space-x-2">
            {slides.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrent(idx)}
                className={`h-2.5 rounded-full transition-all shadow-sm ${current === idx ? 'bg-blue-500 w-8' : 'bg-white/70 hover:bg-white w-2.5'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSlider;