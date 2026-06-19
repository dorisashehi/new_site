import { Link } from 'react-router-dom';

const services = [
  { icon: 'bi-map', label: 'Technology Roadmaps' },
  { icon: 'bi-diagram-3', label: 'Infrastructure Architecture' },
  { icon: 'bi-calendar-range', label: 'Lifecycle Planning' },
  { icon: 'bi-people', label: 'Vendor Selection & Evaluation' },
  { icon: 'bi-bar-chart-steps', label: 'Capacity & Budget Planning' },
];

export default function Partnership() {
  return (
    <section id="partnership" className="partnership-section">
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 60, alignItems: 'center' }}>

          {/* Left */}
          <div style={{ flex: '1 1 420px' }} data-aos="fade-right" data-aos-delay="150">
            <span className="partnership-eyebrow">Beyond Daily Operations</span>
            <h2>Strategic Technology Partnership</h2>
            <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 28, fontSize: 15 }}>
              InfoManage helps organizations plan and evolve their technology environments.
              Through ongoing advisory and strategic planning, we ensure technology decisions
              support long-term business goals.
            </p>

            <div className="partnership-list">
              {services.map((s, i) => (
                <div key={i} className="partnership-item" data-aos="fade-right" data-aos-delay={200 + i * 60}>
                  <div className="partnership-icon">
                    <i className={`bi ${s.icon}`} />
                  </div>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            <Link to="/contact" className="btn-learn-more" style={{ marginTop: 32, display: 'inline-block' }}>
              Schedule a Strategy Session
            </Link>
          </div>

          {/* Right */}
          <div style={{ flex: '1 1 400px' }} data-aos="fade-left" data-aos-delay="200">
            <div className="partnership-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Strategic technology planning"
              />
              <div className="partnership-badge">
                <i className="bi bi-award-fill" />
                <div>
                  <strong>30+ Years</strong>
                  <span>IT Experience</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
