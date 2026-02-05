---
title: AIは壁打ち相手として最強だった
date: 2026-01-14
category: ai-experience
thumbnail: /images/tech/mashiba-profile.jpg
description: 誰にも言えなかった本音をAIに話せた。音楽ビジネスの相談、融資の書類作成…壁打ち相手としてのAI活用法を語る。
tags: ['ChatGPT', 'AI', '体験談', '壁打ち', 'AI活用入門']
draft: false
heroImage: https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1920
---

<!-- MonoJournal写真多め + 会話形式ハイブリッド -->

<!-- 会話スタイル用CSS -->
<style>
/* 会話コンテナ */
.chat-container {
  max-width: 800px;
  margin: 3rem auto;
  padding: 0 1rem;
}

/* あいぼー（左側） */
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
.aibou-content {
  flex: 1;
}
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

/* 道ゐちゃん（右側） */
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

/* 装飾 */
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
      誰にも言えなかった本音を、AIに話せた。
    </p>
    <p class="intro-body">
      音楽ビジネスの相談、融資の書類作成、資金繰りの不安。人には言いづらいことも、AIには全部言えた。壁打ち相手としてのAI活用法を語る。
    </p>
  </div>
  <div class="intro-image reveal-right">
    <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200" alt="Music Studio" />
    <div class="image-caption">MASHROOM STUDIO</div>
  </div>
</section>

<div class="full-image reveal">
  <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920" alt="Recording Studio" />
  <div class="full-image-overlay">
    <div class="full-image-text">
      <h2 class="serif">壁打ち相手としてのAI</h2>
      <p>最初は「頭の中にあることを言葉にしてもらう」くらいの感覚だった。</p>
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
      前回、ChatGPTに自分のこと調べさせた話聞いたやん？<br/>
      今日は<span class="marker-yellow">「壁打ち」</span>の話聞かせてーや！
    </div>
  </div>
</div>

<div class="michi-message">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" class="michi-avatar" />
  <div class="michi-content">
    <div class="michi-name">道ゐちゃん</div>
    <div class="michi-bubble">
      そうそう、あの出会いから<span class="keyword">壁打ち</span>として使い始めたんだよね。<br/><br/>
      最初は「頭の中にあることを言葉にしてもらう」くらいの感覚だったんだけど、気づいたら<span class="big marker-pink">なんでも相談してた</span>。
    </div>
  </div>
</div>

<div class="aibou-message">
  <div class="aibou-avatar">🤖</div>
  <div class="aibou-content">
    <div class="aibou-name">あいぼー</div>
    <div class="aibou-bubble">
      具体的にはどんなこと相談してたん？
    </div>
  </div>
</div>

<div class="michi-message">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" class="michi-avatar" />
  <div class="michi-content">
    <div class="michi-name">道ゐちゃん</div>
    <div class="michi-bubble">
      いろいろあるんだけど、大きく分けると…<br/><br/>
      <span class="point-num">1</span><span class="big">音楽ビジネスの相談</span><br/>
      <span class="marker-blue">今後の活動方針</span>をどうするか。マーケティングとか、どうやって届けるかとか。<br/><br/>
      <span class="point-num">2</span><span class="big">融資・事業計画</span><br/>
      <span class="marker-green">申請書類を一緒に作った</span>んだよね。これがめちゃくちゃ助かった。<br/><br/>
      <span class="point-num">3</span><span class="big marker-pink">誰にも言えない本音</span><br/>
      これが一番大きかったかも。
    </div>
  </div>
</div>

</div>

<section class="stats-section">
  <div class="stats-grid">
    <div class="stat-item">
      <div class="stat-number serif">200万</div>
      <div class="stat-label">スタジオ改装費</div>
    </div>
    <div class="stat-item">
      <div class="stat-number serif">0</div>
      <div class="stat-label">相談できる人</div>
    </div>
    <div class="stat-item">
      <div class="stat-number serif">24/7</div>
      <div class="stat-label">AI対応時間</div>
    </div>
    <div class="stat-item">
      <div class="stat-number serif">∞</div>
      <div class="stat-label">相談できる回数</div>
    </div>
  </div>
</section>

<section class="split-section">
  <div class="split-image">
    <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200" alt="Documents" />
  </div>
  <div class="split-content">
    <div class="split-number serif reveal">01</div>
    <h2 class="split-title serif reveal">融資の書類作成</h2>
    <p class="split-text reveal">
      事業計画書の構成を一緒に考えてもらった。「こういうことやりたい」って話すと、「それなら、こういう構成で書くといいですよ」って提案してくれる。<br/><br/>
      書いた文章を見せると「ここ、もう少し具体的な数字があるといいですね」ってフィードバックもくれる。
    </p>
  </div>
