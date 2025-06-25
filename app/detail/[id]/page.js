'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { items } from '../../data.js';

export default function DetailPage({ params }) {
  const [item, setItem] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const getItem = async () => {
      const { id } = await params;
      const foundItem = items.find(item => item.id == id);
      setItem(foundItem);
    };
    getItem();
  }, [params]);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  if (!item) {
    return (
      <div>
        <h1>料理が見つかりません</h1>
        <Link href="/">一覧に戻る</Link>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1>{item.title}</h1>
        <button onClick={handleFavoriteToggle}>
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      <p>{item.detail}</p>

      <Link href="/">一覧に戻る</Link>
    </div>
  );
} 