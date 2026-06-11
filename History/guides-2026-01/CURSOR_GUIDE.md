# Cursor用 アストロ化ガイド

このファイルは、Geminiで作成したHTMLをCursorでAstro化する際の指示書です。

---

## 📋 Cursorに投げる指示テンプレート

```
以下のHTMLをAstro 5.0プロジェクトに統合してください。

【プロジェクト情報】
- フレームワーク: Astro 5.0
- スタイリング: Tailwind CSS
- アニメーション: GSAP + Lenis
- 物理エンジン: Matter.js（トップページのみ）

【このHTMLの用途】
Chapter 0X のメインページ
（Chapter 01 = 物語の積み重ね / Chapter 02 = 没入する機材たち / Chapter 03 = 技術とその先へ）

【ファイル配置ルール】
以下の構成に従ってファイルを作成してください：

1. ページファイル
   - 配置先: src/pages/chapter0X/index.astro

2. コンポーネント（必要に応じて分離）
   - 配置先: src/components/chapter0X/
   - 命名: PascalCase（例: StoryHeader.astro）

3. レイアウト
   - 共通レイアウト: src/layouts/ChapterLayout.astro を使用
   - なければ作成してください

4. データファイル
   - 配置先: src/data/chapter0X-posts.json
   - テキストや記事データを分離する場合

【スタイリング要件】
- Tailwind CSSを使用
- レスポンシブ対応（mobile-first）
- トップページと統一感のあるデザイン
- アクセントカラー: var(--accent-color) を使用

【アニメーション要件】
- スムーススクロール（Lenis）を継承
- GSAP ScrollTriggerを活用
- トップページのような物理エンジンは不要

【コード品質】
- TypeScript型定義を適切に使用
- コメントは日本語でOK
- コンポーネントは再利用可能に設計

【作成してほしいファイル一覧】
1. src/pages/chapter0X/index.astro
2. src/components/chapter0X/ 配下の必要なコンポーネント
3. src/layouts/ChapterLayout.astro（まだなければ）
4. src/data/chapter0X-posts.json（データがあれば）

【その他の要望】
- （章ごとの特別な要件があればここに記載）

---

【GeminiのHTML】
（ここにGeminiで作成したHTMLを貼り付け）

```

---

## 🎯 各Chapterの特徴と要件

### Chapter 01: 物語の積み重ね
- **テーマ**: ブログ記事、ストーリーテリング
- **デザイン**: 縦書き要素を活用
- **機能**: 記事一覧、カテゴリフィルター、時系列表示
- **データ**: `src/data/chapter01-posts.json`

### Chapter 02: 没入する機材たち
- **テーマ**: ガジェット、機材紹介
- **デザイン**: グリッドレイアウト、カードUI
- **機能**: 機材スペック表示、画像ギャラリー
- **データ**: `src/data/chapter02-posts.json`

### Chapter 03: 技術とその先へ
- **テーマ**: 技術記事、AI・コーディング
- **デザイン**: モダン、テック感
- **機能**: コードハイライト、タグ検索
- **データ**: `src/data/chapter03-posts.json`

---

## 📁 ファイル配置の詳細

### ページファイル構成
```
src/pages/
├── index.astro                    # トップページ（既存）
├── chapter01/
│   └── index.astro                # Chapter 01メイン
├── chapter02/
│   └── index.astro                # Chapter 02メイン
└── chapter03/
    └── index.astro                # Chapter 03メイン
```

### コンポーネント構成
```
src/components/
├── common/                        # 全体で共通
│   ├── Hero.astro
│   ├── HorizontalScroll.astro
│   └── NewPost.astro
├── chapter01/                     # Chapter 01専用
│   ├── StoryHeader.astro         # ヘッダー
│   ├── PostList.astro            # 記事一覧
│   └── PostCard.astro            # 記事カード
├── chapter02/                     # Chapter 02専用
│   ├── GearHeader.astro
│   ├── GearGrid.astro
│   └── GearCard.astro
└── chapter03/                     # Chapter 03専用
    ├── TechHeader.astro
    ├── ArticleList.astro
    └── CodeBlock.astro
```

### レイアウト構成
```
src/layouts/
├── Layout.astro                   # 基本レイアウト（既存）
└── ChapterLayout.astro            # チャプター用レイアウト（新規）
```

---

## 🔗 リンク接続

### トップページからChapterへ
`src/components/HorizontalScroll.astro` を修正:

```astro
<!-- Chapter 01 -->
<a href="/chapter01/" class="...">READ STORIES</a>

<!-- Chapter 02 -->
<a href="/chapter02/" class="...">CHECK GEARS</a>

<!-- Chapter 03 -->
<a href="/chapter03/" class="...">EXPLORE LAB</a>
```

