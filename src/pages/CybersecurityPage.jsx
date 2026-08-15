import { useEffect } from "react";
import AOS from "aos";
import Header from "../components/Header";
import Footer from "../components/Footer";

const exposureItems = [
  {
    icon: "bi-envelope-exclamation",
    risk: "Phishing & human error",
    detail: "Most breaches trace back to a person clicking, not a sophisticated attack.",
  },
  {
    icon: "bi-key",
    risk: "Weak access controls",
    detail: "Admin and finance accounts without proper restrictions.",
  },
  {
    icon: "bi-bug",
    risk: "Unpatched systems",
    detail: "Known vulnerabilities sitting unaddressed on devices and network hardware.",
  },
  {
    icon: "bi-cloud-slash",
    risk: "Backups that have never been tested",
    detail: "Assumed to work, but never actually restored under real conditions.",
  },
  {
    icon: "bi-laptop",
    risk: "Remote work exposure",
    detail: "Distributed work has widened the attack surface for many businesses.",
  },
];

const riskLookItems = [
  {
    icon: "bi-key-fill",
    title: "Exposed Credentials",
    desc: "Compromised passwords and business email addresses can surface in data breaches and give attackers a head start—often before your team knows they're exposed.",
  },
  {
    icon: "bi-shield-exclamation",
    title: "Security Gaps",
    desc: "Missing MFA, outdated devices, excessive admin access, and incomplete offboarding create openings attackers can exploit.",
  },
  {
    icon: "bi-arrow-counterclockwise",
    title: "Recovery Uncertainty",
    desc: "Having backups isn't enough. Without verified, tested recovery, you may only discover what wasn't protected when you need to restore it most.",
  },
];

const layersItems = [
  {
    num: "01",
    icon: "bi-envelope-check",
    title: "Email & Phishing Protection",
    desc: "Block malicious emails, spoofing attempts, and social engineering threats while helping employees recognize attacks before they become a problem.",
  },
  {
    num: "02",
    icon: "bi-key-fill",
    title: "Identity & Access Security",
    desc: "Protect every account with MFA, controlled privileges, and secure processes for onboarding and offboarding users.",
  },
  {
    num: "03",
    icon: "bi-laptop",
    title: "Endpoint & Vulnerability Protection",
    desc: "Secure every device with endpoint detection, hardening, patch management, and proactive vulnerability remediation.",
  },
  {
    num: "04",
    icon: "bi-cloud-arrow-up-fill",
    title: "Backup & Disaster Recovery",
    desc: "Maintain protected, immutable backups and regularly test recovery so your business can restore operations when it matters most.",
  },
  {
    num: "05",
    icon: "bi-activity",
    title: "24/7 Security Monitoring",
    desc: "Continuously detect, investigate, and respond to threats with AI-assisted monitoring and security experts working around the clock.",
  },
];

const checklistItems = [
  "A written security policy exists, and someone is actually responsible for it",
  "Staff can recognize a phishing attempt before they click it",
  "Multi-factor authentication is required on email and admin accounts",
  "Backups run automatically, and a restore has actually been tested",
  "Every device has current antivirus and endpoint protection",
  "Guest and personal-device access is kept separate from company systems",
  "Departing employees lose access immediately, not eventually",
  "Security gets reviewed on a schedule, not just after something goes wrong",
];

