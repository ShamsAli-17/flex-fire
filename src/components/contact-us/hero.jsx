'use client';

import React, { useState } from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import emailjs from '@emailjs/browser'; // Import EmailJS

const HeroWithForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Replace these with your actual EmailJS credentials
    const serviceID = 'service_2a78djl';
    const templateID = 'template_yy6po67';
    const publicKey = '2vplis9ALSAoul6Qn';
    
    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        // Reset form
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-red-600 via-red-600 to-red-600 overflow-hidden"
        style={{ backgroundImage: "url('/contact.jpg')" }}  // Add the background image from the public folder
      >
        {/* Background overlay with subtle pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight mt-25">
            Contact us
          </h1>
          <p className="text-lg md:text-xl text-red-100 max-w-2xl leading-relaxed">
            Kaspersky is ready to provide the right solution according to your needs.
          </p>
        </div>
      </section>

      {/* Overlapping Contact Form Section */}
      <section className="relative -mt-32 pb-16 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-6xl mx-auto overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Get in touch */}
              <div className="p-8 lg:p-12 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in touch</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Building strong working relationships with efficient internal 
                    networks adds the added differentiator.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Head Office */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Head Office</h3>
                      <p className="text-gray-600 text-sm">
                        New White House Building No. 3<br />
                        Ground Floor
                      </p>
                    </div>
                  </div>

                  {/* Email Us */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                      <p className="text-gray-600 text-sm">
                        support@flexfire.com<br />
                        sales@flexfire.com
                      </p>
                    </div>
                  </div>

                  {/* Call Us */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                      <p className="text-gray-600 text-sm">
                        Phone - +[234] 7000-7890<br />
                        Fax - +[234] 7000-7890
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">Follow our social media</h3>
                  <div className="flex space-x-3">
                    <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                      <Youtube className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="bg-gray-50 p-8 lg:p-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-800"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-800"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-800"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-800"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-vertical bg-white text-gray-800"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroWithForm;