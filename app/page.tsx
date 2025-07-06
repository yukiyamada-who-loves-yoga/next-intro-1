'use client';

import { useState, useEffect } from 'react';
import { items } from './data';

// お気に入り状態の型定義
interface FavoritesState {
  [key: number]: boolean;
}

export default function Page() {
  const [favorites, setFavorites] = useState<FavoritesState>({});

  // ページ読み込み時にlocalStorageからfavorite状態を復元
  useEffect(() => {
    const savedFavorites = localStorage.getItem('japaneseFoodFavorites');
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
    localStorage.setItem('japaneseFoodFavorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (itemId: number): boolean => favorites[itemId] || false;

  return (
    <div>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => toggleFavorite(item.id)}>
              {isFavorite(item.id) ? '❤️' : '🤍'}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
} 