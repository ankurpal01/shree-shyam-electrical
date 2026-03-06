import React from 'react';
import { ShieldCheck, Zap, Settings, Users, CheckCircle, PenTool, FileText } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="animate-fade-in bg-white">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold uppercase tracking-tight mb-4">About Us</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Driving Efficiency Through <br/> <span className="text-blue-600">Expert Automation</span> Repair.
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Established with a vision to provide top-tier industrial electrical solutions, <strong>Shree Shyam Electrical</strong> has grown to become a trusted name in automation repair and complete building wiring.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-4"><Users className="h-5 w-5 text-blue-600" /></div>
                <span className="text-slate-800 font-medium text-lg">Certified Expert Technicians</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-4"><Zap className="h-5 w-5 text-blue-600" /></div>
                <span className="text-slate-800 font-medium text-lg">Fast Turnaround (24-48 Hrs)</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-4"><Settings className="h-5 w-5 text-blue-600" /></div>
                <span className="text-slate-800 font-medium text-lg">Component-Level Precision Repair</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative z-10 h-[400px] md:h-[500px]">
              <img 
                 src="/Images/about.png"
                alt="Industrial Engineer" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

    
     {/* --- NEW SECTION: Certifications --- */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-10">Certifications & Approvals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* GST Certificate Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="flex items-center justify-center mb-4">
                <FileText className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">GST Registered</h3>
              <p className="text-sm text-gray-500 mb-4">Govt of India Approved</p>
              
              {/* HEIGHT BADA DI HAI (h-80) */}
              <div className="border border-gray-200 rounded-md bg-white h-80 flex items-center justify-center overflow-hidden shadow-inner p-2 mb-4">
                <img 
                  src="/Images/GST.png" 
                  alt="shri Shyam Electrical GST Certificate" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              {/* VIEW FULL BUTTON */}
              <a 
                href="/Images/GST.png" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto w-full bg-slate-100 hover:bg-blue-600 hover:text-white text-blue-600 font-bold py-2 px-4 rounded transition-colors duration-300 text-center"
              >
                View Full Image
              </a>
            </div>

            {/* MSME Certificate Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="flex items-center justify-center mb-4">
                <ShieldCheck className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">MSME / Udyam</h3>
              <p className="text-sm text-gray-500 mb-4">Registered Enterprise</p>
              
              <div className="border border-gray-200 rounded-md bg-white h-80 flex items-center justify-center overflow-hidden shadow-inner p-2 mb-4">
                <img 
                  src="/Images/MSME.png" 
                  alt="MSME Certificate" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" 
                />
              </div>

              <a 
                href="/Images/MSME.png" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto w-full bg-slate-100 hover:bg-blue-600 hover:text-white text-blue-600 font-bold py-2 px-4 rounded transition-colors duration-300 text-center"
              >
                View Full Image
              </a>
            </div>

            {/* Electrical License Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Contractor License</h3>
              <p className="text-sm text-gray-500 mb-4">State Approved</p>
              
              <div className="border border-gray-200 rounded-md bg-white h-80 flex items-center justify-center overflow-hidden shadow-inner p-2 mb-4">
                <img 
                  src="/Images/license.jpg" 
                  alt="Electrical Contractor License" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" 
                />
              </div>

              <a 
                href="/Images/license.jpg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto w-full bg-slate-100 hover:bg-blue-600 hover:text-white text-blue-600 font-bold py-2 px-4 rounded transition-colors duration-300 text-center"
              >
                View Full Image
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Commitment Section */}
    <div className="bg-slate-50 py-20 border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900">Meet Our Team</h2>
      <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
        Expert technicians with decades of combined experience ready to serve you.
      </p>
    </div>
    
    {/* 4-Card Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Team Member 1 */}
      <div className="group h-80 w-full [perspective:1000px] cursor-pointer">
        <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-sm hover:shadow-xl hover:shadow-blue-900/10">
          
          {/* Front Face */}
          <div className="absolute inset-0 h-full w-full rounded-xl bg-white p-8 border border-gray-100 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
            <img 
                src="/Images/Mahesh.png" 
              alt="Mahesh Kumar" 
              className="h-28 w-28 rounded-full object-cover mb-4 border-4 border-slate-50 shadow-sm" 
            />
            <h3 className="font-bold text-xl text-slate-900 mb-1">Mahesh Kumar</h3>
            <p className="text-blue-600 text-sm font-semibold">Master Technician</p>
          </div>

          {/* Back Face */}
          <div className="absolute inset-0 h-full w-full rounded-xl bg-blue-600 p-8 flex flex-col items-center justify-center text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <h3 className="font-bold text-lg mb-4 border-b border-blue-400 pb-2 w-full">Experience</h3>
            <p className="text-sm text-blue-50 leading-relaxed">
              15+ years of hands-on experience in advanced diagnostics, heavy machinery repair, and structural welding.
            </p>
          </div>
        </div>
      </div>

      {/* Team Member 2 */}
      <div className="group h-80 w-full [perspective:1000px] cursor-pointer">
        <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-sm hover:shadow-xl hover:shadow-blue-900/10">
          
          {/* Front Face */}
          <div className="absolute inset-0 h-full w-full rounded-xl bg-white p-8 border border-gray-100 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
            <img 
              //src="/Images/Mahesh.png" 
              alt="Sarah Jenkins" 
              className="h-28 w-28 rounded-full object-cover mb-4 border-4 border-slate-50 shadow-sm" 
            />
            <h3 className="font-bold text-xl text-slate-900 mb-1">Yogesh Saini </h3>
            <p className="text-blue-600 text-sm font-semibold">Technician</p>
          </div>

          {/* Back Face */}
          <div className="absolute inset-0 h-full w-full rounded-xl bg-blue-600 p-8 flex flex-col items-center justify-center text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <h3 className="font-bold text-lg mb-4 border-b border-blue-400 pb-2 w-full">Experience</h3>
            <p className="text-sm text-blue-50 leading-relaxed">
              12 years of expertise specializing in custom part fabrication, electrical testing, and system calibration.
            </p>
          </div>
        </div>
      </div>

      {/* Team Member 3 */}
      <div className="group h-80 w-full [perspective:1000px] cursor-pointer">
        <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-sm hover:shadow-xl hover:shadow-blue-900/10">
          
          {/* Front Face */}
          <div className="absolute inset-0 h-full w-full rounded-xl bg-white p-8 border border-gray-100 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
            <img 
               //src="/Images/Mahesh.png" 
              alt="David Rodriguez" 
              className="h-28 w-28 rounded-full object-cover mb-4 border-4 border-slate-50 shadow-sm" 
            />
            <h3 className="font-bold text-xl text-slate-900 mb-1">Rahul Saini</h3>
            <p className="text-blue-600 text-sm font-semibold">Technician</p>
          </div>

          {/* Back Face */}
          <div className="absolute inset-0 h-full w-full rounded-xl bg-blue-600 p-8 flex flex-col items-center justify-center text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <h3 className="font-bold text-lg mb-4 border-b border-blue-400 pb-2 w-full">Experience</h3>
            <p className="text-sm text-blue-50 leading-relaxed">
              10 years ensuring every project meets strict safety, performance, and long-term reliability standards.
            </p>
          </div>
        </div>
      </div>

      {/* Team Member 4 */}
      <div className="group h-80 w-full [perspective:1000px] cursor-pointer">
        <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-sm hover:shadow-xl hover:shadow-blue-900/10">
          
          {/* Front Face */}
          <div className="absolute inset-0 h-full w-full rounded-xl bg-white p-8 border border-gray-100 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
            <img 
               //src="/Images/Mahesh.png"  
              alt="James Wilson" 
              className="h-28 w-28 rounded-full object-cover mb-4 border-4 border-slate-50 shadow-sm" 
            />
            <h3 className="font-bold text-xl text-slate-900 mb-1">Paplesh Saini</h3>
            <p className="text-blue-600 text-sm font-semibold">Technician</p>
          </div>

          {/* Back Face */}
          <div className="absolute inset-0 h-full w-full rounded-xl bg-blue-600 p-8 flex flex-col items-center justify-center text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <h3 className="font-bold text-lg mb-4 border-b border-blue-400 pb-2 w-full">Experience</h3>
            <p className="text-sm text-blue-50 leading-relaxed">
              20+ years of industry experience coordinating complex repair schedules and managing client relations.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
    </div>
  );
};

export default AboutPage;