# Blog - Claude引き継ぎドキュメント

**最終更新**: 2026-01-14
**ステータス**: 稼働中

---

## クイックスタート

```bash
cd "/Users/dowie009/Documents/MashProject/Active/blog" && npm run dev
```

- ローカル: http://localhost:4321
- 本番: Vercelにデプロイ済み
- GitHub: https://github.com/Dowie009/mash-room-blog.git

---

## 技術スタック

- フレームワーク: Astro 5.0
- UI: React + TailwindCSS
- アニメーション: GSAP
- デプロイ: Vercel

---

## ページ構成

| ページ | ファイル | URL | 内容 |
|--------|----------|-----|------|
| トップ | index.astro | / | Hero、横スクロール、NewPost |
| Chapter 1 | story.astro | /story | NOKE MONOGATARI（物語） |
| Chapter 2 | dtm.astro | /dtm | 機材・プラグイン記事 |
| Chapter 3 | tech.astro | /tech | AI・開発記事 |

### Chapter 2 (DTM) カテゴリ
DAW, DTM, PLUGIN, BIZ, TIPS, ESSAY

### Chapter 3 (Tech) カテゴリ
ASTRO, REACT, CSS, AI, DEV TIPS

---

## ディレクトリ構造

```
blog/
├── src/
│   ├── components/     # コンポーネント
│   │   ├── Hero.astro
│   │   ├── HorizontalScroll.astro
│   │   ├── NewPost.astro
│   │   ├── Footer.astro
│   │   └── react/      # Reactコンポーネント
│   ├── pages/          # ページ
│   │   ├── index.astro # トップ
│   │   ├── story.astro # Ch1
│   │   ├── dtm.astro   # Ch2
│   │   ├── tech.astro  # Ch3
│   │   ├── dtm/[slug].astro
│   │   └── tech/[slug].astro
│   ├── layouts/
│   └── content/        # 記事データ
│       ├── dtm/        # Ch2記事
│       └── tech/       # Ch3記事
├── public/             # 静的ファイル
└── _docs/              # このフォルダ
```

---

## 現在の状態

### 動作中の機能
- [x] トップページ（Hero、横スクロール）
- [x] Chapter 2 (DTM) 記事一覧・詳細
- [x] Chapter 3 (Tech) 記事一覧・詳細
- [x] Chapter 1 (Story) 基本表示

### 既知の問題
- なし

### 次のタスク
- 特になし（安定稼働中）

---

## 注意事項

- **触ってはいけない**: なし
- **重要な設定**: astro.config.mjs

---

## 用語（GLOSSARY参照）

- Ch1 = Story = 物語 = NOKE MONOGATARI
- Ch2 = DTM = ギア = 機材
- Ch3 = Tech = AI = 開発
