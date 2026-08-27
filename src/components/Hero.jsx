

const Hero = () => {
  return (
    <section id="hero" className="section" style={styles.section}>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <p style={styles.greeting}>Hi, my name is</p>
          <h1 style={styles.name}>Natthawut Wanma.</h1>
          <h2 style={styles.subtitle}>Computer Science Student | Full Stack Developer</h2>
          <p style={styles.description}>
            4th-year Computer Science student at Naresuan University seeking a Software Developer or Full Stack Developer internship. I build web applications with React, Next.js, Node.js, and PostgreSQL, with a focus on full-stack development and database-backed application workflows.
          </p>
          <div style={styles.actions}>
            <a href="https://github.com/Nokpednam" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub ↗</a>
          </div>
        </div>
        <div style={styles.imageContainer}>
          <div style={styles.imageWrapper}>
            <img src="/profile.jpg" alt="Natthawut Wanma" style={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '70px',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  greeting: {
    color: 'var(--accent)',
    fontFamily: 'monospace',
    marginBottom: '1rem',
  },
  name: {
    fontSize: 'clamp(40px, 6vw, 60px)',
    fontWeight: '700',
    color: 'var(--text-main)',
    margin: 0,
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: 'clamp(30px, 4vw, 40px)',
    fontWeight: '700',
    color: 'var(--text-secondary)',
    margin: '0 0 1.5rem 0',
    letterSpacing: '-0.02em',
  },
  description: {
    color: 'var(--text-tertiary)',
    maxWidth: '540px',
    marginBottom: '3rem',
    fontSize: '1.125rem',
    lineHeight: '1.6',
  },
  actions: {
    display: 'flex',
    gap: '1rem',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: '100%',
    maxWidth: '300px',
    aspectRatio: '1',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '2px solid var(--border)',
    boxShadow: '0 0 20px rgba(16, 185, 129, 0.1)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }
};

export default Hero;
