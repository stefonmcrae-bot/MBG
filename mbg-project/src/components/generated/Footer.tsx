"use client";

import React from 'react';
import { Phone, Mail, MapPin, Clock, Battery, Facebook, Instagram, Twitter } from 'lucide-react';
interface FooterProps {
  serviceArea?: 'nyc' | 'nj';
}
export const Footer = ({
  serviceArea = 'nyc'
}: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const services = [{
    name: 'Mobile Battery Replacement',
    link: serviceArea === 'nj' ? '/nj-battery-service' : '/nyc-battery-service'
  }, {
    name: 'Jump Start Service',
    link: serviceArea === 'nj' ? '/nj-jump-start' : '/nyc-jump-start'
  }, {
    name: 'Battery Testing',
    link: '/services'
  }, {
    name: 'Commercial Fleet Service',
    link: serviceArea === 'nj' ? '/nj-fleet-service' : '/nyc-fleet-service'
  }] as any[];
  const nycServiceAreas = ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'];
  const njServiceAreas = ['Bergen County', 'Hudson County', 'Essex County', 'Passaic County', 'Union County', 'Morris County'];
  const serviceAreas = serviceArea === 'nj' ? njServiceAreas : nycServiceAreas;
  const phoneNumber = serviceArea === 'nj' ? '973-251-9545' : '646-652-7085';
  const phoneHref = serviceArea === 'nj' ? 'tel:9732519545' : 'tel:6466527085';
  return <footer className="bg-[#0E1117] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-xl flex items-center justify-center text-white">
                <Battery size={28} />
              </div>
              <div>
                <div className="text-lg font-bold">Mobile Battery Guys</div>
                <div className="text-xs text-slate-400">24/7 Battery Service</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Fast, reliable mobile battery replacement and jump start service throughout {serviceArea === 'nj' ? 'North Jersey' : 'NYC'}.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-[#5AF08A] hover:bg-slate-700 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-[#5AF08A] hover:bg-slate-700 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-[#5AF08A] hover:bg-slate-700 transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map(service => <li key={service.name}>
                  <a href={service.link} onClick={e => {
                e.preventDefault();
                window.history.pushState({}, '', service.link);
                window.dispatchEvent(new PopStateEvent('popstate'));
                window.scrollTo(0, 0);
              }} className="text-slate-400 hover:text-[#5AF08A] transition-colors text-sm">
                    {service.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map(area => <li key={area}>
                  <a href="/areas-we-service" onClick={e => {
                e.preventDefault();
                window.history.pushState({}, '', '/areas-we-service');
                window.dispatchEvent(new PopStateEvent('popstate'));
                window.scrollTo(0, 0);
              }} className="text-slate-400 hover:text-[#5AF08A] transition-colors text-sm">
                    {area}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href={phoneHref} className="flex items-center gap-3 text-slate-400 hover:text-[#5AF08A] transition-colors">
                <Phone size={18} />
                <span className="text-sm">{phoneNumber}</span>
              </a>
              <a href="mailto:info@mobilebatteryguys.com" className="flex items-center gap-3 text-slate-400 hover:text-[#5AF08A] transition-colors">
                <Mail size={18} />
                <span className="text-sm">info@mobilebatteryguys.com</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={18} />
                <span className="text-sm">{serviceArea === 'nj' ? 'North Jersey' : 'NYC'}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Clock size={18} />
                <span className="text-sm">24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Mobile Battery Guys. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" onClick={e => {
              e.preventDefault();
              window.history.pushState({}, '', '/privacy');
              window.dispatchEvent(new PopStateEvent('popstate'));
              window.scrollTo(0, 0);
            }} className="text-slate-400 hover:text-[#5AF08A] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="/terms" onClick={e => {
              e.preventDefault();
              window.history.pushState({}, '', '/terms');
              window.dispatchEvent(new PopStateEvent('popstate'));
              window.scrollTo(0, 0);
            }} className="text-slate-400 hover:text-[#5AF08A] transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};