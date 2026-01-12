---
title: Astro Content Collectionsで記事管理システムを構築した話
date: 2026-01-10
category: astro
thumbnail: /images/Blog_00.png
description: Astro Content AstroのContent Collectionsを使って、型安全な記事管理システムを構築した実装メモで記事管理システムを構築した話
tags: ['Astro', 'Content Collections', 'TypeScript', 'ブログ構築']
draft: false
---

## はじめに

ブログ記事を管理するシステムが欲しくなり、AstroのContent Collectionsを導入しました。

## やったこと

### 1. Content Collectionの設定

`src/content/config.ts`でスキーマを定義。Zodを使って型安全に。

### 2. 動的ルーティング

`/tech/[slug].astro`で記事ページを自動生成。

### 3. PostLayoutで一元管理

Geminiのアドバイスを採用し、デザインは`PostLayout.astro`に集約。

## 良かった点

- 型安全でエラーが事前に分かる
- Markdownで書けるので執筆に集中できる
- デザイン変更が一箇所で済む

## まとめ

Content Collectionsは小〜中規模のブログに最適。セットアップも簡単でした。

---

この記事は MASHROOM STUDIO の開発メモです。

