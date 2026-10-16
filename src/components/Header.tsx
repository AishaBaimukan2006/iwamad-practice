import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';
import logo from '../assets/logo.svg';

export default function Header() {
  const { likes } = useLikes();

  return (
    <header className="site-header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src={logo} alt="" width={32} height={32} />
        <span style={{ fontWeight: 'bold' }}>My Dev Blog</span>
      </div>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "link"}>Home</NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? "active-link" : "link"}>Skills</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : "link"}>Contact</NavLink>
      </nav>
      <div style={{ fontWeight: 'bold' }}>Likes: ♥ {likes}</div>
    </header>
  );
}