const steps = [
  {
    icon: 'bi-display',
    title: 'Operate',
    desc: 'We manage daily IT operations, ensuring systems remain reliable and users stay productive.',
    points: ['Help desk & end-user support', 'System monitoring & alerts', 'Incident response & escalation'],
    num: '01',
  },
  {
    icon: 'bi-arrow-up-circle',
    title: 'Improve',
    desc: 'We continuously enhance infrastructure through maintenance, optimization, and security improvements.',
    points: ['Patch & vulnerability management', 'Security hardening', 'Performance optimization'],
    num: '02',
  },
  {
    icon: 'bi-compass',
    title: 'Plan',
    desc: 'We guide long-term technology decisions through strategic planning and advisory.',
    points: ['Technology roadmaps', 'Lifecycle planning', 'vCTO advisory & budget guidance'],
    num: '03',
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="howwework-section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>How We Work With Clients</h2>
          <p>InfoManage works as a long-term operational partner, managing technology environments while helping organizations plan and improve their infrastructure over time</p>
        </div>

        <div className="hww-grid">
          {steps.map((s, i) => (
            <div key={i} className="hww-card" data-aos="fade-up" data-aos-delay={150 + i * 100}>
              <div className="hww-num">{s.num}</div>
              <div className="hww-icon-wrap">
                <i className={`bi ${s.icon}`} />
              </div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
              <ul className="hww-points">
                {s.points.map((p, j) => (
                  <li key={j}><i className="bi bi-check2-circle" />{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="hww-footer" data-aos="fade-up" data-aos-delay="400">
          This partnership approach allows organizations to benefit from both operational management and strategic technology leadership.
        </p>
      </div>
    </section>
  );
}
