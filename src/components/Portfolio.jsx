import { useState } from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    title: 'Financial Services IT Management',
    sub: 'Compliance-driven infrastructure oversight',
    tags: ['Financial', 'Compliance'],
    filter: 'Financial',
    img: 'https://images.unsplash.com/photo-1554224311-9b945703d725?w=600&q=80',
  },
  {
    title: 'Legal Firm Technology Operations',
    sub: 'Secure document and communication systems',
    tags: ['Legal', 'Security'],
    filter: 'Legal',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
  },
  {
    title: 'Healthcare IT Infrastructure',
    sub: 'HIPAA-compliant managed IT environment',
    tags: ['Healthcare', 'Compliance'],
    filter: 'Healthcare',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
  },
  {
    title: 'Media & Advertising Technology',
    sub: 'High-availability creative workstation support',
    tags: ['Media', 'Support'],
    filter: 'Media',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
  },
  {
    title: 'Real Estate Operations',
    sub: 'Reliable systems for property management platforms',
    tags: ['Real Estate', 'Infrastructure'],
    filter: 'Real Estate',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
  },
  {
    title: 'Manufacturing IT Systems',
    sub: 'Network and endpoint management for production floors',
    tags: ['Manufacturing', 'Network'],
    filter: 'Manufacturing',
    img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80',
  },
];

const filters = ['All', 'Financial', 'Legal', 'Healthcare', 'Media', 'Real Estate', 'Manufacturing'];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? items : items.filter(i => i.filter === active);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Industries</h2>
          <p>Long-term partnerships with organizations that depend on stable, secure technology operations</p>
        </div>

        <ul className="portfolio-filters" data-aos="fade-up" data-aos-delay="200">
          {filters.map(f => (
            <li key={f} className={active === f ? 'active' : ''} onClick={() => setActive(f)}>{f}</li>
          ))}
        </ul>

        <div className="portfolio-grid" data-aos="fade-up" data-aos-delay="300">
          {visible.map((item, i) => (
            <div key={i} className="portfolio-card">
              <div className="portfolio-img">
                <img src={item.img} alt={item.title} />
                <div className="portfolio-overlay">
                  <Link to="/contact" onClick={e => e.preventDefault()} style={{ pointerEvents: 'none' }}><i className="bi bi-building" /></Link>
                  <Link to="/contact"><i className="bi bi-arrow-right" /></Link>
                </div>
              </div>
              <div className="portfolio-info">
                <h4>{item.title}</h4>
                <p>{item.sub}</p>
                <div className="portfolio-tags">
                  {item.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }} data-aos="fade-up" data-aos-delay="400">
          <Link to="/contact#contact" className="btn-learn-more">Schedule an Industry Consultation</Link>
        </div>
      </div>
    </section>
  );
}
