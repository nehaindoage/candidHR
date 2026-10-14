import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { applyPageMeta, parseYoastHead } from '../lib/seo';
import { getBlogPost, getRelatedBlogs } from '../data/blogs';
import type { BlogPost, BlogSummary } from '../data/blogs';

const WP_POSTS_API = 'https://netzur.com/wp-json/wp/v2/posts';

function Spinner() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="h-12 w-12 rounded-full border-4 border-slate-200 border-t-[#F13B0A] animate-spin" />
    </div>
  );
}

/** WordPress block markup rendered inside the SPA — scoped typography for it. */
const PROSE =
  '[&_p]:my-4 [&_p]:leading-relaxed [&_p]:text-slate-600 ' +
  '[&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-slate-900 ' +
  '[&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-900 ' +
  '[&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:font-heading [&_h4]:text-lg [&_h4]:font-bold [&_h4]:text-slate-900 ' +
  '[&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-slate-600 ' +
  '[&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:text-slate-600 ' +
  '[&_li]:leading-relaxed [&_a]:text-[#F13B0A] [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-[#d8350a] ' +
  '[&_strong]:text-slate-800 [&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-[#F13B0A] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-slate-600 ' +
  '[&_img]:my-6 [&_img]:rounded-2xl [&_img]:w-full ' +
  '[&_table]:my-6 [&_table]:w-full [&_table]:text-sm [&_th]:bg-slate-50 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_th]:text-slate-900 [&_td]:px-3 [&_td]:py-2 [&_td]:text-slate-600 [&_tr]:border-b [&_tr]:border-slate-100 ' +
  '[&_code]:rounded [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [related, setRelated] = useState<BlogSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    let cancelled = false;
    setLoading(true);
    setPost(null);
    setRelated([]);

    getBlogPost(slug).then((data) => {
      if (cancelled) return;
      setPost(data);
      setLoading(false);
      if (!data) {
        document.title = 'Page Not Found';
        return;
      }

      applyPageMeta(data.meta.title, data.meta.description);

      // Yoast fills anything the post did not set itself.
      fetch(`${WP_POSTS_API}?slug=${encodeURIComponent(data.slug)}&_fields=yoast_head`)
        .then((res) => (res.ok ? res.json() : null))
        .then((raw: unknown) => {
          if (cancelled) return;
          const list = Array.isArray(raw) ? (raw as { yoast_head?: string }[]) : [];
          const yoast = parseYoastHead(list[0]?.yoast_head);
          if (!yoast?.title && !yoast?.description) return;
          applyPageMeta(
            data.meta.title || yoast.title || '',
            data.meta.description || yoast.description || ''
          );
        })
        .catch(() => {
          /* keep ACF meta */
        });

      getRelatedBlogs(data, 3).then((items) => {
        if (!cancelled) setRelated(items);
      });
    });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) return <Spinner />;

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white p-6 text-center">
        <h1 className="font-heading text-2xl font-bold text-slate-900">Page Not Found</h1>
        <p className="text-slate-500">This article may have been moved or removed.</p>
        <Link
          to="/blog"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#F13B0A] px-6 py-2.5 font-semibold text-white"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Full-width featured image with glass overlays */}
      {post.image.src && (
        <section className="bg-white pt-8 sm:pt-12">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <img
                src={post.image.src}
                alt={post.image.alt}
                className="block h-auto w-full"
              />
            </div>
          </div>
        </section>
      )}

      {/* Title + content */}
      <section className="bg-white pb-16 pt-10 sm:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-4 mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-slate-200 pb-6 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span className="h-3.5 w-px bg-slate-200" />
            <span>
              Published by <span className="font-semibold text-slate-700">{post.author}</span>
            </span>
            {post.categories[0] && (
              <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-[11px] font-semibold capitalize tracking-wide text-[#F13B0A]">
                {post.categories[0].name}
              </span>
            )}
          </div>

          <article
            className={PROSE}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Tags / categories */}
          {post.categories.length > 0 && (
            <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Topics
              </span>
              {post.categories.map((cat) => (
                <Link
                  key={cat.id}
                  to="/blog"
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 transition-colors hover:bg-orange-50 hover:text-[#F13B0A]"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/book-a-demo"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#F13B0A] px-7 py-3.5 font-semibold text-white shadow-lg transition-all hover:bg-[#d8350a] hover:scale-[1.02]"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-extrabold tracking-tight text-slate-900">
              Keep reading
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/blog/${item.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs text-slate-500">{item.date}</span>
                    <h3 className="mt-1.5 font-heading text-base font-bold leading-snug text-slate-900 line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}