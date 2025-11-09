import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactBooking() {
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative bg-gradient-to-t from-white to-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Contact & Booking</h2>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">Book a free consultation. Our specialists will tailor a plan to your goals.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur"
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
            <button type="submit" className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-white shadow-lg shadow-teal-600/20 transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
              <Send size={18} /> {sent ? 'Request Sent' : 'Request Consultation'}
            </button>
          </motion.form>

          <div className="md:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="relative h-64 overflow-hidden rounded-2xl border border-gray-200 bg-white/80 backdrop-blur"
            >
              <img
                src="https://images.unsplash.com/photo-1521043723867-92be52581d19?q=80&w=1200&auto=format&fit=crop"
                alt="Clinic location map"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-end justify-end p-3">
                <div className="rounded-lg bg-white/90 px-3 py-2 text-sm text-gray-800 shadow">123 Regent St, London</div>
              </div>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="grid gap-3"
            >
              <li className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/80 p-3">
                <Phone className="text-teal-600" size={18} /> <span className="text-gray-800">+44 20 1234 5678</span>
              </li>
              <li className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/80 p-3">
                <Mail className="text-teal-600" size={18} /> <span className="text-gray-800">care@prpstudio.clinic</span>
              </li>
              <li className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/80 p-3">
                <MapPin className="text-teal-600" size={18} /> <span className="text-gray-800">Mon–Sat, 9:00–18:00</span>
              </li>
            </motion.ul>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-gray-500">By submitting, you agree to our privacy policy. We will never share your data.</p>
      </div>
    </section>
  );
}
