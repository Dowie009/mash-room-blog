---
title: 【保存版】ChatGPTプロンプト集｜コピペで使える厳選20選
date: 2026-01-28
category: ai-tips
thumbnail: /images/tech/thumbnails/chatgpt-prompts.svg
description: 仕事ですぐに使えるChatGPTプロンプトを厳選して20個紹介。メール作成、企画書、プレゼン資料など、シーン別にコピペで使えるテンプレートを用意しました。
tags: ['ChatGPT', 'プロンプト', '仕事効率化', 'AI']
draft: false
heroImage: https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920
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
.prompt-box {
  background: #1a1a2e;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 0.9rem;
  color: #e0e0e0;
  white-space: pre-wrap;
  overflow-x: auto;
}
</style>

<section class="intro-section">
  <div class="intro-text reveal-left">
    <p class="intro-lead serif">
      プロンプトは「AIへの指示書」。具体的に書くほど、良い回答が返ってくる。
    </p>
    <p class="intro-body">
      俺は毎日ChatGPTを使ってる。メール作成、企画のたたき台、文章校正…いろんな場面で活躍してくれる。コピペで使えるプロンプトを20個厳選した。
    </p>
  </div>
  <div class="intro-image reveal-right">
    <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200" alt="ChatGPT" />
    <div class="image-caption">AIを使いこなす</div>
  </div>
</section>

<div class="full-image reveal">
  <img src="https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=1920" alt="AI Prompts" />
  <div class="full-image-overlay">
    <div class="full-image-text">
      <h2 class="serif">プロンプトの極意</h2>
      <p>「何を」「誰に向けて」「どんなトーンで」を明確にする。</p>
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
      ChatGPTって、どう使えばいいかわからんのよな。<br/>
      「〇〇して」だけじゃ微妙な回答しか返ってこんし。
    </div>
  </div>
</div>

<div class="michi-message">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" class="michi-avatar" />
  <div class="michi-content">
    <div class="michi-name">道ゐちゃん</div>
    <div class="michi-bubble">
      それは<span class="marker-yellow">プロンプト（指示）が曖昧</span>だからかもしれない。<br/><br/>
      <span class="big marker-pink">AIは「察する」ことが苦手</span>。だから、こっちが具体的に条件を指定してあげる必要がある。<br/><br/>
      <span class="keyword">宛先、目的、トーン、文字数</span>…これらを明示するだけで、回答の精度がグッと上がる。
    </div>
  </div>
</div>

</div>

<section class="stats-section">
  <div class="stats-grid">
    <div class="stat-item">
      <div class="stat-number serif">20</div>
      <div class="stat-label">厳選プロンプト</div>
    </div>
    <div class="stat-item">
      <div class="stat-number serif">3</div>
      <div class="stat-label">カテゴリー</div>
    </div>
    <div class="stat-item">
      <div class="stat-number serif">5秒</div>
      <div class="stat-label">コピペで使える</div>
    </div>
    <div class="stat-item">
      <div class="stat-number serif">∞</div>
      <div class="stat-label">カスタマイズ可能</div>
    </div>
  </div>
</section>

<section class="split-section">
  <div class="split-image">
    <img src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200" alt="Email" />
  </div>
  <div class="split-content">
    <div class="split-number serif reveal">01</div>
    <h2 class="split-title serif reveal">ビジネスメール作成</h2>
    <p class="split-text reveal">
      ビジネスメールは頻度が高いからこそ、効率化の効果が大きい。<br/><br/>
      <strong>基本のプロンプト：</strong><br/>
      「宛先」「目的」「要点」「トーン」を指定するだけで、適切なメールが生成される。
    </p>
  </div>
</section>

<!-- 会話セクション：メールプロンプト -->
<div class="chat-container">

<div class="aibou-message">
  <div class="aibou-avatar">🤖</div>
  <div class="aibou-content">
    <div class="aibou-name">あいぼー</div>
    <div class="aibou-bubble">
      メール作成のプロンプト、具体的に教えてほしいわ！
    </div>
  </div>
</div>

<div class="michi-message">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" class="michi-avatar" />
  <div class="michi-content">
    <div class="michi-name">道ゐちゃん</div>
    <div class="michi-bubble">
      俺がよく使うのはこれ。<br/><br/>
      <span class="marker-yellow">【基本のメール作成プロンプト】</span><br/>
      <code>以下の条件でビジネスメールを作成してください。<br/>
      【宛先】取引先の担当者<br/>
      【目的】打ち合わせのお礼<br/>
      【要点】次回の日程調整<br/>
      【トーン】丁寧かつ親しみやすく</code><br/><br/>
      <span class="big marker-pink">{  }の中を書き換えるだけ</span>でいろんなパターンに対応できる。
    </div>
  </div>
</div>

</div>

<section class="split-section">
  <div class="split-content">
    <div class="split-number serif reveal">02</div>
    <h2 class="split-title serif reveal">お断りメールのプロンプト</h2>
    <p class="split-text reveal">
      断りのメールは特に表現が難しい。AIに任せることで、角が立たない文面を素早く作成できる。<br/><br/>
      <strong>プロンプト：</strong><br/>
      「相手に配慮しつつも、明確に断る内容で」と指定すると、適切なトーンで生成してくれる。
    </p>
  </div>
  <div class="split-image">
    <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200" alt="Decline" />
  </div>
