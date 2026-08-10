import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    q: 'What makes InfoManage different from other IT providers?',
    a: 'Rather than billing by the hour when something breaks, InfoManage operates as a proactive partner using a structured service model. We monitor, maintain, and continuously improve your environment under a fixed service plan — eliminating surprise invoices and reactive-only support.',
  },
  {
    q: 'Do you support businesses in our industry?',
    a: 'InfoManage serves organizations across a wide range of industries including financial services, legal, healthcare, media, real estate, and manufacturing. Our service plans scale to fit environments of varying size and complexity.',
  },
  {
    q: 'How do you ensure data security?',
    a: 'Security management is integrated into every service plan. This includes endpoint protection, patch management, security monitoring, threat response, and security baseline management, backed by regular audits and compliance support.',
  },
  {
    q: 'What are your response times?',
    a: 'Standard support hours are Monday through Friday, 8AM to 6PM, with extended coverage on our Professional plan and 24×7 help desk availability on Enterprise. All requests are tracked and prioritized so critical issues are escalated immediately.',
  },
];

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <div className="faq-header" onClick={() => setOpen(!open)}>
        <span className="faq-question">{question}</span>
        <i className={`bi bi-plus-lg faq-toggle-icon${open ? ' open' : ''}`} />
      </div>
      {open && <div className="faq-body">{answer}</div>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 50px' }} data-aos="fade-up">
          <span style={{ display: 'block', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--accent)', marginBottom: 14 }}>
            FAQ
          </span>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: 'var(--heading-color)' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'flex-start' }}>
          <div style={{ flex: '2 1 460px' }} data-aos="fade-up" data-aos-delay="100">
            {faqData.map((item, i) => (
              <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>

          <div
            style={{
              flex: '1 1 260px',
              background: 'var(--light-bg)',
              borderRadius: 14,
              padding: '28px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              textAlign: 'left',
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <i className="bi bi-headset" style={{ fontSize: 64, color: 'var(--accent)', flexShrink: 0 }} />
            <div>
              <p style={{ fontWeight: 700, color: 'var(--heading-color)', marginBottom: 4, fontSize: 15 }}>Have more questions?</p>
              <p style={{ color: '#777', fontSize: 13, marginBottom: 14 }}>Our team is here to help.</p>
              <Link to="/contact" className="btn-pricing" style={{ display: 'inline-block', padding: '8px 22px', fontSize: 13 }}>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
