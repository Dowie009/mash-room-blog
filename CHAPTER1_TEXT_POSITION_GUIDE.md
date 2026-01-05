# チャプター1のテキスト位置・サイズ変更ガイド

## ファイル
`src/components/HorizontalScroll.astro`

## 変更箇所

### 1. テキストを写真の天井（上端）に合わせる

**38行目**を変更：
```html
<!-- 変更前 -->
<div class="merge-text-wrapper h-[60vh] md:h-[70vh] flex items-center justify-center md:justify-start pl-8 md:pl-16 border-l border-white/10">

<!-- 変更後（上端に合わせる） -->
<div class="merge-text-wrapper h-[60vh] md:h-[70vh] flex items-start justify-start pl-8 md:pl-16 border-l border-white/10">
```
- `items-center` → `items-start`（縦方向を上端に）
- `justify-center md:justify-start` → `justify-start`（横方向も左端に）

**39行目**を変更：
```html
<!-- 変更前 -->
<div class="tategaki-box flex flex-col justify-center">

<!-- 変更後（上端に合わせる） -->
<div class="tategaki-box flex flex-col justify-start">
```
- `justify-center` → `justify-start`（上端に配置）

---

### 2. テキストを2.5倍大きくする

**40行目**（CHAPTER 01）を変更：
```html
<!-- 変更前 -->
<span class="text-[var(--accent-color)] font-mono text-xs font-bold tracking-widest mb-8 block tategaki-char" style="writing-mode: horizontal-tb;">CHAPTER 01</span>

<!-- 変更後（2.5倍） -->
<span class="text-[var(--accent-color)] font-mono text-[30px] font-bold tracking-widest mb-8 block tategaki-char" style="writing-mode: horizontal-tb;">CHAPTER 01</span>
```
- `text-xs` → `text-[30px]`（約2.5倍：12px × 2.5 = 30px）

**42行目**（物語の積み重ね）を変更：
```html
<!-- 変更前 -->
<h3 class="font-mincho text-3xl md:text-4xl font-black mb-12 leading-relaxed">

<!-- 変更後（2.5倍） -->
<h3 class="font-mincho text-[75px] md:text-[100px] font-black mb-12 leading-relaxed">
```
- `text-3xl`（30px）→ `text-[75px]`（30px × 2.5 = 75px）
- `md:text-4xl`（36px）→ `md:text-[100px]`（36px × 2.5 = 90px、少し大きく100px）

**47行目**（説明文）を変更：
```html
<!-- 変更前 -->
<p class="text-gray-400 font-medium text-sm md:text-base leading-loose">

<!-- 変更後（2.5倍） -->
<p class="text-gray-400 font-medium text-[35px] md:text-[40px] leading-loose">
```
- `text-sm`（14px）→ `text-[35px]`（14px × 2.5 = 35px）
- `md:text-base`（16px）→ `md:text-[40px]`（16px × 2.5 = 40px）

---

### 3. テキストを右側に配置する（オプション）

**28行目**のgridの順序を変更：
```html
<!-- 変更前 -->
<div class="container mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center h-full max-w-6xl">

<!-- 変更後（画像とテキストの順序を入れ替え） -->
<div class="container mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start h-full max-w-6xl">
```

そして、**30行目と38行目**の順序を入れ替える：
- 30行目の画像divを38行目の後に移動
- 38行目のテキストdivを30行目の前に移動

---

## まとめ

変更する行：
- **28行目**: `items-center` → `items-start`（オプション：右側配置する場合）
- **38行目**: `items-center justify-center md:justify-start` → `items-start justify-start`
- **39行目**: `justify-center` → `justify-start`
- **40行目**: `text-xs` → `text-[30px]`
- **42行目**: `text-3xl md:text-4xl` → `text-[75px] md:text-[100px]`
- **47行目**: `text-sm md:text-base` → `text-[35px] md:text-[40px]`

これで、テキストが写真の天井に合わせて、2.5倍の大きさで表示されます！
