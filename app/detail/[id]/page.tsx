'use client';

import { use } from 'react';
import Link from 'next/link';
import { items } from '../../data';
import { useFavorites } from '../../hooks/useFavorites';
import FavoriteButton from '../../components/FavoriteButton';
import { ERROR_MESSAGE, BACK_TO_LIST } from '../../constants';

// パラメータの型定義
interface DetailPageParams {
  params: Promise<{ id: string }>;
}

export default function DetailPage({ params }: DetailPageParams) {
  const { id } = use(params);
  const item = items.find(item => item.id === parseInt(id));
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
          isFavorite={isFavorite(parseInt(id))}
          onClick={() => toggleFavorite(parseInt(id))}
        />
      </div>

      <p>{item.detail}</p>

      <Link href="/">{BACK_TO_LIST}</Link>
    </div>
  );
} 