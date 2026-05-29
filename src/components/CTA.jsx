export default function CTA() {
  return (
    <section id="call-to-action" className="cta-section">
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'center' }}>
          {/* Left */}
          <div style={{ flex: '1 1 400px' }} data-aos="fade-right" data-aos-delay="200">
            <div className="cta-badge">
              <i className="bi bi-check-circle" />
              No Surprise Invoices
            </div>
            <h2>Predictable IT Operations</h2>
            <p className="lead">
              InfoManage provides unlimited operational support through clearly defined service plans
              designed to eliminate surprise invoices and reactive support models. Daily IT operations
              are fully covered within the service plan scope.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: 14, fontSize: 14, lineHeight: 1.7 }}>
              This predictable approach allows organizations to focus on running their business while
              knowing their technology environment is being continuously managed and maintained.
            </p>
          </div>

          {/* Right */}
          <div style={{ flex: '1 1 400px' }} data-aos="fade-left" data-aos-delay="300">
            <div style={{ marginBottom: 28 }}>
              <div className="cta-feature">
                <i className="bi bi-check-circle-fill" />
                <span>Daily IT operations fully covered within service plan scope</span>
              </div>
              <div className="cta-feature">
                <i className="bi bi-check-circle-fill" />
                <span>Monitoring, troubleshooting, and system administration included</span>
              </div>
              <div className="cta-feature">
                <i className="bi bi-check-circle-fill" />
                <span>Routine maintenance and security hygiene — no extras</span>
              </div>
              <div className="cta-feature">
                <i className="bi bi-check-circle-fill" />
                <span>Structured service plans with defined scope and deliverables</span>
              </div>
            </div>

            <div className="cta-buttons">
              <a href="#pricing" className="btn-cta-primary">View Service Plans</a>
              <a href="#contact" className="btn-cta-outline">Talk to an Expert</a>
            </div>

            <div className="trust-indicators">
              <small>Trusted by organizations across financial services, legal, healthcare, and more</small>
              <div className="rating" style={{ marginTop: 8 }}>
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <span>Established 1995 · 30+ years of service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
