import Link from 'next/link';
import { items } from '../../data.js';

export default async function DetailPage({ params }) {
  // paramsをawait
  const { id } = await params;
  
  // IDに基づいてアイテムを取得
  const item = items.find(item => item.id == id);
  
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
      <p>{item.detail}</p>
      <Link href="/">一覧に戻る</Link>
    </div>
  );
} 