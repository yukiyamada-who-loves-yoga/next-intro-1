// アイテムの型定義
interface Item {
  id: number;
  title: string;
  detail: string;
}

// アイテムデータ
const items: Item[] = [
  { 
    id: 1, 
    title: "寿司",
    detail: "酢飯に魚介類や野菜を乗せた日本の伝統料理。"
  },
  { 
    id: 2, 
    title: "ラーメン",
    detail: "中華麺をスープで煮込んだ日本の国民食。"
  },
  { 
    id: 3, 
    title: "天ぷら",
    detail: "魚介類や野菜を衣で包んで揚げた料理。"
  },
  { 
    id: 4, 
    title: "うなぎ",
    detail: "蒲焼きにして食べるのが一般的で、甘辛いタレで焼く。"
  },
  { 
    id: 5, 
    title: "お好み焼き",
    detail: "キャベツや肉、魚介類を小麦粉の生地に混ぜて焼いた料理。"
  }
];

export default function Page() {
  return (
    <div>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ol>
    </div>
  );
} 