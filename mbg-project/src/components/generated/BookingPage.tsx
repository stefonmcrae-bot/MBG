"use client";

import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { BookingFlow } from './BookingFlow';
export const BookingPage: React.FC = () => {
  return <div className="font-sans text-[#0E0E0F] bg-white min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 pt-20">
        <BookingFlow isModal={false} />
      </div>

      <Footer serviceArea="nyc" />
      <ScrollToTop />
    </div>;
};