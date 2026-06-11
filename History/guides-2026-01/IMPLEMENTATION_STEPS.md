# Signal Flow Three.js 実装ステップ

## 🚀 実装手順

### Step 1: 依存関係のインストール

```bash
cd "/Users/dowie009/Documents/01　真柴道ゐ/Active/blog"
npm install three
npm install @types/three --save-dev
```

### Step 2: ファイルの配置確認

以下のファイルが正しく配置されているか確認：

- ✅ `src/components/SignalFlowThree.js` - Three.js実装クラス
- ✅ `src/components/SignalFlowLazy.astro` - 遅延読み込みコンポーネント
- ✅ `SIGNAL_FLOW_REFACTOR_PLAN.md` - 詳細計画書

### Step 3: gear.astroの更新

`gear.astro`のSignal Flowセクションを置き換え：

**変更前:**
```astro
<div class="w-full relative h-[200px] border-t border-b border-[var(--line-color)]">
  <canvas id="network-canvas" class="network-canvas"></canvas>
  <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
    <span class="font-tech text-6xl text-gray-200/50 font-bold">SIGNAL_FLOW</span>
  </div>
</div>
```

**変更後:**
```astro
<div class="w-full relative border-t border-b border-[var(--line-color)]">
  <SignalFlowLazy client:load />
</div>
```

そして、`gear.astro`の冒頭にインポートを追加：
```astro
import SignalFlowLazy from '../components/SignalFlowLazy.astro';
```

### Step 4: 既存のCanvas 2Dコードの削除

`gear.astro`内の既存の`network-canvas`関連のJavaScriptコードを削除：

- `initNetwork()` 関数
- `drawNetwork()` 関数
- マウスイベント設定

（`SignalFlowLazy.astro`にフォールバック実装が含まれているため）

### Step 5: テストと確認

1. **開発サーバー起動**
   ```bash
   npm run dev
   ```

2. **動作確認**
   - Signal Flowセクションが正しく表示される
   - パーティクルが動いている
   - マウスインタラクションが機能している
   - ノード接続線が表示される

3. **パフォーマンス確認**
   - Chrome DevTools > Performance で60fpsを維持
   - LighthouseでPerformanceスコアが90+を維持

### Step 6: オプション - オーディオビジュアライザーの追加

必要に応じて、`SignalFlowThree.js`にオーディオ機能を追加：

```javascript
// SignalFlowThree.js に追加
async initAudio() {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    
    // サイレントオーディオ生成
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    gainNode.gain.value = 0; // ミュート
    
    oscillator.connect(gainNode);
    gainNode.connect(analyser);
    analyser.connect(audioContext.destination);
    
    oscillator.start();
    
    this.audioAnalyser = analyser;
    this.audioDataArray = new Uint8Array(analyser.frequencyBinCount);
  } catch (error) {
    console.warn('Audio API not available:', error);
  }
}

// パーティクル更新時にオーディオデータを反映
updateParticles() {
  // ... 既存のコード ...
  
  // オーディオデータ取得
  if (this.audioAnalyser) {
    this.audioAnalyser.getByteFrequencyData(this.audioDataArray);
    
    // パーティクルサイズに反映
    for (let i = 0; i < this.config.particleCount; i++) {
      const frequency = this.audioDataArray[i % this.audioDataArray.length];
      const sizeMultiplier = 1 + (frequency / 255) * 1.5;
      // サイズ更新処理
    }
  }
}
```

---

## 📊 期待される改善点

### ビジュアル
- ✅ 3D空間でのパーティクル表現
- ✅ より滑らかなインタラクション
- ✅ 深度感のある接続線

### パフォーマンス
- ✅ GPU加速による高速レンダリング
- ✅ 遅延読み込みで初期ロード時間短縮
- ✅ デバイス性能に応じた最適化

### 機能
- ✅ より多くのパーティクル（30 → 60-80）
- ✅ よりリッチなインタラクション
- ✅ 将来的なオーディオ統合の基盤

---

## 🔧 トラブルシューティング

### Three.jsが読み込まれない
- `npm install three` が完了しているか確認
- ブラウザコンソールでエラーを確認
- フォールバック（Canvas 2D）が動作するか確認

### パフォーマンスが低下
- `config.particleCount` を減らす
- `renderer.setPixelRatio(1)` に変更
- 接続線の描画頻度を減らす

### マウスインタラクションが反応しない
- イベントリスナーの`passive: true`を確認
- マウス位置の正規化が正しいか確認

---

## 📝 次のステップ（Phase 2）

1. **弾けるエフェクトの実装**
   - クリック時の爆発エフェクト
   - パーティクルが分散するアニメーション

2. **オーディオビジュアライザーの統合**
   - 波形の可視化
   - 周波数帯域の反映

3. **カスタマイズオプション**
   - パーティクル数の動的調整
   - カラーパレットの変更
   - アニメーション速度の調整
