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

#### 📖 コード解説（初心者向け）

**1行目**: `import "./globals.css";`
- CSSファイルをインポートしています
- このファイルのスタイルが全体のアプリケーションに適用されます
- 相対パス（`./`）で同じフォルダ内のファイルを指定

**2行目**: `import { ReactNode } from 'react';`
- Reactから`ReactNode`という型をインポート
- `ReactNode`は、Reactコンポーネントが表示できる内容（テキスト、HTML要素、他のコンポーネントなど）を表す型

**4-6行目**: `interface RootLayoutProps`
- TypeScriptの型定義（インターフェース）
- このコンポーネントが受け取るプロパティ（props）の型を定義
- `children`というプロパティがあり、型は`ReactNode`

**8行目**: `export default function RootLayout({ children }: RootLayoutProps)`
- `export default`: このファイルのメインの関数として外部に公開
- `function RootLayout`: 関数名
- `{ children }`: 分割代入（destructuring）でpropsからchildrenを取り出し
- `: RootLayoutProps`: この関数の引数の型を指定

**9-17行目**: `return`文
- JSX（JavaScript XML）でHTMLのような構造を返す
- `<html lang="ja">`: HTMLのルート要素、日本語を指定
- `<body>`: ページの本文
- `<h1>`: 見出し（最も大きな見出し）
- `<p>`: 段落
- `{children}`: このレイアウトを使用するページの内容がここに表示される

**Next.js App Routerの特徴**:
- `layout.tsx`は全ページで共通のレイアウトを提供
- ヘッダー、ナビゲーション、フッターなど、全ページで共通の要素をここに配置
- `children`に各ページの内容が自動的に挿入される

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

#### 📖 コード解説（初心者向け）

**1-4行目**: `interface Item`
- データの構造を定義するTypeScriptの型
- `id: number`: 数値型のID
- `name: string`: 文字列型の名前
- これにより、データの形が統一され、間違いを防げる

**6-10行目**: `const items: Item[]`
- `const`: 再代入できない定数
- `items`: 変数名
- `: Item[]`: 型注釈（Item型の配列）
- 配列の中に3つのオブジェクトが格納されている

**12行目**: `export default function Page()`
- このファイルのメイン関数
- Next.jsでは`page.tsx`がそのフォルダのページとして認識される
- `/app/page.tsx`は`/`（ルート）のページになる

**13-21行目**: `return`文
- `<div>`: コンテナ要素（他の要素を包む）
- `<ol>`: 順序付きリスト（ordered list）
- `{items.map((item) => (...))}`: 配列の各要素に対して処理を実行

**map関数の詳細**:
- `items.map()`: 配列の各要素に対して関数を実行し、新しい配列を作成
- `(item) => (...)`: アロー関数（各要素を`item`として受け取る）
- `key={item.id}`: Reactが要素を識別するための一意のキー
- `<li>`: リストアイテム（list item）
- `{item.name}`: オブジェクトのnameプロパティを表示

**Reactの重要な概念**:
- **コンポーネント**: 再利用可能なUIの部品
- **JSX**: JavaScriptの中でHTMLのような記法を使用
- **props**: コンポーネントに渡されるデータ
- **key**: リストの各要素に必要な一意の識別子

### app/globals.css - グローバルスタイル

~~~css filename="app/globals.css"
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px;
}
~~~

#### 📖 コード解説（初心者向け）

**CSSの基本構造**:
- `body`: セレクタ（どの要素にスタイルを適用するか）
- `{ }`: 宣言ブロック（スタイルの内容）
- `font-family`: プロパティ（どのスタイルを変更するか）
- `Arial, Helvetica, sans-serif`: 値（フォントの種類、フォールバック順）

**詳細説明**:
- `font-family`: 文字のフォントを指定
  - `Arial`: メインフォント
  - `Helvetica`: Arialがない場合の代替
  - `sans-serif`: どちらもない場合の汎用フォント
- `margin: 20px`: 要素の外側の余白を20ピクセルに設定

**CSSの役割**:
- 見た目を整える
- レイアウトを調整する
- ユーザビリティを向上させる

## 🔧 TypeScriptの基本概念

### 1. Interface（インターフェース）

Propsやデータ構造の型定義に使用：

~~~tsx
interface Item {
  id: number;
  name: string;
}
~~~

**初心者向け解説**:
- **interface**: オブジェクトの形を定義するTypeScriptの機能
- **型安全性**: 間違ったデータ型を使うとエラーになる
- **開発効率**: エディタが自動補完を提供
- **保守性**: コードの意図が明確になる

### 2. 型注釈

変数や関数の引数に型を指定：

~~~tsx
const items: Item[] = [...];
function RootLayout({ children }: RootLayoutProps) { ... }
~~~

