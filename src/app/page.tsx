import Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';
import Overview from '@/components/sections/overview';
import Activities from '@/components/sections/activities';
import Location from '@/components/sections/location';
import Contact from '@/components/sections/contact';

import type { JSX } from 'react';


export default function Home(): JSX.Element {
  return (
    <div className="relative min-h-screen bg-gray-900 text-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-16 space-y-32 ">
        <section id="overview" className="pt-20">
          <Overview />
        </section>

        <section id="activities" className="pt-20">
          <Activities />
        </section>

        <section id="location" className="pt-20">
          <Location />
        </section>

        <section id="contact" className="pt-20 pb-32">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
