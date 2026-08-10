import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const serviceLinks = [
  { label: 'Managed IT', href: '/managed-it-services' },
  { label: 'Cybersecurity', href: '/cybersecurity-services' },
  { label: 'IT Strategy', href: '/it-strategy-advisory' },
  { label: 'Cloud Solutions', href: '/it-strategy-advisory#infrastructure-architecture' },
  { label: 'IT Consulting', href: '/it-strategy-advisory' },
];
const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Team', href: '/about#leadership' },
  { label: 'Careers', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '/contact' },
];
const resourceLinks = [
  { label: 'Case Studies', href: '#' },
  { label: 'Partners', href: '#' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Support Center', href: '/contact' },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
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
              <div style={{ marginBottom: 16, lineHeight: 1 }}>
                <div style={{ fontSize: 30, fontWeight: 800, color: '#fff', fontFamily: '"Nunito", sans-serif', letterSpacing: -0.5 }}>
                  Info<span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Manage</span>
                  <sup style={{ fontSize: 12, marginLeft: 2, fontWeight: 600 }}>&trade;</sup>
                </div>
                <div style={{ fontSize: 12, fontStyle: 'italic', color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>
                  Keeps you&hellip; Up and Running!&trade;
                </div>
              </div>
              <p>InfoManage manages day-to-day IT operations while helping organizations plan, secure, and scale their technology environments. Serving organizations since 1995.</p>
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

            {/* Resources */}
            <div className="footer-links-col">
              <h4>Resources</h4>
              <ul>
                {resourceLinks.map(l => (
                  <li key={l.label}><Link to={l.href} onClick={handleFooterLinkClick(l.href)}><i className="bi bi-chevron-right" />{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="footer-contact-col">
              <h4>Connect</h4>
              <div className="contact-entry">
                <i className="bi bi-telephone" />
                <p>+1 (800) 555-0195</p>
              </div>
              <div className="contact-entry">
                <i className="bi bi-envelope" />
                <p><a href="mailto:info@infomanage.com">info@infomanage.com</a></p>
              </div>
              <div className="footer-socials">
                {[
                  { icon: 'bi-linkedin', href: 'https://www.linkedin.com/company/infomanage-corporation/' },
                  { icon: 'bi-twitter-x', href: '#' },
                  { icon: 'bi-facebook', href: 'https://www.facebook.com/profile.php?id=100078690196056' },
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
                <p>© 2026 InfoManage, LLC. All rights reserved.</p>
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
