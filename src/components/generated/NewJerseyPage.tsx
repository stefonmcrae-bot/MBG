"use client";

import React, { useEffect } from 'react';
import { CheckCircle, Clock, Shield, Phone, MapPin, Battery, Zap, Wrench, Award, DollarSign, Users, Car, Truck, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
export const NewJerseyPage = () => {
  useEffect(() => {
    document.title = 'Mobile Battery Guys New Jersey | 24/7 Battery Service North Jersey';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '24/7 mobile battery replacement and jump start service in North Jersey. Fast response, professional technicians serving Bergen, Hudson, Essex, Passaic, Union, and Morris counties.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = '24/7 mobile battery replacement and jump start service in North Jersey. Fast response, professional technicians serving Bergen, Hudson, Essex, Passaic, Union, and Morris counties.';
      document.head.appendChild(meta);
    }
  }, []);
  return <div className="font-sans text-[#0E0E0F] bg-white min-h-screen">
      <Header serviceArea="nj" />

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
              <Zap size={20} className="text-[#5AF08A]" />
              <span className="text-white font-bold">Serving North Jersey 24/7</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Dead Battery in NJ?<br />
              <span className="text-[#0E1117]">We're On Our Way!</span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Fast, reliable mobile battery replacement and jump start service throughout North Jersey
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="tel:9732519545" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#007BFF] to-[#18DBF1] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all">
                <Phone size={24} />
                Call Now: 973-251-9545
              </a>
              <a href="#services" onClick={e => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({
                behavior: 'smooth'
              });
            }} className="inline-flex items-center justify-center gap-3 bg-white text-[#007BFF] px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-slate-50">
                View Services
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Clock size={18} />
                <span className="font-medium">30-45 Min Response</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Shield size={18} />
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <DollarSign size={18} />
                <span className="font-medium">Upfront Pricing</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* North Jersey Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <MapPin size={48} className="mx-auto text-[#007BFF] mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              North Jersey Counties We Serve
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Professional mobile battery service throughout Northern New Jersey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[{
            county: 'Bergen County',
            cities: ['Hackensack', 'Paramus', 'Fort Lee', 'Englewood', 'Teaneck', 'Ridgewood']
          }, {
            county: 'Hudson County',
            cities: ['Jersey City', 'Hoboken', 'Union City', 'West New York', 'Bayonne', 'North Bergen']
          }, {
            county: 'Essex County',
            cities: ['Newark', 'East Orange', 'Irvington', 'Bloomfield', 'Montclair', 'Orange']
          }, {
            county: 'Passaic County',
            cities: ['Paterson', 'Clifton', 'Passaic', 'Wayne', 'Hawthorne', 'Totowa']
          }, {
            county: 'Union County',
            cities: ['Elizabeth', 'Union', 'Plainfield', 'Linden', 'Rahway', 'Summit']
          }, {
            county: 'Morris County',
            cities: ['Morristown', 'Parsippany', 'Dover', 'Madison', 'East Hanover', 'Denville']
          }].map((area, idx) => <motion.div key={area.county} initial={{
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
          }} className="bg-[#F5F7FA] rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#0E0E0F] mb-4 flex items-center gap-2">
                  <CheckCircle className="text-[#007BFF] flex-shrink-0" size={20} />
                  {area.county}
                </h3>
                <ul className="space-y-2 text-[#555A60]">
                  {area.cities.map(city => <li key={city} className="text-sm pl-4">• {city}</li>)}
                </ul>
              </motion.div>)}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#555A60] mb-6">
              Don't see your city listed? Call us—we cover all of North Jersey!
            </p>
            <a href="tel:9732519545" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#007BFF] to-[#18DBF1] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all">
              <Phone size={24} />
              Call 973-251-9545
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              Why North Jersey Drivers Choose Us
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              When your battery dies, you need help fast. Here's why thousands of NJ drivers trust us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            icon: Zap,
            title: 'Fast Response Time',
            description: 'We arrive in 30-45 minutes on average. No long waits—just quick, professional service.'
          }, {
            icon: Battery,
            title: 'Mobile Service',
            description: 'We come to your location—home, work, or roadside. No need to tow your vehicle.'
          }, {
            icon: Shield,
            title: 'Quality Batteries',
            description: 'Top-brand batteries with warranties. We only install batteries we trust.'
          }, {
            icon: DollarSign,
            title: 'Transparent Pricing',
            description: 'No hidden fees or surprise charges. You know the price before we start.'
          }].map((item, idx) => <motion.div key={item.title} initial={{
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
          }} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-xl flex items-center justify-center text-white mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0E0E0F] mb-3">{item.title}</h3>
                <p className="text-[#555A60] leading-relaxed">{item.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              Our New Jersey Services
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Comprehensive battery services for all vehicle types
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[{
            icon: Battery,
            title: 'Mobile Battery Replacement',
            description: 'Complete battery replacement service at your location. We test your system, install a new battery, and ensure everything is working perfectly.',
            features: ['Free battery testing', 'Professional installation', 'Battery disposal included', 'Warranty included'],
            link: '/nj-battery-service'
          }, {
            icon: Zap,
            title: 'Jump Start Service',
            description: 'Quick jump start to get you back on the road. If your battery can\'t hold a charge, we can replace it on the spot.',
            features: ['Fast 30-minute arrival', 'Safe jump procedure', 'Charging system check', 'Battery health assessment'],
            link: '/nj-jump-start'
          }].map((service, idx) => <motion.div key={service.title} initial={{
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
          }} className="bg-[#F5F7FA] rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow">
              {service.link ? <a href={service.link} className="block">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-2xl flex items-center justify-center text-white mb-6">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0E0E0F] mb-4">{service.title}</h3>
                  <p className="text-[#555A60] mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map(feature => <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="text-[#5AF08A] flex-shrink-0" size={20} />
                        <span className="text-[#555A60]">{feature}</span>
                      </li>)}
                  </ul>
                  <div className="mt-6 text-[#007BFF] font-semibold flex items-center gap-2">
                    Learn More →
                  </div>
                </a> : <></>}
            </motion.div>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              What North Jersey Customers Say
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            name: 'Mike R.',
            location: 'Jersey City, NJ',
            rating: 5,
            text: 'Best roadside service I\'ve ever used. Upfront pricing, no surprises, and the technician was incredibly helpful. Highly recommend!'
          }, {
            name: 'David P.',
            location: 'Paramus, NJ',
            rating: 5,
            text: 'Stuck in a mall parking lot with a dead battery. These guys showed up fast and had me running in 20 minutes. Professional service!'
          }, {
            name: 'Linda K.',
            location: 'Newark, NJ',
            rating: 5,
            text: 'Called them at 10 PM and they still came! Great service, fair pricing, and really nice technician. Will definitely use again.'
          }].map((testimonial, idx) => <motion.div key={testimonial.name} initial={{
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
          }} className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <svg key={i} className="w-5 h-5 text-[#5AF08A]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>)}
                </div>
                <p className="text-[#555A60] mb-4 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-bold text-[#0E0E0F]">{testimonial.name}</p>
                  <p className="text-sm text-[#555A60]">{testimonial.location}</p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
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
            <AlertCircle size={64} className="mx-auto text-white mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Stranded in New Jersey?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Don't wait! Our technicians are standing by 24/7 to help you get back on the road
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:9732519545" className="inline-flex items-center justify-center gap-3 bg-white text-[#007BFF] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl">
                <Phone size={24} />
                Emergency Call: 973-251-9545
              </a>
            </div>
            <p className="text-white/90 mt-6">
              Average arrival time: 30-45 minutes
            </p>
          </motion.div>
        </div>
      </section>

      {/* NYC Link Section */}
      <section className="py-12 bg-[#0E1117] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-lg text-slate-300 mb-2">
            <strong>Need battery service in NYC?</strong>
          </p>
          <p className="text-slate-300">
            <a href="/" className="text-[#5AF08A] hover:text-[#4BE07A] underline font-semibold">
              Visit our New York City service page
            </a>
          </p>
        </div>
      </section>

      <Footer serviceArea="nj" />
      <ScrollToTop />
    </div>;
};