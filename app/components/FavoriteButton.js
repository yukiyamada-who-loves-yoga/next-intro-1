export default function FavoriteButton({ isFavorite, onClick, className = '' }) {
  return (
    <button 
      onClick={onClick}
      className={className}
      style={{ marginLeft: '10px' }}
      aria-label={isFavorite ? 'お気に入りから削除' : 'お気に入りに追加'}
    >
      {isFavorite ? '❤️' : '🤍'}
    </button>
  );
} 