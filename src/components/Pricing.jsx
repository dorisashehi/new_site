const plans = [
  {
    icon: 'bi-person-fill',
    name: 'Essential',
    desc: 'Website and monitoring for small teams.',
    features: [
      'Help desk support',
      'System monitoring',
      'Patch management',
      'Monthly reporting',
    ],
    featured: false,
  },
  {
    icon: 'bi-shield-fill-check',
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
  },
  {
    icon: 'bi-building-fill',
    name: 'Enterprise',
    desc: 'Advanced IT management for complex environments.',
    features: [
      'Everything in Professional',
      'Strategic IT planning',
      'Compliance support',
      'Custom solutions',
    ],
    featured: false,
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

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, justifyContent: 'center' }}>
          {plans.map((plan, i) => (
            <div key={i} style={{ flex: '1 1 280px', maxWidth: 360 }}
              data-aos="fade-up" data-aos-delay={100 + i * 100}>
              <div className={`pricing-item${plan.featured ? ' featured' : ''}`}>
                {plan.featured && <div className="pricing-ribbon">Most Popular</div>}
                <div className="pricing-item-body">
                  <div className="pricing-header-row">
                    <i className={`bi ${plan.icon} pricing-icon`} />
                    <h3>{plan.name}</h3>
                  </div>
                  <p className="description">{plan.desc}</p>
                  <ul className="features-list">
                    {plan.features.map((f, j) => (
                      <li key={j}><i className="bi bi-check2" />{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
