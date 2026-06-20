import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Header from '../components/Header';
import Footer from '../components/Footer';

const industries = [
  {
    slug: 'financial-services',
    icon: 'bi-bank',
    title: 'Financial Services',
    desc: 'Financial services organizations depend on secure, reliable technology environments that support critical operations and protect sensitive client data.',
    listLabel: 'Technology support for financial services firms often includes:',
    items: [
      'Secure infrastructure management',
      'Reliable backup and recovery systems',
      'Monitoring of business-critical systems',
      'Vendor coordination with financial platforms',
    ],
    note: 'InfoManage helps financial services firms maintain stable infrastructure while supporting regulatory and operational requirements.',
  },
  {
    slug: 'legal',
    icon: 'bi-briefcase-fill',
    title: 'Legal',
    desc: 'Law firms rely heavily on secure document management systems, reliable email platforms, and stable infrastructure that supports daily operations.',
    listLabel: 'Technology environments for legal practices typically require:',
    items: [
      'Secure document access',
      'Reliable backup and data protection',
      'Infrastructure stability for case management systems',
      'Responsive user support',
    ],
    note: 'InfoManage helps legal organizations maintain reliable systems that support attorneys and staff in their daily work.',
  },
  {
    slug: 'healthcare',
    icon: 'bi-heart-pulse-fill',
    title: 'Healthcare',
    desc: 'Healthcare organizations require technology environments that support operational reliability, data protection, and secure system access.',
    listLabel: 'Technology management often includes:',
    items: [
      'Secure system configurations',
      'Reliable infrastructure management',
      'Backup and disaster recovery planning',
      'Monitoring of critical systems',
    ],
    note: 'InfoManage supports healthcare environments by maintaining stable infrastructure and helping organizations manage complex technology environments.',
  },
  {
    slug: 'advertising-media',
    icon: 'bi-megaphone-fill',
    title: 'Advertising and Media',
    desc: 'Creative and media organizations often depend on high-performance systems that support collaboration, large file storage, and creative production workflows.',
    listLabel: 'Technology support for media firms often includes:',
    items: [
      'Infrastructure capable of supporting large file environments',
      'Reliable network performance',
      'Workstation management',
      'Collaboration system support',
    ],
    note: 'InfoManage helps creative organizations maintain reliable technology environments that support production workflows.',
  },
  {
    slug: 'real-estate',
    icon: 'bi-building-fill',
    title: 'Real Estate',
    desc: 'Real estate organizations rely on technology systems for client communication, document management, and operational coordination across multiple offices.',
    listLabel: 'Typical technology needs include:',
    items: [
      'Secure document access',
      'Reliable email and communication platforms',
      'Mobile workforce support',
      'Infrastructure monitoring',
    ],
    note: 'InfoManage helps real estate firms maintain reliable systems that support both office and remote operations.',
  },
  {
    slug: 'manufacturing',
    icon: 'bi-gear-fill',
    title: 'Manufacturing',
    desc: 'Manufacturing organizations depend on reliable infrastructure that supports operations, logistics systems, and communication across facilities.',
    listLabel: 'Technology environments may include:',
    items: [
      'Infrastructure supporting operational systems',
      'Secure network management',
      'Reliable system monitoring',
      'Coordination with specialized industry software',
    ],
    note: 'InfoManage helps manufacturing organizations maintain stable infrastructure environments that support production operations.',
  },
  {
    slug: 'non-profit',
    icon: 'bi-people-fill',
    title: 'Non-Profit Organizations',
    desc: 'Non-profit organizations often rely on technology to manage operations, communication, and donor engagement while operating within limited budgets.',
    listLabel: 'Technology support typically focuses on:',
    items: [
      'Reliable infrastructure management',
      'Secure systems for sensitive data',
      'Cost-efficient technology planning',
      'Operational support for staff and volunteers',
    ],
    note: 'InfoManage helps nonprofit organizations maintain reliable systems while planning technology investments carefully.',
  },
];

