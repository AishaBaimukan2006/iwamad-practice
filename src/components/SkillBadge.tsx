type Skill = {
  id: number;
  label: string;
};

type SkillBadgeProps = {
  skill: Skill;
};

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <li style={{ marginBottom: '8px', fontWeight: '500' }}>
      ✨ {skill.label}
    </li>
  );
}