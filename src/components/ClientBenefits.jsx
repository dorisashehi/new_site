const benefits = [
  {
    icon: 'bi-boxes',
    title: 'A Full Range of Solutions',
    desc: "We invest time understanding your biggest technology challenges to identify the perfect-fit solution — backed by access to the latest, most proven technology.",
  },
  {
    icon: 'bi-tag',
    title: 'Proprietary Approach to Pricing',
    desc: "Get Fortune 100-quality support at a fraction of the cost. We charge a fixed price per unit — per PC, workstation, or server — monthly. You're charged for your exact needs, not a cent more.",
  },
  {
    icon: 'bi-arrows-angle-expand',
    title: 'Maximum Flexibility',
    desc: 'Support scales directly with the number of units you need, so you can scale up or down with your business — without the overhead of hiring additional staff.',
  },
  {
    icon: 'bi-award',
    title: 'The Right Expertise',
    desc: "Whether it's taking full ownership of your technology, supplementing your existing team, or providing critical off-hour 24/7 support, InfoManage fills the gaps.",
  },
];

export default function ClientBenefits() {
  return (
    <section style={{ padding: '64px 0', background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 44px' }} data-aos="fade-up">
          <span style={{ display: 'block', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--accent)', marginBottom: 14 }}>
            What Sets Us Apart
          </span>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: 'var(--heading-color)', marginBottom: 14 }}>
            As an InfoManage Client, You&apos;ll Enjoy
          </h2>
          <p style={{ color: '#666', fontSize: 15 }}>
            The right expertise, flexible support, and predictable costs—all from one technology partner.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="benefits-grid">
          {benefits.map((b, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: 20,
                alignItems: 'flex-start',
                background: 'var(--light-bg)',
                borderRadius: 14,
                padding: '28px 26px',
              }}
              data-aos="fade-up"
              data-aos-delay={100 + i * 80}
            >
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: '#fff', boxShadow: '0 4px 16px rgba(26, 108, 181, 0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <i className={`bi ${b.icon}`} style={{ fontSize: 22, color: 'var(--accent)' }} />
              </div>
              <div>
                <h4 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, color: 'var(--heading-color)' }}>{b.title}</h4>
                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
