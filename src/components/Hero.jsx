import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

const slides = [
  '/images/home/hero-slide-1.jpg',
  '/images/home/hero-slide-2.jpg',
  '/images/home/hero-slide-3.jpg',
  '/images/home/hero-slide-4.jpg',
  '/images/home/hero-slide-5.jpg',
];

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-info">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 50, padding: '6px 18px', marginBottom: 24 }}>
            <i className="bi bi-calendar-check" style={{ color: 'var(--accent)', fontSize: 14 }} />
            <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 13, fontWeight: 500 }}>Serving organizations since 1995</span>
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Structured IT Management for Businesses That Depend on Technology
          </h2>
          <p>
            InfoManage manages day-to-day IT operations while helping organizations plan, secure,
            and scale their technology environments.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', marginTop: -16, marginBottom: 32 }}>
            Unlimited operational support, proactive monitoring, and strategic technology guidance
            delivered through a governance-driven service model.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#about" style={{
              display: 'inline-block', padding: '14px 36px', borderRadius: 50, fontWeight: 600,
              fontSize: 15, border: '2px solid rgba(255,255,255,0.5)', color: '#fff', transition: '0.3s'
            }}
              onMouseOver={e => { e.target.style.borderColor = '#fff'; e.target.style.background = 'rgba(255,255,255,0.1)'; }}
              onMouseOut={e => { e.target.style.borderColor = 'rgba(255,255,255,0.5)'; e.target.style.background = 'transparent'; }}>
              Request an IT Risk Assessment
            </a>
          </div>
        </div>
      </div>

      <Swiper
        className="hero-swiper"
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        navigation
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        speed={500}
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`slide ${i + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
