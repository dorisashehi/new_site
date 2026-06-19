import { useState } from 'react';
import { Link } from 'react-router-dom';

const tabs = [
  { id: 'general', label: 'General', icon: 'bi-question-circle' },
  { id: 'services', label: 'Services', icon: 'bi-gear' },
  { id: 'support', label: 'Support', icon: 'bi-headset' },
];

const faqData = {
  general: [
    {
      q: 'What is managed IT services?',
      a: 'Managed IT services means outsourcing your day-to-day technology management to a professional firm. InfoManage handles monitoring, maintenance, help desk support, security, and strategic planning — so your team can focus on the business, not the technology.',
    },
    {
      q: 'How is InfoManage different from a traditional IT company?',
      a: 'Rather than billing by the hour when something breaks, InfoManage operates as a proactive partner using a structured service model. We monitor, maintain, and continuously improve your environment under a fixed service plan — eliminating surprise invoices and reactive-only support.',
    },
    {
      q: 'What size organizations does InfoManage typically support?',
      a: 'InfoManage serves small to mid-market organizations across a wide range of industries including financial services, legal, healthcare, media, real estate, and manufacturing. Our service plans scale to fit environments of varying complexity.',
    },
  ],
  services: [
    {
      q: 'What is included in a managed IT service plan?',
      a: 'Our Professional plan includes unlimited remote help desk support, 24×7 monitoring, patch management, security hygiene, vendor management, and monthly operational reporting. Enterprise plans add on-site support and vCTO advisory. All plans have clearly defined scope with no hidden charges.',
    },
    {
      q: 'Do you offer cybersecurity services?',
      a: 'Yes. Security management is integrated into all service plans. This includes endpoint protection, patch management, security monitoring, threat response, and security baseline management. We also offer standalone security assessments and enhanced security coverage.',
    },
    {
      q: 'Can InfoManage support cloud environments?',
      a: 'Absolutely. InfoManage manages hybrid and cloud-based environments including Microsoft 365, Azure, and other cloud platforms. Cloud administration, licensing management, and cloud infrastructure oversight are included within our service plans.',
    },
  ],
  support: [
    {
      q: 'How do users submit support requests?',
      a: 'Users can submit requests via phone, email, or our support portal. All requests are tracked through our ITSM system with priority classification, ensuring critical issues are escalated immediately and routine requests are managed efficiently.',
    },
    {
      q: 'What are your support hours?',
      a: 'Standard support hours are Monday through Friday, 8AM to 6PM. Our Professional plan includes extended coverage, and our Enterprise plan includes 24×7 help desk availability. Emergency escalation paths are available across all plans.',
    },
    {
      q: 'Do you provide on-site support?',
      a: 'On-site support is included in our Enterprise plan and available as an add-on for Professional plan clients. We coordinate on-site visits for situations that cannot be resolved remotely, including hardware replacement and infrastructure installation.',
    },
  ],
};

function FaqItem({ num, question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <div className="faq-header" onClick={() => setOpen(!open)}>
        <span className="faq-num">{num}</span>
        <span className="faq-question">{question}</span>
        <i className={`bi bi-plus-lg faq-toggle-icon${open ? ' open' : ''}`} />
      </div>
      {open && <div className="faq-body">{answer}</div>}
    </div>
  );
}

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="section-title" data-aos="fade-up">
            <h2>FAQ</h2>
            <p>Common questions about managed IT services, service plans, and how InfoManage works</p>
          </div>

          <div className="faq-tabs" data-aos="fade-up" data-aos-delay="100">
            {tabs.map(tab => (
              <button key={tab.id} className={`faq-tab-btn${activeTab === tab.id ? ' active' : ''}`}
                onClick={() => setActiveTab(tab.id)}>
                <i className={`bi ${tab.icon}`} />{tab.label}
              </button>
            ))}
          </div>

          <div>
            {faqData[activeTab].map((item, i) => (
              <FaqItem key={`${activeTab}-${i}`} num={i + 1} question={item.q} answer={item.a} />
            ))}
          </div>

          <div className="faq-cta-wrapper" data-aos="fade-up" data-aos-delay="300">
            <p>Have a question not answered here? We&apos;re happy to help.</p>
            <Link to="/contact" className="btn-contact-support">Contact InfoManage</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