</section>

<section class="quote-section">
  <div class="quote-bg-text">PROMPT</div>
  <div class="quote-inner reveal">
    <div class="quote-mark serif">"</div>
    <p class="quote-text serif">
      プロンプトは具体的な条件を指定するほど精度が上がる。「良い感じに」ではなく、「3つのポイントに絞って」「200文字以内で」と数字で指定する。
    </p>
    <div class="quote-author">— プロンプトの鉄則</div>
  </div>
</section>

<section class="split-section">
  <div class="split-image">
    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200" alt="Planning" />
  </div>
  <div class="split-content">
    <div class="split-number serif reveal">03</div>
    <h2 class="split-title serif reveal">企画書の構成案作成</h2>
    <p class="split-text reveal">
      企画書や提案書の「たたき台」を作るのにAIは最適。<br/><br/>
      <strong>プロンプト例：</strong><br/>
      「テーマ」「目的」「ターゲット」「予算感」を指定して、構成案を依頼する。<br/><br/>
      俺もA-Sketchの新人発掘企画書は、まずAIにたたき台を作ってもらってる。
    </p>
  </div>
</section>

<!-- 会話セクション：企画書プロンプト -->
<div class="chat-container">

<div class="aibou-message">
  <div class="aibou-avatar">🤖</div>
  <div class="aibou-content">
    <div class="aibou-name">あいぼー</div>
    <div class="aibou-bubble">
      競合分析とかもできるん？
    </div>
  </div>
</div>

<div class="michi-message">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" class="michi-avatar" />
  <div class="michi-content">
    <div class="michi-name">道ゐちゃん</div>
    <div class="michi-bubble">
      できる！<span class="marker-yellow">競合分析のプロンプト</span>はこんな感じ：<br/><br/>
      <code>{業界}における主要な競合3社について、<br/>
      以下の観点で比較分析してください。<br/>
      - 強み・弱み<br/>
      - 価格帯<br/>
      - ターゲット層<br/>
      - 差別化ポイント</code><br/><br/>
      <span class="big marker-pink">ただし、最新情報は自分で確認</span>する必要がある。AIの知識には期限があるから。
    </div>
  </div>
</div>

</div>

<section class="split-section">
  <div class="split-content">
    <div class="split-number serif reveal">04</div>
    <h2 class="split-title serif reveal">文章校正のプロンプト</h2>
    <p class="split-text reveal">
      既存の文章をブラッシュアップするのもAIの得意分野。<br/><br/>
      <strong>プロンプト例：</strong><br/>
      「誤字脱字」「文法の間違い」「より適切な表現への修正」「冗長な部分の削除」をチェック項目として指定する。
    </p>
  </div>
  <div class="split-image">
    <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200" alt="Writing" />
  </div>
</section>

<section class="timeline-section">
  <div class="timeline-header reveal">
    <h2 class="serif">その他の便利プロンプト</h2>
  </div>
  <div class="timeline">
    <div class="timeline-item reveal">
      <div class="timeline-year serif">📝</div>
      <div class="timeline-content">
        <h4 class="serif">要約プロンプト</h4>
        <p>「以下の文章を{文字数}文字以内で要約してください。重要なポイントを箇条書きで3つ挙げてください。」</p>
      </div>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year serif">🎯</div>
      <div class="timeline-content">
        <h4 class="serif">アイデア出しプロンプト</h4>
        <p>「{テーマ}について、斬新なアイデアを10個出してください。実現可能性は問いません。」</p>
      </div>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year serif">📊</div>
      <div class="timeline-content">
        <h4 class="serif">プレゼン骨子プロンプト</h4>
        <p>「以下の内容で15分間のプレゼン資料の骨子を作成してください。【テーマ】【聴衆】【ゴール】」</p>
      </div>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year serif">💬</div>
      <div class="timeline-content">
        <h4 class="serif">SNS投稿プロンプト</h4>
        <p>「{内容}についてTwitter用の投稿を作成してください。280文字以内で、ハッシュタグ3つ付けて。」</p>
      </div>
    </div>
  </div>
</section>

<article class="article-container">
  <div class="article-inner">

<div class="tips-box">
  <h3 class="serif">プロンプト作成 3つのコツ</h3>
  <ul class="tips-list">
    <li>
      <span class="tips-number">01</span>
      <span>具体的な条件を指定する。「良い感じに」ではなく「3つのポイントに絞って」。</span>
    </li>
    <li>
      <span class="tips-number">02</span>
      <span>数字を使う。「短く」ではなく「200文字以内で」。</span>
    </li>
    <li>
      <span class="tips-number">03</span>
      <span>役割を与える。「あなたはプロのライターです」と前置きすると精度が上がる。</span>
    </li>
  </ul>
</div>

## まとめ

プロンプトは**AIへの指示書**。

具体的に書くほど、良い回答が返ってくる。このページのプロンプトをコピペして、{  }の中を自分用に書き換えて使ってみて。

機密情報を含む文章をAIに入力する際は、会社のセキュリティポリシーを確認することを忘れずに！

  </div>
</article>

---

## 関連記事

- **AI文章術** → [AIと一緒に文章を書く技術](/tech/ai-writing-tips)
- **AI壁打ち** → [AIは壁打ち相手として最強だった](/tech/ai-as-sparring-partner)
