# イントロアニメーション実装コード

イントロ画面からトップページへの遷移を実装するためのコードです。

---

## 📁 ファイル構成

### 1. IntroAnimation.tsx（コンポーネント）

```tsx
import { useEffect } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  useEffect(() => {
    console.log('🎬 IntroAnimation mounted!');
    // 2.5秒後にイントロ終了
    const timer = setTimeout(() => {
      console.log('✅ Intro complete!');
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  console.log('🎨 Rendering IntroAnimation');

  return (
    <div className="intro-overlay">
      {/* イントロ動画 */}
      <video
        autoPlay
        muted
        playsInline
        className="intro-video"
      >
        <source src="/images/into3.mp4" type="video/mp4" />
      </video>

      {/* MASHROOMロゴ（動画の上に重ねる） */}
      <div className="intro-logo">
        <img
          src="/images/MASHROOM_Logo.png"
          alt="MASHROOM"
          className="intro-logo-image"
        />
      </div>
    </div>
  );
};
```

---

### 2. App.tsx（使用例）

```tsx
import { useState } from 'react';
import { IntroAnimation } from './IntroAnimation';
import { LandingPage } from './LandingPage';

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    // デバッグモードではイントロをスキップ
    if (typeof window !== 'undefined' && window.location.hash === '#debug-sticky') {
      return false;
    }
    
    // 本番用: sessionStorageで一度だけ表示
    if (typeof window !== 'undefined') {
      const played = sessionStorage.getItem('intro-played');
      return !played; // 未再生ならtrue、再生済みならfalse
    }
    
    return true; // 初回は表示
  });

  const handleIntroComplete = () => {
    setShowIntro(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('intro-played', 'true');
    }
  };

  return (
    <>
      {/* イントロアニメーション */}
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      {/* メインコンテンツ（イントロ中はフェードイン待ち） */}
      <div className={showIntro ? 'intro-content-fade' : ''}>
        {!showIntro && <LandingPage onEnter={handleEnter} lastReadPost={lastReadPost} />}
      </div>
    </>
  );
}
```

---

### 3. CSS（global.css）

```css
/* ===== INTRO ANIMATION ===== */
.intro-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  pointer-events: none;
  background: transparent;
  animation: intro-overlay-fadeout 2.5s ease-out forwards;
}

.intro-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 10000;
  opacity: 1;
}

.intro-logo {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10001;
  opacity: 0;
  animation: intro-logo-appear 2.5s linear forwards;
}

.intro-logo-image {
  width: 600px;
  height: auto;
  display: block;
}

/* アニメーション定義 */
@keyframes intro-overlay-fadeout {
  0% {
    opacity: 1;
    visibility: visible;
    z-index: 9999;
  }
  75% {
    opacity: 1;
    visibility: visible;
    z-index: 9999;
  }
  99% {
    opacity: 0;
    visibility: visible;
    z-index: 9999;
  }
  100% {
    opacity: 0;
    visibility: hidden;
    z-index: -1;
  }
}

@keyframes intro-logo-appear {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
  }
  32% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  56% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  68% {
    opacity: 0.7;
    transform: translate(-50%, -50%) scale(1.1);
  }
  80% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.2);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.2);
  }
}

/* メインコンテンツのフェードイン（背景は除外） */
.intro-content-fade {
  /* 必要に応じてスタイルを追加 */
}

.intro-content-fade > * {
  /* 必要に応じてスタイルを追加 */
}

/* prefers-reduced-motion 対応 */
@media (prefers-reduced-motion: reduce) {
  .intro-overlay,
  .intro-background,
  .intro-logo,
  .intro-light {
    animation: none !important;
    opacity: 0;
  }

  .intro-content-fade {
    animation: none !important;
    opacity: 1;
  }
}
```

---

## 🔧 実装のポイント

### 1. タイミング制御
- **2.5秒**でイントロアニメーションが完了
- `setTimeout`で`onComplete`コールバックを呼び出し

### 2. セッション管理
- `sessionStorage`を使用して、一度再生したら次回からスキップ
- キー: `'intro-played'`
- 値: `'true'`

### 3. アニメーション
- **オーバーレイ**: 2.5秒でフェードアウト
- **ロゴ**: 
  - 0-32%: フェードイン
  - 32-56%: 表示維持
  - 56-68%: スケールアップ開始
  - 68-80%: フェードアウト + スケールアップ
  - 80-100%: 完全に非表示

### 4. z-index管理
- イントロオーバーレイ: `z-index: 9999`
- 動画: `z-index: 10000`
- ロゴ: `z-index: 10001`
- 完了後: `z-index: -1`（完全に非表示）

### 5. アクセシビリティ
- `prefers-reduced-motion`に対応
- アニメーション無効時は即座に非表示

---

## 📝 使用する画像・動画

- **イントロ動画**: `/images/into3.mp4`
- **ロゴ画像**: `/images/MASHROOM_Logo.png`

---

## 🎯 動作フロー

1. ページ読み込み時、`showIntro`が`true`の場合、`IntroAnimation`を表示
2. イントロ動画が自動再生開始
3. ロゴがアニメーションで表示
4. 2.5秒後、`onComplete`が呼ばれる
5. `showIntro`が`false`になり、イントロが非表示
6. `sessionStorage`に`'intro-played': 'true'`を保存
7. メインコンテンツ（LandingPage）が表示される
8. 次回訪問時は、`sessionStorage`をチェックしてイントロをスキップ

---

## 🔍 デバッグモード

URLに`#debug-sticky`がある場合、イントロをスキップします。

```tsx
if (typeof window !== 'undefined' && window.location.hash === '#debug-sticky') {
  return false; // イントロをスキップ
}
```
