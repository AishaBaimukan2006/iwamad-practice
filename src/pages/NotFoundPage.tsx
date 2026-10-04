import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div style={{textAlign: 'center'}}>
      <h2>404 - Страница не найдена</h2>
      <Link to="/" style={{color: '#007bff', textDecoration: 'underline'}}>Вернуться на главную</Link>
    </div>
  );
}