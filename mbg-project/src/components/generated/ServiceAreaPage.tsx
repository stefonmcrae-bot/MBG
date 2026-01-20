"use client";

import React, { useEffect } from 'react';
import { MapPin, Phone, Clock, Shield, CheckCircle, Navigation, Zap, Car, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
export const ServiceAreaPage = () => {
  useEffect(() => {
    document.title = 'Service Areas | Mobile Battery Guys - NYC & NJ Coverage';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Mobile Battery Guys provides 24/7 mobile car battery replacement service throughout New York City and North Jersey. View our complete service area coverage map.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Mobile Battery Guys provides 24/7 mobile car battery replacement service throughout New York City and North Jersey. View our complete service area coverage map.';
      document.head.appendChild(meta);
    }
  }, []);
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
              <MapPin size={20} className="text-[#5AF08A]" />
              <span className="text-white font-bold">Complete NYC & NJ Coverage</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Where We Serve
            </h1>

            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              24/7 mobile battery service throughout New York City and North Jersey
            </p>

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
                <Navigation size={18} />
                <span className="font-medium">Live GPS Tracking</span>
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

      {/* Quick Links Section */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.a href="/" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-xl p-8 text-white hover:shadow-2xl transition-shadow">
              <Building2 size={40} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">New York City Service</h3>
              <p className="text-white/90 mb-4">Manhattan, Brooklyn, Queens, Bronx, Staten Island</p>
              <div className="flex items-center gap-2 text-white font-semibold">
                View NYC Coverage →
              </div>
            </motion.a>

            <motion.a href="/new-jersey" initial={{
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
          }} className="bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-xl p-8 text-white hover:shadow-2xl transition-shadow">
              <Car size={40} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">New Jersey Service</h3>
              <p className="text-white/90 mb-4">Bergen, Hudson, Essex, Passaic, Union, Morris</p>
              <div className="flex items-center gap-2 text-white font-semibold">
                View NJ Coverage →
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* NYC Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Building2 size={48} className="mx-auto text-[#007BFF] mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              New York City Coverage
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Complete mobile battery service across all five boroughs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[{
            borough: 'Manhattan',
            neighborhoods: ['Upper East Side', 'Upper West Side', 'Midtown', 'Chelsea', 'Greenwich Village', 'Lower East Side', 'Financial District', 'Harlem', 'Washington Heights', 'Inwood']
          }, {
            borough: 'Brooklyn',
            neighborhoods: ['Williamsburg', 'Park Slope', 'Brooklyn Heights', 'DUMBO', 'Bay Ridge', 'Sunset Park', 'Bushwick', 'Crown Heights', 'Flatbush', 'Bensonhurst']
          }, {
            borough: 'Queens',
            neighborhoods: ['Astoria', 'Long Island City', 'Flushing', 'Forest Hills', 'Jackson Heights', 'Elmhurst', 'Jamaica', 'Bayside', 'Ridgewood', 'Sunnyside']
          }, {
            borough: 'Bronx',
            neighborhoods: ['Riverdale', 'Fordham', 'Pelham Bay', 'Hunts Point', 'Mott Haven', 'Kingsbridge', 'Morris Park', 'Throgs Neck', 'City Island', 'Woodlawn']
          }, {
            borough: 'Staten Island',
            neighborhoods: ['St. George', 'Stapleton', 'New Dorp', 'Great Kills', 'Tottenville', 'Port Richmond', 'Mariners Harbor', 'Eltingville', 'Annadale', 'Charleston']
          }].map((area, idx) => <motion.div key={area.borough} initial={{
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
                  {area.borough}
                </h3>
                <ul className="space-y-2 text-[#555A60]">
                  {area.neighborhoods.map(neighborhood => <li key={neighborhood} className="text-sm pl-4">• {neighborhood}</li>)}
                </ul>
              </motion.div>)}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-[#F5F7FA] px-6 py-3 rounded-full border border-slate-200 mb-6">
              <Phone size={20} className="text-[#007BFF]" />
              <span className="text-[#555A60] font-medium">NYC Service Line:</span>
              <a href="tel:6466527085" className="text-[#007BFF] font-bold hover:text-[#18DBF1]">646-652-7085</a>
            </div>
          </div>
        </div>
      </section>

      {/* New Jersey Service Areas */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Car size={48} className="mx-auto text-[#007BFF] mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              North Jersey Coverage
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Professional mobile battery service throughout Northern New Jersey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[{
            county: 'Bergen County',
            cities: ['Hackensack', 'Paramus', 'Fort Lee', 'Englewood', 'Teaneck', 'Ridgewood', 'Fair Lawn', 'Bergenfield', 'Cliffside Park', 'Garfield']
          }, {
            county: 'Hudson County',
            cities: ['Jersey City', 'Hoboken', 'Union City', 'West New York', 'Bayonne', 'North Bergen', 'Secaucus', 'Weehawken', 'Guttenberg', 'Harrison']
          }, {
            county: 'Essex County',
            cities: ['Newark', 'East Orange', 'Irvington', 'Bloomfield', 'Montclair', 'Orange', 'Belleville', 'Nutley', 'West Orange', 'Maplewood']
          }, {
            county: 'Passaic County',
            cities: ['Paterson', 'Clifton', 'Passaic', 'Wayne', 'Hawthorne', 'Totowa', 'Little Falls', 'Pompton Lakes', 'Ringwood', 'West Milford']
          }, {
            county: 'Union County',
            cities: ['Elizabeth', 'Union', 'Plainfield', 'Linden', 'Rahway', 'Summit', 'Westfield', 'Cranford', 'Clark', 'Roselle']
          }, {
            county: 'Morris County',
            cities: ['Morristown', 'Parsippany', 'Dover', 'Madison', 'East Hanover', 'Denville', 'Morris Plains', 'Boonton', 'Rockaway', 'Mount Olive']
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
          }} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
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
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-slate-200 mb-6">
              <Phone size={20} className="text-[#007BFF]" />
              <span className="text-[#555A60] font-medium">NJ Service Line:</span>
              <a href="tel:9732519545" className="text-[#007BFF] font-bold hover:text-[#18DBF1]">973-251-9545</a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              What Makes Our Service Different
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Premium mobile battery service with features you won't find elsewhere
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            icon: Navigation,
            title: 'Live GPS Tracking',
            description: 'Track your technician in real-time after dispatch. No more wondering when help will arrive.'
          }, {
            icon: Clock,
            title: '30-45 Min Response',
            description: 'Fast arrival times throughout our entire service area, 24/7 including nights and weekends.'
          }, {
            icon: Zap,
            title: 'Battery Coding Experts',
            description: 'Professional battery coding and registration for European and luxury vehicles.'
          }, {
            icon: Shield,
            title: 'Licensed & Insured',
            description: 'Fully licensed and insured technicians with comprehensive training and expertise.'
          }].map((feature, idx) => <motion.div key={feature.title} initial={{
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
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0E0E0F] mb-3">{feature.title}</h3>
                <p className="text-[#555A60] leading-relaxed">{feature.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Don't See Your Area */}
      <section className="py-20 bg-gradient-to-br from-[#007BFF] to-[#18DBF1]">
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
            <MapPin size={56} className="mx-auto text-white mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Don't See Your Location?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              We're constantly expanding our service area. Call us to check if we can serve your location!
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
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              Service Area Questions
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Common questions about our coverage areas
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[{
            question: 'Do you really serve all five NYC boroughs?',
            answer: 'Yes! We provide complete coverage across Manhattan, Brooklyn, Queens, Bronx, and Staten Island. Our technicians are strategically positioned throughout the city for fast response times to any location.'
          }, {
            question: 'How far into New Jersey do you travel?',
            answer: 'We cover all of North Jersey including Bergen, Hudson, Essex, Passaic, Union, and Morris counties. This includes major cities like Jersey City, Newark, Hoboken, Paterson, and all surrounding areas.'
          }, {
            question: 'Is there a travel fee for service calls?',
            answer: 'Travel within our standard service area is included in our upfront pricing with no hidden fees. We provide transparent quotes before starting any work so you know exactly what to expect.'
          }, {
            question: 'Can you serve locations outside your listed areas?',
            answer: 'While we primarily focus on NYC and North Jersey, we may be able to accommodate nearby areas depending on availability. Give us a call and we\'ll let you know if we can help!'
          }, {
            question: 'Do you serve the airports?',
            answer: 'Yes! We provide service at JFK, LaGuardia, Newark Liberty, and all area airports including parking garages and terminal areas. Perfect for travelers with battery issues.'
          }, {
            question: 'What about service in parking garages?',
            answer: 'Absolutely! We regularly service vehicles in parking garages, underground lots, and covered structures throughout NYC and North Jersey. We bring all necessary equipment.'
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
            delay: idx * 0.05
          }} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-[#0E0E0F] mb-3">
                  {faq.question}
                </h3>
                <p className="text-[#555A60] leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>;
};