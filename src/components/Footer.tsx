type FooterProps = {
  githubUrl: string;
  email: string;
};

export default function Footer({ githubUrl, email }: FooterProps) {
  return (
    <footer className="links" style={{ borderTop: '2px solid var(--color-border)', paddingTop: '15px', marginTop: '30px', textAlign: 'center' }}>
      <div style={{ marginBottom: '10px' }}>
        <a href={`mailto:${email}`} className="highlight-link email-link" style={{ marginRight: '15px' }}>📧 Email Me</a>
        <a href={githubUrl} className="highlight-link github-link">💻 GitHub</a>
      </div>
      <p style={{ color: 'var(--color-text-secondary)' }}>© 2026 Aisha's Portfolio</p>
    </footer>
  );
}