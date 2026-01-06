# デプロイ手順

## 1. Gitリポジトリの初期化

```bash
# プロジェクトディレクトリに移動
cd "/Users/dowie009/Documents/01　真柴道ゐ/06 mash-room-blog"

# Gitリポジトリを初期化
git init

# 初回コミット
git add .
git commit -m "Initial commit: Astro v5 blog project"
```

## 2. GitHubリポジトリの作成とプッシュ

### GitHubでリポジトリを作成

1. [GitHub](https://github.com)にログイン
2. 右上の「+」→「New repository」をクリック
3. リポジトリ名を入力（例: `mash-room-blog`）
4. **Public** または **Private** を選択
5. 「Initialize this repository with a README」は**チェックしない**（既にREADMEがあるため）
6. 「Create repository」をクリック

### ローカルリポジトリをGitHubに接続

```bash
# GitHubで作成したリポジトリのURLを追加（例）
git remote add origin https://github.com/あなたのユーザー名/mash-room-blog.git

# メインブランチを設定
git branch -M main

# GitHubにプッシュ
git push -u origin main
```

## 3. Vercelへのデプロイ

### 方法1: Vercel CLIを使用（推奨）

```bash
# Vercel CLIをインストール（初回のみ）
npm i -g vercel

# Vercelにログイン
vercel login

# プロジェクトディレクトリでデプロイ
vercel

# 本番環境にデプロイ
vercel --prod
```

### 方法2: Vercel Web UIを使用

1. [Vercel](https://vercel.com)にログイン（GitHubアカウントで連携推奨）
2. 「Add New...」→「Project」をクリック
3. GitHubリポジトリを選択（またはインポート）
4. プロジェクト設定：
   - **Framework Preset**: Astro
   - **Root Directory**: `./`（そのまま）
   - **Build Command**: `npm run build`（自動検出される）
   - **Output Directory**: `dist`（自動検出される）
5. 「Deploy」をクリック

### 環境変数（Firebase使用時）

Firebaseを使用する場合は、Vercelのプロジェクト設定で環境変数を追加：

1. Vercelダッシュボード → プロジェクト → Settings → Environment Variables
2. 以下の変数を追加：
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`

## 4. カスタムドメインの設定（オプション）

1. Vercelダッシュボード → プロジェクト → Settings → Domains
2. ドメインを追加
3. DNS設定を更新（Vercelの指示に従う）

## 5. 自動デプロイの設定

GitHubリポジトリと連携している場合、以下の操作で自動的にデプロイされます：

- `main`ブランチへのプッシュ → 本番環境に自動デプロイ
- 他のブランチへのプッシュ → プレビュー環境に自動デプロイ

## トラブルシューティング

### ビルドエラーが発生する場合

1. Vercelのビルドログを確認
2. ローカルで `npm run build` が成功するか確認
3. Node.jsのバージョンを確認（Vercelの設定で指定可能）

### 画像が表示されない場合

1. `public/images/` フォルダに画像が存在するか確認
2. 画像パスが `/images/ファイル名.png` になっているか確認
