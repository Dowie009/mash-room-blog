# Signal Flow セクション Three.js リファクタリング計画

## 📊 現状分析

### 現在の実装
- **技術スタック**: Canvas 2D API
- **パーティクル数**: 30個
- **インタラクション**: マウス追従（距離ベース）
- **パフォーマンス**: 軽量（2D Canvas）
- **レンダリング**: requestAnimationFrame ベース

### 課題
- ビジュアル表現の制限（2Dのみ）
- よりリッチなエフェクトを追加したい
- オーディオビジュアライザー風の波形表現を追加したい

---

## 🎯 目標アーキテクチャ

### Phase 1: 軽量Three.js基盤の構築
- Three.js Core のみ使用（OrbitControls、GUI等は除外）
- 遅延読み込み（Intersection Observer）
- パフォーマンス最適化（Instanced Rendering）

### Phase 2: インタラクティブパーティクルシステム
- マウスインタラクション
- ノード接続エフェクト
- 弾ける/爆発エフェクト

### Phase 3: オーディオビジュアライザー統合
- Web Audio API（軽量）
- 波形ビジュアライゼーション
- サイレントオーディオ生成（外部音源不要）

---

## 🏗️ 実装アプローチ

### 1. パフォーマンス最適化戦略

#### A. Three.js の軽量化
```javascript
// 必要な部分のみインポート
import { 
  Scene, 
  WebGLRenderer, 
  PerspectiveCamera, 
  Color,
  BufferGeometry,
  PointsMaterial,
  Points,
  Vector3
} from 'three';

// OrbitControls等の重いコンポーネントは使用しない
```

#### B. 遅延読み込み
```javascript
// Intersection Observerでビューポートに入った時のみ初期化
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    initThreeScene();
    observer.disconnect();
  }
}, { rootMargin: '50px' });
```

#### C. パーティクル数最適化
- **デフォルト**: 50-80個（現在の30個から増加可能）
- **パフォーマンスモード**: デバイス性能に応じて調整
- **InstancedMesh**: GPU加速による大量パーティクル描画

### 2. インタラクティブ機能

#### A. マウスインタラクション
```javascript
// マウス位置取得
const mouse = new Vector3();
window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

// パーティクルがマウスに反応
particles.forEach(particle => {
  const distance = particle.position.distanceTo(mouse);
  if (distance < threshold) {
    // 弾ける/反発エフェクト
    particle.velocity.add(repulsionForce);
  }
});
```

#### B. ノード接続エフェクト
```javascript
// 近接ノード間に線を描画
const lineMaterial = new LineBasicMaterial({ 
  color: 0x007aff, 
  opacity: 0.3, 
  transparent: true 
});

// 距離ベースで線を生成
particles.forEach((p1, i) => {
  particles.slice(i + 1).forEach(p2 => {
    const distance = p1.position.distanceTo(p2.position);
    if (distance < connectionDistance) {
      // 線を描画
      createConnectionLine(p1, p2);
    }
  });
});
```

### 3. オーディオビジュアライザー（軽量実装）

#### A. サイレントオーディオ生成（外部音源不要）
```javascript
// AudioContextを使用して生成された音でビジュアライゼーション
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
const oscillator = audioContext.createOscillator();
const gainNode = audioContext.createGain();

// 音をミュート（視覚のみ）
gainNode.gain.value = 0;

oscillator.connect(gainNode);
gainNode.connect(analyser);
analyser.connect(audioContext.destination);

// 周波数データを取得
const dataArray = new Uint8Array(analyser.frequencyBinCount);
analyser.getByteFrequencyData(dataArray);

// パーティクルサイズ/位置に反映
particles.forEach((particle, i) => {
  const frequency = dataArray[i % dataArray.length];
  particle.scale = 1 + (frequency / 255) * 2;
});
```

#### B. 波形ビジュアライゼーション
```javascript
// 底部に波形を描画
const waveformGeometry = new BufferGeometry();
const waveformMaterial = new LineBasicMaterial({ 
  color: 0x007aff, 
  linewidth: 2 
});

// 波形データを更新
function updateWaveform() {
  analyser.getByteTimeDomainData(dataArray);
  // 波形の頂点を更新
  waveformGeometry.setAttribute('position', 
    new Float32BufferAttribute(waveformVertices, 3)
  );
}
```

---

## 📦 依存関係の追加

```bash
npm install three
npm install @types/three --save-dev
```

---

## 🔄 段階的実装ステップ

### Step 1: 基盤構築（軽量Three.js）
1. Three.jsの最小限のインポート
2. 基本的なシーン/カメラ/レンダラーのセットアップ
3. 遅延読み込みの実装

### Step 2: パーティクルシステム
1. 基本的なパーティクル生成
2. アニメーションループ
3. リサイズ対応

### Step 3: インタラクション追加
1. マウス追従
2. ノード接続線
3. 弾けるエフェクト

### Step 4: オーディオ統合（オプション）
1. AudioContextの初期化
2. サイレントオーディオ生成
3. 波形ビジュアライゼーション

---

## 📈 パフォーマンス指標

### 目標値
- **Lighthouse Performance**: 90+（現状維持）
- **FPS**: 60fps（デスクトップ）、30fps以上（モバイル）
- **バンドルサイズ増加**: +50KB以下（gzipped）

### 最適化テクニック
1. **Dynamic Import**: Three.jsを動的インポート
2. **Instanced Rendering**: GPU加速
3. **Level of Detail (LOD)**: 距離に応じた品質調整
4. **Request Idle Callback**: バックグラウンドでの初期化

---

## 🎨 デザイン仕様

### カラーパレット
- **パーティクル**: `#007aff` (現在のアクセントカラー)
- **接続線**: `rgba(0, 122, 255, 0.3)`
- **波形**: `#007aff`
- **背景**: 透明（既存の背景と統合）

### アニメーション
- **滑らかな動き**: Easing関数使用
- **物理演算**: 軽量な物理エンジン（またはシンプルなベロシティ）

---

## ⚠️ フォールバック戦略

### 低性能デバイス
- Three.jsの初期化に失敗した場合、Canvas 2Dにフォールバック
- パーティクル数を自動調整

### WebGL未対応ブラウザ
- Canvas 2D実装を維持
- 機能劣化なしで動作

---

## 📝 実装の優先順位

1. **高優先度**: 基盤構築、基本パーティクル、マウスインタラクション
2. **中優先度**: ノード接続、弾けるエフェクト
3. **低優先度**: オーディオビジュアライザー（追加機能）
