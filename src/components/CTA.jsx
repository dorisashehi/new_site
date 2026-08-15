import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const testimonials = [
  {
    initials: 'DO',
    quote: 'InfoManage feels like an extension of our own team. Every ticket gets solved fast, and nothing falls through the cracks.',
    role: 'Director of Operations',
    industry: 'Financial Services',
  },
  {
    initials: 'ITM',
    quote: 'They caught a security gap before it became a real problem. That kind of proactive attention is rare.',
    role: 'IT Manager',
    industry: 'Healthcare',
  },
  {
    initials: 'FM',
    quote: 'Our office move could have been a nightmare. InfoManage planned every cable and connection ahead of time, so we were up and running day one.',
    role: 'Facilities Manager',
    industry: 'Real Estate',
  },
  {
    initials: 'VP',
    quote: "Response times are fast, and it's always the same technicians—nobody makes us re-explain the problem.",
    role: 'VP of Technology',
    industry: 'Manufacturing',
  },
  {
    initials: 'OD',
    quote: 'Flat monthly pricing means no surprise invoices—we finally know what IT actually costs us each month.',
    role: 'Operations Director',
    industry: 'Legal Services',
  },
];

export default function CTA() {
  return (
    <section id="call-to-action" className="mit-dark-section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 44px' }} data-aos="fade-up">
          <span className="mit-split-label" style={{ textAlign: 'center' }}>Client Relationships</span>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: '#fff' }}>
            The Trust We&apos;ve Earned, One Client at a Time
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop
            speed={600}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={24}
            breakpoints={{
              320: { slidesPerView: 1, slidesPerGroup: 1 },
              768: { slidesPerView: 2, slidesPerGroup: 2 },
              992: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
            style={{ paddingBottom: 48 }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div
                  style={{
                    height: '100%',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: 14,
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                    <div style={{ display: 'flex', gap: 4 }}>
                      {[1, 2, 3, 4, 5].map((s) => (
                        <i key={s} className="bi bi-star-fill" style={{ color: '#ffc107', fontSize: 13 }} />
                      ))}
                    </div>
                    <i
                      className="bi bi-quote"
                      style={{ fontSize: 38, color: 'var(--accent)', opacity: 0.35, lineHeight: 1 }}
                    />
                  </div>
                  <p
                    style={{
                      color: 'rgba(255,255,255,0.88)',
                      fontSize: 15,
                      lineHeight: 1.7,
                      fontStyle: 'italic',
                      marginBottom: 24,
                      flexGrow: 1,
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: 'rgba(26, 108, 181, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: 13,
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div style={{ color: '#fff', fontSize: 13, fontWeight: 700 }}>{t.role}</div>
                      <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12 }}>{t.industry}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
