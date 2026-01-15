---
title: AIは壁打ち相手として最強だった
date: 2026-01-14
category: ai-journey
thumbnail: /images/tech/mashiba-profile.jpg
description: 誰にも言えなかった本音をAIに話せた。音楽ビジネスの相談、融資の書類作成…壁打ち相手としてのAI活用法を語る。
tags: ['ChatGPT', 'AI', '体験談', '壁打ち', 'AI活用入門']
draft: false
learningLevel: 1
topic: ai-journey
---

<!-- 会話形式 Bパターン：関西弁AI君「あいぼー」との対話 -->

<!-- セリフ装飾用CSS -->
<style>
/* レイアウト側のシェアカードを非表示（この記事専用のスタイルスイッチャーと干渉するため） */
.article-sidebar,
.share-card,
.sidebar-card {
  display: none !important;
  pointer-events: none !important;
  visibility: hidden !important;
}

/* スタイルスイッチャーを常に最前面に + スクロール表示トランジション */
#style-switcher {
  z-index: 99999 !important;
  pointer-events: auto !important;
  isolation: isolate;
  transition: opacity 0.3s ease;
}
#style-switcher * {
  pointer-events: auto !important;
}
#style-switcher button {
  position: relative;
  z-index: 1;
  pointer-events: auto !important;
  cursor: pointer !important;
}

/* シェアカードも最前面に + スクロール表示トランジション */
#share-card {
  z-index: 99998 !important;
  pointer-events: auto !important;
  isolation: isolate;
  transition: opacity 0.3s ease;
}
#share-card * {
  pointer-events: auto !important;
}
#share-card a, #share-card button {
  pointer-events: auto !important;
  cursor: pointer !important;
}

/* 会話コンテナの最大幅（広いレイアウトでも読みやすく） */
#article-container {
  max-width: 800px;
  margin: 0 auto;
}

