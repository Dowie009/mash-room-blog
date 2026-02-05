---
title: Astro Content Collectionsで記事管理システムを構築した話
date: 2026-01-10
category: dev-tools
thumbnail: /images/Blog_00.png
description: AstroのContent Collectionsを使って、型安全な記事管理システムを構築した実装メモ
tags: ['Astro', 'Content Collections', 'TypeScript', 'ブログ構築']
draft: false
heroImage: https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1920
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
      このブログ、実はAstroのContent Collectionsで動いてる。
    </p>
    <p class="intro-body">
      型安全で、Markdownで書けて、デザイン変更が一箇所で済む。ブログ記事管理システムを構築した時の実装メモを残しておく。
    </p>
  </div>
  <div class="intro-image reveal-right">
    <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200" alt="Astro" />
    <div class="image-caption">Astro Content Collections</div>
  </div>
</section>

<div class="full-image reveal">
  <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920" alt="Code" />
  <div class="full-image-overlay">
    <div class="full-image-text">
      <h2 class="serif">なぜContent Collectionsか</h2>
      <p>型安全、Markdown対応、自動ルーティング。ブログ構築に必要なものが全部揃ってる。</p>
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
      Content Collectionsって何なん？<br/>
      普通にMarkdownファイル置くのと何が違うん？
    </div>
  </div>
</div>

<div class="michi-message">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" class="michi-avatar" />
  <div class="michi-content">
    <div class="michi-name">道ゐちゃん</div>
    <div class="michi-bubble">
      <span class="big marker-pink">型安全</span>なのが一番デカい。<br/><br/>
      <span class="marker-yellow">Zodでスキーマを定義</span>すると、frontmatterの型が保証される。「titleが必須」「dateはDate型」みたいに。<br/><br/>
      間違った形式で書いたらビルド時にエラーになるから、本番でバグが出ない。
    </div>
  </div>
</div>

</div>

<section class="stats-section">
  <div class="stats-grid">
    <div class="stat-item">
      <div class="stat-number serif">1</div>
      <div class="stat-label">config.tsでスキーマ定義</div>
    </div>
    <div class="stat-item">
      <div class="stat-number serif">自動</div>
      <div class="stat-label">ルーティング生成</div>
    </div>
    <div class="stat-item">
      <div class="stat-number serif">型安全</div>
      <div class="stat-label">TypeScript連携</div>
    </div>
    <div class="stat-item">
      <div class="stat-number serif">1箇所</div>
      <div class="stat-label">デザイン変更</div>
    </div>
  </div>
</section>

<section class="split-section">
  <div class="split-image">
    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200" alt="Schema" />
  </div>
  <div class="split-content">
    <div class="split-number serif reveal">01</div>
    <h2 class="split-title serif reveal">スキーマを定義する</h2>
    <p class="split-text reveal">
      <code>src/content/config.ts</code>でZodを使ってスキーマを定義。<br/><br/>
      title、date、description、tags…必要なfrontmatter項目を全部ここで指定する。<br/><br/>
      これがあると、VSCodeで補完も効くし、タイポも防げる。
    </p>
  </div>
</section>

<section class="split-section">
  <div class="split-content">
    <div class="split-number serif reveal">02</div>
    <h2 class="split-title serif reveal">動的ルーティング</h2>
    <p class="split-text reveal">
      <code>/tech/[slug].astro</code>で記事ページを自動生成。<br/><br/>
      <code>getStaticPaths</code>でコレクション内の全記事を取得して、各記事ページを生成する。<br/><br/>
      新しい記事を追加しても、ルーティングの設定は不要。
    </p>
  </div>
  <div class="split-image">
    <img src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200" alt="Routing" />
  </div>
</section>

<!-- 会話セクション：PostLayout -->
<div class="chat-container">

<div class="aibou-message">
  <div class="aibou-avatar">🤖</div>
  <div class="aibou-content">
    <div class="aibou-name">あいぼー</div>
    <div class="aibou-bubble">
      デザイン変更が一箇所で済むってどういうこと？
    </div>
  </div>
</div>

<div class="michi-message">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" class="michi-avatar" />
  <div class="michi-content">
    <div class="michi-name">道ゐちゃん</div>
    <div class="michi-bubble">
      <span class="marker-yellow">PostLayoutコンポーネント</span>に全部集約してるんよ。<br/><br/>
      <span class="point-num">1</span>ヘッダー画像の表示<br/>
      <span class="point-num">2</span>タイトル、日付、タグの配置<br/>
      <span class="point-num">3</span>本文のスタイリング<br/>
      <span class="point-num">4</span>関連記事の表示<br/><br/>
      <span class="big marker-pink">デザインを変えたくなったらPostLayoutだけ修正</span>すれば、全記事に反映される。これが最高に楽。
    </div>
  </div>
</div>

</div>

<section class="quote-section">
  <div class="quote-bg-text">ASTRO</div>
  <div class="quote-inner reveal">
    <div class="quote-mark serif">"</div>
    <p class="quote-text serif">
      Content Collectionsは小〜中規模のブログに最適。型安全でMarkdownで書けて、デザイン変更が一箇所で済む。セットアップも簡単だった。
    </p>
    <div class="quote-author">— 実装してみた感想</div>
  </div>
</section>

<section class="timeline-section">
  <div class="timeline-header reveal">
    <h2 class="serif">やったこと</h2>
  </div>
  <div class="timeline">
    <div class="timeline-item reveal">
      <div class="timeline-year serif">1</div>
      <div class="timeline-content">
        <h4 class="serif">config.tsでスキーマ定義</h4>
        <p>Zodを使ってfrontmatterの型を定義。title、date、description、tags、heroImage…全部ここで。</p>
      </div>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year serif">2</div>
      <div class="timeline-content">
        <h4 class="serif">動的ルーティング設定</h4>
        <p>/tech/[slug].astroで記事ページを自動生成。getStaticPathsでコレクション内の全記事を取得。</p>
      </div>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year serif">3</div>
      <div class="timeline-content">
        <h4 class="serif">PostLayoutで一元管理</h4>
        <p>Geminiのアドバイスを採用し、デザインはPostLayout.astroに集約。変更が一箇所で済む。</p>
      </div>
    </div>
  </div>
</section>

<article class="article-container">
  <div class="article-inner">

<div class="tips-box">
  <h3 class="serif">Content Collectionsの良かった点</h3>
  <ul class="tips-list">
    <li>
      <span class="tips-number">01</span>
      <span>型安全でエラーが事前に分かる。ビルド時に検出されるから本番で安心。</span>
    </li>
    <li>
      <span class="tips-number">02</span>
      <span>Markdownで書けるので執筆に集中できる。フォーマットを気にしなくていい。</span>
    </li>
    <li>
      <span class="tips-number">03</span>
      <span>デザイン変更が一箇所で済む。PostLayoutを修正すれば全記事に反映。</span>
    </li>
  </ul>
</div>

## まとめ

Content Collectionsは**ブログ構築に最適**。

型安全、Markdown対応、自動ルーティング、一元管理…必要なものが全部揃ってる。セットアップも公式ドキュメント見ながら1時間くらいで終わった。

このブログもContent Collectionsで動いてる。小〜中規模のブログにはおすすめ。

  </div>
</article>

---

## 関連記事

- **Vibe Coding** → [コードで「なんとなく」を形にする](/tech/vibe-coding-philosophy)
- **Claude Code** → [Claude Codeを1週間使ってみた](/tech/claude-code-first-week)
