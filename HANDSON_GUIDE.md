# Next.js 15.3.4 + React 19 ハンズオン教材
## 日本食紹介アプリケーションの作成

**作成日**: 2025年7月5日  
**対象バージョン**: Next.js 15.3.4, React 19.0.0  
**最新バージョン**: Next.js 15.3.4 (2025年7月5日時点での最新版)

---

## 📚 参照公式ドキュメント

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev/)
- [Next.js App Router](https://nextjs.org/docs/app)
- [TypeScript with Next.js](https://nextjs.org/docs/app/building-your-application/typescript)

---

## 🎯 学習目標

このハンズオンでは以下の技術を学びます：

1. **Next.js 15.3.4 App Router**の基本構造
2. **React 19**の新機能（`use`フックなど）
3. **TypeScript**による型安全な開発
4. **カスタムフック**の作成と活用
5. **ローカルストレージ**を使った状態管理
6. **動的ルーティング**の実装

---

## 🛠️ 環境構築

### 1. プロジェクトの作成

~~~bash
npx create-next-app@latest next-intro --typescript --tailwind=false --eslint=false --app --src-dir=false --import-alias="@/*"
cd next-intro
~~~

### 2. 依存関係の確認

~~~json:package.json
{
  "name": "next-intro",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "15.3.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/node": "^24.0.8",
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "typescript": "^5.8.3"
  }
}
~~~

**最新の推奨方法の根拠**:
- Next.js 15.3.4は2025年7月時点での最新安定版
- React 19は最新のメジャーバージョンで、`use`フックなどの新機能を活用
- Turbopackを使用して高速な開発サーバーを実現

---

## 📁 プロジェクト構造

~~~
next-intro/
├── app/
│   ├── components/
│   │   └── FavoriteButton.tsx
│   ├── constants.ts
│   ├── data.ts
│   ├── detail/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── hooks/
│   │   └── useFavorites.ts
│   ├── layout.tsx
│   └── page.tsx
├── package.json
├── tsconfig.json
└── README.md
~~~

---

## 🚀 ステップバイステップ実装

### ステップ1: 定数ファイルの作成

まず、アプリケーション全体で使用する定数を定義します。

~~~typescript:app/constants.ts
// アプリケーション定数
export const APP_TITLE: string = '日本食一覧';
export const APP_DESCRIPTION: string = '日本の伝統料理とその特徴を紹介するアプリケーション';
export const STORAGE_KEY: string = 'japaneseFoodFavorites';
export const ERROR_MESSAGE: string = '料理が見つかりません';
export const BACK_TO_LIST: string = '一覧に戻る';
~~~

**最新の推奨方法の根拠**:
- 定数を一箇所にまとめることで保守性を向上
- TypeScriptの型注釈により型安全性を確保

### ステップ2: データファイルの作成

日本食のデータを定義します。

~~~typescript:app/data.ts
// アイテムの型定義
export interface Item {
  id: number;
  title: string;
  detail: string;
}

// アイテムデータ
export const items: Item[] = [
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
~~~

**最新の推奨方法の根拠**:
- TypeScriptのインターフェースで型安全性を確保
- データとロジックを分離することで保守性を向上

### ステップ3: カスタムフックの作成

お気に入り機能を管理するカスタムフックを作成します。

~~~typescript:app/hooks/useFavorites.ts
import { useState, useEffect } from 'react';
import { STORAGE_KEY } from '../constants';

// お気に入り状態の型定義
interface FavoritesState {
  [key: number]: boolean;
}

// お気に入りフックの戻り値の型定義
interface UseFavoritesReturn {
  isFavorite: (itemId: number) => boolean;
  toggleFavorite: (itemId: number) => void;
}

export function useFavorites(): UseFavoritesReturn {
  const [favorites, setFavorites] = useState<FavoritesState>({});

  // ページ読み込み時にlocalStorageからfavorite状態を復元
  useEffect(() => {
    const savedFavorites = localStorage.getItem(STORAGE_KEY);
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (itemId: number): void => {
    const newFavorites = {
      ...favorites,
      [itemId]: !favorites[itemId]
    };
    setFavorites(newFavorites);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites));
  };

  const isFavorite = (itemId: number): boolean => favorites[itemId] || false;

  return { isFavorite, toggleFavorite };
}
~~~

**最新の推奨方法の根拠**:
- React 19の最新のフックパターンを使用
- TypeScriptの型定義により型安全性を確保
- localStorageを使用して状態を永続化

### ステップ4: お気に入りボタンコンポーネントの作成

再利用可能なお気に入りボタンコンポーネントを作成します。

~~~typescript:app/components/FavoriteButton.tsx
// お気に入りボタンのProps型定義
interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: () => void;
}

export default function FavoriteButton({ isFavorite, onClick }: FavoriteButtonProps) {
  return (
    <button 
      onClick={onClick}
      style={{ marginLeft: '10px' }}
      aria-label={isFavorite ? 'お気に入りから削除' : 'お気に入りに追加'}
    >
      {isFavorite ? '❤️' : '🤍'}
    </button>
  );
}
~~~

**最新の推奨方法の根拠**:
- TypeScriptのProps型定義により型安全性を確保
- アクセシビリティを考慮したaria-label属性の使用
- 再利用可能なコンポーネント設計

### ステップ5: メインページの作成

日本食一覧を表示するメインページを作成します。

~~~typescript:app/page.tsx
'use client';

import Link from 'next/link';
import { items } from './data';
import { useFavorites } from './hooks/useFavorites';
import FavoriteButton from './components/FavoriteButton';
import { APP_TITLE } from './constants';

export default function Page() {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div>
      <h1>{APP_TITLE}</h1>

      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/detail/${item.id}`}>
              {item.title}
            </Link>
            <FavoriteButton 
              isFavorite={isFavorite(item.id)}
              onClick={() => toggleFavorite(item.id)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
~~~

**最新の推奨方法の根拠**:
- Next.js 15のApp Routerを使用
- React 19の最新機能を活用
- 'use client'ディレクティブでクライアントコンポーネントとして指定

### ステップ6: 詳細ページの作成

動的ルーティングを使用した詳細ページを作成します。

~~~typescript:app/detail/[id]/page.tsx
'use client';

import { use } from 'react';
import Link from 'next/link';
import { items } from '../../data';
import { useFavorites } from '../../hooks/useFavorites';
import FavoriteButton from '../../components/FavoriteButton';
import { ERROR_MESSAGE, BACK_TO_LIST } from '../../constants';

// パラメータの型定義
interface DetailPageParams {
  params: Promise<{ id: string }>;
}

export default function DetailPage({ params }: DetailPageParams) {
  const { id } = use(params);
  const item = items.find(item => item.id === parseInt(id));
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!item) {
    return (
      <div>
        <h1>{ERROR_MESSAGE}</h1>
        <Link href="/">{BACK_TO_LIST}</Link>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1>{item.title}</h1>
        <FavoriteButton 
          isFavorite={isFavorite(parseInt(id))}
          onClick={() => toggleFavorite(parseInt(id))}
        />
      </div>

      <p>{item.detail}</p>

      <Link href="/">{BACK_TO_LIST}</Link>
    </div>
  );
}
~~~

**最新の推奨方法の根拠**:
- React 19の`use`フックを使用してPromiseを直接扱う
- Next.js 15の動的ルーティング機能を活用
- エラーハンドリングを含む堅牢な実装

### ステップ7: レイアウトファイルの更新

アプリケーション全体のレイアウトを設定します。

~~~typescript:app/layout.tsx
import "./globals.css";
import { APP_TITLE, APP_DESCRIPTION } from './constants';
import { ReactNode } from 'react';

export const metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
};

// RootLayoutのProps型定義
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
~~~

**最新の推奨方法の根拠**:
- Next.js 15のメタデータAPIを使用
- TypeScriptの型定義により型安全性を確保
- 日本語対応のlang属性設定

### ステップ8: スタイルの追加

基本的なスタイルを追加します。

~~~css:app/globals.css
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px;
}
~~~

---

## 🎮 アプリケーションの実行

### 開発サーバーの起動

~~~bash
npm run dev
~~~

ブラウザで `http://localhost:3000` にアクセスしてアプリケーションを確認してください。

### ビルドとプロダクション実行

~~~bash
npm run build
npm start
~~~

---

## 🔍 主要な機能

### 1. 日本食一覧表示
- 5つの日本食料理の一覧を表示
- 各料理にリンクとお気に入りボタンを配置

### 2. お気に入り機能
- ハートアイコンでお気に入り状態を表示
- localStorageを使用して状態を永続化
- 一覧ページと詳細ページの両方で機能

### 3. 詳細ページ
- 動的ルーティングによる詳細情報表示
- エラーハンドリング機能
- 一覧ページへの戻るリンク

### 4. レスポンシブ対応
- モバイルフレンドリーなデザイン
- アクセシビリティを考慮した実装

---

## 🧪 学習ポイント

### Next.js 15.3.4の新機能
- **App Router**: ファイルベースのルーティング
- **Turbopack**: 高速な開発サーバー
- **メタデータAPI**: SEO対応のメタデータ管理

### React 19の新機能
- **useフック**: Promiseを直接扱える新しいフック
- **改善された型安全性**: より厳密なTypeScript対応

### TypeScriptの活用
- **型定義**: インターフェースと型注釈
- **型安全性**: コンパイル時のエラー検出

### モダンな開発パターン
- **カスタムフック**: ロジックの再利用
- **コンポーネント分離**: 責任の分離
- **定数管理**: 保守性の向上

---

## 🚀 発展課題

1. **スタイリングの改善**: Tailwind CSSやCSS Modulesを使用
2. **アニメーション追加**: Framer Motionを使用したスムーズなアニメーション
3. **検索機能**: 料理名での検索機能を実装
4. **カテゴリ分け**: 料理のカテゴリ別表示
5. **画像追加**: 各料理の画像を表示
6. **API連携**: 外部APIから料理データを取得

---

## 📖 参考資料

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Next.js App Router Guide](https://nextjs.org/docs/app/building-your-application/routing)

---

## 🎉 お疲れさまでした！

このハンズオンを通じて、Next.js 15.3.4とReact 19を使用したモダンなWebアプリケーション開発の基礎を学びました。実践的なプロジェクトを通じて、最新の技術スタックとベストプラクティスを身につけることができました。

次のステップとして、発展課題に挑戦したり、より複雑なアプリケーションの開発に取り組んでみてください！ 