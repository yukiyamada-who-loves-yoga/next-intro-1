'use client';

import { use } from 'react';
import Link from 'next/link';
import { items } from '../../data.js';
import { useFavorites } from '../../hooks/useFavorites.js';
import FavoriteButton from '../../components/FavoriteButton.js';
import { ERROR_MESSAGE, BACK_TO_LIST } from '../../constants.js';

export default function DetailPage({ params }) {
  const { id } = use(params);
  const item = items.find(item => item.id == id);
  const { isFavorite, toggleFavorite } = useFavorites();

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