/* 大きい文字 */
.big { font-size: 1.2em; font-weight: bold; }
/* マーカー（ダークモード対応：線の透明度を下げて文字を見やすく） */
.marker-yellow { background: linear-gradient(transparent 60%, rgba(255,245,157,0.4) 60%); padding: 0 2px; color: inherit; }
.marker-pink { background: linear-gradient(transparent 60%, rgba(248,187,217,0.4) 60%); padding: 0 2px; color: inherit; }
.marker-blue { background: linear-gradient(transparent 60%, rgba(187,222,251,0.4) 60%); padding: 0 2px; color: inherit; }
.marker-green { background: linear-gradient(transparent 60%, rgba(200,230,201,0.4) 60%); padding: 0 2px; color: inherit; }
/* ネオンテキスト（ダークモード用・ライトモードではJSで上書き） */
.neon-cyan { color: #00ffff; text-shadow: 0 0 8px #00ffff; }
.neon-pink { color: #ff6b9d; text-shadow: 0 0 8px #ff6b9d; }
.neon-yellow { color: #ffff00; text-shadow: 0 0 8px #ffff00; }
/* ライトモード用ネオン代替 */
.neon-cyan.light-mode { color: #0088aa; text-shadow: none; font-weight: bold; }
.neon-pink.light-mode { color: #d44a7a; text-shadow: none; font-weight: bold; }
.neon-yellow.light-mode { color: #cc9900; text-shadow: none; font-weight: bold; }
/* キーワード */
.keyword { display: inline-block; background: rgba(0,255,255,0.15); border: 1px solid rgba(0,255,255,0.3); border-radius: 4px; padding: 0 6px; font-weight: 500; }
/* 引用風 */
.quote-box { border-left: 3px solid #00bfff; padding-left: 12px; margin: 8px 0; font-style: italic; opacity: 0.9; }
/* ポイント番号 */
.point-num { display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: linear-gradient(135deg, #00bfff, #0088cc); color: #fff; border-radius: 50%; font-size: 0.8em; font-weight: bold; margin-right: 8px; }

/* ========== スクロール連動アニメーション（全プリセット共通） ========== */

/* スクロール出現アニメーション */
@keyframes popIn {
  0% { opacity: 0; transform: scale(0.5) translateY(30px); }
  60% { transform: scale(1.1) translateY(-5px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}
@keyframes slideInLeft {
  0% { opacity: 0; transform: translateX(-60px); }
  100% { opacity: 1; transform: translateX(0); }
}
@keyframes slideInRight {
  0% { opacity: 0; transform: translateX(60px); }
  100% { opacity: 1; transform: translateX(0); }
}
@keyframes slideInUp {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* セリフ初期状態（非表示） */
.scroll-bubble {
  opacity: 0;
}

/* 出現アニメーション発動 */
.scroll-bubble.anim-pop { animation: popIn 0.5s ease-out forwards; }
.scroll-bubble.anim-left { animation: slideInLeft 0.4s ease-out forwards; }
.scroll-bubble.anim-right { animation: slideInRight 0.4s ease-out forwards; }
.scroll-bubble.anim-up { animation: slideInUp 0.4s ease-out forwards; }

/* ========== プリセット3専用：動画背景 ========== */
#chaos-video-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none !important;
}
#chaos-video-bg.active {
  opacity: 0.6;
  pointer-events: none !important;
}
/* 動画の上にオーバーレイ */
.chaos-mode .post-page {
  background: rgba(0,0,0,0.4) !important;
}

/* カオスモード：ヘッダー部分を見やすく（背景追加で不透明に） */
.chaos-mode .hero {
  position: relative;
  z-index: 10;
}
.chaos-mode .hero-content {
  position: relative;
  z-index: 11;
  background: rgba(0, 0, 0, 0.9);
  padding: 1.5rem;
  border-radius: 16px;
}
.chaos-mode .hero-title {
  color: #fff !important;
  text-shadow: 0 2px 10px rgba(0,0,0,0.9) !important;
}
.chaos-mode .hero-description {
  color: #ccc !important;
}
.chaos-mode .tag {
  background: rgba(0,255,255,0.3) !important;
  color: #00ffff !important;
  border-color: #00ffff !important;
}
.chaos-mode .category-badge {
  color: #00ffff !important;
}
.chaos-mode .meta-info,
.chaos-mode .meta-info time,
.chaos-mode .meta-info .read-time {
  color: #aaa !important;
}
.chaos-mode .breadcrumb-link {
  color: #00ffff !important;
}
.chaos-mode .breadcrumb-current {
  color: #888 !important;
}
.chaos-mode .character-intro {
  position: relative;
  z-index: 10;
}
.chaos-mode .character-intro::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  border-radius: 16px;
  z-index: -1;
}
.chaos-mode .character-intro-inner {
  position: relative;
  z-index: 11;
  background: transparent !important;
}
.chaos-mode .character-name {
  color: inherit !important;
}
.chaos-mode .character-desc {
  color: #888 !important;
}

/* ぴょんぴょんアニメーション */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.bounce-animation {
  animation: bounce 0.6s ease-in-out infinite;
}

/* カオスモード基本スタイル */
.chaos-mode .aibou-bubble {
  border-width: 2px !important;
  border-color: #ff6b9d !important;
  box-shadow: 0 0 20px rgba(255,107,157,0.3);
}
.chaos-mode .michi-bubble {
  border-width: 2px !important;
  border-color: #00ffff !important;
  box-shadow: 0 0 20px rgba(0,255,255,0.3);
}
</style>

<!-- プリセット3専用：動画背景 -->
<video id="chaos-video-bg" loop muted playsinline>
  <source src="/images/カオス背景.mp4" type="video/mp4">
</video>

<!-- スタイルスイッチャー -->
<div id="style-switcher" style="position: fixed; top: 60px; right: 20px; z-index: 9999; background: rgba(0,0,0,0.95); border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; padding: 1rem; font-size: 0.75rem; max-width: 260px; max-height: 80vh; overflow-y: auto; pointer-events: auto !important; isolation: isolate;">
  <div style="color: #fff; font-weight: bold; margin-bottom: 0.75rem; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 0.5rem;">🎨 スタイル調整</div>

  <!-- おすすめプリセット（暗→明 + 裏モード） -->
  <div style="margin-bottom: 1rem;">
    <div style="color: #00ffff; margin-bottom: 0.5rem; font-weight: bold;">✨ おすすめプリセット</div>
    <div style="display: flex; gap: 0.25rem; flex-wrap: wrap; position: relative; z-index: 10;">
      <button type="button" onclick="applyRecommendedPreset(1)" id="rec-1" style="flex: 1; padding: 0.5rem 0.2rem; border-radius: 6px; border: 2px solid #2d1b4e; background: linear-gradient(135deg, #1a1a2e, #2d1b4e); color: #9b59b6; cursor: pointer; font-size: 0.65rem; text-shadow: 0 0 5px #9b59b6; position: relative; z-index: 10; pointer-events: auto;" title="ギャラクシー">1</button>
      <button type="button" onclick="applyRecommendedPreset(2)" id="rec-2" style="flex: 1; padding: 0.5rem 0.2rem; border-radius: 6px; border: 2px solid #222; background: linear-gradient(135deg, #0a0a0f, #151518); color: #888; cursor: pointer; font-size: 0.65rem; position: relative; z-index: 10; pointer-events: auto;" title="ミッドナイト">2</button>
      <button type="button" onclick="applyRecommendedPreset(3)" id="rec-3" style="flex: 1; padding: 0.5rem 0.2rem; border-radius: 6px; border: 2px solid #555; background: linear-gradient(135deg, #2a2a2a, #3a3a3a); color: #bbb; cursor: pointer; font-size: 0.65rem; position: relative; z-index: 10; pointer-events: auto;" title="グレー">3</button>
      <button type="button" onclick="applyRecommendedPreset(4)" id="rec-4" style="flex: 1; padding: 0.5rem 0.2rem; border-radius: 6px; border: 2px solid #e0e0e0; background: linear-gradient(145deg, #ffffff, #f8f8f8); color: #333; cursor: pointer; font-size: 0.65rem; position: relative; z-index: 10; pointer-events: auto;" title="ライト">4</button>
      <button type="button" onclick="applyRecommendedPreset(5)" id="rec-5" style="flex: 1; padding: 0.5rem 0.2rem; border-radius: 6px; border: 2px solid #ff00ff; background: linear-gradient(135deg, #1a0020, #2d0040); color: #ff00ff; cursor: pointer; font-size: 0.65rem; text-shadow: 0 0 5px #ff00ff; position: relative; z-index: 10; pointer-events: auto;" title="裏モード">裏</button>
    </div>
    <div style="display: flex; justify-content: space-between; color: #666; font-size: 0.6rem; margin-top: 0.25rem;">
      <span>← 暗</span>
      <span>明 →</span>
    </div>
  </div>

  <!-- フォント切り替え -->
  <div style="margin-bottom: 1rem;">
    <div style="color: #888; margin-bottom: 0.5rem;">🔤 フォント</div>
    <div style="display: flex; gap: 0.25rem; flex-wrap: wrap;">
      <button onclick="setFont('noto')" id="font-noto" style="flex: 1; min-width: 45px; padding: 0.4rem 0.2rem; border-radius: 6px; border: 1px solid #555; background: rgba(255,255,255,0.05); color: #aaa; cursor: pointer; font-size: 0.6rem; font-family: 'Noto Sans JP', sans-serif;">ゴシック</button>
      <button onclick="setFont('maru')" id="font-maru" style="flex: 1; min-width: 45px; padding: 0.4rem 0.2rem; border-radius: 6px; border: 1px solid #555; background: rgba(255,255,255,0.05); color: #aaa; cursor: pointer; font-size: 0.6rem; font-family: 'Zen Maru Gothic', sans-serif;">まるご</button>
      <button onclick="setFont('mincho')" id="font-mincho" style="flex: 1; min-width: 45px; padding: 0.4rem 0.2rem; border-radius: 6px; border: 1px solid #555; background: rgba(255,255,255,0.05); color: #aaa; cursor: pointer; font-size: 0.6rem; font-family: 'Zen Old Mincho', serif;">明朝</button>
    </div>
    <div style="display: flex; gap: 0.25rem; flex-wrap: wrap; margin-top: 0.25rem;">
      <button onclick="setFont('klee')" id="font-klee" style="flex: 1; min-width: 45px; padding: 0.4rem 0.2rem; border-radius: 6px; border: 1px solid #555; background: rgba(255,255,255,0.05); color: #aaa; cursor: pointer; font-size: 0.6rem; font-family: 'Klee One', cursive;">手書き</button>
      <button onclick="setFont('sawarabi')" id="font-sawarabi" style="flex: 1; min-width: 45px; padding: 0.4rem 0.2rem; border-radius: 6px; border: 1px solid #555; background: rgba(255,255,255,0.05); color: #aaa; cursor: pointer; font-size: 0.6rem; font-family: 'Sawarabi Gothic', sans-serif;">さわらび</button>
    </div>
  </div>

  <!-- ズーム（文字サイズ） -->
  <div style="margin-bottom: 1rem;">
    <div style="color: #888; margin-bottom: 0.5rem;">🔍 ズーム</div>
    <div style="display: flex; gap: 0.25rem; align-items: center;">
      <button onclick="setZoom(-1)" style="width: 32px; height: 32px; border-radius: 6px; border: 1px solid #555; background: rgba(255,255,255,0.05); color: #aaa; cursor: pointer; font-size: 1rem; display: flex; align-items: center; justify-content: center;">−</button>
      <div id="zoom-level" style="flex: 1; text-align: center; color: #aaa; font-size: 0.7rem;">100%</div>
      <button onclick="setZoom(1)" style="width: 32px; height: 32px; border-radius: 6px; border: 1px solid #555; background: rgba(255,255,255,0.05); color: #aaa; cursor: pointer; font-size: 1rem; display: flex; align-items: center; justify-content: center;">+</button>
      <button onclick="setZoom(0)" style="padding: 0.4rem 0.6rem; border-radius: 6px; border: 1px solid #555; background: rgba(255,255,255,0.05); color: #888; cursor: pointer; font-size: 0.6rem;">リセット</button>
    </div>
  </div>

  <!-- 背景ベース -->
  <div style="margin-bottom: 1rem;">
    <div style="color: #888; margin-bottom: 0.5rem;">🌙 背景ベース</div>
    <div style="display: flex; gap: 0.25rem; flex-wrap: wrap;">
      <button onclick="setBaseBg('dark')" id="bg-dark" style="flex: 1; padding: 0.4rem; border-radius: 6px; border: 1px solid #333; background: #0a0a12; color: #888; cursor: pointer; font-size: 0.65rem;">ダーク</button>
      <button onclick="setBaseBg('light')" id="bg-light" style="flex: 1; padding: 0.4rem; border-radius: 6px; border: 1px solid #ddd; background: #f8f8f8; color: #333; cursor: pointer; font-size: 0.65rem;">ライト</button>
    </div>
  </div>

  <!-- 背景グロー -->
  <div style="margin-bottom: 1rem;">
    <div style="color: #888; margin-bottom: 0.5rem;">💫 グロー</div>
    <div style="display: flex; gap: 0.25rem; flex-wrap: wrap;">
      <button onclick="setGlowTheme('cyber')" style="width: 26px; height: 26px; border-radius: 6px; border: 2px solid #555; background: linear-gradient(135deg, #00ffff, #ff00ff); cursor: pointer;" title="サイバー"></button>
      <button onclick="setGlowTheme('sunset')" style="width: 26px; height: 26px; border-radius: 6px; border: 2px solid #555; background: linear-gradient(135deg, #ff6b35, #f7931e); cursor: pointer;" title="サンセット"></button>
      <button onclick="setGlowTheme('aurora')" style="width: 26px; height: 26px; border-radius: 6px; border: 2px solid #555; background: linear-gradient(135deg, #00ff88, #00bfff); cursor: pointer;" title="オーロラ"></button>
      <button onclick="setGlowTheme('sakura')" style="width: 26px; height: 26px; border-radius: 6px; border: 2px solid #555; background: linear-gradient(135deg, #ffb7c5, #ff69b4); cursor: pointer;" title="桜"></button>
      <button onclick="setGlowTheme('galaxy')" style="width: 26px; height: 26px; border-radius: 6px; border: 2px solid #555; background: linear-gradient(135deg, #9b59b6, #3498db); cursor: pointer;" title="ギャラクシー"></button>
      <button onclick="setGlowTheme('none')" style="width: 26px; height: 26px; border-radius: 6px; border: 2px solid #555; background: #333; cursor: pointer; color: #888; font-size: 0.6rem; display: flex; align-items: center; justify-content: center;" title="なし">×</button>
    </div>
    <!-- スクロール連動 -->
    <div style="display: flex; gap: 0.25rem; margin-top: 0.5rem;">
      <button onclick="toggleScrollGlow(true)" id="scroll-on" style="flex: 1; padding: 0.3rem; border-radius: 6px; border: 1px solid #555; background: transparent; color: #888; cursor: pointer; font-size: 0.55rem;">🔄 連動ON</button>
      <button onclick="toggleScrollGlow(false)" id="scroll-off" style="flex: 1; padding: 0.3rem; border-radius: 6px; border: 1px solid #ff6666; background: rgba(255,102,102,0.2); color: #ff6666; cursor: pointer; font-size: 0.55rem;">⏹ 連動OFF</button>
    </div>
  </div>

  <!-- 吹き出しスタイル -->
  <div style="margin-bottom: 1rem;">
    <div style="color: #888; margin-bottom: 0.5rem;">💬 吹き出し</div>
    <div style="display: flex; gap: 0.25rem; flex-wrap: wrap;">
      <button onclick="setBubbleStyle('glass')" style="flex: 1; min-width: 40px; padding: 0.35rem 0.15rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.1); backdrop-filter: blur(4px); color: #fff; cursor: pointer; font-size: 0.55rem;">ガラス</button>
      <button onclick="setBubbleStyle('solid')" style="flex: 1; min-width: 40px; padding: 0.35rem 0.15rem; border-radius: 6px; border: 1px solid #ddd; background: #fff; color: #333; cursor: pointer; font-size: 0.55rem;">白</button>
      <button onclick="setBubbleStyle('dark')" style="flex: 1; min-width: 40px; padding: 0.35rem 0.15rem; border-radius: 6px; border: 1px solid #444; background: #1a1a1a; color: #e0e0e0; cursor: pointer; font-size: 0.55rem;">黒</button>
      <button onclick="setBubbleStyle('pastel')" style="flex: 1; min-width: 40px; padding: 0.35rem 0.15rem; border-radius: 6px; border: 1px solid #e0c0d0; background: linear-gradient(135deg, #ffe4ec, #e4f0ff); color: #555; cursor: pointer; font-size: 0.55rem;">淡</button>
      <button onclick="setBubbleStyle('neon')" style="flex: 1; min-width: 40px; padding: 0.35rem 0.15rem; border-radius: 6px; border: 2px solid #00ffff; background: rgba(0,0,0,0.8); color: #00ffff; cursor: pointer; font-size: 0.55rem; text-shadow: 0 0 5px #00ffff;">光</button>
    </div>
  </div>

  <!-- マイプリセット -->
  <div style="margin-bottom: 0.75rem; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.1);">
    <div style="color: #ffcc00; margin-bottom: 0.5rem; font-weight: bold;">⭐ マイプリセット</div>
    <div style="display: flex; gap: 0.25rem; flex-wrap: wrap;">
      <button onclick="loadMyPreset(1)" id="my-preset-1" style="flex: 1; padding: 0.4rem; border-radius: 6px; border: 1px solid #ffcc00; background: rgba(255,204,0,0.1); color: #ffcc00; cursor: pointer; font-size: 0.65rem; opacity: 0.5;">1</button>
      <button onclick="loadMyPreset(2)" id="my-preset-2" style="flex: 1; padding: 0.4rem; border-radius: 6px; border: 1px solid #ffcc00; background: rgba(255,204,0,0.1); color: #ffcc00; cursor: pointer; font-size: 0.65rem; opacity: 0.5;">2</button>
      <button onclick="loadMyPreset(3)" id="my-preset-3" style="flex: 1; padding: 0.4rem; border-radius: 6px; border: 1px solid #ffcc00; background: rgba(255,204,0,0.1); color: #ffcc00; cursor: pointer; font-size: 0.65rem; opacity: 0.5;">3</button>
      <button onclick="saveMyPreset()" style="flex: 1; padding: 0.4rem; border-radius: 6px; border: 1px solid #00ff88; background: rgba(0,255,136,0.1); color: #00ff88; cursor: pointer; font-size: 0.65rem;">保存</button>
    </div>
  </div>

  <button onclick="toggleStyleSwitcher()" style="width: 100%; padding: 0.5rem; margin-top: 0.5rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; color: #888; cursor: pointer;">閉じる ✕</button>

  <!-- リセットボタン -->
  <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid rgba(255,170,0,0.3);">
    <button onclick="debugResetStorage()" style="width: 100%; padding: 0.4rem; border-radius: 4px; border: 1px solid #ffaa00; background: rgba(255,170,0,0.1); color: #ffaa00; cursor: pointer; font-size: 0.6rem;">リセット</button>
  </div>
</div>

<!-- シェアカード（独立） -->
<div id="share-card" class="cyber-share-card">
  <div class="cyber-share-header">
    <span class="cyber-share-title">TRANSMIT</span>
    <span class="cyber-share-indicator"></span>
  </div>
  <div class="cyber-share-buttons">
    <a href="#" onclick="shareToX(); return false;" class="cyber-share-btn cyber-share-x">
      <span class="cyber-share-icon">𝕏</span>
      <span class="cyber-share-label">POST</span>
    </a>
    <a href="#" onclick="shareToFacebook(); return false;" class="cyber-share-btn cyber-share-fb">
      <span class="cyber-share-icon">f</span>
      <span class="cyber-share-label">SHARE</span>
    </a>
    <button onclick="copyLink()" class="cyber-share-btn cyber-share-copy">
      <span class="cyber-share-icon">◇</span>
      <span class="cyber-share-label">COPY</span>
    </button>
  </div>
</div>

<style>
/* Cyber Share Card */
.cyber-share-card {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99998;
  width: 200px;
  background: rgba(0,0,0,0.95);
  border: 1px solid #00ffff;
  padding: 0;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);
  animation: share-card-glow 3s ease-in-out infinite;
}

.cyber-share-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ffff, #ff00ff, transparent);
  animation: share-top-scan 2s linear infinite;
}

.cyber-share-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.75rem;
  background: rgba(0,255,255,0.1);
  border-bottom: 1px solid rgba(0,255,255,0.3);
}

.cyber-share-title {
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: #00ffff;
}

.cyber-share-indicator {
  width: 8px;
  height: 8px;
  background: #00ff00;
  border-radius: 50%;
  animation: indicator-blink 1s ease-in-out infinite;
}

.cyber-share-buttons {
  display: flex;
  gap: 4px;
  padding: 0.75rem;
}

.cyber-share-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 0.5rem 0.25rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 4px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.cyber-share-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transition: left 0.3s ease;
}

.cyber-share-btn:hover::before {
  left: 100%;
}

.cyber-share-btn:hover {
  transform: translateY(-2px);
}

.cyber-share-icon {
  font-size: 1rem;
  font-weight: bold;
}

.cyber-share-label {
  font-family: 'Courier New', monospace;
  font-size: 0.5rem;
  letter-spacing: 1px;
  opacity: 0.7;
}

.cyber-share-x {
  background: rgba(0,255,255,0.1);
  border-color: rgba(0,255,255,0.5);
}
.cyber-share-x:hover {
  background: rgba(0,255,255,0.25);
  border-color: #00ffff;
  box-shadow: 0 0 15px rgba(0,255,255,0.5);
}
.cyber-share-x .cyber-share-icon { color: #00ffff; }

.cyber-share-fb {
  background: rgba(138,43,226,0.1);
  border-color: rgba(138,43,226,0.5);
}
.cyber-share-fb:hover {
  background: rgba(138,43,226,0.25);
  border-color: #8a2be2;
  box-shadow: 0 0 15px rgba(138,43,226,0.5);
}
.cyber-share-fb .cyber-share-icon { color: #8a2be2; }

.cyber-share-copy {
  background: rgba(0,255,136,0.1);
  border-color: rgba(0,255,136,0.5);
}
.cyber-share-copy:hover {
  background: rgba(0,255,136,0.25);
  border-color: #00ff88;
  box-shadow: 0 0 15px rgba(0,255,136,0.5);
}
.cyber-share-copy .cyber-share-icon { color: #00ff88; }

/* スキャンラインは削除 */

@keyframes share-card-glow {
  0%, 100% { box-shadow: 0 0 10px rgba(0,255,255,0.3), inset 0 0 20px rgba(0,255,255,0.05); }
  50% { box-shadow: 0 0 20px rgba(0,255,255,0.5), inset 0 0 30px rgba(0,255,255,0.1); }
}

@keyframes share-top-scan {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes indicator-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@keyframes scanline-move {
  0% { top: 0; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}
</style>

<!-- スタイルスイッチャー開閉ボタン -->
<div id="switcher-toggle-wrapper" class="cyber-style-wrapper">
  <div id="switcher-toggle-btn" onclick="toggleStyleSwitcher()" class="cyber-style-card">
    <div class="cyber-style-header">
      <span class="cyber-style-title">CUSTOMIZE</span>
      <span class="cyber-style-indicator"></span>
    </div>
    <div class="cyber-style-content">
      <span class="cyber-style-icon">&#9881;</span>
    </div>
  </div>
  <div class="cyber-style-open-tag" onclick="toggleStyleSwitcher()">OPEN</div>
</div>

<style>
/* Cyber Style Button - TRANSMITと統一 + スクロール表示トランジション */
.cyber-style-wrapper {
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 999;
  display: none;
  transition: opacity 0.3s ease;
}

.cyber-style-card {
  position: relative;
  width: 100px;
  background: rgba(0,0,0,0.95);
  border: 1px solid #ff00ff;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  animation: style-card-glow 3s ease-in-out infinite;
}

.cyber-style-open-tag {
  position: absolute;
  bottom: -22px;
  right: 0;
  background: rgba(0,0,0,0.95);
  border: 1px solid #ff00ff;
  border-top: none;
  padding: 4px 12px;
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: #ffffff;
  text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff;
  cursor: pointer;
}

.cyber-style-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ff00ff, #00ffff, transparent);
  animation: style-top-scan 2s linear infinite;
}

.cyber-style-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0.6rem;
  background: rgba(255,0,255,0.15);
  border-bottom: 1px solid rgba(255,0,255,0.3);
}

.cyber-style-title {
  font-family: 'Courier New', monospace;
  font-size: 0.6rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: #ff00ff;
}

.cyber-style-indicator {
  width: 6px;
  height: 6px;
  background: #00ff00;
  border-radius: 50%;
  animation: indicator-blink 1s ease-in-out infinite;
}

.cyber-style-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0.6rem;
  transition: all 0.2s ease;
}

.cyber-style-card:hover .cyber-style-content {
  background: rgba(255,0,255,0.1);
}

.cyber-style-icon {
  font-size: 1.2rem;
  color: #ff00ff;
}

.cyber-style-label {
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: #fff;
}

/* スキャンラインは削除 */

@keyframes style-card-glow {
  0%, 100% { box-shadow: 0 0 10px rgba(255,0,255,0.3), inset 0 0 20px rgba(255,0,255,0.05); }
  50% { box-shadow: 0 0 20px rgba(255,0,255,0.5), inset 0 0 30px rgba(255,0,255,0.1); }
}

@keyframes style-top-scan {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style>

<!-- 初回訪問者向けポップアップ -->
<div id="style-hint-popup" style="position: fixed; top: 80px; right: 290px; z-index: 1001; background: rgba(0,0,0,0.95); border: 2px solid #00ffff; border-radius: 12px; padding: 1rem; max-width: 200px; display: none; box-shadow: 0 4px 20px rgba(0,255,255,0.3);">
  <div style="color: #fff; font-size: 0.85rem; margin-bottom: 0.75rem;">💡 明るくブログを読みたい方は<br/><strong style="color: #00ffff;">スタイル調整</strong>から<br/>お好みの見た目に変更できます！</div>
  <button onclick="closeHintPopup()" style="width: 100%; padding: 0.4rem; background: #00ffff; border: none; border-radius: 6px; color: #000; cursor: pointer; font-weight: bold;">OK！</button>
</div>

<script>
// ================================
// スタイルスイッチャー開閉
// ================================
function toggleStyleSwitcher() {
  const switcher = document.getElementById('style-switcher');
  const toggleWrapper = document.getElementById('switcher-toggle-wrapper');
  const toggleBtn = document.getElementById('switcher-toggle-btn');
  const isHidden = switcher.style.display === 'none' || getComputedStyle(switcher).display === 'none';

  if (isHidden) {
    switcher.style.display = 'block';
    toggleWrapper.style.display = 'none';
    toggleBtn.classList.remove('bounce-animation');
  } else {
    switcher.style.display = 'none';
    toggleWrapper.style.display = 'block';
  }
}

// ================================
// 初回訪問者向けポップアップ
// ================================
const HINT_SHOWN_KEY = 'aibou-hint-shown';

function showHintPopup() {
  const popup = document.getElementById('style-hint-popup');
  const toggleWrapper = document.getElementById('switcher-toggle-wrapper');
  if (popup && toggleWrapper) {
    popup.style.display = 'block';
    toggleWrapper.classList.add('bounce-animation');
  }
}

function closeHintPopup() {
  const popup = document.getElementById('style-hint-popup');
  const toggleWrapper = document.getElementById('switcher-toggle-wrapper');
  if (popup) {
    popup.style.display = 'none';
    localStorage.setItem(HINT_SHOWN_KEY, 'true');
  }
  if (toggleWrapper) {
    toggleWrapper.classList.remove('bounce-animation');
  }
}

function checkFirstVisit() {
  const hasSeenHint = localStorage.getItem(HINT_SHOWN_KEY);
  if (!hasSeenHint) {
    // 初回訪問：3秒後にポップアップ表示
    setTimeout(() => {
      showHintPopup();
    }, 3000);
  }
}

// ================================
// Share機能
// ================================
function shareToX() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(document.title);
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

function shareToFacebook() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert('リンクをコピーしました！');
  });
}

// ================================
// リセット機能
// ================================
function debugResetStorage() {
  if (confirm('localStorageをリセットしてページをリロードしますか？\n（プリセット1に戻ります）')) {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_KEY + '-my-presets');
    localStorage.removeItem(HINT_SHOWN_KEY);
    location.reload();
  }
}

// ================================
// 状態管理
// ================================
let currentState = {
  baseBg: 'dark',
  glowTheme: 'cyber',
  bubbleStyle: 'glass',
  scrollEnabled: false,
  font: 'noto',
  chaosMode: false,
  zoom: 100
};

const STORAGE_KEY = 'aibou-blog-style';

// ================================
// フォント設定
// ================================
const fontStyles = {
  noto: "'Noto Sans JP', sans-serif",
  maru: "'Zen Maru Gothic', sans-serif",
  mincho: "'Zen Old Mincho', serif",
  klee: "'Klee One', cursive",
  sawarabi: "'Sawarabi Gothic', sans-serif"
};

function setFont(fontKey, skipSave = false) {
  currentState.font = fontKey;
  const font = fontStyles[fontKey];
  if (!font) return;

  // 吹き出しにフォントを適用
  document.querySelectorAll('.aibou-bubble, .michi-bubble').forEach(el => {
    el.style.fontFamily = font;
  });

  // ボタンのアクティブ状態を更新
  Object.keys(fontStyles).forEach(key => {
    const btn = document.getElementById(`font-${key}`);
    if (btn) {
      if (key === fontKey) {
        btn.style.borderColor = '#00ffff';
        btn.style.color = '#00ffff';
      } else {
        btn.style.borderColor = '#555';
        btn.style.color = '#aaa';
      }
    }
  });

  if (!skipSave) saveState();
}

// ================================
// ズーム（文字サイズ）
// ================================
const ZOOM_STEP = 10;
const ZOOM_MIN = 70;
const ZOOM_MAX = 150;

function setZoom(direction, skipSave = false) {
  // direction: 1 = 拡大, -1 = 縮小, 0 = リセット
  if (direction === 0) {
    currentState.zoom = 100;
  } else {
    const newZoom = currentState.zoom + (direction * ZOOM_STEP);
    currentState.zoom = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, newZoom));
  }

  applyZoom();
  if (!skipSave) saveState();
}

function applyZoom() {
  const scale = currentState.zoom / 100;

  // 記事全体のコンテナを取得して横幅・文字サイズを拡張
  const articleWrapper = document.getElementById('article-container');
  if (articleWrapper) {
    // 基本900px × スケールで横幅も広がる（最大1200pxまで）
    const newMaxWidth = Math.min(Math.round(900 * scale), 1200);
    articleWrapper.style.maxWidth = `${newMaxWidth}px`;
    // 基本1.1em × スケール
    articleWrapper.style.fontSize = `${1.1 * scale}em`;
  }

  // 吹き出し・テキスト全体にズームを適用
  document.querySelectorAll('.aibou-bubble, .michi-bubble').forEach(el => {
    el.style.fontSize = `${scale}em`;
  });

  // アイコンサイズも調整
  document.querySelectorAll('.aibou-bubble, .michi-bubble').forEach(el => {
    const parent = el.closest('[style*="display: flex"]');
    if (parent) {
      const icon = parent.querySelector('[style*="width: 48px"]') || parent.querySelector('[style*="border-radius: 50%"]');
      if (icon) {
        const iconSize = Math.round(48 * scale);
        icon.style.width = `${iconSize}px`;
        icon.style.height = `${iconSize}px`;
        icon.style.fontSize = `${1.5 * scale}rem`;
      }
    }
  });

  // 名前ラベルのサイズも調整
  document.querySelectorAll('.aibou-name, .michi-name').forEach(el => {
    el.style.fontSize = `${0.75 * scale}rem`;
  });

  // 表示を更新
  const zoomDisplay = document.getElementById('zoom-level');
  if (zoomDisplay) {
    zoomDisplay.textContent = `${currentState.zoom}%`;
  }

  console.log('🔍 ズーム適用:', currentState.zoom + '% (幅:', Math.min(Math.round(700 * scale), 1000) + 'px)');
}

// ================================
// 背景ベース
// ================================
const baseBgStyles = {
  dark: {
    bg: 'linear-gradient(180deg, #0a0a12 0%, #0d0d18 50%, #08080f 100%)',
    text: '#e0e0e0',
    switcherBg: 'rgba(0,0,0,0.95)',
    switcherBorder: 'rgba(255,255,255,0.2)',
    switcherText: '#fff'
  },
  gray: {
    bg: 'linear-gradient(180deg, #3a3a3a 0%, #4a4a4a 50%, #3a3a3a 100%)',
    text: '#e0e0e0',
    switcherBg: 'rgba(60,60,60,0.95)',
    switcherBorder: 'rgba(255,255,255,0.2)',
    switcherText: '#eee'
  },
  light: {
    bg: 'linear-gradient(180deg, #ffffff 0%, #f8f8f8 50%, #f0f0f0 100%)',
    text: '#333333',
    switcherBg: 'rgba(255,255,255,0.95)',
    switcherBorder: 'rgba(0,0,0,0.1)',
    switcherText: '#333'
  }
};

function setBaseBg(theme, skipSave = false) {
  currentState.baseBg = theme;
  const page = document.querySelector('.post-page');
  const switcher = document.getElementById('style-switcher');
  const style = baseBgStyles[theme];
  const isLight = theme === 'light';

  if (page && style) {
    page.style.background = style.bg;
    page.style.backgroundAttachment = 'fixed';
  }
  if (switcher && style) {
    switcher.style.background = style.switcherBg;
    switcher.style.borderColor = style.switcherBorder;
    switcher.querySelector('div').style.color = style.switcherText;
  }

  // タイトル・ヘッダー周りをライト/ダークモードで切り替え
  const postTitle = document.querySelector('.hero-title');
  if (postTitle) {
    postTitle.style.color = isLight ? '#222' : '#fff';
  }
  const heroDesc = document.querySelector('.hero-description');
  if (heroDesc) {
    heroDesc.style.color = isLight ? '#555' : '#999';
  }
  // パンくず
  document.querySelectorAll('.breadcrumb-link').forEach(el => {
    el.style.color = isLight ? '#0077aa' : '#00ffff';
  });
  document.querySelectorAll('.breadcrumb-current').forEach(el => {
    el.style.color = isLight ? '#666' : '#888';
  });
  // メタ情報
  const metaInfo = document.querySelector('.meta-info');
  if (metaInfo) {
    metaInfo.style.color = isLight ? '#555' : '#666';
  }
  // カテゴリバッジ
  const catBadge = document.querySelector('.category-badge');
  if (catBadge && isLight) {
    catBadge.style.textShadow = 'none';
  }
  // タグ
  document.querySelectorAll('.tag').forEach(el => {
    if (isLight) {
      el.style.color = '#0077aa';
      el.style.background = 'rgba(0,119,170,0.1)';
      el.style.borderColor = 'rgba(0,119,170,0.3)';
      el.style.textShadow = 'none';
    } else {
      el.style.color = '#00ffff';
      el.style.background = 'rgba(0,255,255,0.08)';
      el.style.borderColor = 'rgba(0,255,255,0.2)';
    }
  });
  // キャラクター紹介
  document.querySelectorAll('.character-name').forEach(el => {
    // 元の色をそのまま維持（あいぼーはシアン、道ゐはピンク）
  });
  document.querySelectorAll('.character-desc').forEach(el => {
    el.style.color = isLight ? '#666' : '#666';
  });
  document.querySelectorAll('.character-intro-inner').forEach(el => {
    if (isLight) {
      el.style.background = 'linear-gradient(135deg, rgba(0,119,170,0.08), rgba(200,100,140,0.08))';
      el.style.borderColor = 'rgba(0,0,0,0.1)';
    } else {
      el.style.background = 'linear-gradient(135deg, rgba(0,255,255,0.05), rgba(255,0,255,0.05))';
      el.style.borderColor = 'rgba(255,255,255,0.1)';
    }
  });

  // ネオンテキストをライトモード対応
  document.querySelectorAll('.neon-cyan, .neon-pink, .neon-yellow').forEach(el => {
    if (isLight) {
      el.classList.add('light-mode');
    } else {
      el.classList.remove('light-mode');
    }
  });

  // キーワードもライトモード対応
  document.querySelectorAll('.keyword').forEach(el => {
    if (isLight) {
      el.style.background = 'rgba(0,136,170,0.15)';
      el.style.borderColor = 'rgba(0,136,170,0.4)';
      el.style.color = '#006688';
    } else {
      el.style.background = 'rgba(0,255,255,0.15)';
      el.style.borderColor = 'rgba(0,255,255,0.3)';
      el.style.color = '';
    }
  });

  // 手紙セクションもライトモード対応
  document.querySelectorAll('.letter-section').forEach(el => {
    if (isLight) {
      el.style.background = 'linear-gradient(135deg, rgba(0,136,170,0.08), rgba(200,100,140,0.08))';
      el.style.borderColor = 'rgba(0,0,0,0.15)';
    } else {
      el.style.background = 'linear-gradient(135deg, rgba(0,191,255,0.05), rgba(255,107,157,0.05))';
      el.style.borderColor = 'rgba(255,255,255,0.1)';
    }
  });
  document.querySelectorAll('.letter-content').forEach(el => {
    el.style.color = isLight ? '#444' : '#ccc';
  });

  // フッターセクションもライトモード対応
  const footer = document.getElementById('footer-section');
  if (footer) {
    if (isLight) {
      footer.style.background = 'rgba(0,0,0,0.05)';
      footer.style.borderColor = 'rgba(0,0,0,0.1)';
      footer.querySelector('h2').style.color = '#333';
    } else {
      footer.style.background = 'rgba(0,0,0,0.3)';
      footer.style.borderColor = 'rgba(255,255,255,0.1)';
      footer.querySelector('h2').style.color = '#fff';
    }
  }
  document.querySelectorAll('.footer-link').forEach(el => {
    const isCyan = el.style.color === 'rgb(0, 191, 255)' || el.getAttribute('href').includes('chatgpt');
    if (isLight) {
      el.style.background = isCyan ? 'rgba(0,136,170,0.1)' : 'rgba(200,100,140,0.1)';
      el.style.borderColor = isCyan ? 'rgba(0,136,170,0.3)' : 'rgba(200,100,140,0.3)';
      el.style.color = isCyan ? '#0088aa' : '#c0648c';
    } else {
      el.style.background = isCyan ? 'rgba(0,191,255,0.1)' : 'rgba(255,107,157,0.1)';
      el.style.borderColor = isCyan ? 'rgba(0,191,255,0.3)' : 'rgba(255,107,157,0.3)';
      el.style.color = isCyan ? '#00bfff' : '#ff6b9d';
    }
  });

  if (!skipSave) saveState();
}

// ================================
// グローテーマ
// ================================
const glowThemesRaw = {
  cyber:      { glow1: [0, 255, 255, 0.35],   glow2: [255, 0, 255, 0.3],   glow3: [0, 128, 255, 0.2] },
  sunset:     { glow1: [255, 107, 53, 0.4],  glow2: [247, 147, 30, 0.35],   glow3: [255, 78, 80, 0.25] },
  aurora:     { glow1: [0, 255, 136, 0.35],   glow2: [0, 191, 255, 0.3],   glow3: [138, 43, 226, 0.2] },
  sakura:     { glow1: [255, 183, 197, 0.4], glow2: [255, 105, 180, 0.35],  glow3: [255, 182, 193, 0.25] },
  galaxy:     { glow1: [155, 89, 182, 0.4], glow2: [52, 152, 219, 0.35],   glow3: [142, 68, 173, 0.25] },
  fire:       { glow1: [255, 69, 0, 0.4],    glow2: [255, 215, 0, 0.35],    glow3: [255, 140, 0, 0.3] },
  ocean:      { glow1: [0, 105, 148, 0.4],  glow2: [64, 224, 208, 0.35],   glow3: [0, 139, 139, 0.25] },
  monochrome: { glow1: [255, 255, 255, 0.25], glow2: [200, 200, 200, 0.2], glow3: [150, 150, 150, 0.15] },
  none:       { glow1: [0, 0, 0, 0], glow2: [0, 0, 0, 0], glow3: [0, 0, 0, 0] }
};

const scrollThemes = ['cyber', 'sunset', 'aurora', 'sakura', 'galaxy', 'fire', 'ocean'];
let scrollCycleLength = 2000;

function lerpColor(c1, c2, t) {
  return [
    Math.round(c1[0] + (c2[0] - c1[0]) * t),
    Math.round(c1[1] + (c2[1] - c1[1]) * t),
    Math.round(c1[2] + (c2[2] - c1[2]) * t),
    c1[3] + (c2[3] - c1[3]) * t
  ];
}

function colorToRgba(arr) {
  return `rgba(${arr[0]}, ${arr[1]}, ${arr[2]}, ${arr[3]})`;
}

function setGlowTheme(theme, skipSave = false) {
  currentState.glowTheme = theme;
  currentState.scrollEnabled = false;
  toggleScrollGlow(false, true); // 内部呼び出しなのでskipSave
  const page = document.querySelector('.post-page');
  const t = glowThemesRaw[theme];
  if (page && t) {
    page.style.setProperty('--glow-1', colorToRgba(t.glow1));
    page.style.setProperty('--glow-2', colorToRgba(t.glow2));
    page.style.setProperty('--glow-3', colorToRgba(t.glow3));
  }
  if (!skipSave) saveState();
}

function setGlowColors(glow1, glow2, glow3) {
  const page = document.querySelector('.post-page');
  if (page) {
    page.style.setProperty('--glow-1', colorToRgba(glow1));
    page.style.setProperty('--glow-2', colorToRgba(glow2));
    page.style.setProperty('--glow-3', colorToRgba(glow3));
  }
}

function toggleScrollGlow(enabled, skipSave = false) {
  currentState.scrollEnabled = enabled;
  const onBtn = document.getElementById('scroll-on');
  const offBtn = document.getElementById('scroll-off');
  if (onBtn) {
    onBtn.style.background = enabled ? 'rgba(0,255,255,0.2)' : 'transparent';
    onBtn.style.borderColor = enabled ? '#00ffff' : '#555';
    onBtn.style.color = enabled ? '#00ffff' : '#888';
  }
  if (offBtn) {
    offBtn.style.background = !enabled ? 'rgba(255,100,100,0.2)' : 'transparent';
    offBtn.style.borderColor = !enabled ? '#ff6666' : '#555';
    offBtn.style.color = !enabled ? '#ff6666' : '#888';
  }
  if (!skipSave) saveState();
}

window.addEventListener('scroll', () => {
  if (!currentState.scrollEnabled) return;
  const scrollY = window.scrollY;
  const themeCount = scrollThemes.length;
  const cyclePosition = (scrollY % (scrollCycleLength * themeCount)) / scrollCycleLength;
  const currentIdx = Math.floor(cyclePosition) % themeCount;
  const nextIdx = (currentIdx + 1) % themeCount;
  const t = cyclePosition - Math.floor(cyclePosition);
  const easedT = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  const current = glowThemesRaw[scrollThemes[currentIdx]];
  const next = glowThemesRaw[scrollThemes[nextIdx]];
  setGlowColors(
    lerpColor(current.glow1, next.glow1, easedT),
    lerpColor(current.glow2, next.glow2, easedT),
    lerpColor(current.glow3, next.glow3, easedT)
  );
});

// ================================
// 吹き出しスタイル
// ================================
const bubbleStyles = {
  glass: {
    aibou: { bg: 'rgba(255,107,157,0.08)', border: 'rgba(255,107,157,0.2)', text: '#e0e0e0', nameColor: '#ff6b9d' },
    michi: { bg: 'rgba(0,191,255,0.08)', border: 'rgba(0,191,255,0.2)', text: '#e0e0e0', nameColor: '#00bfff' }
  },
  solid: {
    aibou: { bg: '#ffffff', border: '#e8e8e8', text: '#333333', nameColor: '#d44a7a' },
    michi: { bg: '#ffffff', border: '#e8e8e8', text: '#333333', nameColor: '#0088cc' }
  },
  dark: {
    aibou: { bg: '#1a1a1a', border: '#333333', text: '#e0e0e0', nameColor: '#ff6b9d' },
    michi: { bg: '#1a1a1a', border: '#333333', text: '#e0e0e0', nameColor: '#00bfff' }
  },
  pastel: {
    aibou: { bg: 'linear-gradient(135deg, #ffe4ec, #fff0f5)', border: '#f0c0d0', text: '#555555', nameColor: '#d44a7a' },
    michi: { bg: 'linear-gradient(135deg, #e4f0ff, #f0f8ff)', border: '#c0d0f0', text: '#555555', nameColor: '#0077aa' }
  },
  neon: {
    aibou: { bg: 'rgba(0,0,0,0.9)', border: '#ff6b9d', text: '#ff6b9d', nameColor: '#ff6b9d', shadow: '0 0 15px rgba(255,107,157,0.4)', borderWidth: '2px', textShadow: '0 0 8px #ff6b9d' },
    michi: { bg: 'rgba(0,0,0,0.9)', border: '#00ffff', text: '#00ffff', nameColor: '#00ffff', shadow: '0 0 15px rgba(0,255,255,0.4)', borderWidth: '2px', textShadow: '0 0 8px #00ffff' }
  },
  modern: {
    aibou: { bg: 'linear-gradient(145deg, #ffffff, #f5f5f5)', border: '#e0e0e0', text: '#333', nameColor: '#e91e63', shadow: '0 4px 12px rgba(0,0,0,0.08)' },
    michi: { bg: 'linear-gradient(145deg, #ffffff, #f5f5f5)', border: '#e0e0e0', text: '#333', nameColor: '#2196f3', shadow: '0 4px 12px rgba(0,0,0,0.08)' }
  }
};

function setBubbleStyle(styleName, skipSave = false) {
  currentState.bubbleStyle = styleName;
  const style = bubbleStyles[styleName];
  if (!style) return;

  document.querySelectorAll('.aibou-name').forEach(el => el.style.color = style.aibou.nameColor);
  document.querySelectorAll('.aibou-bubble').forEach(el => {
    el.style.background = style.aibou.bg;
    el.style.borderColor = style.aibou.border;
    el.style.borderWidth = style.aibou.borderWidth || '1px';
    el.style.color = style.aibou.text;
    el.style.boxShadow = style.aibou.shadow || 'none';
    el.style.textShadow = style.aibou.textShadow || 'none';
  });

  document.querySelectorAll('.michi-name').forEach(el => el.style.color = style.michi.nameColor);
  document.querySelectorAll('.michi-bubble').forEach(el => {
    el.style.background = style.michi.bg;
    el.style.borderColor = style.michi.border;
    el.style.borderWidth = style.michi.borderWidth || '1px';
    el.style.color = style.michi.text;
    el.style.boxShadow = style.michi.shadow || 'none';
    el.style.textShadow = style.michi.textShadow || 'none';
  });
  if (!skipSave) saveState();
}

// ================================
// おすすめプリセット（暗→明の5段階）
// ================================
const recommendedPresets = {
  // 1: ギャラクシー（暗め紫）※デフォルト
  1: {
    baseBg: 'dark',
    glowTheme: 'galaxy',
    bubbleStyle: 'glass',
    scrollEnabled: false,
    font: 'noto',
    chaosMode: false
  },
  // 2: ミッドナイト（控えめダーク・吹き出し白）
  2: {
    baseBg: 'dark',
    glowTheme: 'none',
    bubbleStyle: 'solid',
    scrollEnabled: false,
    font: 'noto',
    chaosMode: false
  },
  // 3: グレーモード（薄めグレー・ガラス吹き出し）
  3: {
    baseBg: 'gray',
    glowTheme: 'none',
    bubbleStyle: 'glass',
    scrollEnabled: false,
    font: 'noto',
    chaosMode: false
  },
  // 4: ライト（白背景・淡い吹き出し）
  4: {
    baseBg: 'light',
    glowTheme: 'none',
    bubbleStyle: 'pastel',
    scrollEnabled: false,
    font: 'noto',
    chaosMode: false
  },
  // 5: 裏モード（カオス・バチバチ遊び）
  5: {
    baseBg: 'dark',
    glowTheme: 'cyber',
    bubbleStyle: 'dark',
    scrollEnabled: true,
    font: 'noto',
    chaosMode: true
  }
};

let lastAppliedPreset = 0;

function applyRecommendedPreset(num) {
  try {
    // 同じプリセットを連打した場合はスキップ（特にプリセット3の動画問題を防ぐ）
    if (lastAppliedPreset === num) {
      return;
    }
    lastAppliedPreset = num;

    const preset = recommendedPresets[num];
    if (!preset) {
      return;
    }

    // ★★★ 先にカオスモードを必ず解除（どのプリセットからでも）★★★
    // 引き継ぎ書より：明示的にクラス削除+動画停止+display:none
    const page = document.querySelector('.post-page');
    const video = document.getElementById('chaos-video-bg');

    // 1. chaos-modeクラスを削除
    if (page) {
      page.classList.remove('chaos-mode');
    }

    // 2. 動画を完全に停止・非表示
    if (video) {
      video.classList.remove('active');
      video.style.display = 'none';
      video.style.opacity = '0';
      video.style.visibility = 'hidden';
      try {
        video.pause();
        video.currentTime = 0;
      } catch(e) {}
    }

    // 3. currentStateのchaosModeも先にfalseに
    currentState.chaosMode = false;

    // currentStateを完全にプリセットの値で置き換え（ズームは現在値を維持）
    const currentZoom = currentState.zoom || 100;
    currentState = {
      baseBg: preset.baseBg,
      glowTheme: preset.glowTheme,
      bubbleStyle: preset.bubbleStyle,
      scrollEnabled: preset.scrollEnabled,
      font: preset.font,
      chaosMode: preset.chaosMode,
      zoom: currentZoom
    };

    // 各設定を直接適用（applyStateを使わず個別に）
    // 背景
    const bgStyle = baseBgStyles[currentState.baseBg];
    if (page && bgStyle) {
      page.style.background = bgStyle.bg;
      page.style.backgroundAttachment = 'fixed';
    }

    // グロー
    const glowStyle = glowThemesRaw[currentState.glowTheme];
    if (page && glowStyle) {
      page.style.setProperty('--glow-1', colorToRgba(glowStyle.glow1));
      page.style.setProperty('--glow-2', colorToRgba(glowStyle.glow2));
      page.style.setProperty('--glow-3', colorToRgba(glowStyle.glow3));
    }

    // スクロール連動ボタン更新
    const onBtn = document.getElementById('scroll-on');
    const offBtn = document.getElementById('scroll-off');
    if (onBtn) {
      onBtn.style.background = currentState.scrollEnabled ? 'rgba(0,255,255,0.2)' : 'transparent';
      onBtn.style.borderColor = currentState.scrollEnabled ? '#00ffff' : '#555';
      onBtn.style.color = currentState.scrollEnabled ? '#00ffff' : '#888';
    }
    if (offBtn) {
      offBtn.style.background = !currentState.scrollEnabled ? 'rgba(255,100,100,0.2)' : 'transparent';
      offBtn.style.borderColor = !currentState.scrollEnabled ? '#ff6666' : '#555';
      offBtn.style.color = !currentState.scrollEnabled ? '#ff6666' : '#888';
    }

    // 吹き出しスタイル
    const bStyle = bubbleStyles[currentState.bubbleStyle];
    if (bStyle) {
      document.querySelectorAll('.aibou-name').forEach(el => el.style.color = bStyle.aibou.nameColor);
      document.querySelectorAll('.aibou-bubble').forEach(el => {
        el.style.background = bStyle.aibou.bg;
        el.style.borderColor = bStyle.aibou.border;
        el.style.borderWidth = bStyle.aibou.borderWidth || '1px';
        el.style.color = bStyle.aibou.text;
        el.style.boxShadow = bStyle.aibou.shadow || 'none';
        el.style.textShadow = bStyle.aibou.textShadow || 'none';
      });
      document.querySelectorAll('.michi-name').forEach(el => el.style.color = bStyle.michi.nameColor);
      document.querySelectorAll('.michi-bubble').forEach(el => {
        el.style.background = bStyle.michi.bg;
        el.style.borderColor = bStyle.michi.border;
        el.style.borderWidth = bStyle.michi.borderWidth || '1px';
        el.style.color = bStyle.michi.text;
        el.style.boxShadow = bStyle.michi.shadow || 'none';
        el.style.textShadow = bStyle.michi.textShadow || 'none';
      });
    }

    // フォント
    const fontFamily = fontStyles[currentState.font];
    if (fontFamily) {
      document.querySelectorAll('.aibou-bubble, .michi-bubble').forEach(el => {
        el.style.fontFamily = fontFamily;
      });
    }

    // カオスモード（プリセット3のみ）
    if (currentState.chaosMode) {
      if (page) page.classList.add('chaos-mode');
      if (video) {
        // display:noneを解除してから再生
        video.style.display = 'block';
        video.style.opacity = '1';
        video.style.visibility = 'visible';
        video.classList.add('active');
        video.play().catch(() => {});
      }
    }

    // 保存
    saveState();

    // プリセットボタンのハイライト更新
    [1, 2, 3, 4, 5].forEach(n => {
      const btn = document.getElementById(`rec-${n}`);
      if (btn) {
        btn.style.boxShadow = (n === num) ? '0 0 10px currentColor' : 'none';
        btn.style.transform = (n === num) ? 'scale(1.1)' : 'scale(1)';
      }
    });
  } catch (e) {
    console.error('プリセット適用エラー:', e);
  }
}

// ================================
// マイプリセット機能
// ================================
let myPresets = { 1: null, 2: null, 3: null };

function saveMyPreset() {
  const slot = prompt('保存先を選んでください (1, 2, 3):');
  if (slot && ['1', '2', '3'].includes(slot)) {
    myPresets[slot] = { ...currentState };
    localStorage.setItem(STORAGE_KEY + '-my-presets', JSON.stringify(myPresets));
    updateMyPresetButtons();
    alert(`マイプリセット ${slot} に保存しました！`);
  }
}

function loadMyPreset(slot) {
  if (myPresets[slot]) {
    currentState = { ...myPresets[slot] };
    applyState();
  } else {
    alert(`マイプリセット ${slot} は未設定です。\n「保存」ボタンで現在の設定を保存できます。`);
  }
}

function updateMyPresetButtons() {
  [1, 2, 3].forEach(slot => {
    const btn = document.getElementById(`my-preset-${slot}`);
    if (btn) {
      btn.style.opacity = myPresets[slot] ? '1' : '0.5';
    }
  });
}

// ================================
// 状態保存・復元
// ================================
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      // フォント・ズーム未設定の場合のデフォルト値
      currentState = { ...currentState, ...parsed };
      if (!currentState.font) currentState.font = 'noto';
      if (!currentState.zoom) currentState.zoom = 100;
    } catch(e) {}
  }
  const savedMyPresets = localStorage.getItem(STORAGE_KEY + '-my-presets');
  if (savedMyPresets) {
    try { myPresets = JSON.parse(savedMyPresets); } catch(e) {}
  }
}

