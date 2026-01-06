# コンテンツ変更テンプレート

このファイルでテキストを編集後、対応するファイルに反映してください。

---

## 1. HERO セクション (ゲート)

**ファイル**: `src/components/Hero.astro` (68-76行目)

```
サブタイトル: SAPPORO MASHROOM STUDIO
メインタイトル:
  物語と
  技術の
  交差点
スクロールテキスト: SCROLL TO OPEN GATE
```

---

## 2. FLOOR 1「重力と遊ぶ」カード

**ファイル**: `src/components/HorizontalScroll.astro` (10-23行目)

```
フロア番号: FLOOR 1
タイトル:
  重力と
  遊ぶ
説明文:
  扉が開くと、
  ガラスの向こうでアイデアが降り注ぐ。
  (今、裏でブロックが落ちてます！)
スクロールテキスト: SCROLL DOWN TO DIVE →
```

---

## 3. CHAPTER 01「物語の積み重ね」

**ファイル**: `src/components/HorizontalScroll.astro` (26-54行目)

```
画像: /images/Blog_00.png
チャプター番号: CHAPTER 01
タイトル(縦書き):
  物語の
  積み重ね
説明文(縦書き):
  ブログは地層のように。
  玄関の壁を撤去し、
  新しい風を通す。
ボタンテキスト: READ STORIES
```

---

## 4. CHAPTER 02「没入する機材たち」

**ファイル**: `src/components/HorizontalScroll.astro` (57-80行目)

```
画像: /images/カテゴリサムネ　ノケ物語.png
チャプター番号: CHAPTER 02
タイトル(縦書き):
  没入する
  機材たち
説明文(縦書き):
  37.5インチの湾曲。
  視界を覆う情報の海。
ボタンテキスト: CHECK GEARS
```

---

## 5. CHAPTER 03「技術とその先へ」

**ファイル**: `src/components/HorizontalScroll.astro` (83-107行目)

```
画像: /images/ノケ物語イラスト.png
チャプター番号: CHAPTER 03
タイトル(縦書き):
  技術と
  その先へ
説明文(縦書き):
  人工知能と共創する。
  コードは詩になる。
ボタンテキスト: EXPLORE LAB
```

---

## 6. NEW_POST セクション

**ファイル**: `src/components/NewPost.astro` (8-52行目)

```
セクションタイトル: NEW_POST
日本語タイトル: 新着記事
サブタイトル: LATEST UPDATES

---

【記事1】
カテゴリ: DIY
画像: /images/Blog_00.png
日付: 2025.12.01
タイトル: 玄関の壁を撤去してZONE Aと繋げた話

【記事2】
カテゴリ: GEAR
画像: /images/カテゴリサムネ　ノケ物語.png
日付: 2025.11.28
タイトル: 37.5型湾曲モニター導入で見えた世界

【記事3】
カテゴリ: BIZ
画像: /images/ノケ物語イラスト.png
日付: 2025.11.15
タイトル: 補助金と新人発掘とスタジオ経営
```

---

## 7. アクセントカラー

**ファイル**: `src/styles/global.css`

```css
--accent-color: #ff4d00;  /* オレンジ色 */
```

他の色に変更したい場合はここを編集してください。

---

## 📌 差し替え手順

### 画像の差し替え:
1. 新しい画像を `/public/images/` に配置
2. 上記のファイル名と同じ名前にする（または、ファイル内のパスを変更）

### テキストの変更:
1. このテンプレートで内容を確認
2. 該当するAstroファイルを開く
3. 行番号を参考に編集

### カラーの変更:
1. `src/styles/global.css` を開く
2. `--accent-color` の値を変更

---

## 🎨 推奨カラーパレット

```
オレンジ: #ff4d00 (現在)
レッド: #ff0000
ブルー: #00a8ff
グリーン: #00ff88
パープル: #8000ff
イエロー: #ffcc00
```
