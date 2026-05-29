import { useState } from 'react';

const contactCards = [
  { icon: 'bi-geo-alt', title: 'Location', text: 'New York Metro Area · Serving clients nationwide' },
  { icon: 'bi-envelope', title: 'Email', text: 'info@infomanage.com' },
  { icon: 'bi-telephone', title: 'Call', text: '+1 (800) 555-0195' },
  { icon: 'bi-clock', title: 'Business Hours', text: 'Mon–Fri: 8AM – 6PM · Enterprise: 24×7' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>Ready to improve your IT operations? Schedule a consultation to discuss your environment.</p>
        </div>

        {/* Pre-form CTA callout */}
        <div data-aos="fade-up" data-aos-delay="50" style={{
          background: 'var(--light-bg)', borderLeft: '4px solid var(--accent)',
          borderRadius: 8, padding: '20px 28px', marginBottom: 36, display: 'flex',
          alignItems: 'center', gap: 16, flexWrap: 'wrap'
        }}>
          <i className="bi bi-calendar2-check" style={{ fontSize: 32, color: 'var(--accent)', flexShrink: 0 }} />
          <div>
            <p style={{ fontWeight: 700, color: 'var(--heading-color)', margin: 0, fontSize: 17 }}>
              Ready to Improve Your IT Operations?
            </p>
            <p style={{ color: '#666', margin: '4px 0 0', fontSize: 14, lineHeight: 1.6 }}>
              Schedule a consultation to discuss your environment and learn how structured IT management
              can improve reliability, security, and operational efficiency.
            </p>
          </div>
        </div>

        <div className="contact-wrapper" data-aos="fade-up" data-aos-delay="100">
          {/* Map */}
          <div className="map-wrapper">
            <iframe
              title="InfoManage location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact right */}
          <div className="contact-right">
            <div className="contact-cards" data-aos="fade-up" data-aos-delay="300">
              {contactCards.map((c, i) => (
                <div key={i} className="contact-card">
                  <div className="c-icon"><i className={`bi ${c.icon}`} /></div>
                  <div>
                    <h4>{c.title}</h4>
                    <p>{c.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-form-wrap" data-aos="fade-up" data-aos-delay="400">
              <h3>Schedule a Consultation</h3>
              <p>Tell us about your environment and we will be in touch to discuss how InfoManage can help.</p>

              {sent && (
                <div style={{ background: '#0d6efd', color: '#fff', padding: '12px 16px', borderRadius: 8, marginBottom: 16, fontSize: 14 }}>
                  Thank you. We will contact you within one business day.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <input className="form-input" type="text" placeholder="Your Name" required
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  <input className="form-input" type="email" placeholder="Work Email" required
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="form-field">
                  <input className="form-input" type="text" placeholder="Organization Name" required
                    value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
                </div>
                <div className="form-field">
                  <textarea className="form-input" placeholder="Briefly describe your IT environment and what you are looking to improve..." required rows={5}
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ resize: 'none' }} />
                </div>
                <div className="form-actions">
                  <button type="submit" className="send-btn">Schedule Consultation</button>
                  <div className="social-row">
                    {['bi-linkedin', 'bi-twitter-x', 'bi-facebook', 'bi-envelope'].map((s, i) => (
                      <a key={i} href="#"><i className={`bi ${s}`} /></a>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
