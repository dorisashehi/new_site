import { Link } from 'react-router-dom';

const services = [
  {
    icon: 'bi-hdd-network',
    title: 'Managed Service Provider',
    desc: 'Proactive technology management for a predictable flat monthly fee.',
    bullets: [
      'Ongoing IT maintenance',
      'Proactive device monitoring',
      'Security updates and improvements',
    ],
    cta: 'Explore Managed Services',
    to: '/managed-it-services',
  },
  {
    icon: 'bi-shield-check',
    title: 'Cybersecurity',
    desc: 'Enterprise-grade protection, sized for your business.',
    bullets: [
      '24/7 monitoring for potential security threats',
      'Email protection, filtering, and anti-spoofing',
      'Employee phishing awareness training and testing',
    ],
    cta: 'Explore Cybersecurity',
    to: '/cybersecurity-services',
  },
  {
    icon: 'bi-cloud-arrow-up',
    title: 'Backup & Disaster Recovery (BCDR)',
    desc: 'Your data protected, whatever happens.',
    bullets: [
      'Reliable cloud and local backup solutions',
      'Protection against hardware and software failures',
      'Recovery planning for disasters and cyberattacks',
    ],
    cta: 'See BCDR Plans',
    to: '/contact',
  },
  {
    icon: 'bi-tools',
    title: 'Project Management',
    desc: 'Office moves and IT rollouts, fully coordinated.',
    bullets: [
      'IT installation and configuration',
      'Cabling and infrastructure coordination',
      'Hardware and software implementation',
    ],
    cta: 'View Project Services',
    to: '/managed-it-services#operational-support',
  },
  {
    icon: 'bi-telephone',
    title: 'VoIP Phone Systems',
    desc: 'Cloud phone service that moves with your team.',
    bullets: [
      'Reliable business calling from anywhere',
      'Mobile, desktop, and video integration',
      'Built-in screen sharing and collaboration',
    ],
    cta: 'Explore VoIP',
    to: '/voip-phone-systems',
  },
  {
    icon: 'bi-person-workspace',
    title: 'vCIO',
    desc: 'Strategic technology leadership, without the full-time hire.',
    bullets: [
      'IT strategy, roadmap, and budget planning',
      'Vendor and technology management',
      'Technology decisions aligned with business goals',
    ],
    cta: 'Explore vCIO Services',
    to: '/it-strategy-advisory',
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: '48px 0', background: 'var(--light-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 32px' }} data-aos="fade-up">
          <span style={{ display: 'block', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--accent)', marginBottom: 10 }}>
            What We Manage
          </span>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: 'var(--heading-color)', marginBottom: 10 }}>
            One Partner for All Your IT Needs
          </h2>
          <p style={{ color: '#666', fontSize: 15 }}>
            IT, cybersecurity, backup, networking, and more—all managed by one trusted technology partner.
          </p>
        </div>

        <div
          className="services-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
        >
          {services.map((s, i) => (
            <div key={i} className="service-card" data-aos="fade-up" data-aos-delay={100 + i * 80}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div className="icon-box" style={{ marginBottom: 0, flexShrink: 0 }}>
                  <i className={`bi ${s.icon}`} />
                </div>
                <h4 style={{ margin: 0 }}>{s.title}</h4>
              </div>
              <Link to={s.to} className="arrow-link" data-tooltip={s.cta}>
                <i className="bi bi-arrow-right" />
              </Link>
              <p style={{ marginBottom: 12 }}>{s.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {s.bullets.map((b, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: 12,
                      color: '#666',
                      padding: '3px 0',
                      display: 'flex',
                      gap: 6,
                      alignItems: 'flex-start',
                    }}
                  >
                    <i
                      className="bi bi-check2"
                      style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="service-number">0{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
