import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Header from "../components/Header";
import Footer from "../components/Footer";

const principles = [
  {
    num: "01",
    icon: "bi-shield-fill-check",
    title: "Prevention",
    desc: "Reducing exposure through system hardening, patch management, and secure configurations.",
    bullets: ["System hardening", "Patch management", "Secure configurations"],
  },
  {
    num: "02",
    icon: "bi-eye-fill",
    title: "Detection",
    desc: "Monitoring systems and activity to identify potential threats quickly.",
    bullets: [
      "Continuous monitoring",
      "Threat identification",
      "Security event detection",
    ],
  },
  {
    num: "03",
    icon: "bi-lightning-charge-fill",
    title: "Response",
    desc: "Addressing incidents quickly to minimize disruption and prevent further impact.",
    bullets: [
      "Rapid incident response",
      "Containment procedures",
      "System restoration",
    ],
  },
];

const services = [
  {
    icon: "bi-shield-lock-fill",
    title: "Endpoint Protection",
    desc: "Workstations and servers are protected using modern endpoint security technologies designed to detect and prevent malicious activity.",
    bullets: [
      "Endpoint detection and response",
      "Anti-malware protection",
      "Threat monitoring",
    ],
  },
  {
    icon: "bi-cloud-arrow-up-fill",
    title: "Backup & Disaster Recovery",
    desc: "Reliable backup systems protect critical business data and ensure systems can be restored after hardware failure, human error, or cyber incidents.",
    bullets: ["Automated backups", "Secure storage", "Recovery planning"],
  },
  {
    icon: "bi-activity",
    title: "Security Monitoring",
    desc: "Continuous monitoring of infrastructure helps identify unusual behavior and potential security threats before they escalate.",
    bullets: [
      "System alerts",
      "Infrastructure health checks",
      "Security event detection",
    ],
  },
  {
    icon: "bi-gear-wide-connected",
    title: "Security Hardening",
    desc: "Systems are configured and maintained according to security best practices to reduce vulnerability exposure.",
    bullets: [
      "Patch management",
      "System configuration controls",
      "Access management",
    ],
  },
];

const incidentSteps = [
  {
    num: "01",
    icon: "bi-search",
    title: "Identification & Triage",
    desc: "Issue is identified, categorized, and initial severity assessment performed.",
  },
  {
    num: "02",
    icon: "bi-shield-x",
    title: "Containment & Mitigation",
    desc: "Affected systems are isolated to prevent further spread or damage.",
  },
  {
    num: "03",
    icon: "bi-people-fill",
    title: "Vendor Coordination",
    desc: "Third-party vendors and specialists are engaged where necessary.",
  },
  {
    num: "04",
    icon: "bi-arrow-clockwise",
    title: "Restoration & Follow-up",
    desc: "Systems are restored and a post-incident review is conducted.",
  },
];

const forOrgsItems = [
  { icon: "bi-pc-display", text: "Rely on technology to run daily operations" },
  {
    icon: "bi-arrow-repeat",
    text: "Need proactive protection rather than reactive response",
  },
  {
    icon: "bi-puzzle-fill",
    text: "Want security integrated into their IT management",
  },
  {
    icon: "bi-cloud-check-fill",
    text: "Require reliable backup and recovery capabilities",
  },
  {
    icon: "bi-bar-chart-line-fill",
    text: "Value ongoing security monitoring and maintenance",
  },
];

const assessmentItems = [
  { icon: "bi-hdd-network", label: "Infrastructure configuration" },
  { icon: "bi-cloud-arrow-up", label: "Backup systems" },
  { icon: "bi-shield-check", label: "Endpoint protection" },
  { icon: "bi-activity", label: "Monitoring coverage" },
  { icon: "bi-clipboard-check", label: "Operational practices" },
];

