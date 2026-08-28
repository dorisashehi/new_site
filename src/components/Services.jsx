const services = [
  {
    icon: "bi-shield-lock",
    title: "Managed & Secure",
    desc: "Keep people productive and systems protected.",
    items: [
      "Managed IT & Help Desk",
      "Cybersecurity",
      "Backup & Business Continuity",
      "Technology Strategy",
    ],
  },
  {
    icon: "bi-people",
    title: "Connect & Collaborate",
    desc: "Make the workplace connected, flexible and easy to use.",
    items: [
      "Microsoft 365 & Google Workspace",
      "Networks, Wi-Fi & Internet",
      "Cloud Phones & Communications",
    ],
  },
  {
    icon: "bi-building-add",
    title: "Move, Build & Grow",
    desc: "Put the technology foundation in place for what comes next.",
    items: ["New Offices & Buildouts", "Moves & Expansions", "IT Projects"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
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
            WHAT WE DO
          </span>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "var(--heading-color)",
              marginBottom: 10,
            }}
          >
            One Partner for Your Technology
          </h2>
          <p style={{ color: "#666", fontSize: 15 }}>
            From everyday support to major technology initiatives, we manage the
            technology your organization depends on.
          </p>
        </div>

        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={100 + i * 80}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 16,
                }}
              >
                <div
                  className="icon-box"
                  style={{ marginBottom: 0, flexShrink: 0 }}
                >
                  <i className={`bi ${s.icon}`} />
                </div>
                <h4 style={{ margin: 0 }}>{s.title}</h4>
              </div>
              <p style={{ marginBottom: 12 }}>{s.desc}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {s.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: 13,
                      padding: "5px 0",
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
                    <a href="#" className="service-item-link">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="service-number">0{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
