const services = [
  {
    icon: 'bi-diagram-3',
    title: 'IT Service Management',
    desc: 'Structured incident tracking, change management, and service delivery processes that keep your environment accountable and consistent.',
  },
  {
    icon: 'bi-telephone',
    title: 'VOIP Phone Systems',
    desc: 'Cloud-based business phone service with unlimited calling and seamless integration across desktop, mobile, and video.',
  },
  {
    icon: 'bi-tools',
    title: 'Office Buildout Project Management',
    desc: 'End-to-end coordination of installation, cabling, and configuration for new offices and workspace expansions.',
  },
  {
    icon: 'bi-lightbulb',
    title: 'Strategic Consulting',
    desc: 'Ongoing technology advisory that aligns your IT roadmap with long-term business goals and budget planning.',
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: '64px 0', background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 44px' }} data-aos="fade-up">
          <span style={{ display: 'block', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--accent)', marginBottom: 14 }}>
            What We Offer
          </span>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: 'var(--heading-color)', marginBottom: 14 }}>
            Our Services
          </h2>
          <p style={{ color: '#666', fontSize: 15 }}>
            A few more ways InfoManage supports your organization&apos;s technology needs.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }} className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="feature-card" data-aos="fade-up" data-aos-delay={100 + i * 80}>
              <div className="icon-wrapper">
                <i className={`bi ${s.icon}`} />
              </div>
              <h5 style={{ fontSize: 16 }}>{s.title}</h5>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
