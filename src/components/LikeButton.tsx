import { useLikes } from '../context/LikesContext';

export default function LikeButton() {
  const { likes, addLike } = useLikes();
  return (
    <button id="like-btn" className="like-button" onClick={addLike} style={{ cursor: 'pointer', padding: '10px 20px', borderRadius: '8px', border: 'none', backgroundColor: '#f0f0f0' }}>
      ♥ {likes}
    </button>
  );
}