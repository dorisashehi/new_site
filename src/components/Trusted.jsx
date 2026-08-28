const credibility = [
  { icon: "bi-diagram-3", label: "One Partner Across Your Technology" },
  { icon: "bi-gear-wide-connected", label: "End-to-End Operational & Project Expertise" },
  { icon: "bi-clock-history", label: "24×7 Monitoring Available" },
];

export default function Trusted() {
  return (
    <section id="trusted" className="trusted-section">
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 40,
            alignItems: "center",
          }}
        >
          {/* Image */}
          <div
            style={{ flex: "0 1 260px", position: "relative" }}
            data-aos="fade-right"
          >
            <i
              className="bi bi-flower1"
              style={{
                position: "absolute",
                bottom: -14,
                left: -14,
                fontSize: 34,
                color: "rgba(26, 108, 181, 0.35)",
                zIndex: 0,
              }}
            />
            <i
              className="bi bi-flower2"
              style={{
                position: "absolute",
                bottom: 6,
                left: -26,
                fontSize: 20,
                color: "rgba(46, 168, 120, 0.4)",
                zIndex: 0,
              }}
            />
            <img
              src="/images/home/partnership.jpg"
              alt="InfoManage team celebrating with a client"
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                borderRadius: 12,
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 16,
                right: -16,
                zIndex: 2,
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
              <div style={{ fontSize: 26, fontWeight: 900, lineHeight: 1 }}>
                30+
              </div>
              <div style={{ fontSize: 11, marginTop: 4, lineHeight: 1.3 }}>
                Years of
                <br />
                Expertise
              </div>
            </div>
          </div>

          {/* Text */}
          <div
            style={{ flex: "1 1 280px" }}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <span
              style={{
                display: "block",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 2,
                color: "var(--accent)",
                marginBottom: 14,
              }}
            >
              Established & Trusted
            </span>
            <h2
              style={{
                fontSize: 26,
                fontWeight: 700,
                color: "var(--heading-color)",
                marginBottom: 12,
                lineHeight: 1.3,
              }}
            >
              Technology Experience That Goes Beyond the Help Desk
            </h2>
            <p style={{ color: "#666", lineHeight: 1.8, fontSize: 15 }}>
              Founded in 1995, InfoManage brings decades of experience across IT
              operations, infrastructure, cybersecurity, cloud, communications,
              projects and technology strategy.
            </p>
          </div>

          {/* Stats */}
          <div style={{ flex: "2 1 500px", display: "flex", flexWrap: "wrap" }}>
            {credibility.map((c, i) => (
              <div
                key={i}
                className="trusted-stat-item"
                style={{
                  flex: "1 1 110px",
                  textAlign: "center",
                  padding: "0 16px",
                  borderRight:
                    i < credibility.length - 1 ? "1px solid #e5e9f0" : "none",
                }}
                data-aos="zoom-in"
                data-aos-delay={230 + i * 80}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    margin: "0 auto 12px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(26, 108, 181, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i
                    className={`bi ${c.icon}`}
                    style={{ fontSize: 22, color: "var(--accent)" }}
                  />
                </div>
                <span
                  style={{
                    display: "block",
                    fontSize: 13.5,
                    fontWeight: 700,
                    color: "var(--heading-color)",
                    lineHeight: 1.4,
                  }}
                >
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
