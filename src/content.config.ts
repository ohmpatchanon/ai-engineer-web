import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const theory = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/theory' }),
  schema: z.object({
    id: z.string(),
    number: z.string(),
    slug: z.string(),
    phase: z.string(),
    title: z.string(),
    en: z.string(),
    summary: z.string(),
    level: z.enum(['เริ่มต้น', 'กลาง', 'สูง']),
    prereqLessons: z.array(z.string()),
    linkedModules: z.array(z.string()),
    teaches: z.array(z.string()),
    keywords: z.array(z.string()),
    updated: z.string(),
  }),
});

export const collections = { theory };
