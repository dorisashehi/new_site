import { useState, useEffect } from 'react';

const serviceLinks = ['Managed IT Services', 'Help Desk Support', 'Cybersecurity', 'Cloud Management', 'Infrastructure Management', 'vCTO Advisory'];
const industryLinks = ['Financial Services', 'Legal', 'Healthcare', 'Media & Advertising', 'Real Estate', 'Manufacturing'];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <footer id="footer" className="site-footer">
        <div className="container">
          <div className="footer-inner">
            {/* Brand */}
            <div className="footer-brand">
              <div style={{ display: 'inline-block', background: '#fff', borderRadius: 8, padding: '8px 14px', marginBottom: 16 }}>
                <img src="/logo.jpg" alt="InfoManage" style={{ height: 40, objectFit: 'contain', display: 'block' }} />
              </div>
              <p>InfoManage manages day-to-day IT operations while helping organizations plan, secure, and scale their technology environments. Serving organizations since 1995.</p>
              <p className="newsletter-title" style={{ marginTop: 16 }}>Stay Informed</p>
              <div className="nl-form">
                <input className="nl-input" type="email" placeholder="Your work email"
                  value={email} onChange={e => setEmail(e.target.value)} />
                <button type="button" className="nl-btn" onClick={() => setEmail('')}>
                  <i className="bi bi-send" />
                </button>
              </div>
            </div>

            {/* Services */}
            <div className="footer-links-col">
              <h4>Services</h4>
              <ul>
                {serviceLinks.map(l => (
                  <li key={l}><a href="#services"><i className="bi bi-chevron-right" />{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className="footer-links-col">
              <h4>Industries</h4>
              <ul>
                {industryLinks.map(l => (
                  <li key={l}><a href="#portfolio"><i className="bi bi-chevron-right" />{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-contact-col">
              <h4>Contact InfoManage</h4>
              <div className="contact-entry">
                <i className="bi bi-telephone" />
                <p>+1 (800) 555-0195</p>
              </div>
              <div className="contact-entry">
                <i className="bi bi-envelope" />
                <p><a href="mailto:info@infomanage.com">info@infomanage.com</a></p>
              </div>
              <div className="contact-entry">
                <i className="bi bi-clock" />
                <p>Mon–Fri: 8AM – 6PM<br />Enterprise 24×7 support available</p>
              </div>
              <div className="contact-entry">
                <i className="bi bi-geo-alt" />
                <p>New York Metro Area<br />Serving clients nationwide</p>
              </div>
              <div className="footer-socials">
                {['bi-linkedin', 'bi-twitter-x', 'bi-facebook', 'bi-youtube'].map((s, i) => (
                  <a key={i} href="#"><i className={`bi ${s}`} /></a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="container">
            <div className="footer-bottom-inner">
              <div className="copyright">
                <p>© <span>Copyright</span> <strong>InfoManage</strong> <span>All Rights Reserved · Established 1995</span></p>
              </div>
              <div className="bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Acceptable Use</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="#hero"
        className={`scroll-top-btn${showTop ? ' visible' : ''}`}
        aria-label="Back to top"
        onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  );
}
