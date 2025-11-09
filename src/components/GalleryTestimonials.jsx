import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const photos = [
  { src: 'https://images.unsplash.com/photo-1656587174872-71570633372f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYWxlJTJDJTIwMzQlMjAlRTIlODAlQTIlMjAzfGVufDB8MHx8fDE3NjI3MTczMDZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', caption: 'Male, 34 • 3 PRP Sessions • 5 Months' },
  { src: 'https://images.unsplash.com/photo-1656587174872-71570633372f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYWxlJTJDJTIwMzQlMjAlRTIlODAlQTIlMjAzfGVufDB8MHx8fDE3NjI3MTczMDZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', caption: 'Female, 29 • PRP + Laser • 4 Months' },
  { src: 'https://images.unsplash.com/photo-1635358155375-91fc9cdc8d26?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3MTczMDd8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', caption: 'Male, 41 • Advanced Package • 6 Months' },
];

const testimonials = [
  {
    name: 'Sophie R.',
    quote: 'I saw new baby hairs within weeks. The team is so caring and professional!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?img=5',
  },
  {
    name: 'David K.',
    quote: 'PRP + laser worked wonders. Booking and follow-ups were seamless.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?img=15',
  },
  {
    name: 'Amir H.',
    quote: 'Discreet, modern clinic. The results boosted my confidence.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?img=22',
  },
];

export default function GalleryTestimonials() {
  return (
    <section id="gallery" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Before & After + Reviews</h2>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">Real transformations, real people.</p>
        </div>

        {/* Horizontal scroll gallery */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white/60 p-4 backdrop-blur">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
            {photos.map((p, i) => (
              <motion.figure
                key={p.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="min-w-[80%] snap-center overflow-hidden rounded-xl sm:min-w-[40%] lg:min-w-[30%]"
              >
                <img src={p.src} alt={p.caption} className="h-60 w-full object-cover sm:h-72 md:h-80" />
                <figcaption className="p-3 text-sm text-gray-700">{p.caption}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-white/70 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-medium text-gray-900">{t.name}</p>
                  <div className="flex text-teal-600">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-700">“{t.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
