import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const industries = [
  { label: 'Financial Services', icon: 'bi-bank', desc: 'Banks, credit unions, and investment firms requiring strict compliance and uptime.' },
  { label: 'Legal', icon: 'bi-briefcase', desc: 'Law firms and legal departments with sensitive data security and confidentiality needs.' },
  { label: 'Healthcare', icon: 'bi-heart-pulse', desc: 'Medical practices and health organizations with HIPAA-compliant IT requirements.' },
  { label: 'Media & Advertising', icon: 'bi-broadcast', desc: 'Creative agencies and media companies running demanding production environments.' },
  { label: 'Real Estate', icon: 'bi-building', desc: 'Brokerages and property management firms needing reliable, mobile-ready IT.' },
  { label: 'Manufacturing', icon: 'bi-gear-fill', desc: 'Facilities with operational technology and systems requiring around-the-clock support.' },
  { label: 'Non-Profit', icon: 'bi-gift', desc: 'Mission-driven organizations maximizing community impact through cost-effective IT.' },
  { label: 'Technology', icon: 'bi-cpu', desc: 'Tech companies that need a trusted IT partner to support their growing infrastructure.' },
];

export default function Clients() {
  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Industries We Serve</h2>
          <p>Trusted IT management across a wide range of sectors and organization sizes</p>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop
          speed={700}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            576: { slidesPerView: 2, spaceBetween: 24 },
            768: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
        >
          {industries.map((ind, i) => (
            <SwiperSlide key={i}>
              <div className="ind-card">
                <div className="ind-icon-circle">
                  <i className={`bi ${ind.icon}`} />
                </div>
                <h5>{ind.label}</h5>
                <p>{ind.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