### Chapterからトップページへ
各Chapterページに「戻る」リンクを設置:

```astro
<a href="/" class="...">← BACK TO HOME</a>
```

---

## 🎨 デザイン統一ルール

### カラーパレット
```css
/* グローバル変数（src/styles/global.css） */
--accent-color: #ff4d00;     /* メインアクセント */
--bg-dark: #050505;          /* 背景黒 */
--text-light: #ffffff;       /* テキスト白 */
--text-gray: #a0a0a0;        /* グレーテキスト */
```

### フォント
```css
font-mono    /* 英数字、コード */
font-mincho  /* 日本語タイトル、縦書き */
font-sans    /* 本文 */
```

### 共通クラス
```
.holo-content          /* ホログラフィック効果 */
.skeleton-text-box     /* テキストボックス */
.tategaki-char         /* 縦書き文字 */
```

---

## 📝 データ管理方式

### CONTENT_CHAPTERXX.md方式（推奨）

各Chapterごとに編集用マークダウンを作成:

```
CONTENT.md              # トップページ用（既存）
CONTENT_CHAPTER01.md    # Chapter 01用
CONTENT_CHAPTER02.md    # Chapter 02用
CONTENT_CHAPTER03.md    # Chapter 03用
```

### 変換スクリプト

```
scripts/
├── update-content.js           # トップページ用（既存）
├── update-chapter01.js         # Chapter 01用
├── update-chapter02.js         # Chapter 02用
└── update-chapter03.js         # Chapter 03用
```

### package.json追加コマンド

```json
{
  "scripts": {
    "update-chapter01": "node scripts/update-chapter01.js",
    "update-chapter02": "node scripts/update-chapter02.js",
    "update-chapter03": "node scripts/update-chapter03.js",
    "update-all": "npm run update-content && npm run update-chapter01 && npm run update-chapter02 && npm run update-chapter03"
  }
}
```

---

## 🖼️ 画像管理

### フォルダ構成
```
public/images/
├── common/                  # 共通画像（ロゴなど）
├── chapter01/               # Chapter 01専用
├── chapter02/               # Chapter 02専用
├── chapter03/               # Chapter 03専用
└── archive/                 # 未使用画像
```

### 画像パス指定
```astro
<!-- Astroファイル内 -->
<img src="/images/chapter01/photo.jpg" alt="...">
```

---

## ✅ Cursor作業後のチェックリスト

### 1. ファイル配置確認
- [ ] `src/pages/chapter0X/index.astro` が作成されている
- [ ] コンポーネントが適切に分離されている
- [ ] レイアウトファイルが作成されている

### 2. 動作確認
```bash
npm run dev
```
- [ ] ページが正しく表示される
- [ ] リンクが動作する
- [ ] レスポンシブ対応できている
- [ ] アニメーションが滑らか

### 3. コード品質確認
- [ ] TypeScript型エラーがない
- [ ] Tailwind CSSのみを使用（インラインスタイル最小限）
- [ ] コンポーネントが再利用可能
- [ ] 不要なコメントを削除

### 4. データ管理確認
- [ ] `CONTENT_CHAPTER0X.md` が作成されている
- [ ] 変換スクリプトが動作する
- [ ] `package.json` にコマンド追加済み

### 5. Git管理
```bash
git add .
git commit -m "feat: Chapter 0X ページを追加"
git push origin main
```

---

## 🚀 デプロイ前の最終確認

### ビルドテスト
```bash
npm run build
npm run preview
```

### 確認項目
- [ ] ビルドエラーがない
- [ ] 全ページが正常に表示される
- [ ] 画像が全て読み込まれる
- [ ] リンクが全て機能する
- [ ] モバイルでも正常に表示される

---

## 📚 参考資料

### プロジェクト内ドキュメント
- `README.md` - プロジェクト概要
- `QUICKSTART.md` - クイックスタート
- `docs/IMAGE_GUIDE.md` - 画像管理ガイド

### トップページ参照
- `src/pages/index.astro` - ページ構成の参考
- `src/components/Hero.astro` - アニメーション参考
- `src/components/HorizontalScroll.astro` - レイアウト参考

---

## 💡 Tips

### Cursorでの効率的な作業
1. **このガイドを開いた状態で作業**
2. **テンプレートをコピーして指示**
3. **生成されたコードを確認しながら調整**
4. **チェックリストで漏れを防ぐ**

### トラブルシューティング
- エラーが出たら `npm run dev` を再起動
- 画像が表示されない → パスを確認
- スタイルが反映されない → Tailwind設定を確認
- アニメーションが動かない → GSAPの読み込みを確認

---

**最終更新**: 2026-01-06
**次回更新時**: Chapter実装開始時に詳細を追記
