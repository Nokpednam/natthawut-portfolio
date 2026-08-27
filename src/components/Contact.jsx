

const Contact = () => {
  return (
    <section id="contact" className="section container" style={styles.section}>
      <p style={styles.subtitle}>04. What's Next?</p>
      <h2 style={styles.title}>Get In Touch</h2>
      <p style={styles.description}>
        I'm currently looking for an internship opportunity to gain hands-on experience, adapt to new technologies, and drive impactful product development. Whether you have a question or just want to say hi, my inbox is always open!
      </p>

      <div style={styles.contactInfo}>
        <div style={styles.contactItem}>
          <span style={styles.contactLabel}>Email:</span> 
          <a href="mailto:riwza5656@gmail.com" style={styles.contactLink}>riwza5656@gmail.com</a>
        </div>
        <div style={styles.contactItem}>
          <span style={styles.contactLabel}>Phone:</span> 
          <a href="tel:+660951960377" style={styles.contactLink}>(+66) 095-196-0377</a>
        </div>
        <div style={styles.contactItem}>
          <span style={styles.contactLabel}>Location:</span> 
          <span style={styles.contactText}>Uttaradit, Thailand</span>
        </div>
      </div>

      <div style={styles.actions}>
        <a href="https://github.com/Nokpednam" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={styles.button}>
          GitHub Profile ↗
        </a>
      </div>
      
      <footer style={styles.footer}>
        <p>Built with React & Vite. Designed by Natthawut Wanma.</p>
      </footer>
    </section>
  );
};

const styles = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '10rem 0 5rem',
  },
  subtitle: {
    color: 'var(--accent)',
    fontFamily: 'monospace',
    marginBottom: '1rem',
  },
  title: {
    fontSize: 'clamp(40px, 5vw, 60px)',
    fontWeight: '700',
    color: 'var(--text-main)',
    marginBottom: '1.5rem',
  },
  description: {
    color: 'var(--text-secondary)',
    maxWidth: '540px',
    marginBottom: '2.5rem',
    fontSize: '1.125rem',
    lineHeight: '1.6',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '3.5rem',
    background: 'var(--bg-secondary)',
    padding: '2rem 3rem',
    borderRadius: '0.75rem',
    border: '1px solid var(--border)',
    textAlign: 'left',
  },
  contactItem: {
    display: 'flex',
    gap: '1rem',
    fontSize: '1.1rem',
  },
  contactLabel: {
    color: 'var(--text-tertiary)',
    fontFamily: 'monospace',
    minWidth: '80px',
  },
  contactLink: {
    color: 'var(--text-main)',
    textDecoration: 'none',
  },
  contactText: {
    color: 'var(--text-main)',
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '8rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1rem',
  },
  footer: {
    color: 'var(--text-tertiary)',
    fontSize: '0.85rem',
    fontFamily: 'monospace',
    lineHeight: '1.5',
  }
};

export default Contact;
