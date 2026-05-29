import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Insights', href: '#recent-posts' },
  {
    label: 'Solutions', href: '#', children: [
      { label: 'Managed IT', href: '#services' },
      { label: 'Cybersecurity', href: '#features' },
      { label: 'Cloud Management', href: '#services' },
      { label: 'vCTO Advisory', href: '#about' },
    ]
  },
  { label: 'Contact', href: '#contact' },
];

function DropdownItems({ items }) {
  return (
    <ul className="dropdown-menu">
      {items.map((item, i) => (
        <li key={i} style={{ position: 'relative' }} className={item.children ? 'dropdown' : ''}>
          <a href={item.href}>
            {item.label}
            {item.children && <i className="bi bi-chevron-down" style={{ marginLeft: 6, fontSize: 11 }} />}
          </a>
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
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Insights', href: '#recent-posts' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#hero" className="logo">
            <img src="/logo.jpg" alt="InfoManage" style={{ height: 44, maxWidth: 180, objectFit: 'contain' }} />
          </a>

          <nav className="navmenu">
            <ul>
              {navLinks.map((link, i) => (
                <li key={i} style={{ position: 'relative', padding: '15px 14px' }}
                    className={link.children ? 'dropdown' : ''}>
                  <a href={link.href} className={activeSection === link.href.replace('#', '') ? 'active' : ''}>
                    {link.label}
                    {link.children && <i className="bi bi-chevron-down toggle-dropdown" style={{ fontSize: 12, marginLeft: 4 }} />}
                  </a>
                  {link.children && <DropdownItems items={link.children} />}
                </li>
              ))}
            </ul>
          </nav>

          <a href="#contact" className="cta-btn">Schedule Consultation</a>
          <i className="bi bi-list mobile-nav-toggle" onClick={() => setMobileOpen(true)} />
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-nav open" onClick={() => setMobileOpen(false)}>
          <div className="mobile-nav-inner" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px 0' }}>
              <img src="/logo.jpg" alt="InfoManage" style={{ height: 36, objectFit: 'contain' }} />
              <i className="bi bi-x" style={{ fontSize: 26, cursor: 'pointer', color: '#333' }} onClick={() => setMobileOpen(false)} />
            </div>
            {mobileLinks.map((link, i) => (
              <a key={i} href={link.href}
                className={activeSection === link.href.replace('#', '') ? 'active' : ''}
                onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            ))}
            <div style={{ padding: '16px 20px' }}>
              <a href="#contact" onClick={() => setMobileOpen(false)} style={{ display: 'inline-block', background: 'var(--accent)', color: '#fff', padding: '10px 24px', borderRadius: 50, fontWeight: 600, fontSize: 14 }}>
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
