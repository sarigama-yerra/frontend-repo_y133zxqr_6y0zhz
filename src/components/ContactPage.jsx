import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send } from 'lucide-react';

export default function ContactPage() {
  const backHome = () => (window.location.hash = '/');
  const [sent, setSent] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#f7f8fa] to-white">
      <div className="mx-auto max-w-4xl px-6 py-6">
        <div className="mb-6 flex items-center justify-between">
          <button onClick={backHome} className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
            <ArrowLeft size={18} /> Back Home
          </button>
        </div>
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Book Your Consultation</h1>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">Tell us about your goals and preferred timing — we’ll get back within one business day.</p>
        </header>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-gray-700">Name</label>
              <input required className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input type="email" required className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Phone</label>
              <input required className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Preferred Date</label>
              <input type="date" className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-gray-700">Treatment Type</label>
              <select className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-teal-500">
                <option>PRP Therapy</option>
                <option>Laser Hair Stimulation</option>
                <option>Growth-Factor Cocktail</option>
                <option>Scalp Micropigmentation</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-gray-700">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
          </div>
          <button type="submit" className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-white shadow-lg shadow-teal-600/20">
            <Send size={18} /> {sent ? 'Sent!' : 'Request Consultation'}
          </button>
        </motion.form>
      </div>
    </main>
  );
}
