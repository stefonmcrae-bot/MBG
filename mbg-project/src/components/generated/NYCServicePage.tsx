"use client";

import React, { useEffect } from 'react';
import { CheckCircle, Clock, Shield, Phone, MapPin, Battery, Zap, DollarSign, Car, Truck, AlertCircle, Home, Building2, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
export const NYCServicePage = () => {
  useEffect(() => {
    document.title = 'Mobile Battery Replacement NYC | 24/7 On-Site Battery Service New York City';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional mobile battery replacement in NYC. We come to your home, office, parking garage, or street. Fast 30-45 min arrival. Licensed technicians serving all 5 boroughs 24/7.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional mobile battery replacement in NYC. We come to your home, office, parking garage, or street. Fast 30-45 min arrival. Licensed technicians serving all 5 boroughs 24/7.';
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
              <Battery size={20} className="text-[#5AF08A]" />
              <span className="text-white font-bold">Mobile Battery Replacement NYC</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              On-Site Battery Replacement NYC<br />
              <span className="text-[#0E1117]">Mobile Car Battery Service</span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional mobile car battery replacement near me in Manhattan, Brooklyn, Queens, Bronx, and Staten Island. Same day battery replacement near me—we come to your home, office, or curbside anywhere in NYC.
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
                <DollarSign size={18} />
                <span className="font-medium">Upfront Pricing</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <MapPin size={18} />
                <span className="font-medium">Real-Time Tracking</span>
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
              We Come To You—Anywhere in NYC
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              No matter where you are in New York City, we bring the battery replacement service to your location
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            icon: Home,
            title: 'At Your Home',
            description: 'At home car battery replacement in your driveway, apartment parking, or street parking. Professional mobile battery replacement service at your door.'
          }, {
            icon: Building2,
            title: 'Office Buildings',
            description: 'On-site car battery replacement in office parking garages and lots throughout Manhattan and all boroughs'
          }, {
            icon: MapPin,
            title: 'Parking Garages',
            description: 'We work in NYC parking structures and garages—no need to move your car for our mobile battery replacement service'
          }, {
            icon: Car,
            title: 'Curbside Service',
            description: 'Roadside battery replacement service—stranded on the street? We come to you and replace your battery on-site'
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
              Mobile Battery Replacement Service in NYC
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Professional on-site battery installation with premium batteries and expert technicians
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
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {['Free battery testing and diagnostics', 'AGM battery replacement & start stop batteries', 'Charging system inspection', 'Terminal cleaning and protection', 'Old battery disposal', 'Coded battery replacement service', 'Same day battery replacement near me', '60-90 minute service time'].map(item => <li key={item} className="flex items-center gap-3">
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
                      Track Your Technician in Real-Time
                    </p>
                    <p className="text-sm text-[#555A60]">
                      Watch your technician navigate NYC traffic with live GPS tracking. Know exactly when they'll arrive at your Manhattan, Brooklyn, or Queens location—no more guessing or waiting blindly.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#0E0E0F] mb-6 flex items-center gap-3">
                    <MapPin className="text-[#007BFF]" size={28} />
                    All 5 Boroughs
                  </h3>
                  <ul className="space-y-3">
                    {['Manhattan—from Battery Park to Inwood', 'Brooklyn—all neighborhoods', 'Queens—Astoria to Far Rockaway', 'Bronx—complete coverage', 'Staten Island—full service', 'Plus nearby areas in NJ'].map(area => <li key={area} className="flex items-center gap-3">
                        <CheckCircle className="text-[#5AF08A] flex-shrink-0" size={20} />
                        <span className="text-[#555A60]">{area}</span>
                      </li>)}
                  </ul>
                  <div className="mt-6 p-4 bg-[#F5F7FA] rounded-lg">
                    <p className="text-sm text-[#555A60]">
                      <strong className="text-[#0E0E0F]">Service Areas:</strong> We work everywhere from Midtown Manhattan parking garages to residential driveways in Staten Island. If you're in NYC, we'll be there.
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
              Why NYC Drivers Choose Us
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Convenient, professional, and reliable battery replacement service built for New York City
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            icon: Clock,
            title: 'No Tow Truck Needed',
            description: 'Skip the hassle and expense of towing. We come directly to your location with everything needed to replace your battery on the spot.'
          }, {
            icon: Shield,
            title: 'NYC-Experienced Technicians',
            description: 'Our techs know NYC—from tight parking garages in Manhattan to residential streets in the outer boroughs. Licensed, insured, and professional.'
          }, {
            icon: DollarSign,
            title: 'Transparent Pricing',
            description: 'Upfront quotes with no hidden fees. You’ll know exactly what you’re paying before we start. No surprises, no games.'
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

      {/* Specializing in European & Luxury Vehicles Section */}
      <section className="py-20 bg-[#F5F7FA]">
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
            description: 'BMW battery replacement mobile, Mercedes battery replacement mobile, Audi, VW & more'
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

      {/* Vehicle Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              All Vehicle Types
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

      {/* CTA Section */}
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
              NYC Battery Replacement FAQs
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Questions specific to mobile battery replacement service in New York City
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[{
            question: 'Can you replace my battery in a Manhattan parking garage?',
            answer: 'Yes! We regularly service vehicles in NYC parking garages throughout Manhattan, Brooklyn, and all boroughs. Whether you\'re in a Midtown high-rise garage or a Brooklyn parking structure, we bring our equipment and batteries to your exact location.'
          }, {
            question: 'How does battery replacement work if I\'m parked on a NYC street?',
            answer: 'Our mobile technicians are experienced with NYC street parking. We come to your curbside location with all necessary equipment and perform the battery replacement right there. No need to move your car or worry about parking.'
          }, {
            question: 'Do you offer AGM battery replacement for my BMW or Mercedes in NYC?',
            answer: 'Absolutely! We specialize in AGM and start-stop battery replacement for European and luxury vehicles. All battery replacements include proper coding and registration using professional diagnostic equipment—the same tools dealerships use.'
          }, {
            question: 'What\'s included in your NYC battery replacement service?',
            answer: 'Every service includes: battery testing, charging system inspection, professional installation, terminal cleaning, battery coding (if required), old battery disposal, and warranty registration. We bring everything needed to your NYC location.'
          }, {
            question: 'Can I get same-day battery replacement in Manhattan?',
            answer: 'Yes! We offer same-day mobile battery replacement throughout Manhattan and all NYC boroughs. With our 30-45 minute average arrival time, we can typically service your vehicle within hours of your call.'
          }, {
            question: 'Do you service all five boroughs of NYC?',
            answer: 'Yes, we provide complete coverage throughout Manhattan, Brooklyn, Queens, Bronx, and Staten Island. We also service nearby areas in New Jersey.'
          }, {
            question: 'How do I track my technician in NYC?',
            answer: 'After booking, you\'ll receive a live GPS tracking link. Watch your technician navigate NYC traffic in real-time and see their estimated arrival at your Manhattan office, Brooklyn apartment, or wherever you\'re located.'
          }, {
            question: 'What if my European car needs battery coding in NYC?',
            answer: 'We specialize in battery coding and registration for BMW, Mercedes-Benz, Audi, VW, Porsche, Land Rover, and other European vehicles. Our mobile technicians carry professional diagnostic tools to properly code your battery on-site in NYC.'
          }, {
            question: 'How quickly can you arrive for mobile battery replacement in NYC?',
            answer: 'Our average arrival time is 60-90 minutes throughout all five boroughs. We prioritize emergency situations and provide real-time GPS tracking so you know exactly when we\'ll arrive.'
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
              Real experiences from NYC drivers who trust us with their battery service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            name: 'Michael R.',
            location: 'Upper West Side, Manhattan',
            rating: 5,
            text: 'Dead battery in my building\'s underground garage. These guys showed up fast, replaced my BMW battery with proper coding, and I was back on the road. Professional service in a tight spot—literally!'
          }, {
            name: 'Sarah T.',
            location: 'Park Slope, Brooklyn',
            rating: 5,
            text: 'My Mercedes wouldn\'t start on a busy Brooklyn street. Called for mobile battery replacement near me and they arrived in 35 minutes. Friendly technician, fair price, and saved me from a tow truck nightmare.'
          }, {
            name: 'David L.',
            location: 'Astoria, Queens',
            rating: 5,
            text: 'Needed same day battery replacement for my Audi. They came to my office parking lot in Queens, tested everything, and installed a new battery with coding. So much better than going to a dealership!'
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
              Need a Battery Replacement in NYC?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Call now for fast mobile service. We'll come to your location and have you running in 30-45 minutes.
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