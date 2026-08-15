const stats = [
  { icon: "bi-person", value: "30+", label: "Years of Experience" },
  { icon: "bi-award", value: "98%", label: "Client Retention" },
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
          {/* Left */}
          <div
            style={{ flex: "1 1 320px" }}
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
                fontSize: 28,
                fontWeight: 700,
                color: "var(--heading-color)",
                marginBottom: 16,
              }}
            >
              Keeping Your Business Up and Running. Since 1995
            </h2>
            <p style={{ color: "#666", lineHeight: 1.8, fontSize: 15 }}>
              For over 30 years, InfoManage has helped businesses keep their
              technology secure, reliable, and performing at its best.
            </p>
          </div>

          {/* Right: stats */}
          <div style={{ flex: "2 1 500px", display: "flex", flexWrap: "wrap" }}>
            {stats.map((s, i) => (
              <div
                key={i}
                className="trusted-stat-item"
                style={{
                  flex: "1 1 110px",
                  textAlign: "center",
                  padding: "0 16px",
                }}
                data-aos="zoom-in"
                data-aos-delay={150 + i * 80}
              >
                <i
                  className={`bi ${s.icon}`}
                  style={{
                    display: "block",
                    fontSize: 40,
                    color: "var(--accent)",
                    marginBottom: 12,
                  }}
                />
                <span
                  style={{
                    display: "block",
                    fontSize: 30,
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
                    fontSize: 13,
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
