const steps = [
  {
    num: "01",
    icon: "bi-search",
    title: "Discover",
    desc: "We learn your business before we touch your technology — sitting down to understand your goals, your team's day-to-day frustrations, and how your existing infrastructure, contracts, and costs actually stack up.",
  },
  {
    num: "02",
    icon: "bi-shield-lock",
    title: "Secure",
    desc: "We close the gaps that put your business at risk:",
    bullets: [
      "Endpoint protection, patch management, and security baseline hardening",
      "Tested backup and disaster recovery, so one bad day can't take you down",
    ],
  },
  {
    num: "03",
    icon: "bi-headset",
    title: "Support",
    desc: "An extension of your staff, not just a vendor on call — every request is tracked, prioritized, and escalated immediately when it's critical, with extended or 24×7 coverage available depending on your plan.",
  },
  {
    num: "04",
    icon: "bi-graph-up-arrow",
    title: "Evolve",
    desc: "Your technology keeps pace as your business grows — we build an ongoing technology roadmap with lifecycle planning and vCIO advisory, all under predictable, fixed-fee pricing that scales with your business instead of surprising you with invoices.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" style={{ padding: "56px 0", background: "#fff" }}>
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
            Our Approach
          </span>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "var(--heading-color)",
              marginBottom: 10,
            }}
          >
            A Clear Approach to Better IT
          </h2>
          <p style={{ color: "#666", fontSize: 15 }}>
            From understanding your needs to continuously improving your
            technology, we make IT simple, secure, and predictable.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 40,
            alignItems: "center",
          }}
        >
          <div
            style={{ flex: "1 1 400px" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {steps.map((s, i) => (
              <div
                key={i}
                className="approach-card"
                data-aos="fade-up"
                data-aos-delay={150 + i * 70}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <div className="approach-icon">
                    <i className={`bi ${s.icon}`} />
                  </div>
                  <span className="approach-phase-pill">Phase {s.num}</span>
                </div>
                <h5>{s.title}</h5>
                <p>{s.desc}</p>
                {s.bullets && (
                  <ul className="approach-checklist">
                    {s.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div
            style={{ flex: "1 1 380px" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="/images/about/governance.jpg"
              alt="Technicians monitoring and securing client systems"
              style={{
                width: "100%",
                borderRadius: "28px 28px 28px 80px",
                display: "block",
                boxShadow: "0 20px 48px rgba(13, 30, 46, 0.16)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
