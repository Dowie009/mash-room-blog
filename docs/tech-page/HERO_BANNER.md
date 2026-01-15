# TECH LAB ヒーローバナー機能

## 概要

TECH LAB記事ページ（PostLayout.astro）のヒーローセクションに、カテゴリ別に自動切り替えする動画バナー機能を実装。

## バージョン履歴

- **v1.0.0** (2026-01-15): 初期実装
  - カテゴリ別動画パターン切り替え（A/B）
  - パターンB用タイトルスタイル（黒文字・影なし）
  - 開発用デバッグモード（位置調整パネル）

## パターン一覧

| パターン | カテゴリ | 動画ファイル | タイトルスタイル |
|----------|----------|--------------|------------------|
| A | ai-journey | pattern-a-journey.mp4 | 白文字 + 影あり |
| B | ai-tips, その他 | pattern-b-tips.mp4 | 黒文字 + 影なし |
| C | (バックアップ) | PostLayout-C-static.astro.backup | 静止画版 |

## ファイル構造

```
src/layouts/PostLayout.astro          # メインレイアウト
public/images/tech/hero-patterns/
  ├── pattern-a-journey.mp4           # Aパターン（宇宙背景）
  └── pattern-b-tips.mp4              # Bパターン
src/layouts/PostLayout-C-static.astro.backup  # Cパターン（静止画版バックアップ）
```

## 要素配置（確定値）

| 要素 | top | left | scale |
|------|-----|------|-------|
| パンくず＋バッジ (.hero-banner-top) | 16.5% | 20.7% | 1.15 |
| タイトル (.hero-title-banner) | 43.5% | 25.0% | 1.5 |
| キャラ紹介 (.character-intro-banner) | 79.4% | 36.6% | 1.36 |
| ハッシュタグ (.hero-banner-bottom) | 56.9% | 25.1% | 1.37 |

## 技術仕様

### 動画クロップ

```css
.hero-video-container {
  width: 100%;
  aspect-ratio: 1400 / 500;
  overflow: hidden;
  position: relative;
}

.hero-banner-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
}
```

### カテゴリ別パターン設定

```typescript
const heroPatternConfig: Record<string, { video: string; label: string }> = {
  'ai-journey': { video: '/images/tech/hero-patterns/pattern-a-journey.mp4', label: 'A' },
  'ai-tips': { video: '/images/tech/hero-patterns/pattern-b-tips.mp4', label: 'B' },
};
const heroPattern = heroPatternConfig[frontmatter.category] || heroPatternConfig['ai-tips'];
```

### パターン別スタイル切り替え

HTMLに `data-pattern` 属性を追加:
```html
<header class="hero-with-banner" data-pattern={heroPattern.label}>
```

CSSでパターンB用スタイルを適用:
```css
/* パターンB用：黒文字・影なし */
.hero-with-banner[data-pattern="B"] .hero-title-banner {
  color: #1a1a2e;
  text-shadow: none;
}
```

## 開発用デバッグモード

### 起動方法

URLに `?debug=layout` パラメータを追加:
```
http://localhost:4322/tech/ai-as-sparring-partner?debug=layout
```

### 機能

1. **パターン切り替えボタン**: A/Bパターンをリアルタイムで切り替え
2. **ドラッグ調整**: 各要素をドラッグして位置調整（サイズは固定）
3. **位置コピー**: 調整した位置をCSS形式でクリップボードにコピー

### デバッグパネル

- ピンク枠: パターン切り替えボタン（A/B）
- 各要素の固定スケール値を表示
- 「位置をコピー」ボタンでCSS値を取得

## カテゴリ設計

### TECH LABカテゴリ

| カテゴリID | 表示名 | 説明 |
|------------|--------|------|
| ai-journey | AI JOURNEY | AI学習日記（あいぼー×道ゐの対話形式） |
| ai-tips | AI TIPS | AI活用の実践テクニック |

### タグ例

- #ChatGPT
- #Claude
- #Gemini
- #AI活用入門
- #プロンプトエンジニアリング

## 今後の拡張予定

- [ ] TECH LABトップページのカテゴリ/タグフィルタリング
- [ ] レベルバッジによるソート機能
- [ ] 新着順ソート
- [ ] 追加カテゴリ用パターン（C, D...）

## 関連ファイル

- `src/layouts/PostLayout.astro` - メインレイアウト
- `src/content/tech/ai-as-sparring-partner.md` - サンプル記事（ai-journey）
- `docs/tech-page/README.md` - TECH LABトップページのドキュメント
