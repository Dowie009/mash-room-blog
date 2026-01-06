# 写真サイズの変更方法（修正版）

## ファイル
`src/components/HorizontalScroll.astro`

## 変更する場所

### 📸 チャプター1（Story Panel）
**30行目**を変更：
```html
<!-- 変更前 -->
<div class="merge-img-wrapper ... style="--img-height: 0.5vh;">

<!-- 変更後（例：50vhに変更） -->
<div class="merge-img-wrapper ... style="--img-height: 50vh;">
```

### 📸 チャプター2（Gear Panel）
**60行目**を変更：
```html
<!-- 変更前 -->
<div class="merge-img-wrapper ... style="--img-height: 60vh;">

<!-- 変更後（例：50vhに変更） -->
<div class="merge-img-wrapper ... style="--img-height: 50vh;">
```

### 📸 チャプター3（Tech Panel）
**86行目**を変更：
```html
<!-- 変更前 -->
<div class="merge-img-wrapper ... style="--img-height: 60vh;">

<!-- 変更後（例：50vhに変更） -->
<div class="merge-img-wrapper ... style="--img-height: 50vh;">
```

## 変更方法

**`style="--img-height: 0.5vh;"`** の数字部分だけを変更してください。

- `--img-height: 20vh;` = 画面の20%（小さく）
- `--img-height: 50vh;` = 画面の50%
- `--img-height: 70vh;` = 画面の70%（大きく）

## 例

### 小さくする場合
```html
style="--img-height: 30vh;"
```

### 大きくする場合
```html
style="--img-height: 80vh;"
```

## 注意
- `aspect-ratio: 3/4`は自動で適用されます（変更不要）
- 変更後はブラウザをリフレッシュ（F5）してください
