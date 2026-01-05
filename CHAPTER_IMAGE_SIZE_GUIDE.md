# チャプター1-3の写真サイズ変更方法

## ファイル場所
`src/components/HorizontalScroll.astro`

## 変更箇所

### チャプター1（Story Panel）
**30行目付近**:
```html
<div class="merge-img-wrapper relative group cursor-pointer w-auto h-[60vh] md:h-[70vh] aspect-[3/4] mx-auto holo-content shadow-2xl">
```

### チャプター2（Gear Panel）
**55行目付近**:
```html
<div class="merge-img-wrapper relative group cursor-pointer w-auto h-[60vh] md:h-[70vh] aspect-[3/4] mx-auto holo-content shadow-2xl">
```

### チャプター3（Tech Panel）
**80行目付近**:
```html
<div class="merge-img-wrapper relative group cursor-pointer w-auto h-[60vh] md:h-[70vh] aspect-[3/4] mx-auto holo-content shadow-2xl">
```

## サイズ変更の方法

### 高さを変更する
`h-[60vh] md:h-[70vh]` の部分を変更します。

**例：**
- 小さくする: `h-[50vh] md:h-[60vh]` （モバイル50vh、デスクトップ60vh）
- 大きくする: `h-[70vh] md:h-[80vh]` （モバイル70vh、デスクトップ80vh）
- 固定サイズ: `h-[400px]` （px指定で固定）

### アスペクト比を変更する
`aspect-[3/4]` の部分を変更します。

**例：**
- 正方形: `aspect-square` または `aspect-[1/1]`
- 横長: `aspect-[4/3]` または `aspect-video` (16:9)
- 縦長: `aspect-[2/3]` （より縦長に）

### 幅を変更する
`w-auto` の部分を変更します。

**例：**
- 固定幅: `w-[300px]` または `w-[50vw]`
- 最大幅: `max-w-md` または `max-w-lg`

## 実践例

### 例1: 写真を小さく、正方形にする
```html
<div class="merge-img-wrapper relative group cursor-pointer w-auto h-[40vh] md:h-[50vh] aspect-square mx-auto holo-content shadow-2xl">
```

### 例2: 写真を大きく、横長にする
```html
<div class="merge-img-wrapper relative group cursor-pointer w-auto h-[70vh] md:h-[80vh] aspect-video mx-auto holo-content shadow-2xl">
```

### 例3: 固定サイズにする
```html
<div class="merge-img-wrapper relative group cursor-pointer w-[400px] h-[500px] aspect-[4/5] mx-auto holo-content shadow-2xl">
```

## 注意点
- `h-[60vh]` はビューポートの高さの60%を意味します
- `md:h-[70vh]` は中サイズ以上の画面（768px以上）で70%になります
- `aspect-[3/4]` は幅:高さ = 3:4 の比率を意味します
- 変更後はブラウザをリフレッシュして確認してください
