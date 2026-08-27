

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Web",
      skills: ["TypeScript", "JavaScript", "HTML/CSS", "React", "Next.js", "Node.js", "Express"]
    },
    {
      title: "Database & Backend",
      skills: ["PostgreSQL", "Supabase"]
    },
    {
      title: "Testing & Development",
      skills: ["Vitest", "Playwright", "GitHub Actions", "Git", "GitHub", "Docker", "Vercel"]
    },
    {
      title: "Other",
      skills: ["Dart", "Flutter", "C++", "Swift", "YOLOv11"]
    }
  ];

  return (
    <section id="skills" className="section container">
      <h2 className="section-title"><span>02.</span> Skills & Tools</h2>
      <div style={styles.grid}>
        {skillCategories.map((category, i) => (
          <div key={i} style={styles.category}>
            <h3 style={styles.categoryTitle}>{category.title}</h3>
            <ul style={styles.list}>
              {category.skills.map((skill, j) => (
                <li key={j} style={styles.listItem}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
  },
  category: {
    display: 'flex',
    flexDirection: 'column',
  },
  categoryTitle: {
    fontSize: '1.1rem',
    color: 'var(--text-main)',
    marginBottom: '1rem',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid var(--border)',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  listItem: {
    position: 'relative',
    paddingLeft: '1.5rem',
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
  }
};

export default Skills;
