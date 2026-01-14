# Tech Page アーキテクチャ詳細

## システム構成

```
┌─────────────────────────────────────────┐
│         Astro (SSG)                     │
│  ┌──────────────────────────────────┐  │
│  │  Content Collections            │  │
│  │  (tech/*.md)                    │  │
│  └──────────────────────────────────┘  │
│           ↓ define:vars                 │
│  ┌──────────────────────────────────┐  │
│  │  tech.astro (Server)             │  │
│  │  - データ取得・変換              │  │
│  │  - HTML/CSS生成                  │  │
│  └──────────────────────────────────┘  │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│      Client-Side (Browser)             │
│  ┌──────────────────────────────────┐  │
│  │  GSAP Animation Engine           │  │
│  │  - 3D Tunnel Animation          │  │
│  │  - Cursor Animation             │  │
│  │  - Card Animations              │  │
│  └──────────────────────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │  React Components (if needed)    │  │
│  └──────────────────────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │  Custom Cursor System            │  │
│  │  - Independent RAF Loop          │  │
│  └──────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

## データフロー

### 1. サーバーサイド（Astro）

```astro
---
// 1. Content Collectionsから記事を取得
const allPosts = await getCollection('tech', ({ data }) => !data.draft);

// 2. 日付でソート
const sortedPosts = allPosts.sort((a, b) => 
  new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
);

// 3. JavaScript形式に変換
const articlesData = sortedPosts.map((post, index) => ({
  id: index,
  slug: post.slug,
  title: post.data.title,
  cat: post.data.category,
  catColor: categoryColors[post.data.category],
  date: formatDate(post.data.date),
  img: post.data.thumbnail || defaultImage,
}));

// 4. クライアントに渡す
---
<script define:vars={{ articlesData, categoryColors, categoryLabels }}>
  window.TECH_PAGE_DATA = { articlesData, categoryColors, categoryLabels };
</script>
```

### 2. クライアントサイド初期化

```javascript
// 1. データ取得
const data = window.TECH_PAGE_DATA;
const articlesData = data.articlesData || [];

// 2. GSAPプラグイン登録
gsap.registerPlugin(ScrollTrigger, Flip);

// 3. カード要素生成
articlesData.forEach((article, idx) => {
  const card = createCardElement(article);
  cardElements.push(card);
  tunnelWorld.appendChild(card);
});

// 4. アニメーション開始
initTechPage();
```

## アニメーションシステム

### 3Dトンネルアニメーション

```javascript
function updateTunnel() {
  animationFrameId = requestAnimationFrame(updateTunnel);
  
  // 各カードの位置を計算
  cardElements.forEach((card, idx) => {
    // 3D空間での位置計算
    const z = cardZ - (idx * cardSpacing);
    const scale = perspective / (perspective + z);
    const x = (mouseX - window.innerWidth / 2) * 0.1;
    const y = (mouseY - window.innerHeight / 2) * 0.1;
    
    // GSAPでアニメーション
    gsap.to(card, {
      x: x * scale,
      y: y * scale,
      z: z,
      scale: scale,
      rotationY: (mouseX - window.innerWidth / 2) * 0.05,
      duration: 0.1,
      ease: "power2.out"
    });
  });
}
```

### カーソルアニメーション（独立RAF）

```javascript
// メインアニメーションとは独立したループ
let cursorRafId = null;
let cursorCurrentX = window.innerWidth / 2;
let cursorCurrentY = window.innerHeight / 2;

function animateCursor() {
  cursorRafId = requestAnimationFrame(animateCursor);
  
  // 線形補間（lerp）でスムーズに追従
  const lerp = 0.15;
  cursorCurrentX += (targetMouseX - cursorCurrentX) * lerp;
  cursorCurrentY += (targetMouseY - cursorCurrentY) * lerp;
  
  // 直接CSS transformで更新（GSAPオーバーヘッドを回避）
  fighter.style.transform = `translate(${cursorCurrentX}px, ${cursorCurrentY}px) translate(-50%, -50%)`;
  
  // バンク効果（移動方向に傾ける）
  const movementX = targetMouseX - lastMouseX;
  fighterSvg.style.transform = `rotate(${movementX * 1.5}deg)`;
}
```

## モード管理

### モード一覧

1. **FREE_FLIGHT**: 通常の3Dトンネルモード
2. **FILTERED**: カテゴリーフィルタリング中
3. **RANDOM_ARRANGE**: ランダム整列モード（ワンちゃんモード）
4. **ARCHIVE_GRID**: アーカイブグリッドモード（リスト表示）

### モード切り替えフロー

```javascript
// カテゴリーフィルタリング
function filterByCategory(category) {
  isFiltered = (category !== 'ALL');
  
  if (isFiltered) {
    // 3Dアニメーションを停止
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    
    // フィルタリング処理
    cardElements.forEach(card => {
      const cardCat = card.dataset.cat;
      if (cardCat === category) {
        card.style.display = 'block';
        // ... 表示処理
      } else {
        card.style.display = 'none';
        gsap.set(card, { z: -5000 }); // 奥に移動
      }
    });
  } else {
    // 通常モードに戻す
    requestAnimationFrame(updateTunnel);
  }
}
```

## パフォーマンス最適化戦略

### 1. GPUアクセラレーション

```javascript
// GSAPでGPUアクセラレーションを強制
gsap.set(card, {
  force3D: true,
  transformPerspective: 1000
});

