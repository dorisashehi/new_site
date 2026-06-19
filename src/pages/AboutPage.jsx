import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import Header from '../components/Header';
import Footer from '../components/Footer';

const approachAreas = [
  {
    icon: 'bi-gear-wide-connected',
    title: 'Operational Management',
    desc: 'Managing the daily systems and infrastructure that organizations depend on.',
  },
  {
    icon: 'bi-shield-check',
    title: 'Proactive Maintenance',
    desc: 'Preventing issues through monitoring, patching, and routine system maintenance.',
  },
  {
    icon: 'bi-signpost-2-fill',
    title: 'Strategic Planning',
    desc: 'Helping organizations make informed decisions about technology investments and infrastructure improvements.',
  },
];

const governanceItems = [
  { icon: 'bi-exclamation-circle', label: 'Incident management' },
  { icon: 'bi-arrow-left-right', label: 'Change management' },
  { icon: 'bi-bell', label: 'Monitoring and alert management' },
  { icon: 'bi-file-earmark-text', label: 'Infrastructure documentation' },
  { icon: 'bi-clipboard-data', label: 'Operational oversight and reporting' },
];

const industries = [
  { icon: 'bi-bank', label: 'Financial Services' },
  { icon: 'bi-briefcase-fill', label: 'Legal' },
  { icon: 'bi-heart-pulse-fill', label: 'Healthcare' },
  { icon: 'bi-megaphone-fill', label: 'Advertising & Media' },
  { icon: 'bi-building-fill', label: 'Real Estate' },
  { icon: 'bi-gear-fill', label: 'Manufacturing' },
  { icon: 'bi-mortarboard-fill', label: 'Education' },
  { icon: 'bi-people-fill', label: 'Non-Profit Organizations' },
];

