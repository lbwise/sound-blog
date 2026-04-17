import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts', (p) => !p.data.draft);
  return rss({
    title: 'sound/blog',
    description: 'A public log of learning audio, DSP, and music technology.',
    site: context.site,
    items: posts
      .sort((a, b) => +b.data.date - +a.data.date)
      .map((p) => ({
        title: p.data.title,
        pubDate: p.data.date,
        description: p.data.summary ?? '',
        link: `/posts/${p.id}/`,
      })),
  });
}
