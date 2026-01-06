# API設計ドキュメント - ブログ管理システム

オリジナルアプリからブログを操作するためのAPI仕様書

---

## 📋 目次

1. [サムネイル画像の種類とレイアウト](#サムネイル画像の種類とレイアウト)
2. [API エンドポイント](#api-エンドポイント)
3. [データ構造](#データ構造)
4. [実装例](#実装例)

---

## 🖼️ サムネイル画像の種類とレイアウト

### 3種類のレイアウトパターン

#### 1. 横長（Landscape）
- **アスペクト比**: 16:9
- **推奨サイズ**: 1600x900px
- **用途**: ヘッダー画像、風景、ワイド画像
- **表示例**: フルワイドバナー、ヒーロー画像

```
┌─────────────────────────────────┐
│                                 │
│        横長画像（16:9）          │
│                                 │
└─────────────────────────────────┘
```

#### 2. 縦長（Portrait）
- **アスペクト比**: 3:4
- **推奨サイズ**: 900x1200px
- **用途**: ポートレート、商品写真、縦構図
- **表示例**: サイドバー、カード縦並び

```
┌──────────┐
│          │
│          │
│  縦長画像 │
│  (3:4)   │
│          │
│          │
└──────────┘
```

#### 3. 正方形（Square）
- **アスペクト比**: 1:1
- **推奨サイズ**: 1200x1200px
- **用途**: アイコン、SNS用、グリッドレイアウト
- **表示例**: グリッド表示、タイル配置

```
┌─────────┐
│         │
│ 正方形  │
│ (1:1)   │
│         │
└─────────┘
```

---

## 🎨 レイアウトパターンの組み合わせ例

### パターンA: ヘッダー + グリッド
```
┌─────────────────────────────────┐
│     横長画像（メインビジュアル）  │
└─────────────────────────────────┘

┌──────┐ ┌──────┐ ┌──────┐
│正方形│ │正方形│ │正方形│
└──────┘ └──────┘ └──────┘
```

### パターンB: 交互配置
```
┌────────┐  テキスト
│        │  タイトル
│ 縦長   │  説明文...
│        │
└────────┘

テキスト    ┌────────┐
タイトル    │        │
説明文...   │ 縦長   │
            │        │
            └────────┘
```

### パターンC: マガジンスタイル
```
┌─────────────┐ ┌──────┐
│             │ │正方形│
│   横長      │ └──────┘
│             │ ┌──────┐
└─────────────┘ │正方形│
                └──────┘
```

---

## 📡 API エンドポイント

### 1. ブログ投稿作成

**エンドポイント**: `POST /api/blog/create`

**リクエストボディ**:
```json
{
  "chapter": "01",
  "title": "玄関の壁を撤去してZONE Aと繋げた話",
  "content": "## 見出し\n本文内容...",
  "category": "DIY",
  "date": "2026.01.06",
  "thumbnail": {
    "url": "/images/chapter01/blog-001.jpg",
    "layout": "landscape",  // "landscape" | "portrait" | "square"
    "alt": "玄関改装の様子"
  },
  "tags": ["DIY", "リノベーション", "ZONE A"]
}
```

**レスポンス**:
```json
{
  "success": true,
  "postId": "ch01-2026-01-06-001",
  "url": "/chapter01/posts/blog-001",
  "message": "投稿が作成されました"
}
```

---

### 2. 画像アップロード

**エンドポイント**: `POST /api/blog/upload`

**リクエスト（multipart/form-data）**:
```
chapter: "01"
layout: "landscape"  // "landscape" | "portrait" | "square"
image: [File]
```

**レスポンス**:
```json
{
  "success": true,
  "url": "/images/chapter01/landscape/blog-001.jpg",
  "layout": "landscape",
  "dimensions": {
    "width": 1600,
    "height": 900
  }
}
```

---

### 3. 投稿更新

**エンドポイント**: `PUT /api/blog/update/:postId`

**リクエストボディ**:
```json
{
  "title": "新しいタイトル",
  "content": "更新された本文...",
  "thumbnail": {
    "url": "/images/chapter01/new-image.jpg",
    "layout": "portrait"
  }
}
```

---

### 4. 投稿削除

**エンドポイント**: `DELETE /api/blog/delete/:postId`

**レスポンス**:
```json
{
  "success": true,
  "message": "投稿が削除されました"
}
```

---

### 5. 投稿一覧取得

**エンドポイント**: `GET /api/blog/list?chapter=01&limit=10`

**レスポンス**:
```json
{
  "posts": [
    {
      "id": "ch01-2026-01-06-001",
      "title": "玄関の壁を撤去してZONE Aと繋げた話",
      "category": "DIY",
      "date": "2026.01.06",
      "thumbnail": {
        "url": "/images/chapter01/blog-001.jpg",
        "layout": "landscape"
      },
      "excerpt": "本文の抜粋...",
      "url": "/chapter01/posts/blog-001"
    }
  ],
  "total": 25,
  "page": 1
}
```

---

## 📦 データ構造

### 投稿データ（Post）

```typescript
interface Post {
  id: string;                    // ユニークID
  chapter: '01' | '02' | '03';   // チャプター番号
  title: string;                 // タイトル
  content: string;               // 本文（Markdown）
  category: string;              // カテゴリ
  date: string;                  // 日付（YYYY.MM.DD）
  thumbnail: Thumbnail;          // サムネイル情報
  tags?: string[];               // タグ（オプション）
  excerpt?: string;              // 抜粋（自動生成可）
  status: 'draft' | 'published'; // ステータス
  createdAt: string;             // 作成日時
  updatedAt: string;             // 更新日時
}
```

### サムネイル情報（Thumbnail）

```typescript
interface Thumbnail {
  url: string;                              // 画像URL
  layout: 'landscape' | 'portrait' | 'square'; // レイアウトタイプ
  alt: string;                              // 代替テキスト
  dimensions?: {                            // 画像サイズ（オプション）
    width: number;
    height: number;
  };
}
```

---

## 🖼️ 画像管理の推奨フォルダ構成

```
public/images/
├── chapter01/
│   ├── landscape/          # 横長画像（16:9）
│   │   ├── blog-001.jpg
│   │   └── blog-002.jpg
│   ├── portrait/           # 縦長画像（3:4）
│   │   ├── gear-001.jpg
│   │   └── gear-002.jpg
│   └── square/             # 正方形画像（1:1）
│       ├── icon-001.jpg
│       └── icon-002.jpg
├── chapter02/
│   ├── landscape/
│   ├── portrait/
│   └── square/
└── chapter03/
    ├── landscape/
    ├── portrait/
    └── square/
```

**メリット**:
- ✅ レイアウトごとに整理
- ✅ どのサイズの画像か一目瞭然
- ✅ 最適化や管理が容易

---

## 💻 実装例

### オリジナルアプリ側（React/Next.js）

```typescript
// hooks/useBlogAPI.ts
import { useState } from 'react';

interface CreatePostData {
  chapter: string;
  title: string;
  content: string;
  category: string;
  date: string;
  thumbnail: {
    file: File;
    layout: 'landscape' | 'portrait' | 'square';
    alt: string;
  };
  tags?: string[];
}

export const useBlogAPI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createPost = async (data: CreatePostData) => {
    setLoading(true);
    setError(null);

    try {
      // 1. 画像をアップロード
      const formData = new FormData();
      formData.append('chapter', data.chapter);
      formData.append('layout', data.thumbnail.layout);
      formData.append('image', data.thumbnail.file);

      const uploadRes = await fetch('/api/blog/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BLOG_API_SECRET}`,
        },
        body: formData,
      });

      const uploadData = await uploadRes.json();

      // 2. 投稿を作成
      const postRes = await fetch('/api/blog/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BLOG_API_SECRET}`,
        },
        body: JSON.stringify({
          chapter: data.chapter,
          title: data.title,
          content: data.content,
          category: data.category,
          date: data.date,
          thumbnail: {
            url: uploadData.url,
            layout: data.thumbnail.layout,
            alt: data.thumbnail.alt,
          },
          tags: data.tags,
        }),
      });

      const postData = await postRes.json();

      if (postData.success) {
        return postData;
      } else {
        throw new Error(postData.message);
      }
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createPost, loading, error };
};
```

---

### 管理画面コンポーネント

```typescript
// components/BlogPostForm.tsx
import { useState } from 'react';
import { useBlogAPI } from '../hooks/useBlogAPI';