const values = [
  { icon: 'bi-check2-circle', title: 'Reliability', desc: 'Technology systems should operate consistently and support business productivity.' },
  { icon: 'bi-diagram-3-fill', title: 'Operational Discipline', desc: 'Structured processes ensure that technology environments remain stable and well managed.' },
  { icon: 'bi-eye-fill', title: 'Transparency', desc: 'Clear communication and defined service expectations help maintain strong client relationships.' },
  { icon: 'bi-graph-up-arrow', title: 'Strategic Partnership', desc: 'Technology decisions should support long-term business goals.' },
];

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in-out', once: true, mirror: false });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="main">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="about-hero">
          <div className="about-hero-overlay" />
          <div className="container mit-hero-content" data-aos="fade-up" data-aos-delay="100">
            <div className="mit-hero-badge">
              <i className="bi bi-calendar-check" />
              <span>Founded in 1995 · 30+ Years of Service</span>
            </div>
            <h1>About InfoManage</h1>
            <p className="mit-hero-sub">
              Providing structured IT operations and infrastructure support for organizations that depend on reliable technology.
            </p>
            <p className="mit-hero-body">
              InfoManage helps organizations manage the technology systems that support their daily operations. By
              combining proactive infrastructure management with strategic technology guidance, we help businesses
              maintain stable, secure, and scalable technology environments.
            </p>
            <p className="mit-hero-body">
              Since 1995, InfoManage has partnered with organizations across a wide range of industries to manage
              and support the systems they rely on every day.
            </p>
            <div className="mit-hero-btns">
              <Link to="/contact" className="btn-get-started">Schedule a Consultation</Link>
              <Link to="/contact" className="mit-hero-outline-btn">Contact InfoManage</Link>
            </div>
          </div>
        </section>

        {/* ── Our Story — features-section layout ──────────────── */}
        <section id="our-story" className="features-section">
          <div className="container">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'center' }}>

              {/* Left: image + founded badge */}
              <div style={{ flex: '1 1 400px', position: 'relative', paddingBottom: 30, paddingRight: 20 }} data-aos="fade-right">
                <div className="about-img">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                    alt="InfoManage team collaborating"
                  />
                </div>
                <div className="experience-badge" data-aos="fade-up" data-aos-delay="200">
                  <h2>1995</h2>
                  <p>Founded<br />In</p>
                </div>
              </div>

              {/* Right: content */}
              <div style={{ flex: '1 1 400px' }} data-aos="fade-left" data-aos-delay="100">
                <div className="features-content">
                  <h2>Our Story</h2>
                  <p>
                    InfoManage was founded in 1995 with the goal of helping organizations manage increasingly
                    complex technology environments.
                  </p>
                  <p>
                    As businesses became more dependent on technology infrastructure, the need for reliable,
                    disciplined IT operations grew. InfoManage developed a service model focused on structured
                    technology management, proactive infrastructure maintenance, and long-term operational stability.
                  </p>
                  <p>
                    Over the years, we have worked with organizations across many industries, supporting
                    environments ranging from small offices to multi-site infrastructure deployments.
                  </p>
                  <p>
                    Our approach has remained consistent: provide dependable operational management while helping
                    organizations plan and evolve their technology environments.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Our Approach — 3-card grid ────────────────────────── */}
        <section id="approach" className="mit-section" style={{ background: '#fff' }}>
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Our Approach</h2>
              <p>
                Technology infrastructure requires continuous attention to remain stable, secure, and aligned with
                business needs. InfoManage follows a structured operational approach designed to ensure that
                technology environments remain reliable and well managed.
              </p>
            </div>

            <div className="mit-gov-grid">
              {approachAreas.map((item, i) => (
                <div key={i} className="feature-card" data-aos="fade-up" data-aos-delay={150 + i * 80}>
                  <div className="icon-wrapper"><i className={`bi ${item.icon}`} /></div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <p style={{ textAlign: 'center', maxWidth: 700, margin: '36px auto 0', color: '#666', fontSize: 15, lineHeight: 1.8 }}>
              This structured model allows organizations to benefit from both operational management and long-term
              technology planning.
            </p>
          </div>
        </section>

        {/* ── Governance-Driven IT Operations — dark split ──────── */}
        <section id="governance" className="mit-dark-section">
          <div className="container">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'center' }}>
              <div style={{ flex: '1 1 400px' }} data-aos="fade-up" data-aos-delay="150">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80"
                  alt="Operational oversight and reporting"
                  style={{ width: '100%', borderRadius: 10, display: 'block', boxShadow: '0 12px 48px rgba(0,0,0,0.4)' }}
                />
              </div>
              <div style={{ flex: '1 1 400px' }} data-aos="fade-up" data-aos-delay="250">
                <span className="mit-split-label">Service Management</span>
                <h2 style={{ fontSize: 30, fontWeight: 700, color: '#fff', marginBottom: 18 }}>
                  Governance-Driven IT Operations
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>
                  InfoManage delivers services using established IT Service Management practices that provide
                  operational discipline and accountability.
                </p>
                <p className="mit-split-list-label">These practices include:</p>
                <ul className="mit-split-list">
                  {governanceItems.map((item, i) => (
                    <li key={i}><i className={`bi ${item.icon}`} />{item.label}</li>
                  ))}
                </ul>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.8, marginTop: 20, fontStyle: 'italic' }}>
                  This governance-driven approach helps ensure that technology environments remain stable while
                  allowing systems to evolve as business needs change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Long-Term Client Partnerships ─────────────────────── */}
        <section id="partnerships" className="mit-section" style={{ background: '#fff' }}>
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Long-Term Client Partnerships</h2>
            </div>

            <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }} data-aos="fade-up" data-aos-delay="100">
              <p style={{ color: '#666', fontSize: 15, lineHeight: 1.8 }}>
                Many InfoManage client relationships span many years. Our focus on consistent service delivery and
                operational reliability has helped organizations maintain stable technology environments while
                adapting to new technologies and changing business requirements.
              </p>
              <p style={{ color: '#666', fontSize: 15, lineHeight: 1.8, fontWeight: 600 }}>
                We view every client engagement as a long-term partnership built on reliability, transparency, and trust.
              </p>
            </div>
          </div>
        </section>

        {/* ── Industries Served — icon grid ─────────────────────── */}
        <section id="industries" className="mit-section" style={{ background: 'var(--light-bg)' }}>
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Industries Served</h2>
              <p>InfoManage supports organizations across a variety of industries that rely heavily on technology infrastructure</p>
            </div>

            <div className="about-industries-grid">
              {industries.map((item, i) => (
                <div key={i} className="about-industry-card" data-aos="fade-up" data-aos-delay={80 + i * 50}>
                  <div className="about-industry-icon"><i className={`bi ${item.icon}`} /></div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>

            <p style={{ textAlign: 'center', maxWidth: 700, margin: '36px auto 0', color: '#666', fontSize: 15, lineHeight: 1.8 }}>
              Working across multiple industries provides valuable experience in managing different types of
              systems, operational requirements, and regulatory considerations.
            </p>
          </div>
        </section>

        {/* ── Leadership ─────────────────────────────────────────── */}
        <section id="leadership" className="team-section">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Leadership</h2>
              <p>The founder behind InfoManage's structured approach to technology management</p>
            </div>

            <div className="team-single-wrap" data-aos="fade-up" data-aos-delay="150">
              <div className="team-single-card">
                <div className="team-single-img">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                    alt="Marc Neer"
                  />
                </div>
                <div className="team-single-info">
                  <span className="team-single-role">President, InfoManage Corporation</span>
                  <h3>Marc Neer</h3>
                  <p>
                    Marc Neer founded InfoManage in 1995 with the goal of helping organizations manage and maintain
                    reliable technology infrastructure.
                  </p>
                  <p>
                    Under his leadership, InfoManage has developed a reputation for delivering structured IT
                    operations and dependable technology management for organizations that rely heavily on their
                    technology environments.
                  </p>
                  <p>
                    Marc works closely with clients to help guide infrastructure decisions, operational
                    improvements, and long-term technology planning.
                  </p>
                  <div className="team-single-skills">
                    {['Infrastructure Strategy', 'Operational Leadership', 'Long-Term Planning', 'Client Partnership'].map((s, i) => (
                      <span key={i} className="team-skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Values — 4-card grid ──────────────────────────── */}
        <section id="values" className="mit-section" style={{ background: 'var(--light-bg)' }}>
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Our Values</h2>
              <p>The InfoManage approach to technology management is guided by several core principles</p>
            </div>

            <div className="features-grid">
              {values.map((item, i) => (
                <div key={i} className="feature-card" data-aos="zoom-in" data-aos-delay={120 + i * 70}>
                  <div className="icon-wrapper"><i className={`bi ${item.icon}`} /></div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────── */}
        <section className="mit-section" style={{ background: '#fff', borderTop: '1px solid #eef0f4' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }} data-aos="fade-up" data-aos-delay="100">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--accent)', marginBottom: 16 }}>
                <i className="bi bi-handshake" />
                Trusted Since 1995
              </span>
              <h2 style={{ fontSize: 34, fontWeight: 700, color: 'var(--heading-color)', marginBottom: 18 }}>
                Partner with a Trusted Technology Operations Team
              </h2>
              <p style={{ color: '#666', lineHeight: 1.8, fontSize: 16, marginBottom: 30 }}>
                If your organization relies on technology to operate and grow, InfoManage can help manage and
                maintain the systems that support your business.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
                <Link to="/contact" className="btn-get-started" style={{ padding: '12px 32px' }}>Schedule a Consultation</Link>
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

      </main>
      <Footer />
    </>
  );
}
