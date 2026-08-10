import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

const slides = [
  {
    img: '/images/home/hero-slide-1.jpg',
    title: 'Reliable Infrastructure. Zero Guesswork.',
    text: 'From server rooms to network closets, InfoManage designs, monitors, and maintains the infrastructure your business runs on.',
    subtext: 'Proactive maintenance and 24/7 monitoring keep your environment stable, secure, and ready to scale.',
  },
  {
    img: '/images/home/hero-slide-2.jpg',
    title: 'Every Team Member, Fully Supported.',
    text: 'Unlimited help desk support keeps your people productive — from onboarding to everyday troubleshooting.',
    subtext: 'Experienced technicians who know your environment resolve issues fast, so your team stays focused.',
  },
  {
    img: '/images/home/hero-slide-3.jpg',
    title: 'Always Watching. Always Ready.',
    text: 'Round-the-clock monitoring and alert response mean issues are caught and resolved before they touch your business.',
    subtext: 'Global visibility, local support — wherever your organization operates.',
  },
  {
    img: '/images/home/hero-slide-4.jpg',
    title: 'Security Built Into Every Layer.',
    text: 'Endpoint protection, threat monitoring, and structured governance keep your systems — and your data — protected.',
    subtext: "Security isn't an add-on. It's built into every service plan, every day.",
  },
  {
    img: '/images/home/hero-slide-5.jpg',
    title: 'One Partner for Every Endpoint.',
    text: 'Laptops, phones, and everything in between — InfoManage manages your entire device fleet.',
    subtext: 'So your team can focus on the work, not the tech.',
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  return (
    <section id="hero" className="hero-section">
      <div className="hero-info">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 50, padding: '6px 18px', marginBottom: 24 }}>
            <i className="bi bi-calendar-check" style={{ color: 'var(--accent)', fontSize: 14 }} />
            <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 13, fontWeight: 500 }}>Serving organizations since 1995</span>
          </div>
          <h2 key={`title-${active}`} style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            {slide.title}
          </h2>
          <p key={`text-${active}`}>
            {slide.text}
          </p>
          <p key={`subtext-${active}`} style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', marginTop: -16, marginBottom: 32 }}>
            {slide.subtext}
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
        onSlideChange={swiper => setActive(swiper.realIndex)}
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <img src={s.img} alt={s.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
