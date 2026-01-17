"use client";

import React, { useEffect } from 'react';
import { CheckCircle, Clock, Shield, Phone, MapPin, Battery, Zap, DollarSign, Truck, AlertCircle, Building2, Calendar, FileText, Users, Wrench, Factory, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
export const NJFleetServicePage = () => {
  useEffect(() => {
    document.title = 'North Jersey Commercial Fleet Battery Service | Mobile Fleet Solutions NJ';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Commercial fleet battery service in North Jersey. Volume discounts, priority scheduling, fleet maintenance plans. 24/7 mobile service for trucks, vans, and commercial vehicles in Bergen, Hudson, Essex, Passaic, Union, Morris counties.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Commercial fleet battery service in North Jersey. Volume discounts, priority scheduling, fleet maintenance plans. 24/7 mobile service for trucks, vans, and commercial vehicles in Bergen, Hudson, Essex, Passaic, Union, Morris counties.';
      document.head.appendChild(meta);
    }
  }, []);
  return <div className="font-sans text-[#0E0E0F] bg-white min-h-screen">
      <Header serviceArea="nj" logoLink="/new-jersey" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#007BFF] via-[#0D8EE0] to-[#18DBF1]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/93 via-[#0D8EE0]/93 to-[#18DBF1]/93" />
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
              <Factory size={20} className="text-[#5AF08A]" />
              <span className="text-white font-bold">North Jersey's Trusted Fleet Partner</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Fleet Battery Service<br />
              <span className="text-[#5AF08A]">For Jersey's Working Fleets</span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Reliable mobile battery service for North Jersey's industrial fleets, distribution centers, and commercial operations. From Bergen County warehouses to Newark logistics hubs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="tel:9732519545" className="inline-flex items-center justify-center gap-3 bg-white text-[#007BFF] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-2xl">
                <Phone size={24} />
                Call Now: 973-251-9545
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Factory size={18} />
                <span className="font-medium">Industrial Park Service</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Calendar size={18} />
                <span className="font-medium">Preventive Maintenance</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <DollarSign size={18} />
                <span className="font-medium">Competitive Jersey Pricing</span>
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

      {/* NJ-Specific Fleet Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              Fleet Services Built for North Jersey Operations
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              From Paramus distribution centers to Newark Port Authority facilities—comprehensive battery service for NJ fleets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            icon: Factory,
            title: 'Industrial Park Servicing',
            description: 'Expert service at major NJ industrial parks in Secaucus, Carlstadt, Edison, and Kearny. We know your facility, your loading docks, and your operation.'
          }, {
            icon: Home,
            title: 'Depot & Warehouse Service',
            description: 'On-site battery service at your distribution center or warehouse. We service your entire fleet in one visit—efficient and cost-effective.'
          }, {
            icon: Calendar,
            title: 'Scheduled Maintenance Programs',
            description: 'Proactive battery testing and replacement schedules. Prevent breakdowns before they happen. Perfect for predictable budgeting and maximum uptime.'
          }, {
            icon: Wrench,
            title: 'Fleet Health Monitoring',
            description: 'Comprehensive battery testing and reporting. We track your entire fleet\'s battery health and recommend replacements before failures occur.'
          }, {
            icon: Users,
            title: 'Dedicated NJ Account Rep',
            description: 'Local account manager who understands North Jersey logistics. They know Routes 1, 3, 46, and the Turnpike—and your business.'
          }, {
            icon: DollarSign,
            title: 'Jersey Value Pricing',
            description: 'Competitive pricing for multi-vehicle fleets. Localized rates designed for Jersey business owners. Volume discounts that make sense for NJ operations.'
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
          }} className="bg-[#F5F7FA] rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-xl flex items-center justify-center text-white mb-4">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0E0E0F] mb-3">{service.title}</h3>
                <p className="text-[#555A60] leading-relaxed">{service.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* NJ-Specific Fleet Types */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              North Jersey's Commercial Fleet Specialists
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              We service the vehicles that power New Jersey's economy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            title: 'Freight & Distribution',
            description: 'Semi trucks, straight trucks serving NJ warehouses and depots'
          }, {
            title: 'Construction Equipment',
            description: 'Heavy-duty trucks for NJ construction and infrastructure projects'
          }, {
            title: 'Landscaping Fleets',
            description: 'Pickup trucks and equipment for lawn care and landscaping companies'
          }, {
            title: 'HVAC & Plumbing',
            description: 'Service vans for residential and commercial contractors'
          }, {
            title: 'Municipal Vehicles',
            description: 'Township trucks, utility vehicles, public works fleets'
          }, {
            title: 'Wholesale Delivery',
            description: 'Box trucks serving restaurants, retailers, and businesses'
          }, {
            title: 'Manufacturing Support',
            description: 'Forklifts, yard trucks, and facility vehicles at plants'
          }, {
            title: 'Shuttle & Charter',
            description: 'Passenger vans, buses, and shuttle service vehicles'
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
                  <Truck size={32} />
                </div>
                <h3 className="text-lg font-bold text-[#0E0E0F] mb-2">{vehicle.title}</h3>
                <p className="text-[#555A60] text-sm">{vehicle.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Why NJ Fleets Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              Why Jersey Fleet Managers Choose Us
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Reliable service built for the realities of operating a fleet in North Jersey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            icon: MapPin,
            title: 'Local NJ Knowledge',
            description: 'We know Bergen County industrial parks, Essex County depots, and Hudson County waterfront facilities. Efficient routing means faster response.'
          }, {
            icon: Clock,
            title: 'Reliable Response Times',
            description: 'Consistent service without unnecessary delays. Your fleet is back in operation quickly—no excuses, no delays.'
          }, {
            icon: DollarSign,
            title: 'Transparent Pricing',
            description: 'Fair pricing that reflects NJ market rates. Localized value and volume discounts that actually save you money.'
          }, {
            icon: Shield,
            title: 'Weather-Ready Service',
            description: 'New Jersey winters are brutal on batteries. We stock cold-weather batteries and provide seasonal fleet prep services.'
          }, {
            icon: Wrench,
            title: 'Preventive Maintenance Focus',
            description: 'Schedule regular battery checks during slower seasons. Catch problems early. Avoid summer heat and winter cold failures.'
          }, {
            icon: FileText,
            title: 'Simple Fleet Reporting',
            description: 'Easy-to-read service reports and battery tracking. Perfect for fleet managers juggling multiple priorities and budgets.'
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

      {/* Service Areas - NJ Specific */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <MapPin size={48} className="mx-auto text-[#007BFF] mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              Complete North Jersey Coverage
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Comprehensive fleet service across all major North Jersey counties and industrial centers
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
          }} transition={{
            duration: 0.6
          }} className="bg-white rounded-xl p-8 border border-slate-200">
              <div className="space-y-4 mb-6">
                {[{
                county: 'Bergen County',
                cities: 'Paramus, Hackensack, Fort Lee, Teterboro, Carlstadt, Teaneck'
              }, {
                county: 'Hudson County',
                cities: 'Jersey City, Hoboken, Union City, Kearny, Secaucus, Bayonne'
              }, {
                county: 'Essex County',
                cities: 'Newark, East Orange, Irvington, Montclair, Bloomfield'
              }, {
                county: 'Passaic County',
                cities: 'Paterson, Clifton, Wayne, Passaic, Little Falls'
              }, {
                county: 'Union County',
                cities: 'Elizabeth, Union, Plainfield, Linden, Roselle'
              }, {
                county: 'Morris County',
                cities: 'Morristown, Parsippany, Dover, East Hanover, Rockaway'
              }].map(location => <div key={location.county} className="flex items-start gap-3 pb-3 border-b border-slate-100 last:border-0">
                    <CheckCircle className="text-[#5AF08A] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0E0E0F]">{location.county}:</span>
                      <span className="text-[#555A60] ml-2 text-sm">{location.cities}</span>
                    </div>
                  </div>)}
              </div>
              <div className="pt-4 border-t border-slate-200">
                <p className="text-[#555A60] text-sm">
                  <strong className="text-[#0E0E0F]">Common NJ Service Locations:</strong> Industrial parks, warehouse complexes, distribution centers, manufacturing facilities, municipal garages, contractor depots, retail chain parking lots, and on-site at business locations. Service along major highways: Turnpike, Parkway, Routes 1, 3, 17, 46, 80, and 287.
                </p>
              </div>
            </motion.div>
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
            <Factory size={64} className="mx-auto text-white mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Power Your North Jersey Fleet
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Get a customized fleet service plan with competitive NJ pricing. Call today for volume discounts and preventive maintenance programs.
            </p>
            <a href="tel:9732519545" className="inline-flex items-center justify-center gap-3 bg-white text-[#007BFF] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl">
              <Phone size={24} />
              Call 973-251-9545
            </a>
            <p className="text-white/90 mt-6">
              North Jersey's Fleet Battery Experts • Depot Service Available • Volume Discounts
            </p>
          </motion.div>
        </div>
      </section>

      <Footer serviceArea="nj" />
      <ScrollToTop />
    </div>;
};