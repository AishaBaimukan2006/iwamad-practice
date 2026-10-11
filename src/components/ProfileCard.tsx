import LikeButton from './LikeButton';
import Card from './ui/Card'; // <-- Импортируем наш новый компонент

type ProfileCardProps = {
  name?: string;
  role?: string;
  avatarUrl?: string;
};

export default function ProfileCard({ 
  name = "Aisha", 
  role = "IT Management Student", 
  avatarUrl 
}: ProfileCardProps) {
  return (
    // Заменяем <main> на <Card> (все стили отступов и рамок теперь берутся из ui.css)
    <Card>
      {avatarUrl && (
        <img 
          src={avatarUrl} 
          alt={name} 
          className="avatar" 
          style={{ borderRadius: '50%', width: '100px', margin: '0 auto' }} // margin нужен для центрирования картинки во flex-контейнере
        />
      )}
      <h2 style={{ textAlign: 'center' }}>{name}</h2>
      
      {/* Используем токен для цвета текста из нашей дизайн-системы */}
      <p style={{ color: 'var(--color-text-secondary)', textAlign: 'center' }}>
        {role}
      </p>

      {/* Оставляем ваш отступ для кнопки лайка */}
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <LikeButton />
      </div>
    </Card>
  );
}