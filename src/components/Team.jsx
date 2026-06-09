const member = {
  name: 'Senior Network Engineer',
  role: 'Infrastructure & Network Operations',
  img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
  socials: [
    { icon: 'bi-linkedin', href: '#' },
    { icon: 'bi-envelope', href: '#' },
  ],
  bio: 'Manages complex network architectures and ensures high-availability infrastructure for client environments across multi-site deployments.',
  skills: ['Network Architecture', 'Infrastructure Design', 'Multi-site Deployments', 'High Availability'],
};

export default function Team() {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Our Team</h2>
          <p>Experienced IT professionals managing your environment with operational discipline and accountability</p>
        </div>

        <div className="team-single-wrap" data-aos="fade-up" data-aos-delay="150">
          <div className="team-single-card">
            <div className="team-single-img">
              <img src={member.img} alt={member.name} />
            </div>
            <div className="team-single-info">
              <span className="team-single-role">{member.role}</span>
              <h3>{member.name}</h3>
              <p>{member.bio}</p>
              <div className="team-single-skills">
                {member.skills.map((s, i) => (
                  <span key={i} className="team-skill-tag">{s}</span>
                ))}
              </div>
              <div className="team-single-socials">
                {member.socials.map((s, i) => (
                  <a key={i} href={s.href} className="team-social-btn">
                    <i className={`bi ${s.icon}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
