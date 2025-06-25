'use client';

import { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { items } from '../../data.js';
import FavoriteButton from '../../components/FavoriteButton.js';
import { ERROR_MESSAGE, BACK_TO_LIST, STORAGE_KEY } from '../../constants.js';

export default function DetailPage({ params }) {
  const { id } = use(params);
  const item = items.find(item => item.id == id);

  const [favorites, setFavorites] = useState({});

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

  if (!item) {
    return (
      <div>
        <h1>{ERROR_MESSAGE}</h1>
        <Link href="/">{BACK_TO_LIST}</Link>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1>{item.title}</h1>
        <FavoriteButton 
          isFavorite={isFavorite(id)}
          onClick={() => toggleFavorite(id)}
        />
      </div>

      <p>{item.detail}</p>

      <Link href="/">{BACK_TO_LIST}</Link>
    </div>
  );
} 