export default function CybersecurityPage() {
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="cyber-hero">
          <div className="cyber-hero-overlay" />
          <div
            className="container mit-hero-content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="mit-hero-badge">
              <i className="bi bi-shield-lock" />
              <span>Cybersecurity Services</span>
            </div>
            <h1>Cybersecurity for Business Technology Environments</h1>
            <p className="mit-hero-sub">
              Protecting business systems through proactive monitoring, layered
              defenses, and structured security management.
            </p>
            <p className="mit-hero-body">
              Cybersecurity is no longer a separate function from IT operations.
              Modern threats require continuous monitoring, proactive defense,
              and disciplined operational practices.
            </p>
            <p className="mit-hero-body">
              InfoManage integrates cybersecurity directly into technology
              operations, helping organizations protect their infrastructure
              while maintaining reliable business systems.
            </p>
            {/* <div className="mit-hero-btns">
              <Link to="/contact" className="btn-get-started">Request a Security Assessment</Link>
              <Link to="/contact#contact" className="mit-hero-outline-btn">Schedule a Consultation</Link>
            </div> */}
          </div>
        </section>

        {/* ── Prevention / Detection / Response — three panels ─── */}
        <section className="cyber-principles">
          <div className="container">
            <div className="section-title mit-dark-title" data-aos="fade-up">
              <h2>Security as Part of IT Operations</h2>
              <p>
                Effective cybersecurity requires more than deploying security
                tools. It requires ongoing management, monitoring, and
                operational discipline.
              </p>
            </div>

            <div
              className="cyber-principles-intro"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p>
                InfoManage integrates security practices into the daily
                management of technology environments to help reduce risk and
                maintain system integrity.
              </p>
              <p>Our approach focuses on three key principles:</p>
            </div>

            <div className="cyber-principles-grid">
              {principles.map((p, i) => (
                <div
                  key={i}
                  className={`cyber-principle-panel cyber-principle-panel--${i}`}
                  data-aos="fade-up"
                  data-aos-delay={200 + i * 100}
                >
                  <div className="cyber-principle-num">{p.num}</div>
                  <div className="cyber-principle-icon">
                    <i className={`bi ${p.icon}`} />
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>

            <p
              className="cyber-principles-footer"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              This operational approach ensures that cybersecurity remains an
              active part of managing business technology.
            </p>
          </div>
        </section>

        {/* ── Core Cybersecurity Services — carousel ────────────── */}
        <section
          id="core-services"
          className="mit-section"
          style={{ background: "#fff" }}
        >
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Core Cybersecurity Services</h2>
              <p>
                A range of security services designed to protect systems, data,
                and users
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000">
              <Swiper
                modules={[Autoplay]}
                loop
                speed={600}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 20 },
                  992: { slidesPerView: 3, spaceBetween: 20 },
                }}
              >
                {services.map((s, i) => (
                  <SwiperSlide key={i}>
                    <div className="service-card">
                      <div className="icon-box">
                        <i className={`bi ${s.icon}`} />
                      </div>
                      <div>
                        <h4>{s.title}</h4>
                        <p style={{ marginBottom: 12 }}>{s.desc}</p>
                        <ul
                          style={{ listStyle: "none", padding: 0, margin: 0 }}
                        >
                          {s.bullets.map((b, j) => (
                            <li
                              key={j}
                              style={{
                                fontSize: 12,
                                color: "#666",
                                padding: "3px 0",
                                display: "flex",
                                gap: 6,
                                alignItems: "flex-start",
                              }}
                            >
                              <i
                                className="bi bi-check2"
                                style={{
                                  color: "var(--accent)",
                                  flexShrink: 0,
                                  marginTop: 2,
                                }}
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                        <div className="service-number">0{i + 1}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="swiper-nav" style={{ marginTop: 24 }}>
                <button
                  className="swiper-nav-btn"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <i className="bi bi-chevron-left" />
                </button>
                <button
                  className="swiper-nav-btn"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <i className="bi bi-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Integration — dark section, image left ────────────── */}
        <section className="mit-dark-section">
          <div className="container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 56,
                alignItems: "center",
              }}
            >
              <div
                style={{ flex: "1 1 400px" }}
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <img
                  src="/images/cybersecurity/security-assessment.jpg"
                  alt="Network security infrastructure"
                  style={{
                    width: "100%",
                    borderRadius: 10,
                    display: "block",
                    boxShadow: "0 12px 48px rgba(0,0,0,0.4)",
                  }}
                />
              </div>

              <div
                style={{ flex: "1 1 400px" }}
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <span className="mit-split-label">Operational Integration</span>
                <h2
                  style={{
                    fontSize: 30,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 18,
                  }}
                >
                  Integrating Security With IT Operations
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.72)",
                    lineHeight: 1.8,
                    marginBottom: 16,
                    fontSize: 15,
                  }}
                >
                  Security is most effective when integrated with the broader
                  management of IT infrastructure. InfoManage incorporates
                  security into daily operational processes, ensuring that
                  systems remain protected while continuing to support business
                  operations.
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.72)",
                    lineHeight: 1.8,
                    marginBottom: 0,
                    fontSize: 15,
                  }}
                >
                  This integration allows organizations to maintain strong
                  security practices without adding unnecessary complexity to
                  their technology environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Incident Response — horizontal timeline ───────────── */}
        <section className="mit-section" style={{ background: "#fff" }}>
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Responding to Security Incidents</h2>
              <p>
                When a security issue occurs, rapid response is critical.
                InfoManage follows structured procedures designed to quickly
                identify, contain, and resolve security issues.
              </p>
            </div>

            <div className="cyber-timeline">
              {incidentSteps.map((step, i) => (
                <div
                  key={i}
                  className="cyber-timeline-step"
                  data-aos="fade-up"
                  data-aos-delay={100 + i * 80}
                >
                  <div className="cyber-timeline-ghost-num">{step.num}</div>
                  <div className="cyber-timeline-inner">
                    <div className="cyber-timeline-num">Step {step.num}</div>
                    <div className="cyber-timeline-circle">
                      <i className={`bi ${step.icon}`} />
                    </div>
                    <h5>{step.title}</h5>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p
              style={{
                textAlign: "center",
                color: "#6b7a8d",
                fontSize: 15,
                marginTop: 48,
              }}
              data-aos="fade-up"
            >
              This structured approach helps minimize disruption and ensures
              incidents are handled efficiently.
            </p>
          </div>
        </section>

        {/* ── Who This Is For — icon card grid ─────────────────── */}
        <section
          className="mit-section"
          style={{ background: "var(--light-bg)" }}
        >
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Security for Organizations That Depend on Technology</h2>
              <p>
                Cybersecurity services from InfoManage are designed for
                organizations that:
              </p>
            </div>

            <div className="cyber-for-orgs-grid">
              {forOrgsItems.map((item, i) => (
                <div
                  key={i}
                  className="cyber-for-org-card"
                  data-aos="fade-up"
                  data-aos-delay={80 + i * 70}
                >
                  <div className="cyber-for-org-icon">
                    <i className={`bi ${item.icon}`} />
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Security Assessment — accent highlight card ───────── */}
        <section className="mit-section" style={{ background: "#fff" }}>
          <div className="container">
            <div className="cyber-assessment-card" data-aos="fade-up">
              <div className="cyber-assessment-left">
                <span
                  className="mit-split-label"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  First Step
                </span>
                <h2>Security Assessment</h2>
                <p>
                  Understanding your current risk exposure is the first step
                  toward improving cybersecurity. InfoManage can review your
                  environment and identify areas where improvements may
                  strengthen protection and operational reliability.
                </p>
              </div>
              <div className="cyber-assessment-right">
                <p
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 14,
                    marginBottom: 20,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  A security assessment typically reviews:
                </p>
                {assessmentItems.map((item, i) => (
                  <div
                    key={i}
                    className="cyber-assessment-item"
                    data-aos="fade-up"
                    data-aos-delay={100 + i * 60}
                  >
                    <div className="cyber-assessment-icon">
                      <i className={`bi ${item.icon}`} />
                    </div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA — white section ─────────────────────────── */}
        <section
          className="mit-section"
          style={{ background: "#fff", borderTop: "1px solid #eef0f4" }}
        >
          <div className="container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 60,
                alignItems: "center",
              }}
            >
              <div
                style={{ flex: "1 1 400px" }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    color: "var(--accent)",
                    marginBottom: 16,
                  }}
                >
                  <i className="bi bi-shield-lock-fill" />
                  Protect Your Business Systems
                </span>
                <h2
                  style={{
                    fontSize: 34,
                    fontWeight: 700,
                    color: "var(--heading-color)",
                    marginBottom: 18,
                  }}
                >
                  Protect Your Business Systems
                </h2>
                <p
                  style={{
                    color: "#666",
                    lineHeight: 1.8,
                    fontSize: 16,
                    marginBottom: 14,
                  }}
                >
                  Schedule a consultation to discuss your environment and learn
                  how InfoManage can help strengthen the security of your
                  technology infrastructure.
                </p>
                <p style={{ color: "#999", fontSize: 14, lineHeight: 1.7 }}>
                  InfoManage integrates cybersecurity directly into IT
                  operations — protecting your systems without disrupting your
                  business.
                </p>
              </div>

              <div
                style={{ flex: "1 1 400px" }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div style={{ marginBottom: 28 }}>
                  {[
                    "Endpoint protection and continuous threat monitoring",
                    "Automated backup and disaster recovery planning",
                    "Security hardening and configuration management",
                    "Structured incident response procedures",
                  ].map((text, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "10px 0",
                        borderBottom: "1px solid #f0f2f5",
                        color: "#444",
                        fontSize: 15,
                      }}
                    >
                      <i
                        className="bi bi-check-circle-fill"
                        style={{
                          color: "var(--accent)",
                          fontSize: 18,
                          flexShrink: 0,
                        }}
                      />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                    marginBottom: 24,
                  }}
                >
                  <Link
                    to="/contact"
                    className="btn-get-started"
                    style={{ padding: "12px 32px" }}
                  >
                    Request a Security Assessment
                  </Link>
                  {/* <Link
                    to="/contact#contact"
                    style={{
                      display: "inline-block",
                      padding: "12px 32px",
                      borderRadius: 50,
                      fontWeight: 600,
                      border: "2px solid var(--accent)",
                      color: "var(--accent)",
                      transition: "0.3s",
                      fontSize: 15,
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "var(--accent)";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "var(--accent)";
                    }}
                  >
                    Schedule a Consultation
                  </Link> */}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    flexWrap: "wrap",
                  }}
                >
                  {[1, 2, 3, 4, 5].map((s) => (
                    <i
                      key={s}
                      className="bi bi-star-fill"
                      style={{ color: "#ffc107", fontSize: 14 }}
                    />
                  ))}
                  <span style={{ color: "#999", fontSize: 13, marginLeft: 6 }}>
                    Established 1995 · 30+ years of service
                  </span>
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