**初心者向け解説**:
- `: Item[]`: 配列の型注釈
- `: RootLayoutProps`: 関数の引数の型注釈
- 型注釈により、間違いを事前に防げる

### 3. ジェネリック型

Reactの組み込み型を使用：

~~~tsx
import { ReactNode } from 'react';
interface RootLayoutProps {
  children: ReactNode;
}
~~~

**初心者向け解説**:
- `ReactNode`: Reactが表示できるすべての内容を表す型
- 文字列、数値、HTML要素、コンポーネントなどが含まれる
- 柔軟性と型安全性の両方を提供

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

**初心者向け解説**:
- `background-color`: 背景色
- `color`: 文字色
- `text-align`: 文字の配置
- `max-width`: 最大幅
- `margin: 0 auto`: 中央揃え
- `padding`: 内側の余白
- `border-radius`: 角を丸く
- `box-shadow`: 影を付ける

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

**初心者向け解説**:
- `npm run dev`: package.jsonのscriptsセクションのdevコマンドを実行
- `--turbopack`: Next.js 15の新しい高速開発サーバー
- `localhost:3000`: ローカルマシンの3000番ポート
- `Network`: 同じネットワーク内の他のデバイスからアクセス可能

## 🔍 動作確認

1. ブラウザで`http://localhost:3000`にアクセス
2. 「日本食一覧」のタイトルが表示される
3. 寿司、ラーメン、天ぷらのリストが表示される

**初心者向け解説**:
- **ブラウザ**: Chrome、Firefox、Safariなど
- **URL**: インターネット上の住所のようなもの
- **localhost**: 自分のコンピュータを指す
- **ポート**: アプリケーションが使用する通信の窓口

## 📚 学習のポイント

### Next.js 15.3.4の特徴
- **App Router**: ファイルベースのルーティング
  - フォルダ名がURLになる
  - `page.tsx`がそのフォルダのページになる
- **Server Components**: デフォルトでサーバーサイドレンダリング
  - パフォーマンスが向上
  - SEOに有利
- **Turbopack**: 高速な開発サーバー
  - 従来のWebpackより高速
  - ホットリロードが素早い
- **TypeScript**: 組み込みサポート
  - 設定不要で使用可能
  - 型安全性を提供

### React 19の特徴
- **React Compiler**: 自動最適化
  - パフォーマンスが自動で改善
  - 開発者が意識しなくても最適化
- **Actions**: フォーム処理の改善
  - フォームの送信が簡単に
  - サーバーアクションの統合
- **Document Metadata**: メタデータの改善
  - SEOの向上
  - ページタイトルや説明の管理

### TypeScriptの利点
- **型安全性**: コンパイル時のエラー検出
  - 実行前にバグを発見
  - 予期しない動作を防止
- **開発体験**: 自動補完とリファクタリング
  - エディタが賢くサポート
  - コードの変更が安全
- **保守性**: コードの可読性向上
  - 意図が明確
  - チーム開発に有利

## 🛠️ トラブルシューティング

### よくある問題

1. **TypeScriptエラー**
   - `tsconfig.json`の設定を確認
   - 型定義を適切に追加
   - エラーメッセージをよく読む

2. **開発サーバーが起動しない**
   - ポート3000が使用中の場合、別のポートを指定
   - 依存関係を再インストール
   - ターミナルを再起動

3. **スタイルが適用されない**
   - `globals.css`が`layout.tsx`でインポートされているか確認
   - ブラウザのキャッシュをクリア
   - 開発サーバーを再起動

### デバッグ方法

~~~bash filename="Terminal"
# 型チェック
npx tsc --noEmit

# ビルドテスト
npm run build
~~~

**初心者向け解説**:
- `npx tsc --noEmit`: TypeScriptの型チェックのみ実行
- `npm run build`: 本番用のビルドをテスト
- エラーメッセージは英語だが、内容を理解しよう

## 📖 次のステップ

このハンズオンを完了後、以下の機能を追加できます：

1. **詳細ページの追加**
   - 動的ルーティング
   - 個別の料理ページ
   - `app/[id]/page.tsx`のような構造

2. **お気に入り機能**
   - 状態管理
   - ローカルストレージ
   - `useState`フックの使用

3. **スタイリングの改善**
   - CSS Modules
   - Tailwind CSS
   - レスポンシブデザイン

4. **データフェッチング**
   - API Routes
   - 外部API連携
   - データベース接続

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

**初心者へのアドバイス**:
- エラーは学習の一部です。慌てずにエラーメッセージを読んでください
- 小さな変更から始めて、少しずつ機能を追加しましょう
- 公式ドキュメントを参考にしながら学習を進めてください
- 実際にコードを書いて、動かして、試してみることが大切です

この基礎を元に、より複雑な機能を追加してNext.jsアプリケーションの開発スキルを向上させましょう！ 