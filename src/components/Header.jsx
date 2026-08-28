import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/", internal: true },
  {
    label: "Services",
    children: [
      { label: "Managed IT", href: "/managed-it-services" },
      { label: "Cybersecurity", href: "/cybersecurity-services" },
      { label: "VoIP Phone Systems", href: "/voip-phone-systems" },
    ],
  },
  { label: "Industries", href: "/industries", internal: true },
  { label: "About", href: "/about", internal: true },
  { label: "Insights", href: "/insights", internal: true },
  { label: "Contact", href: "/contact", internal: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.25 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const mobileLinks = [
    { label: "Home", href: "/", internal: true },
    { label: "About", href: "/about", internal: true },
    { label: "Services", heading: true },
    {
      label: "Managed IT",
      href: "/managed-it-services",
      internal: true,
      indent: true,
    },
    {
      label: "Cybersecurity",
      href: "/cybersecurity-services",
      internal: true,
      indent: true,
    },
    {
      label: "VoIP Phone Systems",
      href: "/voip-phone-systems",
      internal: true,
      indent: true,
    },
    { label: "Industries", href: "/industries", internal: true },
    { label: "Contact", href: "/contact", internal: true },
  ];

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">
          <a href="/" className="logo">
            <img
              src="/logo.jpg"
              alt="InfoManage"
              style={{
                height: "100%",
                maxWidth: "85%",
                objectFit: "cover",
                display: "block",
                transform: "scale(1.0)",
              }}
            />
          </a>

          <nav className="navmenu">
            <ul>
              {navLinks.map((link, i) =>
                link.children ? (
                  <li
                    key={i}
                    className="dropdown"
                    style={{ padding: "10px 14px" }}
                  >
                    <a href="#">
                      <span>{link.label}</span>
                      <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul className="dropdown-menu">
                      {link.children.map((child, j) => (
                        <li key={j}>
                          <Link to={child.href}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={i} style={{ padding: "10px 14px" }}>
                    {link.internal ? (
                      <Link to={link.href}>{link.label}</Link>
                    ) : (
                      <a
                        href={link.href}
                        className={
                          activeSection === link.href.replace("#", "")
                            ? "active"
                            : ""
                        }
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ),
              )}
            </ul>
          </nav>

          <a href="/contact" className="cta-btn">
            Contact InfoManage
          </a>
          <i
            className="bi bi-list mobile-nav-toggle"
            onClick={() => setMobileOpen(true)}
          />
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-nav open" onClick={() => setMobileOpen(false)}>
          <div
            className="mobile-nav-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 20px 0",
              }}
            >
              <img
                src="/logo.jpg"
                alt="InfoManage"
                style={{
                  height: "100%",
                  maxWidth: "85%",
                  objectFit: "cover",
                  display: "block",
                  transform: "scale(1.0)",
                }}
              />
              <i
                className="bi bi-x"
                style={{ fontSize: 26, cursor: "pointer", color: "#333" }}
                onClick={() => setMobileOpen(false)}
              />
            </div>
            {mobileLinks.map((link, i) =>
              link.heading ? (
                <div
                  key={i}
                  style={{
                    padding: "12px 20px 4px",
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    color: "#999",
                  }}
                >
                  {link.label}
                </div>
              ) : (
                <Link
                  key={i}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={
                    link.indent
                      ? {
                          paddingLeft: 36,
                          fontSize: 14,
                          color: "#666",
                          borderBottom: "1px solid #f5f5f5",
                          display: "flex",
                          alignItems: "center",
                        }
                      : {}
                  }
                >
                  {link.indent && (
                    <i
                      className="bi bi-chevron-right"
                      style={{
                        fontSize: 10,
                        marginRight: 6,
                        color: "var(--accent)",
                      }}
                    />
                  )}
                  {link.label}
                </Link>
              ),
            )}
            <div style={{ padding: "16px 20px" }}>
              <Link
                to="/contact#contact"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "inline-block",
                  background: "var(--accent)",
                  color: "#fff",
                  padding: "10px 24px",
                  borderRadius: 50,
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
