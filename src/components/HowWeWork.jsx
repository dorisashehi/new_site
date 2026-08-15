const steps = [
  {
    num: '01',
    icon: 'bi-search',
    title: 'Discover',
    desc: "We learn your business before we touch your technology — sitting down to understand your goals, your team's day-to-day frustrations, and how your existing infrastructure, contracts, and costs actually stack up.",
  },
  {
    num: '02',
    icon: 'bi-shield-lock',
    title: 'Secure',
    desc: "We close the gaps that put your business at risk — locking down every device with endpoint protection, patch management, and security baseline hardening, and putting tested backup and disaster recovery plans in place so one bad day can't take you down.",
  },
  {
    num: '03',
    icon: 'bi-headset',
    title: 'Support',
    desc: "An extension of your staff, not just a vendor on call — every request is tracked, prioritized, and escalated immediately when it's critical, with extended or 24×7 coverage available depending on your plan.",
  },
  {
    num: '04',
    icon: 'bi-graph-up-arrow',
    title: 'Evolve',
    desc: 'Your technology keeps pace as your business grows — we build an ongoing technology roadmap with lifecycle planning and vCIO advisory, all under predictable, fixed-fee pricing that scales with your business instead of surprising you with invoices.',
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" style={{ padding: '56px 0', background: 'var(--light-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 32px' }} data-aos="fade-up">
          <span style={{ display: 'block', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--accent)', marginBottom: 10 }}>
            Our Approach
          </span>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: 'var(--heading-color)', marginBottom: 10 }}>
            A Clear Approach to Better IT
          </h2>
          <p style={{ color: '#666', fontSize: 15 }}>
            From understanding your needs to continuously improving your technology, we make IT simple, secure, and predictable.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'center' }}>
          <div style={{ flex: '1 1 400px' }} data-aos="fade-up" data-aos-delay="100">
            {steps.map((s, i) => (
              <div
                key={i}
                className="its-lifecycle-row"
                style={{ padding: '13px 0' }}
                data-aos="fade-up"
                data-aos-delay={150 + i * 70}
              >
                <div className="its-lifecycle-dot" style={{ width: 40, height: 40 }}>
                  <i className={`bi ${s.icon}`} style={{ fontSize: 17 }} />
                </div>
                <div className="its-lifecycle-content">
                  <div className="its-lifecycle-label">Phase {s.num}</div>
                  <h5>{s.title}</h5>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ flex: '1 1 380px' }} data-aos="fade-up" data-aos-delay="200">
            <img
              src="/images/about/governance.jpg"
              alt="Technicians monitoring and securing client systems"
              style={{
                width: '100%',
                borderRadius: 12,
                display: 'block',
                boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
