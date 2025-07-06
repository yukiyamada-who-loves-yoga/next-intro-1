// アイテムの型定義
interface Item {
  id: number;
  name: string;
}

// アイテムデータ
const items: Item[] = [
  { id: 1, name: "寿司" },
  { id: 2, name: "ラーメン" },
  { id: 3, name: "天ぷら" }
];

export default function Page() {
  return (
    <div>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ol>
    </div>
  );
} 