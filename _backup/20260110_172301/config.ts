import { defineCollection, z } from 'astro:content';

// STORY用
const storyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['daw', 'gear', 'plugin', 'biz', 'tips', 'essay']),
    thumbnail: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    gridSize: z.object({
      colSpan: z.number().default(12),
      rowSpan: z.number().default(1),
      height: z.number().optional(),
    }).optional(),
  }),
});

// TECH用（新規）
const techCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['astro', 'react', 'css', 'ai', 'devtips']),
    thumbnail: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // 公開状態（下書き機能）
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'story': storyCollection,
  'tech': techCollection,
};