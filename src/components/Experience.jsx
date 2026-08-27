

const Experience = () => {
  const experiences = [
    {
      title: "Staff & Developer (ASCII ROBOT)",
      company: "Naresuan University Science Week",
      date: "2027",
      description: [
        "Actively participated and contributed across all 3 days of the event.",
        "Assembled robot cars and developed an interactive ASCII quiz game for student participants.",
        "Served as a dedicated staff member in the ASCII ROBOT room, explaining the mechanics of the ASCII quiz game.",
        "Supervised and guided participants on how to properly operate and interact with the robot cars."
      ],
      images: [
        "/activities/sciday-1.jpg",
        "/activities/sciday-2.jpg",
        "/activities/sciday-3.jpg",
        "/activities/sciday-4.jpg",
        "/activities/sciday-5.jpg",
        "/activities/sciday-6.jpg",
        "/activities/sciday-7.jpg",
        "/activities/sciday-8.jpg"
      ]
    },
    {
      title: "IT Support Staff",
      company: "Faculty of Science Student Association",
      date: "2024 - 2025",
      description: [
        "Managed comprehensive IT operations and provided end-to-end technical support for all student union events and administrative activities.",
        "Resolved hardware, software, and network issues promptly to ensure the seamless execution of faculty-wide projects and daily operations."
      ],
      images: [
        "/activities/smo-1.jpg",
        "/activities/smo-2.jpg",
        "/activities/smo-3.jpg",
        "/activities/smo-4.jpg",
        "/activities/smo-5.jpg",
        "/activities/smo-6.jpg",
        "/activities/smo-7.jpg",
        "/activities/smo-8.jpg",
      ]
    },
    {
      title: "IT Support Staff",
      company: "PACCON 2026 (International Conference)",
      date: "2026",
      description: [
        "Directed the installation and configuration of IT infrastructure and audio-visual equipment for a dedicated session room at a large-scale international chemistry conference.",
        "Delivered real-time technical troubleshooting and support for international speakers, ensuring zero downtime and smooth operations throughout the event."
      ],
      images: [
        "/activities/paccon.jpg"
      ]
    },
    {
      title: "Competitor",
      company: "NU Idea Pitch Day 2024 (Empathetic Support Solutions)",
      date: "2024",
      description: [
        "Co-designed a conceptual Social Enterprise application aimed at matching volunteers with marginalized groups, including wheelchair users, the elderly, and visually impaired individuals.",
        "Formulated a strategic 4-phase business roadmap to ensure long-term financial sustainability and nationwide service scalability."
      ],
      link: "https://canva.link/m3alr3nhajfzlvr",
      linkText: "View Presentation Slides ↗",
      images: [
        "/activities/pitch-1.jpg",
        "/activities/pitch-2.jpg",
        "/activities/pitch-3.jpg"
      ]
    }
  ];

  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      company: "Faculty of Science, Naresuan University",
      date: "2023 - Present",
      description: []
    },
    {
      title: "High School Diploma (Science-Mathematics Program)",
      company: "Faktha Wittaya School",
      date: "2017 - 2023",
      description: []
    }
  ];

  return (
    <section id="experience" className="section container">
      <h2 className="section-title"><span>03.</span> Experience & Activities</h2>
      <div style={styles.grid}>
        <div style={styles.column}>
          <h3 style={styles.columnTitle}>Experience & Activities</h3>
          <div style={styles.timeline}>
            {experiences.map((exp, i) => (
              <div key={i} style={styles.item}>
                <div style={styles.date}>{exp.date}</div>
                <div style={styles.content}>
                  <h4 style={styles.title}>{exp.title}</h4>
                  <div style={styles.company}>{exp.company}</div>
                  <ul style={styles.list}>
                    {exp.description.map((desc, j) => (
                      <li key={j} style={styles.listItem}>{desc}</li>
                    ))}
                  </ul>
                  
                  {exp.link && (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" style={styles.externalLink}>
                      {exp.linkText}
                    </a>
                  )}

                  {exp.images && exp.images.length > 0 && (
                    <div style={styles.gallery}>
                      {exp.images.map((img, idx) => (
                        <div key={idx} style={styles.imageWrapper}>
                          <img 
                            src={img} 
                            alt={`${exp.company} activity ${idx + 1}`} 
                            style={styles.image}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.column}>
          <h3 style={styles.columnTitle}>Education</h3>
          <div style={styles.timeline}>
            {education.map((edu, i) => (
              <div key={i} style={styles.item}>
                <div style={styles.date}>{edu.date}</div>
                <div style={styles.content}>
                  <h4 style={styles.title}>{edu.title}</h4>
                  <div style={styles.company}>{edu.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '4rem',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  columnTitle: {
    fontSize: '1.25rem',
    color: 'var(--text-main)',
    marginBottom: '2rem',
    borderBottom: '1px solid var(--border)',
    paddingBottom: '0.75rem',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    paddingLeft: '1.25rem',
    borderLeft: '2px solid var(--border)',
    position: 'relative',
  },
  date: {
    fontFamily: 'monospace',
    fontSize: '0.85rem',
    color: 'var(--text-tertiary)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  title: {
    fontSize: '1.1rem',
    color: 'var(--text-main)',
    fontWeight: '600',
  },
  company: {
    color: 'var(--accent)',
    fontSize: '0.95rem',
    marginBottom: '0.5rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginTop: '0.5rem',
    marginBottom: '1rem',
  },
  listItem: {
    position: 'relative',
    paddingLeft: '1.5rem',
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
  externalLink: {
    display: 'inline-block',
    fontSize: '0.9rem',
    color: 'var(--accent)',
    marginBottom: '1rem',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
  },
  gallery: {
    display: 'flex',
    gap: '1rem',
    overflowX: 'auto',
    paddingBottom: '0.5rem',
    marginTop: '0.5rem',
    /* Hide scrollbar for cleaner look but keep functionality */
    scrollbarWidth: 'thin',
    scrollbarColor: 'var(--border) transparent',
  },
  imageWrapper: {
    flexShrink: 0,
    width: '200px',
    height: '140px',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    border: '1px solid var(--border)',
    background: 'var(--bg-tertiary)', // placeholder background
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  }
};

// Add a simple hover effect for images via global CSS or inline (harder inline, so let's rely on standard object-fit)
export default Experience;