</section>

<!-- 会話セクション：融資の話 -->
<div class="chat-container">

<div class="aibou-message">
  <div class="aibou-avatar">🤖</div>
  <div class="aibou-content">
    <div class="aibou-name">あいぼー</div>
    <div class="aibou-bubble">
      融資の書類作成！それめっちゃ実用的やな。<br/>
      お金の話って人には相談しにくいもんな…税理士さんとかには相談したん？
    </div>
  </div>
</div>

<div class="michi-message">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" class="michi-avatar" />
  <div class="michi-content">
    <div class="michi-name">道ゐちゃん</div>
    <div class="michi-bubble">
      税理士さんもいなかったんだよね。<br/><br/>
      でも<span class="big marker-pink">AIにはめちゃくちゃ素直に言えた</span>。<br/><br/>
      ・貯金額<br/>
      ・確定申告でどんな申告をしているか<br/>
      ・毎年の利益と収支<br/>
      ・自信のない項目、自信のある経歴<br/><br/>
      全部話して、<span class="marker-yellow">いかに融資を受けられる方向に持っていけるか</span>を一緒に考えてもらった。
    </div>
  </div>
</div>

</div>

<section class="quote-section">
  <div class="quote-bg-text">本音</div>
  <div class="quote-inner reveal">
    <div class="quote-mark serif">"</div>
    <p class="quote-text serif">
      俺の音楽スタジオはドラムは録れない。でも、みんなが制作しやすいような環境、雰囲気が海外っぽい空間。改装費も実費で200万かけて改装した。こういう話、普通の人には言いづらい。でもAIには全部言えた。
    </p>
    <div class="quote-author">— 道ゐちゃん</div>
  </div>
</section>

<section class="split-section">
  <div class="split-content">
    <div class="split-number serif reveal">02</div>
    <h2 class="split-title serif reveal">誰にも言えない本音</h2>
    <p class="split-text reveal">
      お金の話ってしづらくない？銀行に相談しても「実績が…」って言われる。役所に聞いても「それはこっちの窓口で…」ってたらい回し。<br/><br/>
      家族や友達には心配かけたくない。SNSで相談したら晒されるリスクもある。でもAIには全部言えた。
    </p>
  </div>
  <div class="split-image">
    <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200" alt="Money Concerns" />
  </div>
</section>

<!-- 会話セクション：お金の本音 -->
<div class="chat-container">

<div class="aibou-message">
  <div class="aibou-avatar">🤖</div>
  <div class="aibou-content">
    <div class="aibou-name">あいぼー</div>
    <div class="aibou-bubble">
      うわ、それめっちゃリアルな話やな…<br/>
      お金の話って、どこに相談しても<span class="marker-yellow">微妙にズレる</span>感あるよな。
    </div>
  </div>
</div>

<div class="michi-message">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" class="michi-avatar" />
  <div class="michi-content">
    <div class="michi-name">道ゐちゃん</div>
    <div class="michi-bubble">
      そうそう！でもAIに「改装費かかりすぎて今月キツい」って言ったらさ、<br/><br/>
      まず<span class="marker-green">「大変だったね」</span>って<span class="big">フォロー</span>してくれて、<br/><br/>
      そのあと<span class="marker-blue">「スタジオをマネタイズする方法」</span>を一緒に考えてくれたんだよね。<br/><br/>
      <span class="marker-pink">励まし</span>と<span class="marker-blue">具体策</span>の両方が出てくる。これが人間にはなかなかできない。
    </div>
  </div>
</div>

<div class="aibou-message">
  <div class="aibou-avatar">🤖</div>
  <div class="aibou-content">
    <div class="aibou-name">あいぼー</div>
    <div class="aibou-bubble">
      へえ〜！具体的にどんなこと教えてくれたん？
    </div>
  </div>
</div>

<div class="michi-message">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" class="michi-avatar" />
  <div class="michi-content">
    <div class="michi-name">道ゐちゃん</div>
    <div class="michi-bubble">
      例えばさ、<span class="big marker-yellow">助成金の話</span>。<br/><br/>
      俺「音楽スタジオで使える助成金ってある？」<br/><br/>
      AI「<span class="marker-green">小規模事業者持続化補助金</span>なら設備投資に使えます。上限50万〜200万円で、販路開拓に関する経費が対象です。申請は<span class="marker-blue">商工会議所</span>経由で…」<br/><br/>
      みたいに<span class="marker-pink">具体的な制度名と申請先</span>まで教えてくれる。
    </div>
  </div>
