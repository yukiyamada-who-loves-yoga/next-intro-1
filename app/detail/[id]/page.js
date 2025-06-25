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
      <h1>{item.title}</h1>
      
      <div>
        <button onClick={handleFavoriteToggle}>
          {isFavorite ? '❤️ お気に入り済み' : '🤍 お気に入りに追加'}
        </button>
      </div>

      <p>{item.detail}</p>

      <Link href="/">一覧に戻る</Link>
    </div>
  );
} 