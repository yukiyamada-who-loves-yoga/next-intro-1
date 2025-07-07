# Next.js 学習コンセプトガイド

## 📚 学習の前提

### 特化して学ぶこと
- **Next.jsの使い方**に特化した学習
- 段階的なコンセプト理解を重視

### 設計方針
Next.jsのコンセプト理解にフォーカスし、できる限りコードをシンプルに保つために以下を実施 
- **JavaScriptで実装**: TypeScriptの複雑さを避ける
- **localStorageを使用**: データベースの複雑さを避ける
- **段階的学習**: 1〜2つの新しいコンセプトを各レッスンで学ぶ
- **理解優先**: 正確性よりも理解しやすさを重視した抽象化説明

---

## 🎯 学習項目

### 📋 学習項目サマリ

```
#### 入門コンセプト（基礎）
1. プロジェクトセットアップ
2. App Routerの基本
3. コンポーネントとレンダリング (React)
4. ナビゲーション (React)
5. スタイリング
6. データ管理 (React)

#### 初級コンセプト（応用）
7. メタデータとSEO
8. レイアウトとUI
9. データフェッチング
10. フォームとインタラクション (React)

#### 中級コンセプト（発展）
11. API Routes
12. 認証とセキュリティ
13. パフォーマンス最適化
14. デプロイメント
```

### 入門コンセプト（基礎）

#### 1. プロジェクトセットアップ
- **create-next-app**: Next.jsプロジェクトの作成
- **package.json**: 依存関係の管理
- **開発サーバー**: `npm run dev`でのローカル開発
- **Turbopack**: 高速な開発サーバー

#### 2. App Routerの基本
- **ファイルベースルーティング**: フォルダ構造によるルーティング
- **page.js**: 各ルートのメインページコンポーネント
- **layout.js**: 共通レイアウトの定義
- **動的ルーティング**: `[id]`フォルダによる動的パス

#### 3. コンポーネントとレンダリング (React)
- **'use client'**: クライアントコンポーネントの指定 (React)
- **Server Components**: デフォルトのサーバーサイドレンダリング (React)
- **コンポーネントの分割**: 再利用可能なコンポーネント設計 (React)
- **props**: コンポーネント間のデータ受け渡し (React)

#### 4. ナビゲーション (React)
- **Linkコンポーネント**: クライアントサイドナビゲーション (React)
- **useRouter**: プログラムによるナビゲーション (React)
- **params**: 動的ルートパラメータの取得
- **React.use()**: Next.js 15でのparams処理 (React)

#### 5. スタイリング
- **CSS Modules**: コンポーネント固有のスタイリング
- **globals.css**: グローバルスタイルの定義
- **Tailwind CSS**: ユーティリティファーストCSS（オプション）
- **レスポンシブデザイン**: モバイル・デスクトップ対応

#### 6. データ管理 (React)
- **useState**: ローカル状態管理 (React)
- **useEffect**: 副作用の処理 (React)
- **localStorage**: クライアントサイドデータ永続化
- **カスタムフック**: 再利用可能なロジック (React)

---

### 初級コンセプト（応用）

#### 7. メタデータとSEO
- **metadata**: ページのメタデータ設定
- **favicon**: ファビコンの設定
- **title**: ページタイトルの動的設定
- **description**: ページ説明の設定

#### 8. レイアウトとUI
- **RootLayout**: アプリケーション全体のレイアウト
- **nested layouts**: ネストしたレイアウト
- **loading.js**: ローディング状態の表示
- **error.js**: エラーハンドリング

#### 9. データフェッチング
- **fetch API**: サーバーサイドでのデータ取得
- **cache**: データのキャッシュ戦略
- **revalidate**: データの再検証
- **loading states**: ローディング状態の管理

#### 10. フォームとインタラクション (React)
- **Server Actions**: サーバーサイドでのフォーム処理
- **useFormState**: フォーム状態の管理 (React)
- **useFormStatus**: フォーム送信状態の管理 (React)
- **バリデーション**: フォーム入力の検証

