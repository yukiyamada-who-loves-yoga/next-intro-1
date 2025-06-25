'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { items } from '../../data.js';

export default function DetailPage({ params }) {
  const [item, setItem] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

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

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, { text: comment, date: new Date().toLocaleString() }]);
      setComment('');
    }
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

      <div>
        <h3>コメント</h3>
        <form onSubmit={handleCommentSubmit}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="この料理についてコメントを書いてください..."
          />
          <button type="submit">コメントを投稿</button>
        </form>

        <div>
          <h4>投稿されたコメント:</h4>
          {comments.length === 0 ? (
            <p>まだコメントがありません</p>
          ) : (
            comments.map((comment, index) => (
              <div key={index}>
                <p>{comment.text}</p>
                <small>{comment.date}</small>
              </div>
            ))
          )}
        </div>
      </div>

      <Link href="/">一覧に戻る</Link>
    </div>
  );
} 