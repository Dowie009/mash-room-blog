---
title: そもそも「コードを書く」ってなに？40代が語るブログの進化
date: 2026-01-28
category: blog-writing
thumbnail: /images/Blog_00.png
description: WordPressを使わずに自分でブログシステムを作った理由。魔法のiらんどからの進化と、コードを書くことの本当の意味。
tags: ['コーディング', '初心者向け', 'WordPress', 'ブログ']
draft: false
heroImage: https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920
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
.keyword { display: inline-block; background: rgba(0,191,255,0.15); border: 1px solid rgba(0,191,255,0.3); border-radius: 4px; padding: 0 6px; font-weight: 500; }
.point-num { display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: linear-gradient(135deg, #00bfff, #0088cc); color: #fff; border-radius: 50%; font-size: 0.8em; font-weight: bold; margin-right: 8px; }
</style>

<section class="intro-section">
  <div class="intro-text reveal-left">
    <p class="intro-lead serif">
      「コードを書く」って聞くと難しそう？実は、昔やってたかもしれない。
    </p>
    <p class="intro-body">
      魔法のiらんど、ヤプログ、アメブロ…文字の色を変えたり、太字にしたり。あの記号たち、実は「コード」だったんです。40代の俺が、WordPressを使わずに自分でブログを作った話。
    </p>
  </div>
  <div class="intro-image reveal-right">
    <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200" alt="Coding" />
    <div class="image-caption">40代からのコーディング</div>
  </div>
</section>

<div class="full-image reveal">
  <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1920" alt="Code Screen" />
  <div class="full-image-overlay">
    <div class="full-image-text">
      <h2 class="serif">覚えてる？あの独特な記号たち</h2>
      <p>&lt;font color="red"&gt; とか書いてなかった？</p>
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
      道ゐちゃん、「コードを書く」ってどういうこと？<br/>
      なんか難しそうなイメージあるんやけど…
    </div>
  </div>
</div>

<div class="michi-message">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" class="michi-avatar" />
  <div class="michi-content">
    <div class="michi-name">道ゐちゃん</div>
    <div class="michi-bubble">
      いやいや、<span class="marker-yellow">40代なら昔やってたと思う</span>よ。<br/><br/>
      魔法のiらんどとかで、文字の色変えたことない？<br/>
      <code>&lt;font color="red"&gt;今日は楽しかった！&lt;/font&gt;</code><br/><br/>
      <span class="big marker-pink">あれ、「コード」なんだよ。</span>
    </div>
  </div>
</div>

<div class="aibou-message">
  <div class="aibou-avatar">🤖</div>
  <div class="aibou-content">
    <div class="aibou-name">あいぼー</div>
    <div class="aibou-bubble">
      えっ！あれがコード!?<br/>
      じゃあ俺もう書いてたってこと？
    </div>
  </div>
</div>

<div class="michi-message">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" class="michi-avatar" />
  <div class="michi-content">
    <div class="michi-name">道ゐちゃん</div>
    <div class="michi-bubble">
      そうそう！コードって要するに<span class="keyword">コンピュータへのお願い文</span>なんだよ。<br/><br/>
      <span class="point-num">1</span>「ここは赤色で」→ デザインの指示<br/>
      <span class="point-num">2</span>「ボタン押したら〇〇して」→ 動きの指示<br/><br/>
      難しく言うと「プログラミング」だけど、<span class="marker-blue">本質は昔と変わってない</span>。
    </div>
  </div>
</div>

</div>

<section class="stats-section">
  <div class="stats-grid">
    <div class="stat-item">
      <div class="stat-number serif">2000年</div>
      <div class="stat-label">魔法のiらんど全盛期</div>
    </div>
    <div class="stat-item">
      <div class="stat-number serif">HTML</div>
      <div class="stat-label">当時書いてたコード</div>
    </div>
    <div class="stat-item">
      <div class="stat-number serif">0円</div>
      <div class="stat-label">このブログの運営費</div>
    </div>
    <div class="stat-item">
      <div class="stat-number serif">AI</div>
      <div class="stat-label">今の相棒</div>
    </div>
  </div>
</section>

<section class="split-section">
  <div class="split-image">
    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200" alt="Modern Web" />
  </div>
  <div class="split-content">
    <div class="split-number serif reveal">01</div>
    <h2 class="split-title serif reveal">今の若い子たちは「選ぶ」時代</h2>
    <p class="split-text reveal">
      Instagram、TikTok、Canva…フィルターを選ぶだけ、テンプレを選ぶだけ。「チョイスする」時代になった。<br/><br/>
      でも俺は思った。「チョイスじゃなくて、自分で作れないかな？」
    </p>
  </div>
</section>

<section class="quote-section">
  <div class="quote-bg-text">WHY</div>
  <div class="quote-inner reveal">
    <div class="quote-mark serif">"</div>
    <p class="quote-text serif">
      WordPressのテーマを選ぶんじゃなくて、テーマ自体を自分で作りたかった。でも、そんなこと素人にできるの？そこで相談したのが…AIでした。
    </p>
    <div class="quote-author">— WordPressへの違和感</div>
  </div>
</section>

<section class="split-section">
  <div class="split-content">
    <div class="split-number serif reveal">02</div>
    <h2 class="split-title serif reveal">WordPressを使わなかった理由</h2>
    <p class="split-text reveal">
      テーマを選ぶだけでデザイン完成。プラグインで機能追加。情報もたくさんある。<br/><br/>
      でも「ここ、もうちょっと変えたい」ができない。テーマに縛られる感じ。重いし、サーバー代もかかる。
    </p>
  </div>
  <div class="split-image">
    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200" alt="WordPress Alternative" />
  </div>
</section>

<!-- 会話セクション：AIとの出会い -->
<div class="chat-container">

<div class="aibou-message">
  <div class="aibou-avatar">🤖</div>
  <div class="aibou-content">
    <div class="aibou-name">あいぼー</div>
    <div class="aibou-bubble">
      ほんで、AIに聞いてみたん？<br/>
      「自分でWordPressみたいなの作れる？」って。
    </div>
  </div>
</div>

<div class="michi-message">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" class="michi-avatar" />
  <div class="michi-content">
    <div class="michi-name">道ゐちゃん</div>
    <div class="michi-bubble">
      そう。そしたらさ、<br/><br/>
      <span class="big marker-yellow">「できますよ！」</span><br/><br/>
      しかも<span class="marker-pink">無料で公開できる方法もある</span>って。<br/>
      「一緒に作りましょう。僕がコードを書くので、あなたは『こうしたい』を伝えてくれればOKです」って。
    </div>
  </div>
</div>

<div class="aibou-message">
  <div class="aibou-avatar">🤖</div>
  <div class="aibou-content">
    <div class="aibou-name">あいぼー</div>
    <div class="aibou-bubble">
      えっ、じゃあ道ゐちゃんはコード書いてないん？
    </div>
  </div>
</div>

<div class="michi-message">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" class="michi-avatar" />
  <div class="michi-content">
    <div class="michi-name">道ゐちゃん</div>
    <div class="michi-bubble">
      <span class="marker-blue">全部自分で書いたわけじゃない</span>。<br/><br/>
      俺がやったのは…<br/>
      <span class="point-num">1</span>「何を作りたいか考えること」<br/>
      <span class="point-num">2</span>「AIとの対話」<br/><br/>
      <span class="big">この2つだけ。</span>
    </div>
  </div>
</div>

</div>

<section class="split-section">
  <div class="split-image">
    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200" alt="This Blog" />
  </div>
  <div class="split-content">
    <div class="split-number serif reveal">03</div>
    <h2 class="split-title serif reveal">完成したのがこのブログ</h2>
    <p class="split-text reveal">
      記事を書いて公開、カテゴリ分け、タグ機能、デザインは完全オリジナル、爆速で表示される。<br/><br/>
      かかった費用は0円（ドメイン代除く）。AIと一緒なら、素人でもシステムが作れる時代になった。
    </p>
  </div>
</section>

<section class="timeline-section">
  <div class="timeline-header reveal">
    <h2 class="serif">ブログの進化を振り返る</h2>
  </div>
  <div class="timeline">
    <div class="timeline-item reveal">
      <div class="timeline-year serif">2000</div>
      <div class="timeline-content">
        <h4 class="serif">魔法のiらんど時代</h4>
        <p>&lt;font color="red"&gt;を手打ちしてた。文字の色を変えるだけで嬉しかった。あれが俺の「コーディング」の原点。</p>
      </div>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year serif">2010</div>
      <div class="timeline-content">
        <h4 class="serif">WordPress全盛期</h4>
        <p>テーマを選んで、プラグイン入れて。便利だったけど「これじゃない」感があった。</p>
      </div>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year serif">2024</div>
      <div class="timeline-content">
        <h4 class="serif">AI時代の到来</h4>
        <p>「こうしたい」を伝えるだけでコードが生成される。素人でもシステムが作れる時代に。</p>
      </div>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year serif">2026</div>
      <div class="timeline-content">
        <h4 class="serif">このブログ完成</h4>
        <p>AIと一緒に作った、完全オリジナルのブログシステム。運営費0円、爆速表示。</p>
      </div>
    </div>
  </div>
</section>

<article class="article-container">
  <div class="article-inner">

<div class="tips-box">
  <h3 class="serif">40代からコードを始める3つのポイント</h3>
  <ul class="tips-list">
    <li>
      <span class="tips-number">01</span>
      <span>昔の経験を思い出す。魔法のiらんどでHTMLを書いてた人は、もう基礎がある。</span>
    </li>
    <li>
      <span class="tips-number">02</span>
      <span>AIを相棒にする。「こうしたい」を伝えるだけでコードを書いてくれる。</span>
    </li>
    <li>
      <span class="tips-number">03</span>
      <span>完璧を目指さない。動けばOK。あとから直せばいい。</span>
    </li>
  </ul>
</div>

## まとめ

昔、ブログで`<font color="red">`を書いてた人へ。

あの頃の延長線上に、今がある。

「コードを書く」って、難しいことじゃない。**コンピュータにお願いする文章**を書くこと。そしてAIがいる今、その「お願い」は日本語でできる。

  </div>
</article>

---

## 関連記事

- **AI壁打ち** → [AIは壁打ち相手として最強だった](/tech/ai-as-sparring-partner)
- **無料で公開** → [サーバーって結局、課金？無料枠でここまでできる！](/tech/free-hosting-guide)