---

### 中級コンセプト（発展）

#### 11. API Routes
- **Route Handlers**: APIエンドポイントの作成
- **HTTP methods**: GET, POST, PUT, DELETE
- **request/response**: リクエスト・レスポンスの処理
- **middleware**: リクエストの前処理

#### 12. 認証とセキュリティ
- **NextAuth.js**: 認証システムの実装
- **middleware**: 認証チェック
- **環境変数**: 機密情報の管理
- **CORS**: クロスオリジンリクエスト

#### 13. パフォーマンス最適化
- **Image component**: 画像の最適化
- **Font optimization**: フォントの最適化
- **Code splitting**: コード分割
- **Bundle analyzer**: バンドルサイズの分析

#### 14. デプロイメント
- **Vercel**: クラウドプラットフォームへのデプロイ
- **環境変数**: 本番環境での設定
- **ビルド最適化**: 本番ビルドの最適化
- **CI/CD**: 継続的インテグレーション

---

## 📖 この教材で学べる内容

### 実装済みコンセプト
✅ **App Router**: ファイルベースルーティング  
✅ **'use client'**: クライアントコンポーネント (React)  
✅ **Link**: ナビゲーション (React)  
✅ **動的ルーティング**: `[id]`パラメータ  
✅ **layout.js**: ルートレイアウト  
✅ **useState/useEffect**: 状態管理 (React)  
✅ **localStorage**: データ永続化  
✅ **カスタムフック**: useFavorites (React)  
✅ **コンポーネント分割**: FavoriteButton (React)  
✅ **CSS**: スタイリング  
✅ **metadata**: メタデータ設定  
✅ **React.use()**: Next.js 15対応 (React)  

### 追加で学べるコンセプト
🔄 **API Routes**: データの取得・更新  
🔄 **Server Actions**: フォーム処理 (React)  
🔄 **loading.js**: ローディング状態  
🔄 **error.js**: エラーハンドリング  
🔄 **middleware**: リクエスト処理  
🔄 **Image component**: 画像最適化  

---

## 🎓 学習の進め方

### 段階1: 基礎理解（1-2週間）
1. create-next-appでプロジェクト作成
2. App Routerの基本概念
3. コンポーネントの作成と表示 (React)
4. ナビゲーションの実装 (React)

### 段階2: 機能実装（2-3週間）
1. 状態管理の実装 (React)
2. データの永続化
3. カスタムフックの作成 (React)
4. コンポーネントの分割 (React)

### 段階3: 応用発展（3-4週間）
1. API Routesの実装
2. Server Actionsの活用 (React)
3. パフォーマンス最適化
4. デプロイメント

---

## 🔧 実践的な学習方法

### コードリーディング
- 各ファイルの役割を理解
- コンポーネント間の関係性を把握
- データフローの追跡

### ハンズオン実践
- 既存コードの修正・拡張
- 新しい機能の追加
- バグの修正

### 概念の理解
- なぜその実装方法を選んだか
- 他の実装方法との比較
- ベストプラクティスの理解

---

## 📚 参考資料

### 公式ドキュメント
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [App Router Guide](https://nextjs.org/docs/app)

### 学習リソース
- Next.js公式チュートリアル
- React公式チュートリアル
- コミュニティブログ・記事

---

## 🎯 学習目標

### 短期目標（1ヶ月）
- Next.jsの基本概念を理解
- シンプルなアプリケーションを構築
- App Routerの使い方を習得

### 中期目標（3ヶ月）
- 実用的なWebアプリケーションを構築
- データフェッチングと状態管理を習得
- デプロイメントプロセスを理解

### 長期目標（6ヶ月）
- 本格的なWebアプリケーションを構築
- パフォーマンス最適化を実践
- チーム開発でのNext.js活用

---

**最終更新**: 2025年6月25日  
**バージョン**: 1.0.0

---

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