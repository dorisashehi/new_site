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

        {/* ── What Managed IT Means — dark section ─────────────── */}
        <section className="mit-dark-section">
          <div className="container">
            <div className="section-title mit-dark-title" data-aos="fade-up">
              <h2>What Managed IT Means at InfoManage</h2>
              <p>Operational responsibility for the stability, performance, and security of your technology environment</p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'center' }}>
              <div style={{ flex: '1 1 400px' }} data-aos="fade-up" data-aos-delay="150">
                <span className="mit-split-label">Comprehensive Coverage</span>
                <h2 style={{ fontSize: 30, fontWeight: 700, color: '#fff', marginBottom: 18 }}>Beyond Traditional Support</h2>
                <p style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 14, fontSize: 15 }}>
                  Managed IT services at InfoManage go beyond traditional support. We take operational
                  responsibility for maintaining the stability, performance, and security of your technology environment.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24, fontSize: 15 }}>
                  Our team manages the core infrastructure that businesses depend on every day, ensuring
                  systems remain reliable and users remain productive.
                </p>
                <p className="mit-split-list-label">Operational coverage includes:</p>
                <ul className="mit-split-list">
                  {coverageItems.map((item, i) => (
                    <li key={i}><i className="bi bi-check2" />{item}</li>
                  ))}
                </ul>
              </div>

              <div style={{ flex: '1 1 400px' }} data-aos="fade-up" data-aos-delay="250">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80"
                  alt="IT operations team at work"
                  style={{ width: '100%', borderRadius: 10, display: 'block', boxShadow: '0 12px 48px rgba(0,0,0,0.4)' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Fix / Maintain / Enhance — zigzag rows ───────────── */}
        <section className="mit-zigzag-section">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>How InfoManage Manages IT</h2>
              <p>A structured operational model designed to keep systems running smoothly while enabling continuous improvement</p>
            </div>

            {frameworkCards.map((card, i) => (
              <div
                key={i}
                className={`mit-step-row${i % 2 === 1 ? ' mit-step-row--reverse' : ''}${card.accent ? ' mit-step-row--featured' : ''}`}
                data-aos="fade-up"
                data-aos-delay={100 + i * 100}
              >
                <div className="mit-step-visual">
                  <div className="mit-step-circle">
                    <i className={`bi ${card.icon}`} />
                  </div>
                  <div className="mit-step-bignum">{card.num}</div>
                </div>
                <div className="mit-step-content">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <ul>
                    {card.bullets.map((b, j) => (
                      <li key={j}><i className="bi bi-check2" />{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Ops vs Project Work — dark overlay split ─────────── */}
        <section className="mit-dark-compare">
          <div className="mit-dark-compare-overlay" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-title" data-aos="fade-up" style={{ paddingBottom: 48 }}>
              <h2 style={{ color: '#fff' }}>Operational Support vs Project Work</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>
                Clear separation ensures predictable service delivery while allowing organizations to plan technology improvements effectively
              </p>
            </div>

            <div className="mit-dc-grid">
              <div data-aos="fade-up" data-aos-delay="150">
                <div className="mit-dc-header mit-dc-header--ops">
                  <i className="bi bi-gear-fill" />
                  <div>
                    <h4>Operational Support</h4>
                    <span>Covered within the monthly service plan</span>
                  </div>
                </div>
                <p className="mit-dc-desc">Day-to-day IT activities are included in your service plan. No additional billing for standard operational tasks.</p>
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
                    <span>Planned and delivered separately</span>
                  </div>
                </div>
                <p className="mit-dc-desc">Major infrastructure changes that exceed defined thresholds are structured as projects to ensure proper design and implementation.</p>
                <ul className="mit-dc-list">
                  {projectItems.map((item, i) => (
                    <li key={i}><i className="bi bi-check2" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Service Plan Overview ─────────────────────────────── */}
        <section className="mit-section" style={{ background: '#f0f4f9' }}>
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

            <div className="mit-pricing-models" data-aos="fade-up" data-aos-delay="400" style={{ marginTop: 40 }}>
              <p style={{ textAlign: 'center', color: '#666', fontSize: 15, marginBottom: 20 }}>
                Flexible pricing models to fit your environment
              </p>
              <div className="mit-pricing-model-tags">
                {['Per-user pricing', 'Per-device pricing', 'Hybrid models for mixed environments'].map((model, i) => (
                  <span key={i} className="mit-model-tag mit-model-tag--light">
                    <i className="bi bi-check-circle-fill" />
                    {model}
                  </span>
                ))}
              </div>
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

            <div style={{ textAlign: 'center', marginTop: 44 }} data-aos="fade-up" data-aos-delay="400">
              <Link to="/#contact" className="btn-features">Request an Assessment</Link>
            </div>
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

            <div style={{ textAlign: 'center', marginTop: 48 }} data-aos="fade-up" data-aos-delay="500">
              <Link to="/#contact" className="btn-consultation">
                <span>Schedule a Consultation</span>
                <i className="bi bi-arrow-right" />
              </Link>
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
                  <Link to="/#contact" className="btn-get-started" style={{ padding: '12px 32px' }}>Schedule Consultation</Link>
                  <Link to="/#contact" style={{ display: 'inline-block', padding: '12px 32px', borderRadius: 50, fontWeight: 600, border: '2px solid var(--accent)', color: 'var(--accent)', transition: '0.3s', fontSize: 15 }}
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
