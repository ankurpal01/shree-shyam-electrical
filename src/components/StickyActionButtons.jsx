import React from 'react';

const StickyActionButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/9587742574" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 p-3.5 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center group relative"
      >
        {/* Internet se WhatsApp ka icon */}
        <img 
          src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png" 
          alt="WhatsApp" 
          className="h-6 w-6 object-contain"
        />
      </a>
      
      {/* Call Button */}
      <a 
        href="tel:+919587742574" 
        className="bg-blue-600 hover:bg-blue-700 p-3.5 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center group relative"
      >
        {/* Internet se Phone ka icon */}
        <img 
          src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" 
          alt="Call" 
          className="h-6 w-6 object-contain"
        />
      </a>
      
    </div>
  );
};

export default StickyActionButtons;