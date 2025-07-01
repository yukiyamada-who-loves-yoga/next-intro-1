// お気に入りボタンのProps型定義
interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: () => void;
}

export default function FavoriteButton({ isFavorite, onClick }: FavoriteButtonProps) {
  return (
    <button 
      onClick={onClick}
      style={{ marginLeft: '10px' }}
      aria-label={isFavorite ? 'お気に入りから削除' : 'お気に入りに追加'}
    >
      {isFavorite ? '❤️' : '🤍'}
    </button>
  );
} 