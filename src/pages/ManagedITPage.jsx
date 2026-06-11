import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import Header from '../components/Header';
import Footer from '../components/Footer';

const coverageItems = [
  'End-user help desk support',
  'Endpoint and workstation management',
  'Server and infrastructure administration',
  'Network monitoring and management',
  'Security protection and system hardening',
  'Vendor coordination and escalation',
  'System monitoring and alert response',
  'Routine maintenance and patching',
];

const frameworkCards = [
  {
    num: '01',
    icon: 'bi-tools',
    title: 'Fix',
    desc: 'Rapid issue resolution keeps users productive and minimizes disruptions.',
    bullets: ['Help desk troubleshooting', 'Application support', 'Incident response and escalation'],
    accent: true,
  },
  {
    num: '02',
    icon: 'bi-shield-check',
    title: 'Maintain',
    desc: 'Proactive operations reduce risk and prevent problems before they occur.',
    bullets: ['24×7 system monitoring', 'Patch management', 'Security hygiene', 'Infrastructure maintenance'],
    accent: false,
  },
  {
    num: '03',
    icon: 'bi-graph-up-arrow',
    title: 'Enhance',
    desc: 'Strategic guidance helps organizations improve and evolve their technology environments.',
    bullets: ['Technology roadmaps', 'Infrastructure upgrades', 'Lifecycle planning', 'vCTO advisory'],
    accent: false,
  },
];

const opsSupportItems = [
  'User support and troubleshooting',
  'Monitoring and alert response',
  'Routine maintenance',
  'Configuration changes',
  'Vendor coordination',
  'System administration',
];

const projectItems = [
  'System migrations',
  'Infrastructure upgrades',
  'New system deployments',
  'Office buildouts',
  'Architecture changes',
];

const plans = [
  {
    icon: 'bi-shield',
    name: 'Essentials',
    tagline: 'Foundational Infrastructure Oversight',
    desc: 'A foundational service plan providing baseline monitoring, patching, and infrastructure oversight. Best suited for organizations that require monitoring and maintenance with optional additional services.',
    features: ['Infrastructure monitoring', 'Patch management', 'Security baseline management', 'Quarterly reporting', 'Email-based support'],
    featured: false,
  },
  {
    icon: 'bi-stars',
    name: 'Professional',
    tagline: 'Unlimited Remote IT Management',
    desc: 'Expanded operational coverage with proactive infrastructure management and unlimited remote support during business hours. Includes enhanced monitoring, endpoint protection, and core ITSM governance.',
    features: ['Everything in Essentials', 'Unlimited remote help desk', 'Proactive system maintenance', 'Security management', 'Monthly operational reporting', 'Vendor management'],
    featured: true,
  },
  {
    icon: 'bi-building-check',
    name: 'Enterprise',
    tagline: '24×7 Support & On-Site Coverage',
    desc: 'Maximum service coverage for organizations requiring the highest level of operational support. Includes expanded monitoring, unlimited on-site visits, and 24×7 support coverage.',
    features: ['Everything in Professional', '24×7 help desk availability', 'On-site support included', 'Dedicated account manager', 'Strategic vCTO advisory', 'Custom SLA agreements'],
    featured: false,
  },
];

const govItems = [
  { icon: 'bi-exclamation-triangle', title: 'Incident Management', desc: 'Structured incident tracking with priority classification ensures critical issues receive immediate attention and appropriate escalation.' },
  { icon: 'bi-arrow-left-right', title: 'Change Management', desc: 'Controlled processes govern all infrastructure modifications, minimizing risk and maintaining environment stability.' },
  { icon: 'bi-activity', title: 'Monitoring & Alerts', desc: 'Continuous 24×7 infrastructure monitoring with automated alert response keeps your environment stable around the clock.' },
  { icon: 'bi-file-earmark-text', title: 'Infrastructure Documentation', desc: 'Detailed documentation of your environment provides operational clarity and protects institutional knowledge.' },
  { icon: 'bi-bar-chart-line', title: 'Operational Reporting', desc: 'Regular operational reports provide visibility into service delivery, system health, and trend analysis for informed decisions.' },
  { icon: 'bi-people-fill', title: 'Vendor Coordination', desc: 'We manage relationships with your technology vendors, handling escalations and negotiations so your team does not have to.' },
];

