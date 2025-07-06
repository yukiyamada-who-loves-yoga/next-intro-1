# Next.js 15.3.4 + React 19 段階的ハンズオン教材
## 日本食紹介アプリケーションの構築

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

このハンズオンでは、段階的に以下の技術を学びます：

1. **Next.js 15.3.4 App Router**の基本構造
2. **React 19**の新機能（`use`フックなど）
3. **TypeScript**による型安全な開発
4. **カスタムフック**の作成と活用
5. **ローカルストレージ**を使った状態管理
6. **動的ルーティング**の実装
7. **リファクタリング**によるコードの改善

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

## 🚀 ステップバイステップ実装

### ステップ1: 一覧ページのみ作成（文字列はベタ書き、データもページに直書き）

まず、最もシンプルな形で一覧ページを作成します。

#### 1-1. メインページの作成

~~~typescript:app/page.tsx
export default function Page() {
  return (
    <div>
      <h1>日本食一覧</h1>

      <ol>
        <li>
          <a href="/detail/1">寿司</a>
        </li>
        <li>
          <a href="/detail/2">ラーメン</a>
        </li>
        <li>
          <a href="/detail/3">天ぷら</a>
        </li>
        <li>
          <a href="/detail/4">うなぎ</a>
        </li>
        <li>
          <a href="/detail/5">お好み焼き</a>
        </li>
      </ol>
    </div>
  );
}
~~~

#### 1-2. レイアウトファイルの更新

~~~typescript:app/layout.tsx
import "./globals.css";
import { ReactNode } from 'react';

export const metadata = {
  title: '日本食一覧',
  description: '日本の伝統料理とその特徴を紹介するアプリケーション',
};

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

#### 1-3. 基本的なスタイルの追加

~~~css:app/globals.css
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px;
}
~~~

**学習ポイント**:
- Next.js 15のApp Routerの基本構造
- メタデータAPIの使用
- 基本的なHTMLとCSSの実装

---

### ステップ2: お気に入り機能を一覧につける

一覧ページにお気に入りボタンを追加します。

#### 2-1. お気に入りボタンコンポーネントの作成

~~~typescript:app/components/FavoriteButton.tsx
'use client';

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

#### 2-2. メインページの更新

~~~typescript:app/page.tsx
'use client';

import { useState } from 'react';
import FavoriteButton from './components/FavoriteButton';

export default function Page() {
  const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({});

  const toggleFavorite = (itemId: number) => {
    setFavorites(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <div>
      <h1>日本食一覧</h1>

      <ol>
        <li>
          <a href="/detail/1">寿司</a>
          <FavoriteButton 
            isFavorite={favorites[1] || false}
            onClick={() => toggleFavorite(1)}
          />
        </li>
        <li>
          <a href="/detail/2">ラーメン</a>
          <FavoriteButton 
            isFavorite={favorites[2] || false}
            onClick={() => toggleFavorite(2)}
          />
        </li>
        <li>
          <a href="/detail/3">天ぷら</a>
          <FavoriteButton 
            isFavorite={favorites[3] || false}
            onClick={() => toggleFavorite(3)}
          />
        </li>
        <li>
          <a href="/detail/4">うなぎ</a>
          <FavoriteButton 
            isFavorite={favorites[4] || false}
            onClick={() => toggleFavorite(4)}
          />
        </li>
        <li>
          <a href="/detail/5">お好み焼き</a>
          <FavoriteButton 
            isFavorite={favorites[5] || false}
            onClick={() => toggleFavorite(5)}
          />
        </li>
      </ol>
    </div>
  );
}
~~~

**学習ポイント**:
- React 19のuseStateフックの使用
- クライアントコンポーネントの作成
- TypeScriptの型定義
- コンポーネントの再利用

---

### ステップ3: 詳細ページを作る

動的ルーティングを使用した詳細ページを作成します。

#### 3-1. 詳細ページの作成

~~~typescript:app/detail/[id]/page.tsx
'use client';

import { use } from 'react';

interface DetailPageParams {
  params: Promise<{ id: string }>;
}

export default function DetailPage({ params }: DetailPageParams) {
  const { id } = use(params);
  
  // データをページに直書き
  const items = [
    { id: 1, title: "寿司", detail: "酢飯に魚介類や野菜を乗せた日本の伝統料理。" },
    { id: 2, title: "ラーメン", detail: "中華麺をスープで煮込んだ日本の国民食。" },
    { id: 3, title: "天ぷら", detail: "魚介類や野菜を衣で包んで揚げた料理。" },
    { id: 4, title: "うなぎ", detail: "蒲焼きにして食べるのが一般的で、甘辛いタレで焼く。" },
    { id: 5, title: "お好み焼き", detail: "キャベツや肉、魚介類を小麦粉の生地に混ぜて焼いた料理。" }
  ];

  const item = items.find(item => item.id === parseInt(id));

  if (!item) {
    return (
      <div>
        <h1>料理が見つかりません</h1>
        <a href="/">一覧に戻る</a>
      </div>
    );
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.detail}</p>
      <a href="/">一覧に戻る</a>
    </div>
  );
}
~~~

