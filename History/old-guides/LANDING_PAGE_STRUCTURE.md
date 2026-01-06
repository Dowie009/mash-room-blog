# ランディングページ 構造仕様

## セクション構成

### **固定背景**
- 動画: `/images/sunset-bg.mp4`
- フォールバック画像: `/images/ブログ背景01.png`

### **固定ヘッダー**
- 左上: ロゴ画像 `/images/MASHROOM_Logo.png`
- 右上: 
  - "SAPPORO MASHROOM STUDIO"（縦書き）
  - "BLOG / ARCHIVE"（縦書き）

---

### **Stage 1: Hero**
- **タイトル**: "ほぼ実話の物語と、音の研究。BLOG"
- **サブタイトル**: "NOSTALGIA & TECHNOLOGY"
- **スクロール誘導**: "Category"

---

### **Stage 1.5: About**
- **2カラムレイアウト**

#### 左側: 画像エリア
- スライドショー（3枚、自動切り替え）
  1. `/images/Blog_00.png`
  2. `/images/カテゴリサムネ　ノケ物語.png`
  3. `/images/ノケ物語イラスト.png`

#### 右側: テキストエリア
- **ラベル**: "Department / 学科について"
- **スライド1（Story）**:
  - タイトル: "感じる力が、\n未来を動かす。"
  - 説明: "世の中にある商品、サービス、コンテンツ。それらは「おいしい」「楽しい」「かわいい」など、人のポジティブな感情を引き起こすために作られたものと言えます。このブログでは「感じる→考える→表現する」というプロセスを通して、物語と技術の融合による新しい価値を探求します。"
  - ボタン: "物語を読む"
- **スライド2（Gear）**:
  - タイトル: "機材と音楽、\n創造する。"
  - 説明: "PLUGINS、DAW、TIPS。最新の機材情報と音楽制作のノウハウを共有します。技術と感性が融合する瞬間を、一緒に探求していきましょう。"
  - ボタン: "機材を見る"
- **スライド3（Tech）**:
  - タイトル: "技術と未来、\n革新する。"
  - 説明: "FUTURE、AI。最先端の技術と未来への展望を探求します。テクノロジーがもたらす新しい可能性を、一緒に考えていきましょう。"
  - ボタン: "技術を探る"
- **スクロール誘導**: "Category"

---

### **Stage 2: Category**
- **セクションタイトル**: "CATEGORY / カテゴリー"
- **3つのカテゴリーボタン**

#### 1. Story（物語）
- 番号: "01"
- タイトル: "物語"
- 説明: "漫画、小説のような"
- サムネイル: 最新記事の画像を使用
- 記事数: "X 記事"

#### 2. Gear（機材）
- 番号: "02"
- タイトル: "機材"
- 説明: "PLUGINS / DAW / TIPS"
- サムネイル: 最新記事の画像を使用
- 記事数: "X 記事"

#### 3. Tech（技術）
- 番号: "03"
- タイトル: "技術"
- 説明: "FUTURE / AI"
- サムネイル: 最新記事の画像を使用
- 記事数: "X 記事"
- **スクロール誘導**: "New Post"

---

### **Stage 3: New Post**
- **セクションタイトル**: "NEW POST / 最新記事"
- **最新記事3件をカード表示**
  - 各カードに表示:
    - サムネイル画像
    - カテゴリラベル（日本語）
    - タイトル
    - 抜粋
    - 日付
    - 読了時間（あれば）

---

### **Stage 4: Footer**
- **セクションタイトル**: "LINKS / リンク"
- **6つのソーシャルリンク**
  1. HOMEPAGE - "公式ウェブサイト"
  2. X (TWITTER) - "@mashroom_studio"
  3. YOUTUBE - "動画チャンネル"
  4. INSTAGRAM - "写真・動画"
  5. TIKTOK - "ショート動画"
  6. FACEBOOK - "コミュニティ"
- **コピーライト**: "© 2025 SAPPORO MASH ROOM STUDIO"

---

## データ要件

### 使用データ
- `POSTS`: 全記事データ（`src/data/posts.ts`）
- カテゴリー別記事数: Story, Gear, Tech
- カテゴリー別サムネイル: 各カテゴリーの最新記事の画像を使用
- 最新記事: 日付順で最新3件

### Props
```typescript
{
  onEnter: (destination: string, directPost?: Post) => void;
  lastReadPost: Post | null;
}
```

### 主要関数
- `getLatestPosts(count)`: 最新記事を取得
- `getCategoryThumbnail(category)`: カテゴリー別サムネイルを取得
- `formatDate(dateStr)`: 日付フォーマット
- `getCategoryLabel(category)`: カテゴリー名を日本語に変換（Story→物語、Gear→機材、AI→技術）
- `splitVerticalText(text, charsPerColumn)`: 縦書きテキストを15文字程度で分割

---

## インタラクション

- **カテゴリーボタン**: `onEnter('Story' | 'Gear' | 'Tech')` を呼び出し
- **記事カード**: `onEnter(category, post)` を呼び出し
- **CTAボタン**: `onEnter(slide.category)` を呼び出し

---

## アニメーション要件（大枠のみ）

- **Stage 1.5**: スクロール連動アニメーション（100vh ~ 200vhの範囲）
  - 左側画像: 下から上に移動
  - 右側テキスト: 上から下に移動
- **自動スライド**: Stage 1.5の画像が3.5秒ごとに切り替わる
