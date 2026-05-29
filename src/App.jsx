import { useEffect, useState } from 'react';
import AOS from 'aos';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CTA from './components/CTA';
import Features from './components/Features';
import Clients from './components/Clients';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in-out', once: true, mirror: false });
    const timer = setTimeout(() => setLoaded(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div id="preloader" className={loaded ? 'done' : ''} />
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Services />
        <CTA />
        <Features />
        <Clients />
        <Portfolio />
        <Pricing />
        <FAQ />
        <Team />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
