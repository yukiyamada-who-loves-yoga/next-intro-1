'use client';

import { useState, useEffect } from 'react';
import { items } from './data.js';

export default function Page() {
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

  return (
    <div>
      <h1>日本食一覧</h1>

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
