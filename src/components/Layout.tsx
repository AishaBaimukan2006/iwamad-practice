import { NavLink, Outlet } from 'react-router';
import { useLikes } from '../context/LikesContext';
import logo from '../assets/logo.svg'; // Импортируем логотип
import './Layout.css'; 

export default function Layout() {
  const { likes } = useLikes();

  return (
    <div style={{ fontFamily: 'sans-serif', margin: '0 auto', maxWidth: '800px', padding: '20px' }}>
      
      {/* Используем класс site-header для адаптивности (mobile-first) */}
      <header className="site-header">
        
        {/* Блок с логотипом и названием блога (как в макете SIS 2) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={logo} alt="" width={32} height={32} />
          <span style={{ fontWeight: 'bold' }}>My Dev Blog</span>
        </div>

        {/* Ваша навигация с вашими активными классами */}
        <nav style={{ display: 'flex', gap: '20px' }}>
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "link"}>Home</NavLink>
          <NavLink to="/skills" className={({ isActive }) => isActive ? "active-link" : "link"}>Skills</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : "link"}>Contact</NavLink>
        </nav>

        {/* Ваш счетчик лайков */}
        <div style={{ fontWeight: 'bold' }}>Likes: ♥ {likes}</div>
      </header>
      
      {/* Оставляем ваш main с minHeight */}
      <main style={{ minHeight: '60vh' }}>
        <Outlet />
      </main>

      {/* Оставляем ваш уникальный footer! */}
      <footer style={{ borderTop: '2px solid var(--color-border)', paddingTop: '15px', marginTop: '30px', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
        <p>© 2026 Aisha's Portfolio</p>
      </footer>
    </div>
  );
}