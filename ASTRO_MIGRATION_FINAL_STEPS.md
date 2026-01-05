# Astro移行 最終手順書

GEMINIのHTMLコードをAstroプロジェクトに移行する完全な手順です。

---

## 🎯 移行の全体像

```
GEMINIのHTML
    ↓
1. 画像パスを既存素材にマッピング
    ↓
2. Layout.astro に共通設定を追加
    ↓
3. セクションごとにコンポーネント分割
    ↓
4. スクリプトを各コンポーネントに配置
    ↓
完成！
```

---

## 📋 処理手順（自動実行）

### ステップ1: HTMLコードの読み取りとパス抽出

1. `gemini-html.html` を読み取る
2. 画像パスを抽出（`<img>`, `<video>`, CSS `url()` など）
3. 既存素材とマッピング表を作成

### ステップ2: Layout.astro の更新

**追加する内容**:
- GSAPのCDN読み込み
- Matter.jsのCDN読み込み（必要に応じて）
- その他の共通ライブラリ

**更新後のLayout.astro構造**:
```astro
---
import '../styles/global.css';

interface Props {
  title?: string;
}

const { title = 'SAPPORO MASH ROOM STUDIO (Blog Archive)' } = Astro.props;
---

<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    
    <!-- GSAP -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
    
    <!-- Matter.js (必要に応じて) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js"></script>
    
    <!-- フォント -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400;500;600&family=Noto+Sans+JP:wght@300;400;500;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

### ステップ3: コンポーネント分割

HTMLコードを以下のセクションごとに分割：

#### 3-1. Hero.astro
- ヒーローセクションのHTML
- 関連するCSS
- GSAPアニメーションスクリプト

#### 3-2. HorizontalScroll.astro
- 横スクロールセクションのHTML
- 関連するCSS
- スクロールアニメーションスクリプト

#### 3-3. NewPost.astro
- 最新記事セクションのHTML
- 関連するCSS
- アニメーションスクリプト（あれば）

#### 3-4. Footer.astro
- フッターセクションのHTML
- 関連するCSS

### ステップ4: 画像パスの置き換え

既存素材とマッピングして、すべてのパスを `/images/` 形式に統一：

| GEMINIのパス | 既存素材 | 用途 |
|-------------|---------|------|
| `assets/logo.png` | `/images/MASHROOM_Logo.png` | ロゴ |
| `assets/background.mp4` | `/images/sunset-bg.mp4` | 背景動画 |
| `assets/slide1.jpg` | `/images/Blog_00.png` | スライド1 |
| `assets/slide2.jpg` | `/images/カテゴリサムネ　ノケ物語.png` | スライド2 |
| `assets/slide3.jpg` | `/images/ノケ物語イラスト.png` | スライド3 |

### ステップ5: スクリプトの配置

各コンポーネントの `<script>` タグ内に適切に配置：

```astro
---
// コンポーネントのロジック（あれば）
---

<div class="hero">
  <!-- HTMLコンテンツ -->
</div>

<style>
  /* コンポーネント固有のスタイル */
</style>

<script>
  // GSAPアニメーション
  gsap.registerPlugin(ScrollTrigger);
  
  // コンポーネント固有のスクリプト
  // ...
</script>
```

---

## 📁 ファイル構成（完成形）

```
src/
├── layouts/
│   └── Layout.astro          # 共通レイアウト（GSAP読み込み）
├── components/
│   ├── Hero.astro            # ヒーローセクション
│   ├── HorizontalScroll.astro # 横スクロールセクション
│   ├── NewPost.astro         # 最新記事セクション
│   └── Footer.astro          # フッターセクション
└── pages/
    └── index.astro           # メインページ（全コンポーネントを組み合わせ）
```

---

## 🔧 各コンポーネントの構造例

### Hero.astro の例

```astro
---
// 必要に応じてpropsやデータを定義
---

