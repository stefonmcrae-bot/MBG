"use client";

import React, { useState, useEffect } from 'react';
import { Car, MapPin, Package, Calendar, CheckCircle, X, ChevronRight, ChevronLeft, Clock, Shield, Battery, Phone, Mail, User, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import VehicleSelector, { VehicleSelectorValue } from '@/components/VehicleSelector';
import { redirectToStripePaymentLink } from '@/lib/stripeLinks';
export interface BookingFlowProps {
  isModal?: boolean;
  onClose?: () => void;
}
interface BookingData {
  // Step 1: Vehicle
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleLicensePlateState: string;
  vehicleLicensePlate: string;
  vehicleVIN: string;
  vehicleIsComplete: boolean;
  vehicleType: 'sedan' | 'suv' | 'truck' | 'van' | '';

  // Step 2: Location
  address: string;
  city: string;
  zip: string;

  // Step 3: Package
  packageTier: 'standard' | 'gold' | 'platinum' | '';

  // Step 4: Contact + Timing
  name: string;
  phone: string;
  email: string;
  timingType: 'asap' | 'schedule';
  scheduledDate: string;
  scheduledTime: string;
}
const packages = [{
  id: 'standard',
  name: 'Standard',
  subtitle: 'Essential Install',
  warranty: '1-Year Warranty',
  price: 259,
  features: ['New battery + professional installation', 'Battery testing before/after install', 'Terminal cleaning & secure mounting', 'Proper disposal of old battery']
}, {
  id: 'gold',
  name: 'Gold',
  subtitle: 'Premium Protection',
  warranty: '3-Year Warranty',
  price: 379,
  features: ['Everything in Standard', 'Enhanced battery performance option', 'Full charging system check (alternator/starter)', 'Corrosion protection on terminals'],
  popular: true
}, {
  id: 'platinum',
  name: 'Platinum',
  subtitle: 'European & Late-Model Ready',
  warranty: '4-Year Warranty',
  price: 449,
  features: ['Everything in Gold', 'Battery registration / coding support', 'Advanced battery & power diagnostics scan', 'Priority handling / premium support']
}] as any[];
const vehicleTypes = [{
  id: 'sedan',
  name: 'Sedan/Coupe',
  upcharge: 0
}, {
  id: 'suv',
  name: 'SUV/Crossover',
  upcharge: 20
}, {
  id: 'truck',
  name: 'Pickup Truck',
  upcharge: 30
}, {
  id: 'van',
  name: 'Cargo Van',
  upcharge: 35
}] as any[];
export const BookingFlow: React.FC<BookingFlowProps> = ({
  isModal = false,
  onClose
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [vehicleSelectorValue, setVehicleSelectorValue] = useState<VehicleSelectorValue>({});
  const [bookingData, setBookingData] = useState<BookingData>({
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleLicensePlateState: '',
    vehicleLicensePlate: '',
    vehicleVIN: '',
    vehicleIsComplete: false,
    vehicleType: '',
    address: '',
    city: '',
    zip: '',
    packageTier: '',
    name: '',
    phone: '',
    email: '',
    timingType: 'asap',
    scheduledDate: '',
    scheduledTime: ''
  });
  const updateField = (field: keyof BookingData, value: any) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const getVehicleUpcharge = () => {
    const vehicleType = vehicleTypes.find(v => v.id === bookingData.vehicleType);
    return vehicleType?.upcharge || 0;
  };
  const getEstimatedTotal = () => {
    const pkg = packages.find(p => p.id === bookingData.packageTier);
    if (!pkg) return 0;
    return pkg.price + getVehicleUpcharge();
  };
  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return bookingData.vehicleIsComplete && bookingData.vehicleType;
      case 2:
        return bookingData.address && bookingData.city && bookingData.zip;
      case 3:
        return bookingData.packageTier !== '';
      case 4:
        return bookingData.name && bookingData.phone && (bookingData.timingType === 'asap' || bookingData.scheduledDate && bookingData.scheduledTime);
      default:
        return false;
    }
  };

  const handleVehicleSelectorChange = (value: VehicleSelectorValue & { isComplete: boolean }) => {
    setVehicleSelectorValue(value);
    setBookingData(prev => ({
      ...prev,
      vehicleYear: value.year || '',
      vehicleMake: value.make || '',
      vehicleModel: value.model || '',
      vehicleLicensePlateState: value.licensePlateState || '',
      vehicleLicensePlate: value.licensePlate || '',
      vehicleVIN: value.vin || '',
      vehicleIsComplete: value.isComplete || false,
    }));
  };
  const handleNext = () => {
    if (canProceed() && currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleSubmit = async () => {
    // Validate required fields for payment
    if (!bookingData.packageTier || !bookingData.email || !bookingData.phone) {
      alert('Please ensure package tier, email, and phone are filled in.');
      return;
    }

    const pkg = packages.find(p => p.id === bookingData.packageTier);
    const submissionData = {
      vehicleYear: bookingData.vehicleYear,
      vehicleMake: bookingData.vehicleMake,
      vehicleModel: bookingData.vehicleModel,
      vehicleLicensePlateState: bookingData.vehicleLicensePlateState,
      vehicleLicensePlate: bookingData.vehicleLicensePlate,
      vehicleVIN: bookingData.vehicleVIN,
      vehicleType: bookingData.vehicleType,
      packageTier: bookingData.packageTier,
      warrantyYears: pkg?.id === 'standard' ? 1 : pkg?.id === 'gold' ? 3 : 4,
      packageBasePrice: pkg?.price || 0,
      address: bookingData.address,
      city: bookingData.city,
      zip: bookingData.zip,
      name: bookingData.name,
      phone: bookingData.phone,
      email: bookingData.email,
      timingType: bookingData.timingType,
      scheduledDateTime: bookingData.timingType === 'schedule' ? `${bookingData.scheduledDate} ${bookingData.scheduledTime}` : null,
      estimatedTotal: getEstimatedTotal(),
      createdAt: new Date().toISOString()
    };

    // Log booking submission (for backend integration later)
    console.log('Booking submission:', submissionData);

    // Redirect to Stripe payment link
    redirectToStripePaymentLink({
      tier: bookingData.packageTier as 'standard' | 'gold' | 'platinum',
      email: bookingData.email,
      phone: bookingData.phone,
    });
  };
  const steps = [{
    number: 1,
    title: 'Vehicle',
    icon: Car
  }, {
    number: 2,
    title: 'Location',
    icon: MapPin
  }, {
    number: 3,
    title: 'Package',
    icon: Package
  }, {
    number: 4,
    title: 'Details',
    icon: Calendar
  }, {
    number: 5,
    title: 'Review',
    icon: CheckCircle
  }] as any[];
  const content = <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#007BFF] to-[#18DBF1] px-4 md:px-6 py-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <Battery size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">Book Your Service</h2>
              <p className="text-sm text-white/90">Fast, easy, under 60 seconds</p>
            </div>
          </div>
          {isModal && onClose && <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <X size={24} className="text-white" />
            </button>}
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-slate-200 px-4 md:px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            {steps.map((step, idx) => <React.Fragment key={step.number}>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${currentStep >= step.number ? 'bg-gradient-to-br from-[#007BFF] to-[#18DBF1] text-white' : 'bg-slate-100 text-slate-400'}`}>
                    {currentStep > step.number ? <CheckCircle size={20} /> : <step.icon size={20} />}
                  </div>
                  <span className={`text-xs md:text-sm font-medium hidden md:block ${currentStep >= step.number ? 'text-[#007BFF]' : 'text-slate-400'}`}>
                    {step.title}
                  </span>
                </div>
                {idx < steps.length - 1 && <div className={`h-0.5 flex-1 transition-all ${currentStep > step.number ? 'bg-[#007BFF]' : 'bg-slate-200'}`} />}
              </React.Fragment>)}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto px-4 md:px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={currentStep} initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: -20
          }} transition={{
            duration: 0.3
          }}>
              {/* Step 1: Vehicle */}
              {currentStep === 1 && <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0E0E0F] mb-2">Tell us about your vehicle</h3>
                    <p className="text-[#555A60]">We'll match you with the right battery</p>
                  </div>

                  <VehicleSelector
                    value={vehicleSelectorValue}
                    onChange={handleVehicleSelectorChange}
                    showErrors={currentStep === 1}
                  />

                  <div>
                    <label className="block text-sm font-medium text-[#0E0E0F] mb-3">
                      Vehicle Type <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {vehicleTypes.map(type => <button key={type.id} onClick={() => updateField('vehicleType', type.id)} className={`p-4 border-2 rounded-lg transition-all ${bookingData.vehicleType === type.id ? 'border-[#007BFF] bg-[#007BFF]/5' : 'border-slate-200 hover:border-slate-300'}`}>
                          <div className="text-center">
                            <Car size={24} className={`mx-auto mb-2 ${bookingData.vehicleType === type.id ? 'text-[#007BFF]' : 'text-[#555A60]'}`} />
                            <div className={`text-sm font-medium ${bookingData.vehicleType === type.id ? 'text-[#007BFF]' : 'text-[#0E0E0F]'}`}>
                              {type.name}
                            </div>
                          </div>
                        </button>)}
                    </div>
                  </div>
                </div>}

              {/* Step 2: Location */}
              {currentStep === 2 && <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0E0E0F] mb-2">Where should we come?</h3>
                    <p className="text-[#555A60]">We'll bring the service to you</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0E0E0F] mb-2">
                      Street Address <span className="text-red-500">*</span>
                    </label>
                    <input type="text" placeholder="123 Main Street" value={bookingData.address} onChange={e => updateField('address', e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#0E0E0F] mb-2">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input type="text" placeholder="New York" value={bookingData.city} onChange={e => updateField('city', e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0E0E0F] mb-2">
                        ZIP Code <span className="text-red-500">*</span>
                      </label>
                      <input type="text" placeholder="10001" value={bookingData.zip} onChange={e => updateField('zip', e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all" />
                    </div>
                  </div>

                  <div className="bg-[#F5F7FA] rounded-lg p-4 border border-slate-200">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-[#007BFF] flex-shrink-0 mt-0.5" size={20} />
                      <div>
                        <h4 className="font-medium text-[#0E0E0F] mb-1">We serve all NYC boroughs</h4>
                        <p className="text-sm text-[#555A60]">Manhattan, Brooklyn, Queens, Bronx, and Staten Island</p>
                      </div>
                    </div>
                  </div>
                </div>}

              {/* Step 3: Package */}
              {currentStep === 3 && <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0E0E0F] mb-2">Choose your service package</h3>
                    <p className="text-[#555A60]">All packages include professional installation</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {packages.map(pkg => <button key={pkg.id} onClick={() => updateField('packageTier', pkg.id)} className={`relative p-6 border-2 rounded-xl transition-all text-left ${bookingData.packageTier === pkg.id ? 'border-[#007BFF] bg-[#007BFF]/5 shadow-lg' : 'border-slate-200 hover:border-slate-300 hover:shadow-md'}`}>
                        {pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#007BFF] to-[#18DBF1] text-white text-xs font-bold px-3 py-1 rounded-full">
                            Most Popular
                          </div>}
                        
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="text-lg font-bold text-[#0E0E0F]">{pkg.name}</h4>
                            <p className="text-sm text-[#555A60]">{pkg.subtitle}</p>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${bookingData.packageTier === pkg.id ? 'border-[#007BFF] bg-[#007BFF]' : 'border-slate-300'}`}>
                            {bookingData.packageTier === pkg.id && <CheckCircle size={16} className="text-white" />}
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex items-center gap-2 text-[#007BFF] mb-2">
                            <Shield size={16} />
                            <span className="text-sm font-medium">{pkg.warranty}</span>
                          </div>
                        </div>

                        <ul className="space-y-2 mb-4">
                          {pkg.features.map((feature, idx) => <li key={idx} className="flex items-start gap-2 text-sm text-[#555A60]">
                              <CheckCircle size={16} className="text-[#5AF08A] flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>)}
                        </ul>
                      </button>)}
                  </div>

                  {bookingData.packageTier && <div className="bg-gradient-to-r from-[#007BFF] to-[#18DBF1] rounded-xl p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white/90 text-sm mb-1">Estimated Total</p>
                          <p className="text-3xl font-bold">${getEstimatedTotal()}</p>
                        </div>
                        <Battery size={48} className="text-white/20" />
                      </div>
                    </div>}
                </div>}

              {/* Step 4: Contact + Timing */}
              {currentStep === 4 && <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0E0E0F] mb-2">Contact & scheduling</h3>
                    <p className="text-[#555A60]">How can we reach you?</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#0E0E0F] mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555A60]" />
                        <input type="text" placeholder="John Smith" value={bookingData.name} onChange={e => updateField('name', e.target.value)} className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0E0E0F] mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555A60]" />
                        <input type="tel" placeholder="(555) 123-4567" value={bookingData.phone} onChange={e => updateField('phone', e.target.value)} className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0E0E0F] mb-2">
                      Email (optional)
                    </label>
                    <div className="relative">
                      <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555A60]" />
                      <input type="email" placeholder="john@example.com" value={bookingData.email} onChange={e => updateField('email', e.target.value)} className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0E0E0F] mb-3">
                      When do you need service? <span className="text-red-500">*</span>
                    </label>
                    <div className="grid md:grid-cols-2 gap-3 mb-4">
                      <button onClick={() => updateField('timingType', 'asap')} className={`p-4 border-2 rounded-lg transition-all ${bookingData.timingType === 'asap' ? 'border-[#007BFF] bg-[#007BFF]/5' : 'border-slate-200 hover:border-slate-300'}`}>
                        <Clock size={24} className={`mb-2 ${bookingData.timingType === 'asap' ? 'text-[#007BFF]' : 'text-[#555A60]'}`} />
                        <div className={`font-medium ${bookingData.timingType === 'asap' ? 'text-[#007BFF]' : 'text-[#0E0E0F]'}`}>
                          ASAP
                        </div>
                        <div className="text-sm text-[#555A60]">60-90 min response</div>
                      </button>
                      <button onClick={() => updateField('timingType', 'schedule')} className={`p-4 border-2 rounded-lg transition-all ${bookingData.timingType === 'schedule' ? 'border-[#007BFF] bg-[#007BFF]/5' : 'border-slate-200 hover:border-slate-300'}`}>
                        <Calendar size={24} className={`mb-2 ${bookingData.timingType === 'schedule' ? 'text-[#007BFF]' : 'text-[#555A60]'}`} />
                        <div className={`font-medium ${bookingData.timingType === 'schedule' ? 'text-[#007BFF]' : 'text-[#0E0E0F]'}`}>
                          Schedule
                        </div>
                        <div className="text-sm text-[#555A60]">Pick date & time</div>
                      </button>
                    </div>

                    {bookingData.timingType === 'schedule' && <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-sm font-medium text-[#0E0E0F] mb-2">
                            Date <span className="text-red-500">*</span>
                          </label>
                          <input type="date" value={bookingData.scheduledDate} onChange={e => updateField('scheduledDate', e.target.value)} min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#0E0E0F] mb-2">
                            Time <span className="text-red-500">*</span>
                          </label>
                          <input type="time" value={bookingData.scheduledTime} onChange={e => updateField('scheduledTime', e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all" />
                        </div>
                      </div>}
                  </div>
                </div>}

              {/* Step 5: Review */}
              {currentStep === 5 && <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0E0E0F] mb-2">Review your booking</h3>
                    <p className="text-[#555A60]">Please confirm all details are correct</p>
                  </div>

                  <div className="space-y-4">
                    {/* Vehicle Info */}
                    <div className="bg-white border border-slate-200 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-lg flex items-center justify-center">
                          <Car size={20} className="text-white" />
                        </div>
                        <h4 className="font-bold text-[#0E0E0F]">Vehicle</h4>
                      </div>
                      <div className="pl-13 space-y-1 text-sm text-[#555A60]">
                        <p>{bookingData.vehicleYear} {bookingData.vehicleMake} {bookingData.vehicleModel}</p>
                        {bookingData.vehicleLicensePlate && (
                          <p>License Plate: {bookingData.vehicleLicensePlateState} {bookingData.vehicleLicensePlate}</p>
                        )}
                        {bookingData.vehicleVIN && <p>VIN: {bookingData.vehicleVIN}</p>}
                        <p className="capitalize">Type: {bookingData.vehicleType}</p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="bg-white border border-slate-200 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-lg flex items-center justify-center">
                          <MapPin size={20} className="text-white" />
                        </div>
                        <h4 className="font-bold text-[#0E0E0F]">Service Location</h4>
                      </div>
                      <div className="pl-13 text-sm text-[#555A60]">
                        <p>{bookingData.address}</p>
                        <p>{bookingData.city}, {bookingData.zip}</p>
                      </div>
                    </div>

                    {/* Package */}
                    <div className="bg-white border border-slate-200 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-lg flex items-center justify-center">
                          <Package size={20} className="text-white" />
                        </div>
                        <h4 className="font-bold text-[#0E0E0F]">Service Package</h4>
                      </div>
                      <div className="pl-13 space-y-1 text-sm text-[#555A60]">
                        <p className="font-medium text-[#0E0E0F] capitalize">
                          {packages.find(p => p.id === bookingData.packageTier)?.name} Package
                        </p>
                        <p className="flex items-center gap-2">
                          <Shield size={14} />
                          {packages.find(p => p.id === bookingData.packageTier)?.warranty}
                        </p>
                      </div>
                    </div>

                    {/* Contact & Timing */}
                    <div className="bg-white border border-slate-200 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-lg flex items-center justify-center">
                          <Calendar size={20} className="text-white" />
                        </div>
                        <h4 className="font-bold text-[#0E0E0F]">Contact & Timing</h4>
                      </div>
                      <div className="pl-13 space-y-1 text-sm text-[#555A60]">
                        <p>{bookingData.name}</p>
                        <p>{bookingData.phone}</p>
                        {bookingData.email && <p>{bookingData.email}</p>}
                        <p className="pt-2 font-medium text-[#0E0E0F]">
                          {bookingData.timingType === 'asap' ? 'ASAP Service (60-90 min)' : `Scheduled: ${new Date(bookingData.scheduledDate).toLocaleDateString()} at ${bookingData.scheduledTime}`}
                        </p>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="bg-gradient-to-r from-[#007BFF] to-[#18DBF1] rounded-xl p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white/90 text-sm mb-1">Estimated Total</p>
                          <p className="text-4xl font-bold">${getEstimatedTotal()}</p>
                          <p className="text-white/80 text-sm mt-2">
                            Includes all fees • Payment after confirmation
                          </p>
                        </div>
                        <CheckCircle size={48} className="text-white/30" />
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleSubmit} 
                    disabled={!bookingData.packageTier || !bookingData.email || !bookingData.phone}
                    className="w-full bg-gradient-to-r from-[#007BFF] to-[#18DBF1] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Confirm & Continue to Payment
                    <ChevronRight size={24} />
                  </button>

                  <p className="text-xs text-center text-[#555A60]">
                    By confirming, you agree to our terms of service. Payment will be processed securely via Stripe.
                  </p>
                </div>}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Footer */}
      {currentStep < 5 && <div className="bg-white border-t border-slate-200 px-4 md:px-6 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <button onClick={handleBack} disabled={currentStep === 1} className="flex items-center gap-2 px-6 py-3 text-[#555A60] hover:text-[#0E0E0F] disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
              <ChevronLeft size={20} />
              Back
            </button>

            <button onClick={handleNext} disabled={!canProceed()} className="flex items-center gap-2 bg-gradient-to-r from-[#007BFF] to-[#18DBF1] text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed">
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        </div>}
    </div>;
  if (isModal) {
    return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} exit={{
        opacity: 0,
        scale: 0.95
      }} className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
          {content}
        </motion.div>
      </div>;
  }
  return <div className="min-h-screen bg-[#F5F7FA] flex flex-col">
      {content}
    </div>;
};