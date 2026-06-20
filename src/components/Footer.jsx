import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const serviceLinks = [
  { label: 'Managed IT Services', href: '/managed-it-services#overview' },
  { label: 'Help Desk Support', href: '/managed-it-services#operational-support' },
  { label: 'Cybersecurity', href: '/cybersecurity-services#core-services' },
  { label: 'Cloud Management', href: '/it-strategy-advisory#infrastructure-architecture' },
  { label: 'Infrastructure Management', href: '/it-strategy-advisory#infrastructure-architecture' },
  { label: 'vCTO Advisory', href: '/it-strategy-advisory#vcto' },
];
const companyLinks = [
  { label: 'About InfoManage', href: '/about' },
  { label: 'Our Story', href: '/about#our-story' },
  { label: 'Leadership', href: '/about#leadership' },
  { label: 'Our Values', href: '/about#values' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [email, setEmail] = useState('');
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleFooterLinkClick = href => e => {
    const [path, hash] = href.split('#');
    if (location.pathname !== path) return;

    e.preventDefault();
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer id="footer" className="site-footer">
        <div className="container">
          <div className="footer-inner">
            {/* Brand */}
            <div className="footer-brand">
              <div style={{ marginBottom: 16 }}>
                <img src="/logo.png" alt="InfoManage" style={{ height: 62, objectFit: 'contain', display: 'block', filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.5)) brightness(1.08)' }} />
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
                  <li key={l.label}><Link to={l.href} onClick={handleFooterLinkClick(l.href)}><i className="bi bi-chevron-right" />{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="footer-links-col">
              <h4>Company</h4>
              <ul>
                {companyLinks.map(l => (
                  <li key={l.label}><Link to={l.href} onClick={handleFooterLinkClick(l.href)}><i className="bi bi-chevron-right" />{l.label}</Link></li>
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
                {[
                  { icon: 'bi-linkedin', href: 'https://www.linkedin.com/company/infomanage-corporation/' },
                  { icon: 'bi-twitter-x', href: '#' },
                  { icon: 'bi-facebook', href: 'https://www.facebook.com/profile.php?id=100078690196056' },
                  { icon: 'bi-youtube', href: '#' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    <i className={`bi ${s.icon}`} />
                  </a>
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
