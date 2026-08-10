import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="mit-dark-section" style={{ padding: "40px 0 0" }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 22,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div style={{ flex: "1 1 420px" }}>
            <h2
              style={{
                fontSize: 30,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 14,
              }}
            >
              Ready to improve your IT operations?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
                fontSize: 16,
              }}
            >
              Let&apos;s build a more secure, reliable, and efficient
              technology environment&mdash;together.
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <Link
              to="/contact"
              className="cta-btn"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", fontSize: 15 }}
            >
              Schedule a Consultation
              <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
