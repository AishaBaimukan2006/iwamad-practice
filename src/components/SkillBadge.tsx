import Tag from './ui/Tag'; // <-- Импортируем наш новый дизайн-компонент

type Skill = {
  id: number;
  label: string;
};

type SkillBadgeProps = {
  skill: Skill;
};

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <li style={{ listStyleType: 'none', marginBottom: '8px' }}>
      {/* Оборачиваем ваш текст со звездочкой в компонент Tag */}
      <Tag label={`✨ ${skill.label}`} />
    </li>
  );
}