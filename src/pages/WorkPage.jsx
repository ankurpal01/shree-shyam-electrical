import React from 'react';
import { MessageCircle } from 'lucide-react';

const WorkPage = () => {
  const videos = [
    {
      title: "Siemens S7-1200 PLC Repair & Testing",
      description: "Component level repair of power supply section and IO testing on the test bench.",
      embedId: "q5P8EwP8b5g" 
    },
    {
      title: "Delta VFD Overcurrent Fault Troubleshooting",
      description: "Diagnosing and replacing faulty IGBT modules in a 15kW AC Drive.",
      embedId: "2Xy6E-7O3cM"
    },
    {
      title: "Industrial Control Panel Rewiring",
      description: "Complete overhaul and systematic fault finding in a messy relay-logic control panel.",
      embedId: "V_0lW-YmE5w"
    },
    {
      title: "HMI Touch Screen Replacement",
      description: "Fixing an unresponsive Allen Bradley PanelView interface.",
      embedId: "g9qU5_o13eI"
    },
    {
      title: "Servo Motor Encoder Alignment",
      description: "Precision calibration of a servo motor encoder after bearing replacement.",
      embedId: "YQv5Cg8M5vY"
    },
    {
      title: "On-site Breakdown Support",
      description: "Emergency visit to a manufacturing plant to restore a critical automated line.",
      embedId: "Z4mHk_Z3g0A"
    }
  ];

  return (
    <div className="animate-fade-in bg-slate-100 pb-24">
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold uppercase tracking-tight mb-4">Our Work</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Watch our experts in action. Real repairs, real troubleshooting.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 flex flex-col">
              <div className="aspect-video w-full bg-slate-800 relative">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.embedId}?rel=0`}
                  title={video.title} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Need a reliable repair partner for your facility?</p>
          <a href="https://wa.me/9587742574" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-bold uppercase tracking-wider transition-colors shadow-md">
            <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;