export default function IndustriesPage() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in-out', once: true, mirror: false });
  }, []);

  useEffect(() => {
    const slug = new URLSearchParams(location.search).get('industry');
    const index = industries.findIndex(ind => ind.slug === slug);

    if (index === -1) {
      window.scrollTo(0, 0);
      return;
    }

    const timer = setTimeout(() => {
      document.getElementById('industries-list')?.scrollIntoView({ behavior: 'smooth' });
      swiperRef.current?.slideToLoop(index, 0);
    }, 150);
    return () => clearTimeout(timer);
  }, [location.search]);

  return (
    <>
      <Header />
      <main className="main">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="industries-hero">
          <div className="industries-hero-overlay" />
          <div className="container mit-hero-content" data-aos="fade-up" data-aos-delay="100">
            <div className="mit-hero-badge">
              <i className="bi bi-buildings" />
              <span>Industries We Serve</span>
            </div>
            <h1>Technology Operations for a Wide Range of Industries</h1>
            <p className="mit-hero-sub">
              Supporting organizations that rely on stable, secure, and well-managed technology environments.
            </p>
            <p className="mit-hero-body">
              Technology plays a critical role in nearly every industry. From professional services firms to
              manufacturing companies and nonprofit organizations, businesses depend on reliable systems, secure
              data, and efficient infrastructure.
            </p>
            <p className="mit-hero-body">
              InfoManage supports organizations across many industries, helping them manage technology operations
              while ensuring that systems remain secure, stable, and aligned with business needs.
            </p>
            <div className="mit-hero-btns">
              <Link to="/contact#contact" className="btn-get-started">Schedule a Consultation</Link>
              <Link to="/contact" className="mit-hero-outline-btn">Contact InfoManage</Link>
            </div>
          </div>
        </section>

        {/* ── Industries We Work With — Services-style layout ──── */}
        <section id="industries-list" className="services-section">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Industries We Work With</h2>
              <p>A tailored approach to operational IT management, built around the realities of your sector</p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'center', marginBottom: 60 }}>
              {/* Left text */}
              <div style={{ flex: '1 1 400px' }} className="services-content" data-aos="fade-left" data-aos-duration="900">
                <span className="subtitle">Sector-Specific Experience</span>
                <h2>Built Around Your Industry</h2>
                <p data-aos="fade-right" data-aos-duration="800">
                  While every organization is unique, many industries share common technology challenges.
                  InfoManage provides operational IT management and infrastructure support tailored to the
                  environments and requirements typical within each sector.
                </p>
              </div>

              {/* Right image */}
              <div style={{ flex: '1 1 400px' }} className="services-image" data-aos="fade-left" data-aos-delay="200">
                <img
                  src="/images/industries/teams-across-industries.jpg"
                  alt="Teams across industries relying on InfoManage"
                />
                <div className="shape-circle" />
                <div className="shape-accent" />
              </div>
            </div>

            {/* Swiper cards */}
            <div data-aos="fade-up" data-aos-duration="1000">
              <Swiper
                modules={[Navigation, Autoplay]}
                loop
                speed={600}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                onInit={swiper => {
                  swiperRef.current = swiper;
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 20 },
                  992: { slidesPerView: 3, spaceBetween: 20 },
                }}
              >
                {industries.map((ind, i) => (
                  <SwiperSlide key={i}>
                    <div className="service-card">
                      <div className="icon-box"><i className={`bi ${ind.icon}`} /></div>
                      <div>
                        <h4>{ind.title}</h4>
                        <p style={{ marginBottom: 12 }}>{ind.desc}</p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {ind.items.map((item, j) => (
                            <li key={j} style={{ fontSize: 12, color: '#666', padding: '3px 0', display: 'flex', gap: 6, alignItems: 'flex-start' }}>
                              <i className="bi bi-check2" style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />{item}
                            </li>
                          ))}
                        </ul>
                        <p style={{ fontSize: 12, color: '#999', fontStyle: 'italic', marginTop: 12, marginBottom: 0 }}>{ind.note}</p>
                        <div className="service-number">0{i + 1}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="swiper-nav" style={{ marginTop: 24 }}>
                <button ref={prevRef} className="swiper-nav-btn"><i className="bi bi-chevron-left" /></button>
                <button ref={nextRef} className="swiper-nav-btn"><i className="bi bi-chevron-right" /></button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Supporting Technology-Driven Organizations ────────── */}
        <section className="mit-section" style={{ background: 'var(--light-bg)' }}>
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Supporting Technology-Driven Organizations</h2>
            </div>

            <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }} data-aos="fade-up" data-aos-delay="100">
              <p style={{ color: '#666', fontSize: 15, lineHeight: 1.8 }}>
                InfoManage works with organizations that rely on technology to run daily operations. Regardless of
                industry, our focus is on maintaining stable infrastructure, providing responsive operational
                support, and helping organizations plan for future technology needs.
              </p>
              <p style={{ color: '#666', fontSize: 15, lineHeight: 1.8 }}>
                Our structured approach to IT operations ensures that systems remain reliable while supporting
                evolving business requirements.
              </p>
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────── */}
        <section className="mit-section" style={{ background: '#fff', borderTop: '1px solid #eef0f4' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }} data-aos="fade-up" data-aos-delay="100">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--accent)', marginBottom: 16 }}>
                <i className="bi bi-buildings-fill" />
                Your Industry, Our Experience
              </span>
              <h2 style={{ fontSize: 34, fontWeight: 700, color: 'var(--heading-color)', marginBottom: 18 }}>
                Looking for a Technology Partner Who Understands Your Industry?
              </h2>
              <p style={{ color: '#666', lineHeight: 1.8, fontSize: 16, marginBottom: 30 }}>
                Schedule a consultation to discuss your organization's technology environment and learn how
                InfoManage can support your infrastructure and operational needs.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
                <Link to="/contact#contact" className="btn-get-started" style={{ padding: '12px 32px' }}>Schedule a Consultation</Link>
                <Link to="/contact"
                  style={{ display: 'inline-block', padding: '12px 32px', borderRadius: 50, fontWeight: 600, border: '2px solid var(--accent)', color: 'var(--accent)', transition: '0.3s', fontSize: 15 }}
                  onMouseOver={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}>
                  Contact InfoManage
                </Link>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
                {[1,2,3,4,5].map(s => <i key={s} className="bi bi-star-fill" style={{ color: '#ffc107', fontSize: 14 }} />)}
                <span style={{ color: '#999', fontSize: 13, marginLeft: 6 }}>Established 1995 · 30+ years of service</span>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