const idealForItems = [
  'Depend heavily on technology to operate',
  'Prefer proactive infrastructure management rather than reactive support',
  'Want predictable IT management costs',
  'Require reliable monitoring and system maintenance',
  'Value long-term technology planning and guidance',
];

export default function ManagedITPage() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in-out', once: true, mirror: false });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="main">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="mit-hero">
          <div className="mit-hero-overlay" />
          <div className="container mit-hero-content" data-aos="fade-up" data-aos-delay="100">
            <div className="mit-hero-badge">
              <i className="bi bi-cpu" />
              <span>Managed IT Services</span>
            </div>
            <h1>Managed IT Services</h1>
            <p className="mit-hero-sub">
              Structured IT operations and infrastructure management for organizations that depend on reliable technology.
            </p>
            <p className="mit-hero-body">
              InfoManage provides comprehensive managed IT services that take responsibility for the day-to-day
              operation of your technology environment. Our team monitors, maintains, and supports your systems
              while helping your organization plan and evolve its infrastructure over time.
            </p>
            <p className="mit-hero-note">
              Rather than reacting to problems as they occur, we proactively manage the systems that keep your business running.
            </p>
            <div className="mit-hero-btns">
              <Link to="/#contact" className="btn-get-started">Schedule a Consultation</Link>
              <Link to="/#contact" className="mit-hero-outline-btn">Request an IT Assessment</Link>
            </div>
          </div>
        </section>

        {/* ── What Managed IT Means ─────────────────────────────── */}
        <section className="mit-section">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>What Managed IT Means at InfoManage</h2>
              <p>Operational responsibility for the stability, performance, and security of your technology environment</p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}>
              <div style={{ flex: '1 1 400px' }} data-aos="fade-right" data-aos-delay="150">
                <span className="services-content subtitle" style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>
                  Comprehensive Coverage
                </span>
                <h2 style={{ fontSize: 30, fontWeight: 700, marginBottom: 18, color: 'var(--heading-color)' }}>
                  Beyond Traditional Support
                </h2>
                <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 16 }}>
                  Managed IT services at InfoManage go beyond traditional support. We take operational responsibility
                  for maintaining the stability, performance, and security of your technology environment.
                </p>
                <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 28 }}>
                  Our team manages the core infrastructure that businesses depend on every day, ensuring that systems
                  remain reliable and users remain productive.
                </p>
                <p style={{ fontWeight: 700, color: 'var(--heading-color)', marginBottom: 14, fontSize: 15 }}>
                  Operational coverage includes:
                </p>
                <ul className="check-list">
                  {coverageItems.map((item, i) => (
                    <li key={i}>
                      <i className="bi bi-check2-circle" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ flex: '1 1 400px' }} data-aos="fade-left" data-aos-delay="250" className="services-image">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
                  alt="Managed IT operations"
                />
                <div className="shape-circle" />
                <div className="shape-accent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Fix / Maintain / Enhance ─────────────────────────── */}
        <section className="mit-framework-section">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>How InfoManage Manages IT</h2>
              <p>A structured operational model designed to keep systems running smoothly while enabling continuous improvement</p>
            </div>

            <div className="mit-framework-grid">
              {frameworkCards.map((card, i) => (
                <div
                  key={i}
                  className={`mit-framework-card${card.accent ? ' mit-framework-card--accent' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay={100 + i * 120}
                >
                  <div className="mit-fw-num">{card.num}</div>
                  <div className="mit-fw-icon-wrap">
                    <i className={`bi ${card.icon}`} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <ul>
                    {card.bullets.map((b, j) => (
                      <li key={j}>
                        <i className="bi bi-check2" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p style={{ textAlign: 'center', color: '#888', fontSize: 14, marginTop: 40 }} data-aos="fade-up" data-aos-delay="400">
              This structured approach ensures that IT operations remain reliable while supporting future growth.
            </p>
          </div>
        </section>

        {/* ── Operational Support vs Project Work ───────────────── */}
        <section className="mit-section" style={{ background: 'var(--light-bg)' }}>
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Operational Support vs Project Work</h2>
              <p>Clear separation ensures predictable service delivery and allows organizations to plan technology improvements effectively</p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, justifyContent: 'center' }}>
              {/* Operational Support */}
              <div style={{ flex: '1 1 320px', maxWidth: 520 }} data-aos="fade-right" data-aos-delay="150">
                <div className="mit-compare-card mit-compare-card--ops">
                  <div className="mit-compare-header">
                    <div className="mit-compare-icon">
                      <i className="bi bi-gear-fill" />
                    </div>
                    <div>
                      <h4>Operational Support</h4>
                      <span>Covered within the monthly service plan</span>
                    </div>
                  </div>
                  <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                    Day-to-day IT activities are included in your service plan. No additional billing for standard operational tasks.
                  </p>
                  <ul className="check-list">
                    {opsSupportItems.map((item, i) => (
                      <li key={i}><i className="bi bi-check2-circle" />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Project Work */}
              <div style={{ flex: '1 1 320px', maxWidth: 520 }} data-aos="fade-left" data-aos-delay="250">
                <div className="mit-compare-card mit-compare-card--project">
                  <div className="mit-compare-header">
                    <div className="mit-compare-icon mit-compare-icon--project">
                      <i className="bi bi-clipboard2-data" />
                    </div>
                    <div>
                      <h4>Project Work</h4>
                      <span>Planned and delivered separately</span>
                    </div>
                  </div>
                  <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                    Major infrastructure changes that exceed defined thresholds are structured as projects to ensure proper design and implementation.
                  </p>
                  <ul className="check-list">
                    {projectItems.map((item, i) => (
                      <li key={i}><i className="bi bi-check2-circle" />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <p style={{ textAlign: 'center', color: '#888', fontSize: 14, marginTop: 32 }} data-aos="fade-up" data-aos-delay="400">
              This clear separation allows operational support to remain predictable while ensuring complex initiatives receive appropriate attention.
            </p>
          </div>
        </section>

        {/* ── Service Plan Overview ─────────────────────────────── */}
        <section className="pricing-section">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Service Plan Overview</h2>
              <p>Multiple service plans designed to match the operational needs and risk tolerance of each organization</p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, justifyContent: 'center', alignItems: 'flex-start' }}>
              {plans.map((plan, i) => (
                <div key={i} style={{ flex: '1 1 280px', maxWidth: 360 }}
                  data-aos="fade-up" data-aos-delay={100 + i * 100}>
                  <div className={`pricing-item${plan.featured ? ' featured' : ''}`}>
                    {plan.featured && <div className="pricing-badge">Most Popular</div>}
                    <div className="pricing-icon"><i className={`bi ${plan.icon}`} /></div>
                    <h3>{plan.name}</h3>
                    <p style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 700, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>
                      {plan.tagline}
                    </p>
                    <p className="description">{plan.desc}</p>
                    <ul className="features-list">
                      {plan.features.map((f, j) => (
                        <li key={j}><i className="bi bi-check2" />{f}</li>
                      ))}
                    </ul>
                    <Link to="/#contact" className="btn-pricing">Get a Quote</Link>
                    <p style={{ fontSize: 11, color: '#aaa', marginTop: 12, textAlign: 'center' }}>
                      Per-user, per-device, or hybrid pricing available
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mit-pricing-models" data-aos="fade-up" data-aos-delay="400">
              <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.8)', fontSize: 15, marginBottom: 20 }}>
                Flexible pricing models to fit your environment
              </p>
              <div className="mit-pricing-model-tags">
                {['Per-user pricing', 'Per-device pricing', 'Hybrid models for mixed environments'].map((model, i) => (
                  <span key={i} className="mit-model-tag">
                    <i className="bi bi-check-circle-fill" />
                    {model}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Governance-Driven ITSM ────────────────────────────── */}
        <section className="features-section">
          <div className="container">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'flex-start' }}>
              <div style={{ flex: '1 1 340px' }} data-aos="fade-right" data-aos-delay="200">
                <div className="features-content">
                  <span style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>
                    ITSM Practices
                  </span>
                  <h2>Governance-Driven IT Service Management</h2>
                  <p>
                    Reliable IT operations require structured processes and accountability. InfoManage delivers
                    services using established IT Service Management practices to maintain operational discipline
                    and visibility.
                  </p>
                  <div className="main-feature">
                    <div className="feat-icon"><i className="bi bi-shield-lock-fill" /></div>
                    <div>
                      <h4>Predictable IT Management</h4>
                      <p>
                        Technology operations should be predictable and transparent. InfoManage service plans
                        provide consistent operational coverage without unexpected service invoices — so your
                        organization can focus on its mission.
                      </p>
                    </div>
                  </div>
                  <Link to="/#contact" className="btn-features">Request an Assessment</Link>
                </div>
              </div>

              <div style={{ flex: '1 1 500px' }} data-aos="fade-left" data-aos-delay="300">
                <div className="features-grid">
                  {govItems.map((item, i) => (
                    <div key={i} className="feature-card" data-aos="zoom-in" data-aos-delay={400 + i * 50}>
                      <div className="icon-wrapper"><i className={`bi ${item.icon}`} /></div>
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Who This Service Is Designed For ─────────────────── */}
        <section className="mit-section" style={{ background: 'var(--light-bg)' }}>
          <div className="container">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}>
              <div style={{ flex: '1 1 400px' }} data-aos="fade-left" data-aos-delay="200" className="services-image">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
                  alt="Organizations that rely on technology"
                />
                <div className="shape-circle" />
                <div className="shape-accent" />
              </div>

              <div style={{ flex: '1 1 400px' }} data-aos="fade-right" data-aos-delay="100">
                <span style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>
                  Ideal For
                </span>
                <h2 style={{ fontSize: 30, fontWeight: 700, marginBottom: 18, color: 'var(--heading-color)' }}>
                  Who This Service Is Designed For
                </h2>
                <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 24 }}>
                  Managed IT services from InfoManage are ideal for organizations that:
                </p>
                <ul className="check-list" style={{ marginBottom: 32 }}>
                  {idealForItems.map((item, i) => (
                    <li key={i} style={{ padding: '9px 0', fontSize: 15 }}>
                      <i className="bi bi-check2-circle" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <Link to="/#contact" className="btn-consultation">
                    <span>Schedule a Consultation</span>
                    <i className="bi bi-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────── */}
        <section className="cta-section">
          <div className="container">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'center' }}>
              <div style={{ flex: '1 1 400px' }} data-aos="fade-right" data-aos-delay="200">
                <div className="cta-badge">
                  <i className="bi bi-rocket-takeoff" />
                  Ready to Get Started?
                </div>
                <h2>Ready to Improve Your IT Operations?</h2>
                <p className="lead">
                  Schedule a consultation to discuss your environment and learn how structured IT management
                  can improve reliability, security, and operational efficiency.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: 14, fontSize: 14, lineHeight: 1.7 }}>
                  InfoManage has been serving organizations since 1995. Our team brings decades of operational
                  experience to every engagement.
                </p>
              </div>

              <div style={{ flex: '1 1 400px' }} data-aos="fade-left" data-aos-delay="300">
                <div style={{ marginBottom: 28 }}>
                  <div className="cta-feature"><i className="bi bi-check-circle-fill" /><span>Proactive monitoring and maintenance — 24×7</span></div>
                  <div className="cta-feature"><i className="bi bi-check-circle-fill" /><span>Unlimited operational support within service plan scope</span></div>
                  <div className="cta-feature"><i className="bi bi-check-circle-fill" /><span>Governance-driven ITSM practices</span></div>
                  <div className="cta-feature"><i className="bi bi-check-circle-fill" /><span>Strategic technology planning and vCTO advisory</span></div>
                </div>
                <div className="cta-buttons">
                  <Link to="/#contact" className="btn-cta-primary">Schedule Consultation</Link>
                  <Link to="/#contact" className="btn-cta-outline">Contact InfoManage</Link>
                </div>
                <div className="trust-indicators">
                  <small>Trusted by organizations across financial services, legal, healthcare, and more</small>
                  <div className="rating" style={{ marginTop: 8 }}>
                    <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    <span>Established 1995 · 30+ years of service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
