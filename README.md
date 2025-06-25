# 日本食一覧アプリケーション

日本の伝統料理とその特徴を紹介するNext.jsアプリケーションです。

## 🍣 機能

- **料理一覧表示**: 日本の伝統料理の一覧を表示
- **詳細ページ**: 各料理の詳細情報を表示
- **お気に入り機能**: 料理をお気に入りに追加・削除（localStorageで永続化）
- **レスポンシブデザイン**: モバイル・デスクトップ対応

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 15.3.4 (App Router)
- **UIライブラリ**: React 19.0.0
- **開発サーバー**: Turbopack
- **言語**: JavaScript (ES Modules)
- **スタイリング**: CSS Modules

## 📁 プロジェクト構造

```
next-intro/
├── app/
│   ├── components/
│   │   └── FavoriteButton.js      # 再利用可能なお気に入りボタン
│   ├── hooks/
│   │   └── useFavorites.js        # お気に入り機能のカスタムフック
│   ├── detail/
│   │   └── [id]/
│   │       └── page.js            # 料理詳細ページ
│   ├── constants.js               # アプリケーション定数
│   ├── data.js                    # 料理データ
│   ├── globals.css                # グローバルスタイル
│   ├── layout.js                  # ルートレイアウト
│   └── page.js                    # ホームページ（一覧）
├── package.json
└── README.md
```

## 🚀 セットアップ

### 前提条件

- Node.js 18.17以上
- npm または yarn

### インストール

1. リポジトリをクローン
```bash
git clone https://github.com/yukiyamada-who-loves-yoga/next-intro-1.git
cd next-intro-1
```

2. 依存関係をインストール
```bash
npm install
```

3. 開発サーバーを起動
```bash
npm run dev
```

4. ブラウザで [http://localhost:3000](http://localhost:3000) を開く

### ビルド

```bash
npm run build
npm start
```

## 🏗️ アーキテクチャ

### コンポーネント設計

- **FavoriteButton**: 再利用可能なお気に入りボタンコンポーネント
- **useFavorites**: お気に入り状態管理のカスタムフック
- **定数管理**: アプリケーション全体の定数を一元管理

### データフロー

1. **一覧ページ**: 料理データを表示し、お気に入りボタンを提供
2. **詳細ページ**: 特定の料理の詳細情報を表示
3. **お気に入り機能**: localStorageを使用して状態を永続化

### 最新技術の活用

- **Next.js 15**: App Router、React.use()によるparams処理
- **React 19**: 最新のReact機能を活用
- **Turbopack**: 高速な開発サーバー

## 📱 機能詳細

### 料理一覧
- 5つの日本の伝統料理を表示
- 各料理にお気に入りボタンを配置
- 料理名をクリックで詳細ページに遷移

### お気に入り機能
- ハートアイコン（❤️/🤍）でお気に入り状態を表示
- localStorageを使用して状態を永続化
- ページ間でお気に入り状態が同期

### 詳細ページ
- 料理の詳細説明を表示
- お気に入りボタンで状態を切り替え
- 一覧ページへの戻るリンク

## 🎨 デザイン

- シンプルで直感的なUI
- 日本語に最適化されたフォント
- アクセシビリティに配慮したaria-label

## 🔧 開発

### カスタムフック

```javascript
// useFavorites.js
const { isFavorite, toggleFavorite } = useFavorites();
```

### コンポーネント

```javascript
// FavoriteButton.js
<FavoriteButton 
  isFavorite={isFavorite(id)}
  onClick={() => toggleFavorite(id)}
/>
```

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📞 サポート

質問や問題がある場合は、GitHubのIssuesページでお知らせください。

---

**最終更新**: 2025年6月25日
**バージョン**: 0.1.0 