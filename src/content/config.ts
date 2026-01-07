import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', // Markdownファイル
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['daw', 'gear', 'plugin', 'biz', 'tips', 'essay']),
    thumbnail: z.string(), // 画像パス
    description: z.string().optional(), // 説明文（オプション）
    tags: z.array(z.string()).default([]),
    // グリッド表示用のサイズ設定
    gridSize: z.object({
      colSpan: z.number().default(12), // デフォルトは12（フル幅）
      rowSpan: z.number().default(1), // デフォルトは1行
      height: z.number().optional(), // カードの高さ（px）
    }).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};