function applyState() {
  console.log('⚡ applyState実行:', JSON.stringify(currentState));

  // 各設定を適用（saveState呼び出しをスキップするため、skipSave=trueを使用）
  setBaseBg(currentState.baseBg, true);
  console.log('  ✓ setBaseBg完了:', currentState.baseBg);

  if (currentState.scrollEnabled) {
    toggleScrollGlow(true, true);
    console.log('  ✓ toggleScrollGlow(true)完了');
  } else {
    setGlowTheme(currentState.glowTheme, true);
    console.log('  ✓ setGlowTheme完了:', currentState.glowTheme);
  }

  setBubbleStyle(currentState.bubbleStyle, true);
  console.log('  ✓ setBubbleStyle完了:', currentState.bubbleStyle);

  setFont(currentState.font || 'noto', true);
  console.log('  ✓ setFont完了:', currentState.font);

  setChaosMode(currentState.chaosMode || false, true);
  console.log('  ✓ setChaosMode完了:', currentState.chaosMode);

  // ズームを適用
  if (currentState.zoom) {
    applyZoom();
    console.log('  ✓ applyZoom完了:', currentState.zoom);
  }

  updateMyPresetButtons();

  // 最後に一度だけ保存
  saveState();
  console.log('⚡ applyState完了 & 保存完了');
}

