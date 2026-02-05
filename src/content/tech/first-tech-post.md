---
title: TECH LAB システム構築開始
date: 2026-01-10
category: dev-tools
thumbnail: /images/01.png
description: CockpitからブログへのリアルタイムPJ発信システムを構築中
tags: ['Astro', 'React', 'Claude Code', 'Cockpit']
draft: false
heroImage: https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920
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
      TECH LABの記念すべき最初の記事。システム構築の始まりを記録する。
    </p>
    <p class="intro-body">
      Cockpitアプリで記事を書いて、保存したらブログに反映される。そんなシステムを作ろうと思った。これが全ての始まり。
    </p>
  </div>
  <div class="intro-image reveal-right">
    <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200" alt="Start" />
    <div class="image-caption">すべてはここから</div>
  </div>
</section>

<div class="full-image reveal">
  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920" alt="Development" />
  <div class="full-image-overlay">
    <div class="full-image-text">
      <h2 class="serif">目指すもの</h2>
      <p>Cockpitで書く → ブログに反映 → デザインは後から調整</p>
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
      TECH LABって何を目指してるん？<br/>
      普通のブログと何が違うん？
    </div>
  </div>
</div>

<div class="michi-message">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" class="michi-avatar" />
  <div class="michi-content">
    <div class="michi-name">道ゐちゃん</div>
    <div class="michi-bubble">
      <span class="big marker-pink">開発ログをリアルタイムで公開</span>することを目指してる。<br/><br/>
      <span class="marker-yellow">Cockpitアプリ</span>で記事を書いて、保存したらブログに自動反映。普通のブログみたいにWordPress開いて〜みたいな手間がない。<br/><br/>
      今後の開発をリアルタイムで発信していく場所にしたいんよ。
    </div>
  </div>
</div>

</div>

<section class="stats-section">
  <div class="stats-grid">
    <div class="stat-item">
      <div class="stat-number serif">Astro</div>
      <div class="stat-label">静的サイト生成</div>
    </div>
    <div class="stat-item">
      <div class="stat-number serif">Next.js</div>
      <div class="stat-label">Cockpitアプリ</div>
    </div>
    <div class="stat-item">
      <div class="stat-number serif">MD</div>
      <div class="stat-label">記事フォーマット</div>
    </div>
    <div class="stat-item">
      <div class="stat-number serif">1</div>
      <div class="stat-label">最初の記事</div>
    </div>
  </div>
</section>

<section class="split-section">
  <div class="split-image">
    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200" alt="Tech Stack" />
  </div>
  <div class="split-content">
    <div class="split-number serif reveal">01</div>
    <h2 class="split-title serif reveal">技術スタック</h2>
    <p class="split-text reveal">
      <span class="point-num">1</span><strong>Astro 5.0</strong>：静的サイト生成<br/>
      <span class="point-num">2</span><strong>Content Collections</strong>：Markdown記事管理<br/>
      <span class="point-num">3</span><strong>Cockpit (Next.js)</strong>：管理アプリ<br/><br/>
      この3つを組み合わせて、シームレスな記事投稿システムを作る。
    </p>
  </div>
</section>

<section class="timeline-section">
  <div class="timeline-header reveal">
    <h2 class="serif">次のステップ</h2>
  </div>
  <div class="timeline">
    <div class="timeline-item reveal">
      <div class="timeline-year serif">1</div>
      <div class="timeline-content">
        <h4 class="serif">記事投稿フォームを追加</h4>
        <p>Cockpitに記事投稿フォームを追加。タイトル、本文、タグを入力できるようにする。</p>
      </div>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year serif">2</div>
      <div class="timeline-content">
        <h4 class="serif">Markdownファイル自動生成</h4>
        <p>フォームの内容からMarkdownファイルを自動生成。frontmatterも含めて。</p>
      </div>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year serif">3</div>
      <div class="timeline-content">
        <h4 class="serif">本格的な記事を書く</h4>
        <p>システムが動いたら、最初の本格的な記事を書く。開発ログをリアルタイムで公開していく。</p>
      </div>
    </div>
  </div>
</section>

<article class="article-container">
  <div class="article-inner">

<div class="tips-box">
  <h3 class="serif">今日やったこと</h3>
  <ul class="tips-list">
    <li>
      <span class="tips-number">01</span>
      <span>TECH LABの記事投稿システムを構築開始</span>
    </li>
    <li>
      <span class="tips-number">02</span>
      <span>Astro + Content Collectionsの基盤を作成</span>
    </li>
    <li>
      <span class="tips-number">03</span>
      <span>最初の記事（この記事）を投稿</span>
    </li>
  </ul>
</div>

## まとめ

これが**TECH LABの始まり**。

システムが動けば、今後の開発ログをリアルタイムで公開できる。Cockpitで書いて、保存して、ブログに反映。このワークフローを実現する。

次は記事投稿フォームの追加。進捗があればまた書く。

  </div>
</article>

---

## 関連記事

- **Content Collections** → [Astro Content Collectionsで記事管理](/tech/astro-content-collections)
- **Claude Code** → [Claude Codeを1週間使ってみた](/tech/claude-code-first-week)
