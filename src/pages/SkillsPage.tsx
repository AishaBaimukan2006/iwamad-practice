import SkillBadge from '../components/SkillBadge';

export default function SkillsPage() {
  const mySkills = [
    { id: 1, label: "Math Literacy Tutoring" },
    { id: 2, label: "Blender 3D Modeling" },
    { id: 3, label: "Figma UI Design" },
    { id: 4, label: "Unreal Engine 5 Level Design" }
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>My Interests & Skills</h2>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
        {mySkills.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </ul>
    </div>
  );
}