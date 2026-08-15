const testimonials = [
  {
    quote: 'InfoManage gives us peace of mind knowing our systems are secure, monitored, and managed by a team we can trust.',
    name: 'Director of Operations',
  },
  {
    quote: "They caught and resolved an issue before we even knew it existed. That's the kind of proactive support we'd been missing for years.",
    name: 'IT Manager, Financial Services',
  },
  {
    quote: 'Predictable pricing, responsive support, and a team that actually understands our business — exactly what we needed.',
    name: 'Operations Director, Healthcare',
  },
];

export default function CTA() {
  return (
    <section id="call-to-action" className="mit-dark-section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 44px' }} data-aos="fade-up">
          <span className="mit-split-label" style={{ textAlign: 'center' }}>Client Success</span>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: '#fff' }}>
            Trusted by the Teams Who Depend On Us
          </h2>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                flex: '1 1 280px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 14,
                padding: '32px 28px',
              }}
              data-aos="fade-up"
              data-aos-delay={100 + i * 100}
            >
              <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                {[1, 2, 3, 4, 5].map(s => (
                  <i key={s} className="bi bi-star-fill" style={{ color: '#ffc107', fontSize: 13 }} />
                ))}
              </div>
              <p style={{
                color: 'rgba(255,255,255,0.88)',
                fontSize: 15,
                lineHeight: 1.7,
                fontStyle: 'italic',
                marginBottom: 20,
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, fontWeight: 600 }}>
                — {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
