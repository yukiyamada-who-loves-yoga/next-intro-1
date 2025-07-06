// アイテムの型定義
interface Item {
  id: number;
  name: string;
  desc: string;
}

// アイテムデータ
const items: Item[] = [
  { 
    id: 1, 
    name: "寿司",
    desc: "酢飯に魚介類や野菜を乗せた日本の伝統料理。"
  },
  { 
    id: 2, 
    name: "ラーメン",
    desc: "中華麺をスープで煮込んだ日本の国民食。"
  }
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