"use client";

import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Battery, Zap, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export interface HeaderProps {
  serviceArea?: 'nyc' | 'nj';
  logoLink?: string;
}
export const Header = ({
  serviceArea = 'nyc',
  logoLink = '/'
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigation = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'Services',
    href: '/services',
    hasDropdown: true,
    dropdownItems: serviceArea === 'nj' ? [{
      name: 'NJ Battery Replacement',
      href: '/nj-battery-service'
    }, {
      name: 'NJ Jump Start Service',
      href: '/nj-jump-start'
    }] : [{
      name: 'NYC Battery Replacement',
      href: '/nyc-battery-service'
    }, {
      name: 'NYC Jump Start Service',
      href: '/nyc-jump-start'
    }]
  }, {
    name: 'About',
    href: '/about'
  }, {
    name: 'Service Areas',
    href: '/areas-we-service'
  }, {
    name: 'Contact',
    href: '/contact'
  }] as any[];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0E1117]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href={logoLink} onClick={e => {
          e.preventDefault();
          window.history.pushState({}, '', logoLink);
          window.dispatchEvent(new PopStateEvent('popstate'));
          window.scrollTo(0, 0);
        }} className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-xl flex items-center justify-center text-white shadow-lg">
              <Battery size={28} />
            </div>
            <div>
              <div className={`text-xl font-bold ${isScrolled ? 'text-white' : 'text-white'}`}>Mobile Battery Guys</div>
              <div className={`text-xs ${isScrolled ? 'text-slate-300' : 'text-white/90'}`}>24/7 Battery Service</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map(item => item.hasDropdown ? <div key={item.name} className="relative">
                  <button onClick={() => setIsServicesOpen(!isServicesOpen)} onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className={`font-medium transition-colors flex items-center gap-1 ${isScrolled ? 'text-slate-200 hover:text-[#5AF08A]' : 'text-white hover:text-[#5AF08A]'}`}>
                    {item.name}
                    <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && <div onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className="absolute top-full left-0 mt-2 w-64 bg-[#0E1117] border border-slate-700 rounded-lg shadow-xl py-2 z-50">
                      {item.dropdownItems.map((dropdownItem: any) => <a key={dropdownItem.name} href={dropdownItem.href} onClick={e => {
                e.preventDefault();
                setIsServicesOpen(false);
                window.history.pushState({}, '', dropdownItem.href);
                window.dispatchEvent(new PopStateEvent('popstate'));
                window.scrollTo(0, 0);
              }} className="block px-4 py-2 text-slate-200 hover:text-[#5AF08A] hover:bg-slate-800/50 transition-colors">
                          {dropdownItem.name}
                        </a>)}
                    </div>}
                </div> : <a key={item.name} href={item.href} onClick={e => {
            e.preventDefault();
            window.history.pushState({}, '', item.href);
            window.dispatchEvent(new PopStateEvent('popstate'));
            window.scrollTo(0, 0);
          }} className={`font-medium transition-colors ${isScrolled ? 'text-slate-200 hover:text-[#5AF08A]' : 'text-white hover:text-[#5AF08A]'}`}>
                  {item.name}
                </a>)}
          </nav>

          {/* CTA Button */}
          <a href="tel:6466527085" className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-[#007BFF] to-[#18DBF1] text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all">
            <Phone size={20} />
            646-652-7085
          </a>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`lg:hidden p-2 ${isScrolled ? 'text-white' : 'text-white'}`}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="lg:hidden bg-[#0E1117] border-t border-slate-700 overflow-hidden">
            <div className="container mx-auto px-4 py-4">
              {navigation.map(item => <div key={item.name}>
                  <a href={item.href} onClick={e => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              window.history.pushState({}, '', item.href);
              window.dispatchEvent(new PopStateEvent('popstate'));
              window.scrollTo(0, 0);
            }} className="block py-3 text-slate-200 hover:text-[#5AF08A] font-medium border-b border-slate-800">
                    {item.name}
                  </a>
                  {item.hasDropdown && item.dropdownItems.map((dropdownItem: any) => <a key={dropdownItem.name} href={dropdownItem.href} onClick={e => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              window.history.pushState({}, '', dropdownItem.href);
              window.dispatchEvent(new PopStateEvent('popstate'));
              window.scrollTo(0, 0);
            }} className="block py-2 pl-6 text-sm text-slate-300 hover:text-[#5AF08A] border-b border-slate-800">
                      {dropdownItem.name}
                    </a>)}
                </div>)}
              <a href="tel:6466527085" className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#007BFF] to-[#18DBF1] text-white px-6 py-3 rounded-xl font-bold mt-4">
                <Phone size={20} />
                646-652-7085
              </a>
            </div>
          </motion.div>}
      </AnimatePresence>
    </header>;
};