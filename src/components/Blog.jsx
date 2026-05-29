const featuredPosts = [
  {
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    cat: 'IT Operations',
    date: 'May 2025',
    title: 'Why Reactive IT Support Is Costing Your Organization More Than You Think',
    excerpt: 'Organizations that rely on break-fix IT support often underestimate the true cost of downtime, lost productivity, and deferred maintenance. A proactive managed service model changes the economics entirely.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80',
    author: 'InfoManage Team',
    readTime: '5 min read',
  },
  {
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    cat: 'Cybersecurity',
    date: 'April 2025',
    title: 'Security Hygiene: The Foundation of a Defensible IT Environment',
    excerpt: 'Patch management, endpoint protection, and access control are not advanced security measures — they are the baseline. Organizations that skip foundational hygiene remain unnecessarily exposed to preventable threats.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    author: 'InfoManage Security Team',
    readTime: '7 min read',
  },
];

const recentPosts = [
  {
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&q=80',
    cat: 'Strategy',
    title: 'Building a Technology Roadmap That Aligns With Business Goals',
    author: 'InfoManage Advisory',
    date: 'March 2025',
  },
  {
    img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=200&q=80',
    cat: 'Cloud',
    title: 'Managing Microsoft 365 at Scale: What Most Organizations Get Wrong',
    author: 'InfoManage Cloud Team',
    date: 'March 2025',
  },
  {
    img: 'https://images.unsplash.com/photo-1554224311-9b945703d725?w=200&q=80',
    cat: 'Compliance',
    title: 'IT Compliance for Financial Services: A Practical Operational Approach',
    author: 'InfoManage Team',
    date: 'February 2025',
  },
  {
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200&q=80',
    cat: 'Healthcare IT',
    title: 'HIPAA and Managed IT: What Healthcare Organizations Must Know',
    author: 'InfoManage Team',
    date: 'January 2025',
  },
];

export default function Blog() {
  return (
    <section id="recent-posts" className="posts-section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>IT Insights</h2>
          <p>Practical guidance on managed IT operations, cybersecurity, and strategic technology management</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28 }}>
          {/* Left: featured posts */}
          <div style={{ flex: '2 1 500px' }}>
            {featuredPosts.map((post, i) => (
              <article key={i} className="featured-post" data-aos="fade-up" data-aos-delay={100 + i * 200}>
                <div className="feat-img">
                  <img src={post.img} alt={post.title} loading="lazy" />
                  <div className="feat-badge">Featured</div>
                </div>
                <div className="feat-content">
                  <div className="post-meta">
                    <span className="post-cat">{post.cat}</span>
                    <span className="post-date">{post.date}</span>
                  </div>
                  <h2 className="post-title"><a href="#">{post.title}</a></h2>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-footer">
                    <div className="author-row">
                      <img src={post.avatar} alt={post.author} className="author-avatar" />
                      <div>
                        <span className="author-name">{post.author}</span>
                        <span className="read-time">{post.readTime}</span>
                      </div>
                    </div>
                    <a href="#" className="read-more-link">Read More</a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right: recent posts */}
          <div style={{ flex: '1 1 280px' }}>
            {recentPosts.map((post, i) => (
              <article key={i} className="recent-post" data-aos="fade-up" data-aos-delay={200 + i * 50}>
                <div className="rec-img"><img src={post.img} alt={post.title} loading="lazy" /></div>
                <div className="rec-content">
                  <span className="rec-cat">{post.cat}</span>
                  <h3 className="rec-title"><a href="#">{post.title}</a></h3>
                  <div className="rec-meta">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
