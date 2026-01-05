# デザインバランス調整テンプレート（ジェミニ用）

## 📋 現在の問題点

1. **画像が縦いっぱいに表示されている**
   - 画像が画面の高さ全体を占めてしまっている
   - より適切なサイズと余白が必要

2. **文字の大きさや配置のバランス**
   - タイトル、説明文、CHAPTERラベルのサイズと配置を最適化したい

---

## 🎯 調整したい要素

### HorizontalScroll.astro の各パネル（Story, Gear, Tech）

#### 現在の構造
- **レイアウト**: 2カラム（左: 画像、右: テキスト）
- **画像**: `aspect-[3/4]`, `max-w-sm`, `w-full h-full`
- **テキスト**: 縦書き、`height: 70vh`, `text-5xl`（タイトル）, `text-sm`（説明）

#### 調整したいポイント

1. **画像サイズ**
   - 現在: 縦いっぱいに表示されている
   - 希望: 適切な余白を持たせ、画面の高さの約60-70%程度に収める
   - アスペクト比: 3:4 を維持しつつ、最大高さを制限

2. **画像の配置**
   - 中央揃えを維持
   - 上下に適切な余白を確保

3. **テキストサイズ**
   - **CHAPTERラベル**: 現在 `text-[10px]` → 適切なサイズに調整
   - **タイトル**: 現在 `text-5xl` → バランスの良いサイズに調整
   - **説明文**: 現在 `text-sm` → 読みやすさを保ちつつ調整

4. **テキストの配置**
   - 縦書きを維持
   - 行間や文字間隔を最適化
   - 右側パネル内での位置を調整

5. **全体の余白**
   - 左右のパネル間の余白
   - コンテナ内のパディング

---

## 📝 ジェミニに伝える文章（テンプレート）

```
HorizontalScroll.astroコンポーネントのデザインバランスを調整してください。

【調整内容】

1. 画像サイズの最適化
   - 現在、画像が縦いっぱいに表示されてしまっている
   - 画像の最大高さを画面の高さの約60-70%に制限
   - アスペクト比3:4を維持
   - 上下に適切な余白を確保（画面中央に配置）
   - 画像の幅も適切に調整（現在のmax-w-smを調整）

2. テキストサイズの調整
   - CHAPTERラベル（例: "CHAPTER 01"）: 現在text-[10px] → より読みやすいサイズに（text-xs または text-sm程度）
   - タイトル（例: "物語の積み重ね"）: 現在text-5xl → 画面サイズに応じた適切なサイズに（text-4xl または text-3xl程度）
   - 説明文（例: "ブログは地層のように。"）: 現在text-sm → 読みやすさを保ちつつ調整（text-base または text-smのまま）

3. テキスト配置の最適化
   - 縦書きレイアウトを維持
   - 行間（line-height）を調整して読みやすく
   - 文字間隔（letter-spacing）を最適化
   - 右側パネル内での位置を調整（現在のpl-12を調整）

4. 全体の余白とスペーシング
   - 左右のパネル間の余白を調整（現在のgap-0を適切な値に）
   - コンテナ内のパディングを調整（現在のpx-6を調整）
   - 画像とテキストの間の余白を最適化

5. レスポンシブ対応
   - モバイル表示でもバランスが良いように調整
   - デスクトップとモバイルで適切なサイズ比率を維持

【注意事項】
- 縦書きレイアウトは維持してください
- アニメーション（merge-img-wrapper, merge-text-wrapper, tategaki-char）は維持してください
- 既存のスタイルクラス（holo-content, tategaki-box等）は維持してください
- Tailwind CSSのクラスを使用してください
```

---

## 🔍 現在のコード構造（参考）

### 画像部分
```astro
<div class="merge-img-wrapper relative group cursor-pointer w-full max-w-sm mx-auto aspect-[3/4] holo-content">
    <img src="/images/..." class="w-full h-full object-cover ..." />
</div>
```

### テキスト部分
```astro
<div class="merge-text-wrapper h-full flex items-center justify-center md:justify-start pl-12 border-l border-white/10">
    <div class="tategaki-box">
        <span class="text-[var(--accent-color)] font-mono text-[10px] mb-8 block">CHAPTER 01</span>
        <h3 class="font-mincho text-5xl font-black mb-12">
            <span class="tategaki-char">物</span><span class="tategaki-char">語</span>...
        </h3>
        <p class="text-gray-400 font-medium text-sm">
            <span class="tategaki-char">ブ</span><span class="tategaki-char">ロ</span>...
        </p>
    </div>
</div>
```

### CSS
```css
.tategaki-box {
    writing-mode: vertical-rl; 
    text-orientation: upright; 
    height: 70vh;
    letter-spacing: 0.1em; 
    line-height: 2;
}
```

---

## 💡 推奨される調整値（参考）

### 画像
- 最大高さ: `max-h-[60vh]` または `max-h-[70vh]`
- 幅: `max-w-md` または `w-[300px]` 程度
- アスペクト比: `aspect-[3/4]` を維持

### テキスト
- CHAPTERラベル: `text-xs` または `text-sm`
- タイトル: `text-3xl md:text-4xl`
- 説明文: `text-sm md:text-base`
- 行間: `leading-relaxed` または `leading-loose`

### 余白
- パネル間: `gap-8` または `gap-12`
- コンテナパディング: `px-8 md:px-12`
- テキスト左パディング: `pl-8 md:pl-16`

---

## 📋 チェックリスト

調整後、以下を確認してください：

- [ ] 画像が画面の高さの60-70%程度に収まっている
- [ ] 画像の上下に適切な余白がある
- [ ] テキストが読みやすいサイズになっている
- [ ] 全体のバランスが美しい
- [ ] モバイル表示でも問題ない
- [ ] アニメーションが正常に動作する
