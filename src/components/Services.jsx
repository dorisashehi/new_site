import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

const serviceCards = [
  {
    icon: 'bi-tools',
    title: 'Fix',
    num: '01',
    desc: 'Rapid issue resolution keeps users productive and minimizes disruption to business operations.',
    bullets: ['Help desk support', 'Application troubleshooting', 'Incident response and escalation'],
  },
  {
    icon: 'bi-shield-check',
    title: 'Maintain',
    num: '02',
    desc: 'Proactive operations prevent problems before they occur and protect your critical infrastructure.',
    bullets: ['24×7 monitoring', 'Patch management', 'Security hygiene', 'Routine maintenance'],
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Enhance',
    num: '03',
    desc: 'Strategic guidance ensures technology evolves in alignment with your organization\'s goals.',
    bullets: ['Technology roadmaps', 'Lifecycle planning', 'Infrastructure improvements', 'vCTO advisory'],
  },
  {
    icon: 'bi-headset',
    title: 'Help Desk',
    num: '04',
    desc: 'Unlimited end-user support delivered by experienced technicians who know your environment.',
    bullets: ['Remote support', 'On-site assistance', 'User training', 'Ticket management'],
  },
  {
    icon: 'bi-lock',
    title: 'Security',
    num: '05',
    desc: 'Multi-layered security management that protects your data, users, and systems continuously.',
    bullets: ['Endpoint protection', 'Threat monitoring', 'Security audits', 'Compliance support'],
  },
];

export default function Services() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>How We Manage IT</h2>
          <p>A structured operational model focused on resolution, prevention, and continuous improvement</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'center', marginBottom: 60 }}>
          {/* Left text */}
          <div style={{ flex: '1 1 400px' }} className="services-content" data-aos="fade-left" data-aos-duration="900">
            <span className="subtitle">Structured IT Operations</span>
            <p data-aos="fade-right" data-aos-duration="800">
              InfoManage delivers services through a structured operational model that focuses on
              resolving issues quickly, preventing problems before they occur, and planning
              improvements over time.
            </p>
            <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 20, fontSize: 14 }}>
              This structured approach ensures that IT environments remain reliable, secure, and
              aligned with business needs — without reactive fire-fighting.
            </p>
          </div>

          {/* Right image */}
          <div style={{ flex: '1 1 400px' }} className="services-image" data-aos="fade-left" data-aos-delay="200">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
              alt="IT operations management"
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
            {serviceCards.map((s, i) => (
              <SwiperSlide key={i}>
                <div className="service-card">
                  <div className="icon-box"><i className={`bi ${s.icon}`} /></div>
                  <Link to="/contact" className="arrow-link"><i className="bi bi-arrow-right" /></Link>
                  <div>
                    <h4>{s.title}</h4>
                    <p style={{ marginBottom: 12 }}>{s.desc}</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {s.bullets.map((b, j) => (
                        <li key={j} style={{ fontSize: 12, color: '#666', padding: '3px 0', display: 'flex', gap: 6, alignItems: 'flex-start' }}>
                          <i className="bi bi-check2" style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />{b}
                        </li>
                      ))}
                    </ul>
                    <div className="service-number">{s.num}</div>
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
  );
}
