import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  {
    label: 'Home', href: '/', internal: true, children: [
      { label: 'About', href: '/#about', internal: true },
      { label: 'Services', href: '/#services', internal: true },
      { label: 'How We Work', href: '/#how-we-work', internal: true },
      { label: 'IT Governance', href: '/#features', internal: true },
      { label: 'Industries', href: '/#clients', internal: true },
      { label: 'Pricing', href: '/#pricing', internal: true },
      { label: 'FAQ', href: '/#faq', internal: true },
      { label: 'Team', href: '/#team', internal: true },
      { label: 'Insights', href: '/#recent-posts', internal: true },
    ]
  },
  { label: 'Managed IT', href: '/managed-it-services', internal: true },
  { label: 'Cybersecurity', href: '/cybersecurity-services', internal: true },
  {
    label: 'Solutions', href: '#', children: [
      { label: 'Managed IT', href: '/managed-it-services', internal: true },
      { label: 'Cybersecurity', href: '/cybersecurity-services', internal: true },
      { label: 'Cloud Management', href: '/#services', internal: true },
      { label: 'vCTO Advisory', href: '/#about', internal: true },
    ]
  },
  { label: 'Contact', href: '/#contact', internal: true },
];

function DropdownItems({ items }) {
  return (
    <ul className="dropdown-menu">
      {items.map((item, i) => (
        <li key={i} style={{ position: 'relative' }} className={item.children ? 'dropdown' : ''}>
          {item.internal
            ? <Link to={item.href}>{item.label}{item.children && <i className="bi bi-chevron-down" style={{ marginLeft: 6, fontSize: 11 }} />}</Link>
            : <a href={item.href}>{item.label}{item.children && <i className="bi bi-chevron-down" style={{ marginLeft: 6, fontSize: 11 }} />}</a>
          }
          {item.children && <DropdownItems items={item.children} />}
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { threshold: 0.25 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const mobileLinks = [
    { label: 'Home', href: '/', internal: true },
    { label: 'About', href: '/#about', internal: true, indent: true },
    { label: 'Services', href: '/#services', internal: true, indent: true },
    { label: 'How We Work', href: '/#how-we-work', internal: true, indent: true },
    { label: 'IT Governance', href: '/#features', internal: true, indent: true },
    { label: 'Industries', href: '/#clients', internal: true, indent: true },
    { label: 'Pricing', href: '/#pricing', internal: true, indent: true },
    { label: 'FAQ', href: '/#faq', internal: true, indent: true },
    { label: 'Team', href: '/#team', internal: true, indent: true },
    { label: 'Insights', href: '/#recent-posts', internal: true, indent: true },
    { label: 'Managed IT', href: '/managed-it-services', internal: true },
    { label: 'Cybersecurity', href: '/cybersecurity-services', internal: true },
    { label: 'Contact', href: '/#contact', internal: true },
  ];

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">
          <a href="/" className="logo" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="InfoManage" style={{ height: 68, maxWidth: 240, objectFit: 'contain', display: 'block', filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.5)) brightness(1.08)' }} />
          </a>

          <nav className="navmenu">
            <ul>
              {navLinks.map((link, i) => (
                <li key={i} style={{ position: 'relative', padding: '15px 14px' }}
                    className={link.children ? 'dropdown' : ''}>
                  {link.internal
                    ? <Link to={link.href}>
                        {link.label}
                        {link.children && <i className="bi bi-chevron-down toggle-dropdown" style={{ fontSize: 12, marginLeft: 4 }} />}
                      </Link>
                    : <a href={link.href} className={activeSection === link.href.replace('#', '') ? 'active' : ''}>
                        {link.label}
                        {link.children && <i className="bi bi-chevron-down toggle-dropdown" style={{ fontSize: 12, marginLeft: 4 }} />}
                      </a>
                  }
                  {link.children && <DropdownItems items={link.children} />}
                </li>
              ))}
            </ul>
          </nav>

          <a href="/#contact" className="cta-btn">Schedule Consultation</a>
          <i className="bi bi-list mobile-nav-toggle" onClick={() => setMobileOpen(true)} />
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-nav open" onClick={() => setMobileOpen(false)}>
          <div className="mobile-nav-inner" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px 0' }}>
              <img src="/logo.png" alt="InfoManage" style={{ height: 36, objectFit: 'contain', display: 'block' }} />
              <i className="bi bi-x" style={{ fontSize: 26, cursor: 'pointer', color: '#333' }} onClick={() => setMobileOpen(false)} />
            </div>
            {mobileLinks.map((link, i) => (
              <Link
                key={i}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                style={link.indent ? { paddingLeft: 36, fontSize: 14, color: '#666', borderBottom: '1px solid #f5f5f5', display: 'flex', alignItems: 'center' } : {}}
              >
                {link.indent && <i className="bi bi-chevron-right" style={{ fontSize: 10, marginRight: 6, color: 'var(--accent)' }} />}
                {link.label}
              </Link>
            ))}
            <div style={{ padding: '16px 20px' }}>
              <Link to="/#contact" onClick={() => setMobileOpen(false)} style={{ display: 'inline-block', background: 'var(--accent)', color: '#fff', padding: '10px 24px', borderRadius: 50, fontWeight: 600, fontSize: 14 }}>
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