export default function CybersecurityPage() {
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
              <span>Cybersecurity</span>
            </div>
            <h1>Attackers Don&apos;t Need a Big Mistake. A Small One Will Do.</h1>
            <p className="mit-hero-sub">
              A missed patch, a reused password, a backup nobody&apos;s
              actually tested.
            </p>
            <p className="mit-hero-body">
              Individually they look minor. Together, they&apos;re how most
              incidents happen, and InfoManage finds them before they turn
              into lost data or downtime.
            </p>
            <p className="mit-hero-note">
              When the fundamentals are shaky, the real exposure is usually
              bigger than what&apos;s visible from the outside.
            </p>
            {/* <div className="mit-hero-btns">
              <Link to="/contact" className="btn-get-started">Request a Security Assessment</Link>
              <Link to="/contact#contact" className="mit-hero-outline-btn">Discuss Your Risk</Link>
            </div> */}
          </div>
        </section>

        {/* ── Common Points of Exposure — About-style layout ────── */}
        <section style={{ padding: "40px 0", background: "#fff" }}>
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 56, alignItems: "center" }}>
              {/* Left: image collage */}
              <div style={{ flex: "1 1 460px" }} data-aos="fade-right">
                <div style={{ position: "relative", maxWidth: 620, height: 480, margin: "0 auto" }}>
                  {/* dashed frame */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "92%",
                      height: "92%",
                      border: "2px dashed var(--accent)",
                      borderRadius: 12,
                    }}
                  />
                  {/* main photo */}
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      width: "92%",
                      height: "84%",
                      borderRadius: 12,
                      overflow: "hidden",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
                    }}
                  >
                    <img
                      src="/images/cybersecurity/threat-monitoring.jpg"
                      alt="Security analyst reviewing system logs for threats"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                  {/* badge */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      minWidth: 100,
                      background: "var(--accent)",
                      color: "#fff",
                      padding: "16px 18px",
                      borderRadius: 12,
                      textAlign: "center",
                      boxShadow: "0 8px 24px rgba(26, 108, 181, 0.4)",
                    }}
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div style={{ fontSize: 26, fontWeight: 900, lineHeight: 1 }}>95%</div>
                    <div style={{ fontSize: 11, marginTop: 4, lineHeight: 1.3 }}>
                      Of Breaches Start<br />With Human Error
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: content */}
              <div style={{ flex: "1 1 380px" }} data-aos="fade-left" data-aos-delay="100">
                <span
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    color: "var(--accent)",
                    marginBottom: 12,
                  }}
                >
                  The Real Risk
                </span>
                <h2 style={{ fontSize: 30, fontWeight: 700, color: "var(--heading-color)", lineHeight: 1.3, marginBottom: 14 }}>
                  Common Points of Exposure
                </h2>
                <p style={{ color: "#555", lineHeight: 1.8, marginBottom: 18, fontSize: 15 }}>
                  Where the actual risk tends to sit inside a growing
                  business. A single weak point is often enough, and most
                  organizations are carrying more than one.
                </p>

                <div
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 20, rowGap: 4 }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  {exposureItems.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        padding: "8px 0",
                      }}
                    >
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          background: "rgba(26, 108, 181, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        <i className={`bi ${item.icon}`} style={{ color: "var(--accent)", fontSize: 15 }} />
                      </div>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "#333" }}>{item.risk}</div>
                        <div style={{ fontSize: 12, color: "#888", lineHeight: 1.4 }}>{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── How These Gaps Show Up in Practice ────────────────── */}
        <section style={{ padding: "40px 0", background: "#0d1e2e" }}>
          <div className="container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 32,
                alignItems: "center",
                marginBottom: 28,
              }}
            >
              <div style={{ flex: "1 1 380px" }} data-aos="fade-right">
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
                  In Practice
                </span>
                <h2 style={{ fontSize: 32, fontWeight: 700, color: "#fff", marginBottom: 10 }}>
                  How These Gaps Show Up in Practice
                </h2>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15 }}>
                  Rarely one big failure. Usually a handful of small ones,
                  stacked together.
                </p>
              </div>

              <div
                style={{ flex: "1 1 320px", position: "relative", minHeight: 260 }}
                data-aos="fade-left"
                data-aos-delay="100"
              >
                {/* decorative bug & phishing icons */}
                <i className="bi bi-bug-fill" style={{ position: "absolute", top: -6, right: 30, fontSize: 52, color: "rgba(220, 53, 69, 0.28)", transform: "rotate(15deg)" }} />
                <i className="bi bi-bug-fill" style={{ position: "absolute", bottom: 6, left: 6, fontSize: 34, color: "rgba(220, 53, 69, 0.2)", transform: "rotate(-18deg)" }} />
                <i className="bi bi-envelope-exclamation-fill" style={{ position: "absolute", top: 36, left: 0, fontSize: 42, color: "rgba(26, 108, 181, 0.28)" }} />
                <i className="bi bi-shield-exclamation" style={{ position: "absolute", bottom: 0, right: 50, fontSize: 38, color: "rgba(26, 108, 181, 0.22)" }} />

                {/* phishing email example 1 */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    background: "#fff",
                    borderRadius: 10,
                    padding: "14px 16px",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
                    marginBottom: 20,
                    marginLeft: 30,
                    transform: "rotate(-2deg)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#888" }}>
                      <i className="bi bi-envelope" style={{ color: "var(--accent)" }} />
                      helpdesk@informanage-support.net
                    </div>
                    <span style={{ background: "#fdecea", color: "#dc3545", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20, textTransform: "uppercase" }}>
                      Suspicious
                    </span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 13.5, color: "var(--heading-color)", marginBottom: 4 }}>
                    ⚠ Action Required: Verify Your Mailbox
                  </div>
                  <div style={{ fontSize: 12, color: "#777", lineHeight: 1.5 }}>
                    Your mailbox will be suspended unless you confirm your
                    credentials within 24 hours...
                  </div>
                </div>

                {/* phishing email example 2 */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    background: "#fff",
                    borderRadius: 10,
                    padding: "14px 16px",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
                    marginLeft: 70,
                    transform: "rotate(2deg)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#888" }}>
                      <i className="bi bi-envelope" style={{ color: "var(--accent)" }} />
                      accounts@secure-billing-alert.com
                    </div>
                    <span style={{ background: "#fdecea", color: "#dc3545", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20, textTransform: "uppercase" }}>
                      Suspicious
                    </span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 13.5, color: "var(--heading-color)", marginBottom: 4 }}>
                    Invoice Overdue — Immediate Payment Needed
                  </div>
                  <div style={{ fontSize: 12, color: "#777", lineHeight: 1.5 }}>
                    Please review the attached invoice and submit payment to
                    avoid service interruption...
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mit-gov-grid"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {riskLookItems.map((item, i) => (
                <div
                  key={i}
                  className="feature-card"
                  data-aos="fade-up"
                  data-aos-delay={150 + i * 60}
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

        {/* ── The Way We Defend Your Systems — five layers ──────── */}
        <section className="howwework-section" style={{ padding: "40px 0" }}>
          <div className="container">
            <div
              style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 24px" }}
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
                  marginBottom: 8,
                }}
              >
                Our Approach
              </span>
              <h2 style={{ fontSize: 32, fontWeight: 700, color: "var(--heading-color)", marginBottom: 8 }}>
                The Way We Defend Your Systems
              </h2>
              <p style={{ color: "#666", fontSize: 15 }}>
                No single safeguard covers everything. Each layer is built to
                catch what the one before it might miss.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 36,
                alignItems: "center",
                maxWidth: 980,
                margin: "0 auto",
              }}
            >
              {/* Shield graphic — 5 stacked bands */}
              <div
                style={{ flex: "0 1 240px", margin: "0 auto" }}
                data-aos="fade-right"
              >
                <div
                  style={{
                    width: 220,
                    height: 260,
                    margin: "0 auto",
                    clipPath:
                      "polygon(50% 0%, 100% 15%, 100% 55%, 50% 100%, 0% 55%, 0% 15%)",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 12px 32px rgba(26, 108, 181, 0.25)",
                  }}
                >
                  {layersItems.map((item, i) => (
                    <div
                      key={item.num}
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `rgba(26, 108, 181, ${0.45 + i * 0.14})`,
                      }}
                    >
                      <span style={{ color: "#fff", fontWeight: 900, fontSize: 20, fontFamily: '"Nunito", sans-serif' }}>
                        {item.num}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Layer rows */}
              <div style={{ flex: "1 1 480px", minWidth: 0 }} data-aos="fade-up" data-aos-delay="100">
                {layersItems.map((item, i) => (
                  <div
                    key={item.num}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 16,
                      padding: "11px 0",
                      borderBottom: i < layersItems.length - 1 ? "1px solid #eef0f4" : "none",
                    }}
                    data-aos="fade-up"
                    data-aos-delay={150 + i * 70}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: `rgba(26, 108, 181, ${0.45 + i * 0.14})`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <i className={`bi ${item.icon}`} style={{ color: "#fff", fontSize: 17 }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: "var(--heading-color)", fontSize: 15.5, marginBottom: 4 }}>
                        Layer {item.num.replace(/^0/, "")} — {item.title}
                      </div>
                      <div style={{ color: "#666", fontSize: 14, lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Where Do You Actually Stand — self-check ──────────── */}
        <section className="mit-section" style={{ padding: "40px 0 56px", background: "#fff" }}>
          <div className="container">
            <div
              style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 24px" }}
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
                  marginBottom: 8,
                }}
              >
                Quick Self-Check
              </span>
              <h2 style={{ fontSize: 32, fontWeight: 700, color: "var(--heading-color)", marginBottom: 8 }}>
                Where Do You Actually Stand?
              </h2>
              <p style={{ color: "#666", fontSize: 15 }}>
                A short version of what we walk through with every new client.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                background: "var(--accent)",
                borderRadius: 14,
                padding: "18px 22px",
                maxWidth: 800,
                margin: "0 auto 22px",
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div style={{ fontSize: 40, fontWeight: 900, color: "#fff", fontFamily: '"Nunito", sans-serif', flexShrink: 0 }}>
                60%
              </div>
              <p style={{ color: "rgba(255,255,255,0.92)", fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>
                of small businesses that suffer a cyberattack shut down within
                six months. The fundamentals are what decide which side of
                that number you&apos;re on.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                columnGap: 20,
                maxWidth: 800,
                margin: "0 auto",
              }}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              {checklistItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    padding: "8px 0",
                    borderBottom: "1px solid #eef0f4",
                    color: "#444",
                    fontSize: 14,
                  }}
                >
                  <i className="bi bi-check-circle-fill" style={{ color: "var(--accent)", fontSize: 15, marginTop: 2, flexShrink: 0 }} />
                  {item}
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
