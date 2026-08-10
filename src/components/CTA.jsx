const checklist = [
  'Proactive monitoring and issue prevention',
  'Clear reporting and performance insights',
  'Security-first approach to protect your business',
];

export default function CTA() {
  return (
    <section id="call-to-action" className="mit-dark-section">
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}>
          {/* Left */}
          <div style={{ flex: '1 1 400px' }} data-aos="fade-right" data-aos-delay="200">
            <span className="mit-split-label">Predictable IT Operations</span>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: '#fff', marginBottom: 18 }}>
              Proactive. Predictable. Protected.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24, fontSize: 15 }}>
              We deliver consistent, high-quality IT operations that reduce downtime,
              minimize risk, and help your business run more efficiently.
            </p>
            <ul className="mit-split-list">
              {checklist.map((item, i) => (
                <li key={i}>
                  <i className="bi bi-check-circle-fill" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: testimonial */}
          <div style={{ flex: '1 1 380px' }} data-aos="fade-left" data-aos-delay="300">
            <div style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 14,
              padding: '36px 32px',
            }}>
              <p style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: 18,
                lineHeight: 1.7,
                fontStyle: 'italic',
                marginBottom: 24,
              }}>
                &ldquo;InfoManage gives us peace of mind knowing our systems are secure,
                monitored, and managed by a team we can trust.&rdquo;
              </p>
              <div style={{ display: 'flex', gap: 4, marginBottom: 10 }}>
                {[1, 2, 3, 4, 5].map(s => (
                  <i key={s} className="bi bi-star-fill" style={{ color: '#ffc107', fontSize: 14 }} />
                ))}
              </div>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, fontWeight: 600 }}>
                — Director of Operations
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
