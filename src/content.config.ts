import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    number: z.number().optional(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
    audio: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const builds = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/builds' }),
  schema: z.object({
    title: z.string(),
    started: z.coerce.date(),
    status: z.enum(['wip', 'paused', 'shipped']).default('wip'),
    summary: z.string().optional(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { posts, builds };
