'use client';

import { useState } from 'react';
import Link from 'next/link';
import { items } from './data.js';

export default function Page() {
  const [count, setCount] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h1>日本食一覧</h1>
      
      <div>
        <h3>訪問回数カウンター</h3>
        <p>カウント: {count}</p>
        <button onClick={handleIncrement}>カウントアップ</button>
      </div>

      {selectedItem && (
        <div>
          <h3>選択された料理: {selectedItem.title}</h3>
          <p>{selectedItem.detail}</p>
        </div>
      )}

      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/detail/${item.id}`}>
              {item.title}
            </Link>
            <button onClick={() => handleItemClick(item)}>
              詳細を表示
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
