import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getPostBySlug, getPosts, decodeHtml } from "@/lib/wordpress";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import type { Metadata } from "next";

/* ── Generate metadata for SEO ─────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found | RoomPe" };

  const plainExcerpt = post.excerpt.replace(/<[^>]+>/g, "").trim();

  return {
    title: `${decodeHtml(post.title)} | RoomPe Blog`,
    description: plainExcerpt.slice(0, 160),
    openGraph: {
      title: decodeHtml(post.title),
      description: plainExcerpt.slice(0, 160),
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      ...(post.featured_image && { images: [post.featured_image] }),
    },
  };
}

/* ── Static params (for pre-rendering known slugs) ────── */
export async function generateStaticParams() {
  const { posts } = await getPosts(50);
  return posts.map((post) => ({ slug: post.slug }));
}

/* ── Allow dynamic slugs that weren't pre-rendered ─────── */
export const dynamicParams = true;

/* ── Estimate reading time ─────────────────────────────── */
function readingTime(html: string): number {
  const text = html.replace(/<[^>]+>/g, "");
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 220));
}

/* ── Page ──────────────────────────────────────────────── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const mins = readingTime(post.content);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── Hero Banner ────────────────────────────────── */}
      <section className="relative pt-28 pb-16 bg-[#F8FAFB] overflow-hidden">
        {/* Subtle decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#12323B 1px, transparent 1px), linear-gradient(90deg, #12323B 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="container-wide relative z-10">
          {/* Back link */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#4BA18F] mb-8 group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            All Articles
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-5 mb-6">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#4BA18F]">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>

            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#12323B]/40">
              <Clock size={12} />
              {mins} min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-4xl mb-8">
            {decodeHtml(post.title)}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-[#E2E8F0]">
              <Image
                src={post.author.avatar_URL}
                alt={post.author.name}
                width={40}
                height={40}
              />
            </div>
            <div>
              <p className="text-sm font-semibold">{post.author.name}</p>
              <p className="text-xs text-[#12323B]/40">Author</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Image ─────────────────────────────── */}
      {post.featured_image && (
        <div className="container-wide -mt-0">
          <div className="aspect-[21/9] relative rounded-3xl overflow-hidden shadow-2xl shadow-[#12323B]/10 border border-[#12323B]/5">
            <Image
              src={post.featured_image}
              alt={decodeHtml(post.title)}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12323B]/10 to-transparent" />
          </div>
        </div>
      )}

      {/* ── Article Body ───────────────────────────────── */}
      <article className="py-16 md:py-20 flex-grow">
        <div className="container-wide">
          <div
            className="blog-content mx-auto max-w-3xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* ── Back to blog CTA ───────────────────────────── */}
      <section className="pb-20">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
              style={{
                background: "linear-gradient(135deg, #12323B 0%, #1a4a56 100%)",
              }}
            >
              <div>
                <p className="text-white font-bold text-lg mb-1">
                  Explore more insights
                </p>
                <p className="text-sm text-white/50">
                  Discover more articles on student housing and campus
                  management.
                </p>
              </div>
              <Link href="/blogs" className="btn-gold flex-shrink-0 whitespace-nowrap">
                View All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