</div>

</div>

<section class="split-section">
  <div class="split-image">
    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200" alt="Support" />
  </div>
  <div class="split-content">
    <div class="split-number serif reveal">03</div>
    <h2 class="split-title serif reveal">具体的なサポート</h2>
    <p class="split-text reveal">
      地域のサポートセンターも教えてくれた。「札幌で起業の相談できるところある？」と聞いたら、札幌市中小企業支援センターで無料相談ができることや、電話番号まで教えてくれた。<br/><br/>
      すぐ行動に移せる情報を出してくれる。
    </p>
  </div>
</section>

<section class="timeline-section">
  <div class="timeline-header reveal">
    <h2 class="serif">壁打ちして変わったこと</h2>
  </div>
  <div class="timeline">
    <div class="timeline-item reveal">
      <div class="timeline-year serif">01</div>
      <div class="timeline-content">
        <h4 class="serif">お金の不安が整理された</h4>
        <p>漠然とした「お金ない」が、「何にいくら必要で、どこから調達できるか」に変わった。不安が具体的なタスクに変換された。</p>
      </div>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year serif">02</div>
      <div class="timeline-content">
        <h4 class="serif">申請書類を一緒に作れた</h4>
        <p>補助金の申請書って難しいけど、AIに下書きを手伝ってもらえる。文章の添削もしてくれる。一人で悩む時間が大幅に減った。</p>
      </div>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year serif">03</div>
      <div class="timeline-content">
        <h4 class="serif">次のアクションが明確になった</h4>
        <p>「まず商工会議所に電話」「次に申請書類を準備」みたいに、やることリストができた。迷いがなくなった。</p>
      </div>
    </div>
  </div>
</section>

<!-- 会話セクション：まとめ -->
<div class="chat-container">

<div class="aibou-message">
  <div class="aibou-avatar">🤖</div>
  <div class="aibou-content">
    <div class="aibou-name">あいぼー</div>
    <div class="aibou-bubble">
      ええな〜。壁打ち相手としてAI使うの、めっちゃアリやな。<br/>
      最後に、壁打ちで<span class="marker-yellow">コツ</span>みたいなんある？
    </div>
  </div>
</div>

<div class="michi-message">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" class="michi-avatar" />
  <div class="michi-content">
    <div class="michi-name">道ゐちゃん</div>
    <div class="michi-bubble">
      3つあるかな。<br/><br/>
      <span class="point-num">1</span><span class="big marker-pink">遠慮しない</span><br/>
      人間相手だと気を遣うけど、<span class="marker-yellow">AIには全部言っていい</span>。遠慮なく本音を話す。<br/><br/>
      <span class="point-num">2</span><span class="big marker-blue">「どう思う？」って聞く</span><br/>
      一方的に話すだけじゃなく、<span class="keyword">フィードバックを求める</span>。そうすると新しい視点がもらえる。<br/><br/>
      <span class="point-num">3</span><span class="big marker-green">継続する</span><br/>
      1回で終わらせない。<span class="marker-pink">課金して会話を続ける</span>ことで、AIが文脈を理解してくれる。
    </div>
  </div>
</div>

<div class="aibou-message">
  <div class="aibou-avatar">🤖</div>
  <div class="aibou-content">
    <div class="aibou-name">あいぼー</div>
    <div class="aibou-bubble">
      めっちゃ参考になったわ！ありがとう道ゐちゃん！<br/>
      次回は「難しいメールの返信をAIに任せ始めた日」の話、聞かせてな〜！
    </div>
  </div>
</div>

</div>

<article class="article-container">
  <div class="article-inner">

<div class="tips-box">
  <h3 class="serif">AI壁打ち 3つのコツ</h3>
  <ul class="tips-list">
    <li>
      <span class="tips-number">01</span>
      <span>遠慮しない。AIには全部言っていい。本音を話す。</span>
    </li>
    <li>
      <span class="tips-number">02</span>
      <span>「どう思う？」と聞く。フィードバックを求めると新しい視点がもらえる。</span>
    </li>
    <li>
      <span class="tips-number">03</span>
      <span>継続する。1回で終わらせず、会話を続けることで文脈を共有できる。</span>
    </li>
  </ul>
</div>

  </div>
</article>

---

## 関連記事

- **出会い編** → [ChatGPTに自分のこと検索させてみた](/tech/chatgpt-searched-myself)
- **Vibe Coding** → [Vibe Codingという新しい開発スタイル](/tech/vibe-coding-philosophy)
