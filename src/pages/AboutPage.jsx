import { useEffect } from "react";
import AOS from "aos";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
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
        <section className="about-hero">
          <div className="about-hero-overlay" />
          <div
            className="container mit-hero-content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="mit-hero-badge">
              <i className="bi bi-calendar-check" />
              <span>Founded in 1995 · 30+ Years of Service</span>
            </div>
            <h1>About InfoManage</h1>
            <p className="mit-hero-sub">
              Reliable Technology. Proven Experience.
            </p>
            <p className="mit-hero-body">
              IT operations and infrastructure support designed to keep your
              business secure, stable, and running smoothly.
            </p>
            {/* <div className="mit-hero-btns">
              <Link to="/contact#contact" className="btn-get-started">Schedule a Consultation</Link>
              <Link to="/contact" className="mit-hero-outline-btn">Contact InfoManage</Link>
            </div> */}
          </div>
        </section>

        {/* ── Our Story — features-section layout ──────────────── */}
        <section id="our-story" className="features-section">
          <div className="container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 40,
                alignItems: "center",
              }}
            >
              {/* Left: image + founded badge */}
              <div
                style={{
                  flex: "1 1 400px",
                  position: "relative",
                  paddingBottom: 30,
                  paddingRight: 20,
                }}
                data-aos="fade-right"
              >
                <div className="about-img">
                  <img
                    src="/images/about/our-story.jpg"
                    alt="InfoManage team collaborating"
                  />
                </div>
                <div
                  className="experience-badge"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h2>1995</h2>
                  <p>
                    Founded
                    <br />
                    In
                  </p>
                </div>
              </div>

              {/* Right: content */}
              <div
                style={{ flex: "1 1 400px" }}
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <div className="features-content">
                  <h2>Our Story</h2>
                  <span
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1.5,
                      color: "var(--accent)",
                      margin: "-10px 0 16px",
                    }}
                  >
                    Built on Experience. Driven by Partnership.
                  </span>
                  <p>
                    Founded by Marc Neer in 1995, InfoManage was created with
                    a straightforward vision: provide businesses with
                    reliable, flexible technology support that could grow
                    alongside them.
                  </p>
                  <p>
                    Drawing on his experience supporting technology in the
                    demanding environment of Wall Street, Marc recognized
                    that businesses needed more than reactive IT support.
                    They needed a technology partner who understood their
                    operations, anticipated challenges, and could adapt
                    solutions to their evolving needs.
                  </p>
                  <p>
                    From the beginning, InfoManage took a hands-on approach.
                    Rather than relying on standardized packages, we built
                    our reputation by working directly with clients to
                    understand their environments, solve immediate
                    challenges, and develop technology solutions around
                    their specific requirements.
                  </p>
                  <p>
                    Over the years, that approach has allowed us to support
                    organizations across a wide range of industries, from
                    growing businesses with lean IT teams to established
                    organizations managing complex, multi-site environments.
                  </p>
                  <p>
                    Today, Marc continues to work closely with clients,
                    helping them make informed infrastructure decisions,
                    strengthen day-to-day operations, and plan for the
                    technology needs of tomorrow.
                  </p>
                  <blockquote
                    style={{
                      borderLeft: "3px solid var(--accent)",
                      margin: "20px 0",
                      padding: "4px 0 4px 18px",
                      color: "var(--heading-color)",
                      fontSize: 15.5,
                      fontStyle: "italic",
                      lineHeight: 1.7,
                    }}
                  >
                    &quot;We didn&apos;t come up through consulting, we came
                    up doing the work. That&apos;s still how we build every
                    solution: around what the client actually needs, not a
                    script.&quot;
                    <footer
                      style={{
                        marginTop: 8,
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: 13,
                        color: "#888",
                      }}
                    >
                      — Marc Neer, Founder
                    </footer>
                  </blockquote>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                      marginTop: 8,
                    }}
                  >
                    {[
                      "Infrastructure Strategy",
                      "Operational Excellence",
                      "Long-Term Planning",
                      "Client Partnership",
                    ].map((s, i) => (
                      <span key={i} className="team-skill-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Who We're Built For ───────────────────────────────── */}
        <section
          id="who-we-work-with"
          className="mit-section"
          style={{ background: "var(--light-bg)" }}
        >
          <div className="container">
            <div
              style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}
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
                Who We Work With
              </span>
              <h2 style={{ fontSize: 32, fontWeight: 700, color: "var(--heading-color)", marginBottom: 14 }}>
                Built for Businesses at Every Stage
              </h2>
              <p style={{ color: "#666", fontSize: 15.5, lineHeight: 1.8 }}>
                From the small but fast-growing startup to the larger,
                established company that just needs more resources than it
                has internally, InfoManage scales its support to match where
                a business actually is, not a fixed plan that doesn&apos;t
                fit.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
