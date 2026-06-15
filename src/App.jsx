import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import CTA from "./components/CTA";
import Features from "./components/Features";
import HowWeWork from "./components/HowWeWork";
import Clients from "./components/Clients";
import Pricing from "./components/Pricing";
import Partnership from "./components/Partnership";
import Trusted from "./components/Trusted";
import FAQ from "./components/FAQ";
import Team from "./components/Team";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ManagedITPage from "./pages/ManagedITPage";
import CybersecurityPage from "./pages/CybersecurityPage";

function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
    return () => clearTimeout(timer);
  }, [hash]);
  return null;
}

function HomePage({ loaded }) {
  return (
    <>
      <div id="preloader" className={loaded ? "done" : ""} />
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Services />
        <CTA />
        <Features />
        <HowWeWork />
        <Clients />
        <Pricing />
        <Partnership />
        <Trusted />
        <FAQ />
        <Team />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
    const timer = setTimeout(() => setLoaded(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage loaded={loaded} />} />
        <Route path="/managed-it-services" element={<ManagedITPage />} />
        <Route path="/cybersecurity-services" element={<CybersecurityPage />} />
      </Routes>
    </>
  );
}
