# チャプター1-3の写真サイズ変更ガイド

## ファイル場所
`src/components/HorizontalScroll.astro`

## 変更箇所

### チャプター1（Story Panel）
**30行目**:
```html
<div class="merge-img-wrapper relative group cursor-pointer w-auto h-[60vh] md:h-[70vh] aspect-[3/4] mx-auto holo-content shadow-2xl">
```
- `h-[60vh] md:h-[70vh]`: 高さを変更（モバイル60vh、デスクトップ70vh）
- `aspect-[3/4]`: アスペクト比を変更（3:4）

### チャプター2（Gear Panel）
**60行目付近**:
```html
<div class="merge-img-wrapper relative group cursor-pointer w-auto h-[60vh] md:h-[70vh] aspect-[3/4] mx-auto holo-content shadow-2xl">
```

### チャプター3（Tech Panel）
**85行目付近**:
```html
<div class="merge-img-wrapper relative group cursor-pointer w-auto h-[60vh] md:h-[70vh] aspect-[3/4] mx-auto holo-content shadow-2xl">
```

## 変更方法

### 高さを変更する
`h-[60vh] md:h-[70vh]` の数値を変更します。

**例：**
- 小さく: `h-[50vh] md:h-[60vh]`
- 大きく: `h-[70vh] md:h-[80vh]`
- 固定サイズ: `h-[400px]`

### アスペクト比を変更する
`aspect-[3/4]` を変更します。

**例：**
- 正方形: `aspect-square` または `aspect-[1/1]`
- 横長: `aspect-video` (16:9) または `aspect-[4/3]`
- より縦長: `aspect-[2/3]`

## 実践例

### 例1: 写真を小さく、正方形にする
```html
<div class="merge-img-wrapper relative group cursor-pointer w-auto h-[40vh] md:h-[50vh] aspect-square mx-auto holo-content shadow-2xl">
```

### 例2: 写真を大きく、横長にする
```html
<div class="merge-img-wrapper relative group cursor-pointer w-auto h-[70vh] md:h-[80vh] aspect-video mx-auto holo-content shadow-2xl">
```

## 注意点
- `vh` = ビューポートの高さの割合（100vh = 画面の高さ全体）
- `md:` = 中サイズ以上の画面（768px以上）でのスタイル
- 変更後はブラウザをリフレッシュして確認してください
