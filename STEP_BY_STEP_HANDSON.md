# Next.js 15.3.4 + TypeScript ハンズオン教材

## 概要

このハンズオンでは、Next.js 15.3.4とTypeScriptを使用して、日本食紹介アプリケーションを構築します。App Routerを使用し、最小限の構成でTypeScriptの基本を学びます。

**対象者**: Next.jsとTypeScriptの基礎を学びたい方
**所要時間**: 約30分
**前提知識**: HTML、CSS、JavaScriptの基礎知識

## 技術スタック

- **Next.js**: 15.3.4（最新版）
- **React**: 19
- **TypeScript**: 5.x
- **App Router**: Next.js 13以降の新しいルーティングシステム

## プロジェクト構成

```
next-intro/
├── app/
│   ├── page.tsx          # メインページ（日本食一覧）
│   ├── layout.tsx        # ルートレイアウト
│   ├── globals.css       # グローバルスタイル
│   └── favicon.ico       # ファビコン
├── tsconfig.json         # TypeScript設定
├── package.json          # 依存関係
└── README.md            # プロジェクト説明
```

## ステップ1: プロジェクトの初期化

### 1.1 プロジェクトの作成

```bash
npx create-next-app@latest next-intro --typescript --tailwind=false --eslint=false --app --src-dir=false --import-alias="@/*"
cd next-intro
```

### 1.2 依存関係の確認

`package.json`の主要な依存関係：

```json
{
  "dependencies": {
    "next": "15.3.4",
    "react": "^19",
    "react-dom": "^19"
  },
  "devDependencies": {
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "typescript": "^5"
  }
}
```

## ステップ2: 基本的なページ構造の作成

### 2.1 ルートレイアウトの作成

`app/layout.tsx`を作成します：

```typescript
import "./globals.css";
import { ReactNode } from 'react';

// RootLayoutのProps型定義
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body>
        <h1>日本食一覧</h1>
        <p>日本の伝統料理とその特徴を紹介するアプリケーション</p>
        {children}
      </body>
    </html>
  );
}
```

**ポイント**:
- `interface`を使用してPropsの型を定義
- `ReactNode`型でchildrenの型を指定
- 日本語のlang属性を設定

### 2.2 メインページの作成

`app/page.tsx`を作成します：

```typescript
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
```

**ポイント**:
- `interface Item`でデータ構造を定義
- 配列の型注釈: `Item[]`
- `map`関数でリストをレンダリング
- `key`プロパティでReactの最適化をサポート

## ステップ3: TypeScriptの基本概念

### 3.1 型定義の重要性

TypeScriptでは、データの構造を事前に定義することで、開発時のエラーを防ぎます。

```typescript
// 良い例：明確な型定義
interface Item {
  id: number;
  name: string;
  desc: string;
}

// 悪い例：型定義なし
const items = [
  { id: 1, name: "寿司", desc: "..." }
];
```

### 3.2 interface vs type

```typescript
// interface（推奨）：オブジェクトの構造を定義
interface Item {
  id: number;
  name: string;
  desc: string;
}

// type：より複雑な型定義に使用
type ItemId = number;
type ItemName = string;
type ItemArray = Item[];
```

### 3.3 プロパティ名の命名規則

```typescript
// 良い例：明確で簡潔
interface Item {
  id: number;      // 識別子
  name: string;    // 名前
  desc: string;    // 説明（descriptionの短縮）
}

// 避けるべき例：曖昧な名前
interface Item {
  title: string;   // 何のタイトル？
  detail: string;  // 何の詳細？
}
```

## ステップ4: アプリケーションの実行

### 4.1 開発サーバーの起動

```bash
npm run dev
```

### 4.2 アクセス確認

ブラウザで http://localhost:3000 にアクセスして、以下の内容が表示されることを確認：

- ページタイトル: "日本食一覧"
- 説明文: "日本の伝統料理とその特徴を紹介するアプリケーション"
- 番号付きリスト:
  1. 寿司
  2. ラーメン

## ステップ5: コードの理解

### 5.1 ファイル構造の説明

**App Routerの特徴**:
- `app/`ディレクトリがルート
- `page.tsx`がルートページ（`/`）
- `layout.tsx`が全ページの共通レイアウト

### 5.2 コンポーネントの役割

**RootLayout**:
- HTMLの基本構造を提供
- 全ページで共通のヘッダーを表示
- グローバルスタイルを適用

**Page**:
- メインコンテンツを表示
- データを配列から取得
- リスト形式で表示

### 5.3 TypeScriptの利点

1. **型安全性**: コンパイル時にエラーを検出
2. **開発効率**: IDEの自動補完機能
3. **保守性**: コードの意図が明確
4. **リファクタリング**: 安全な変更が可能

## ステップ6: 発展的な学習

### 6.1 データの追加

新しい料理を追加してみましょう：

```typescript
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
  },
  { 
    id: 3, 
    name: "天ぷら",
    desc: "魚介類や野菜を衣で包んで揚げた料理。"
  }
];
```

### 6.2 スタイリングの追加

`app/globals.css`にスタイルを追加：

```css
body {
  font-family: 'Arial', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #333;
  border-bottom: 2px solid #007acc;
}

ol {
  list-style-type: decimal;
  padding-left: 20px;
}

li {
  margin: 10px 0;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
}
```

## まとめ

このハンズオンで学んだこと：

1. **Next.js 15.3.4**の基本設定
2. **App Router**の使用方法
3. **TypeScript**の型定義
4. **interface**の活用
5. **コンポーネント**の作成方法

### 次のステップ

- 詳細ページの追加
- お気に入り機能の実装
- データベース連携
- APIルートの作成
- 認証機能の追加

## 参考資料

- [Next.js公式ドキュメント](https://nextjs.org/docs)
- [TypeScript公式ドキュメント](https://www.typescriptlang.org/docs)
- [React公式ドキュメント](https://react.dev)

## トラブルシューティング

### よくあるエラー

1. **型エラー**: `tsconfig.json`の設定を確認
2. **コンパイルエラー**: 依存関係の再インストール
3. **表示エラー**: ブラウザのキャッシュクリア

### デバッグ方法

```bash
# 型チェック
npx tsc --noEmit

# ビルドテスト
npm run build

# 開発サーバー再起動
npm run dev
```

---

**作成日**: 2025年7月6日  
**バージョン**: Next.js 15.3.4  
**対象**: TypeScript初心者向け 