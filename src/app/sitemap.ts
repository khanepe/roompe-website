import { MetadataRoute } from 'next';
import { getPosts } from '@/lib/wordpress';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://roompe.co.in';

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, // Homepage is the highest priority
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily', // Blogs hub updates often
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  try {
    // Fetch all blog posts for dynamic sitemap generation
    // Limiting to 100 for now, can be increased if needed
    const { posts } = await getPosts(100);

    const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `${baseUrl}/${post.slug}`,
      lastModified: new Date(post.modified || post.date),
      changeFrequency: 'weekly',
      priority: 0.7, // Individual blogs are slightly lower priority than core pages
    }));

    return [...staticRoutes, ...blogRoutes];
  } catch (error) {
    console.error("Failed to generate sitemap for blog posts:", error);
    // If fetching fails, return at least the static routes to ensure SEO indexing continues
    return staticRoutes;
  }
}
