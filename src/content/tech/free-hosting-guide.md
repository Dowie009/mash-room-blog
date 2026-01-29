---
title: サーバーって結局、課金？無料枠でここまでできる！
date: 2026-01-28
category: ai-tips
thumbnail: /images/Blog_00.png
description: 初心者が気になる「結局お金かかるの？」に答える。無料でWebサイトを公開する方法を具体的に解説。
tags: ['Vercel', 'GitHub', '無料ホスティング', '初心者向け']
draft: false
defaultPreset: 5
learnings:
  - 無料で使えるサービスの全体像
  - Vercel + GitHubの具体的な使い方
  - 無料枠の限界と課金タイミング
---

<h2 id="learning-1">無料で使えるサービスの全体像</h2>

<div class="aniki-quote">

「サーバー代、月いくら？」

この質問、めちゃくちゃ聞かれる。

<span class="shout-xl">答えは「0円でもいける」</span>

</div>

### その前に...「コードを書く」って何？

<div class="tip-box">

🤔 **みんなが知ってる「投稿」との違い**

<div class="responsive-grid-2">

<div>

✅ **これは知ってる**

WordPress、X、Instagram...
→ 用意された**投稿画面**に書くだけ

<span class="whisper">📝 原稿用紙が用意されてる状態</span>

</div>

<div>

🔧 **コードを書くとは**

その「投稿画面」自体を作る
→ **システムそのもの**を作る

<span class="whisper">📐 原稿用紙のデザインから作る状態</span>

</div>

</div>

<span class="marker-yellow">**なぜコードを書くの？**</span> → デザインも機能も、全部自分で決められるから！

</div>

<div class="conclusion-box">
<p class="conclusion-title">📚 本の出版に例えると、こんな違い</p>

<div class="responsive-grid-2">

<div class="step">
  <span class="step-number">📄</span>
  <span class="step-content"><strong>WordPress など</strong><br>出版社の<strong>原稿用紙</strong>に書く（テンプレートを使う）</span>
</div>

<div class="step">
  <span class="step-number">✏️</span>
  <span class="step-content"><strong>コードを書く</strong><br><strong>原稿用紙のデザイン</strong>から作る（完全オリジナル）</span>
</div>

</div>

💡 このブログで紹介するのは「コードを書く」方法。
自由度は高いけど、<span class="marker-yellow">**無料でできる**</span>のが最大のメリット！

</div>

<div class="conclusion-box">
<p class="conclusion-title">📚 じゃあ、作ったコードはどうやって公開するの？</p>

<div class="responsive-flow">

<div class="step" style="flex: 1; min-width: 100px;">
  <span class="step-number">🏠</span>
  <span class="step-content"><strong>自分のPC</strong><br><span class="whisper">書斎（原稿を書く）</span></span>
</div>

<span class="flow-arrow" style="font-size: 2rem; color: #94a3b8;">→</span>

<div class="step" style="flex: 1; min-width: 100px;">
  <span class="step-number">📚</span>
  <span class="step-content"><strong>GitHub</strong><br><span class="whisper">出版社（原稿を管理）</span></span>
</div>

<span class="flow-arrow" style="font-size: 2rem; color: #94a3b8;">→</span>

<div class="step" style="flex: 1; min-width: 100px;">
  <span class="step-number">🏪</span>
  <span class="step-content"><strong>Vercel</strong><br><span class="whisper">本屋（読者に届ける）</span></span>
</div>

</div>

**書斎**で原稿（コード）を書いて、**出版社**に預けて、**本屋**で読者に届ける。
この流れが、Webサイト公開の仕組み！

</div>

### 実際に僕が無料で使ってるもの

<div class="responsive-grid-4">

<div class="step" style="flex-direction: column; text-align: center;">
  <span class="step-number">▲</span>
  <span class="step-content"><strong>Vercel</strong><br><span class="whisper">サイト公開（本屋）</span><br><span class="marker-yellow">月100GBまで無料</span></span>
</div>

<div class="step" style="flex-direction: column; text-align: center;">
  <span class="step-number">🐙</span>
  <span class="step-content"><strong>GitHub</strong><br><span class="whisper">コード管理（出版社）</span><br><span class="marker-yellow">無制限</span></span>
</div>

<div class="step" style="flex-direction: column; text-align: center;">
  <span class="step-number">⚡</span>
  <span class="step-content"><strong>Supabase</strong><br><span class="whisper">データベース（ロッカー）</span><br><span class="marker-yellow">500MBまで無料</span></span>
</div>

<div class="step" style="flex-direction: column; text-align: center;">
  <span class="step-number">☁️</span>
  <span class="step-content"><strong>Cloudflare</strong><br><span class="whisper">ドメイン管理（住所）</span><br><span class="marker-yellow">基本無料</span></span>
