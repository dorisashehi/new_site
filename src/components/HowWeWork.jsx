const steps = [
  {
    num: '01',
    icon: 'bi-search',
    title: 'Discover',
    hook: 'We learn your business before we touch your technology.',
    desc: "Before any work begins, we sit down to understand your goals, your team's day-to-day frustrations, and how your existing infrastructure, contracts, and costs actually stack up.",
  },
  {
    num: '02',
    icon: 'bi-shield-lock',
    title: 'Secure',
    hook: 'We close the gaps that put your business at risk.',
    desc: "We lock down every device with endpoint protection, patch management, and security baseline hardening, and put tested backup and disaster recovery plans in place so one bad day can't take you down.",
  },
  {
    num: '03',
    icon: 'bi-headset',
    title: 'Support',
    hook: 'An extension of your staff, not just a vendor on call.',
    desc: "Every request is tracked, prioritized, and escalated immediately when it's critical, with extended or 24×7 coverage available depending on your plan.",
  },
  {
    num: '04',
    icon: 'bi-graph-up-arrow',
    title: 'Evolve',
    hook: 'Your technology keeps pace as your business grows.',
    desc: 'We build an ongoing technology roadmap with lifecycle planning and vCIO advisory, all under predictable, fixed-fee pricing that scales with your business instead of surprising you with invoices.',
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="howwework-section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 40px' }} data-aos="fade-up">
          <span style={{ display: 'block', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--accent)', marginBottom: 14 }}>
            Our Approach
          </span>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: 'var(--heading-color)', marginBottom: 14 }}>
            A Clear Approach to Better IT
          </h2>
          <p style={{ color: '#666', fontSize: 15 }}>
            From understanding your needs to continuously improving your technology, we make IT simple, secure, and predictable.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start' }} data-aos="fade-up" data-aos-delay="100">
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'contents' }}>
              <div style={{ flex: '1 1 0', padding: '0 8px' }} data-aos="zoom-in" data-aos-delay={150 + i * 100}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                  <div className="hww-step-icon">
                    <i className={`bi ${s.icon}`} />
                  </div>
                  <span style={{ fontSize: 26, fontWeight: 900, color: 'var(--accent)', fontFamily: '"Nunito", sans-serif' }}>{s.num}</span>
                </div>
                <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.5 }}>{s.title}</h4>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--accent)', marginBottom: 10, lineHeight: 1.5 }}>{s.hook}</p>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <i className="bi bi-arrow-right" style={{ fontSize: 22, color: 'var(--accent)', marginTop: 26, flexShrink: 0 }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
