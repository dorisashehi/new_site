const steps = [
  {
    num: '01',
    icon: 'bi-search',
    title: 'Assess',
    desc: 'We evaluate your environment, identify risks, and understand your business goals.',
  },
  {
    num: '02',
    icon: 'bi-gear',
    title: 'Manage',
    desc: 'We monitor, maintain, and secure your systems 24/7 to ensure maximum reliability.',
  },
  {
    num: '03',
    icon: 'bi-graph-up-arrow',
    title: 'Improve',
    desc: 'We continuously optimize performance, security, and alignment with your goals.',
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="howwework-section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 40px' }} data-aos="fade-up">
          <span style={{ display: 'block', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--accent)', marginBottom: 14 }}>
            How We Manage It
          </span>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: 'var(--heading-color)' }}>
            A proven process for reliable IT.
          </h2>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'stretch' }}>
          {/* Left: steps */}
          <div style={{ flex: '1 1 560px', display: 'flex', alignItems: 'flex-start' }} data-aos="fade-right" data-aos-delay="100">
            {steps.map((s, i) => (
              <div key={i} style={{ display: 'contents' }}>
                <div style={{ flex: '1 1 0', padding: '0 8px' }} data-aos="zoom-in" data-aos-delay={150 + i * 100}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                    <div className="hww-step-icon">
                      <i className={`bi ${s.icon}`} />
                    </div>
                    <span style={{ fontSize: 26, fontWeight: 900, color: 'var(--accent)', fontFamily: '"Nunito", sans-serif' }}>{s.num}</span>
                  </div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>{s.title}</h4>
                  <p style={{ fontSize: 14, color: '#666', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <i className="bi bi-arrow-right" style={{ fontSize: 22, color: 'var(--accent)', marginTop: 26, flexShrink: 0 }} />
                )}
              </div>
            ))}
          </div>

          {/* Right: image */}
          <div style={{ flex: '1 1 340px' }} data-aos="fade-left" data-aos-delay="200">
            <div className="hww-image">
              <img src="/images/home/services.jpg" alt="IT operations dashboard" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