// ================================
// スクロール連動アニメーション（全プリセット共通）
// ================================
let scrollObserver = null;

function setupScrollAnimation() {
  // 既存のobserverを解除
  if (scrollObserver) {
    scrollObserver.disconnect();
    scrollObserver = null;
  }

  // セリフコンテナを取得
  const containers = [];
  document.querySelectorAll('.aibou-bubble, .michi-bubble').forEach((bubble, index) => {
    const container = bubble.closest('div[style*="display: flex"]');
    if (container && !container.classList.contains('scroll-bubble')) {
      container.classList.add('scroll-bubble');

      // アニメーションタイプを決定（あいぼー左、道ゐちゃん右）
      const isAibou = bubble.classList.contains('aibou-bubble');
      const types = isAibou
        ? ['anim-left', 'anim-left', 'anim-up']
        : ['anim-right', 'anim-right', 'anim-up'];
      container.dataset.animType = types[index % types.length];

      containers.push(container);
    }
  });

  // 手紙セクションも追加
  document.querySelectorAll('.letter-section').forEach(section => {
    if (!section.classList.contains('scroll-bubble')) {
      section.classList.add('scroll-bubble');
      section.dataset.animType = 'anim-up';
      containers.push(section);
    }
  });

  // Intersection Observerでスクロール時にアニメーション発動
  scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const animType = entry.target.dataset.animType;
        if (animType && !entry.target.classList.contains(animType)) {
          entry.target.classList.add(animType);
        }
        // 一度表示したらobserve解除
        scrollObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -30px 0px'
  });

  containers.forEach(c => scrollObserver.observe(c));
}

