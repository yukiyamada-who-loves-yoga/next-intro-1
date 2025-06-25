import { useState, useEffect } from 'react';
import { STORAGE_KEY } from '../constants.js';

export function useFavorites() {
  const [favorites, setFavorites] = useState({});

  // ページ読み込み時にlocalStorageからfavorite状態を復元
  useEffect(() => {
    const savedFavorites = localStorage.getItem(STORAGE_KEY);
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
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites));
  };

  const isFavorite = (itemId) => favorites[itemId] || false;

  return { favorites, toggleFavorite, isFavorite };
} 