# GEMINI HTML → Astro 移行 クイックガイド

## 🎯 今すぐやること

1. **`gemini-html.html` にHTMLコードを貼り付ける**
2. **「HTMLコードを処理して、Astroに移行して」と伝える**

以上！自動的に処理します。

---

## 📋 処理内容

✅ HTMLコードを読み取る  
✅ 画像パスを抽出して既存素材とマッピング  
✅ Layout.astro にGSAP/Matter.jsを追加  
✅ セクションごとにコンポーネント分割（Hero, HorizontalScroll, NewPost, Footer）  
✅ スクリプトを各コンポーネントに配置  
✅ 画像パスを `/images/` 形式に統一  

---

## 📁 生成されるファイル

```
src/
├── layouts/
│   └── Layout.astro          # GSAP/Matter.js読み込み追加
├── components/
│   ├── Hero.astro            # 新規作成
│   ├── HorizontalScroll.astro # 新規作成
│   ├── NewPost.astro         # 新規作成
│   └── Footer.astro           # 新規作成
└── pages/
    └── index.astro           # 更新（全コンポーネントを組み合わせ）
```

---

## ⚡ 所要時間

約5-10分（HTMLコードの複雑さによる）

---

詳細は `ASTRO_MIGRATION_FINAL_STEPS.md` を参照してください。
