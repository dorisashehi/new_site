const coverageItems = [
  { icon: 'bi-activity', text: 'Proactive 24/7 monitoring' },
  { icon: 'bi-hdd-network', text: 'Backup & data protection' },
  { icon: 'bi-headset', text: 'Help desk & user support' },
  { icon: 'bi-tools', text: 'Vendor & patch management' },
  { icon: 'bi-shield-lock', text: 'Cloud, network & security' },
  { icon: 'bi-diagram-3', text: 'Strategic IT planning' },
  { icon: 'bi-cloud-arrow-up', text: 'Disaster recovery readiness' },
  { icon: 'bi-person-workspace', text: 'vCIO & technology roadmap' },
];

export default function About() {
  return (
    <section id="about" className="about-section" style={{ padding: '56px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 60, alignItems: 'center' }}>
          {/* Left: image collage */}
          <div style={{ flex: '1 1 400px' }} data-aos="fade-right">
            <div style={{ position: 'relative', maxWidth: 540, height: 420, margin: '0 auto' }}>
              {/* dashed frame */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '64%',
                  height: '76%',
                  border: '2px dashed var(--accent)',
                  borderRadius: 12,
                }}
              />
              {/* main photo */}
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  width: '64%',
                  height: '68%',
                  borderRadius: 12,
                  overflow: 'hidden',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
                }}
              >
                <img
                  src="/images/about/it-technician.jpg"
                  alt="IT technician managing server and network infrastructure"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              {/* second photo */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '54%',
                  height: '44%',
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: '5px solid #fff',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
                }}
              >
                <img
                  src="/images/about/support-team.jpg"
                  alt="Help desk technicians providing user support"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              {/* badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '38%',
                  left: '48%',
                  minWidth: 100,
                  background: 'var(--accent)',
                  color: '#fff',
                  padding: '16px 18px',
                  borderRadius: 12,
                  textAlign: 'center',
                  boxShadow: '0 8px 24px rgba(26, 108, 181, 0.4)',
                }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div style={{ fontSize: 26, fontWeight: 900, lineHeight: 1 }}>30+</div>
                <div style={{ fontSize: 11, marginTop: 4, lineHeight: 1.3 }}>
                  Years of<br />Expertise
                </div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div style={{ flex: '1 1 400px' }} data-aos="fade-left" data-aos-delay="100">
            <span style={{ display: 'block', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--accent)', marginBottom: 14 }}>
              Your IT. Simplified. Outsourced.
            </span>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: 'var(--heading-color)', lineHeight: 1.3, marginBottom: 16 }}>
              Enterprise-level IT operations without the overhead.
            </h2>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: 20, fontSize: 16 }}>
              We handle the technology, so your team can focus on what matters most.
              From proactive support to infrastructure management, we deliver reliable
              IT services that scale with your business.
            </p>

            <div
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 20, rowGap: 6 }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {coverageItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '8px 0',
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: 'rgba(26, 108, 181, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <i className={`bi ${item.icon}`} style={{ color: 'var(--accent)', fontSize: 15 }} />
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#333' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
