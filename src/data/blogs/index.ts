import type { BlogCategory, BlogPost, BlogSummary } from './types';

export type { BlogCategory, BlogPost, BlogSummary } from './types';

const WP_API = 'https://netzur.com/wp-json/wp/v2';

/** WordPress renders titles/excerpts as HTML entities — flatten them to text. */
export function stripHtml(html?: string): string {
  if (!html) return '';
  if (typeof DOMParser === 'undefined') {
    return html.replace(/<[^>]*>/g, '').replace(/&#8217;|&#039;/g, "'").replace(/&amp;/g, '&');
  }
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return (doc.body.textContent ?? '').replace(/\s+/g, ' ').trim();
}

function formatDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function countMinutes(html: string): number {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

interface RawPost {
  id: number;
  slug?: string;
  title?: { rendered?: string };
  excerpt?: { rendered?: string };
  content?: { rendered?: string };
  date?: string;
  modified?: string;
  featured_media?: number;
  categories?: number[];
  author?: number;
  link?: string;
  yoast_head?: string;
  yoast_head_json?: { title?: string; description?: string };
}

function parseYoast(head?: string): { title: string; description: string } {
  if (!head) return { title: '', description: '' };
  const title = /<title>(.*?)<\/title>/i.exec(head)?.[1] ?? '';
  const description =
    /<meta\s+name="description"\s+content="(.*?)"\s*\/?>/i.exec(head)?.[1] ?? '';
  const clean = (s: string) =>
    s
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#039;|&apos;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .trim();
  return { title: clean(title), description: clean(description) };
}

/**
 * Resolve featured media in one batched call instead of N per-post requests.
 * (The WP users endpoint is locked down on this install, so author names are
 * not available via REST and we fall back to the team label.)
 */
async function loadMediaLookup(
  mediaIds: number[]
): Promise<Map<number, { src: string; alt: string }>> {
  const media = new Map<number, { src: string; alt: string }>();

  const uniqMedia = [...new Set(mediaIds)].filter(Boolean).slice(0, 100);
  if (uniqMedia.length === 0) return media;

  try {
    const res = await fetch(
      `${WP_API}/media?per_page=100&include=${uniqMedia.join(',')}&_fields=id,source_url,alt_text,media_details`
    );
    if (res.ok) {
      const items = (await res.json()) as {
        id: number;
        source_url?: string;
        alt_text?: string;
        media_details?: { sizes?: Record<string, { source_url?: string }> };
      }[];
      for (const item of items) {
        const large =
          item.media_details?.sizes?.large?.source_url ??
          item.media_details?.sizes?.medium?.source_url ??
          item.source_url ??
          '';
        media.set(item.id, { src: large, alt: item.alt_text ?? '' });
      }
    }
  } catch {
    /* featured images are optional */
  }

  return media;
}

const FALLBACK_IMAGE =
  'https://netzur.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-05-at-5.00.22-PM-1536x864.jpeg';

async function mapPosts(posts: RawPost[], categories: Map<number, BlogCategory>) {
  const media = await loadMediaLookup(posts.map((p) => p.featured_media ?? 0));

  return posts.map<BlogSummary>((post) => {
    const pic = media.get(post.featured_media ?? 0);
    return {
      id: post.id,
      slug: post.slug ?? '',
      title: stripHtml(post.title?.rendered),
      excerpt: stripHtml(post.excerpt?.rendered).replace(/\[…\]$/, '').trim(),
      date: formatDate(post.date ?? ''),
      modified: post.modified ?? post.date ?? '',
      image: {
        src: pic?.src || FALLBACK_IMAGE,
        alt: pic?.alt || stripHtml(post.title?.rendered),
      },
      categories: (post.categories ?? [])
        .map((id) => categories.get(id))
        .filter((c): c is BlogCategory => Boolean(c)),
      author: 'Netzur Team',
    };
  });
}

const POST_FIELDS =
  'id,slug,title,excerpt,date,modified,featured_media,categories,author,link,yoast_head';

async function fetchCategories(): Promise<Map<number, BlogCategory>> {
  const map = new Map<number, BlogCategory>();
  try {
    const res = await fetch(`${WP_API}/categories?per_page=100&hide_empty=true&_fields=id,name,slug,count`);
    if (!res.ok) return map;
    const items = (await res.json()) as BlogCategory[];
    for (const item of items) map.set(item.id, item);
  } catch {
    /* categories are optional */
  }
  return map;
}

/** All published posts, newest first. */
export async function getBlogs(): Promise<BlogSummary[]> {
  try {
    const [categories, res] = await Promise.all([
      fetchCategories(),
      fetch(`${WP_API}/posts?per_page=100&_fields=${POST_FIELDS}`),
    ]);
    if (!res.ok) return [];
    const posts = (await res.json()) as RawPost[];
    // Sort on the raw ISO date (lexicographically correct) before formatting,
    // so "Oct 5, 2026" never sorts before "Sep 30, 2025".
    posts.sort((a, b) => ((b.date ?? '') > (a.date ?? '') ? 1 : -1));
    return await mapPosts(posts, categories);
  } catch {
    return [];
  }
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  return [...(await fetchCategories()).values()].sort((a, b) => b.count - a.count);
}

export async function getBlogPost(slug: string | undefined): Promise<BlogPost | null> {
  if (!slug) return null;
  try {
    const [categories, res] = await Promise.all([
      fetchCategories(),
      fetch(`${WP_API}/posts?slug=${encodeURIComponent(slug)}&_fields=${POST_FIELDS},content`),
    ]);
    if (!res.ok) return null;
    const posts = (await res.json()) as RawPost[];
    if (!Array.isArray(posts) || posts.length === 0) return null;

    const [post] = posts;
    const [summary] = await mapPosts([post], categories);
    const contentHtml = post.content?.rendered ?? '';
    const yoast = parseYoast(post.yoast_head);

    return {
      ...summary,
      contentHtml,
      readingMinutes: countMinutes(contentHtml),
      meta: {
        title: yoast.title || summary.title,
        description: yoast.description || summary.excerpt,
      },
      link: post.link ?? '',
    };
  } catch {
    return null;
  }
}

/** Other posts sharing a category with the given post, newest first. */
export async function getRelatedBlogs(
  postOrSlug: BlogPost | string,
  limit = 3
): Promise<BlogSummary[]> {
  const current = typeof postOrSlug === 'string' ? await getBlogPost(postOrSlug) : postOrSlug;
  if (!current) return [];
  const all = await getBlogs();
  const catIds = new Set(current.categories.map((c) => c.id));
  const related = all
    .filter((p) => p.slug !== current.slug && p.categories.some((c) => catIds.has(c.id)))
    .slice(0, limit);
  if (related.length >= limit) return related;
  const filler = all
    .filter((p) => p.slug !== current.slug && !related.some((r) => r.slug === p.slug))
    .slice(0, limit - related.length);
  return [...related, ...filler];
}
