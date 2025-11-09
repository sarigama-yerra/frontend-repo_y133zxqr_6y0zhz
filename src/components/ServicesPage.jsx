import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Droplet, Sun, Sparkles, Activity } from 'lucide-react';

export default function ServicesPage() {
  const backHome = () => (window.location.hash = '/');
  const toPricing = () => (window.location.hash = '/pricing');

  const items = [
    {
      icon: <Droplet className="h-6 w-6 text-teal-600" />,
      title: 'PRP Therapy',
      content:
        'A concentration of your own platelets is injected to awaken dormant follicles, extend the growth phase, and improve hair density with minimal downtime.'
    },
    {
      icon: <Sun className="h-6 w-6 text-teal-600" />,
      title: 'Laser Hair Stimulation',
      content:
        'Low-level laser light enhances microcirculation and cellular energy in the scalp, complementing PRP for faster, stronger regrowth.'
    },
    {
      icon: <Sparkles className="h-6 w-6 text-teal-600" />,
      title: 'Growth-Factor Cocktail',
      content:
        'Bioactive boosters (peptides + vitamins) are paired with PRP to amplify outcomes and support scalp health between sessions.'
    },
    {
      icon: <Activity className="h-6 w-6 text-teal-600" />,
      title: 'Scalp Micropigmentation',
      content:
        'Ultra-fine pigment dots replicate hair follicles to create natural-looking density for edges, crowns, and shaved styles.'
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#f7f8fa] to-white">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="mb-6 flex items-center justify-between">
          <button onClick={backHome} className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
            <ArrowLeft size={18} /> Back Home
          </button>
          <button onClick={toPricing} className="rounded-full bg-teal-600 px-4 py-2 text-sm text-white">View Pricing</button>
        </div>

        <header className="mb-10 text-center">
          <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Our Services</h1>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">
            Clinically-proven therapies designed to restore natural hair growth with precision and care.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50">{s.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">{s.content}</p>
            </motion.article>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900">FAQ</h2>
          <div className="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white/80">
            {[
              {
                q: 'How many PRP sessions will I need?',
                a: 'Most clients start with 3 sessions spaced 4–6 weeks apart, followed by maintenance as advised by your specialist.'
              },
              {
                q: 'Is there downtime?',
                a: 'Downtime is minimal. You can usually resume normal activities the same day. We provide gentle aftercare guidance.'
              },
              {
                q: 'Who is a good candidate?',
                a: 'Men and women experiencing thinning or early hair loss often see meaningful results. A consultation will determine suitability.'
              }
            ].map((f, idx) => (
              <details key={f.q} className="group p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-gray-900">
                  {f.q}
                  <span className="ml-3 inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 group-open:bg-teal-50 group-open:text-teal-700">{idx + 1}</span>
                </summary>
                <p className="mt-2 text-sm text-gray-700">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
