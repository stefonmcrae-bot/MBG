"use client";

import React, { useEffect } from 'react';
import { CheckCircle, Clock, Shield, Phone, MapPin, Battery, Zap, Award, Users, Heart, Wrench, TrendingUp, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
export const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Mobile Battery Guys | 24/7 Battery Service NYC & NJ';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Mobile Battery Guys - your trusted 24/7 mobile battery replacement service in NYC and North Jersey. Professional, reliable, and customer-focused since day one.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Learn about Mobile Battery Guys - your trusted 24/7 mobile battery replacement service in NYC and North Jersey. Professional, reliable, and customer-focused since day one.';
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
              <Heart size={20} className="text-[#5AF08A]" />
              <span className="text-white font-bold">About Our Mission</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Trusted Battery<br />
              <span className="text-[#0E1117]">Service Partner</span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Providing fast, reliable, and professional mobile battery service throughout NYC and North Jersey with over 15 years of experience
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

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
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
          }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-[#555A60] leading-relaxed">
                <p>
                  Mobile Battery Guys was founded with a simple mission: to provide fast, reliable, and honest mobile battery service when drivers need it most. We understand how frustrating and stressful it is to deal with a dead battery, whether you're late for work, picking up the kids, or stranded on the side of the road.
                </p>
                <p>
                  With over 15 years of experience in the automotive service industry, what started as a small operation has grown into the most trusted mobile battery service in the New York and North Jersey area. Our success comes from our commitment to three core principles: speed, quality, and transparency.
                </p>
                <p>
                  Today, we serve thousands of satisfied customers across NYC's five boroughs and six North Jersey counties, operating 24/7 to ensure you're never left stranded. Every technician on our team is trained, licensed, and dedicated to providing the best possible service.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            icon: Zap,
            title: 'Speed & Reliability',
            description: 'We respond fast and show up on time. Your time matters, and we respect that with every call.'
          }, {
            icon: Shield,
            title: 'Quality Service',
            description: 'We use only top-brand batteries and professional-grade equipment. No shortcuts, no compromises.'
          }, {
            icon: Heart,
            title: 'Customer First',
            description: 'Your satisfaction is our priority. We treat every customer with respect and care.'
          }, {
            icon: CheckCircle,
            title: 'Transparency',
            description: 'Honest pricing, no hidden fees. You know exactly what you\'re paying for before we start.'
          }].map((value, idx) => <motion.div key={value.title} initial={{
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
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0E0E0F] mb-3">{value.title}</h3>
                <p className="text-[#555A60] leading-relaxed">{value.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              We're not just another roadside service—we're your battery specialists
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[{
            icon: Clock,
            title: '24/7 Availability',
            description: 'Battery problems don\'t follow a schedule, and neither do we. We\'re available around the clock, every day of the year—including holidays.',
            stats: '24/7/365'
          }, {
            icon: Users,
            title: 'Professional Technicians',
            description: 'Every member of our team is fully trained, licensed, and insured. We conduct thorough background checks and ongoing training.',
            stats: '100% Certified'
          }, {
            icon: Award,
            title: 'Proven Track Record',
            description: 'Thousands of satisfied customers across NYC and North Jersey. Our reputation is built on consistently excellent service.',
            stats: '5-Star Rated'
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
          }} className="bg-[#F5F7FA] rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-2xl flex items-center justify-center text-white mb-6">
                  <feature.icon size={32} />
                </div>
                <div className="inline-block bg-[#5AF08A] text-[#0E0E0F] px-4 py-1 rounded-full text-sm font-bold mb-4">
                  {feature.stats}
                </div>
                <h3 className="text-2xl font-bold text-[#0E0E0F] mb-4">{feature.title}</h3>
                <p className="text-[#555A60] leading-relaxed">{feature.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* By The Numbers Section */}
      <section className="py-20 bg-[#0E1117] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mobile Battery Guys By The Numbers
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Our commitment to excellence, reflected in our results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[{
            icon: Battery,
            number: '15+',
            label: 'Years Experience'
          }, {
            icon: Users,
            number: '10,000+',
            label: 'Happy Customers'
          }, {
            icon: Clock,
            number: '30-45',
            label: 'Min Avg Response'
          }, {
            icon: Star,
            number: '5.0',
            label: 'Average Rating'
          }].map((stat, idx) => <motion.div key={stat.label} initial={{
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
          }} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  <stat.icon size={32} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#5AF08A] mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300 text-lg">
                  {stat.label}
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
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
          }} className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-6">
                Our Commitment To You
              </h2>
              <div className="bg-[#F5F7FA] rounded-xl p-8 border border-slate-200">
                <div className="space-y-6">
                  {[{
                  icon: CheckCircle,
                  text: 'We will arrive within 30-45 minutes on average'
                }, {
                  icon: CheckCircle,
                  text: 'We will provide transparent, upfront pricing with no hidden fees'
                }, {
                  icon: CheckCircle,
                  text: 'We will use only high-quality batteries backed by warranties'
                }, {
                  icon: CheckCircle,
                  text: 'We will treat you and your vehicle with respect and professionalism'
                }, {
                  icon: CheckCircle,
                  text: 'We will ensure your complete satisfaction with our service'
                }].map((commitment, idx) => <motion.div key={idx} initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.4,
                  delay: idx * 0.1
                }} className="flex items-center gap-4">
                      <commitment.icon className="text-[#5AF08A] flex-shrink-0" size={24} />
                      <span className="text-[#555A60] text-lg">{commitment.text}</span>
                    </motion.div>)}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <MapPin size={48} className="mx-auto text-[#007BFF] mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              Where We Serve
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Professional mobile battery service throughout the New York metropolitan area
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
          }} className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-[#0E0E0F] mb-6 flex items-center gap-3">
                <Battery className="text-[#007BFF]" size={28} />
                New York City
              </h3>
              <ul className="space-y-3">
                {['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'].map(borough => <li key={borough} className="flex items-center gap-3">
                    <CheckCircle className="text-[#5AF08A] flex-shrink-0" size={20} />
                    <span className="text-[#555A60]">{borough}</span>
                  </li>)}
              </ul>
              <a href="/" onClick={e => {
              e.preventDefault();
              window.history.pushState({}, '', '/');
              window.dispatchEvent(new PopStateEvent('popstate'));
              window.scrollTo(0, 0);
            }} className="inline-flex items-center gap-2 mt-6 text-[#007BFF] font-semibold hover:text-[#0D8EE0] transition-colors">
                NYC Service Page →
              </a>
            </motion.div>

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
          }} className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-[#0E0E0F] mb-6 flex items-center gap-3">
                <Battery className="text-[#007BFF]" size={28} />
                North Jersey
              </h3>
              <ul className="space-y-3">
                {['Bergen County', 'Hudson County', 'Essex County', 'Passaic County', 'Union County', 'Morris County'].map(county => <li key={county} className="flex items-center gap-3">
                    <CheckCircle className="text-[#5AF08A] flex-shrink-0" size={20} />
                    <span className="text-[#555A60]">{county}</span>
                  </li>)}
              </ul>
              <a href="/new-jersey" onClick={e => {
              e.preventDefault();
              window.history.pushState({}, '', '/new-jersey');
              window.dispatchEvent(new PopStateEvent('popstate'));
              window.scrollTo(0, 0);
            }} className="inline-flex items-center gap-2 mt-6 text-[#007BFF] font-semibold hover:text-[#0D8EE0] transition-colors">
                NJ Service Page →
              </a>
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
            <Battery size={64} className="mx-auto text-white mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Experience The Difference
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Mobile Battery Guys for fast, reliable service
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