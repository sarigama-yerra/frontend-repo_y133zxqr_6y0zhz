import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const tiers = [
  {
    name: 'Basic Session',
    price: '$299',
    details: [
      'Single PRP session',
      'Consultation & scalp analysis',
      'Aftercare kit & check-in',
    ],
  },
  {
    name: 'Advanced Package',
    price: '$799',
    details: [
      '3 PRP sessions (4–6 weeks apart)',
      'Laser stimulation add-on',
      'Growth-factor boost',
    ],
  },
  {
    name: 'Maintenance Plan',
    price: '$149/mo',
    details: [
      'Quarterly boosters',
      'Progress photos & reviews',
      'Priority scheduling',
    ],
  },
];

export default function PricingPage() {
  const backHome = () => (window.location.hash = '/');
  const toContact = () => (window.location.hash = '/contact');

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#f7f8fa] to-white">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="mb-6 flex items-center justify-between">
          <button onClick={backHome} className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
            <ArrowLeft size={18} /> Back Home
          </button>
          <button onClick={toContact} className="rounded-full bg-teal-600 px-4 py-2 text-sm text-white">Book Now</button>
        </div>

        <header className="mb-10 text-center">
          <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Transparent Pricing</h1>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">Invest in long-term confidence with clear, honest packages.</p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur"
            >
              <div className="mb-4 flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
                <span className="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-2xl font-bold text-transparent">{t.price}</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                {t.details.map((d) => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500" /> {d}
                  </li>
                ))}
              </ul>
              <button onClick={toContact} className="mt-5 w-full rounded-xl bg-teal-600 px-4 py-3 text-white shadow-lg shadow-teal-600/20 transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">Book This Plan</button>
            </motion.article>
          ))}
        </div>

        <section className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gray-200 bg-white/80 p-6 text-sm text-gray-700">
          Prices shown are indicative and may vary based on individual assessment. All consultations are free and obligation-free.
        </section>
      </div>
    </main>
  );
}
