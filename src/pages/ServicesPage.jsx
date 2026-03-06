import React from 'react';
import { 
  Home, Factory, Zap, Battery, Power, RefreshCw, 
  Search, Wrench, Settings, Cpu, Activity, ShieldCheck 
} from 'lucide-react';

const ServicesPage = () => {
  const residentialServices = [
    {
      icon: <Home className="h-7 w-7" />,
      title: "Complete House & Shop Wiring",
      description: "Safe and reliable end-to-end electrical wiring and fitting for residential homes and commercial shops."
    },
    {
      icon: <Power className="h-7 w-7" />,
      title: "MCB, DB & Switch Board",
      description: "Professional installation and upgrading of MCBs, Distribution Boards, and modern switchboards for electrical safety."
    },
    {
      icon: <Battery className="h-7 w-7" />,
      title: "Inverter & Battery Setup",
      description: "Seamless installation and maintenance of inverters and batteries for uninterrupted power supply during cuts."
    },
    {
      icon: <Zap className="h-7 w-7" />,
      title: "Generator Installation",
      description: "Expert installation, servicing, and repair of backup generators for homes and commercial setups."
    },
    {
      icon: <RefreshCw className="h-7 w-7" />,
      title: "Motor Rewinding (0.5 - 50 HP)",
      description: "Precision rewinding and repairing services for all types of single and three-phase water pumps and motors."
    },
    {
      icon: <Search className="h-7 w-7" />,
      title: "Electrical Fault Finding",
      description: "Quick and accurate diagnostics to resolve short circuits, voltage drops, and sudden electrical breakdowns."
    },
    {
      icon: <Wrench className="h-7 w-7" />,
      title: "Appliance Repair",
      description: "Quick and efficient repair of everyday household appliances including Fans, Coolers, Heaters, and Irons."
    }
  ];

  const industrialServices = [
    {
      icon: <Settings className="h-7 w-7" />,
      title: "Control Panel Troubleshooting",
      description: "Custom design, installation, and fault finding for complex industrial control panels and relay logic."
    },
    {
      icon: <Cpu className="h-7 w-7" />,
      title: "VFD / AC Drive Repair",
      description: "Expert diagnostics and component-level repair for variable frequency drives to minimize factory downtime."
    },
    {
      icon: <Activity className="h-7 w-7" />,
      title: "3 Phase Line Setup",
      description: "Safe, compliant, and heavy-duty installation of 3-phase power lines and load balancing for factories."
    },
    {
      icon: <Settings className="h-7 w-7" />,
      title: "Industrial Motor Repair",
      description: "Heavy-duty industrial servo and induction motor servicing, bearing replacement, and performance testing."
    },
    {
      icon: <ShieldCheck className="h-7 w-7" />,
      title: "Preventive Maintenance",
      description: "Scheduled inspections, panel cleaning, and thermal checkups to prevent sudden machine breakdowns."
    }
  ];

  return (
    <div className="animate-fade-in bg-slate-50/50 pb-20">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16 shadow-md relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-4 drop-shadow-lg">Our Services</h1>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">Comprehensive and reliable electrical solutions tailored for homes, shops, and large-scale industries.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* --- SECTION 1: Residential & Commercial --- */}
          <div className="space-y-6">
            <div className="flex items-center mb-8 pb-4 border-b-2 border-slate-200">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-3 rounded-xl mr-4 text-white shadow-lg">
                <Home className="h-7 w-7" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Residential <span className="text-blue-600 font-medium text-2xl block sm:inline">& Commercial</span></h2>
            </div>
            
            <div className="grid gap-5">
              {residentialServices.map((service, index) => (
                <div key={index} className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex items-start group overflow-hidden cursor-default">
                  {/* Left Side Highlight Line on Hover */}
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="flex-shrink-0 bg-blue-50 group-hover:bg-blue-600 p-4 rounded-xl text-blue-600 group-hover:text-white transition-all duration-500 mr-5 shadow-sm">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- SECTION 2: Industrial --- */}
          <div className="space-y-6">
            <div className="flex items-center mb-8 pb-4 border-b-2 border-slate-200">
              <div className="bg-gradient-to-br from-slate-700 to-slate-900 p-3 rounded-xl mr-4 text-white shadow-lg">
                <Factory className="h-7 w-7" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Industrial <span className="text-slate-500 font-medium text-2xl block sm:inline">& Automation</span></h2>
            </div>
            
            <div className="grid gap-5">
              {industrialServices.map((service, index) => (
                <div key={index} className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex items-start group overflow-hidden cursor-default">
                  {/* Left Side Highlight Line on Hover */}
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="flex-shrink-0 bg-slate-50 group-hover:bg-slate-800 p-4 rounded-xl text-slate-700 group-hover:text-white transition-all duration-500 mr-5 shadow-sm">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesPage;