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
    desc1: 'A foundational service plan.',
    desc2: 'Best suited for organizations that require monitoring and maintenance with optional additional services.',
    features: ['Monitoring', 'Patching', 'Infrastructure oversight'],
    featured: false,
  },
  {
    icon: 'bi-stars',
    name: 'Professional',
    desc1: 'Expanded operational coverage with proactive infrastructure management and unlimited remote support during business hours.',
    desc2: null,
    features: ['Enhanced monitoring', 'Endpoint protection', 'Core IT service management governance'],
    featured: true,
  },
  {
    icon: 'bi-building-check',
    name: 'Enterprise',
    desc1: 'Maximum service coverage for organizations requiring the highest level of operational support.',
    desc2: null,
    features: ['Expanded monitoring', 'Unlimited on-site visits', '24×7 support coverage'],
    featured: false,
  },
];

const govItems = [
  { icon: 'bi-exclamation-triangle', title: 'Incident Management', desc: 'Structured incident tracking with priority classification ensures critical issues receive immediate attention and appropriate escalation.' },
  { icon: 'bi-arrow-left-right', title: 'Change Management', desc: 'Controlled processes govern all infrastructure modifications, minimizing risk and maintaining environment stability.' },
  { icon: 'bi-activity', title: 'Monitoring & Alerts', desc: 'Continuous 24×7 infrastructure monitoring with automated alert response keeps your environment stable around the clock.' },
  { icon: 'bi-file-earmark-text', title: 'Infrastructure Documentation', desc: 'Detailed documentation of your environment provides operational clarity and protects institutional knowledge.' },
  { icon: 'bi-bar-chart-line', title: 'Operational Reporting', desc: 'Regular operational reports provide visibility into service delivery, system health, and trend analysis for informed decisions.' },
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
              <Link to="/contact#contact" className="btn-get-started">Schedule a Consultation</Link>
              <Link to="/contact" className="mit-hero-outline-btn">Request an IT Assessment</Link>
            </div>
          </div>
        </section>

        {/* ── What Managed IT Means — dark section ─────────────── */}
        <section id="overview" className="mit-dark-section">
          <div className="container">
            <div className="section-title mit-dark-title" data-aos="fade-up">
              <h2>What Managed IT Means at InfoManage</h2>
              <p>Operational responsibility for the stability, performance, and security of your technology environment</p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'center' }}>
              <div style={{ flex: '1 1 400px' }} data-aos="fade-up" data-aos-delay="150">
                <p style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 14, fontSize: 15 }}>
                  Managed IT services at InfoManage go beyond traditional support. We take operational
                  responsibility for maintaining the stability, performance, and security of your technology environment.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24, fontSize: 15 }}>
                  Our team manages the core infrastructure that businesses depend on every day, ensuring
                  that systems remain reliable and users remain productive.
                </p>
                <p className="mit-split-list-label">Operational coverage includes:</p>
                <ul className="mit-split-list">
                  {coverageItems.map((item, i) => (
                    <li key={i}><i className="bi bi-check2" />{item}</li>
                  ))}
                </ul>
                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginTop: 28, fontSize: 14, fontStyle: 'italic' }}>
                  By continuously managing these responsibilities, InfoManage helps organizations maintain
                  stable and secure technology environments.
                </p>
              </div>

              <div style={{ flex: '1 1 400px' }} data-aos="fade-up" data-aos-delay="250">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80"
                  alt="IT support and operations team"
                  style={{ width: '100%', borderRadius: 10, display: 'block', boxShadow: '0 12px 48px rgba(0,0,0,0.4)' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Fix / Maintain / Enhance — HowWeWork style cards ─── */}
        <section className="howwework-section">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>How InfoManage Manages IT</h2>
              <p>A structured operational model designed to keep systems running smoothly while enabling continuous improvement</p>
            </div>

            <div className="hww-grid">
              {frameworkCards.map((card, i) => (
                <div key={i} className="hww-card" data-aos="fade-up" data-aos-delay={150 + i * 100}>
                  <div className="hww-num">{card.num}</div>
                  <div className="hww-icon-wrap">
                    <i className={`bi ${card.icon}`} />
                  </div>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                  <ul className="hww-points">
                    {card.bullets.map((b, j) => (
                      <li key={j}><i className="bi bi-check2-circle" />{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Ops vs Project Work — dark overlay split ─────────── */}
        <section id="operational-support" className="mit-dark-compare">
          <div className="mit-dark-compare-overlay" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-title" data-aos="fade-up" style={{ paddingBottom: 16 }}>
              <h2 style={{ color: '#fff' }}>Operational Support vs Project Work</h2>
            </div>

            <div style={{ maxWidth: 700, margin: '0 auto 48px', textAlign: 'center' }} data-aos="fade-up" data-aos-delay="100">
              <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 15, lineHeight: 1.8, marginBottom: 12 }}>
                InfoManage clearly distinguishes between day-to-day operational support and larger infrastructure projects.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.8 }}>
                This distinction ensures predictable service delivery while allowing organizations to plan technology improvements effectively.
              </p>
            </div>

            <div className="mit-dc-grid">
              <div data-aos="fade-up" data-aos-delay="150">
                <div className="mit-dc-header mit-dc-header--ops">
                  <i className="bi bi-gear-fill" />
                  <div>
                    <h4>Operational Support</h4>
                    <span>Covered within the monthly service plan.</span>
                  </div>
                </div>
                <p className="mit-dc-desc">Examples include:</p>
                <ul className="mit-dc-list">
                  {opsSupportItems.map((item, i) => (
                    <li key={i}><i className="bi bi-check2" />{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mit-dc-divider" />

              <div data-aos="fade-up" data-aos-delay="250">
                <div className="mit-dc-header mit-dc-header--project">
                  <i className="bi bi-clipboard2-data" />
                  <div>
                    <h4>Project Work</h4>
                    <span>Major infrastructure changes or deployments are structured as project work.</span>
                  </div>
                </div>
                <p className="mit-dc-desc">Examples include:</p>
                <ul className="mit-dc-list">
                  {projectItems.map((item, i) => (
                    <li key={i}><i className="bi bi-check2" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ maxWidth: 680, margin: '48px auto 0', textAlign: 'center' }} data-aos="fade-up" data-aos-delay="300">
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.8, marginBottom: 10 }}>
                Projects that exceed defined thresholds are planned and delivered separately to ensure proper design and implementation.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.8, fontStyle: 'italic' }}>
                This clear separation allows operational support to remain predictable while ensuring complex initiatives receive appropriate attention.
              </p>
            </div>
          </div>
        </section>

        {/* ── Service Plan Overview ─────────────────────────────── */}
        <section className="mit-section" style={{ background: '#f0f4f9' }}>
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Service Plan Overview</h2>
              <p>InfoManage offers multiple service plans designed to match the operational needs and risk tolerance of each organization</p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, justifyContent: 'center', alignItems: 'flex-start' }}>
              {plans.map((plan, i) => (
                <div key={i} style={{ flex: '1 1 280px', maxWidth: 360 }}
                  data-aos="fade-up" data-aos-delay={100 + i * 100}>
                  <div className={`pricing-item${plan.featured ? ' featured' : ''}`}>
                    {plan.featured && <div className="pricing-badge">Most Popular</div>}
                    <div className="pricing-icon"><i className={`bi ${plan.icon}`} /></div>
                    <h3>{plan.name}</h3>
                    <p className="description">{plan.desc1}</p>
                    {plan.desc2 && <p className="description">{plan.desc2}</p>}
                    <ul className="features-list">
                      {plan.features.map((f, j) => (
                        <li key={j}><i className="bi bi-check2" />{f}</li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn-pricing">Get a Quote</Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Predictable IT Management ─────────────────────────── */}
        <section className="mit-section" style={{ background: 'var(--light-bg)' }}>
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Predictable IT Management</h2>
              <p>Technology operations should be predictable and transparent. InfoManage service plans are designed to provide consistent operational coverage without unexpected service invoices.</p>
            </div>

            <div style={{ maxWidth: 720, margin: '0 auto' }} data-aos="fade-up" data-aos-delay="100">
              <p style={{ color: '#555', fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
                Organizations can choose pricing models that best fit their environment, including:
              </p>
              <ul className="mit-split-list" style={{ marginBottom: 28 }}>
                {['Per-user pricing', 'Per-device pricing', 'Hybrid models for mixed environments'].map((item, i) => (
                  <li key={i} style={{ color: '#555', borderBottomColor: '#e8edf4' }}><i className="bi bi-check2" />{item}</li>
                ))}
              </ul>
              <p style={{ color: '#777', fontSize: 14, lineHeight: 1.8, fontStyle: 'italic' }}>
                These flexible options ensure that organizations receive appropriate coverage while maintaining cost efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* ── Governance-Driven ITSM — stats strip + full grid ──── */}
        <section className="mit-section">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Governance-Driven IT Service Management</h2>
              <p>Reliable IT operations require structured processes and accountability. InfoManage uses established ITSM practices to maintain operational discipline and visibility.</p>
            </div>

            <div className="mit-stats-bar" data-aos="fade-up" data-aos-delay="100">
              {[
                { num: '24×7', label: 'System Monitoring' },
                { num: '6', label: 'ITSM Practices' },
                { num: '30+', label: 'Years Experience' },
                { num: '100%', label: 'Operational Transparency' },
              ].map((s, i) => (
                <div key={i} className="mit-stat-item">
                  <strong>{s.num}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            <div className="mit-gov-grid" data-aos="fade-up" data-aos-delay="200">
              {govItems.map((item, i) => (
                <div key={i} className="feature-card" data-aos="fade-up" data-aos-delay={300 + i * 50}>
                  <div className="icon-wrapper"><i className={`bi ${item.icon}`} /></div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <p style={{ textAlign: 'center', color: '#777', fontSize: 14, lineHeight: 1.8, marginTop: 40, fontStyle: 'italic' }} data-aos="fade-up">
              These practices ensure that technology environments remain stable, secure, and well-managed.
            </p>
          </div>
        </section>

        {/* ── Who This Is For — numbered full-width criteria ──────── */}
        <section className="mit-section" style={{ background: 'var(--light-bg)' }}>
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Who This Service Is Designed For</h2>
              <p>Managed IT services from InfoManage are ideal for organizations that:</p>
            </div>

            <div className="mit-criteria-list">
              {idealForItems.map((item, i) => (
                <div key={i} className="mit-criteria-item" data-aos="fade-up" data-aos-delay={80 + i * 70}>
                  <div className="mit-criteria-num">0{i + 1}</div>
                  <div className="mit-criteria-icon">
                    <i className={['bi-pc-display', 'bi-arrow-repeat', 'bi-graph-down-arrow', 'bi-activity', 'bi-compass'][i]} />
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Final CTA — white section ─────────────────────────── */}
        <section className="mit-section" style={{ background: '#fff', borderTop: '1px solid #eef0f4' }}>
          <div className="container">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 60, alignItems: 'center' }}>
              <div style={{ flex: '1 1 400px' }} data-aos="fade-up" data-aos-delay="200">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--accent)', marginBottom: 16 }}>
                  <i className="bi bi-rocket-takeoff" />
                  Ready to Get Started?
                </span>
                <h2 style={{ fontSize: 34, fontWeight: 700, color: 'var(--heading-color)', marginBottom: 18 }}>
                  Ready to Improve Your IT Operations?
                </h2>
                <p style={{ color: '#666', lineHeight: 1.8, fontSize: 16, marginBottom: 14 }}>
                  Schedule a consultation to discuss your environment and learn how structured IT management
                  can improve reliability, security, and operational efficiency.
                </p>
                <p style={{ color: '#999', fontSize: 14, lineHeight: 1.7 }}>
                  InfoManage has been serving organizations since 1995. Our team brings decades of operational
                  experience to every engagement.
                </p>
              </div>

              <div style={{ flex: '1 1 400px' }} data-aos="fade-up" data-aos-delay="300">
                <div style={{ marginBottom: 28 }}>
                  {[
                    'Proactive monitoring and maintenance — 24×7',
                    'Unlimited operational support within service plan scope',
                    'Governance-driven ITSM practices',
                    'Strategic technology planning and vCTO advisory',
                  ].map((text, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid #f0f2f5', color: '#444', fontSize: 15 }}>
                      <i className="bi bi-check-circle-fill" style={{ color: 'var(--accent)', fontSize: 18, flexShrink: 0 }} />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
                  <Link to="/contact#contact" className="btn-get-started" style={{ padding: '12px 32px' }}>Schedule Consultation</Link>
                  <Link to="/contact" style={{ display: 'inline-block', padding: '12px 32px', borderRadius: 50, fontWeight: 600, border: '2px solid var(--accent)', color: 'var(--accent)', transition: '0.3s', fontSize: 15 }}
                    onMouseOver={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#fff'; }}
                    onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}>
                    Contact InfoManage
                  </Link>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                  {[1,2,3,4,5].map(s => <i key={s} className="bi bi-star-fill" style={{ color: '#ffc107', fontSize: 14 }} />)}
                  <span style={{ color: '#999', fontSize: 13, marginLeft: 6 }}>Established 1995 · 30+ years of service</span>
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
