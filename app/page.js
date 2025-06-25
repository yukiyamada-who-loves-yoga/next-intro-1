'use client';

import Link from 'next/link';
import { items } from './data.js';

export default function Page() {
  return (
    <div>
      <h1>日本食一覧</h1>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/detail/${item.id}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
