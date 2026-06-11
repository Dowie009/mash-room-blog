# クイックスタートガイド

このファイルには最もよく使う操作だけをまとめています。

---

## 🚀 開発サーバーを起動する

```bash
npm run dev
```

ブラウザで http://localhost:4321 を開く

---

## ✏️ テキストを編集する

### 1. CONTENT.md を開く

### 2. テキストを変更して保存

### 3. 以下を実行:

```bash
npm run update-content
```

### 4. ブラウザでリロードして確認

---

## 🖼️ 画像を差し替える

### 方法1: 同じファイル名で上書き（簡単）

```
新しい画像を既存のファイル名にリネーム
↓
public/images/ フォルダに配置（上書き）
↓
ブラウザでリロード
```

### 方法2: 新しい画像を追加

1. `public/images/` に新しい画像を配置
2. `CONTENT.md` でパスを変更
3. `npm run update-content` を実行

**詳しくは**: `docs/IMAGE_GUIDE.md`

---

## 🎮 よく使うコマンド

```bash
# 開発サーバー起動
npm run dev

# コンテンツ更新を反映
npm run update-content

# 本番ビルド
npm run build

# ビルドをプレビュー
npm run preview
```

---

## 📁 どこに何があるか

| 編集したいもの | ファイル/フォルダ |
|--------------|----------------|
| テキスト | `CONTENT.md` |
| 画像 | `public/images/` |
| マニュアル | `docs/IMAGE_GUIDE.md` |
| 過去のメモ | `History/` |

---

## ❓ トラブルシューティング

### 変更が反映されない

```bash
# コンテンツ更新
npm run update-content

# 開発サーバー再起動
# Ctrl+C で停止 → npm run dev で再起動
```

### 画像が表示されない

- ファイル名は正確か？
- `public/images/` にファイルがあるか？
- パスは `/images/ファイル名.png` になっているか？

---

**困ったら**: `README.md` を見てください
