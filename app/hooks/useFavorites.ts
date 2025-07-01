import { useState, useEffect } from 'react';
import { STORAGE_KEY } from '../constants';

// お気に入り状態の型定義
interface FavoritesState {
  [key: number]: boolean;
}

// お気に入りフックの戻り値の型定義
interface UseFavoritesReturn {
  isFavorite: (itemId: number) => boolean;
  toggleFavorite: (itemId: number) => void;
}

export function useFavorites(): UseFavoritesReturn {
  const [favorites, setFavorites] = useState<FavoritesState>({});

  // ページ読み込み時にlocalStorageからfavorite状態を復元
  useEffect(() => {
    const savedFavorites = localStorage.getItem(STORAGE_KEY);
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (itemId: number): void => {
    const newFavorites = {
      ...favorites,
      [itemId]: !favorites[itemId]
    };
    setFavorites(newFavorites);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites));
  };

  const isFavorite = (itemId: number): boolean => favorites[itemId] || false;

  return { isFavorite, toggleFavorite };
} 