import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  // Form ka data yahan save hoga
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'VFD & AC Drive Repair', // Default service
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // WhatsApp par message bhejne ka function
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Message ka design (WhatsApp format me)
    const text = `Hello Shree Shyam Electrical,%0A%0AWebsite se ek nayi inquiry aayi hai:%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service Needed:* ${formData.service}%0A*Message:* ${formData.message}%0A%0AKripya mujhse contact karein.`;
    
    // Yahan aapka direct WhatsApp link generate hoga
    const whatsappURL = `https://wa.me/919260923529?text=${text}`;
    
    // Naye tab me WhatsApp kholne ke liye
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="animate-fade-in bg-gray-50 pb-20">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold uppercase tracking-tight mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Get in touch for rapid industrial electrical solutions and quotes.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start">
              <div className="bg-blue-50 p-3 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Our Location</h3>
                <p className="text-gray-600 text-sm">Baanke Colony, Near Sersa Kundali, Sonipat<br />Haryana Lakhmi Piou,Janti Road, opp. Police Station, Kundali,<br />PIN Code: 131028</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start">
              <div className="bg-blue-50 p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Call Us 24/7</h3>
                <p className="text-gray-600 text-sm">+91 9587742574</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start">
              <div className="bg-blue-50 p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                <p className="text-gray-600 text-sm">Kartikarvind52@gmail.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start">
              <div className="bg-blue-50 p-3 rounded-full mr-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Working Hours</h3>
                <p className="text-gray-600 text-sm">Monday - Saturday<br />9:00 AM - 8:00 PM</p>
                <p className="text-xs text-red-500 font-medium mt-1">24/7 Emergency Support Available</p>
              </div>
            </div>
          </div>

          {/* Smart WhatsApp Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-gray-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-gray-50"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-gray-50"
                  >
                    <option value="PLC Repair & Programming">PLC Repair & Programming</option>
                    <option value="VFD & AC Drive Repair">VFD & AC Drive Repair</option>
                    <option value="Complete Building Wiring">Complete Building Wiring</option>
                    <option value="Control Panel Troubleshooting">Control Panel Troubleshooting</option>
                    <option value="Other Inquiry">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message Description</label>
                  <textarea 
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-gray-50 resize-none"
                    placeholder="Please describe the machine issue or requirement..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-md transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/30"
                >
                  <Send className="h-5 w-5" />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;