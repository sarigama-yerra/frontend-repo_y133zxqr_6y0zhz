import React from 'react';

export default function SpecSheet() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#f7f8fa] to-white">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">3D & Interaction Specification</h1>
        <p className="mt-2 max-w-2xl text-gray-600">Guidelines for the immersive environment, models, animations, and performance targets.</p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900">3D Models</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-700">
            <li>Clinic Studio Room: minimalist treatment space with depth layers (foreground instruments, mid room, background wall art).</li>
            <li>Hair-Follicle Motif: stylised follicle clusters for hero; subtle rotation, soft rim light, metallic-teal accents.</li>
            <li>Interactive Hotspots: small glowing nodes (teal/gold) mapped to services; hover/click reveals tooltips.</li>
            <li>Ambient Particles: sparse floating specks/light rays for premium ambience (disabled on low-power devices).</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900">Animation & Triggers</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-700">
            <li>Hero Camera: gentle dolly/pan on entry; slight parallax on scroll (1–3° yaw, 10–20px shift).</li>
            <li>Hotspots: pulse (opacity 0.6→1), scale 0.98→1.02 on hover; tooltip fades in (150–250ms, ease-out).</li>
            <li>Cards: services/pricing cards slide/fade up on view; hover lift and soft shadow bloom.</li>
            <li>Gallery: horizontal scroll with snap; images scale 1→1.03 on hover and show caption.</li>
            <li>CTAs: micro-scale 1→1.02 on hover; focus rings visible for keyboard navigation.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900">Responsive Behaviour</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-700">
            <li>Mobile: reduced poly models; disable heavy post-processing; maintain subtle motion.</li>
            <li>Cards stack in a single column; navigation becomes a hamburger panel.</li>
            <li>Hit targets ≥44px; text sizes scale to maintain readability.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900">Performance Targets</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-700">
            <li>Initial page load ≤ 2.5s on 4G (hero scene lazy-loaded below nav).</li>
            <li>Textures ≤ 2K; compressed; use instancing for repeated motifs.</li>
            <li>Defer non-critical scripts; intersection observers for animations.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900">Accessibility & SEO</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-700">
            <li>Contrasting text over 3D with gradient scrims; semantic headings and labels.</li>
            <li>Keyboard focusable hotspots and buttons; pref-reduced-motion support.</li>
            <li>Meta titles/descriptions per page; JSON-LD for LocalBusiness.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900">Analytics</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-700">
            <li>Track clicks on “Book Now”, form submissions, and hotspot reveals.</li>
            <li>Funnel events: hero CTA → pricing view → contact submit.</li>
          </ul>
        </section>

        <div className="mt-10 text-sm text-gray-600">Navigate back using your browser or change the hash to '/'</div>
      </div>
    </main>
  );
}