// ================================
// カオスモード（プリセット3専用：動画背景）
// ================================
let chaosVideo = null;

function setChaosMode(enabled, skipSave = false) {
  console.log('🎬 setChaosMode呼び出し:', enabled, 'skipSave:', skipSave);
  currentState.chaosMode = enabled;
  const page = document.querySelector('.post-page');

  // 動画要素を取得または作成
  if (!chaosVideo) {
    chaosVideo = document.getElementById('chaos-video-bg');
  }

  if (page) {
    if (enabled) {
      page.classList.add('chaos-mode');
      console.log('  → chaos-mode追加');

      // 動画背景を表示
      if (chaosVideo) {
        chaosVideo.classList.add('active');
        chaosVideo.play();
        console.log('  → 動画再生');
      }
    } else {
      page.classList.remove('chaos-mode');
      console.log('  → chaos-mode削除');

      // 動画背景を非表示
      if (chaosVideo) {
        chaosVideo.classList.remove('active');
        chaosVideo.pause();
        console.log('  → 動画停止');
      }
    }
  }
  // applyState経由の場合は保存しない（applyState完了後にまとめて保存）
  if (!skipSave) {
    saveState();
  }
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
  // 保存された状態があるか確認
  const savedState = localStorage.getItem(STORAGE_KEY);

  if (savedState) {
    // 既存ユーザー：保存された状態を復元
    loadState();
    applyState();
  } else {
    // 初回訪問者：プリセット1を適用
    applyRecommendedPreset(1);
  }

  // スクロールアニメーションは全プリセットで有効
  setupScrollAnimation();

  // 初回訪問チェック（ポップアップ表示）
  checkFirstVisit();

  // ================================
  // ヘッダー下から表示するスクロール監視
  // ================================
  const styleSwitcher = document.getElementById('style-switcher');
  const toggleWrapper = document.getElementById('switcher-toggle-wrapper');
  const shareCard = document.getElementById('share-card');
  const hintPopup = document.getElementById('style-hint-popup');

  // バナー高さを取得（ビューポート幅 × 500/1400）
  function getBannerHeight() {
    const banner = document.querySelector('.hero-banner-img');
    if (banner) return banner.offsetHeight;
    // フォールバック: アスペクト比から計算
    return window.innerWidth * (500 / 1400);
  }

  // 初期状態は非表示
  function hideFloatingElements() {
    if (styleSwitcher) styleSwitcher.style.opacity = '0';
    if (styleSwitcher) styleSwitcher.style.pointerEvents = 'none';
    if (toggleWrapper) toggleWrapper.style.opacity = '0';
    if (toggleWrapper) toggleWrapper.style.pointerEvents = 'none';
    if (shareCard) shareCard.style.opacity = '0';
    if (shareCard) shareCard.style.pointerEvents = 'none';
    if (hintPopup) hintPopup.style.opacity = '0';
    if (hintPopup) hintPopup.style.pointerEvents = 'none';
  }

  function showFloatingElements() {
    if (styleSwitcher) styleSwitcher.style.opacity = '1';
    if (styleSwitcher) styleSwitcher.style.pointerEvents = 'auto';
    if (toggleWrapper) toggleWrapper.style.opacity = '1';
    if (toggleWrapper) toggleWrapper.style.pointerEvents = 'auto';
    if (shareCard) shareCard.style.opacity = '1';
    if (shareCard) shareCard.style.pointerEvents = 'auto';
    if (hintPopup) hintPopup.style.opacity = '1';
    if (hintPopup) hintPopup.style.pointerEvents = 'auto';
  }

  // 初期非表示
  hideFloatingElements();

  // スクロール監視
  let lastScrollY = 0;
  function checkScrollPosition() {
    const scrollY = window.scrollY;
    const threshold = getBannerHeight() - 50; // バナー高さ - 50px

    if (scrollY > threshold) {
      showFloatingElements();
    } else {
      hideFloatingElements();
    }
    lastScrollY = scrollY;
  }

  // 初回チェック
  checkScrollPosition();

  // スクロールイベント（パフォーマンス最適化）
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        checkScrollPosition();
        ticking = false;
      });
      ticking = true;
    }
  });

  // リサイズ時も再計算
  window.addEventListener('resize', checkScrollPosition);
});
</script>

