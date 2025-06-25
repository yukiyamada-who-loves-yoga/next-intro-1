'use client';

import Link from 'next/link';
import { items } from './data.js';
import { useFavorites } from './hooks/useFavorites.js';
import FavoriteButton from './components/FavoriteButton.js';
import { APP_TITLE } from './constants.js';

export default function Page() {
  const { isFavorite, toggleFavorite } = useFavorites();

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
