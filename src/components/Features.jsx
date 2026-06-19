import { Link } from 'react-router-dom';

const govCards = [
  { icon: 'bi-exclamation-triangle', title: 'Incident Management', desc: 'Structured incident tracking with priority classification ensures critical issues receive immediate attention and appropriate escalation.' },
  { icon: 'bi-arrow-left-right', title: 'Change Management', desc: 'Controlled processes govern all infrastructure modifications, minimizing risk and maintaining environment stability during changes.' },
  { icon: 'bi-activity', title: 'Monitoring & Alerts', desc: 'Continuous 24×7 infrastructure monitoring with automated alert response keeps your environment stable around the clock.' },
  { icon: 'bi-file-earmark-text', title: 'Infrastructure Documentation', desc: 'Detailed documentation of your environment provides operational clarity, supports troubleshooting, and protects institutional knowledge.' },
  { icon: 'bi-bar-chart-line', title: 'Operational Reporting', desc: 'Regular operational reports provide visibility into service delivery, system health, and trend analysis for informed decisions.' },
  { icon: 'bi-people-fill', title: 'Vendor Coordination', desc: 'We manage relationships with your technology vendors, handling escalations and negotiations so your team does not have to.' },
];

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'flex-start' }}>
          {/* Left */}
          <div style={{ flex: '1 1 340px' }} data-aos="fade-right" data-aos-delay="200">
            <div className="features-content">
              <h2>Governance-Driven IT Operations</h2>
              <p>
                Technology environments require discipline and accountability to operate reliably.
                InfoManage delivers services using structured IT Service Management practices that
                ensure consistent service delivery and operational visibility.
              </p>

              <div className="main-feature">
                <div className="feat-icon"><i className="bi bi-shield-lock-fill" /></div>
                <div>
                  <h4>ITSM-Based Service Delivery</h4>
                  <p>
                    Every service interaction follows established processes that maintain
                    accountability, reduce errors, and enable continuous improvement across
                    your technology environment.
                  </p>
                </div>
              </div>

              <Link to="/contact" className="btn-features">Request an Assessment</Link>
            </div>
          </div>

          {/* Right: grid */}
          <div style={{ flex: '1 1 500px' }} data-aos="fade-left" data-aos-delay="300">
            <div className="features-grid">
              {govCards.map((f, i) => (
                <div key={i} className="feature-card" data-aos="zoom-in" data-aos-delay={400 + i * 50}>
                  <div className="icon-wrapper"><i className={`bi ${f.icon}`} /></div>
                  <h5>{f.title}</h5>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
