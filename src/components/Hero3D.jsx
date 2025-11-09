import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Calendar, Menu, X } from 'lucide-react';

export default function Hero3D() {
  const [open, setOpen] = React.useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-white via-[#f7f8fa] to-white">
      {/* 3D Scene Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6p2t8mVg0cPZh6sH/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for readability (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />

      {/* Navigation */}
      <header className="relative z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-semibold tracking-tight text-gray-900"
          >
            PRP Studio Clinic
          </motion.div>

          {/* Desktop nav */}
          <nav className="hidden gap-8 md:flex">
            {[
              { id: 'home', label: 'Home' },
              { id: 'services', label: 'Services' },
              { id: 'pricing', label: 'Pricing' },
              { id: 'gallery', label: 'Before & After' },
              { id: 'contact', label: 'Contact & Booking' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm text-gray-700 transition-colors hover:text-gray-900"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white/70 p-2 text-gray-700 backdrop-blur md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-4 rounded-xl border border-gray-200 bg-white/80 p-4 shadow-lg backdrop-blur md:hidden"
          >
            <div className="grid gap-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'pricing', label: 'Pricing' },
                { id: 'gallery', label: 'Before & After' },
                { id: 'contact', label: 'Contact & Booking' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="rounded-md px-2 py-2 text-left text-gray-700 hover:bg-gray-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-20 text-center md:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl md:text-6xl"
        >
          Revive Your Hair. Rediscover Confidence.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mx-auto max-w-2xl text-base text-gray-700 sm:text-lg"
        >
          Advanced PRP Hair Regeneration Clinic — clinically proven therapies, delivered with precision and care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="flex flex-col items-center gap-3 sm:flex-row"
        >
          <button
            onClick={() => scrollTo('contact')}
            className="group inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-white shadow-lg shadow-teal-600/20 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <Calendar size={18} />
            Book Your Free Consultation
          </button>
          <button
            onClick={() => scrollTo('services')}
            className="rounded-full border border-gray-300 bg-white/80 px-6 py-3 text-gray-800 backdrop-blur transition-colors hover:bg-gray-50"
          >
            Explore Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