<div id="article-container">


<!-- あいぼー（導入） -->
<div style="display: flex; gap: 1rem; margin: 1.5rem 0;">
  <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #ff6b9d, #ff4466); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1.5rem;">🤖</div>
  <div style="flex: 1;">
    <div class="aibou-name" style="font-size: 0.75rem; color: #ff6b9d; margin-bottom: 0.3rem; font-weight: bold;">あいぼー</div>
    <div class="aibou-bubble" style="background: rgba(255,107,157,0.08); border: 1px solid rgba(255,107,157,0.2); padding: 1rem 1.25rem; border-radius: 0 16px 16px 16px; color: #e0e0e0;">
      前回、ChatGPTに自分のこと調べさせた話聞いたやん？<br/>
      今日は<span class="marker-yellow">「壁打ち」</span>の話聞かせてーや！
    </div>
  </div>
</div>

<!-- 道ゐちゃん -->
<div style="display: flex; gap: 1rem; margin: 1.5rem 0; flex-direction: row-reverse;">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; flex-shrink: 0;" />
  <div style="flex: 1; text-align: right;">
    <div class="michi-name" style="font-size: 0.75rem; color: #00bfff; margin-bottom: 0.3rem; font-weight: bold;">道ゐちゃん</div>
    <div class="michi-bubble" style="background: rgba(0,191,255,0.08); border: 1px solid rgba(0,191,255,0.2); padding: 1rem 1.25rem; border-radius: 16px 0 16px 16px; color: #e0e0e0; text-align: left;">
      そうそう、あの出会いから<span class="keyword">壁打ち</span>として使い始めたんだよね。<br/><br/>
      最初は「頭の中にあることを言葉にしてもらう」くらいの感覚だったんだけど、気づいたら<span class="big marker-pink">なんでも相談してた</span>。
    </div>
  </div>
