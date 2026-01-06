# 素材マッピング表テンプレート

GEMINIのHTMLコードに出てくる画像パスと、既存素材をマッピングするためのテンプレートです。

---

## 📋 マッピング表

| GEMINIのパス | 既存素材パス | 用途 | 確認 |
|-------------|-------------|------|------|
| | | | ⬜ |
| | | | ⬜ |
| | | | ⬜ |
| | | | ⬜ |
| | | | ⬜ |

---

## 🎯 既存素材の一覧（参考）

### イントロ関連
- `/images/into3.mp4` - イントロ動画
- `/images/MASHROOM_Logo.png` - ロゴ

### 背景関連
- `/images/sunset-bg.mp4` - 背景動画
- `/images/ブログ背景01.png` - 背景フォールバック
- `/images/ブログ背景02.png` - 背景画像（代替）
- `/images/Blog背景.gif` - 背景GIF
- `/images/背景.gif` - 背景GIF

### Stage 1.5 スライド
- `/images/Blog_00.png` - Storyスライド
- `/images/カテゴリサムネ　ノケ物語.png` - Gearスライド
- `/images/ノケ物語イラスト.png` - Techスライド

### 記事サムネイル
- `/images/ノケ物語サムネ.png`
- `/images/幼少期編　サムネ.png`
- `/images/少年期編サムネ.png`
- `/images/中学校　前編.png`
- `/images/中学校　後編.png`
- `/images/01.png` 〜 `/images/05.png`

### その他
- `/images/Logo_ネイビー.png` - ロゴ（ネイビー版）
- `/images/Logo_ブルー.png` - ロゴ（ブルー版）
- `/images/ロゴ_茶色.png` - ロゴ（茶色版）
- `/images/のけ物語　カテゴリ　横長バナー .png` - バナー

---

## 🔍 マッピングのコツ

### 用途で判断
- ロゴ → `MASHROOM_Logo.png`
- 背景動画 → `sunset-bg.mp4`
- スライド画像 → `Blog_00.png`, `カテゴリサムネ　ノケ物語.png`, `ノケ物語イラスト.png`

### 名前で判断
- `logo` → `MASHROOM_Logo.png`
- `background`, `bg` → `sunset-bg.mp4` または `ブログ背景01.png`
- `slide1`, `hero` → `Blog_00.png`
- `slide2` → `カテゴリサムネ　ノケ物語.png`
- `slide3` → `ノケ物語イラスト.png`

### サイズで判断
- 大きい画像 → スライド用
- 小さい画像 → サムネイル用

---

## 📝 使用例

### 例1: ロゴ
```
GEMINI: assets/logo.png
→ 既存: /images/MASHROOM_Logo.png
```

### 例2: 背景動画
```
GEMINI: assets/hero-bg.mp4
→ 既存: /images/sunset-bg.mp4
```

### 例3: スライド画像
```
GEMINI: assets/slide1.jpg
→ 既存: /images/Blog_00.png
```

---

## ✅ 確認方法

1. GEMINIのコードからパスを抽出
2. この表に記入
3. `public/images/` フォルダでファイルの存在を確認
4. パスを置き換え
5. 動作確認
