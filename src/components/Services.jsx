import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Activity, Droplet, Sun } from 'lucide-react';

const services = [
  {
    icon: <Droplet className="h-6 w-6 text-teal-600" />,
    title: 'PRP Therapy',
    desc: 'Concentrated platelet-rich plasma stimulates follicles to restore natural growth.'
  },
  {
    icon: <Sun className="h-6 w-6 text-teal-600" />,
    title: 'Laser Hair Stimulation',
    desc: 'Low-level laser therapy increases scalp circulation to support strong regrowth.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-teal-600" />,
    title: 'Growth-Factor Cocktail',
    desc: 'Advanced bioactive boosters enhance PRP outcomes and reduce downtime.'
  },
  {
    icon: <Activity className="h-6 w-6 text-teal-600" />,
    title: 'Scalp Micropigmentation',
    desc: 'Hyper-realistic density shading for fuller-looking hairlines and crowns.'
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Services</h2>
        <p className="mx-auto mt-2 max-w-2xl text-gray-600">Personalised plans designed by specialists to meet your hair goals.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm backdrop-blur transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50">{s.icon}</div>
              <h3 className="text-lg font-medium text-gray-900">{s.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{s.desc}</p>
            <button className="mt-4 inline-flex text-sm font-medium text-teal-700 transition-colors hover:text-teal-800">View Pricing →</button>

            {/* hover flourish */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-teal-200/30 blur-2xl transition-transform duration-300 group-hover:scale-125" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
