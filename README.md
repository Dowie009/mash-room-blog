# MASHROOM BLOG

札幌のクリエイティブスタジオ「MASHROOM」のブログサイト

---

## 🚀 クイックスタート

```bash
# 開発サーバー起動
npm run dev

# http://localhost:4321 でアクセス
```

---

## ✏️ コンテンツを編集する（簡単3ステップ）

### 1. テキストを変更する

```bash
# CONTENT.md を開いて編集
# ↓
# 保存したら以下を実行
npm run update-content

# ↓
# 開発サーバーで確認
npm run dev
```

### 2. 画像を差し替える

1. 新しい画像を `/public/images/` フォルダに配置
2. `CONTENT.md` でファイル名を指定
3. `npm run update-content` を実行

**詳細は → `docs/IMAGE_GUIDE.md`**

---

## 📁 プロジェクト構成

```
mash-room-blog/
├── CONTENT.md               ⭐️ ここでテキストを編集！
├── public/images/           🖼️ 画像はここに配置
├── src/
│   ├── components/          Astroコンポーネント
│   ├── data/content.json    自動生成（手動編集不要）
│   └── pages/               ページファイル
├── docs/                    📚 マニュアル
│   └── IMAGE_GUIDE.md       画像管理ガイド
├── scripts/                 自動化スクリプト
│   └── update-content.js    CONTENT.md → JSON変換
└── History/                 過去のドキュメント
```

---

## 🎮 コマンド一覧

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバー起動 (http://localhost:4321) |
| `npm run build` | 本番ビルド |
| `npm run preview` | ビルドのプレビュー |
| `npm run update-content` | CONTENT.mdの変更を反映 |

---

## 🔧 技術スタック

- **Framework**: Astro 5.0
- **UI**: React 18 + Tailwind CSS
- **Animation**: GSAP (ScrollTrigger) + Lenis
- **Physics**: Matter.js
- **Icons**: Lucide React

---

## 📚 ドキュメント

| ファイル | 内容 |
|---------|------|
| `CONTENT.md` | ⭐️ メインの編集ファイル |
| `docs/IMAGE_GUIDE.md` | 画像管理マニュアル |
| `History/` | 過去のメモ・開発ガイド |

---

## ❓ トラブルシューティング

### 変更が反映されない

```bash
# 1. コンテンツを更新
npm run update-content

# 2. 開発サーバーを再起動
# Ctrl+C で停止 → npm run dev で再起動
```

### 画像が表示されない

- パスは `/images/ファイル名.png` の形式で指定
- `public/images/` フォルダに画像があるか確認

---

**最終更新**: 2026-01-06
**バージョン**: 1.0.0
