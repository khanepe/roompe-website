import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getPosts, decodeHtml } from "@/lib/wordpress";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata = {
  title: "Blogs | RoomPe - Insights on Student Housing & Campus Living",
  description: "Explore the latest trends, tips, and insights on university hostel management and student housing in India.",
};

export default async function BlogsPage() {
  const { posts } = await getPosts(12);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* ── Hero Section ──────────────────────────────────────── */}
      <section className="pt-32 pb-20 bg-[#F8FAFB]">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Insights & <span className="text-[#4BA18F]">Updates</span>
            </h1>
            <p className="text-lg text-[#12323B]/60 leading-relaxed">
              Stay informed about the latest trends in student housing, university operations, and 
              the future of campus living in India.
            </p>
          </div>
        </div>
      </section>

      {/* ── Blog Grid ─────────────────────────────────────────── */}
      <section className="py-20 flex-grow">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post.ID} 
                href={`/${post.slug}`}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#12323B]/5 hover:border-[#4BA18F]/20 hover:shadow-2xl hover:shadow-[#4BA18F]/5 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="aspect-[16/10] overflow-hidden relative bg-[#F1F5F9]">
                  {post.featured_image ? (
                    <Image
                      src={post.featured_image}
                      alt={decodeHtml(post.title)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[#12323B]/10">
                      <Image
                        src="https://res.cloudinary.com/dvqu8jllv/image/upload/v1776773778/roompe-logo_u4dpdy.png"
                        alt="RoomPe"
                        width={120}
                        height={40}
                        className="opacity-20 grayscale"
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12323B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#4BA18F]">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 leading-snug group-hover:text-[#4BA18F] transition-colors duration-300 line-clamp-2">
                    {decodeHtml(post.title)}
                  </h3>

                  <div 
                    className="text-sm text-[#12323B]/50 line-clamp-3 mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />

                  <div className="mt-auto pt-6 border-t border-[#12323B]/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full overflow-hidden bg-[#F1F5F9]">
                        <Image 
                          src={post.author.avatar_URL} 
                          alt={post.author.name} 
                          width={24} 
                          height={24}
                        />
                      </div>
                      <span className="text-[12px] font-medium text-[#12323B]/60">{post.author.name}</span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-[#4BA18F] text-xs font-bold uppercase tracking-widest translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
                      Read More <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-[#12323B]/40">No blog posts found at the moment.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