export const BlogPostForm = () => {
  const { createPost, loading } = useBlogAPI();
  const [formData, setFormData] = useState({
    chapter: '01',
    title: '',
    content: '',
    category: 'DIY',
    date: new Date().toISOString().split('T')[0].replace(/-/g, '.'),
    thumbnailLayout: 'landscape' as const,
    thumbnailFile: null as File | null,
    thumbnailAlt: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.thumbnailFile) {
      alert('画像を選択してください');
      return;
    }

    try {
      const result = await createPost({
        chapter: formData.chapter,
        title: formData.title,
        content: formData.content,
        category: formData.category,
        date: formData.date,
        thumbnail: {
          file: formData.thumbnailFile,
          layout: formData.thumbnailLayout,
          alt: formData.thumbnailAlt,
        },
      });

      alert(`投稿が作成されました！\nURL: ${result.url}`);
    } catch (error) {
      alert(`エラー: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label>Chapter選択</label>
        <select
          value={formData.chapter}
          onChange={(e) => setFormData({ ...formData, chapter: e.target.value })}
        >
          <option value="01">Chapter 01 - 物語の積み重ね</option>
          <option value="02">Chapter 02 - 没入する機材たち</option>
          <option value="03">Chapter 03 - 技術とその先へ</option>
        </select>
      </div>

      <div>
        <label>タイトル</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>

      <div>
        <label>サムネイル画像レイアウト</label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, thumbnailLayout: 'landscape' })}
            className={formData.thumbnailLayout === 'landscape' ? 'active' : ''}
          >
            <div className="w-32 h-18 border-2 rounded">
              横長 (16:9)
            </div>
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, thumbnailLayout: 'portrait' })}
            className={formData.thumbnailLayout === 'portrait' ? 'active' : ''}
          >
            <div className="w-18 h-24 border-2 rounded">
              縦長 (3:4)
            </div>
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, thumbnailLayout: 'square' })}
            className={formData.thumbnailLayout === 'square' ? 'active' : ''}
          >
            <div className="w-20 h-20 border-2 rounded">
              正方形 (1:1)
            </div>
          </button>
        </div>
      </div>

      <div>
        <label>画像アップロード</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setFormData({
                ...formData,
                thumbnailFile: file,
                thumbnailAlt: formData.title || file.name,
              });
            }
          }}
        />
        {formData.thumbnailFile && (
          <div className="mt-2">
            <p>選択された画像: {formData.thumbnailFile.name}</p>
            <img
              src={URL.createObjectURL(formData.thumbnailFile)}
              alt="Preview"
              className="max-w-xs mt-2"
            />
          </div>
        )}
      </div>

      <div>
        <label>本文（Markdown）</label>
        <textarea
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          rows={15}
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? '投稿中...' : '公開'}
      </button>
    </form>
  );
};
```

---

## 🎯 Astro側のレイアウトコンポーネント

```astro
---
// src/components/PostCard.astro
interface Props {
  title: string;
  thumbnail: {
    url: string;
    layout: 'landscape' | 'portrait' | 'square';
    alt: string;
  };
  category: string;
  date: string;
  url: string;
}

const { title, thumbnail, category, date, url } = Astro.props;

// レイアウトに応じたクラスを設定
const layoutClasses = {
  landscape: 'aspect-video',      // 16:9
  portrait: 'aspect-[3/4]',       // 3:4
  square: 'aspect-square',        // 1:1
};
---

<article class="post-card group cursor-pointer">
  <a href={url} class="block">
    <div class={`overflow-hidden rounded-lg ${layoutClasses[thumbnail.layout]}`}>
      <img
        src={thumbnail.url}
        alt={thumbnail.alt}
        class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />
    </div>
    <div class="mt-4">
      <span class="text-xs text-[var(--accent-color)] font-mono">{category}</span>
      <h3 class="text-lg font-bold mt-2">{title}</h3>
      <p class="text-sm text-gray-400 mt-1">{date}</p>
    </div>
  </a>
</article>
```

---

## 📊 画像サイズのバリデーション

### Astro API側での検証

```typescript
// src/pages/api/blog/upload.ts
const validateImageSize = (
  layout: 'landscape' | 'portrait' | 'square',
  width: number,
  height: number
): boolean => {
  const aspectRatios = {
    landscape: 16 / 9,
    portrait: 3 / 4,
    square: 1,
  };

  const targetRatio = aspectRatios[layout];
  const actualRatio = width / height;
  const tolerance = 0.1; // 10%の許容誤差

  return Math.abs(actualRatio - targetRatio) < tolerance;
};
```

---

## 🚀 次のステップ

1. **Phase 1**: 基本的なAPI実装
   - [ ] `POST /api/blog/create` 実装
   - [ ] `POST /api/blog/upload` 実装
   - [ ] 画像のレイアウト別フォルダ自動振り分け

2. **Phase 2**: オリジナルアプリに管理画面追加
   - [ ] レイアウト選択UI実装
   - [ ] 画像プレビュー機能
   - [ ] ドラッグ&ドロップアップロード

3. **Phase 3**: 高度な機能
   - [ ] 画像の自動リサイズ・最適化
   - [ ] 複数画像のギャラリー対応
   - [ ] レイアウトの自動提案（AIで最適なレイアウトを推奨）

---

**最終更新**: 2026-01-06
**次回更新**: API実装開始時
