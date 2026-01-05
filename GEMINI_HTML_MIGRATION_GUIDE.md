# GEMINI HTMLコード移行ガイド

GEMINIが生成したHTMLコードを既存のプロジェクトに移行し、素材をマッピングする手順です。

---

## 🎯 全体の流れ

1. **GEMINIのHTMLコードを取得**
2. **画像パスを抽出**
3. **既存素材とマッピング表を作成**
4. **パスを置き換え**
5. **Reactコンポーネントに変換**

---

## 📋 ステップ1: GEMINIのHTMLコードを整理

### 1-1. HTMLコードをファイルに保存

GEMINIから受け取ったHTMLコードを、一時ファイルに保存します：

```bash
# 例: gemini-output.html という名前で保存
```

### 1-2. HTMLコードの構造を確認

- `<img>` タグの `src` 属性
- `<video>` タグの `src` 属性
- CSS内の `url()` や `background-image`
- インラインスタイル内の画像パス

---

## 🔍 ステップ2: 画像パスを抽出

### 2-1. パターン別の抽出方法

#### パターンA: `<img>` タグ
```html
<!-- GEMINIのコード例 -->
<img src="assets/image1.jpg" alt="説明">
<img src="./images/photo.png" alt="説明">
```

#### パターンB: CSS背景画像
```html
<!-- GEMINIのコード例 -->
<div style="background-image: url('assets/bg.jpg')"></div>
```

#### パターンC: `<video>` タグ
```html
<!-- GEMINIのコード例 -->
<video src="assets/video.mp4"></video>
```

### 2-2. 一括抽出方法（推奨）

**方法1: テキストエディタで検索**
- `src="` を検索
- `url(` を検索
- `background-image:` を検索

**方法2: 正規表現で抽出**
```
src=["']([^"']+)["']
url\(["']?([^"')]+)["']?\)
```

---

## 📝 ステップ3: 既存素材とマッピング表を作成

### 3-1. 既存素材の一覧を確認

`public/images/` フォルダにある素材：

```
✅ イントロ関連
- into3.mp4
- MASHROOM_Logo.png

✅ 背景関連
- sunset-bg.mp4
- ブログ背景01.png
- ブログ背景02.png
- Blog背景.gif
- 背景.gif

✅ Stage 1.5 スライド
- Blog_00.png
- カテゴリサムネ　ノケ物語.png
- ノケ物語イラスト.png

✅ 記事サムネイル
- ノケ物語サムネ.png
- 幼少期編　サムネ.png
- 少年期編サムネ.png
- 中学校　前編.png
- 中学校　後編.png
- 01.png 〜 05.png

✅ その他
- Logo_ネイビー.png
- Logo_ブルー.png
- ロゴ_茶色.png
- のけ物語　カテゴリ　横長バナー .png
```

### 3-2. マッピング表のテンプレート

GEMINIのコードに出てくる画像パスと、既存素材をマッピングします：

| GEMINIのパス | 既存素材 | 用途 | 備考 |
|-------------|---------|------|------|
| `assets/logo.png` | `/images/MASHROOM_Logo.png` | ロゴ | ヘッダー用 |
| `assets/hero-bg.mp4` | `/images/sunset-bg.mp4` | 背景動画 | ランディングページ |
| `assets/slide1.jpg` | `/images/Blog_00.png` | スライド1 | Stage 1.5 |
| `assets/slide2.jpg` | `/images/カテゴリサムネ　ノケ物語.png` | スライド2 | Stage 1.5 |
| `assets/slide3.jpg` | `/images/ノケ物語イラスト.png` | スライド3 | Stage 1.5 |

**マッピングのコツ**:
- 用途で判断（ロゴ → MASHROOM_Logo.png）
- サイズで判断（大きい画像 → スライド用）
- 名前で判断（bg → 背景関連）

---

## 🔄 ステップ4: パスを置き換え

### 4-1. 置き換えルール

GEMINIのパス → 既存素材のパスに統一：

```
# パターン1: 相対パス → 絶対パス
assets/image.jpg → /images/image.jpg
./images/photo.png → /images/photo.png
../assets/bg.mp4 → /images/bg.mp4

# パターン2: ファイル名の変更
logo.png → MASHROOM_Logo.png
background.mp4 → sunset-bg.mp4
```

### 4-2. 一括置換の手順

**方法1: テキストエディタの一括置換**
1. GEMINIのHTMLコードを開く
2. 検索・置換機能を使用
3. マッピング表に基づいて順次置換

**方法2: 正規表現を使った置換**
```
# 例: assets/ を /images/ に置換
assets/(.+) → /images/$1
```

### 4-3. 置換チェックリスト

- [ ] すべての `<img src="...">` のパスを確認
- [ ] すべての `<video src="...">` のパスを確認
- [ ] CSS内の `url(...)` を確認
- [ ] インラインスタイルの `background-image` を確認
- [ ] パスが `/images/` で始まっているか確認

---

## ⚛️ ステップ5: Reactコンポーネントに変換

### 5-1. HTML → JSX の変換ルール

#### 基本的な変換
```html
<!-- HTML -->
<img src="/images/logo.png" alt="Logo">
<div class="container">
  <h1>タイトル</h1>
</div>
```

