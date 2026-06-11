# Version History - MASHROOM.LAB

## バージョン管理について

このファイルは、重要なマイルストーンのバージョンを記録します。
特定のバージョンに戻したい場合は、Gitで該当のコミットをチェックアウトしてください。

---

## V8.2 - 2026.01.XX

### 状態
✅ **安定版・推奨**

### 特徴
- グリッドモードとリストモードの完全分離実装
- グリッドモード: Masonryレイアウト、画像メイン、スクロールパララックス
- リストモード: System Log & Data Table風デザイン、カテゴリー色分け
- スムーズなフィルタリングとアニメーション
- 左サイドメニューにグリッド/リスト切り替えボタン追加

### 主な実装
- HTML構造の完全分離（`#article-grid` / `#article-list`）
- JavaScript での viewMode 管理
- CSS の完全分離（相互影響なし）

### このバージョンに戻す方法

#### Gitを使う場合（推奨）
```bash
# コミットハッシュを確認
git log --oneline | grep "V8.2"

# 該当バージョンに戻る
git checkout <commit-hash>

# または、タグが付いている場合
git checkout v8.2
```

#### 手動で戻す場合
1. このVERSION_HISTORY.mdを参照
2. `src/pages/gear.astro` を該当バージョンの状態に復元

---

## V8.4 - 2026.01.07

### 状態
✅ **最新版・開発中**

### 特徴
- **Signal Flow Three.js実装**: WebGLベースのインタラクティブなパーティクルシステム
- **Bento Grid風レイアウト**: 雑誌風のリズムのある記事グリッド表示
- **動的サイズ計算**: インデックスベースの自動レイアウトパターン生成
- **パフォーマンス最適化**: 遅延読み込み、GPU加速、レスポンシブ対応

### 主な実装
- `SignalFlowThree.js`: Three.jsベースの3Dパーティクルシステム
- `SignalFlowLazy.astro`: Intersection Observerによる遅延読み込み
- `getBentoGridSize()`: 動的なグリッドサイズ計算関数
- モバイルレスポンシブ対応（全カードをフル幅に統一）

### 技術的改善
- GPU加速による60fps維持
- デバイスピクセル比の最適化（最大2）
- Canvas 2Dフォールバック実装
- `grid-auto-flow: dense`による空きスペース最適化

### このバージョンに戻す方法

#### Gitを使う場合（推奨）
```bash
# コミットハッシュを確認
git log --oneline | grep "V8.4"

# 該当バージョンに戻る
git checkout <commit-hash>

# または、タグが付いている場合
git checkout v8.4
```

---

## 過去のバージョン

### V8.3
- Signal Flow Three.js実装開始
- 遅延読み込み機能追加

### V8.2

### V8.1
- リストモード実装開始
- System Log風デザインの初期実装

### V8.0
- グリッド表示の実装
- フィルタリング機能

---

## メモ

- 各バージョンで重要な変更があった場合は、必ずこのファイルを更新してください
- Gitタグを付けることを推奨します: `git tag -a v8.2 -m "Version 8.2: Stable Grid/List separation"`