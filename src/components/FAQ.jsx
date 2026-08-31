import { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    q: "What does InfoManage manage?",
    a: "InfoManage manages the full technology stack an organization depends on servers, networks, and endpoints; security and backups; cloud and productivity platforms like Microsoft 365 and Google Workspace; and business phone systems. We also plan and execute one-time projects such as office buildouts, so you have a single partner for both day-to-day operations and larger initiatives.",
  },
  {
    q: "Can InfoManage work with our existing IT team?",
    a: "Yes. Many clients keep an internal IT staff and bring us in to supplement it covering after-hours and 24/7 monitoring, specialized security work, or extra capacity during projects. We work alongside your team rather than replacing it, filling the gaps wherever they exist.",
  },
  {
    q: "Do you handle one-time IT projects and office buildouts?",
    a: "Absolutely. Beyond ongoing managed services, InfoManage plans and coordinates office buildouts and infrastructure projects end-to-end cabling, installation, configuration, and testing with clear communication throughout so every stakeholder knows the status and timeline.",
  },
  {
    q: "What makes InfoManage different from a traditional IT support company?",
    a: "Traditional IT support is reactive and billed by the hour when something breaks. InfoManage operates as a proactive partner on a structured, fixed-price-per-unit model monitoring, maintaining, and improving your environment continuously, so problems are prevented rather than billed for after the fact.",
  },
  {
    q: "Can you support both Microsoft 365 and Google Workspace?",
    a: "Yes, we're platform-agnostic when it comes to productivity and collaboration tools. We manage licensing, security configuration, and day-to-day support for both Microsoft 365 and Google Workspace, and can assist with migrating between the two if your organization needs it.",
  },
];

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <div className="faq-header" onClick={() => setOpen(!open)}>
        <span className="faq-question">{question}</span>
        <i className={`bi bi-plus-lg faq-toggle-icon${open ? " open" : ""}`} />
      </div>
      {open && <div className="faq-body">{answer}</div>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="faq-section">
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
            FAQ
          </span>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "var(--heading-color)",
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 40,
            alignItems: "flex-start",
          }}
        >
          <div
            style={{ flex: "2 1 460px" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {faqData.map((item, i) => (
              <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>

          <div
            style={{
              flex: "1 1 260px",
              background: "var(--light-bg)",
              borderRadius: 14,
              padding: "28px 24px",
              display: "flex",
              alignItems: "center",
              gap: 20,
              textAlign: "left",
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <i
              className="bi bi-headset"
              style={{ fontSize: 64, color: "var(--accent)", flexShrink: 0 }}
            />
            <div>
              <p
                style={{
                  fontWeight: 700,
                  color: "var(--heading-color)",
                  marginBottom: 4,
                  fontSize: 15,
                }}
              >
                Have more questions?
              </p>
              <p style={{ color: "#777", fontSize: 13, marginBottom: 14 }}>
                Our team is here to help.
              </p>
              <Link
                to="/contact"
                className="btn-pricing"
                style={{
                  display: "inline-block",
                  padding: "8px 22px",
                  fontSize: 13,
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
