---
title: Markdown入門｜5分で覚える基本記法と便利な書き方
date: 2026-01-21
category: useful-tools
thumbnail: /images/tech/thumbnails/markdown-guide.svg
description: Markdownの基本記法を5分で習得。見出し、リスト、リンク、コードブロックなど、日常的に使う書き方をまとめました。
tags: ['Markdown', 'ドキュメント', '初心者向け', 'ツール']
draft: false
heroImage: https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1920
---

<!-- MonoJournal写真多め + 会話形式ハイブリッド -->

<style>
.chat-container {
  max-width: 800px;
  margin: 3rem auto;
  padding: 0 1rem;
}
.aibou-message {
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
}
.aibou-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b9d, #ff4466);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.5rem;
}
.aibou-content { flex: 1; }
.aibou-name {
  font-size: 0.75rem;
  margin-bottom: 0.3rem;
  font-weight: bold;
  color: var(--gray-600);
}
.aibou-bubble {
  padding: 1rem 1.25rem;
  border-radius: 0 16px 16px 16px;
  background: var(--gray-100);
  font-family: 'Noto Serif JP', serif;
  font-weight: 500;
  line-height: 2;
  letter-spacing: 0.03em;
}
.michi-message {
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
  flex-direction: row-reverse;
}
.michi-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}
.michi-content {
  flex: 1;
  text-align: right;
}
.michi-name {
  font-size: 0.75rem;
  margin-bottom: 0.3rem;
  font-weight: bold;
  color: var(--gray-600);
}
.michi-bubble {
  padding: 1rem 1.25rem;
  border-radius: 16px 0 16px 16px;
  background: linear-gradient(135deg, rgba(0,191,255,0.1), rgba(255,107,157,0.1));
  text-align: left;
  font-family: 'Noto Serif JP', serif;
  font-weight: 500;
  line-height: 2;
  letter-spacing: 0.03em;
}
.big { font-size: 1.1em; font-weight: bold; }
.marker-yellow { background: linear-gradient(transparent 60%, rgba(255,245,157,0.5) 60%); padding: 0 2px; }
.marker-pink { background: linear-gradient(transparent 60%, rgba(248,187,217,0.5) 60%); padding: 0 2px; }
.marker-blue { background: linear-gradient(transparent 60%, rgba(187,222,251,0.5) 60%); padding: 0 2px; }
.marker-green { background: linear-gradient(transparent 60%, rgba(200,230,201,0.5) 60%); padding: 0 2px; }
.keyword { display: inline-block; background: rgba(0,191,255,0.15); border: 1px solid rgba(0,191,255,0.3); border-radius: 4px; padding: 0 6px; font-weight: 500; }
.point-num { display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: linear-gradient(135deg, #00bfff, #0088cc); color: #fff; border-radius: 50%; font-size: 0.8em; font-weight: bold; margin-right: 8px; }
</style>

<section class="intro-section">
  <div class="intro-text reveal-left">
    <p class="intro-lead serif">
      Markdownは「シンプルな記号で文書を装飾できる」魔法の言語。
    </p>
    <p class="intro-body">
      GitHub、Notion、ブログ、議事録…あらゆる場面で使われてる。俺もこのブログ、全部Markdownで書いてる。5分で基本をマスターしよう。
    </p>
  </div>
  <div class="intro-image reveal-right">
    <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200" alt="Markdown" />
    <div class="image-caption">コードのような、文章のような</div>
  </div>
</section>

<div class="full-image reveal">
  <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1920" alt="Code" />
  <div class="full-image-overlay">
    <div class="full-image-text">
      <h2 class="serif">なぜMarkdownなのか</h2>
      <p>WordやGoogleドキュメントより軽くて、どこでも使える。</p>
    </div>
  </div>
</div>

<!-- 会話セクション：導入 -->
<div class="chat-container">

<div class="aibou-message">
  <div class="aibou-avatar">🤖</div>
  <div class="aibou-content">
    <div class="aibou-name">あいぼー</div>
    <div class="aibou-bubble">
      Markdownってよく聞くけど、結局何なん？<br/>
      プログラミング言語？
    </div>
  </div>
</div>

<div class="michi-message">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" class="michi-avatar" />
  <div class="michi-content">
    <div class="michi-name">道ゐちゃん</div>
    <div class="michi-bubble">
      プログラミング言語じゃなくて、<span class="marker-yellow">「軽量マークアップ言語」</span>っていうやつ。<br/><br/>
      要は<span class="big marker-pink">シンプルな記号で文書を装飾できる</span>ってこと。<br/><br/>
      例えば「**太字**」って書くと<strong>太字</strong>になる。Wordみたいにボタン押さなくていい。
    </div>
  </div>
</div>

</div>

<section class="stats-section">
  <div class="stats-grid">
    <div class="stat-item">
      <div class="stat-number serif">5分</div>
      <div class="stat-label">基本習得時間</div>
    </div>
    <div class="stat-item">
      <div class="stat-number serif">5つ</div>
      <div class="stat-label">最低限覚える記法</div>
    </div>
    <div class="stat-item">
      <div class="stat-number serif">∞</div>
      <div class="stat-label">使える場所</div>
    </div>
    <div class="stat-item">
      <div class="stat-number serif">0円</div>
      <div class="stat-label">必要なツール代</div>
    </div>
  </div>
</section>

<section class="split-section">
  <div class="split-image">
    <img src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=1200" alt="Writing" />
  </div>
  <div class="split-content">
    <div class="split-number serif reveal">01</div>
    <h2 class="split-title serif reveal">まず覚える5つの記法</h2>
    <p class="split-text reveal">
      見出し、太字、斜体、リンク、リスト。この5つだけ覚えれば、日常的な文書は書ける。<br/><br/>
      <code># 見出し</code> → 見出し<br/>
      <code>**太字**</code> → <strong>太字</strong><br/>
      <code>*斜体*</code> → <em>斜体</em><br/>
      <code>[テキスト](URL)</code> → リンク<br/>
      <code>- 項目</code> → リスト
    </p>
  </div>
</section>

<!-- 会話セクション：見出しの使い方 -->
<div class="chat-container">

<div class="aibou-message">
  <div class="aibou-avatar">🤖</div>
  <div class="aibou-content">
    <div class="aibou-name">あいぼー</div>
    <div class="aibou-bubble">
      見出しの「#」って、何個つけるん？
    </div>
  </div>
</div>

<div class="michi-message">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" class="michi-avatar" />
  <div class="michi-content">
    <div class="michi-name">道ゐちゃん</div>
    <div class="michi-bubble">
      <span class="point-num">1</span><code>#</code> → 大見出し（H1）<br/>
      <span class="point-num">2</span><code>##</code> → 中見出し（H2）<br/>
      <span class="point-num">3</span><code>###</code> → 小見出し（H3）<br/><br/>
      <span class="marker-yellow">#の数が多いほど小さくなる</span>。普段は## と ###を使うことが多い。<br/><br/>
      ブログ記事なら<span class="keyword">タイトルがH1、セクションがH2、項目がH3</span>って感じ。
    </div>
  </div>
</div>

</div>

<section class="split-section">
  <div class="split-content">
    <div class="split-number serif reveal">02</div>
    <h2 class="split-title serif reveal">リストとコードブロック</h2>
    <p class="split-text reveal">
      情報を整理するにはリストとコードブロックが便利。<br/><br/>
      <strong>箇条書き</strong>: <code>-</code> か <code>*</code> で始める<br/>
      <strong>番号付き</strong>: <code>1.</code> <code>2.</code> で始める<br/>
      <strong>コードブロック</strong>: バッククォート3つで囲む<br/><br/>
      コードブロックには言語名を指定すると、色分けされて見やすくなる。
    </p>
  </div>
  <div class="split-image">
    <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200" alt="Code" />
  </div>
</section>

<section class="quote-section">
  <div class="quote-bg-text">MARKDOWN</div>
  <div class="quote-inner reveal">
    <div class="quote-mark serif">"</div>
    <p class="quote-text serif">
      Markdownは「書くことに集中できる」のが最大の利点。装飾のためにマウスを動かす必要がない。キーボードから手を離さず、思考を止めずに書ける。
    </p>
    <div class="quote-author">— Markdownの哲学</div>
  </div>
</section>

<section class="split-section">
  <div class="split-image">
    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200" alt="Table" />
  </div>
  <div class="split-content">
    <div class="split-number serif reveal">03</div>
    <h2 class="split-title serif reveal">テーブル（表）の書き方</h2>
    <p class="split-text reveal">
      比較表やデータの整理に便利なテーブル。<br/><br/>
      <code>| 列1 | 列2 | 列3 |</code><br/>
      <code>|-----|-----|-----|</code><br/>
      <code>| データ | データ | データ |</code><br/><br/>
      パイプ（|）で列を区切り、ハイフン（---）でヘッダーと本文を分ける。
    </p>
  </div>
</section>

<!-- 会話セクション：実践的な使い方 -->
<div class="chat-container">

<div class="aibou-message">
  <div class="aibou-avatar">🤖</div>
  <div class="aibou-content">
    <div class="aibou-name">あいぼー</div>
    <div class="aibou-bubble">
      道ゐちゃんはMarkdown、どこで使ってるん？
    </div>
  </div>
</div>

<div class="michi-message">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" class="michi-avatar" />
  <div class="michi-content">
    <div class="michi-name">道ゐちゃん</div>
    <div class="michi-bubble">
      <span class="big marker-yellow">めちゃくちゃ使ってる</span>。<br/><br/>
      <span class="point-num">1</span><span class="marker-pink">このブログ</span>：記事は全部Markdown<br/>
      <span class="point-num">2</span><span class="marker-blue">GitHub</span>：READMEやドキュメント<br/>
      <span class="point-num">3</span><span class="marker-green">Notion</span>：メモやタスク管理<br/>
      <span class="point-num">4</span><span class="marker-yellow">Slack</span>：メッセージの装飾<br/><br/>
      一度覚えると<span class="keyword">どこでも使える</span>のがMarkdownの強み。
    </div>
  </div>
</div>

</div>

<section class="timeline-section">
  <div class="timeline-header reveal">
    <h2 class="serif">Markdownが使える場所</h2>
  </div>
  <div class="timeline">
    <div class="timeline-item reveal">
      <div class="timeline-year serif">📝</div>
      <div class="timeline-content">
        <h4 class="serif">ブログ・CMS</h4>
        <p>Astro、Hugo、Jekyll、WordPress（プラグイン）など、多くのブログツールがMarkdown対応。</p>
      </div>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year serif">💻</div>
      <div class="timeline-content">
        <h4 class="serif">GitHub・GitLab</h4>
        <p>README、Issue、Pull Requestのコメント、Wiki。開発者の共通言語。</p>
      </div>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year serif">📋</div>
      <div class="timeline-content">
        <h4 class="serif">Notion・Obsidian</h4>
        <p>ノートアプリでもMarkdown記法が使える。Obsidianは完全Markdownベース。</p>
      </div>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year serif">💬</div>
      <div class="timeline-content">
        <h4 class="serif">Slack・Discord</h4>
        <p>メッセージの太字やコードブロックにMarkdown風記法が使える。</p>
      </div>
    </div>
  </div>
</section>

<article class="article-container">
  <div class="article-inner">

<div class="tips-box">
  <h3 class="serif">Markdown習得 3つのコツ</h3>
  <ul class="tips-list">
    <li>
      <span class="tips-number">01</span>
      <span>まず5つの基本記法だけ覚える。見出し、太字、斜体、リンク、リスト。</span>
    </li>
    <li>
      <span class="tips-number">02</span>
      <span>実際に書いて覚える。READMEやブログ記事を書いてみる。</span>
    </li>
    <li>
      <span class="tips-number">03</span>
      <span>プレビュー機能を使う。VSCodeやNotionで書きながら確認。</span>
    </li>
  </ul>
</div>

## まとめ

Markdownは**一度覚えれば一生使えるスキル**。

プログラマーじゃなくても、ブログを書く人、ドキュメントを作る人、メモを取る人…誰にとっても役立つ。

5分で基本を覚えて、あとは実践あるのみ。このブログを読んでる今日から、Markdownデビューしよう。

  </div>
</article>

---

## 関連記事

- **Notion活用術** → [Notionを使いこなして仕事効率を上げる](/tech/notion-productivity)
- **GitHub Copilot** → [AIと一緒にコードを書く時代](/tech/github-copilot-guide)
