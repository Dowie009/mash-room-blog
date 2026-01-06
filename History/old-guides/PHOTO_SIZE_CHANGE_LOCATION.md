# チャプター1-3の写真サイズ変更場所

## ファイル
`src/components/HorizontalScroll.astro`

## 変更箇所（行番号）

### 📸 チャプター1（Story Panel）の写真
**30行目**を編集してください：

```html
<div class="merge-img-wrapper relative group cursor-pointer w-auto h-[60vh] md:h-[70vh] aspect-[3/4] mx-auto holo-content shadow-2xl">
```

**変更する部分：**
- `h-[60vh] md:h-[70vh]` → 高さを変更
- `aspect-[3/4]` → アスペクト比を変更

---

### 📸 チャプター2（Gear Panel）の写真
**60行目**を編集してください：

```html
<div class="merge-img-wrapper relative group cursor-pointer w-auto h-[60vh] md:h-[70vh] aspect-[3/4] mx-auto holo-content shadow-2xl">
```

**変更する部分：**
- `h-[60vh] md:h-[70vh]` → 高さを変更
- `aspect-[3/4]` → アスペクト比を変更

---

### 📸 チャプター3（Tech Panel）の写真
**86行目**を編集してください：

```html
<div class="merge-img-wrapper relative group cursor-pointer w-auto h-[60vh] md:h-[70vh] aspect-[3/4] mx-auto holo-content shadow-2xl">
```

**変更する部分：**
- `h-[60vh] md:h-[70vh]` → 高さを変更
- `aspect-[3/4]` → アスペクト比を変更

---

## 変更例

### 例1: 写真を小さくする
```html
<!-- 変更前 -->
h-[60vh] md:h-[70vh]

<!-- 変更後 -->
h-[50vh] md:h-[60vh]
```

### 例2: 写真を大きくする
```html
<!-- 変更前 -->
h-[60vh] md:h-[70vh]

<!-- 変更後 -->
h-[70vh] md:h-[80vh]
```

### 例3: アスペクト比を正方形にする
```html
<!-- 変更前 -->
aspect-[3/4]

<!-- 変更後 -->
aspect-square
```

### 例4: アスペクト比を横長にする
```html
<!-- 変更前 -->
aspect-[3/4]

<!-- 変更後 -->
aspect-video
```

---

## 用語説明

- **`h-[60vh]`**: 高さが画面の60%（モバイル）
- **`md:h-[70vh]`**: 中サイズ以上の画面で高さが画面の70%
- **`aspect-[3/4]`**: 幅:高さ = 3:4 の比率
- **`vh`**: ビューポートの高さ（100vh = 画面の高さ全体）

---

## 変更後の確認方法

1. ファイルを保存
2. ブラウザをリフレッシュ（F5 または Cmd+R）
3. 変更が反映されているか確認
