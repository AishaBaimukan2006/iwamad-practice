import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import './Layout.css'; 

export default function Layout() {
  return (
    <div style={{ fontFamily: 'sans-serif', margin: '0 auto', maxWidth: '800px', padding: '20px' }}>
      
      
      <Header />
      
      <main style={{ minHeight: '60vh' }}>
        <Outlet />
      </main>

      
      <Footer githubUrl="https://github.com/AishaBaimukan2006" email="your.email@example.com" />
      
    </div>
  );
}
