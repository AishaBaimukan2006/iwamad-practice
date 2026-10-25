import LikeButton from './LikeButton';
import Card from './ui/Card'; 

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
      
      
      <p style={{ color: 'var(--color-text-secondary)', textAlign: 'center' }}>
        {role}
      </p>

      
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <LikeButton />
      </div>
    </Card>
  );
}