</div>

</div>

<div class="success-box">

💡 **ポイント**

個人ブログや小規模サイトなら、無料枠で十分すぎる。
僕はこの4つを組み合わせて、<span class="marker-yellow">**ほぼ0円**</span>でサイトを運営してる。

</div>

---

<h2 id="learning-2">Vercel + GitHubの具体的な使い方</h2>

<div class="tip-box">

📚 さっきの例えで言うと...**「書斎→出版社→本屋」の具体的なやり方**

</div>

<div class="step-flow">

<div class="step-item">
<div class="step-number" style="background: linear-gradient(135deg, #fef3c7, #fde68a); border: 3px solid #f59e0b; color: #92400e;">1</div>
<div class="step-content">

### 🏠 書斎で原稿を書く（コードを書く）

自分のPCで、サイトのファイルを作成する。

```
自分のPC（書斎）でコードを書く
```

<span class="whisper">📸 ここにスクショ：VS Codeやテキストエディタでコードを書いてる画面</span>

</div>
</div>

<div class="step-item">
<div class="step-number" style="background: linear-gradient(135deg, #fce7f3, #fbcfe8); border: 3px solid #ec4899; color: #9d174d;">2</div>
<div class="step-content">

### 📚 出版社に原稿を渡す（GitHubにPush）

作ったファイルをGitHubにアップロード。

**やること：**

<ul class="checklist">
  <li>✅ <a href="https://github.com" target="_blank">github.com</a> でアカウント作成（無料）</li>
  <li>✅ 「New Repository」で新しい保管場所を作る</li>
  <li>✅ 自分のPCからファイルをアップロード</li>
</ul>

<span class="whisper">📸 ここにスクショ：GitHubのリポジトリ作成画面</span>

</div>
</div>

<div class="step-item">
<div class="step-number" style="background: linear-gradient(135deg, #d1fae5, #a7f3d0); border: 3px solid #10b981; color: #065f46;">3</div>
<div class="step-content">

### 🏪 本屋に並べる（Vercelで公開）

VercelとGitHubを連携すると、自動で公開される。

**やること：**

<ul class="checklist">
  <li>✅ <a href="https://vercel.com" target="_blank">vercel.com</a> にアクセス</li>
  <li>✅ 「Continue with GitHub」をクリック</li>
  <li>✅ さっき作ったリポジトリを選択</li>
  <li>✅ 「Deploy」ボタンを押す → <strong>完了！</strong></li>
</ul>

<span class="whisper">📸 ここにスクショ：Vercelのデプロイ完了画面</span>

</div>
</div>

</div>

<div class="success-box">

🎉 **これで完了！**

サーバーの設定とか一切なし。
<span class="marker-yellow">**次からはGitHubにPushするだけで自動更新される。**</span>

`コード修正 → GitHub → 数秒で反映 ✨`

</div>

---

<h2 id="learning-3">無料枠の限界と課金タイミング</h2>

<div class="responsive-grid-2">

<div class="success-box">

### ✅ 無料で困らない

<ul class="checklist">
  <li>✅ 個人ブログ</li>
  <li>✅ ポートフォリオサイト</li>
  <li>✅ 小規模なWebアプリ</li>
  <li>✅ 月間10万PV以下</li>
</ul>

<span class="shout">→ 99%の人はここで十分！</span>

</div>

<div class="warning-box">

### 💰 課金を検討

<ul class="checklist">
  <li>❌ アクセス爆増（月100GB超え）</li>
  <li>❌ チーム開発（3人以上）</li>
  <li>❌ 商用利用（収益が出てきたら）</li>
</ul>

<span class="tsukkomi">嬉しい悲鳴が出てから考えよう</span>

</div>

</div>

<div class="conclusion-box">
<p class="conclusion-title">僕の場合</p>

<span class="shout-xl">2年間、ほぼ0円</span>

<span class="whisper">かかったのはドメイン代（年1,500円くらい）だけ。</span>

</div>

---

## まとめ

<div class="step">
  <span class="step-number">✅</span>
  <span class="step-content"><strong>無料で始められる</strong>（Vercel + GitHub）</span>
</div>

<div class="step">
  <span class="step-number">🚀</span>
  <span class="step-content"><strong>自動デプロイ</strong>で楽ちん</span>
</div>

<div class="step">
  <span class="step-number">💰</span>
  <span class="step-content"><strong>課金は後から</strong>でOK</span>
</div>

<div class="gentle-close">

まずは無料で始めて、必要になったら課金する。

それがスマートなやり方。

</div>

---

この記事は MASHROOM STUDIO の開発メモです。
