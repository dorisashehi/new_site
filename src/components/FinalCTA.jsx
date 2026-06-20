import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="mit-section" style={{ background: '#fff', borderTop: '1px solid #eef0f4' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }} data-aos="fade-up" data-aos-delay="100">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--accent)', marginBottom: 16 }}>
            <i className="bi bi-calendar2-check" />
            Let's Talk
          </span>
          <h2 style={{ fontSize: 34, fontWeight: 700, color: 'var(--heading-color)', marginBottom: 18 }}>
            Ready to Improve Your IT Operations?
          </h2>
          <p style={{ color: '#666', lineHeight: 1.8, fontSize: 16, marginBottom: 30 }}>
            Schedule a consultation to discuss your environment and learn how structured IT management can
            improve reliability, security, and operational efficiency.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
            <Link to="/contact#contact" className="btn-get-started" style={{ padding: '12px 32px' }}>Schedule Consultation</Link>
            <Link to="/contact"
              style={{ display: 'inline-block', padding: '12px 32px', borderRadius: 50, fontWeight: 600, border: '2px solid var(--accent)', color: 'var(--accent)', transition: '0.3s', fontSize: 15 }}
              onMouseOver={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#fff'; }}
              onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}>
              Contact InfoManage
            </Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[1,2,3,4,5].map(s => <i key={s} className="bi bi-star-fill" style={{ color: '#ffc107', fontSize: 14 }} />)}
            <span style={{ color: '#999', fontSize: 13, marginLeft: 6 }}>Established 1995 · 30+ years of service</span>
          </div>
        </div>
      </div>
    </section>
  );
}
