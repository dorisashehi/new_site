const stats = [
  { value: '30+', label: 'Years in Business' },
  { value: '10+', label: 'Organizations Supported' },
  { value: '99.9%', label: 'Uptime Delivered' },
  { value: '24×7', label: 'Enterprise Support' },
];

const industries = [
  'Financial Services', 'Legal', 'Healthcare', 'Media & Advertising',
  'Real Estate', 'Manufacturing', 'Non-Profit Organizations',
];

export default function Trusted() {
  return (
    <section id="trusted" className="trusted-section">
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 60, alignItems: 'flex-start' }}>

          {/* Left */}
          <div style={{ flex: '1 1 420px' }} data-aos="fade-right" data-aos-delay="100">
            <span className="trusted-eyebrow">Our Track Record</span>
            <h2>Established & Trusted</h2>
            <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 20, fontSize: 16 }}>
              Founded in 1995, InfoManage has supported organizations across a wide range of
              industries that rely heavily on technology to operate and grow.
            </p>
            <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 32, fontSize: 16 }}>
              Our long-term client partnerships are built on operational discipline, consistent
              service delivery, and a commitment to maintaining reliable technology environments.
            </p>

            <h5 style={{ fontWeight: 700, marginBottom: 14, color: 'var(--heading-color)' }}>Industries We Support</h5>
            <div className="trusted-industries">
              {industries.map((ind, i) => (
                <span key={i} className="trusted-industry-tag">
                  <i className="bi bi-check2" />{ind}
                </span>
              ))}
            </div>
          </div>

          {/* Right: stats */}
          <div style={{ flex: '1 1 380px' }} data-aos="fade-left" data-aos-delay="200">
            <div className="trusted-stats">
              {stats.map((s, i) => (
                <div key={i} className="trusted-stat" data-aos="zoom-in" data-aos-delay={250 + i * 80}>
                  <span className="trusted-stat-value">{s.value}</span>
                  <span className="trusted-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
