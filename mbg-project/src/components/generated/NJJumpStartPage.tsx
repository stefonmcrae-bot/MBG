"use client";

import React, { useEffect } from 'react';
import { CheckCircle, Clock, Shield, Phone, MapPin, Zap, DollarSign, Car, Truck, AlertCircle, Home, Building2, ShoppingBag, Train } from 'lucide-react';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
export const NJJumpStartPage = () => {
  useEffect(() => {
    document.title = 'Mobile Jump Start Service North Jersey | Car Jump Start NJ';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Fast mobile jump start service in North Jersey. We come to malls, train stations, your home, or office. Serving Bergen, Hudson, Essex, Passaic, Union, Morris counties. 30-45 min arrival.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Fast mobile jump start service in North Jersey. We come to malls, train stations, your home, or office. Serving Bergen, Hudson, Essex, Passaic, Union, Morris counties. 30-45 min arrival.';
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
              <Zap size={20} className="text-[#5AF08A]" />
              <span className="text-white font-bold">Mobile Jump Start Service North Jersey</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Car Won't Start in NJ?<br />
              <span className="text-[#0E1117]">We Jump Start Your Car</span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Fast mobile jump start service at malls, train stations, your home, office, or anywhere in North Jersey. Same day battery replacement near me available if needed.
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
                <span className="font-medium">60-90 Min Arrival</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Shield size={18} />
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Zap size={18} />
                <span className="font-medium">Fast Response</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <MapPin size={18} />
                <span className="font-medium">Track Live</span>
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
              Jump Start Service Anywhere in North Jersey
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Dead battery at the mall? Train station? Your home? We bring fast jump start service to your exact location
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            icon: ShoppingBag,
            title: 'Shopping Malls',
            description: 'Jump starts at Garden State Plaza, Willowbrook Mall, Jersey Gardens, Short Hills Mall, and all NJ shopping centers'
          }, {
            icon: Train,
            title: 'Train Station Parking',
            description: 'Fast service at commuter parking lots—Secaucus Junction, Hoboken Terminal, Newark Penn, and all NJ Transit stations'
          }, {
            icon: Home,
            title: 'At Your Home',
            description: 'Jump start service in your driveway, apartment complex, or residential street throughout North Jersey'
          }, {
            icon: Building2,
            title: 'Office & Workplaces',
            description: 'Service at corporate parking lots, office buildings, and business parks across Bergen, Essex, Hudson, and all counties'
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
                <strong className="text-[#0E0E0F] block mb-2">Popular NJ Jump Start Locations:</strong>
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
              Professional Jump Start Service in North Jersey
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Safe, fast jump start service with professional equipment—no towing required
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
                    <Zap className="text-[#007BFF]" size={28} />
                    Complete Service
                  </h3>
                  <ul className="space-y-3">
                    {['Professional jump start service', 'Battery health inspection', 'Charging system check', 'Safe jump procedure', 'Post-jump battery test', 'Expert recommendations', 'Fast 60-90 min arrival', '24/7 emergency service'].map(item => <li key={item} className="flex items-center gap-3">
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
                      <strong className="text-[#0E0E0F]">Need a Battery Replacement?</strong> If your battery won't hold a charge, we offer mobile battery replacement service anywhere in North Jersey, including AGM battery replacement and coded battery replacement service for luxury vehicles.
                    </p>
                  </div>
                  <div className="mt-6 p-4 bg-[#007BFF]/10 rounded-lg border border-[#007BFF]/20">
                    <p className="text-sm text-[#0E0E0F] font-semibold mb-1">
                      <Shield className="inline-block mr-2 text-[#007BFF]" size={16} />
                      Secure Payment Required
                    </p>
                    <p className="text-sm text-[#555A60]">
                      Payment is required to confirm your service and dispatch our closest technician to your location. This ensures priority response and guarantees your appointment.
                    </p>
                  </div>
                  <div className="mt-6 p-4 bg-[#5AF08A]/10 rounded-lg border border-[#5AF08A]/20">
                    <p className="text-sm text-[#0E0E0F] font-semibold mb-1">
                      <MapPin className="inline-block mr-2 text-[#007BFF]" size={16} />
                      Watch Your Technician Arrive
                    </p>
                    <p className="text-sm text-[#555A60]">
                      After dispatch, follow your technician's journey to your Garden State Plaza parking spot, train station, or Jersey location with live GPS updates. Know exactly when help will arrive.
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
              Fast, professional service built for New Jersey's unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            icon: Clock,
            title: 'No Tow Truck Needed',
            description: 'Save time and money—skip the tow truck. Whether you\'re at a mall, train station, or home, we come to you with professional equipment and get you running fast.'
          }, {
            icon: Shield,
            title: 'NJ-Experienced Technicians',
            description: 'Our techs know North Jersey inside and out—from busy mall parking lots to quiet residential streets. Licensed, insured, and professional service every time.'
          }, {
            icon: DollarSign,
            title: 'Upfront Pricing',
            description: 'No hidden fees or surprises. You\'ll get an upfront quote before we start. Competitive rates and honest service you can trust.'
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

      {/* Common Scenarios Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              Common Jump Start Situations in NJ
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              We handle all types of dead battery situations throughout North Jersey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[{
            title: 'After Shopping',
            description: 'Finished shopping at the mall and your car won\'t start? We provide fast jump starts at all North Jersey shopping centers.'
          }, {
            title: 'Train Commuters',
            description: 'Dead battery at the train station parking lot? We\'ll jump start your car so you can get home from your commute.'
          }, {
            title: 'Cold Weather',
            description: 'NJ winters are tough on batteries. If your car won\'t start in the cold, we\'ll come jump start it quickly.'
          }, {
            title: 'Left at Airport',
            description: 'Car sat at Newark Airport or long-term parking? Battery dead after your trip? We\'ll jump start it fast.'
          }, {
            title: 'Old Battery Issues',
            description: 'Battery struggling? We\'ll jump start your car and can replace it on-site if it won\'t hold a charge.'
          }, {
            title: 'Emergency Situations',
            description: 'Late for work? Family emergency? We provide fast emergency jump start service 24/7 throughout NJ.'
          }].map((scenario, idx) => <motion.div key={scenario.title} initial={{
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
                <h3 className="text-xl font-bold text-[#0E0E0F] mb-3 flex items-center gap-3">
                  <Zap className="text-[#007BFF]" size={24} />
                  {scenario.title}
                </h3>
                <p className="text-[#555A60] leading-relaxed">{scenario.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              All Vehicle Types Welcome
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              We provide jump start service for all makes, models, and vehicle types
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
          }} className="bg-[#F5F7FA] rounded-xl p-6 border border-slate-200 text-center hover:shadow-lg transition-shadow">
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
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              What North Jersey Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            name: 'Sarah T.',
            location: 'Paramus, NJ',
            rating: 5,
            text: 'Battery died at Garden State Plaza. They came so fast and had me running in 15 minutes. Super professional!'
          }, {
            name: 'Mike R.',
            location: 'Hoboken, NJ',
            rating: 5,
            text: 'Dead battery at the train station. Called these guys and they were there before I could find someone to give me a jump. Lifesavers!'
          }, {
            name: 'Jennifer L.',
            location: 'Wayne, NJ',
            rating: 5,
            text: 'Car wouldn\'t start at my office. They came quickly, jump started it, and even tested the battery. Great service!'
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
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-bold text-[#0E0E0F]">{testimonial.name}</p>
                  <p className="text-sm text-[#555A60]">{testimonial.location}</p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              North Jersey Jump Start FAQs
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Common questions about our mobile jump start service in North Jersey
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[{
            question: 'Can you jump start my car at a North Jersey mall?',
            answer: 'Yes! We regularly provide jump start service at all major NJ shopping centers including Garden State Plaza, Willowbrook Mall, Jersey Gardens, Short Hills Mall, and many others. We come right to your parking spot.'
          }, {
            question: 'Do you provide jump starts at NJ Transit train stations?',
            answer: 'Absolutely! We frequently help commuters whose batteries died at train station parking lots including Secaucus Junction, Hoboken Terminal, Newark Penn Station, and other NJ Transit locations throughout North Jersey.'
          }, {
            question: 'How quickly can you reach me in North Jersey?',
            answer: 'We typically arrive within 60-90 minutes throughout Bergen, Hudson, Essex, Passaic, Union, and Morris counties. The actual jump start usually takes just 10-15 minutes once we arrive.'
          }, {
            question: 'What if my battery needs to be replaced after the jump start?',
            answer: 'If your battery won\'t hold a charge, we can replace it on the spot. We carry OEM-quality batteries and can perform battery coding for European and luxury vehicles that require it.'
          }, {
            question: 'Is 24/7 jump start service really available in NJ?',
            answer: 'Yes! We provide round-the-clock mobile jump start service throughout North Jersey. Whether you need help at 2 AM or during a holiday, we\'re available to assist you.'
          }, {
            question: 'How much does jump start service cost in North Jersey?',
            answer: 'We provide transparent, upfront pricing with no hidden fees. Jump start service is typically much more affordable than towing. If battery replacement is needed, we\'ll give you a quote before proceeding.'
          }, {
            question: 'Can I track my technician in real-time?',
            answer: 'Yes! After confirming your service, you\'ll receive a live GPS tracking link. Watch your technician navigate Route 4, local streets, or the Turnpike to your exact location at a Paramus mall, Hoboken street, or anywhere in NJ.'
          }, {
            question: 'What counties in North Jersey do you serve for jump starts?',
            answer: 'We cover all major North Jersey counties including Bergen, Hudson, Essex, Passaic, Union, and Morris. From Paramus to Newark, Jersey City to Wayne, we serve the entire North Jersey region.'
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
          }} className="bg-[#F5F7FA] rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
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
              Call now for fast mobile jump start service. Whether you\'re at a mall, train station, or anywhere else, we\'ll come to you.
            </p>
            <a href="tel:9732519545" className="inline-flex items-center justify-center gap-3 bg-white text-[#007BFF] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl">
              <Phone size={24} />
              Call 973-251-9545
            </a>
            <p className="text-white/90 mt-6">
              24/7 Service • All North Jersey • 60-90 Min Arrival
            </p>
          </motion.div>
        </div>
      </section>

      <Footer serviceArea="nj" />
      <ScrollToTop />
    </div>;
};