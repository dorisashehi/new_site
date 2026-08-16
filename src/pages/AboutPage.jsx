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
              Providing structured IT operations and infrastructure support for
              organizations that depend on reliable technology.
            </p>
            <p className="mit-hero-body">
              InfoManage helps organizations manage the technology systems that
              support their daily operations. By combining proactive
              infrastructure management with strategic technology guidance, we
              help businesses maintain stable, secure, and scalable technology
              environments.
            </p>
            <p className="mit-hero-body">
              Since 1995, InfoManage has partnered with organizations across a
              wide range of industries to manage and support the systems they
              rely on every day.
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
                    Founded by Marc Neer
                  </span>
                  <p>
                    In 1995, Marc Neer took the technology expertise he&apos;d
                    built working at the fast, intense pace of Wall Street and
                    set out to build a different kind of IT support company,
                    one that offered scalable, flexible solutions for
                    businesses of every size, from small, rapidly growing
                    startups to larger, established companies that simply
                    needed more resources.
                  </p>
                  <p>
                    That vision shaped how InfoManage operates to this day.
                    Rather than emerging from the consulting side of the
                    industry, we built our reputation working in the trenches
                    as a hands-on support provider, which is why our
                    solutions are custom-designed around each client&apos;s
                    actual technology requirements, not a one-size-fits-all
                    package.
                  </p>
                  <p>
                    Over the years, we have worked with organizations across
                    many industries, supporting environments ranging from small
                    offices to multi-site infrastructure deployments.
                  </p>
                  <p>
                    Today, that same vision is still led by Marc Neer, who
                    works closely with clients to guide infrastructure
                    decisions, operational improvements, and long-term
                    technology planning.
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
                      "Operational Leadership",
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
