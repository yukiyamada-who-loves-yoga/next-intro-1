'use client';

import { useState } from 'react';
import Link from 'next/link';
import { items } from './data.js';

export default function Page() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h1>日本食一覧</h1>

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
