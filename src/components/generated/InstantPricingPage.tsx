"use client";

import React, { useEffect, useState } from 'react';
import { CheckCircle, Clock, Shield, Phone, Battery, Zap, DollarSign, Car, Truck, AlertCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

export const InstantPricingPage = () => {
  const [vehicleInfo, setVehicleInfo] = useState({
    year: '',
    make: '',
    model: '',
    trim: '',
    vehicleType: ''
  });
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Instant Pricing & Booking | Mobile Battery Guys';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get instant pricing for mobile battery replacement. Enter your vehicle details to see exact installed pricing with no hidden fees.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Get instant pricing for mobile battery replacement. Enter your vehicle details to see exact installed pricing with no hidden fees.';
      document.head.appendChild(meta);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setVehicleInfo(prev => ({
      ...prev,
      [name]: value
    }));
    // Reset selected tier when vehicle info changes
    if (selectedTier) {
      setSelectedTier(null);
    }
  };

  const isVehicleInfoComplete = () => {
    return vehicleInfo.year && vehicleInfo.make && vehicleInfo.model && vehicleInfo.trim && vehicleInfo.vehicleType;
  };

  const getVehicleTypeAdjustment = () => {
    switch (vehicleInfo.vehicleType) {
      case 'Car/Sedan':
        return 0;
      case 'SUV/Crossover':
        return 20;
      case 'Truck':
        return 30;
      case 'Van/Minivan':
        return 25;
      default:
        return 0;
    }
  };

  const calculateFinalPrice = (basePrice: number) => {
    return basePrice + getVehicleTypeAdjustment();
  };

  const tiers = [
    {
      id: 'standard',
      name: 'Standard Saver',
      battery: 'ProPower Standard',
      warranty: '1-year warranty',
      basePrice: 259,
      description: 'Reliable battery replacement with standard warranty coverage'
    },
    {
      id: 'gold',
      name: 'Gold Value',
      battery: 'ProPower Gold',
      warranty: '3-year warranty',
      basePrice: 379,
      description: 'Premium battery with extended warranty - our most popular choice',
      mostPopular: true
    },
    {
      id: 'premium',
      name: 'Premium Pro',
      battery: 'ProPower AGM',
      warranty: '4-year warranty',
      basePrice: 449,
      description: 'Top-tier AGM battery with maximum warranty protection'
    }
  ];

  const selectedTierData = selectedTier ? tiers.find(t => t.id === selectedTier) : null;
  const finalPrice = selectedTierData ? calculateFinalPrice(selectedTierData.basePrice) : 0;

  return (
    <div className="font-sans text-[#0E0E0F] bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#007BFF] via-[#0D8EE0] to-[#18DBF1]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/90 via-[#0D8EE0]/90 to-[#18DBF1]/90" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/30">
              <DollarSign size={20} className="text-[#5AF08A]" />
              <span className="text-white font-bold">Instant Pricing & Booking</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Get Your Exact Price<br />
              <span className="text-[#0E1117]">In Seconds</span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Enter your vehicle details below to see exact installed pricing with no hidden fees
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Vehicle Information Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#F5F7FA] rounded-xl p-8 border border-slate-200 shadow-sm"
            >
              <h2 className="text-3xl font-bold text-[#0E0E0F] mb-6 text-center">
                Enter Your Vehicle Details
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="year" className="block text-sm font-semibold text-[#0E0E0F] mb-2">
                    Year <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="year"
                    name="year"
                    value={vehicleInfo.year}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-[#0E0E0F]"
                    placeholder="2020"
                  />
                </div>

                <div>
                  <label htmlFor="make" className="block text-sm font-semibold text-[#0E0E0F] mb-2">
                    Make <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="make"
                    name="make"
                    value={vehicleInfo.make}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-[#0E0E0F]"
                    placeholder="Honda"
                  />
                </div>

                <div>
                  <label htmlFor="model" className="block text-sm font-semibold text-[#0E0E0F] mb-2">
                    Model <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="model"
                    name="model"
                    value={vehicleInfo.model}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-[#0E0E0F]"
                    placeholder="Accord"
                  />
                </div>

                <div>
                  <label htmlFor="trim" className="block text-sm font-semibold text-[#0E0E0F] mb-2">
                    Trim <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="trim"
                    name="trim"
                    value={vehicleInfo.trim}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-[#0E0E0F]"
                    placeholder="EX-L"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="vehicleType" className="block text-sm font-semibold text-[#0E0E0F] mb-2">
                    Vehicle Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    value={vehicleInfo.vehicleType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-[#0E0E0F]"
                  >
                    <option value="">Select Vehicle Type</option>
                    <option value="Car/Sedan">Car/Sedan</option>
                    <option value="SUV/Crossover">SUV/Crossover</option>
                    <option value="Truck">Truck</option>
                    <option value="Van/Minivan">Van/Minivan</option>
                  </select>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-6">
          {!isVehicleInfoComplete() ? (
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl p-12 border border-slate-200 shadow-sm"
              >
                <Battery size={64} className="mx-auto text-[#007BFF] mb-6" />
                <h2 className="text-2xl font-bold text-[#0E0E0F] mb-4">
                  Enter your vehicle details to see exact installed pricing.
                </h2>
                <p className="text-[#555A60]">
                  Please complete all required fields above to view pricing options.
                </p>
              </motion.div>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
                  Choose Your Battery Package
                </h2>
                <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
                  All prices include battery, installation, and disposal. No hidden fees.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                {tiers.map((tier, idx) => {
                  const finalPrice = calculateFinalPrice(tier.basePrice);
                  const isSelected = selectedTier === tier.id;
                  
                  return (
                    <motion.div
                      key={tier.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      onClick={() => setSelectedTier(tier.id)}
                      className={`relative bg-white rounded-xl p-8 border-2 cursor-pointer transition-all ${
                        isSelected
                          ? 'border-[#007BFF] shadow-xl scale-105'
                          : 'border-slate-200 hover:border-[#007BFF]/50 hover:shadow-lg'
                      }`}
                    >
                      {tier.mostPopular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#007BFF] to-[#18DBF1] text-white px-4 py-1 rounded-full text-sm font-bold">
                          MOST POPULAR
                        </div>
                      )}
                      
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-[#0E0E0F] mb-2">{tier.name}</h3>
                        <div className="text-4xl font-bold text-[#007BFF] mb-2">
                          ${finalPrice}
                        </div>
                        <p className="text-sm text-[#555A60]">Installed</p>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-3">
                          <Battery className="text-[#5AF08A] flex-shrink-0" size={20} />
                          <span className="text-[#555A60] text-sm">{tier.battery}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Shield className="text-[#5AF08A] flex-shrink-0" size={20} />
                          <span className="text-[#555A60] text-sm">{tier.warranty}</span>
                        </div>
                        <p className="text-sm text-[#555A60] mt-4">{tier.description}</p>
                      </div>

                      {isSelected && (
                        <div className="flex items-center justify-center gap-2 text-[#007BFF] font-semibold">
                          <CheckCircle size={20} />
                          <span>Selected</span>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Estimated Total and Book Now */}
              {selectedTier && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-2xl mx-auto bg-white rounded-xl p-8 border-2 border-[#007BFF] shadow-xl"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-[#0E0E0F] mb-4">Estimated Total</h3>
                    <div className="text-5xl font-bold text-[#007BFF] mb-2">
                      ${finalPrice}
                    </div>
                    <p className="text-[#555A60]">All-inclusive installed price</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-[#555A60]">
                      <CheckCircle className="text-[#5AF08A] flex-shrink-0" size={18} />
                      <span className="text-sm">Battery included</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#555A60]">
                      <CheckCircle className="text-[#5AF08A] flex-shrink-0" size={18} />
                      <span className="text-sm">Professional installation</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#555A60]">
                      <CheckCircle className="text-[#5AF08A] flex-shrink-0" size={18} />
                      <span className="text-sm">Old battery disposal</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#555A60]">
                      <CheckCircle className="text-[#5AF08A] flex-shrink-0" size={18} />
                      <span className="text-sm">No hidden fees</span>
                    </div>
                  </div>

                  <a
                    href={`tel:6466527085`}
                    className="block w-full bg-gradient-to-r from-[#007BFF] to-[#18DBF1] text-white text-center px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all"
                  >
                    <Phone size={24} className="inline mr-2" />
                    Book Now: 646-652-7085
                  </a>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
              Why Choose Mobile Battery Guys?
            </h2>
            <p className="text-lg text-[#555A60] max-w-3xl mx-auto">
              Compare our transparent, all-inclusive pricing with the competition
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#F5F7FA] rounded-xl p-8 border border-slate-200 shadow-sm"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#0E0E0F] mb-6 flex items-center gap-3">
                    <Star className="text-[#007BFF]" size={28} />
                    Mobile Battery Guys
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#5AF08A] flex-shrink-0" size={20} />
                      <span className="text-[#555A60]">All-inclusive pricing: $259–$449</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#5AF08A] flex-shrink-0" size={20} />
                      <span className="text-[#555A60]">No hidden fees or add-ons</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#5AF08A] flex-shrink-0" size={20} />
                      <span className="text-[#555A60]">Upfront transparent pricing</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#5AF08A] flex-shrink-0" size={20} />
                      <span className="text-[#555A60]">Mobile service - we come to you</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#5AF08A] flex-shrink-0" size={20} />
                      <span className="text-[#555A60]">30-45 minute average response</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#0E0E0F] mb-6 flex items-center gap-3">
                    <AlertCircle className="text-[#555A60]" size={28} />
                    Other Services
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
                      <span className="text-[#555A60]">Hidden fees and add-ons</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
                      <span className="text-[#555A60]">Core charges not included</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
                      <span className="text-[#555A60]">Surprise charges at completion</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
                      <span className="text-[#555A60]">Require towing to shop</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
                      <span className="text-[#555A60]">Long wait times</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#007BFF] to-[#18DBF1]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AlertCircle size={64} className="mx-auto text-white mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Call us now for fast mobile battery replacement service. We'll come to your location in 30-45 minutes.
            </p>
            <a
              href="tel:6466527085"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#007BFF] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl"
            >
              <Phone size={24} />
              Call 646-652-7085
            </a>
            <p className="text-white/90 mt-6">
              24/7 Service • All 5 Boroughs • 30-45 Min Arrival
            </p>
          </motion.div>
        </div>
      </section>

      <Footer serviceArea="nyc" />
      <ScrollToTop />
    </div>
  );
};