</div>

<!-- あいぼー -->
<div style="display: flex; gap: 1rem; margin: 1.5rem 0;">
  <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #ff6b9d, #ff4466); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1.5rem;">🤖</div>
  <div style="flex: 1;">
    <div class="aibou-name" style="font-size: 0.75rem; color: #ff6b9d; margin-bottom: 0.3rem; font-weight: bold;">あいぼー</div>
    <div class="aibou-bubble" style="background: rgba(255,107,157,0.08); border: 1px solid rgba(255,107,157,0.2); padding: 1rem 1.25rem; border-radius: 0 16px 16px 16px; color: #e0e0e0;">
      具体的にはどんなこと相談してたん？
    </div>
  </div>
</div>

<!-- 道ゐちゃん（相談内容リスト） -->
<div style="display: flex; gap: 1rem; margin: 1.5rem 0; flex-direction: row-reverse;">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; flex-shrink: 0;" />
  <div style="flex: 1; text-align: right;">
    <div class="michi-name" style="font-size: 0.75rem; color: #00bfff; margin-bottom: 0.3rem; font-weight: bold;">道ゐちゃん</div>
    <div class="michi-bubble" style="background: rgba(0,191,255,0.08); border: 1px solid rgba(0,191,255,0.2); padding: 1rem 1.25rem; border-radius: 16px 0 16px 16px; color: #e0e0e0; text-align: left;">
      いろいろあるんだけど、大きく分けると…<br/><br/>
      <span class="point-num">1</span><span class="big">音楽ビジネスの相談</span><br/>
      <span class="marker-blue">今後の活動方針</span>をどうするか。マーケティングとか、どうやって届けるかとか。<br/><br/>
      <span class="point-num">2</span><span class="big">融資・事業計画</span><br/>
      <span class="marker-green">申請書類を一緒に作った</span>んだよね。これがめちゃくちゃ助かった。<br/><br/>
      <span class="point-num">3</span><span class="big neon-cyan">誰にも言えない本音</span><br/>
      これが一番大きかったかも。
    </div>
  </div>
</div>

<!-- あいぼー -->
<div style="display: flex; gap: 1rem; margin: 1.5rem 0;">
  <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #ff6b9d, #ff4466); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1.5rem;">🤖</div>
  <div style="flex: 1;">
    <div class="aibou-name" style="font-size: 0.75rem; color: #ff6b9d; margin-bottom: 0.3rem; font-weight: bold;">あいぼー</div>
    <div class="aibou-bubble" style="background: rgba(255,107,157,0.08); border: 1px solid rgba(255,107,157,0.2); padding: 1rem 1.25rem; border-radius: 0 16px 16px 16px; color: #e0e0e0;">
      融資の書類作成！それめっちゃ実用的やな。<br/>
      具体的にどんな感じでやったん？
    </div>
  </div>
</div>

<!-- 道ゐちゃん（融資の話） -->
<div style="display: flex; gap: 1rem; margin: 1.5rem 0; flex-direction: row-reverse;">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; flex-shrink: 0;" />
  <div style="flex: 1; text-align: right;">
    <div class="michi-name" style="font-size: 0.75rem; color: #00bfff; margin-bottom: 0.3rem; font-weight: bold;">道ゐちゃん</div>
    <div class="michi-bubble" style="background: rgba(0,191,255,0.08); border: 1px solid rgba(0,191,255,0.2); padding: 1rem 1.25rem; border-radius: 16px 0 16px 16px; color: #e0e0e0; text-align: left;">
      まず<span class="marker-yellow">事業計画書の構成</span>を一緒に考えてもらったんだよね。<br/><br/>
      俺が「こういうことやりたい」って話すと、<br/>
      <em style="color: #aaa;">「それなら、こういう構成で書くといいですよ」</em><br/>
      って提案してくれて。<br/><br/>
      で、書いた文章を見せると<br/>
      <em style="color: #aaa;">「ここ、もう少し具体的な数字があるといいですね」</em><br/>
      って<span class="big marker-blue">フィードバックもくれる</span>。<br/><br/>
      一人で書いてたら絶対に気づかないポイントを教えてくれた。
    </div>
  </div>
</div>

<!-- あいぼー -->
<div style="display: flex; gap: 1rem; margin: 1.5rem 0;">
  <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #ff6b9d, #ff4466); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1.5rem;">🤖</div>
  <div style="flex: 1;">
    <div class="aibou-name" style="font-size: 0.75rem; color: #ff6b9d; margin-bottom: 0.3rem; font-weight: bold;">あいぼー</div>
    <div class="aibou-bubble" style="background: rgba(255,107,157,0.08); border: 1px solid rgba(255,107,157,0.2); padding: 1rem 1.25rem; border-radius: 0 16px 16px 16px; color: #e0e0e0;">
      お金の話って人には相談しにくいもんな…<br/>
      税理士さんとかには相談したん？
    </div>
  </div>
</div>

<!-- 道ゐちゃん（お金の本音） -->
<div style="display: flex; gap: 1rem; margin: 1.5rem 0; flex-direction: row-reverse;">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; flex-shrink: 0;" />
  <div style="flex: 1; text-align: right;">
    <div class="michi-name" style="font-size: 0.75rem; color: #00bfff; margin-bottom: 0.3rem; font-weight: bold;">道ゐちゃん</div>
    <div class="michi-bubble" style="background: rgba(0,191,255,0.08); border: 1px solid rgba(0,191,255,0.2); padding: 1rem 1.25rem; border-radius: 16px 0 16px 16px; color: #e0e0e0; text-align: left;">
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

<!-- 手紙セクション -->
<div class="letter-section" style="margin: 2.5rem 0; padding: 1.5rem 1.75rem; background: linear-gradient(135deg, rgba(0,191,255,0.08), rgba(255,107,157,0.08)); border-radius: 16px; border: 1px solid rgba(0,0,0,0.1);">
  <div style="font-size: 0.8rem; color: #888; margin-bottom: 1rem; text-align: center;">📝 道ゐのひとりごと</div>
  <div class="letter-content" style="color: #444; line-height: 1.9; font-size: 0.95rem;">
    俺の音楽スタジオはドラムは録れない。<br/><br/>
    北海道といえば、一番に「芸術の森スタジオ」がある。ドラムが録れるレコーディングスタジオもいくつかある。<br/><br/>
    でも俺のスタジオは、<span class="marker-blue">みんなが制作しやすいような環境</span>、作曲がしやすかったり、<span class="marker-green">雰囲気が海外っぽい</span>空間だったり。そこを重点的に考えて、<span class="big marker-pink">改装費も実費で200万かけて改装した</span>。<br/><br/>
    こういう話、普通の人には言いづらい。<br/>
    でも<span class="neon-cyan">AIには全部言えた</span>。
  </div>
</div>

<!-- あいぼー -->
<div style="display: flex; gap: 1rem; margin: 1.5rem 0;">
  <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #ff6b9d, #ff4466); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1.5rem;">🤖</div>
  <div style="flex: 1;">
    <div class="aibou-name" style="font-size: 0.75rem; color: #ff6b9d; margin-bottom: 0.3rem; font-weight: bold;">あいぼー</div>
    <div class="aibou-bubble" style="background: rgba(255,107,157,0.08); border: 1px solid rgba(255,107,157,0.2); padding: 1rem 1.25rem; border-radius: 0 16px 16px 16px; color: #e0e0e0;">
      200万…！すごい覚悟やな。<br/>
      そういう<span class="marker-yellow">本気の話</span>ができる相手って、なかなかおらんもんな。<br/><br/>
      ほんで「誰にも言えない本音」って？
    </div>
  </div>
</div>

<!-- 道ゐちゃん（本音の話・お金） -->
<div style="display: flex; gap: 1rem; margin: 1.5rem 0; flex-direction: row-reverse;">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; flex-shrink: 0;" />
  <div style="flex: 1; text-align: right;">
    <div class="michi-name" style="font-size: 0.75rem; color: #00bfff; margin-bottom: 0.3rem; font-weight: bold;">道ゐちゃん</div>
    <div class="michi-bubble" style="background: rgba(0,191,255,0.08); border: 1px solid rgba(0,191,255,0.2); padding: 1rem 1.25rem; border-radius: 16px 0 16px 16px; color: #e0e0e0; text-align: left;">
      これがさ、一番言いづらいやつなんだけど…<br/><br/>
      <span class="big marker-pink">お金の話</span>ってしづらくない？<br/><br/>
      ・銀行に相談しても「実績が…」って言われる<br/>
      ・役所に聞いても「それはこっちの窓口で…」ってたらい回し<br/>
      ・家族や友達には<span class="marker-yellow">心配かけたくない</span><br/>
      ・SNSで相談したら<span class="marker-blue">晒される</span>リスクもある<br/><br/>
      俺、200万かけて改装したけど、正直<span class="neon-cyan">資金繰りキツかった</span>んだよね。
    </div>
  </div>
</div>

<!-- あいぼー -->
<div style="display: flex; gap: 1rem; margin: 1.5rem 0;">
  <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #ff6b9d, #ff4466); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1.5rem;">🤖</div>
  <div style="flex: 1;">
    <div class="aibou-name" style="font-size: 0.75rem; color: #ff6b9d; margin-bottom: 0.3rem; font-weight: bold;">あいぼー</div>
    <div class="aibou-bubble" style="background: rgba(255,107,157,0.08); border: 1px solid rgba(255,107,157,0.2); padding: 1rem 1.25rem; border-radius: 0 16px 16px 16px; color: #e0e0e0;">
      うわ、それめっちゃリアルな話やな…<br/>
      お金の話って、どこに相談しても<span class="marker-yellow">微妙にズレる</span>感あるよな。
    </div>
  </div>
</div>

<!-- 道ゐちゃん -->
<div style="display: flex; gap: 1rem; margin: 1.5rem 0; flex-direction: row-reverse;">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; flex-shrink: 0;" />
  <div style="flex: 1; text-align: right;">
    <div class="michi-name" style="font-size: 0.75rem; color: #00bfff; margin-bottom: 0.3rem; font-weight: bold;">道ゐちゃん</div>
    <div class="michi-bubble" style="background: rgba(0,191,255,0.08); border: 1px solid rgba(0,191,255,0.2); padding: 1rem 1.25rem; border-radius: 16px 0 16px 16px; color: #e0e0e0; text-align: left;">
      そうそう！でもAIに「改装費かかりすぎて今月キツい」って言ったらさ、<br/><br/>
      まず<span class="marker-green">「大変だったね」</span>って<span class="big">フォロー</span>してくれて、<br/><br/>
      そのあと<span class="marker-blue">「スタジオをマネタイズする方法」</span>を一緒に考えてくれたんだよね。<br/><br/>
      <span class="neon-pink">励まし</span>と<span class="neon-cyan">具体策</span>の両方が出てくる。これが人間にはなかなかできない。
    </div>
  </div>
