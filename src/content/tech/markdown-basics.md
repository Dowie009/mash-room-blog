---
title: Markdown入門｜5分で覚える基本記法と便利な書き方
date: 2026-01-21
category: useful-tools
thumbnail: /images/tech/thumbnails/markdown-guide.svg
description: Markdownの基本記法を5分で習得。見出し、リスト、リンク、コードブロックなど、日常的に使う書き方をまとめました。
tags: ['Markdown', 'ドキュメント', '初心者向け', 'ツール']
draft: false
defaultPreset: 5
learnings:
  - 基本的な文字装飾と見出し
  - リスト・テーブル・コードブロック
  - 実践的なMarkdown活用法
heroImage: https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1920
---

Markdownは、**シンプルな記号で文書を装飾できる**軽量マークアップ言語です。

GitHubのREADME、Notionのドキュメント、ブログ記事など、あらゆる場面で使われています。

この記事を読めば、**5分でMarkdownの基本がマスター**できます。

<div class="pandora-toc">

## 目次

1. [基本的な文字装飾と見出し](#learning-1)
2. [リスト・テーブル・コードブロック](#learning-2)
3. [実践的なMarkdown活用法](#learning-3)

</div>

---

<h2 id="learning-1">基本的な文字装飾と見出し</h2>

まずは最もよく使う基本記法から覚えましょう。

<div class="pandora-point-box">

### 覚えるべき5つの基本

1. **見出し**: `#` の数でレベルを指定
2. **太字**: `**テキスト**`
3. **斜体**: `*テキスト*`
4. **取り消し線**: `~~テキスト~~`
5. **リンク**: `[テキスト](URL)`

</div>

### 見出しの書き方

<div class="pandora-example-box">

**Markdown記法**

```markdown
# 見出し1（H1）
## 見出し2（H2）
### 見出し3（H3）
#### 見出し4（H4）
```

`#` の数が多いほど小さな見出しになります。

</div>

### 文字装飾

<div class="pandora-compare-table">

| 書き方 | 表示結果 | 用途 |
|--------|---------|------|
| `**太字**` | **太字** | 強調したい部分 |
| `*斜体*` | *斜体* | 引用、英単語 |
| `~~取り消し~~` | ~~取り消し~~ | 修正・変更を示す |
| `` `コード` `` | `コード` | インラインコード |

</div>

<div class="pandora-tip-box">

**ポイント**

太字と斜体は組み合わせ可能。`***太字かつ斜体***` と書くと ***太字かつ斜体*** になります。

</div>

---

<h2 id="learning-2">リスト・テーブル・コードブロック</h2>

次に、情報を整理するための記法を覚えましょう。

<div class="pandora-step-flow">

<div class="pandora-step">
<div class="pandora-step-number">1</div>
<div class="pandora-step-content">

### 箇条書きリスト

```markdown
- 項目1
- 項目2
  - ネストした項目
  - ネストした項目
- 項目3
```

`-` の代わりに `*` や `+` でも同じ結果になります。

</div>
</div>

<div class="pandora-step">
<div class="pandora-step-number">2</div>
<div class="pandora-step-content">

### 番号付きリスト

```markdown
1. 最初の項目
2. 2番目の項目
3. 3番目の項目
```

実は番号はすべて `1.` でもOK。Markdownが自動で連番にしてくれます。

</div>
</div>

<div class="pandora-step">
<div class="pandora-step-number">3</div>
<div class="pandora-step-content">

### テーブル（表）

```markdown
| 名前 | 年齢 | 職業 |
|------|------|------|
| 田中 | 30 | エンジニア |
| 佐藤 | 25 | デザイナー |
```

`|` で列を区切り、`---` でヘッダーと本文を分けます。

</div>
</div>

<div class="pandora-step">
<div class="pandora-step-number">4</div>
<div class="pandora-step-content">

### コードブロック

````markdown
```javascript
function hello() {
  console.log("Hello, World!");
}
```
````

言語名を指定するとシンタックスハイライトが効きます。

</div>
</div>

</div>

### 引用

<div class="pandora-example-box">

**書き方**

```markdown
> これは引用文です。
> 複数行も可能です。
>> ネストした引用もできます。
```

</div>

---

<h2 id="learning-3">実践的なMarkdown活用法</h2>

日常でMarkdownを使う具体的なシーンを紹介します。

<div class="pandora-checklist">

- GitHubのREADME作成
- Notionでのドキュメント作成
- Slackでのメッセージ装飾
- ブログ記事の執筆
- 議事録・メモの整理

</div>

### READMEの書き方例

<div class="pandora-example-box">

**よくある構成**

```markdown
# プロジェクト名

## 概要
このプロジェクトは〜

## インストール方法
`npm install`

## 使い方
1. 設定ファイルを作成
2. コマンドを実行

## ライセンス
MIT
```

</div>

### 便利なショートカット

<div class="pandora-warning-box">

**注意**

Markdownの細かな記法はツールによって異なる場合があります（GFM、CommonMarkなど）。使用するツールのドキュメントを確認しましょう。

</div>

<div class="pandora-compare-table">

| 機能 | GitHub | Notion | Slack |
|------|--------|--------|-------|
| 見出し | ✅ | ✅ | ❌ |
| 太字 | ✅ | ✅ | ✅ |
| コードブロック | ✅ | ✅ | ✅ |
| テーブル | ✅ | ✅ | ❌ |
| チェックボックス | ✅ | ✅ | ❌ |

</div>

<div class="pandora-conclusion-box">

**結論**

Markdownは**一度覚えれば一生使えるスキル**。最初は基本的な記法だけ覚えて、必要に応じて調べながら使っていきましょう。

</div>

---

## まとめ

<div class="pandora-summary-box">

### この記事のポイント

1. 見出し、太字、リンクの3つは必須で覚える
2. リストとコードブロックで情報を整理
3. ツールによって対応状況が異なるので注意

</div>

Markdownをマスターして、**効率的なドキュメント作成**を始めましょう。

---

<div class="pandora-author-box">

### この記事を書いた人

**道ゐ / Dowie**

音楽スタジオ運営 / A-Sketch新人発掘担当。このブログもMarkdownで書いています。

</div>