#### 3-2. メインページのリンクをNext.jsのLinkに変更

~~~typescript:app/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import FavoriteButton from './components/FavoriteButton';

export default function Page() {
  const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({});

  const toggleFavorite = (itemId: number) => {
    setFavorites(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <div>
      <h1>日本食一覧</h1>

      <ol>
        <li>
          <Link href="/detail/1">寿司</Link>
          <FavoriteButton 
            isFavorite={favorites[1] || false}
            onClick={() => toggleFavorite(1)}
          />
        </li>
        <li>
          <Link href="/detail/2">ラーメン</Link>
          <FavoriteButton 
            isFavorite={favorites[2] || false}
            onClick={() => toggleFavorite(2)}
          />
        </li>
        <li>
          <Link href="/detail/3">天ぷら</Link>
          <FavoriteButton 
            isFavorite={favorites[3] || false}
            onClick={() => toggleFavorite(3)}
          />
        </li>
        <li>
          <Link href="/detail/4">うなぎ</Link>
          <FavoriteButton 
            isFavorite={favorites[4] || false}
            onClick={() => toggleFavorite(4)}
          />
        </li>
        <li>
          <Link href="/detail/5">お好み焼き</Link>
          <FavoriteButton 
            isFavorite={favorites[5] || false}
            onClick={() => toggleFavorite(5)}
          />
        </li>
      </ol>
    </div>
  );
}
~~~

**学習ポイント**:
- Next.js 15の動的ルーティング
- React 19の`use`フックの使用
- Next.jsのLinkコンポーネント
- エラーハンドリング

---

### ステップ4: URLに利用しないidを指定した場合のページ作成

存在しないIDにアクセスした場合のエラーページを改善します。

#### 4-1. 詳細ページの改善

~~~typescript:app/detail/[id]/page.tsx
'use client';

import { use } from 'react';
import Link from 'next/link';

interface DetailPageParams {
  params: Promise<{ id: string }>;
}

export default function DetailPage({ params }: DetailPageParams) {
  const { id } = use(params);
  
  // データをページに直書き
  const items = [
    { id: 1, title: "寿司", detail: "酢飯に魚介類や野菜を乗せた日本の伝統料理。" },
    { id: 2, title: "ラーメン", detail: "中華麺をスープで煮込んだ日本の国民食。" },
    { id: 3, title: "天ぷら", detail: "魚介類や野菜を衣で包んで揚げた料理。" },
    { id: 4, title: "うなぎ", detail: "蒲焼きにして食べるのが一般的で、甘辛いタレで焼く。" },
    { id: 5, title: "お好み焼き", detail: "キャベツや肉、魚介類を小麦粉の生地に混ぜて焼いた料理。" }
  ];

  const item = items.find(item => item.id === parseInt(id));

  if (!item) {
    return (
      <div>
        <h1>料理が見つかりません</h1>
        <p>指定されたID: {id} の料理は存在しません。</p>
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
~~~

**学習ポイント**:
- より詳細なエラーメッセージの表示
- Next.jsのLinkコンポーネントの使用
- ユーザーフレンドリーなエラーハンドリング

---

### ステップ5: 一覧ページにお気に入りをつける→ページを移動するとお気に入りが消えてしまう状態を修正

localStorageを使用してお気に入り状態を永続化します。

#### 5-1. メインページの更新

~~~typescript:app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import FavoriteButton from './components/FavoriteButton';

export default function Page() {
  const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({});

  // ページ読み込み時にlocalStorageからfavorite状態を復元
  useEffect(() => {
    const savedFavorites = localStorage.getItem('japaneseFoodFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (itemId: number) => {
    const newFavorites = {
      ...favorites,
      [itemId]: !favorites[itemId]
    };
    setFavorites(newFavorites);
    localStorage.setItem('japaneseFoodFavorites', JSON.stringify(newFavorites));
  };

  return (
    <div>
      <h1>日本食一覧</h1>

      <ol>
        <li>
          <Link href="/detail/1">寿司</Link>
          <FavoriteButton 
            isFavorite={favorites[1] || false}
            onClick={() => toggleFavorite(1)}
          />
        </li>
        <li>
          <Link href="/detail/2">ラーメン</Link>
          <FavoriteButton 
            isFavorite={favorites[2] || false}
            onClick={() => toggleFavorite(2)}
          />
        </li>
        <li>
          <Link href="/detail/3">天ぷら</Link>
          <FavoriteButton 
            isFavorite={favorites[3] || false}
            onClick={() => toggleFavorite(3)}
          />
        </li>
        <li>
          <Link href="/detail/4">うなぎ</Link>
          <FavoriteButton 
            isFavorite={favorites[4] || false}
            onClick={() => toggleFavorite(4)}
          />
        </li>
        <li>
          <Link href="/detail/5">お好み焼き</Link>
          <FavoriteButton 
            isFavorite={favorites[5] || false}
            onClick={() => toggleFavorite(5)}
          />
        </li>
      </ol>
    </div>
  );
}
~~~

#### 5-2. 詳細ページにもお気に入り機能を追加

~~~typescript:app/detail/[id]/page.tsx
'use client';

import { use, useState, useEffect } from 'react';
import Link from 'next/link';
import FavoriteButton from '../../components/FavoriteButton';

interface DetailPageParams {
  params: Promise<{ id: string }>;
}

export default function DetailPage({ params }: DetailPageParams) {
  const { id } = use(params);
  const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({});
  
  // データをページに直書き
  const items = [
    { id: 1, title: "寿司", detail: "酢飯に魚介類や野菜を乗せた日本の伝統料理。" },
    { id: 2, title: "ラーメン", detail: "中華麺をスープで煮込んだ日本の国民食。" },
    { id: 3, title: "天ぷら", detail: "魚介類や野菜を衣で包んで揚げた料理。" },
    { id: 4, title: "うなぎ", detail: "蒲焼きにして食べるのが一般的で、甘辛いタレで焼く。" },
    { id: 5, title: "お好み焼き", detail: "キャベツや肉、魚介類を小麦粉の生地に混ぜて焼いた料理。" }
  ];

  // ページ読み込み時にlocalStorageからfavorite状態を復元
  useEffect(() => {
    const savedFavorites = localStorage.getItem('japaneseFoodFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (itemId: number) => {
    const newFavorites = {
      ...favorites,
      [itemId]: !favorites[itemId]
    };
    setFavorites(newFavorites);
    localStorage.setItem('japaneseFoodFavorites', JSON.stringify(newFavorites));
  };

  const item = items.find(item => item.id === parseInt(id));

  if (!item) {
    return (
      <div>
        <h1>料理が見つかりません</h1>
        <p>指定されたID: {id} の料理は存在しません。</p>
        <Link href="/">一覧に戻る</Link>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1>{item.title}</h1>
        <FavoriteButton 
          isFavorite={favorites[parseInt(id)] || false}
          onClick={() => toggleFavorite(parseInt(id))}
        />
      </div>
      <p>{item.detail}</p>
      <Link href="/">一覧に戻る</Link>
    </div>
  );
}
~~~

**学習ポイント**:
- localStorageを使用した状態の永続化
- useEffectフックの使用
- ページ間での状態共有

---

### ステップ6: 一覧と詳細ページに共通のお気に入りロジックがあるので、カスタムフックにリファクタ

重複したロジックをカスタムフックに抽出します。

#### 6-1. カスタムフックの作成

~~~typescript:app/hooks/useFavorites.ts
import { useState, useEffect } from 'react';

interface FavoritesState {
  [key: number]: boolean;
}

interface UseFavoritesReturn {
  isFavorite: (itemId: number) => boolean;
  toggleFavorite: (itemId: number) => void;
}

export function useFavorites(): UseFavoritesReturn {
  const [favorites, setFavorites] = useState<FavoritesState>({});

  // ページ読み込み時にlocalStorageからfavorite状態を復元
  useEffect(() => {
    const savedFavorites = localStorage.getItem('japaneseFoodFavorites');
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
    localStorage.setItem('japaneseFoodFavorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (itemId: number): boolean => favorites[itemId] || false;

  return { isFavorite, toggleFavorite };
}
~~~

#### 6-2. メインページの更新

~~~typescript:app/page.tsx
'use client';

import Link from 'next/link';
import { useFavorites } from './hooks/useFavorites';
import FavoriteButton from './components/FavoriteButton';

export default function Page() {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div>
      <h1>日本食一覧</h1>

      <ol>
        <li>
          <Link href="/detail/1">寿司</Link>
          <FavoriteButton 
            isFavorite={isFavorite(1)}
            onClick={() => toggleFavorite(1)}
          />
        </li>
        <li>
          <Link href="/detail/2">ラーメン</Link>
          <FavoriteButton 
            isFavorite={isFavorite(2)}
            onClick={() => toggleFavorite(2)}
          />
        </li>
        <li>
          <Link href="/detail/3">天ぷら</Link>
          <FavoriteButton 
            isFavorite={isFavorite(3)}
            onClick={() => toggleFavorite(3)}
          />
        </li>
        <li>
          <Link href="/detail/4">うなぎ</Link>
          <FavoriteButton 
            isFavorite={isFavorite(4)}
            onClick={() => toggleFavorite(4)}
          />
        </li>
        <li>
          <Link href="/detail/5">お好み焼き</Link>
          <FavoriteButton 
            isFavorite={isFavorite(5)}
            onClick={() => toggleFavorite(5)}
          />
        </li>
      </ol>
    </div>
  );
}
~~~

#### 6-3. 詳細ページの更新

~~~typescript:app/detail/[id]/page.tsx
'use client';

import { use } from 'react';
import Link from 'next/link';
import { useFavorites } from '../../hooks/useFavorites';
import FavoriteButton from '../../components/FavoriteButton';

interface DetailPageParams {
  params: Promise<{ id: string }>;
}

export default function DetailPage({ params }: DetailPageParams) {
  const { id } = use(params);
  const { isFavorite, toggleFavorite } = useFavorites();
  
  // データをページに直書き
  const items = [
    { id: 1, title: "寿司", detail: "酢飯に魚介類や野菜を乗せた日本の伝統料理。" },
    { id: 2, title: "ラーメン", detail: "中華麺をスープで煮込んだ日本の国民食。" },
    { id: 3, title: "天ぷら", detail: "魚介類や野菜を衣で包んで揚げた料理。" },
    { id: 4, title: "うなぎ", detail: "蒲焼きにして食べるのが一般的で、甘辛いタレで焼く。" },
    { id: 5, title: "お好み焼き", detail: "キャベツや肉、魚介類を小麦粉の生地に混ぜて焼いた料理。" }
  ];

  const item = items.find(item => item.id === parseInt(id));

  if (!item) {
    return (
      <div>
        <h1>料理が見つかりません</h1>
        <p>指定されたID: {id} の料理は存在しません。</p>
        <Link href="/">一覧に戻る</Link>
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
      <Link href="/">一覧に戻る</Link>
    </div>
  );
}
~~~

**学習ポイント**:
- カスタムフックの作成と使用
- ロジックの再利用
- コードの重複排除
- TypeScriptの型定義

---

### ステップ7: 定数をコンスタントファイルにリファクタ

ハードコードされた文字列を定数ファイルに抽出します。

#### 7-1. 定数ファイルの作成

~~~typescript:app/constants.ts
// アプリケーション定数
export const APP_TITLE: string = '日本食一覧';
export const APP_DESCRIPTION: string = '日本の伝統料理とその特徴を紹介するアプリケーション';
export const STORAGE_KEY: string = 'japaneseFoodFavorites';
export const ERROR_MESSAGE: string = '料理が見つかりません';
export const BACK_TO_LIST: string = '一覧に戻る';
~~~

#### 7-2. データファイルの作成

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

#### 7-3. カスタムフックの更新

~~~typescript:app/hooks/useFavorites.ts
import { useState, useEffect } from 'react';
import { STORAGE_KEY } from '../constants';

interface FavoritesState {
  [key: number]: boolean;
}

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

#### 7-4. メインページの更新

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

#### 7-5. 詳細ページの更新

~~~typescript:app/detail/[id]/page.tsx
'use client';

import { use } from 'react';
import Link from 'next/link';
import { items } from '../../data';
import { useFavorites } from '../../hooks/useFavorites';
import FavoriteButton from '../../components/FavoriteButton';
import { ERROR_MESSAGE, BACK_TO_LIST } from '../../constants';

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
        <p>指定されたID: {id} の料理は存在しません。</p>
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

#### 7-6. レイアウトファイルの更新

~~~typescript:app/layout.tsx
import "./globals.css";
import { APP_TITLE, APP_DESCRIPTION } from './constants';
import { ReactNode } from 'react';

export const metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
};

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

**学習ポイント**:
- 定数の一元管理
- データとロジックの分離
- 保守性の向上
- コードの可読性向上

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

## 🔍 最終的なプロジェクト構造

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

## 🧪 学習ポイントまとめ

### Next.js 15.3.4の新機能
- **App Router**: ファイルベースのルーティング
- **Turbopack**: 高速な開発サーバー
- **メタデータAPI**: SEO対応のメタデータ管理
- **動的ルーティング**: `[id]`フォルダによる動的パス

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
- **データ分離**: データとロジックの分離

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

この段階的ハンズオンを通じて、Next.js 15.3.4とReact 19を使用したモダンなWebアプリケーション開発の基礎を段階的に学びました。各ステップで新しい概念を追加し、最終的には保守性の高い、型安全なアプリケーションを構築することができました。

実践的なプロジェクトを通じて、最新の技術スタックとベストプラクティスを身につけることができました。次のステップとして、発展課題に挑戦したり、より複雑なアプリケーションの開発に取り組んでみてください！ 