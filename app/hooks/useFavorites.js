import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState({});

  // ページ読み込み時にlocalStorageからfavorite状態を復元
  useEffect(() => {
    const savedFavorites = localStorage.getItem('japaneseFoodFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (itemId) => {
    const newFavorites = {
      ...favorites,
      [itemId]: !favorites[itemId]
    };
    setFavorites(newFavorites);
    localStorage.setItem('japaneseFoodFavorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (itemId) => favorites[itemId] || false;

  return { isFavorite, toggleFavorite };
} 