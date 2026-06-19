const coverageItems = [
  { icon: 'bi-headset', text: 'End-user help desk support' },
  { icon: 'bi-laptop', text: 'Endpoint and workstation management' },
  { icon: 'bi-server', text: 'Server and network administration' },
  { icon: 'bi-activity', text: 'Monitoring and alert response' },
  { icon: 'bi-shield-lock', text: 'Security management and protection' },
  { icon: 'bi-people', text: 'Vendor coordination and escalation' },
  { icon: 'bi-arrow-repeat', text: 'Routine maintenance and system updates' },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Your IT Department, Outsourced</h2>
          <p>Your complete operational technology partner — proactively managed, continuously monitored</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 60, alignItems: 'center' }}>
          {/* Left: image + badges */}
          <div style={{ flex: '1 1 400px', position: 'relative', paddingBottom: 30, paddingRight: 20 }} data-aos="fade-right">
            <div className="about-img">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="IT team at work"
              />
            </div>
            <div className="experience-badge" data-aos="fade-up" data-aos-delay="200">
              <h2>30<span style={{ fontSize: 22 }}>+</span></h2>
              <p>Years of<br />Experience</p>
            </div>
            <div className="projects-badge" data-aos="fade-left" data-aos-delay="300">
              <h2>500<span style={{ fontSize: 18 }}>+</span></h2>
              <p>Organizations<br />Supported</p>
            </div>
          </div>

          {/* Right: content */}
          <div style={{ flex: '1 1 400px' }} data-aos="fade-left" data-aos-delay="100">
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: 24, fontSize: 15 }}>
              InfoManage acts as a complete operational technology partner for organizations that rely
              on stable, secure, and well-managed infrastructure. Rather than reacting to problems as
              they occur, our team continuously monitors, maintains, and improves the systems that
              support your business.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: 20, fontSize: 15 }}>
              From end-user support to infrastructure management, we handle the day-to-day
              responsibilities required to keep your environment running smoothly.
            </p>

            <p style={{ fontWeight: 700, color: 'var(--heading-color)', marginBottom: 14, fontSize: 14, textTransform: 'uppercase', letterSpacing: 1 }}>
              Our operational coverage includes:
            </p>

            <ul className="check-list" style={{ marginBottom: 32 }} data-aos="fade-up" data-aos-delay="300">
              {coverageItems.map((item, i) => (
                <li key={i}>
                  <i className={`bi ${item.icon}`} style={{ color: 'var(--accent)', fontSize: 16, flexShrink: 0, marginTop: 2 }} />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
