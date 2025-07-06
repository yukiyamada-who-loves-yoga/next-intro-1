export default function FavoriteButton({ isFavorite, onClick }) {
  return (
    <button onClick={onClick}>
      {isFavorite ? '❤️' : '🤍'}
    </button>
  );
} 