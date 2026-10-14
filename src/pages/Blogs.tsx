import { Fragment, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Newspaper,
  Tag,
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { getBlogs, getBlogCategories } from '../data/blogs';
import type { BlogCategory, BlogSummary } from '../data/blogs';

const PER_PAGE = 8;
/** How many categories the sidebar shows before the "Show all" toggle. */
const CATEGORY_PREVIEW = 8;

function BlogCard({ post }: { post: BlogSummary }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
        <img
          src={post.image.src}
          alt={post.image.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* {post.categories[0] && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-[#F13B0A] shadow-sm">
            {post.categories[0].name}
          </span>
        )} */}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <CalendarDays className="h-3.5 w-3.5" />
          <span>{post.date}</span>
        </div>
        <h3 className="mt-2 font-heading text-base font-bold leading-snug text-slate-900 line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-3">{post.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#F13B0A]">
          Read article
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default function Blogs({ onOpenDemo }: { onOpenDemo: () => void }) {
  usePageMeta(
    'blog',
    'ISP Software Blog | Insights, Billing Solutions &amp; Technology Trends',
    'Discover ISP management, billing software, network security &amp; support tips. Read Netzur’s expert blog for trends and actionable insights!'
  );

  const [posts, setPosts] = useState<BlogSummary[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCat, setActiveCat] = useState<string>('all');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showAllCats, setShowAllCats] = useState(false);

  useEffect(() => {
    let cancelled = false;
    Promise.all([getBlogs(), getBlogCategories()])
      .then(([list, cats]) => {
        if (cancelled) return;
        setPosts(list);
        setCategories(cats);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const byCat =
        activeCat === 'all' || p.categories.some((c) => c.slug === activeCat);
      const byQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.categories.some((c) => c.name.toLowerCase().includes(q));
      return byCat && byQuery;
    });
  }, [posts, activeCat, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  useEffect(() => {
    setPage(1);
  }, [activeCat, query]);

  // Sorted by post count in the data layer, so the preview shows the biggest topics.
  const visibleCategories = showAllCats ? categories : categories.slice(0, CATEGORY_PREVIEW);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white text-slate-900 flex flex-col justify-between">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-200/30 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 sm:pt-14 pb-10 gap-8 lg:gap-6">
          <div className="w-full lg:w-5/12 flex-shrink-0 max-w-2xl">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6 text-slate-900">
              The Netzur <span className="text-slate-400">Blog</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-4 font-normal">
              Practical guides on ISP billing, subscriber management, AAA authentication, hotspot
              management and broadband operations.
            </p>
            <p className="text-sm text-slate-600 max-w-xl leading-relaxed mb-8 border-l-2 border-[#F13B0A] pl-4">
              Written for internet service providers who want to run leaner networks — no fluff, just
              operational detail you can put to work.
            </p>
            <div className="flex items-center gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <Newspaper className="w-4 h-4 text-slate-400" />
                <span>
                  <span className="text-[#F13B0A] font-semibold">{posts.length || '—'}</span>{' '}
                  {posts.length === 1 ? 'article' : 'articles'}
                </span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-slate-400" />
                <span>{categories.length || '—'} topics</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 relative hidden md:flex justify-center items-center z-10">
            <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80"
                alt="Netzur blog articles on ISP operations"
                className="w-full h-[320px] lg:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 max-w-md">
                  <p className="text-sm font-bold text-white mb-1">Field notes from the Netzur team</p>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Billing, network automation, hotspot management and subscriber experience — in
                    depth, every week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="-bottom-12 absolute z-12 w-full pb-8 pt-6 border-t border-slate-100 bg-slate-50">
        </div>
      </section>

      {/* Feed */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-10">
            {/* Left: search + grid */}
            <div>
              <div className="relative max-w-sm">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles…"
                  className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[#F13B0A] focus:outline-none"
                />
              </div>

              {loading && (
                <div className="flex items-center justify-center py-24">
                  <div className="h-12 w-12 rounded-full border-4 border-slate-200 border-t-[#F13B0A] animate-spin" />
                </div>
              )}

              {!loading && visible.length > 0 && (
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {visible.map((post) => (
                    <Fragment key={post.slug}>
                      <BlogCard post={post} />
                    </Fragment>
                  ))}
                </div>
              )}

              {!loading && filtered.length === 0 && (
                <div className="flex flex-col items-center gap-3 py-24 text-center">
                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    No articles found
                  </h3>
                  <p className="text-sm text-slate-500">
                    Try a different topic or clear your search.
                  </p>
                </div>
              )}

              {/* Pagination */}
              {!loading && totalPages > 1 && (
                <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-[#F13B0A] hover:text-[#F13B0A] disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Prev</span>
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setPage(n)}
                      className={`h-9 w-9 rounded-full text-sm font-semibold transition-colors ${
                        n === currentPage
                          ? 'bg-[#F13B0A] text-white'
                          : 'text-slate-600 hover:bg-orange-50 hover:text-[#F13B0A]'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-[#F13B0A] hover:text-[#F13B0A] disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600"
                  >
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Right: categories */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="mb-4 text-xs font-heading font-bold uppercase tracking-wider text-slate-900">
                  Categories
                </p>
                <ul className="space-y-0.5">
                  <li>
                    <button
                      type="button"
                      onClick={() => setActiveCat('all')}
                      className={`flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left text-[13px] transition-colors ${
                        activeCat === 'all'
                          ? 'bg-[#F13B0A] font-semibold text-white'
                          : 'text-slate-600 hover:bg-white hover:text-[#F13B0A]'
                      }`}
                    >
                      <span>All topics</span>
                      <span className="text-xs opacity-70">{posts.length}</span>
                    </button>
                  </li>
                  {visibleCategories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        type="button"
                        onClick={() => setActiveCat(cat.slug)}
                        className={`flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left text-[13px] transition-colors ${
                          activeCat === cat.slug
                            ? 'bg-[#F13B0A] font-semibold text-white'
                            : 'text-slate-600 hover:bg-white hover:text-[#F13B0A]'
                        }`}
                      >
                        <span className="leading-snug">{cat.name}</span>
                        <span className="shrink-0 text-xs opacity-70">{cat.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>

                {categories.length > CATEGORY_PREVIEW && (
                  <button
                    type="button"
                    onClick={() => setShowAllCats((v) => !v)}
                    className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 transition-colors hover:border-[#F13B0A] hover:text-[#F13B0A]"
                  >
                    <span>{showAllCats ? 'Show less' : `Show all ${categories.length} categories`}</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        showAllCats ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-12 sm:p-14 text-center">
            <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-orange-600/25 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-indigo-500/20 blur-[120px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight text-white mb-4">
                Take Full Control of Your ISP with Netzur
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
                Streamline operations, simplify billing, and enhance customer experience all from one
                unified platform.
              </p>
              <Link
                to="/book-a-demo"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F13B0A] hover:bg-[#d8350a] text-white font-semibold shadow-lg transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
