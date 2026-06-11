# デバッグ確認チェックリスト

## ⚠️ アニメーションが反映されない時の確認手順

### ステップ1: ブラウザの強制リロード
1. **Chrome/Safari**: `Cmd + Shift + R` (Mac) または `Ctrl + Shift + R` (Windows)
2. **開発者ツールを開く**: `Cmd + Option + I` (Mac) または `F12`
3. **Networkタブを開いて「Disable cache」にチェック**
4. ページをリロード

### ステップ2: 開発サーバーの再起動
```bash
# ターミナルで
# 1. 現在のサーバーを止める (Ctrl + C)
# 2. 再起動
cd "/Users/dowie009/Documents/01　真柴道ゐ/Active/blog"
npm run dev
```

### ステップ3: ブラウザコンソールでデバッグログを確認
1. 開発者ツールの「Console」タブを開く
2. 以下のログが表示されるか確認：
   - `[DEBUG] navTrigger and nav found, setting up ScrollTrigger`
   - `[DEBUG] ScrollTrigger onEnter triggered` (スクロール時)
   - `[DEBUG] glitchInEffect: starting animation`
   - `[DEBUG] Setting up mouse events for canvas`

### ステップ4: エラーの確認
- コンソールに**赤いエラーメッセージ**がないか確認
- エラーがあれば、その内容をメモ

### ステップ5: 要素の存在確認
コンソールに以下を入力して実行：
```javascript
// メニュー要素の確認
document.querySelector("#nav-trigger")
document.querySelector("#morph-nav")

// Canvas要素の確認
document.getElementById("network-canvas")
```

## 📝 問題報告時のテンプレート

以下の形式で報告してください：

```
【アニメーション問題報告】

1. 何が動いていないか：
   [具体的な動作の説明]

2. ブラウザコンソールのログ：
   [表示されたログ、またはエラーメッセージをコピペ]

3. 実行した確認作業：
   - [ ] 強制リロード (Cmd+Shift+R)
   - [ ] 開発サーバーの再起動
   - [ ] Networkタブで「Disable cache」にチェック
   - [ ] コンソールでエラー確認

4. ブラウザ情報：
   - [ブラウザ名とバージョン]
   - [OS]

5. 期待する動作：
   [どうなってほしいか]
```

## 🔍 よくある原因と対処法

### 原因1: ブラウザキャッシュが強力
**対処法**: Networkタブで「Disable cache」を有効にする

### 原因2: 開発サーバーが古いバージョンを配信
**対処法**: サーバーを完全に再起動（Ctrl+C で停止してから再起動）

### 原因3: 要素が見つからない
**対処法**: コンソールで `document.querySelector("#要素ID")` を実行して確認

### 原因4: スクリプトの実行タイミング
**対処法**: `window.addEventListener('load')` で囲まれているか確認

## 🚨 緊急時の対処

どうしても動かない場合：

1. **ブラウザの完全再起動**
2. **シークレット/プライベートモードで試す**
3. **別のブラウザで試す**
4. **キャッシュを完全にクリア**:
   - Chrome: 設定 > プライバシーとセキュリティ > 閲覧履歴データの削除
   - Safari: 履歴を消去 > 「すべての履歴」を選択
