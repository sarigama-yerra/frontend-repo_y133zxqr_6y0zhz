import React from 'react';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import Pricing from './components/Pricing';
import ContactBooking from './components/ContactBooking';
import ServicesPage from './components/ServicesPage';
import PricingPage from './components/PricingPage';
import ContactPage from './components/ContactPage';
import SpecSheet from './components/SpecSheet';

function useHashRoute() {
  const [hash, setHash] = React.useState(() => window.location.hash || '/');
  React.useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return hash.replace('#', '') || '/';
}

export default function App() {
  const route = useHashRoute();

  if (route === '/services') return <ServicesPage />;
  if (route === '/pricing') return <PricingPage />;
  if (route === '/contact') return <ContactPage />;
  if (route === '/spec') return <SpecSheet />;

  return (
    <div className="font-inter text-gray-900 antialiased">
      {/* Home (uses 4 focused sections) */}
      <Hero3D />
      <Services />
      <Pricing />
      <ContactBooking />
      <footer className="border-t border-gray-200 bg-white/70 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} PRP Studio Clinic. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#/services" className="hover:text-gray-900">Services</a>
            <a href="#/pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#/contact" className="hover:text-gray-900">Contact</a>
            <a href="#/spec" className="hover:text-gray-900">3D Spec</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
