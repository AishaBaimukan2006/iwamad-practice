import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';
import './style.css'; 

export default function App() {
  const mySkills = [
    { id: 1, label: "Math Literacy Tutoring" },
    { id: 2, label: "Blender 3D Modeling" },
    { id: 3, label: "Figma UI Design" },
    { id: 4, label: "Unreal Engine 5 Level Design" }
  ];

  return (
    <div>
      <Header title="Personal Profile" />
      <ProfileCard 
        name="Baimukan Aisha" 
        role="Student at KBTU | Future Web Developer" 
        avatarUrl="https://github.com/AishaBaimukan2006.png"
        skills={mySkills}
      />
      <Footer 
        email="baimukhanaisha79@gmail.com" 
        githubUrl="https://github.com/AishaBaimukan2006" 
      />
    </div>
  );
}