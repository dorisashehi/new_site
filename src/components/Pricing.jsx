import { Link } from 'react-router-dom';

const plans = [
  {
    icon: 'bi-shield',
    name: 'Essentials',
    tagline: 'Foundational Infrastructure Oversight',
    desc: 'Baseline monitoring and patching for organizations that require foundational infrastructure oversight without full operational management.',
    features: [
      'Infrastructure monitoring',
      'Patch management',
      'Quarterly reporting',
      'Email-based support',
      'Security baseline management',
    ],
    featured: false,
    cta: 'Get a Quote',
  },
  {
    icon: 'bi-stars',
    name: 'Professional',
    tagline: 'Unlimited Remote IT Management',
    desc: 'Proactive IT management with unlimited remote support and enhanced operational coverage. The most comprehensive choice for most organizations.',
    features: [
      'Everything in Essentials',
      'Unlimited remote help desk',
      'Proactive system maintenance',
      'Security management',
      'Monthly operational reporting',
      'Vendor management',
    ],
    featured: true,
    cta: 'Get a Quote',
  },
  {
    icon: 'bi-building-check',
    name: 'Enterprise',
    tagline: '24×7 Support & On-Site Coverage',
    desc: 'Maximum service coverage including 24×7 support and expanded on-site service availability for complex or distributed environments.',
    features: [
      'Everything in Professional',
      '24×7 help desk availability',
      'On-site support included',
      'Dedicated account manager',
      'Strategic vCTO advisory',
      'Custom SLA agreements',
    ],
    featured: false,
    cta: 'Get a Quote',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Service Plans</h2>
          <p>Structured plans designed to provide the appropriate level of coverage for your environment</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, justifyContent: 'center', alignItems: 'flex-start' }}>
          {plans.map((plan, i) => (
            <div key={i} style={{ flex: '1 1 280px', maxWidth: 360 }}
              data-aos="fade-up" data-aos-delay={100 + i * 100}>
              <div className={`pricing-item${plan.featured ? ' featured' : ''}`}>
                {plan.featured && <div className="pricing-badge">Most Popular</div>}
                <div className="pricing-icon"><i className={`bi ${plan.icon}`} /></div>
                <h3>{plan.name}</h3>
                <p style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 700, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>
                  {plan.tagline}
                </p>
                <p className="description">{plan.desc}</p>
                <ul className="features-list">
                  {plan.features.map((f, j) => (
                    <li key={j}><i className="bi bi-check2" />{f}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-pricing">{plan.cta}</Link>
                <p style={{ fontSize: 11, color: '#aaa', marginTop: 12, textAlign: 'center' }}>
                  Per-user, per-device, or hybrid pricing available
                </p>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', color: '#888', fontSize: 14, marginTop: 32 }} data-aos="fade-up" data-aos-delay="400">
          Service plans can be tailored using per-user, per-device, or hybrid pricing models depending on the structure of your environment.
          <br /><Link to="/contact" style={{ color: 'var(--accent)', fontWeight: 600 }}>Contact us to discuss your specific requirements →</Link>
        </p>
      </div>
    </section>
  );
}
