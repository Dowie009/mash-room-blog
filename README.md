# SAPPORO MASH ROOM STUDIO (Blog Archive)

物語（Story）とテック（Tech）の融合。夕暮れ（Magic Hour）のトーンで紡ぐブログアーカイブ。

## 🚀 技術スタック

- **Astro v5**: 静的サイトジェネレーター
- **React 18**: UIコンポーネント（Islands Architecture）
- **TypeScript**: 型安全性
- **Tailwind CSS**: スタイリング
- **View Transitions**: スムーズなページ遷移

## 📁 プロジェクト構造

```
/
├── public/
│   └── images/          # 画像アセット
├── src/
│   ├── components/      # Reactコンポーネント
│   │   ├── App.tsx      # メインアプリケーション
│   │   ├── LandingPage.tsx
│   │   ├── StoryLayout.tsx
│   │   ├── TechLayout.tsx
│   │   ├── Reader.tsx
│   │   └── AudioPlayer.tsx
│   ├── data/
│   │   └── posts.ts     # 記事データ（画像パス修正済み）
│   ├── layouts/
│   │   └── Layout.astro  # サイト全体のレイアウト
│   ├── pages/
│   │   └── index.astro  # エントリーポイント
│   └── styles/
│       └── global.css   # グローバルスタイル
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🛠️ セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:4321` を開いてください。

### 3. ビルド

```bash
npm run build
```

## ✨ 主な機能

### Story Mode（物語モード）
- 縦書き/横書きの切り替え
- 読書体験の最適化
- 音楽プレイヤー統合

### Tech Mode（テックモード）
- カード型UI
- AI活用術とDTM機材の記事
- モーダルリーダー

### View Transitions
- ページ遷移時のスムーズなアニメーション
- 音楽プレイヤーの永続化（`transition:persist`）

## 🔥 Firebase 統合（準備中）

しおり機能のためにFirebase SDKを組み込む準備が整っています。

1. `.env.example` を `.env` にコピー
2. Firebase設定値を入力
3. `src/lib/firebase.ts` を作成してFirebaseを初期化

## 📝 画像パスについて

記事データ内の画像パスは以下のように変換されています：

- **変更前**: `http://xn--3-sj5c.jp/blog/wp-content/uploads/2025/12/ファイル名.png`
- **変更後**: `/images/ファイル名.png`

画像は `public/images/` フォルダに配置してください。

## 🎨 デザインコンセプト

- **カラーパレット**: 夕暮れ（Magic Hour）のトーン
- **フォント**: 
  - 物語: Shippori Mincho（明朝体）
  - テック: Zen Kaku Gothic New（ゴシック体）

## 📄 ライセンス

© 2025 SAPPORO MASH ROOM STUDIO
