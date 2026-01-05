# 自動処理ガイド

GEMINIのHTMLコードを貼り付けるだけで、自動的に処理します。

---

## 🚀 使い方（超簡単）

### ステップ1: HTMLコードを貼り付ける

1. `gemini-html.html` ファイルを開く
2. GEMINIから受け取ったHTMLコードを**そのまま貼り付ける**
3. ファイルを保存

### ステップ2: 処理を依頼

私に以下のように伝えてください：

```
「HTMLコードを処理して」
```

または

```
「gemini-html.htmlを読み取って、Reactコンポーネントに変換して」
```

### ステップ3: 自動処理

私が以下を自動的に実行します：

1. ✅ HTMLコードを読み取る
2. ✅ 画像パスを抽出
3. ✅ 既存素材とマッピング
4. ✅ パスを `/images/` 形式に統一
5. ✅ Reactコンポーネントに変換
6. ✅ 適切なファイルに保存

---

## 📋 処理内容の詳細

### 1. パス抽出
- `<img src="...">` から画像パスを抽出
- `<video src="...">` から動画パスを抽出
- CSSの `url()` からパスを抽出
- インラインスタイルからパスを抽出

### 2. 既存素材とのマッピング
以下のルールで自動マッピング：

| GEMINIのパス | 既存素材 | 判断基準 |
|-------------|---------|---------|
| `logo`, `Logo` | `/images/MASHROOM_Logo.png` | 名前で判断 |
| `background`, `bg`, `hero-bg` | `/images/sunset-bg.mp4` | 用途で判断 |
| `slide1`, `hero-image` | `/images/Blog_00.png` | 順序で判断 |
| `slide2` | `/images/カテゴリサムネ　ノケ物語.png` | 順序で判断 |
| `slide3` | `/images/ノケ物語イラスト.png` | 順序で判断 |

### 3. パス置換
- すべてのパスを `/images/` で始まる形式に統一
- 既存素材とマッピングされたパスに置き換え

### 4. Reactコンポーネント変換
- `class` → `className`
- 自己終了タグに変換
- イベントハンドラをReact形式に変換
- インラインスタイルをオブジェクト形式に変換

### 5. ファイル保存
- 新しいコンポーネントを `src/components/` に保存
- 必要に応じて既存ファイルを更新

---

## 💡 例

### 入力（GEMINIのHTMLコード）

```html
<div class="hero">
  <img src="assets/logo.png" alt="Logo">
  <video src="assets/background.mp4" autoplay loop muted></video>
  <div class="slide" style="background-image: url('assets/slide1.jpg')"></div>
</div>
```

### 出力（自動処理後）

```tsx
// src/components/LandingPage.tsx (または新しいファイル)
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

## ⚠️ 注意事項

### マッピングが不明確な場合
- 自動マッピングできないパスは、マッピング表を作成して確認を依頼します
- 用途が不明な画像は、リストアップして確認します

### 複雑な構造の場合
- セクションごとに分割して処理することも可能です
- 必要に応じて複数のコンポーネントに分割します

---

## 🎯 処理後の確認事項

処理が完了したら、以下を確認してください：

- [ ] すべての画像パスが `/images/` で始まっている
- [ ] 既存素材と正しくマッピングされている
- [ ] Reactコンポーネントとして正しく変換されている
- [ ] ファイルが適切な場所に保存されている

---

## 📝 カスタマイズ

特定の処理方法を希望する場合は、処理前に伝えてください：

- 「スライドショー部分だけ処理して」
- 「背景部分は既存のコードを使いたい」
- 「新しいコンポーネント名は `NewLandingPage.tsx` にして」

など、要望に応じてカスタマイズします。
