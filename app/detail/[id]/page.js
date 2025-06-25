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
    // paramsを非同期で処理
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
      
      {/* お気に入りボタン */}
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={handleFavoriteToggle}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: isFavorite ? '#ff6b6b' : '#4ecdc4',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {isFavorite ? '❤️ お気に入り済み' : '🤍 お気に入りに追加'}
        </button>
      </div>

      <p>{item.detail}</p>

      {/* コメント機能 */}
      <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ddd' }}>
        <h3>コメント</h3>
        <form onSubmit={handleCommentSubmit}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="この料理についてコメントを書いてください..."
            style={{ width: '100%', height: '100px', marginBottom: '10px' }}
          />
          <button type="submit" style={{ padding: '10px 20px' }}>
            コメントを投稿
          </button>
        </form>

        {/* コメント一覧 */}
        <div style={{ marginTop: '20px' }}>
          <h4>投稿されたコメント:</h4>
          {comments.length === 0 ? (
            <p>まだコメントがありません</p>
          ) : (
            comments.map((comment, index) => (
              <div key={index} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                <p>{comment.text}</p>
                <small style={{ color: '#666' }}>{comment.date}</small>
              </div>
            ))
          )}
        </div>
      </div>

      <Link href="/">一覧に戻る</Link>
    </div>
  );
} 