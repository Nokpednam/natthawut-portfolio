

const Projects = () => {
  const projects = [
    {
      title: "Buzzly Marketing Platform",
      date: "Feb 2026 - Jun 2026",
      description: "Marketing management web application for campaign analytics, customer profiles, and loyalty workflows. Includes points, tiers, missions, rewards, multi-role interfaces, Supabase RLS, and transactional PostgreSQL RPCs for reward redemption.",
      tech: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "RLS", "Vitest", "Playwright", "GitHub Actions"],
      github: "https://github.com/Nokpednam/buzzly-marketing-platform",
      demo: "https://buzzly-marketing-platform.vercel.app/"
    },
    {
      title: "MeQ — Basketball Court Queue & Match Management System",
      date: "2026",
      description: "Basketball court queue and match management application for 3x3 and 5x5 teams, including court queues, check-in, match results, and player statistics. LINE Login is implemented, while LINE Messaging notifications for queue and match events are currently in development.",
      tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "RLS", "PostgreSQL RPC", "GitHub Actions", "Vercel"],
      github: "https://github.com/Nokpednam/MeQ-web-app",
      demo: "https://meq-starter-v01.vercel.app/"
    },
    {
      title: "NU SEED — Event & Participant Management System",
      date: "Nov 2025 - Feb 2026",
      description: "Web application for managing university events, tasks, participant teams, documents, and feedback across Executive, Employee, and Participant portals. Backed by a 26-table PostgreSQL relational schema with event, task, team, document, and participant relationships.",
      tech: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Multer", "Docker"],
      github: "https://github.com/Nokpednam/nu-seed-facility-management",
      demo: "https://nu-seed-facility-management.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="section container">
      <h2 className="section-title"><span>01.</span> Some Things I've Built</h2>
      <div style={styles.grid}>
        {projects.map((project, i) => (
          <div key={i} style={styles.card} className="project-card">
            <div style={styles.header}>
              <h3 style={styles.cardTitle}>{project.title}</h3>
              <span style={styles.date}>{project.date}</span>
            </div>
            <p style={styles.cardDescription}>{project.description}</p>
            <div style={styles.techList}>
              {project.tech.map((tech, j) => (
                <span key={j} style={styles.techItem}>{tech}</span>
              ))}
            </div>
            <div style={styles.links}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.link}>GitHub ↗</a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" style={styles.link}>Live Demo ↗</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border)',
    borderRadius: '0.5rem',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s ease, border-color 0.2s ease',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontSize: '1.25rem',
    color: 'var(--text-main)',
  },
  date: {
    fontFamily: 'monospace',
    fontSize: '0.85rem',
    color: 'var(--text-tertiary)',
    marginTop: '0.25rem',
  },
  cardDescription: {
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
    marginBottom: '1.5rem',
    lineHeight: '1.6',
    flex: 1,
  },
  techList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  },
  techItem: {
    fontFamily: 'monospace',
    fontSize: '0.75rem',
    color: 'var(--accent)',
    background: 'var(--accent-dim)',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    fontSize: '0.875rem',
    fontWeight: '500',
  }
};

export default Projects;
