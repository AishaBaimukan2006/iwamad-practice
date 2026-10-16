import Tag from './ui/Tag'; 

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
      
      <Tag label={`✨ ${skill.label}`} />
    </li>
  );
}