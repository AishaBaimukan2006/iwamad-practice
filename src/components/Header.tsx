type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <header style={{ textAlign: 'center', paddingTop: '60px', paddingBottom: '20px' }}>
      <h1>{title}</h1>
    </header>
  );
}