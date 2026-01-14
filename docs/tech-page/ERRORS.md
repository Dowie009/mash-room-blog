# Tech Page エラーと対処法

## よくあるエラーと解決方法

### 1. カードが表示されない

**症状**: ランダム整列モードでカードが一瞬チラつくだけで表示されない

**原因**: 
- 仮想スクロールの実装で、カードの表示条件が厳しすぎた
- `maxVisibleCards`の計算が`spY`の定義前に実行されていた

**対処法** (v2.6.1):
```javascript
// ❌ 悪い例：spYの定義前に使用
const visibleRows = Math.ceil(viewportHeight / spY) + 4;
const spY = 400;

// ✅ 良い例：すべてのカードを表示
card.classList.add('formation-mode');
card.style.display = 'block';
card.style.opacity = '1';
card.style.visibility = 'visible';
```

**解決策**: 仮想スクロールを一旦無効化し、すべてのカードを表示するように変更

---

### 2. カーソルがカクつく（低FPS）

**症状**: ランダム整列モードやカテゴリーフィルタリング時にカーソルFPSが20-40に低下

**原因**:
- メインの3Dアニメーションループ（`updateTunnel()`）とカーソルアニメーションが同じRAFで実行されていた
- 3Dアニメーションが重い場合、カーソルの更新が遅延

**対処法** (v2.5.2):
```javascript
// ✅ 独立したRAFループでカーソルをアニメーション
let cursorRafId = null;

function animateCursor() {
  // カーソル専用のアニメーション
  cursorRafId = requestAnimationFrame(animateCursor);
}

// メインアニメーションとは独立
animateCursor();
```

**解決策**: カーソル用の独立した`requestAnimationFrame`ループを作成

---

### 3. `categoryColors is not defined`

**症状**: JavaScriptで`categoryColors`が未定義エラー

**原因**: Astroのサーバーサイド変数をクライアント側で使用しようとした

**対処法**:
```astro
<!-- ✅ Astro側でdefine:varsを使用 -->
<script define:vars={{ categoryColors, categoryLabels, articlesData }}>
  // クライアント側で使用可能
  const data = window.TECH_PAGE_DATA;
</script>
```

**解決策**: `define:vars`を使用してサーバーサイドデータをクライアントに渡す

---

### 4. カテゴリーフィルタリングで他のカテゴリーのカードが混ざる

**症状**: CSSカテゴリーを選択したのにAIカードが表示される

**原因**: フィルタリングロジックが不十分（`display: none`だけで非表示にしていた）

**対処法** (v2.2.8):
```javascript
// ✅ 厳密なフィルタリング
if (isFiltered) {
  cardElements.forEach(card => {
    const cardCat = card.dataset.cat;
    if (cardCat === selectedCategory) {
      card.style.display = 'block';
      card.style.pointerEvents = 'auto';
      card.style.opacity = '1';
    } else {
      card.style.display = 'none';
      card.style.opacity = '0';
      card.style.pointerEvents = 'none';
      // z-indexで奥に移動
      gsap.set(card, { z: -5000 });
    }
  });
}
```

**解決策**: 非表示カードを`z: -5000`に移動し、`pointer-events: none`を設定

---

### 5. アーカイブグリッドモードでカーソルがカクつく

**症状**: アーカイブグリッドモード（リスト表示）でカーソルFPSが低下

**原因**: アーカイブグリッドモードでも3Dアニメーションが動作していた可能性

**対処法**: 
- アーカイブグリッドモード時は`updateTunnel()`を停止
- カーソルは独立したRAFで動作するため、理論的には影響しないはず
- デバッグモード（`D`キー）でFPSを確認

---

### 6. ワンちゃんモードでカードが表示されない（v2.6.0）

**症状**: ワンちゃんをクリックしてもカードが一瞬チラつくだけで表示されない

**原因**: 
- 仮想スクロールの実装で、初期表示時にカードが`display: none`になっていた
- `updateVisibleCardsOnScroll`が正しく動作していなかった

**対処法** (v2.6.1):
```javascript
// ✅ すべてのカードを表示（仮想スクロール無効化）
displayCards.forEach((card, idx) => {
  card.classList.add('formation-mode');
  card.style.display = 'block';
  card.style.opacity = '1';
  card.style.visibility = 'visible';
  // ... 位置設定
});
```

**解決策**: 仮想スクロールを一旦無効化し、表示するカードのみ処理（最大12枚）

---

### 7. 座標表示が`X:0 | Y:0`のまま

**症状**: カーソル座標が更新されない

**原因**: 座標更新のイベントリスナーが正しく動作していない

**対処法**:
```javascript
// ✅ マウス移動時に座標を更新
window.addEventListener('mousemove', (e) => {
  if (coordDisplay) {
    coordDisplay.textContent = `X:${e.clientX} | Y:${e.clientY}`;
  }
});
```

---

### 8. SVGボーダーアニメーションが表示されない

**症状**: カードの周りの光るアニメーションが表示されない

**原因**: 
- `z-index`の問題
- `mask-composite`のブラウザ互換性

**対処法** (v2.3.x):
```javascript
// ✅ SVGを使用したアニメーション
<svg class="card-border-animated">
  <rect class="border-stroke" 
        stroke-dasharray="..." 
        stroke-dashoffset="..." />
</svg>
```

**解決策**: CSSの`::before`疑似要素からSVGアニメーションに変更

---

## デバッグ方法

### デバッグモードの有効化
`D`キーを押すと、以下の情報が表示されます：
- カーソルFPS
- 更新時間
- 最大更新時間
- アクティブなRAF数
- 3Dアニメーション状態

### コンソールログ
- `[TECH DEBUG]`: ページ初期化情報
- `[CATEGORY DEBUG]`: カテゴリー分布情報
- `[CURSOR DEBUG]`: カーソルFPS警告（FPS < 30）

### パフォーマンス測定
```javascript
// FPS測定
let lastTime = performance.now();
let frameCount = 0;

function measureFPS() {
  frameCount++;
  const currentTime = performance.now();
  if (currentTime >= lastTime + 1000) {
    const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
    console.log(`FPS: ${fps}`);
    frameCount = 0;
    lastTime = currentTime;
  }
  requestAnimationFrame(measureFPS);
}
```

## トラブルシューティングチェックリスト

- [ ] `gsap.registerPlugin(ScrollTrigger, Flip)` が呼ばれているか
- [ ] `window.TECH_PAGE_DATA` が正しく設定されているか
- [ ] `animationFrameId` が適切にクリーンアップされているか
- [ ] カーソルの`z-index`が十分に高いか（`99999`）
- [ ] カードの`display`、`opacity`、`visibility`が正しく設定されているか
- [ ] SVGボーダーアニメーションが停止されているか（ランダム整列モード時）