// CSSでwill-changeを設定
card.style.willChange = 'transform';
card.style.transformStyle = 'preserve-3d';
```

### 2. アニメーション停止

```javascript
// ランダム整列モード時はSVGボーダーアニメーションを停止
const borderRect = borderSvg.querySelector('.border-stroke');
if (borderRect) {
  borderRect.style.animation = 'none';
  borderRect.style.strokeDashoffset = '0';
}
```

### 3. 表示数制限（ワンちゃんモード）

```javascript
// 最大12枚だけ表示（初期）
const maxDisplayCards = 12;
const displayCards = shuffledCards.slice(0, maxDisplayCards);

// 残りは&moreボタンで追加読み込み
```

### 4. 独立したRAFループ

```javascript
// カーソルは独立したループで動作
// メインアニメーションが重くても影響を受けない
let cursorRafId = null;
function animateCursor() {
  cursorRafId = requestAnimationFrame(animateCursor);
  // ... カーソル更新
}
```

## CSS構造

### レイヤー構造

```
#tunnel-scene (3Dコンテナ)
  ├── #video-bg (背景動画)
  ├── .deep-space-overlay (オーバーレイ)
  ├── .comic-halftone (ドットパターン)
  └── #tunnel-world (3Dワールド)
      └── .ai-card-3d (カード要素)
          ├── .card-border-animated (SVGボーダー)
          ├── .ai-card-img (画像)
          ├── .ai-card-title (タイトル)
          └── .ai-card-category (カテゴリー)
```

### カテゴリーカラーシステム

```css
/* CSS変数で管理 */
:root {
  --col-astro: #00ffff;
  --col-react: #ffaa00;
  --col-css: #ff00ff;
  --col-ai: #39ff14;
  --col-devtips: #ffff00;
}

/* カードに適用 */
.ai-card-3d[data-cat="astro"] { --neon: var(--col-astro); }
.ai-card-3d[data-cat="react"] { --neon: var(--col-react); }
```

## イベントフロー

### ページ読み込み

```
1. AstroがサーバーサイドでHTML生成
2. ブラウザがHTML/CSSを読み込み
3. JavaScriptが実行開始
4. initTechPage()が呼ばれる
5. ローディングアニメーション開始
   - 背景動画表示（フィルターなし）
   - 2秒待機
   - フィルター適用（フェードイン）
   - カード登場
6. updateTunnel()開始（3Dアニメーション）
7. animateCursor()開始（カーソルアニメーション）
```

### カテゴリーフィルタリング

```
1. ユーザーがカテゴリーボタンをクリック
2. filterByCategory(category)が呼ばれる
3. isFiltered = true
4. updateTunnel()を停止
5. カードをフィルタリング
6. 表示/非表示を切り替え
```

### ランダム整列モード

```
1. ユーザーがワンちゃん/ツールチップをクリック
2. randomArrangeCards()が呼ばれる
3. カードをシャッフル
4. グリッドレイアウトで配置
5. 最大12枚を表示
6. &moreボタンを追加（残りがある場合）
7. showCategoryHint()でアナウンス表示
```

## 今後の改善案

### パフォーマンス
- [ ] 仮想スクロールの再実装（正しく動作するように）
- [ ] 画像の遅延読み込み（Intersection Observer）
- [ ] Web Workersでの計算処理

### 機能追加
- [ ] 検索機能
- [ ] ソート機能（日付、カテゴリー、人気順）
- [ ] お気に入り機能
- [ ] シェア機能

### UX改善
- [ ] スムーズなページ遷移
- [ ] キーボードショートカット
- [ ] アクセシビリティ対応（ARIA、キーボードナビゲーション）
