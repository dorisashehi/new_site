import { useEffect } from 'react';
import AOS from 'aos';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function ContactPage() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in-out', once: true, mirror: false });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="main">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="contact-hero">
          <div className="contact-hero-overlay" />
          <div className="container mit-hero-content" data-aos="fade-up" data-aos-delay="100">
            <div className="mit-hero-badge">
              <i className="bi bi-headset" />
              <span>We're Here to Help</span>
            </div>
            <h1>Contact InfoManage</h1>
            <p className="mit-hero-sub">
              Schedule a consultation to discuss your technology environment and learn how InfoManage can support your operations.
            </p>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
