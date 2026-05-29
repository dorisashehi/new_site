import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const industries = [
  { label: 'Financial Services', icon: 'bi-bank' },
  { label: 'Legal', icon: 'bi-balance-scale' },
  { label: 'Healthcare', icon: 'bi-heart-pulse' },
  { label: 'Media & Advertising', icon: 'bi-broadcast' },
  { label: 'Real Estate', icon: 'bi-building' },
  { label: 'Manufacturing', icon: 'bi-gear-fill' },
  { label: 'Non-Profit', icon: 'bi-hand-heart' },
  { label: 'Technology', icon: 'bi-cpu' },
];

export default function Clients() {
  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: 2, margin: 0 }}>Industries We Serve</p>
        </div>
        <Swiper
          modules={[Autoplay]}
          loop
          speed={700}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            480: { slidesPerView: 3, spaceBetween: 30 },
            640: { slidesPerView: 4, spaceBetween: 40 },
            992: { slidesPerView: 6, spaceBetween: 40 },
          }}
        >
          {industries.map((ind, i) => (
            <SwiperSlide key={i}>
              <div style={{ textAlign: 'center', padding: '12px 0' }}>
                <i className={`bi ${ind.icon}`} style={{ fontSize: 30, color: '#aab8cc', display: 'block', marginBottom: 8 }} />
                <span style={{ fontSize: 12, color: '#999', fontWeight: 600 }}>{ind.label}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
