# ランディングページ仕様書

## 📋 概要

SAPPORO MASH ROOM STUDIO ブログアーカイブのランディングページ。物語（Story）とテック（Tech）の融合をテーマに、夕暮れ（Magic Hour）のトーンで表現。

## 🎨 デザインコンセプト

- **カラーパレット**: 夕暮れ（Magic Hour）のトーン
- **背景**: 固定背景動画（sunset-bg.mp4）または静止画フォールバック
- **フォント**: 
  - 物語: 明朝体（Shippori Mincho / Noto Serif JP）
  - テック: ゴシック体（Zen Kaku Gothic New / Noto Sans JP）
- **レイアウト**: フルスクリーンセクション、スクロール連動アニメーション

---

## 📐 セクション構成

### **固定要素（全セクション共通）**

#### 1. Background Video（背景動画）
- **位置**: `fixed`, `inset-0`, `z-0`
- **要素**: 
  - 動画: `/images/sunset-bg.mp4` (autoplay, loop, muted)
  - フォールバック画像: `/images/ブログ背景01.png`
- **アニメーション**: イントロ時にズームアウト（1.3倍 → 1.0倍、1.5秒後から1秒間）

#### 2. Header（固定ヘッダー）
- **位置**: `fixed`, `top-0`, `z-10`
- **左側**: ロゴ画像（`/images/MASHROOM_Logo.png`）
- **右側**: 
  - 縦書きテキスト「SAPPORO MASHROOM STUDIO」
  - 縦書きテキスト「BLOG / ARCHIVE」
- **アニメーション**: イントロ完了後にフェードイン（`landing-fade-in-0`）

---

### **Stage 1: Hero Section（ヒーローセクション）**

#### 目的
サイトの第一印象、メインテーマの提示

#### レイアウト
- **高さ**: `100vh`（フルスクリーン）
- **配置**: 中央揃え（flex center）
- **背景**: 透明（背景動画が見える）

#### コンテンツ
- **メインタイトル**: 
  - テキスト: "ほぼ実話の物語と、音の研究。BLOG"
  - スタイル: 大きめ、太字、オレンジ系
- **サブタイトル**: 
  - テキスト: "NOSTALGIA & TECHNOLOGY"
  - スタイル: 小さめ、トラッキング広め
- **スクロール誘導マーカー**: 
  - 位置: 下部中央
  - アニメーション: 上下にバウンス

#### アニメーション
- イントロ完了後にフェードイン（遅延あり）

---

### **Stage 1.5: About Section（アバウトセクション）**

#### 目的
ブログのコンセプト紹介、3つのカテゴリーの紹介

#### レイアウト
- **高さ**: `100vh`（フルスクリーン）
- **2カラムレイアウト**: 
  - 左: 40%（画像エリア）
  - 右: 60%（テキストエリア）

#### 左側: 画像エリア
- **背景**: ダーク（`bg-zinc-900`）
- **コンテンツ**: スライドショー（3枚の画像）
  - Slide 1: `/images/Blog_00.png` - Story
  - Slide 2: `/images/カテゴリサムネ　ノケ物語.png` - Gear
  - Slide 3: `/images/ノケ物語イラスト.png` - Tech
- **自動スライド**: 3.5秒ごとに切り替え
- **アニメーション**: 
  - スクロール連動（100vh ~ 200vhの範囲）
  - 下から上に移動（`translateY`）
  - フェードイン（`opacity`）

#### 右側: テキストエリア
- **背景**: 白/グレー（`bg-white md:bg-gray-50`）
- **コンテンツ**: 
  - **タイトル**: 縦書き、大きく（例: "感じる力が、\n未来を動かす。"）
  - **説明文**: 縦書き、15文字程度で分割して複数列表示
  - **CTAボタン**: "物語を読む" / "機材を見る" / "技術を探る"（スライドに応じて変化）
- **アニメーション**: 
  - スクロール連動（100vh ~ 200vhの範囲）
  - 上から下に移動（`translateY`）
  - フェードイン（`opacity`）

#### スクロール連動アニメーション仕様
- **開始位置**: `scrollY = 100vh`（Stage 1の終了位置）
- **終了位置**: `scrollY = 200vh`
- **進捗計算**: 
  - `progress = (scrollY - 100vh) / 100vh`
  - イージング: ease-out-cubic
- **表示条件**: `progress > 0.01` で表示

#### スクロール誘導マーカー
- 位置: 下部中央
- アニメーション: 上下にバウンス

---

### **Stage 2: Category Section（カテゴリーセクション）**

#### 目的
3つのカテゴリー（Story, Gear, Tech）への導線

#### レイアウト
- **高さ**: `100vh`（フルスクリーン）
- **背景**: ドットパターン + グラデーション
- **グリッド**: 3カラム（モバイル: 1カラム）

#### カテゴリーボタン（3つ）

##### 1. Story（物語）
- **カラー**: オレンジ系（`orange-950`, `orange-500`）
- **コンテンツ**: 
  - 番号: "01"
  - タイトル: "物語"
  - 説明: "漫画、小説のような"
  - サムネイル: 最新記事の画像
  - 記事数: "X 記事"
- **インタラクション**: 
  - hover: ボーダー色変化、サムネイルグレースケール解除
  - click: `onEnter('Story')` を呼び出し

##### 2. Gear（機材）
- **カラー**: エメラルド系（`emerald-950`, `emerald-500`）
- **コンテンツ**: 
  - 番号: "02"
  - タイトル: "機材"
  - 説明: "PLUGINS / DAW / TIPS"
  - サムネイル: 最新記事の画像
  - 記事数: "X 記事"
- **インタラクション**: 同上

