'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { items } from './data.js';
import FavoriteButton from './components/FavoriteButton.js';
import { APP_TITLE, STORAGE_KEY } from './constants.js';

export default function Page() {
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

  return (
    <div>
      <h1>{APP_TITLE}</h1>

      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/detail/${item.id}`}>
              {item.title}
            </Link>
            <FavoriteButton 
              isFavorite={isFavorite(item.id)}
              onClick={() => toggleFavorite(item.id)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
