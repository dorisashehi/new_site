import { useEffect } from "react";
import AOS from "aos";
import Header from "../components/Header";
import Footer from "../components/Footer";

const coverageItems = [
  "24/7 system monitoring and alert response",
  "Automated patch management and routine maintenance",
  "Endpoint and workstation protection",
  "Remote, on-site, or hybrid helpdesk support",
  "Backup monitoring and disaster recovery planning",
  "Monthly incident reporting",
  "Vendor coordination and escalation",
  "Server, network, and infrastructure administration",
  "VoIP and cloud services coordination",
];

const resultsItems = [
  {
    icon: "bi-graph-down",
    title: "Reduced Downtime",
    desc: "Proactive monitoring and maintenance catch issues before they interrupt your team.",
  },
  {
    icon: "bi-cash-coin",
    title: "Predictable Costs",
    desc: "Flat, near-fixed monthly pricing means no surprise invoices. Budget for IT with confidence.",
  },
  {
    icon: "bi-shield-lock",
    title: "Improved Security",
    desc: "Ongoing patch management and endpoint protection keep your exposure to threats low.",
  },
  {
    icon: "bi-people",
    title: "A Dedicated Team",
    desc: "A Relationship Manager plus a mix of senior, mid-level, and junior technicians, not a rotating ticket queue.",
  },
  {
    icon: "bi-signpost-2",
    title: "Strategic Guidance",
    desc: "Ongoing technology roadmap and lifecycle planning help you make investment decisions ahead of time, not after something breaks.",
  },
  {
    icon: "bi-file-earmark-bar-graph",
    title: "Documented Visibility",
    desc: "Monthly incident reports show you what was fixed, what's trending, and what needs attention.",
  },
];

const frameworkCards = [
  {
    num: "01",
    icon: "bi-tools",
    title: "Fix",
    desc: "Rapid issue resolution keeps users productive and minimizes disruptions.",
    bullets: [
      "Help desk troubleshooting",
      "Application support",
      "Incident response and escalation",
    ],
    accent: true,
  },
  {
    num: "02",
    icon: "bi-shield-check",
    title: "Maintain",
    desc: "Proactive operations reduce risk and prevent problems before they occur.",
    bullets: [
      "24×7 system monitoring",
      "Patch management",
      "Security hygiene",
      "Infrastructure maintenance",
    ],
    accent: false,
  },
  {
    num: "03",
    icon: "bi-graph-up-arrow",
    title: "Enhance",
    desc: "Strategic guidance helps organizations improve and evolve their technology environments.",
    bullets: [
      "Technology roadmaps",
      "Infrastructure upgrades",
      "Lifecycle planning",
      "vCTO advisory",
    ],
    accent: false,
  },
];

const idealForItems = [
  "Depend heavily on technology to operate",
  "Prefer proactive infrastructure management rather than reactive support",
  "Want predictable IT management costs",
  "Require reliable monitoring and system maintenance",
  "Value long-term technology planning and guidance",
  "Don't have a full internal IT department and want one they can rely on",
];

