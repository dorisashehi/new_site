import { Link } from "react-router-dom";

const situations = [
  {
    icon: "bi-building",
    text: "Opening, moving, renovating or expanding an office",
  },
  {
    icon: "bi-search",
    text: "Looking for a new or better IT support company",
  },
  {
    icon: "bi-graph-up-arrow",
    text: "Growing and need technology that can grow with the business",
  },
  {
    icon: "bi-shield-exclamation",
    text: "Concerned about cybersecurity, backups or compliance",
  },
  {
    icon: "bi-wifi-off",
    text: "Having recurring network, Wi-Fi, internet or technology problems",
  },
  {
    icon: "bi-cloud-arrow-up",
    text: "Migrating to Microsoft 365, Google Workspace or the cloud",
  },
  {
    icon: "bi-telephone",
    text: "Implementing or replacing a business phone system",
  },
  {
    icon: "bi-kanban",
    text: "Planning a significant technology project or upgrade",
  },
  {
    icon: "bi-briefcase",
    text: "Looking for one company to take responsibility for IT",
  },
];

export default function WhenToContact() {
  return (
    <section id="when-to-contact" style={{ padding: "80px 0" }}>
      <div className="container">
        <div
          style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 50px" }}
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
              marginBottom: 14,
            }}
          >
            WHEN TO CONTACT US
          </span>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "var(--heading-color)",
            }}
          >
            When Should You Contact InfoManage?
          </h2>
        </div>

        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 40, alignItems: "stretch" }}
        >
          <div
            style={{
              flex: "2 1 460px",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "28px 24px",
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {situations.map((s, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: "rgba(26,108,181,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <i
                    className={`bi ${s.icon}`}
                    style={{ color: "var(--accent)", fontSize: 16 }}
                  />
                </div>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: "rgb(85, 85, 85)",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {s.text}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              flex: "1 1 220px",
              maxWidth: 280,
              background: "var(--light-bg)",
              borderRadius: 14,
              padding: "24px 20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 12,
              textAlign: "left",
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <i
                className="bi bi-chat-dots"
                style={{ fontSize: 32, color: "var(--accent)", flexShrink: 0 }}
              />
              <p
                style={{
                  fontWeight: 700,
                  color: "var(--heading-color)",
                  margin: 0,
                  fontSize: 17,
                }}
              >
                Recognize your situation?
              </p>
            </div>
            <p style={{ color: "#777", fontSize: 13, margin: 0 }}>
              If any of this sounds familiar, it's time to talk.
            </p>
            <Link
              to="/contact"
              className="btn-pricing"
              style={{
                display: "inline-block",
                padding: "8px 22px",
                fontSize: 13,
                alignSelf: "flex-start",
              }}
            >
              Contact InfoManage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
