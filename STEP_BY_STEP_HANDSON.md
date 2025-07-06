# Next.js 15.3.4 + React 19 + TypeScript ハンズオン教材

**作成日**: 2025年7月6日  
**対象バージョン**: Next.js 15.3.4, React 19, TypeScript 5.x  
**学習時間**: 約30分

## 📋 プロジェクト概要

このハンズオンでは、Next.js 15.3.4とReact 19を使った最小限の日本食紹介アプリを作成します。TypeScriptを使用し、App Routerを採用した最新の構成で学習します。

### 🎯 学習目標
- Next.js 15.3.4の基本概念を理解する
- App Routerの使い方を習得する
- TypeScriptの基本的な型定義を学ぶ
- コンポーネントベースの開発を体験する

## 🚀 プロジェクト構成

現在のプロジェクト構成：

```
next-intro/
├── app/
│   ├── layout.tsx      # ルートレイアウト
│   ├── page.tsx        # メインページ
│   ├── globals.css     # グローバルスタイル
│   └── favicon.ico     # ファビコン
├── package.json        # 依存関係
├── tsconfig.json       # TypeScript設定
└── README.md          # プロジェクト説明
```

## 📦 依存関係

**実行時点の最新バージョン**:
- Next.js: 15.3.4（最新版）
- React: 19.0.0（最新版）
- TypeScript: 5.8.3（最新版）

**参照した公式ドキュメント**:
- [Next.js App Router Documentation](https://nextjs.org/docs/app/building-your-application/upgrading/from-vite)
- [Next.js TypeScript Configuration](https://nextjs.org/docs/app/getting-started/installation)
- [TypeScript React Configuration](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)

## 🛠️ セットアップ手順

### 1. プロジェクトの起動

~~~bash filename="Terminal"
npm run dev
~~~

開発サーバーが起動し、`http://localhost:3000`でアプリケーションにアクセスできます。

### 2. プロジェクト構造の確認

現在のプロジェクトは最小限の構成で、以下のファイルが含まれています：

## 📁 ファイル詳細

### app/layout.tsx - ルートレイアウト

~~~tsx filename="app/layout.tsx"
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
        <p>日本の伝統料理とその特徴を紹介するアプリ</p>
        {children}
      </body>
    </html>
  );
}
~~~

**ポイント**:
- `interface RootLayoutProps`でPropsの型を定義
- `ReactNode`型でchildrenの型を指定
- 日本語のlang属性を設定
- グローバルCSSをインポート

### app/page.tsx - メインページ

~~~tsx filename="app/page.tsx"
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
~~~

**ポイント**:
- `interface Item`でデータ構造の型を定義
- 配列の型注釈`Item[]`を使用
- `map`関数でリストをレンダリング
- `key`プロパティでReactの最適化をサポート

### app/globals.css - グローバルスタイル

~~~css filename="app/globals.css"
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px;
}
~~~

**ポイント**:
- 基本的なフォントとマージンを設定
- `layout.tsx`でインポートされ、全体に適用

## 🔧 TypeScriptの基本概念

### 1. Interface（インターフェース）

Propsやデータ構造の型定義に使用：

~~~tsx
interface Item {
  id: number;
  name: string;
}
~~~

### 2. 型注釈

変数や関数の引数に型を指定：

~~~tsx
const items: Item[] = [...];
function RootLayout({ children }: RootLayoutProps) { ... }
~~~

### 3. ジェネリック型

Reactの組み込み型を使用：

~~~tsx
import { ReactNode } from 'react';
interface RootLayoutProps {
  children: ReactNode;
}
~~~

## 🎨 スタイリング

### 基本的なCSS

現在のアプリケーションには最小限のスタイルが適用されています：

- フォント: Arial, Helvetica, sans-serif
- マージン: 20px

### カスタムスタイルの追加

必要に応じて`globals.css`にスタイルを追加できます：

~~~css filename="app/globals.css"
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px;
  background-color: #f5f5f5;
}

h1 {
  color: #333;
  text-align: center;
}

ol {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

li {
  padding: 10px;
  margin: 5px 0;
  border-bottom: 1px solid #eee;
}
~~~

## 🚀 開発サーバーの起動

~~~bash filename="Terminal"
npm run dev
~~~

**出力例**:
```
> next-intro@0.1.0 dev
> next dev --turbopack
   ▲ Next.js 15.3.4 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://10.162.174.19:3000
 ✓ Starting...
 ✓ Ready in 543ms
```

## 🔍 動作確認

1. ブラウザで`http://localhost:3000`にアクセス
2. 「日本食一覧」のタイトルが表示される
3. 寿司、ラーメン、天ぷらのリストが表示される

## 📚 学習のポイント

### Next.js 15.3.4の特徴
- **App Router**: ファイルベースのルーティング
- **Server Components**: デフォルトでサーバーサイドレンダリング
- **Turbopack**: 高速な開発サーバー
- **TypeScript**: 組み込みサポート

### React 19の特徴
- **React Compiler**: 自動最適化
- **Actions**: フォーム処理の改善
- **Document Metadata**: メタデータの改善

### TypeScriptの利点
- **型安全性**: コンパイル時のエラー検出
- **開発体験**: 自動補完とリファクタリング
- **保守性**: コードの可読性向上

## 🛠️ トラブルシューティング

### よくある問題

1. **TypeScriptエラー**
   - `tsconfig.json`の設定を確認
   - 型定義を適切に追加

2. **開発サーバーが起動しない**
   - ポート3000が使用中の場合、別のポートを指定
   - 依存関係を再インストール

3. **スタイルが適用されない**
   - `globals.css`が`layout.tsx`でインポートされているか確認

### デバッグ方法

~~~bash filename="Terminal"
# 型チェック
npx tsc --noEmit

# ビルドテスト
npm run build
~~~

## 📖 次のステップ

このハンズオンを完了後、以下の機能を追加できます：

1. **詳細ページの追加**
   - 動的ルーティング
   - 個別の料理ページ

2. **お気に入り機能**
   - 状態管理
   - ローカルストレージ

3. **スタイリングの改善**
   - CSS Modules
   - Tailwind CSS

4. **データフェッチング**
   - API Routes
   - 外部API連携

## 🎯 まとめ

このハンズオンでは、Next.js 15.3.4とReact 19を使った最小限の日本食紹介アプリを作成しました。

**学んだこと**:
- Next.js App Routerの基本構造
- TypeScriptの基本的な型定義
- React 19のコンポーネント作成
- ファイルベースのルーティング

**技術スタック**:
- Next.js 15.3.4（最新版）
- React 19（最新版）
- TypeScript 5.x（最新版）
- App Router（推奨方式）

この基礎を元に、より複雑な機能を追加してNext.jsアプリケーションの開発スキルを向上させましょう！ 