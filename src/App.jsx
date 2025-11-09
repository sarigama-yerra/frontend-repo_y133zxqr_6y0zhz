import React from 'react';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import Pricing from './components/Pricing';
import GalleryTestimonials from './components/GalleryTestimonials';
import ContactBooking from './components/ContactBooking';

export default function App() {
  return (
    <div className="font-inter text-gray-900 antialiased">
      <Hero3D />
      <Services />
      <Pricing />
      <GalleryTestimonials />
      <ContactBooking />
      <footer className="border-t border-gray-200 bg-white/70 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} PRP Studio Clinic. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#gallery" className="hover:text-gray-900">Results</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
