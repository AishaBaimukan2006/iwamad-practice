import { useState } from 'react';
import SkillBadge from './SkillBadge';

type Skill = {
  id: number;
  label: string;
};

type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl?: string;
  skills: Skill[];
};

export default function ProfileCard({ name, role, avatarUrl, skills }: ProfileCardProps) {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <main className="card p-8 shadow-2xl rounded-3xl">
      {avatarUrl && <img src={avatarUrl} alt={name} className="avatar" />}
      <h2>{name}</h2>
      <p className="subtitle">{role}</p>

      <div style={{ marginTop: '20px', textAlign: 'left' }}>
        <h3>My Interests & Skills</h3>
        {skills.length === 0 ? (
          <p>Навыки пока не добавлены.</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {skills.map((skill) => (
              <SkillBadge key={skill.id} skill={skill} />
            ))}
          </ul>
        )}
      </div>

      <button id="like-btn" className="like-button" onClick={handleLikeClick}>
        {liked ? "Liked! 💖" : "Like ❤️"}
      </button>
    </main>
  );
}