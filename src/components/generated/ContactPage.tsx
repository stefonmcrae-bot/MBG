"use client";

import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Battery, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: '',
    serviceType: 'battery-replacement',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  useEffect(() => {
    document.title = 'Contact Mobile Battery Guys | 24/7 Battery Service NYC & NJ';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Mobile Battery Guys for fast, reliable mobile battery replacement and jump start service in NYC and North Jersey. Call 646-652-7085 (NYC) or 973-251-9545 (NJ).');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Contact Mobile Battery Guys for fast, reliable mobile battery replacement and jump start service in NYC and North Jersey. Call 646-652-7085 (NYC) or 973-251-9545 (NJ).';
      document.head.appendChild(meta);
    }
  }, []);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        message: '',
        serviceType: 'battery-replacement',
        vehicleYear: '',
        vehicleMake: '',
        vehicleModel: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };
  return <div className="font-sans text-[#0E0E0F] bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#007BFF] via-[#0D8EE0] to-[#18DBF1]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/30">
              <MessageSquare size={20} className="text-[#5AF08A]" />
              <span className="text-white font-bold">Get In Touch</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Contact Us for<br />
              <span className="text-[#0E1117]">Fast Battery Service</span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Available 24/7 for emergency battery replacement and jump start service throughout NYC and North Jersey
            </p>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <AlertCircle size={48} className="mx-auto text-[#007BFF] mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#0E0E0F] mb-3">
              Need Immediate Help?
            </h2>
            <p className="text-lg text-[#555A60] mb-6">
              For emergency battery service, call us directly for fastest response
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.a href="tel:6466527085" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="bg-gradient-to-r from-[#007BFF] to-[#18DBF1] rounded-xl p-8 text-white hover:shadow-2xl transition-all block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-white/80">New York City</div>
                  <div className="text-2xl font-bold">646-652-7085</div>
                </div>
              </div>
              <p className="text-white/90 text-sm">
                Serving all 5 boroughs • 24/7 Emergency Service
              </p>
            </motion.a>

            <motion.a href="tel:9732519545" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="bg-gradient-to-r from-[#007BFF] to-[#18DBF1] rounded-xl p-8 text-white hover:shadow-2xl transition-all block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-white/80">North Jersey</div>
                  <div className="text-2xl font-bold">973-251-9545</div>
                </div>
              </div>
              <p className="text-white/90 text-sm">
                Serving 6 NJ counties • 24/7 Emergency Service
              </p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                <h2 className="text-3xl font-bold text-[#0E0E0F] mb-6 flex items-center gap-3">
                  <Send className="text-[#007BFF]" size={32} />
                  Send Us a Message
                </h2>
                <p className="text-[#555A60] mb-8">
                  Fill out the form below and we'll get back to you as soon as possible. For emergency service, please call us directly.
                </p>

                {submitStatus === 'success' && <div className="mb-6 p-4 bg-[#5AF08A]/10 border border-[#5AF08A] rounded-lg flex items-center gap-3">
                    <CheckCircle className="text-[#5AF08A] flex-shrink-0" size={24} />
                    <div>
                      <p className="text-[#0E0E0F] font-semibold">Message sent successfully!</p>
                      <p className="text-[#555A60] text-sm">We'll get back to you soon.</p>
                    </div>
                  </div>}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#0E0E0F] mb-2">
                      Full Name *
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-[#0E0E0F]" placeholder="John Doe" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#0E0E0F] mb-2">
                        Email Address *
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-[#0E0E0F]" placeholder="john@example.com" />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#0E0E0F] mb-2">
                        Phone Number *
                      </label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-[#0E0E0F]" placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="location" className="block text-sm font-semibold text-[#0E0E0F] mb-2">
                        Location *
                      </label>
                      <input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-[#0E0E0F]" placeholder="Manhattan, NYC" />
                    </div>

                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-semibold text-[#0E0E0F] mb-2">
                        Service Type *
                      </label>
                      <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleInputChange} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-[#0E0E0F] bg-white">
                        <option value="battery-replacement">Battery Replacement</option>
                        <option value="jump-start">Jump Start Service</option>
                        <option value="fleet-service">Fleet Service</option>
                        <option value="general-inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0E0E0F] mb-3">
                      Vehicle Information
                    </label>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="vehicleYear" className="block text-xs font-medium text-[#555A60] mb-2">
                          Year
                        </label>
                        <input type="text" id="vehicleYear" name="vehicleYear" value={formData.vehicleYear} onChange={handleInputChange} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-[#0E0E0F]" placeholder="2020" />
                      </div>

                      <div>
                        <label htmlFor="vehicleMake" className="block text-xs font-medium text-[#555A60] mb-2">
                          Make
                        </label>
                        <input type="text" id="vehicleMake" name="vehicleMake" value={formData.vehicleMake} onChange={handleInputChange} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-[#0E0E0F]" placeholder="Honda" />
                      </div>

                      <div>
                        <label htmlFor="vehicleModel" className="block text-xs font-medium text-[#555A60] mb-2">
                          Model
                        </label>
                        <input type="text" id="vehicleModel" name="vehicleModel" value={formData.vehicleModel} onChange={handleInputChange} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-[#0E0E0F]" placeholder="Accord" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#0E0E0F] mb-2">
                      Message *
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-[#0E0E0F] resize-none" placeholder="Tell us about your battery needs..." />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#007BFF] to-[#18DBF1] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3">
                    {isSubmitting ? <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </> : <>
                        <Send size={20} />
                        Send Message
                      </>}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-[#0E0E0F] mb-6">
                  Contact Information
                </h2>
                <p className="text-[#555A60] leading-relaxed mb-8">
                  We're here to help 24/7. Whether you need emergency battery service or have questions about our services, we're just a call away.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0E0E0F] mb-2">Phone Numbers</h3>
                    <p className="text-[#555A60] mb-2">
                      <strong>NYC:</strong> <a href="tel:6466527085" className="text-[#007BFF] hover:text-[#0D8EE0]">646-652-7085</a>
                    </p>
                    <p className="text-[#555A60]">
                      <strong>NJ:</strong> <a href="tel:9732519545" className="text-[#007BFF] hover:text-[#0D8EE0]">973-251-9545</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0E0E0F] mb-2">Email</h3>
                    <a href="mailto:info@mobilebatteryguys.com" className="text-[#007BFF] hover:text-[#0D8EE0]">
                      info@mobilebatteryguys.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0E0E0F] mb-2">Hours</h3>
                    <p className="text-[#555A60]">
                      24 Hours a Day, 7 Days a Week<br />
                      Including Holidays
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0E0E0F] mb-2">Service Areas</h3>
                    <p className="text-[#555A60] mb-2">
                      <strong>NYC:</strong> All 5 Boroughs
                    </p>
                    <p className="text-[#555A60]">
                      <strong>NJ:</strong> Bergen, Hudson, Essex, Passaic, Union, Morris Counties
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#007BFF] to-[#18DBF1] rounded-xl p-8 text-white">
                <Battery size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-3">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {['30-45 minute average response time', 'Licensed and insured technicians', 'Transparent, upfront pricing', 'Top-brand batteries with warranties', '24/7 emergency service available'].map((item, idx) => <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="text-[#5AF08A] flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>)}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Common questions about our mobile battery service
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[{
            question: 'How quickly can you get to my location?',
            answer: 'On average, we arrive within 30-45 minutes in both NYC and North Jersey. During emergencies, we prioritize the fastest response possible.'
          }, {
            question: 'Do you service all makes and models?',
            answer: 'Yes! We service all vehicle makes and models, including cars, trucks, SUVs, vans, and commercial vehicles.'
          }, {
            question: 'What are your service rates?',
            answer: 'We provide transparent, upfront pricing with no hidden fees. Call us for a quote specific to your vehicle and location. Our prices are competitive and include battery, installation, and disposal.'
          }, {
            question: 'Are you really available 24/7?',
            answer: 'Absolutely! We operate 24 hours a day, 7 days a week, including holidays. Battery problems don\'t follow a schedule, and neither do we.'
          }, {
            question: 'Do you provide warranties on batteries?',
            answer: 'Yes, all our batteries come with manufacturer warranties. We only use top-brand batteries to ensure reliability and longevity.'
          }].map((faq, idx) => <motion.div key={idx} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: idx * 0.1
          }} className="bg-[#F5F7FA] rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-[#0E0E0F] mb-3">
                  {faq.question}
                </h3>
                <p className="text-[#555A60] leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#007BFF] to-[#18DBF1]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <Battery size={64} className="mx-auto text-white mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Call us now for immediate assistance or use the form above to send us a message
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:6466527085" className="inline-flex items-center justify-center gap-3 bg-white text-[#007BFF] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl">
                <Phone size={24} />
                NYC: 646-652-7085
              </a>
              <a href="tel:9732519545" className="inline-flex items-center justify-center gap-3 bg-white text-[#007BFF] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl">
                <Phone size={24} />
                NJ: 973-251-9545
              </a>
            </div>
            <p className="text-white/90 mt-6">
              Available 24/7 • Fast Response • Professional Service
            </p>
          </motion.div>
        </div>
      </section>

      <Footer serviceArea="nyc" />
      <ScrollToTop />
    </div>;
};