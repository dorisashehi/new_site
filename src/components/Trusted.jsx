const stats = [
  { icon: "bi-chat-heart", value: "30+", label: "Years of Experience" },
  { icon: "bi-chat-square-heart", value: "98%", label: "Client Retention" },
  { icon: "bi-shield-check", value: "99.9%", label: "System Uptime" },
  { icon: "bi-clock-history", value: "24×7", label: "Monitoring & Support" },
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
              Keeping Your Business Up and Running
            </h2>
            <p style={{ color: "#666", lineHeight: 1.8, fontSize: 15 }}>
              For nearly 30 years, InfoManage has helped businesses stay
              productive, secure, and prepared for what&apos;s next.
            </p>
          </div>

          {/* Stats */}
          <div style={{ flex: "2 1 500px", display: "flex", flexWrap: "wrap" }}>
            {stats.map((s, i) => (
              <div
                key={i}
                className="trusted-stat-item"
                style={{
                  flex: "1 1 110px",
                  textAlign: "center",
                  padding: "0 16px",
                  borderRight:
                    i < stats.length - 1 ? "1px solid #e5e9f0" : "none",
                }}
                data-aos="zoom-in"
                data-aos-delay={150 + i * 80}
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
                    className={`bi ${s.icon}`}
                    style={{ fontSize: 22, color: "var(--accent)" }}
                  />
                </div>
                <span
                  style={{
                    display: "block",
                    fontSize: 26,
                    fontWeight: 900,
                    color: "var(--heading-color)",
                    fontFamily: '"Nunito", sans-serif',
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontSize: 12.5,
                    color: "#777",
                    fontWeight: 600,
                    lineHeight: 1.4,
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
