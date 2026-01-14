import { defineCollection, z } from 'astro:content';

// DTM用
const dtmCollection = defineCollection({
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

// TECH用（Chapter 03）
const techCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['astro', 'react', 'css', 'ai', 'devtips', 'ai-journey', 'dtm-ai', 'ai-tools']),
    thumbnail: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // 公開状態（下書き機能）
    draft: z.boolean().default(false),
    // Learning Level システム
    learningLevel: z.number().min(1).max(5).optional(),
    topic: z.string().optional(),
    prerequisites: z.array(z.string()).optional(),
    unlocks: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'dtm': dtmCollection,
  'tech': techCollection,
};
