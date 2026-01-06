# クイック移行手順（5ステップ）

GEMINIのHTMLコードを既存プロジェクトに移行する最短手順です。

---

## 🚀 5ステップで完了

### ステップ1: GEMINIのHTMLコードを保存（1分）

```bash
# GEMINIから受け取ったHTMLコードを gemini-output.html に保存
```

### ステップ2: パスを自動抽出（1分）

```bash
# パス抽出スクリプトを実行
node extract-paths.js
```

**結果**: `extracted-paths.txt` に抽出されたパスが保存されます

### ステップ3: マッピング表を作成（5分）

1. `ASSETS_MAPPING_TEMPLATE.md` を開く
2. `extracted-paths.txt` のパスを確認
3. 既存素材と対応付け
4. マッピング表に記入

**コツ**: 
- 用途で判断（ロゴ → MASHROOM_Logo.png）
- 名前で判断（bg → sunset-bg.mp4）
- サイズで判断（大きい → スライド用）

### ステップ4: パスを一括置換（3分）

**VS Codeの場合**:
1. GEMINIのHTMLコードを開く
2. `Cmd+Shift+H` (Mac) / `Ctrl+Shift+H` (Windows)
3. 正規表現モードを有効化（`.*` アイコン）
4. マッピング表に基づいて順次置換

**置換例**:
```
検索: assets/logo.png
置換: /images/MASHROOM_Logo.png
```

### ステップ5: Reactコンポーネントに変換（10分）

**主な変換**:
- `class` → `className`
- `<img>` → `<img />`
- `onclick` → `onClick`
- インラインスタイルをオブジェクト形式に

**例**:
```html
<!-- HTML -->
<div class="container" onclick="handleClick()">
  <img src="/images/logo.png">
</div>
```

```tsx
// React
<div className="container" onClick={handleClick}>
  <img src="/images/logo.png" />
</div>
```

---

## ✅ 完了チェックリスト

- [ ] GEMINIのHTMLコードを保存した
- [ ] パスを抽出した
- [ ] マッピング表を作成した
- [ ] パスを置き換えた
- [ ] Reactコンポーネントに変換した
- [ ] 動作確認した

---

## 🎯 所要時間の目安

- **ステップ1**: 1分
- **ステップ2**: 1分
- **ステップ3**: 5分
- **ステップ4**: 3分
- **ステップ5**: 10分

**合計**: 約20分

---

## 💡 トラブルシューティング

### パスが見つからない
→ `public/images/` フォルダで実際のファイル名を確認

### 画像が表示されない
→ パスが `/images/` で始まっているか確認

### 動画が再生されない
→ `autoPlay`, `loop`, `muted`, `playsInline` 属性を追加

---

## 📚 詳細はこちら

- **詳細ガイド**: `GEMINI_HTML_MIGRATION_GUIDE.md`
- **マッピングテンプレート**: `ASSETS_MAPPING_TEMPLATE.md`
