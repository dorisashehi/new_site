import { Link } from 'react-router-dom';

const plans = [
  {
    icon: 'bi-person',
    name: 'Essential',
    desc: 'Website and monitoring for small teams.',
    features: [
      'Help desk support',
      'System monitoring',
      'Patch management',
      'Monthly reporting',
    ],
    featured: false,
    cta: 'Learn More',
  },
  {
    icon: 'bi-shield-check',
    name: 'Professional',
    desc: 'Comprehensive IT management for growing organizations.',
    features: [
      'Everything in Essential',
      '24/7 monitoring',
      'Advanced security',
      'Backup & recovery',
      'Vendor management',
    ],
    featured: true,
    cta: 'Learn More',
  },
  {
    icon: 'bi-building',
    name: 'Enterprise',
    desc: 'Advanced IT management for complex environments.',
    features: [
      'Everything in Professional',
      'Strategic IT planning',
      'Compliance support',
      'Custom solutions',
    ],
    featured: false,
    cta: 'Contact Us',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: '80px 0', background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 50px' }} data-aos="fade-up">
          <span style={{ display: 'block', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--accent)', marginBottom: 14 }}>
            Service Plans
          </span>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: 'var(--heading-color)' }}>
            Flexible plans. Built for your business.
          </h2>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, justifyContent: 'center', alignItems: 'flex-start' }}>
          {plans.map((plan, i) => (
            <div key={i} style={{ flex: '1 1 280px', maxWidth: 360 }}
              data-aos="fade-up" data-aos-delay={100 + i * 100}>
              <div className={`pricing-item${plan.featured ? ' featured' : ''}`}>
                {plan.featured && <div className="pricing-badge">Most Popular</div>}
                <div className="pricing-icon"><i className={`bi ${plan.icon}`} /></div>
                <h3>{plan.name}</h3>
                <p className="description">{plan.desc}</p>
                <ul className="features-list">
                  {plan.features.map((f, j) => (
                    <li key={j}><i className="bi bi-check2" />{f}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-pricing">{plan.cta}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
