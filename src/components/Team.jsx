const members = [
  {
    name: 'Senior Network Engineer',
    role: 'Infrastructure & Network Operations',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    socials: ['bi-linkedin', 'bi-envelope'],
    bio: 'Manages complex network architectures and ensures high-availability infrastructure for client environments across multi-site deployments.',
  },
  {
    name: 'IT Service Desk Lead',
    role: 'End-User Support Operations',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    socials: ['bi-linkedin', 'bi-envelope'],
    bio: 'Leads the help desk team delivering responsive end-user support while maintaining ITSM discipline and service quality standards.',
  },
  {
    name: 'Security Operations Analyst',
    role: 'Cybersecurity & Compliance',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    socials: ['bi-linkedin', 'bi-envelope'],
    bio: 'Monitors client environments for threats, manages security tools, and ensures compliance with industry security frameworks.',
  },
  {
    name: 'Systems Administrator',
    role: 'Server & Cloud Infrastructure',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    socials: ['bi-linkedin', 'bi-envelope'],
    bio: 'Administers on-premises and cloud server infrastructure, managing patching, backups, and performance optimization for clients.',
  },
  {
    name: 'vCTO Advisor',
    role: 'Strategic Technology Leadership',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    socials: ['bi-linkedin', 'bi-envelope'],
    bio: 'Provides executive-level technology guidance helping organizations align IT investments with long-term business objectives.',
  },
  {
    name: 'Cloud & Infrastructure Engineer',
    role: 'Microsoft 365 & Azure Operations',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    socials: ['bi-linkedin', 'bi-envelope'],
    bio: 'Specializes in Microsoft cloud environments, managing Azure infrastructure, M365 administration, and hybrid deployments.',
  },
  {
    name: 'Client Success Manager',
    role: 'Account Management & QBRs',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    socials: ['bi-linkedin', 'bi-envelope'],
    bio: 'Manages client relationships, conducts quarterly business reviews, and ensures service delivery aligns with each organization\'s goals.',
  },
  {
    name: 'Monitoring & NOC Technician',
    role: 'Network Operations Center',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    socials: ['bi-linkedin', 'bi-envelope'],
    bio: 'Monitors client infrastructure around the clock, responds to alerts, and escalates issues to ensure minimal disruption.',
  },
];

function TeamCard({ member, delay }) {
  return (
    <div data-aos="fade-up" data-aos-delay={delay} style={{ flex: '1 1 220px', maxWidth: 280 }}>
      <div className="team-card">
        <div className="img-wrapper">
          <img src={member.img} alt={member.name} />
          <div className="social-links">
            {member.socials.map((s, i) => (
              <a key={i} href="#"><i className={`bi ${s}`} /></a>
            ))}
          </div>
        </div>
        <div className="card-content">
          <h4>{member.name}</h4>
          <span className="position">{member.role}</span>
          <p>{member.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Our Team</h2>
          <p>Experienced IT professionals managing your environment with operational discipline and accountability</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', marginBottom: 24 }}>
          {members.slice(0, 4).map((m, i) => <TeamCard key={i} member={m} delay={200 + i * 100} />)}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
          {members.slice(4).map((m, i) => <TeamCard key={i} member={m} delay={200 + i * 100} />)}
        </div>
      </div>
    </section>
  );
}