<section class="hero">
  <div class="hero-content">
    <img src="/images/MASHROOM_Logo.png" alt="Logo" />
    <h1>タイトル</h1>
  </div>
</section>

<style>
  .hero {
    /* スタイル */
  }
</style>

<script>
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  
  gsap.registerPlugin(ScrollTrigger);
  
  // ヒーローセクションのアニメーション
  gsap.from('.hero-content', {
    opacity: 0,
    y: 50,
    duration: 1
  });
</script>
```

### HorizontalScroll.astro の例

```astro
---
// 必要に応じてpropsやデータを定義
---

<section class="horizontal-scroll">
  <div class="scroll-container">
    <!-- 横スクロールコンテンツ -->
  </div>
</section>

<style>
  .horizontal-scroll {
    /* スタイル */
  }
</style>

<script>
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  
  gsap.registerPlugin(ScrollTrigger);
  
  // 横スクロールアニメーション
  gsap.to('.scroll-container', {
    x: () => -(document.querySelector('.scroll-container').scrollWidth - window.innerWidth),
    ease: 'none',
    scrollTrigger: {
      trigger: '.horizontal-scroll',
      start: 'top top',
      end: () => '+=' + (document.querySelector('.scroll-container').scrollWidth - window.innerWidth),
      pin: true,
      scrub: 1
    }
  });
</script>
```

---

## 📝 index.astro の構造

```astro
---
import Layout from '../layouts/Layout.astro';
import Hero from '../components/Hero.astro';
import HorizontalScroll from '../components/HorizontalScroll.astro';
import NewPost from '../components/NewPost.astro';
import Footer from '../components/Footer.astro';
---

<Layout title="SAPPORO MASH ROOM STUDIO">
  <Hero />
  <HorizontalScroll />
  <NewPost />
  <Footer />
</Layout>
```

---

## ✅ 処理チェックリスト

### パス処理
- [ ] すべての画像パスを抽出
- [ ] 既存素材とマッピング
- [ ] パスを `/images/` 形式に統一
- [ ] 存在しないファイルがないか確認

### Layout.astro
- [ ] GSAPのCDN読み込みを追加
- [ ] Matter.jsのCDN読み込みを追加（必要に応じて）
- [ ] その他の共通ライブラリを追加

### コンポーネント分割
- [ ] Hero.astro を作成
- [ ] HorizontalScroll.astro を作成
- [ ] NewPost.astro を作成
- [ ] Footer.astro を作成

### スクリプト配置
- [ ] 各コンポーネントに適切なスクリプトを配置
- [ ] GSAPの初期化を確認
- [ ] スクロールトリガーの設定を確認

### 動作確認
- [ ] すべての画像が正しく表示される
- [ ] アニメーションが正常に動作する
- [ ] スクロールが正常に動作する
- [ ] エラーがないか確認

---

## 🚀 実行方法

1. **HTMLコードを準備**: `gemini-html.html` にGEMINIのHTMLコードを貼り付け
2. **処理を依頼**: 「HTMLコードを処理して、Astroに移行して」と伝える
3. **自動処理**: 上記の手順を自動実行
4. **確認**: 生成されたファイルを確認

---

## 💡 注意事項

### GSAPの読み込み方法
- **CDN**: Layout.astroで読み込む（全ページで利用可能）
- **npm**: `npm install gsap` してからimport（推奨）

### Matter.jsの読み込み方法
- **CDN**: Layout.astroで読み込む（必要に応じて）
- **npm**: `npm install matter-js` してからimport

### スクリプトの実行タイミング
- Astroの `<script>` タグは、コンポーネントがマウントされた後に実行される
- `document.addEventListener('DOMContentLoaded')` は不要

---

## 📚 参考

- [Astro公式ドキュメント](https://docs.astro.build/)
- [GSAP公式ドキュメント](https://greensock.com/docs/)
- [Matter.js公式ドキュメント](https://brm.io/matter-js/)
