"use client";

import React, { useEffect } from 'react';
import { CheckCircle, Clock, Shield, Phone, MapPin, Battery, Zap, DollarSign, Truck, AlertCircle, Building2, Calendar, FileText, Users, Wrench, TrendingUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
export const NYCFleetServicePage = () => {
  useEffect(() => {
    document.title = 'NYC Commercial Fleet Battery Service | Mobile Battery Solutions for Businesses';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Commercial fleet battery service in NYC. Volume discounts, priority scheduling, fleet maintenance plans. 24/7 mobile service for trucks, vans, and commercial vehicles throughout New York City.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Commercial fleet battery service in NYC. Volume discounts, priority scheduling, fleet maintenance plans. 24/7 mobile service for trucks, vans, and commercial vehicles throughout New York City.';
      document.head.appendChild(meta);
    }
  }, []);
  return <div className="font-sans text-[#0E0E0F] bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#007BFF] via-[#0D8EE0] to-[#18DBF1]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?q=80&w=2070')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/95 via-[#0D8EE0]/95 to-[#18DBF1]/95" />
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
              <Building2 size={20} className="text-[#5AF08A]" />
              <span className="text-white font-bold">NYC's Premier Fleet Battery Service</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Manhattan Fleet Power<br />
              <span className="text-[#5AF08A]">Never Stop Moving</span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Premium mobile fleet battery service designed for NYC's fast-paced commercial environment. Serving Manhattan's delivery fleets, Brooklyn's logistics hubs, and commercial operations across all five boroughs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="tel:6466527085" className="inline-flex items-center justify-center gap-3 bg-white text-[#007BFF] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-2xl">
                <Phone size={24} />
                Call Now: 646-652-7085
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Clock size={18} />
                <span className="font-medium">24/7 Manhattan Service</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <TrendingUp size={18} />
                <span className="font-medium">Fleet Volume Pricing</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Award size={18} />
                <span className="font-medium">Same-Day Response</span>
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

      {/* NYC-Specific Fleet Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              Fleet Services Built for NYC Operations
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              From Midtown Manhattan parking garages to Brooklyn logistics centers—we keep NYC's commercial vehicles powered and ready
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            icon: Building2,
            title: 'High-Rise Garage Service',
            description: 'Expert service in Manhattan parking structures, multi-level garages, and underground facilities with specialized equipment for tight urban spaces.'
          }, {
            icon: Clock,
            title: 'Rush Hour Response Teams',
            description: 'Strategic positioning across Manhattan, Brooklyn, and Queens for rapid response during peak delivery hours when your fleet needs to keep moving.'
          }, {
            icon: Calendar,
            title: 'Off-Hours Depot Service',
            description: 'Night and early morning fleet servicing at your depot location—batteries replaced while your drivers sleep, ready for morning routes.'
          }, {
            icon: Truck,
            title: 'Delivery Hub Partnerships',
            description: 'Preferred provider for major logistics hubs in Long Island City, South Bronx, and Brooklyn. We know your facility, your fleet, your schedule.'
          }, {
            icon: FileText,
            title: 'Digital Fleet Tracking',
            description: 'Real-time service updates, digital invoicing, and comprehensive battery health reports accessible via mobile app—perfect for NYC fleet managers.'
          }, {
            icon: DollarSign,
            title: 'Metro Volume Discounts',
            description: 'Special NYC metro pricing for fleets of 5+ vehicles. Monthly service plans with flat-rate pricing to help you budget in this high-cost market.'
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

      {/* NYC-Specific Vehicle Types */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              NYC's Most Common Commercial Fleets
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              We specialize in the vehicles that keep New York City running
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            title: 'E-Commerce Delivery',
            description: 'Amazon, FreshDirect, Instacart—Manhattan & outer borough delivery vans'
          }, {
            title: 'Food Delivery Fleets',
            description: 'Restaurant supply trucks, meal kit services, catering vans'
          }, {
            title: 'Last-Mile Logistics',
            description: 'UPS, FedEx, DHL sprinter vans serving NYC addresses'
          }, {
            title: 'Rideshare & Black Car',
            description: 'Uber, Lyft, and livery service fleet vehicles'
          }, {
            title: 'Yellow Cab Fleets',
            description: 'NYC taxi medallion fleets and TLC-licensed vehicles'
          }, {
            title: 'Manhattan Couriers',
            description: 'Document delivery, messenger services, same-day cargo'
          }, {
            title: 'Construction & Trade',
            description: 'Contractor trucks serving NYC building projects'
          }, {
            title: 'Moving Companies',
            description: 'Box trucks for NYC residential and commercial moves'
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

      {/* Why NYC Fleets Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              Why NYC Fleet Managers Trust Us
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              In a city where time is money and parking is impossible, we deliver results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            icon: MapPin,
            title: 'NYC Geography Experts',
            description: 'Our technicians know Manhattan one-ways, Brooklyn neighborhoods, Queens industrial zones. We navigate this city efficiently—no GPS fumbling, no delivery delays.'
          }, {
            icon: Clock,
            title: 'Minimize Urban Downtime',
            description: 'In NYC, a dead battery means lost revenue, parking tickets, and angry dispatchers. We respond in under 45 minutes in Manhattan—often faster. Your trucks keep rolling.'
          }, {
            icon: Shield,
            title: 'Fully Insured for NYC',
            description: 'Commercial insurance meeting NYC requirements. We work safely in tight parking garages, on busy streets, in loading zones. Peace of mind for your fleet.'
          }, {
            icon: DollarSign,
            title: 'Transparent Metro Pricing',
            description: 'No surprise fees. Our pricing accounts for NYC logistics costs but stays competitive. Volume discounts help offset the premium of operating in this market.'
          }, {
            icon: Users,
            title: 'Dedicated Fleet Coordinator',
            description: 'One contact for your entire NYC operation. They know your vehicles, your schedule, your drivers. Quick answers when you need them most.'
          }, {
            icon: Award,
            title: 'Premium Battery Selection',
            description: 'We stock high-performance batteries proven in NYC conditions—extreme weather, stop-and-go traffic, 24/7 operation cycles. Quality that lasts.'
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

      {/* Service Areas - NYC Specific */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <MapPin size={48} className="mx-auto text-[#007BFF] mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              Complete NYC Fleet Coverage
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              From Wall Street to the Bronx, from Astoria to Staten Island—we service fleets across all five boroughs
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
                borough: 'Manhattan',
                areas: 'Midtown, FiDi, Chelsea, Harlem, Upper East/West Side'
              }, {
                borough: 'Brooklyn',
                areas: 'DUMBO, Williamsburg, Sunset Park, Red Hook, East New York'
              }, {
                borough: 'Queens',
                areas: 'Long Island City, Astoria, Jamaica, Flushing, JFK area'
              }, {
                borough: 'Bronx',
                areas: 'South Bronx, Hunts Point, Fordham, Co-op City'
              }, {
                borough: 'Staten Island',
                areas: 'St. George, Port Richmond, Tottenville, industrial zones'
              }].map(location => <div key={location.borough} className="flex items-start gap-3 pb-3 border-b border-slate-100 last:border-0">
                    <CheckCircle className="text-[#5AF08A] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-[#0E0E0F]">{location.borough}:</span>
                      <span className="text-[#555A60] ml-2">{location.areas}</span>
                    </div>
                  </div>)}
              </div>
              <div className="pt-4 border-t border-slate-200">
                <p className="text-[#555A60] text-sm">
                  <strong className="text-[#0E0E0F]">Common NYC Service Locations:</strong> Multi-level parking garages, street-side service in commercial zones, depot facilities, warehouse loading docks, underground parking, and on-site at logistics hubs. We also service fleets in parts of Hudson County, NJ (Jersey City, Hoboken).
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
            <Building2 size={64} className="mx-auto text-white mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Power Your NYC Fleet
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Get a custom fleet service plan with NYC metro pricing. Contact us today for volume discounts and priority scheduling.
            </p>
            <a href="tel:6466527085" className="inline-flex items-center justify-center gap-3 bg-white text-[#007BFF] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl">
              <Phone size={24} />
              Call 646-652-7085
            </a>
            <p className="text-white/90 mt-6">
              Manhattan's Fleet Battery Experts • 24/7 Response • Volume Discounts Available
            </p>
          </motion.div>
        </div>
      </section>

      <Footer serviceArea="nyc" />
      <ScrollToTop />
    </div>;
};