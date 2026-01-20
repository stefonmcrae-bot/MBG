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
              Mobile Battery Replacement Service NJ<br />
              <span className="text-[#0E1117]">We Come To You!</span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Same day battery replacement near me at malls, train stations, your home, or office. Professional mobile car battery replacement service anywhere in North Jersey—Bergen, Hudson, Essex, and surrounding counties.
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
                <DollarSign size={18} />
                <span className="font-medium">Upfront Pricing</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <MapPin size={18} />
                <span className="font-medium">Live Tech Tracking</span>
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
            description: 'On-site car battery replacement at Garden State Plaza, Willowbrook Mall, Jersey Gardens, Short Hills Mall—mobile battery replacement service at all NJ malls'
          }, {
            icon: Train,
            title: 'Train Station Parking',
            description: 'Roadside battery replacement at Secaucus Junction, Hoboken Terminal, Newark Penn Station, and all NJ Transit station parking lots'
          }, {
            icon: Home,
            title: 'At Your Home',
            description: 'At home car battery replacement in your driveway, apartment complex, or residential street anywhere in North Jersey'
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
                    {['Free battery testing and diagnosis', 'AGM battery replacement & start stop batteries', 'Charging system check', 'Terminal cleaning and protection', 'Old battery recycling included', 'Coded battery replacement service available', 'Same day battery replacement near me', 'Average service time: 60-90 min'].map(item => <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="text-[#5AF08A] flex-shrink-0" size={20} />
                        <span className="text-[#555A60]">{item}</span>
                      </li>)}
                  </ul>
                  <div className="mt-6 p-4 bg-[#007BFF]/10 rounded-lg border border-[#007BFF]/20">
                    <p className="text-sm text-[#0E0E0F] font-semibold mb-1">
                      <Shield className="inline-block mr-2 text-[#007BFF]" size={16} />
                      Secure Payment Required
                    </p>
                    <p className="text-sm text-[#555A60]">
                      Secure payment is collected after confirming your location, vehicle and battery type to reserve your technician.
                    </p>
                  </div>
                  <div className="mt-6 p-4 bg-[#5AF08A]/10 rounded-lg border border-[#5AF08A]/20">
                    <p className="text-sm text-[#0E0E0F] font-semibold mb-1">
                      <MapPin className="inline-block mr-2 text-[#007BFF]" size={16} />
                      Follow Your Tech's Progress
                    </p>
                    <p className="text-sm text-[#555A60]">
                      Once dispatched, track your technician's live location as they drive to your mall parking lot, train station, or home in North Jersey. You'll see their route and estimated arrival time updating in real-time.
                    </p>
                  </div>
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
            description: 'Skip the towing expense and hassle. Whether you\'re at a mall, train station, or home, our mobile car battery replacement service comes to you with everything needed for on-site battery replacement.'
          }, {
            icon: Shield,
            title: 'NJ-Experienced Technicians',
            description: 'Our techs specialize in luxury car battery replacement and know North Jersey inside and out—from busy mall parking lots to tight residential streets. Licensed, insured, and professional service every time.'
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

      {/* Specializing in European & Luxury Vehicles Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              Specializing in European & Luxury Vehicles
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Expert service for all makes and models, with specialized battery coding & registration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            icon: Car,
            title: 'European Vehicles',
            description: 'BMW, Mercedes, Audi, VW & more'
          }, {
            icon: Truck,
            title: 'Luxury Brands',
            description: 'Porsche, Land Rover, Jaguar'
          }, {
            icon: Car,
            title: 'Late Model Vehicles',
            description: 'All modern vehicles requiring coding'
          }, {
            icon: Truck,
            title: 'All Other Makes',
            description: 'Domestic and Asian vehicles'
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

      {/* Why Battery Coding Matters Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              Car Battery Programming Service & Coding
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Modern vehicles require proper battery registration and car battery programming service for optimal performance and longevity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[{
            icon: Battery,
            title: 'Battery Management System',
            description: 'Modern European and luxury vehicles have sophisticated Battery Management Systems (BMS) that monitor battery health, adjust charging patterns, and optimize electrical system performance. Without proper coding, your vehicle won\'t recognize the new battery.'
          }, {
            icon: Zap,
            title: 'Prevents Premature Failure',
            description: 'When a battery isn\'t properly coded, the vehicle continues using old charging parameters designed for your worn-out battery. This can overcharge or undercharge your new battery, leading to premature failure and voiding the warranty.'
          }, {
            icon: Shield,
            title: 'Protects Electrical Systems',
            description: 'Proper battery registration ensures your vehicle\'s alternator, starter, and other electrical components work efficiently. Incorrect charging can damage expensive electrical systems and lead to unexpected breakdowns.'
          }, {
            icon: CheckCircle,
            title: 'Maximizes Battery Life',
            description: 'Battery coding tells your vehicle the exact specifications of the new battery—capacity, type, and manufacturer. This allows the system to optimize charging cycles, extending battery life by years and ensuring reliable performance.'
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
        }} className="bg-gradient-to-r from-[#007BFF] to-[#18DBF1] rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              We Have the Right Equipment
            </h3>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Our technicians use professional-grade diagnostic tools to properly code and register batteries for BMW, Mercedes-Benz, Audi, Volkswagen, Porsche, Land Rover, Jaguar, and other European and luxury vehicles. We ensure your new battery is recognized by your vehicle's computer system for optimal performance and longevity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              Mobile Battery Guys vs. Dealership
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Save time and money without sacrificing quality or expertise
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mobile Battery Guys */}
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }} className="bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-xl p-8 text-white">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Mobile Battery Guys</h3>
                </div>
                <ul className="space-y-4">
                  {['We come to you—no towing needed', '30-45 minute response time', 'Same equipment & expertise as dealers', 'Professional battery coding included', 'Transparent upfront pricing', 'OEM-quality batteries with warranty', 'No appointment scheduling hassle', 'Service at your home, work, or roadside'].map((feature, idx) => <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-[#5AF08A] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-white/95">{feature}</span>
                    </li>)}
                </ul>
              </motion.div>

              {/* Dealership */}
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }} className="bg-[#F5F7FA] rounded-xl p-8 border border-slate-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Car size={32} className="text-[#555A60]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0E0E0F]">Dealership Service</h3>
                </div>
                <ul className="space-y-4">
                  {['Must tow or drive to dealership', 'Schedule days or weeks in advance', 'Same diagnostic equipment', 'Battery coding included', 'Higher labor rates & markups', 'OEM batteries available', 'Wait at dealership or arrange transport', 'Limited to dealership hours'].map((feature, idx) => <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-slate-300 flex-shrink-0 mt-0.5" />
                      <span className="text-[#555A60]">{feature}</span>
                    </li>)}
                </ul>
              </motion.div>
            </div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="mt-8 bg-[#F5F7FA] rounded-xl p-6 border border-slate-200">
              <div className="flex items-start gap-3">
                <DollarSign className="text-[#007BFF] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-[#0E0E0F] mb-2">
                    Average Savings: $100-300+
                  </h4>
                  <p className="text-[#555A60] leading-relaxed">
                    With our mobile service, you save on dealership labor rates, avoid towing costs, and eliminate the time and expense of getting to and from the dealership. Plus, you get the same professional coding and OEM-quality batteries—at your location.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              North Jersey Battery Replacement FAQs
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Questions specific to mobile battery replacement service in North Jersey
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[{
            question: 'Can you replace my battery at Garden State Plaza or other NJ malls?',
            answer: 'Absolutely! We regularly service vehicles at shopping malls throughout North Jersey including Garden State Plaza, Willowbrook Mall, Jersey Gardens, Short Hills Mall, and all other major shopping centers. We come right to your parking spot.'
          }, {
            question: 'Do you provide battery service at NJ Transit train station parking lots?',
            answer: 'Yes! We frequently help commuters at train station parking lots including Secaucus Junction, Hoboken Terminal, Newark Penn Station, and other NJ Transit locations. Perfect for when your battery dies while you\'re at work.'
          }, {
            question: 'What counties in North Jersey do you cover?',
            answer: 'We serve all major North Jersey counties including Bergen, Hudson, Essex, Passaic, Union, and Morris counties. From Paramus to Newark, Hoboken to Morristown, and everywhere in between.'
          }, {
            question: 'Do you offer AGM and start-stop battery replacement in NJ?',
            answer: 'Yes! We specialize in AGM battery replacement and start-stop battery systems for European and luxury vehicles. All replacements include proper battery coding and registration using professional diagnostic equipment.'
          }, {
            question: 'Can I get same-day battery replacement in North Jersey?',
            answer: 'Yes! We offer same-day mobile battery replacement service throughout North Jersey with typical arrival times of 30-45 minutes. Whether you\'re at a mall, office, or home, we can usually service your vehicle within hours.'
          }, {
            question: 'What\'s included in your NJ mobile battery service?',
            answer: 'Every service includes: comprehensive battery testing, charging system inspection, professional installation, terminal cleaning and protection, battery coding (if required), old battery recycling, and warranty registration.'
          }, {
            question: 'How does live GPS tracking work in North Jersey?',
            answer: 'After confirming your service, you\'ll receive a link to track your technician in real-time. Watch them navigate Route 4, the Turnpike, or local streets to your exact location at a Paramus mall, Hoboken garage, or anywhere in NJ.'
          }, {
            question: 'Can you code batteries for BMW and Mercedes in North Jersey?',
            answer: 'Yes! We have professional diagnostic tools to properly code and register batteries for BMW, Mercedes-Benz, Audi, VW, Porsche, Land Rover, Jaguar, and all European vehicles. We bring dealership-level equipment to your location.'
          }, {
            question: 'How quickly can you reach me in North Jersey?',
            answer: 'We typically arrive within 60-90 minutes throughout Bergen, Hudson, Essex, Passaic, Union, and Morris counties. The actual service time once we arrive is usually quick and efficient.'
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
            text: 'Stuck at Garden State Plaza with a dead battery. Searched for mobile car battery replacement near me and found these guys—they showed up fast and had me running in 20 minutes. Professional and friendly!'
          }, {
            name: 'Lisa M.',
            location: 'Hoboken, NJ',
            rating: 5,
            text: 'Dead battery at the train station parking lot. Called for same day battery replacement near me and they were there before my train arrived. Saved my commute!'
          }, {
            name: 'David T.',
            location: 'Astoria, Queens',
            rating: 5,
            text: 'Outstanding service! My BMW needed a new battery with coding. They handled everything professionally and had me back on the road quickly.'
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
              24/7 Service • All North Jersey • 60-90 Min Arrival
            </p>
          </motion.div>
        </div>
      </section>

      <Footer serviceArea="nj" />
      <ScrollToTop />
    </div>;
};