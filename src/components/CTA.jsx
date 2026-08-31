import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";

const avatarPhotos = [
  "/images/avatars/client-1.jpg",
  "/images/avatars/client-2.jpg",
  "/images/avatars/client-3.jpg",
  "/images/avatars/client-4.jpg",
  "/images/avatars/client-5.jpg",
];

const testimonials = [
  {
    quote:
      "InfoManage feels like an extension of our own team — every ticket gets solved fast, systems stay patched, and nothing falls through the cracks.",
    role: "Director of Operations",
    industry: "Financial Services",
    rating: 5,
  },
  {
    quote:
      "Response times are fast, and it's always the same technicians — nobody makes us re-explain the problem.",
    role: "IT Manager",
    industry: "Healthcare",
    rating: 4.5,
  },
  {
    quote:
      "Our office move could have been a nightmare. InfoManage planned every cable, connection, and workstation ahead of time, so we were fully operational on day one.",
    role: "Facilities Manager",
    industry: "Real Estate",
    rating: 5,
  },
  {
    quote:
      "They ran our entire network buildout for the new facility — cabling, servers, wireless — and had us live two days ahead of schedule.",
    role: "Operations Manager",
    industry: "Manufacturing",
    rating: 4.5,
  },
  {
    quote:
      "They're not just our IT vendor — they sit in on our planning conversations and help shape our technology roadmap years out, not just fix what's broken today.",
    role: "Managing Partner",
    industry: "Legal Services",
    rating: 5,
  },
  {
    quote:
      "Flat monthly pricing and a team that understands our long-term goals — InfoManage feels like a genuine extension of our leadership team.",
    role: "Operations Director",
    industry: "Media",
    rating: 4.5,
  },
];

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  return (
    <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
      {Array.from({ length: fullStars }).map((_, s) => (
        <i
          key={s}
          className="bi bi-star-fill"
          style={{ color: "#ffc107", fontSize: 12 }}
        />
      ))}
      {hasHalf && (
        <span
          style={{
            position: "relative",
            display: "inline-block",
            width: 12,
            height: 12,
          }}
        >
          <i
            className="bi bi-star-fill"
            style={{
              position: "absolute",
              inset: 0,
              color: "rgba(255,255,255,0.25)",
              fontSize: 12,
            }}
          />
          <i
            className="bi bi-star-fill"
            style={{
              position: "absolute",
              inset: 0,
              display: "inline-block",
              width: "50%",
              overflow: "hidden",
              color: "#ffc107",
              fontSize: 12,
            }}
          />
        </span>
      )}
    </div>
  );
}

export default function CTA() {
  return (
    <section
      id="call-to-action"
      className="mit-dark-section"
      style={{ padding: "56px 0" }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            alignItems: "stretch",
          }}
        >
          {/* Left: eyebrow, headline, avatar stack */}
          <div
            style={{
              flex: "0 1 340px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRight: "1px solid rgba(255,255,255,0.12)",
              paddingRight: 32,
            }}
            data-aos="fade-up"
          >
            <span className="mit-split-label">CLIENT EXPERIENCE</span>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.3,
                marginBottom: 20,
              }}
            >
              Trusted for the Everyday, and the Critical
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ display: "flex" }}>
                {avatarPhotos.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #0d1e2e",
                      marginLeft: i === 0 ? 0 : -12,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: testimonial carousel */}
          <div
            style={{ flex: "1 1 500px", minWidth: 0 }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              loop
              speed={900}
              autoplay={{ delay: 9000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              slidesPerView={1}
              slidesPerGroup={1}
              spaceBetween={20}
              breakpoints={{
                320: { slidesPerView: 1, slidesPerGroup: 1 },
                768: { slidesPerView: 2, slidesPerGroup: 1 },
                992: { slidesPerView: 3, slidesPerGroup: 1 },
              }}
              style={{ paddingBottom: 44 }}
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <div
                    style={{
                      height: "100%",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(26, 108, 181, 0.35)",
                      borderRadius: 12,
                      padding: "24px 22px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <StarRating rating={t.rating} />
                    <p
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: 13.5,
                        lineHeight: 1.7,
                        marginBottom: 18,
                        flexGrow: 1,
                      }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <i
                        className="bi bi-quote"
                        style={{ color: "var(--accent)", fontSize: 16 }}
                      />
                      <div>
                        <div
                          style={{
                            color: "#fff",
                            fontSize: 13,
                            fontWeight: 700,
                          }}
                        >
                          {t.role}
                        </div>
                        <div
                          style={{
                            color: "rgba(255,255,255,0.5)",
                            fontSize: 11.5,
                          }}
                        >
                          {t.industry}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
