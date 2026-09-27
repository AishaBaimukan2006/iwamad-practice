type FooterProps = {
  githubUrl: string;
  email: string;
};

export default function Footer({ githubUrl, email }: FooterProps) {
  return (
    <footer className="links">
      <a href={`mailto:${email}`} className="highlight-link email-link">📧 Email Me</a>
      <a href={githubUrl} className="highlight-link github-link">💻 GitHub</a>
    </footer>
  );
}