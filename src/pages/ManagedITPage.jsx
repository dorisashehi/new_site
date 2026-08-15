import { useEffect } from "react";
import { Link } from "react-router-dom";
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

const maintenanceCycle = [
  {
    key: "tl",
    label: "Monitoring",
    corner: "topLeft",
    bullets: [
      "Desktops, servers, network devices — switches, firewalls, access points",
      "Firmware updates",
      "Tickets automatically created",
      "Log, performance, and disk space checks",
      "Reboots and missed updates",
      "Becomes part of the book of work",
    ],
  },
  {
    key: "tr",
    label: "Review of All Tickets",
    corner: "topRight",
    bullets: [
      "Automated, user, and insourced initiated",
      "Book of work review",
      "Review and prioritize",
    ],
  },
  {
    key: "br",
    label: "Patch Management",
    corner: "bottomRight",
    bullets: [
      "Desktops, servers, switches, firewalls, access points",
      "Review process",
      "Email reminders",
    ],
  },
  {
    key: "bl",
    label: "Endpoint Protection",
    corner: "bottomLeft",
    bullets: ["Review process", "Automatic updates"],
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

        {/* ── What We Handle — light section, 3-column ──────────── */}
        <section id="overview" style={{ padding: "56px 0", background: "#fff" }}>
          <div className="container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 48,
                alignItems: "flex-start",
              }}
            >
              {/* Text */}
              <div
                style={{ flex: "1 1 280px" }}
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
                  What We Handle
                </span>
                <h2 style={{ fontSize: 28, fontWeight: 700, color: "var(--heading-color)", lineHeight: 1.3, marginBottom: 14 }}>
                  Your Technology, Fully Covered
                </h2>
                <div style={{ width: 46, height: 3, background: "var(--accent)", marginBottom: 18 }} />
                <p style={{ color: "#555", lineHeight: 1.8, fontSize: 14.5, marginBottom: 14 }}>
                  Desktops to servers: the systems your business runs on, managed
                  end to end.
                </p>
                <p style={{ color: "#555", lineHeight: 1.8, fontSize: 14.5, marginBottom: 20 }}>
                  Our team manages the core infrastructure that businesses
                  depend on every day, ensuring that systems remain reliable,
                  secure, and productive.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    background: "var(--light-bg)",
                    borderRadius: 10,
                    padding: "16px 18px",
                  }}
                >
                  <i className="bi bi-shield-check" style={{ color: "var(--accent)", fontSize: 18, marginTop: 2, flexShrink: 0 }} />
                  <p style={{ color: "#555", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                    By continuously managing these responsibilities, InfoManage
                    helps organizations maintain stable and secure technology
                    environments.
                  </p>
                </div>
              </div>

              {/* Checklist */}
              <div
                style={{ flex: "1 1 320px" }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    columnGap: 24,
                  }}
                >
                  {coverageItems.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "9px 0",
                        borderBottom: "1px solid #eef0f4",
                        color: "#444",
                        fontSize: 14,
                      }}
                    >
                      <i className="bi bi-check-circle-fill" style={{ color: "var(--accent)", fontSize: 15, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
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
                  <div className="hww-icon-wrap" style={{ borderRadius: "50%", background: "var(--accent)" }}>
                    <i className={`bi ${card.icon}`} style={{ color: "#fff" }} />
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

        {/* ── The Maintain Cycle — circular diagram ─────────────── */}
        <section className="mit-section" style={{ padding: "48px 0", background: "#fff" }}>
          <div className="container">
            <div
              style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 40px" }}
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
                Behind the Scenes
              </span>
              <h2 style={{ fontSize: 32, fontWeight: 700, color: "var(--heading-color)", marginBottom: 10 }}>
                How We Keep Systems Running
              </h2>
              <p style={{ color: "#666", fontSize: 15 }}>
                A closer look at the Maintain cycle: the proactive work that happens
                before you ever notice a problem.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 260px 1fr",
                gridTemplateRows: "auto auto",
                gap: 20,
                alignItems: "center",
                maxWidth: 1000,
                margin: "0 auto",
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {/* Callout boxes */}
              {maintenanceCycle.map((item) => (
                <div
                  key={item.key}
                  style={{
                    gridColumn:
                      item.corner === "topLeft" || item.corner === "bottomLeft" ? 1 : 3,
                    gridRow: item.corner === "topLeft" || item.corner === "topRight" ? 1 : 2,
                    border: "1px solid rgba(26, 108, 181, 0.3)",
                    borderRadius: 12,
                    padding: "16px 18px",
                  }}
                >
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {item.bullets.map((b, j) => (
                      <li
                        key={j}
                        style={{
                          fontSize: 13,
                          color: "#555",
                          lineHeight: 1.6,
                          marginBottom: j < item.bullets.length - 1 ? 6 : 0,
                          paddingLeft: 14,
                          position: "relative",
                        }}
                      >
                        <span style={{ position: "absolute", left: 0, color: "var(--accent)" }}>•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Circle */}
              <div
                style={{
                  gridColumn: 2,
                  gridRow: "1 / 3",
                  position: "relative",
                  width: 260,
                  height: 260,
                  margin: "0 auto",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, width: "50%", height: "50%", background: "var(--accent)", borderTopLeftRadius: "100%", border: "2px solid #fff" }} />
                <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "50%", background: "var(--accent)", borderTopRightRadius: "100%", border: "2px solid #fff" }} />
                <div style={{ position: "absolute", bottom: 0, right: 0, width: "50%", height: "50%", background: "var(--accent)", borderBottomRightRadius: "100%", border: "2px solid #fff" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, width: "50%", height: "50%", background: "var(--accent)", borderBottomLeftRadius: "100%", border: "2px solid #fff" }} />

                {maintenanceCycle.map((item) => (
                  <span
                    key={item.key}
                    style={{
                      position: "absolute",
                      top: item.corner === "topLeft" || item.corner === "topRight" ? "30%" : "70%",
                      left: item.corner === "topLeft" || item.corner === "bottomLeft" ? "30%" : "70%",
                      transform: "translate(-50%, -50%)",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 14,
                      textAlign: "center",
                      width: 100,
                      lineHeight: 1.3,
                    }}
                  >
                    {item.label}
                  </span>
                ))}

                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  }}
                >
                  <i className="bi bi-arrow-repeat" style={{ color: "var(--accent)", fontSize: 18 }} />
                </div>
              </div>
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
                  <div className="icon-wrapper" style={{ background: "transparent", border: "2px solid var(--accent)", borderRadius: "50%" }}>
                    <i className={`bi ${item.icon}`} />
                  </div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who This Is For — background image + overlay ──────── */}
        <section style={{ position: "relative", padding: "56px 0", overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(/images/industries/teams-across-industries.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(240, 244, 249, 0.68)",
            }}
          />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
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

            <div
              className="mit-criteria-list"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 16,
                maxWidth: 900,
                margin: "0 auto",
              }}
            >
              {idealForItems.map((item, i) => (
                <div
                  key={i}
                  className="mit-criteria-item"
                  style={{ padding: "16px 20px" }}
                  data-aos="fade-up"
                  data-aos-delay={80 + i * 70}
                >
                  <div className="mit-criteria-icon" style={{ width: 42, height: 42 }}>
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
                      style={{ fontSize: 18 }}
                    />
                  </div>
                  <p style={{ fontSize: 14.5 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA — blue banner ────────────────────────────── */}
        <section style={{ padding: "48px 0" }}>
          <div className="container">
            <div
              style={{
                background: "var(--accent)",
                borderRadius: 16,
                padding: "36px 40px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 24,
                overflow: "hidden",
              }}
              data-aos="fade-up"
            >
              <div style={{ flex: "1 1 320px" }}>
                <h2 style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
                  Ready to stop reacting and start preventing?
                </h2>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, marginBottom: 20 }}>
                  Let&apos;s build a smarter, more secure, and more reliable IT
                  environment, together.
                </p>
                <Link
                  to="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#fff",
                    color: "var(--accent)",
                    padding: "12px 28px",
                    borderRadius: 50,
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  Schedule a Consultation
                  <i className="bi bi-arrow-right" />
                </Link>
              </div>
              <img
                src="/images/about/support-team.jpg"
                alt="InfoManage team ready to help"
                style={{
                  width: 220,
                  height: 160,
                  objectFit: "cover",
                  borderRadius: 12,
                  display: "block",
                  flexShrink: 0,
                }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
