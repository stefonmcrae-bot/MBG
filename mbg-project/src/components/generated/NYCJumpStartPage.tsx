"use client";

import React, { useEffect } from 'react';
import { CheckCircle, Clock, Shield, Phone, MapPin, Zap, DollarSign, Car, Truck, AlertCircle, Home, Building2, Briefcase, ParkingCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
export const NYCJumpStartPage = () => {
  useEffect(() => {
    document.title = 'Mobile Jump Start Service NYC | 24/7 Car Jump Start New York City';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Fast mobile jump start service in NYC. We come to your location in Manhattan, Brooklyn, Queens, Bronx, or Staten Island. 30-45 min arrival. 24/7 emergency jump starts.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Fast mobile jump start service in NYC. We come to your location in Manhattan, Brooklyn, Queens, Bronx, or Staten Island. 30-45 min arrival. 24/7 emergency jump starts.';
      document.head.appendChild(meta);
    }
  }, []);
  return <div className="font-sans text-[#0E0E0F] bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#007BFF] via-[#0D8EE0] to-[#18DBF1]">
        {/* NYC Skyline Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/90 via-[#0D8EE0]/90 to-[#18DBF1]/90" />
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
              <span className="text-white font-bold">Mobile Jump Start Service NYC</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Dead Battery in NYC?<br />
              <span className="text-[#0E1117]">We Jump Start Your Car</span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Fast mobile jump start service anywhere in Manhattan, Brooklyn, Queens, Bronx, or Staten Island. We come to you—no tow truck needed. Same day battery replacement near me if your battery won't hold a charge.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="tel:6466527085" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#007BFF] to-[#18DBF1] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all">
                <Phone size={24} />
                Call Now: 646-652-7085
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
                <span className="font-medium">GPS Tracking</span>
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

      {/* NYC-Specific Locations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              Jump Start Service Anywhere in NYC
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Dead battery? We bring professional jump start service to your exact location in New York City
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            icon: Home,
            title: 'Residential Areas',
            description: 'Jump start service at your home, apartment building, or street parking anywhere in NYC'
          }, {
            icon: Building2,
            title: 'Office & Commercial',
            description: 'Fast service in Manhattan office buildings, parking garages, and commercial districts'
          }, {
            icon: ParkingCircle,
            title: 'Parking Garages',
            description: 'We work in NYC parking structures—from Midtown garages to outer borough facilities'
          }, {
            icon: MapPin,
            title: 'Curbside Service',
            description: 'Stranded on a NYC street? We come to you and jump start your car on-site'
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
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              Professional Jump Start Service in NYC
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Fast, safe, and reliable jump start service with professional equipment and experienced technicians
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
                    What's Included
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
                    All 5 Boroughs
                  </h3>
                  <ul className="space-y-3">
                    {['Manhattan—Downtown to Uptown', 'Brooklyn—all neighborhoods', 'Queens—Astoria to Far Rockaway', 'Bronx—complete coverage', 'Staten Island—full service', 'Plus nearby areas in NJ'].map(area => <li key={area} className="flex items-center gap-3">
                        <CheckCircle className="text-[#5AF08A] flex-shrink-0" size={20} />
                        <span className="text-[#555A60]">{area}</span>
                      </li>)}
                  </ul>
                  <div className="mt-6 p-4 bg-[#F5F7FA] rounded-lg">
                    <p className="text-sm text-[#555A60]">
                      <strong className="text-[#0E0E0F]">Need a Battery Replacement?</strong> If your battery won't hold a charge, we offer mobile battery replacement service anywhere in NYC, including AGM battery replacement and coded battery replacement service for European vehicles.
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
                      See Your Rescue Coming
                    </p>
                    <p className="text-sm text-[#555A60]">
                      Stranded with a dead battery? Track your technician's arrival in real-time via GPS. Watch them navigate NYC streets to your exact location—peace of mind when you need it most.
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
              Why NYC Drivers Choose Our Jump Start Service
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Fast, professional service designed for New York City's unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            icon: Clock,
            title: 'No Tow Truck Required',
            description: 'Save time and money—skip the tow truck. We come to your location in NYC with professional jump start equipment and get you running fast.'
          }, {
            icon: Shield,
            title: 'NYC-Experienced Technicians',
            description: 'Our techs navigate NYC daily—from tight Manhattan parking garages to busy Brooklyn streets. Licensed, insured, and professional.'
          }, {
            icon: DollarSign,
            title: 'Upfront Pricing',
            description: 'Know the cost before we start. No hidden fees, no surprises. Just honest, affordable jump start service when you need it most.'
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
              Common Jump Start Situations in NYC
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              We handle all types of dead battery situations across New York City
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[{
            title: 'Left Lights On',
            description: 'Accidentally left your headlights or interior lights on while parked in NYC? We provide fast jump starts to get you going.'
          }, {
            title: 'Old Battery',
            description: 'Battery struggling in NYC weather extremes? We\'ll jump start your car and can replace the battery on-site if needed.'
          }, {
            title: 'Cold Weather',
            description: 'NYC winters can drain batteries overnight. Fast jump start service gets you back on the road quickly.'
          }, {
            title: 'After Vacation',
            description: 'Car sat in a NYC parking garage while traveling? Dead battery after returning? We\'ll jump start it fast.'
          }, {
            title: 'Alternator Issues',
            description: 'Battery keeps dying? We\'ll diagnose potential alternator or charging system issues during service.'
          }, {
            title: 'Emergency Situations',
            description: 'Late for work in Manhattan? Emergency in Queens? We provide fast emergency jump start service 24/7.'
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
              All Vehicle Types
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

      {/* CTA Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              NYC Jump Start Service FAQs
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Common questions about our mobile jump start service in New York City
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[{
            question: 'How fast can you jump start my car in NYC?',
            answer: 'We typically arrive within 60-90 minutes anywhere in Manhattan, Brooklyn, Queens, Bronx, or Staten Island. Once we arrive, the jump start process usually takes just 10-15 minutes.'
          }, {
            question: 'Can you jump start my car in a Manhattan parking garage?',
            answer: 'Yes! We regularly provide jump start service in NYC parking garages, both above and below ground. From Midtown Manhattan high-rises to Brooklyn parking structures, we come to your exact parking spot.'
          }, {
            question: 'What if my battery won\'t hold a charge after the jump start?',
            answer: 'If your battery can\'t hold a charge, we can replace it on the spot with a new battery. For European vehicles, we include proper battery coding and registration using professional diagnostic equipment.'
          }, {
            question: 'Do you provide jump starts on NYC streets?',
            answer: 'Absolutely! Whether you\'re stuck on a Manhattan avenue, Brooklyn street, or anywhere in NYC, we bring our mobile jump start service to your curbside location. No need to move your vehicle.'
          }, {
            question: 'Is jump start service available 24/7 in NYC?',
            answer: 'Yes! We offer 24/7 emergency jump start service throughout all five boroughs. Whether it\'s 3 AM or rush hour, we\'re available to help get you back on the road.'
          }, {
            question: 'How much does a jump start cost in NYC?',
            answer: 'We provide upfront pricing with no hidden fees. Jump start service is typically much less expensive than towing your vehicle. If you need a battery replacement, we\'ll give you a quote before proceeding.'
          }, {
            question: 'Can I track my technician coming to my NYC location?',
            answer: 'Yes! After booking, you\'ll receive a live GPS tracking link so you can watch your technician navigate NYC traffic to your location. You\'ll see their route and estimated arrival time in real-time.'
          }, {
            question: 'What payment methods do you accept for jump start service?',
            answer: 'We accept all major credit and debit cards. Payment is processed securely to confirm your service and dispatch the nearest available technician to your NYC location.'
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Real stories from NYC drivers we've helped get back on the road
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            name: 'Jessica M.',
            location: 'Midtown Manhattan',
            rating: 5,
            text: 'Battery died in a parking garage during a meeting. Called for a jump start and they were there in 30 minutes. Got me running and even tested my battery—turns out I needed a replacement. Great service!'
          }, {
            name: 'Carlos R.',
            location: 'Williamsburg, Brooklyn',
            rating: 5,
            text: 'Left my lights on overnight on a Brooklyn street. Dead battery in the morning before work. These guys came super fast, jumped my car, and I made it to work on time. Lifesavers!'
          }, {
            name: 'Amanda K.',
            location: 'Flushing, Queens',
            rating: 5,
            text: 'Car wouldn\'t start at the mall parking lot in Queens. Searched for jump start service near me and found them. Quick response, friendly technician, and very reasonable price. Highly recommend!'
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
              Need a Jump Start in NYC?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Call now for fast mobile jump start service. We\'ll come to your location anywhere in NYC and get you running in minutes.
            </p>
            <a href="tel:6466527085" className="inline-flex items-center justify-center gap-3 bg-white text-[#007BFF] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl">
              <Phone size={24} />
              Call 646-652-7085
            </a>
            <p className="text-white/90 mt-6">
              24/7 Service • All 5 Boroughs • 60-90 Min Arrival
            </p>
          </motion.div>
        </div>
      </section>

      <Footer serviceArea="nyc" />
      <ScrollToTop />
    </div>;
};