export default function ManagedITPage() {
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
        <section className="mit-hero">
          <div className="mit-hero-overlay" />
          <div
            className="container mit-hero-content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="mit-hero-badge">
              <i className="bi bi-cpu" />
              <span>Managed IT Services</span>
            </div>
            <h1>Managed IT Services</h1>
            <p className="mit-hero-sub">
              Stop reacting to problems. Start preventing them.
            </p>
            <p className="mit-hero-body">
              InfoManage takes operational responsibility for the technology
              your business depends on: desktops, laptops, servers,
              printers, firewalls, switches, and networks, so your team can
              focus on growth instead of troubleshooting.
            </p>
            <p className="mit-hero-note">
              Rather than reacting to problems as they occur, we proactively
              manage the systems that keep your business running.
            </p>
            {/* <div className="mit-hero-btns">
              <Link to="/contact#contact" className="btn-get-started">Schedule a Consultation</Link>
              <Link to="/contact" className="mit-hero-outline-btn">Request an IT Assessment</Link>
            </div> */}
          </div>
        </section>

        {/* ── What Managed IT Means — dark section ─────────────── */}
        <section id="overview" className="mit-dark-section" style={{ padding: "56px 0" }}>
          <div className="container">
            <div
              style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 32px" }}
              data-aos="fade-up"
            >
              <span className="mit-split-label" style={{ textAlign: "center" }}>
                What We Handle
              </span>
              <h2 style={{ fontSize: 32, fontWeight: 700, color: "#fff", marginBottom: 10 }}>
                Your Technology, Fully Covered
              </h2>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15 }}>
                Desktops to servers: the systems your business runs on, managed
                end to end.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 44,
                alignItems: "center",
              }}
            >
              <div
                style={{ flex: "1 1 400px" }}
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <p
                  style={{
                    color: "rgba(255,255,255,0.72)",
                    lineHeight: 1.8,
                    marginBottom: 10,
                    fontSize: 15,
                  }}
                >
                  Managed IT services at InfoManage go beyond traditional
                  support. We take operational responsibility for maintaining
                  the stability, performance, and security of your technology
                  environment.
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.72)",
                    lineHeight: 1.8,
                    marginBottom: 16,
                    fontSize: 15,
                  }}
                >
                  Our team manages the core infrastructure that businesses
                  depend on every day, ensuring that systems remain reliable and
                  users remain productive.
                </p>
                <p className="mit-split-list-label">
                  Operational coverage includes:
                </p>
                <ul className="mit-split-list">
                  {coverageItems.map((item, i) => (
                    <li key={i}>
                      <i className="bi bi-check2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.8,
                    marginTop: 20,
                    fontSize: 14,
                    fontStyle: "italic",
                  }}
                >
                  By continuously managing these responsibilities, InfoManage
                  helps organizations maintain stable and secure technology
                  environments.
                </p>
              </div>

              <div
                style={{ flex: "1 1 400px" }}
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <img
                  src="/images/managed-it/operations.jpg"
                  alt="IT support and operations team"
                  style={{
                    width: "100%",
                    borderRadius: 10,
                    display: "block",
                    boxShadow: "0 12px 48px rgba(0,0,0,0.4)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Fix / Maintain / Enhance — HowWeWork style cards ─── */}
        <section className="howwework-section" style={{ padding: "48px 0" }}>
          <div className="container">
            <div
              style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 32px" }}
              data-aos="fade-up"
            >
              <span
                style={{
                  display: "block",
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  color: "var(--accent)",
                  marginBottom: 10,
                }}
              >
                How We Work
              </span>
              <h2 style={{ fontSize: 32, fontWeight: 700, color: "var(--heading-color)", marginBottom: 10 }}>
                Fix It. Maintain It. Make It Better.
              </h2>
              <p style={{ color: "#666", fontSize: 15 }}>
                A simple operating rhythm that keeps systems running and gets
                better over time.
              </p>
            </div>

            <div className="hww-grid">
              {frameworkCards.map((card, i) => (
                <div
                  key={i}
                  className="hww-card"
                  data-aos="fade-up"
                  data-aos-delay={150 + i * 100}
                >
                  <div className="hww-num">{card.num}</div>
                  <div className="hww-icon-wrap">
                    <i className={`bi ${card.icon}`} />
                  </div>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                  <ul className="hww-points">
                    {card.bullets.map((b, j) => (
                      <li key={j}>
                        <i className="bi bi-check2-circle" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Results You Can Expect — outcome grid ─────────────── */}
        <section className="mit-section" style={{ padding: "48px 0", background: "var(--light-bg)" }}>
          <div className="container">
            <div
              style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 32px" }}
              data-aos="fade-up"
            >
              <span
                style={{
                  display: "block",
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  color: "var(--accent)",
                  marginBottom: 10,
                }}
              >
                What You Get
              </span>
              <h2 style={{ fontSize: 32, fontWeight: 700, color: "var(--heading-color)", marginBottom: 10 }}>
                The Difference You&apos;ll Actually Notice
              </h2>
              <p style={{ color: "#666", fontSize: 15 }}>
                Not a list of tasks. What those tasks add up to for your
                business.
              </p>
            </div>

            <div
              className="mit-gov-grid"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {resultsItems.map((item, i) => (
                <div
                  key={i}
                  className="feature-card"
                  data-aos="fade-up"
                  data-aos-delay={150 + i * 50}
                >
                  <div className="icon-wrapper">
                    <i className={`bi ${item.icon}`} />
                  </div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who This Is For — numbered full-width criteria ──────── */}
        <section
          className="mit-section"
          style={{ padding: "48px 0", background: "var(--light-bg)" }}
        >
          <div className="container">
            <div
              style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 32px" }}
              data-aos="fade-up"
            >
              <span
                style={{
                  display: "block",
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  color: "var(--accent)",
                  marginBottom: 10,
                }}
              >
                Is This You?
              </span>
              <h2 style={{ fontSize: 32, fontWeight: 700, color: "var(--heading-color)", marginBottom: 10 }}>
                Built for Businesses Like Yours
              </h2>
              <p style={{ color: "#666", fontSize: 15 }}>
                Managed IT from InfoManage fits organizations that:
              </p>
            </div>

            <div className="mit-criteria-list">
              {idealForItems.map((item, i) => (
                <div
                  key={i}
                  className="mit-criteria-item"
                  data-aos="fade-up"
                  data-aos-delay={80 + i * 70}
                >
                  <div className="mit-criteria-num">0{i + 1}</div>
                  <div className="mit-criteria-icon">
                    <i
                      className={
                        [
                          "bi-pc-display",
                          "bi-arrow-repeat",
                          "bi-graph-down-arrow",
                          "bi-activity",
                          "bi-compass",
                          "bi-building",
                        ][i]
                      }
                    />
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