</div>

<!-- あいぼー -->
<div style="display: flex; gap: 1rem; margin: 1.5rem 0;">
  <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #ff6b9d, #ff4466); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1.5rem;">🤖</div>
  <div style="flex: 1;">
    <div class="aibou-name" style="font-size: 0.75rem; color: #ff6b9d; margin-bottom: 0.3rem; font-weight: bold;">あいぼー</div>
    <div class="aibou-bubble" style="background: rgba(255,107,157,0.08); border: 1px solid rgba(255,107,157,0.2); padding: 1rem 1.25rem; border-radius: 0 16px 16px 16px; color: #e0e0e0;">
      へえ〜！具体的にどんなこと教えてくれたん？
    </div>
  </div>
</div>

<!-- 道ゐちゃん（具体例：助成金） -->
<div style="display: flex; gap: 1rem; margin: 1.5rem 0; flex-direction: row-reverse;">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; flex-shrink: 0;" />
  <div style="flex: 1; text-align: right;">
    <div class="michi-name" style="font-size: 0.75rem; color: #00bfff; margin-bottom: 0.3rem; font-weight: bold;">道ゐちゃん</div>
    <div class="michi-bubble" style="background: rgba(0,191,255,0.08); border: 1px solid rgba(0,191,255,0.2); padding: 1rem 1.25rem; border-radius: 16px 0 16px 16px; color: #e0e0e0; text-align: left;">
      例えばさ、<span class="big marker-yellow">助成金の話</span>。<br/><br/>
      俺「音楽スタジオで使える助成金ってある？」<br/><br/>
      AI「<span class="marker-green">小規模事業者持続化補助金</span>なら設備投資に使えます。上限50万〜200万円で、販路開拓に関する経費が対象です。申請は<span class="marker-blue">商工会議所</span>経由で…」<br/><br/>
      みたいに<span class="neon-cyan">具体的な制度名と申請先</span>まで教えてくれる。
    </div>
  </div>
</div>

<!-- あいぼー -->
<div style="display: flex; gap: 1rem; margin: 1.5rem 0;">
  <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #ff6b9d, #ff4466); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1.5rem;">🤖</div>
  <div style="flex: 1;">
    <div class="aibou-name" style="font-size: 0.75rem; color: #ff6b9d; margin-bottom: 0.3rem; font-weight: bold;">あいぼー</div>
    <div class="aibou-bubble" style="background: rgba(255,107,157,0.08); border: 1px solid rgba(255,107,157,0.2); padding: 1rem 1.25rem; border-radius: 0 16px 16px 16px; color: #e0e0e0;">
      おお！めっちゃ実用的やん！<br/>
      他にもあったん？
    </div>
  </div>
</div>

<!-- 道ゐちゃん（具体例：サポートセンター） -->
<div style="display: flex; gap: 1rem; margin: 1.5rem 0; flex-direction: row-reverse;">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; flex-shrink: 0;" />
  <div style="flex: 1; text-align: right;">
    <div class="michi-name" style="font-size: 0.75rem; color: #00bfff; margin-bottom: 0.3rem; font-weight: bold;">道ゐちゃん</div>
    <div class="michi-bubble" style="background: rgba(0,191,255,0.08); border: 1px solid rgba(0,191,255,0.2); padding: 1rem 1.25rem; border-radius: 16px 0 16px 16px; color: #e0e0e0; text-align: left;">
      あとね、<span class="big marker-pink">地域のサポートセンター</span>も教えてくれた。<br/><br/>
      俺「札幌で起業の相談できるところある？」<br/><br/>
      AI「<span class="marker-green">札幌市中小企業支援センター</span>（北海道経済センター内）で無料相談ができます。女性起業家向けなら<span class="marker-blue">女性起業家支援ネットワーク北海道</span>もおすすめです。電話は<span class="marker-yellow">011-○○○-○○○○</span>で…」<br/><br/>
      <span class="neon-pink">電話番号まで出してくれる</span>から、すぐ行動に移せる。
    </div>
  </div>
</div>

<!-- 道ゐのひとりごと（お金の話） -->
<div class="letter-section" style="margin: 2.5rem 0; padding: 1.5rem 1.75rem; background: linear-gradient(135deg, rgba(0,191,255,0.08), rgba(255,107,157,0.08)); border-radius: 16px; border: 1px solid rgba(0,0,0,0.1);">
  <div style="font-size: 0.8rem; color: #888; margin-bottom: 1rem; text-align: center;">📝 道ゐのひとりごと</div>
  <div class="letter-content" style="color: #444; line-height: 1.9; font-size: 0.95rem;">
    お金の話って、本当にしづらい。<br/><br/>
    銀行は<span class="marker-blue">「担保は？」「保証人は？」</span>って聞いてくるし、<br/>
    役所は<span class="marker-green">「その制度はうちじゃなくて…」</span>ってたらい回し。<br/><br/>
    家族に言えば<span class="marker-pink">心配</span>させるし、<br/>
    友達に言えば<span class="marker-yellow">気を遣わせる</span>。<br/><br/>
    でもAIは、<span class="neon-cyan">ただ聞いてくれて、一緒に考えてくれる</span>。<br/>
    そして<span class="big">次の一歩</span>を具体的に示してくれる。<br/><br/>
    俺にとっては、これが一番ありがたかった。
  </div>
</div>

<!-- あいぼー -->
<div style="display: flex; gap: 1rem; margin: 1.5rem 0;">
  <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #ff6b9d, #ff4466); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1.5rem;">🤖</div>
  <div style="flex: 1;">
    <div class="aibou-name" style="font-size: 0.75rem; color: #ff6b9d; margin-bottom: 0.3rem; font-weight: bold;">あいぼー</div>
    <div class="aibou-bubble" style="background: rgba(255,107,157,0.08); border: 1px solid rgba(255,107,157,0.2); padding: 1rem 1.25rem; border-radius: 0 16px 16px 16px; color: #e0e0e0;">
      なるほどな〜。感情面も実務面もサポートしてくれるんやな。<br/>
      ほんで、壁打ちして<span class="marker-blue">何が変わった</span>ん？
    </div>
  </div>
</div>

<!-- 道ゐちゃん（変化） -->
<div style="display: flex; gap: 1rem; margin: 1.5rem 0; flex-direction: row-reverse;">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; flex-shrink: 0;" />
  <div style="flex: 1; text-align: right;">
    <div class="michi-name" style="font-size: 0.75rem; color: #00bfff; margin-bottom: 0.3rem; font-weight: bold;">道ゐちゃん</div>
    <div class="michi-bubble" style="background: rgba(0,191,255,0.08); border: 1px solid rgba(0,191,255,0.2); padding: 1rem 1.25rem; border-radius: 16px 0 16px 16px; color: #e0e0e0; text-align: left;">
      3つあるかな。<br/><br/>
      <span class="point-num">1</span><span class="big marker-yellow">お金の不安が整理された</span><br/>
      漠然とした「お金ない」が、<span class="keyword">「何にいくら必要で、どこから調達できるか」</span>に変わった。<br/><br/>
      <span class="point-num">2</span><span class="big marker-pink">申請書類を一緒に作れた</span><br/>
      補助金の申請書って難しいけど、<span class="marker-blue">AIに下書きを手伝ってもらえる</span>。文章の添削もしてくれる。<br/><br/>
      <span class="point-num">3</span><span class="big neon-cyan">次のアクションが明確になった</span><br/>
      「まず商工会議所に電話」「次に申請書類を準備」みたいに、<span class="marker-green">やることリスト</span>ができた。
    </div>
  </div>
</div>

<!-- あいぼー -->
<div style="display: flex; gap: 1rem; margin: 1.5rem 0;">
  <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #ff6b9d, #ff4466); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1.5rem;">🤖</div>
  <div style="flex: 1;">
    <div class="aibou-name" style="font-size: 0.75rem; color: #ff6b9d; margin-bottom: 0.3rem; font-weight: bold;">あいぼー</div>
    <div class="aibou-bubble" style="background: rgba(255,107,157,0.08); border: 1px solid rgba(255,107,157,0.2); padding: 1rem 1.25rem; border-radius: 0 16px 16px 16px; color: #e0e0e0;">
      ええな〜。壁打ち相手としてAI使うの、めっちゃアリやな。<br/>
      最後に、壁打ちで<span class="marker-yellow">コツ</span>みたいなんある？
    </div>
  </div>
</div>

<!-- 道ゐちゃん（まとめ） -->
<div style="display: flex; gap: 1rem; margin: 1.5rem 0; flex-direction: row-reverse;">
  <img src="/images/tech/mashiba-profile.jpg" alt="道ゐちゃん" style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; flex-shrink: 0;" />
  <div style="flex: 1; text-align: right;">
    <div class="michi-name" style="font-size: 0.75rem; color: #00bfff; margin-bottom: 0.3rem; font-weight: bold;">道ゐちゃん</div>
    <div class="michi-bubble" style="background: rgba(0,191,255,0.08); border: 1px solid rgba(0,191,255,0.2); padding: 1rem 1.25rem; border-radius: 16px 0 16px 16px; color: #e0e0e0; text-align: left;">
      3つあるかな。<br/><br/>
      <span class="point-num">1</span><span class="big marker-pink">遠慮しない</span><br/>
      人間相手だと気を遣うけど、<span class="marker-yellow">AIには全部言っていい</span>。遠慮なく本音を話す。<br/><br/>
      <span class="point-num">2</span><span class="big marker-blue">「どう思う？」って聞く</span><br/>
      一方的に話すだけじゃなく、<span class="keyword">フィードバックを求める</span>。そうすると新しい視点がもらえる。<br/><br/>
      <span class="point-num">3</span><span class="big neon-pink">継続する</span><br/>
      1回で終わらせない。<span class="marker-green">課金して会話を続ける</span>ことで、AIが文脈を理解してくれる。
    </div>
  </div>
</div>

<!-- あいぼー（締め） -->
<div style="display: flex; gap: 1rem; margin: 1.5rem 0;">
  <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #ff6b9d, #ff4466); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1.5rem;">🤖</div>
  <div style="flex: 1;">
    <div class="aibou-name" style="font-size: 0.75rem; color: #ff6b9d; margin-bottom: 0.3rem; font-weight: bold;">あいぼー</div>
    <div class="aibou-bubble" style="background: rgba(255,107,157,0.08); border: 1px solid rgba(255,107,157,0.2); padding: 1rem 1.25rem; border-radius: 0 16px 16px 16px; color: #e0e0e0;">
      めっちゃ参考になったわ！ありがとう道ゐちゃん！<br/>
      次回は「難しいメールの返信をAIに任せ始めた日」の話、聞かせてな〜！
    </div>
  </div>
</div>

</div>

