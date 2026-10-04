import LikeButton from './LikeButton';

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
    <main className="card p-8 shadow-2xl rounded-3xl" style={{ margin: '0 auto', maxWidth: '400px', textAlign: 'center' }}>
      {avatarUrl && <img src={avatarUrl} alt={name} className="avatar" style={{ borderRadius: '50%', width: '100px' }} />}
      <h2>{name}</h2>
      <p className="subtitle">{role}</p>

      <div style={{ marginTop: '20px' }}>
        <LikeButton />
      </div>
    </main>
  );
}