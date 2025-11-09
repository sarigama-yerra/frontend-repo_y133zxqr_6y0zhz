import React from 'react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Basic Session',
    price: '$299',
    features: ['Single PRP session', 'Scalp assessment', 'Aftercare kit'],
    accent: 'from-teal-500 to-teal-600',
  },
  {
    name: 'Advanced Package',
    price: '$799',
    features: ['3 PRP sessions', 'Laser stimulation add-on', 'Growth-factor boost'],
    highlighted: true,
    accent: 'from-teal-600 to-teal-700',
  },
  {
    name: 'Maintenance Plan',
    price: '$149/mo',
    features: ['Quarterly boosters', 'Check-ins & photos', 'Priority scheduling'],
    accent: 'from-teal-500 to-teal-600',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Pricing</h2>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">Transparent packages tailored to your journey.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative rounded-2xl border ${t.highlighted ? 'border-teal-300 shadow-xl' : 'border-gray-200 shadow-md'} bg-white/70 p-6 backdrop-blur`}
            >
              <div className="mb-4 flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
                <span className="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-2xl font-bold text-transparent">{t.price}</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500" /> {f}
                  </li>
                ))}
              </ul>
              <button className="mt-5 w-full rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-4 py-3 text-white shadow-lg shadow-teal-600/20 transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                Book Now
              </button>
              <div className={`pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br ${t.accent} opacity-20 blur-2xl`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