```tsx
// JSX
<img src="/images/logo.png" alt="Logo" />
<div className="container">
  <h1>タイトル</h1>
</div>
```

#### 主な変更点
- `class` → `className`
- 自己終了タグ: `<img>` → `<img />`
- イベントハンドラ: `onclick` → `onClick`
- インラインスタイル: オブジェクト形式に変換

### 5-2. コンポーネント構造の例

```tsx
// GEMINIのHTMLを基に作成
export const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* 背景動画 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src="/images/sunset-bg.mp4" type="video/mp4" />
      </video>

      {/* ヘッダー */}
      <header className="header">
        <img src="/images/MASHROOM_Logo.png" alt="Logo" />
      </header>

      {/* メインコンテンツ */}
      <main>
        {/* ... */}
      </main>
    </div>
  );
};
```

---

## 🛠️ 実践的な手順（具体例）

### 例: GEMINIが生成したHTMLコード

```html
<!DOCTYPE html>
<html>
<head>
  <title>Landing Page</title>
</head>
<body>
  <div class="hero">
    <img src="assets/logo.png" alt="Logo">
    <video src="assets/background.mp4" autoplay loop muted></video>
    <div class="slide" style="background-image: url('assets/slide1.jpg')"></div>
  </div>
</body>
</html>
```

### ステップ1: パスを抽出

抽出されたパス：
- `assets/logo.png`
- `assets/background.mp4`
- `assets/slide1.jpg`

### ステップ2: マッピング表を作成

| GEMINIのパス | 既存素材 | 用途 |
|-------------|---------|------|
| `assets/logo.png` | `/images/MASHROOM_Logo.png` | ロゴ |
| `assets/background.mp4` | `/images/sunset-bg.mp4` | 背景動画 |
| `assets/slide1.jpg` | `/images/Blog_00.png` | スライド1 |

### ステップ3: パスを置き換え

```html
<!-- 置換後 -->
<div class="hero">
  <img src="/images/MASHROOM_Logo.png" alt="Logo">
  <video src="/images/sunset-bg.mp4" autoplay loop muted></video>
  <div class="slide" style="background-image: url('/images/Blog_00.png')"></div>
</div>
```

### ステップ4: Reactコンポーネントに変換

```tsx
export const LandingPage = () => {
  return (
    <div className="hero">
      <img src="/images/MASHROOM_Logo.png" alt="Logo" />
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/images/sunset-bg.mp4"
      />
      <div
        className="slide"
        style={{ backgroundImage: "url('/images/Blog_00.png')" }}
      />
    </div>
  );
};
```

---

## 📋 チェックリスト

### パス置換前
- [ ] GEMINIのHTMLコードを取得
- [ ] すべての画像パスを抽出
- [ ] マッピング表を作成

### パス置換
- [ ] すべてのパスを `/images/` で始まる形式に統一
- [ ] 既存素材と正しくマッピングされているか確認
- [ ] 存在しないファイルがないか確認

### React変換
- [ ] `class` → `className` に変換
- [ ] 自己終了タグに変換
- [ ] イベントハンドラをReact形式に変換
- [ ] インラインスタイルをオブジェクト形式に変換

### 動作確認
- [ ] すべての画像が正しく表示される
- [ ] 動画が正しく再生される
- [ ] パスエラーがないか確認

---

## 🔧 便利なツール・コマンド

### パス抽出用の正規表現

```javascript
// JavaScriptでパスを抽出する例
const html = `...GEMINIのHTMLコード...`;

// imgタグのsrcを抽出
const imgPaths = html.match(/<img[^>]+src=["']([^"']+)["']/g);

// videoタグのsrcを抽出
const videoPaths = html.match(/<video[^>]+src=["']([^"']+)["']/g);

// CSSのurl()を抽出
const urlPaths = html.match(/url\(["']?([^"')]+)["']?\)/g);
```

### 一括置換用のコマンド（VS Code）

1. `Cmd+Shift+H` (Mac) / `Ctrl+Shift+H` (Windows) で検索・置換を開く
2. 正規表現モードを有効化（`.*` アイコンをクリック）
3. 検索: `assets/(.+)`
4. 置換: `/images/$1`

---

## 💡 効率化のコツ

1. **段階的に進める**: 一度に全部やらず、セクションごとに処理
2. **マッピング表を先に作る**: 全体像を把握してから置換
3. **バックアップを取る**: 元のGEMINIコードは残しておく
4. **動作確認を頻繁に**: 各ステップで確認

---

## 🚨 よくある問題と解決方法

### 問題1: パスが見つからない
**原因**: ファイル名が違う、パスが間違っている
**解決**: `public/images/` フォルダで実際のファイル名を確認

### 問題2: 画像が表示されない
**原因**: パスが `/images/` で始まっていない
**解決**: すべてのパスを `/images/` で始まる形式に統一

### 問題3: 動画が再生されない
**原因**: 属性が不足している
**解決**: `autoPlay`, `loop`, `muted`, `playsInline` を追加

---

## 📝 マッピング表テンプレート（コピー用）

```markdown
| GEMINIのパス | 既存素材 | 用途 | 備考 |
|-------------|---------|------|------|
| | | | |
| | | | |
| | | | |
```

このテンプレートを使って、GEMINIのコードに出てくるパスを記録してください。
