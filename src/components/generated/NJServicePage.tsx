"use client";

import React, { useEffect } from 'react';
import { CheckCircle, Clock, Shield, Phone, MapPin, Battery, Zap, DollarSign, Car, Truck, AlertCircle, Home, Building2, ShoppingBag, Train } from 'lucide-react';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
export const NJServicePage = () => {
  useEffect(() => {
    document.title = 'Mobile Battery Replacement North Jersey | On-Site Car Battery Service NJ';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Mobile battery replacement service in North Jersey. We come to malls, train station parking lots, your home, or office. Fast service in Bergen, Hudson, Essex, Passaic, Union, Morris counties.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Mobile battery replacement service in North Jersey. We come to malls, train station parking lots, your home, or office. Fast service in Bergen, Hudson, Essex, Passaic, Union, Morris counties.';
      document.head.appendChild(meta);
    }
  }, []);
  return <div className="font-sans text-[#0E0E0F] bg-white min-h-screen">
      <Header serviceArea="nj" logoLink="/new-jersey" />

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
              <Battery size={20} className="text-[#5AF08A]" />
              <span className="text-white font-bold">Mobile Battery Service North Jersey</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Car Battery Dead in NJ?<br />
              <span className="text-[#0E1117]">We Come To You!</span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Mobile battery replacement at malls, train stations, your home, office, or anywhere in North Jersey
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="tel:9732519545" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#007BFF] to-[#18DBF1] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all">
                <Phone size={24} />
                Call Now: 973-251-9545
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Clock size={18} />
                <span className="font-medium">30-45 Min Arrival</span>
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

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* NJ-Specific Locations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              We Come To You—Anywhere in North Jersey
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Dead battery at the mall? Train station parking lot? Your driveway? We bring professional battery replacement service to your exact location
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            icon: ShoppingBag,
            title: 'Shopping Malls',
            description: 'Garden State Plaza, Willowbrook Mall, Jersey Gardens, Short Hills Mall—we service all NJ malls'
          }, {
            icon: Train,
            title: 'Train Station Parking',
            description: 'Commuter parking lots at Secaucus Junction, Hoboken Terminal, Newark Penn Station, and all NJ Transit stations'
          }, {
            icon: Home,
            title: 'At Your Home',
            description: 'Battery replacement in your driveway, apartment complex, or residential street anywhere in North Jersey'
          }, {
            icon: Building2,
            title: 'Office & Workplaces',
            description: 'Corporate parking lots, office buildings, and business parks throughout Bergen, Essex, Hudson, and all counties'
          }].map((location, idx) => <motion.div key={location.title} initial={{
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
                <div className="w-12 h-12 bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-xl flex items-center justify-center text-white mb-4">
                  <location.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0E0E0F] mb-3">{location.title}</h3>
                <p className="text-[#555A60] leading-relaxed">{location.description}</p>
              </motion.div>)}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-[#F5F7FA] rounded-xl p-6 border border-slate-200">
              <p className="text-[#555A60] mb-2">
                <strong className="text-[#0E0E0F] block mb-2">Popular NJ Service Locations Include:</strong>
                Paramus parking lots • Jersey City garages • Hoboken streets • Newark Airport cell phone lot • Clifton shopping centers • Wayne office parks • Montclair residential areas • Fort Lee apartment complexes • And everywhere else in North Jersey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              Mobile Battery Replacement Service in North Jersey
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Professional on-site battery installation—no towing, no hassle, just fast service at your location
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#0E0E0F] mb-6 flex items-center gap-3">
                    <Battery className="text-[#007BFF]" size={28} />
                    Complete Service
                  </h3>
                  <ul className="space-y-3">
                    {['Free battery testing and diagnosis', 'Premium battery installation', 'Charging system check', 'Terminal cleaning and protection', 'Old battery recycling included', 'Parts and labor warranty', 'Same-day service available', 'Average service time: 30-45 min'].map(item => <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="text-[#5AF08A] flex-shrink-0" size={20} />
                        <span className="text-[#555A60]">{item}</span>
                      </li>)}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#0E0E0F] mb-6 flex items-center gap-3">
                    <MapPin className="text-[#007BFF]" size={28} />
                    Counties We Serve
                  </h3>
                  <ul className="space-y-3">
                    {['Bergen County—Hackensack, Paramus, Fort Lee, Ridgewood', 'Hudson County—Jersey City, Hoboken, Union City', 'Essex County—Newark, Montclair, East Orange', 'Passaic County—Paterson, Clifton, Wayne', 'Union County—Elizabeth, Union, Plainfield', 'Morris County—Morristown, Parsippany, Dover'].map(area => <li key={area} className="flex items-start gap-3">
                        <CheckCircle className="text-[#5AF08A] flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-[#555A60] text-sm">{area}</span>
                      </li>)}
                  </ul>
                  <div className="mt-6 p-4 bg-[#F5F7FA] rounded-lg">
                    <p className="text-sm text-[#555A60]">
                      <strong className="text-[#0E0E0F]">Common Service Areas:</strong> We regularly serve customers at Garden State Plaza, Bergen Town Center, Newport Centre Mall, Willowbrook Mall, Secaucus Junction, Hoboken Terminal, and countless other locations across North Jersey.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              Why North Jersey Drivers Choose Us
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Convenient, professional service built for New Jersey's unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            icon: Clock,
            title: 'No Tow Truck Needed',
            description: 'Skip the towing expense and hassle. Whether you\'re at a mall, train station, or home, we come to you with everything needed to replace your battery on-site.'
          }, {
            icon: Shield,
            title: 'NJ-Experienced Technicians',
            description: 'Our techs know North Jersey inside and out—from busy mall parking lots to tight residential streets. Licensed, insured, and professional service every time.'
          }, {
            icon: DollarSign,
            title: 'Transparent Pricing',
            description: 'No hidden fees or surprises. You\'ll get an upfront quote before we start. Competitive rates and honest service you can count on.'
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
          }} className="bg-[#F5F7FA] rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-2xl flex items-center justify-center text-white mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#0E0E0F] mb-3">{item.title}</h3>
                <p className="text-[#555A60] leading-relaxed">{item.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              All Vehicle Types Welcome
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              We service batteries for all makes, models, and vehicle types
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            icon: Car,
            title: 'Cars & Sedans',
            description: 'All passenger vehicles'
          }, {
            icon: Truck,
            title: 'Trucks & SUVs',
            description: 'Light to heavy-duty trucks'
          }, {
            icon: Car,
            title: 'Vans & Minivans',
            description: 'Commercial and personal'
          }, {
            icon: Truck,
            title: 'Commercial Fleet',
            description: 'Fleet service available'
          }].map((vehicle, idx) => <motion.div key={vehicle.title} initial={{
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
          }} className="bg-white rounded-xl p-6 border border-slate-200 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  <vehicle.icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-[#0E0E0F] mb-2">{vehicle.title}</h3>
                <p className="text-[#555A60] text-sm">{vehicle.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              What North Jersey Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            name: 'David P.',
            location: 'Paramus, NJ',
            rating: 5,
            text: 'Stuck at Garden State Plaza with a dead battery. They showed up fast and had me running in 20 minutes. Professional and friendly!'
          }, {
            name: 'Lisa M.',
            location: 'Hoboken, NJ',
            rating: 5,
            text: 'Dead battery at the train station parking lot. Called these guys and they were there before my train arrived. Saved my commute!'
          }, {
            name: 'Robert K.',
            location: 'Wayne, NJ',
            rating: 5,
            text: 'Great service at my office parking lot. Fast, professional, and fair pricing. Will definitely use them again.'
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
          }} className="bg-[#F5F7FA] rounded-xl p-8 border border-slate-200 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <svg key={i} className="w-5 h-5 text-[#5AF08A]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>)}
                </div>
                <p className="text-[#555A60] mb-4 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-bold text-[#0E0E0F]">{testimonial.name}</p>
                  <p className="text-sm text-[#555A60]">{testimonial.location}</p>
                </div>
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
            <AlertCircle size={64} className="mx-auto text-white mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Stranded in North Jersey?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Call now for fast mobile battery replacement. Whether you're at a mall, train station, or anywhere else, we'll come to you.
            </p>
            <a href="tel:9732519545" className="inline-flex items-center justify-center gap-3 bg-white text-[#007BFF] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl">
              <Phone size={24} />
              Call 973-251-9545
            </a>
            <p className="text-white/90 mt-6">
              24/7 Service • All North Jersey • 30-45 Min Arrival
            </p>
          </motion.div>
        </div>
      </section>

      <Footer serviceArea="nj" />
      <ScrollToTop />
    </div>;
};