##### 3. Tech（技術）
- **カラー**: シアン系（`cyan-950`, `cyan-500`）
- **コンテンツ**: 
  - 番号: "03"
  - タイトル: "技術"
  - 説明: "FUTURE / AI"
  - サムネイル: 最新記事の画像
  - 記事数: "X 記事"
- **インタラクション**: 同上

#### スクロール誘導マーカー
- 位置: 下部中央
- テキスト: "New Post"

---

### **Stage 3: New Post Section（最新記事セクション）**

#### 目的
最新記事3件の紹介

#### レイアウト
- **高さ**: `100vh`（フルスクリーン）
- **背景**: グリッドパターン + グラデーション
- **グリッド**: 3カラム（モバイル: 1カラム）

#### 記事カード
- **スタイル**: SEIWA CERAMICS風（黒背景、白ボーダー、角丸なし）
- **コンテンツ**: 
  - サムネイル画像（上）
  - カテゴリラベル（極小）
  - タイトル（非常に大きく太く）
  - 抜粋（2行まで）
  - メタ情報（日付、読了時間）
  - 矢印アイコン
- **インタラクション**: 
  - hover: ボーダー色変化、グレースケール解除、オフセット移動
  - click: `onEnter(category, post)` を呼び出し

#### データ取得
- `getLatestPosts(3)`: 日付順で最新3件を取得

---

### **Stage 4: Footer Section（フッターセクション）**

#### 目的
外部リンク、コピーライト

#### レイアウト
- **高さ**: `50vh`（半分）
- **背景**: ドットパターン + グラデーション

#### コンテンツ
- **セクションタイトル**: "LINKS / リンク"
- **リンクボタングリッド**: 6つのソーシャルリンク
  1. HOMEPAGE（シアン系）
  2. X (TWITTER)（スレート系）
  3. YOUTUBE（レッド系）
  4. INSTAGRAM（ピンク/パープル系）
  5. TIKTOK（フクシア/パープル系）
  6. FACEBOOK（ブルー系）
- **コピーライト**: "© 2025 SAPPORO MASH ROOM STUDIO"

#### リンクボタン
- **レイアウト**: アイコン + テキスト + 矢印
- **インタラクション**: 
  - hover: 上に移動、シャドウ表示
  - 外部リンク（`target="_blank"`, `rel="noopener noreferrer"`）

---

## 🔧 技術仕様

### スクロールシステム
- **コンテナ**: `.scroll-snap-wrapper`（`fixed`, `height: 100vh`）
- **スクロールスナップ**: 無効化（`scroll-snap-type: none`）
- **スクロール動作**: スムーズ（`scroll-behavior: smooth`）

### アニメーション
- **requestAnimationFrame**: スクロールイベントの最適化
- **イージング関数**: ease-out-cubic（Stage 1.5）
- **トランジション**: `opacity`, `transform`, `visibility`

### パフォーマンス
- **画像読み込み**: 
  - 最初のスライド: `loading="eager"`
  - その他: `loading="lazy"`
- **will-change**: アニメーション要素に適用
- **passive event listeners**: スクロールイベントに適用

### レスポンシブ
- **ブレークポイント**: 
  - モバイル: デフォルト
  - タブレット: `md:` (768px)
  - デスクトップ: `lg:` (1024px)

---

## 📊 データ要件

### Props
```typescript
interface LandingPageProps {
  onEnter: (destination: string, directPost?: Post) => void;
  lastReadPost: Post | null;
}
```

### 使用データ
- `POSTS`: 全記事データ（`src/data/posts.ts`）
- `slides`: スライドショーデータ（3つのカテゴリー）
- カテゴリー別記事数: `storyCount`, `gearCount`, `techCount`
- カテゴリー別サムネイル: 最新記事の画像を使用

### 関数
- `getLatestPosts(count)`: 最新記事を取得
- `getCategoryThumbnail(category)`: カテゴリー別サムネイル取得
- `formatDate(dateStr)`: 日付フォーマット
- `getCategoryLabel(category)`: カテゴリー名を日本語に変換
- `splitVerticalText(text, charsPerColumn)`: 縦書きテキストを分割

---

## 🎯 インタラクション

### ナビゲーション
- **カテゴリーボタン**: `onEnter('Story' | 'Gear' | 'Tech')`
- **記事カード**: `onEnter(category, post)`
- **CTAボタン**: `onEnter(slide.category)`

### アニメーション
- **自動スライド**: 3.5秒ごとに切り替え
- **スクロール連動**: Stage 1.5のみ（100vh ~ 200vh）
- **フェードイン**: イントロ完了後、各要素が順次表示

---

## 🐛 デバッグ機能

### デバッグパネル
- **表示条件**: URLに `#debug-stage1.5` がある場合のみ
- **表示内容**: 
  - scrollProgress
  - scrollY
  - windowHeight
  - animationStart/End
  - Stage 1.5の表示状態

---

## 📝 実装時の注意点

1. **スクロール進捗計算**: Stage 1.5のアニメーションは100vhから開始
2. **パフォーマンス**: `requestAnimationFrame`で最適化
3. **アクセシビリティ**: `prefers-reduced-motion`に対応
4. **画像最適化**: 遅延読み込み、適切なサイズ
5. **レスポンシブ**: モバイルファーストで設計

---

## 🚀 今後の拡張予定

- [ ] しおり機能（Firebase統合）
- [ ] 検索機能
- [ ] タグフィルター
- [ ] 無限スクロール
- [ ] パララックス効果の強化

---

## 📄 関連ファイル

- `src/components/LandingPage.tsx`: メインコンポーネント
- `src/styles/global.css`: グローバルスタイル
- `src/data/posts.ts`: 記事データ
- `public/images/`: 画像アセット
