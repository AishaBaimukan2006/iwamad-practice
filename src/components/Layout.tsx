import { NavLink, Outlet } from 'react-router';
import { useLikes } from '../context/LikesContext';
import './Layout.css'; 

export default function Layout() {
  const { likes } = useLikes();

  return (
    <div style={{ fontFamily: 'sans-serif', margin: '0 auto', maxWidth: '800px', padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #eee', paddingBottom: '15px', marginBottom: '30px' }}>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "link"}>Home</NavLink>
          <NavLink to="/skills" className={({ isActive }) => isActive ? "active-link" : "link"}>Skills</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : "link"}>Contact</NavLink>
        </nav>
        <div style={{ fontWeight: 'bold' }}>Likes: ♥ {likes}</div>
      </header>
      
      <main style={{ minHeight: '60vh' }}>
        <Outlet />
      </main>

      <footer style={{ borderTop: '2px solid #eee', paddingTop: '15px', marginTop: '30px', textAlign: 'center', color: '#666' }}>
        <p>© 2026 Aisha's Portfolio</p>
      </footer>
    </div>
  );
}