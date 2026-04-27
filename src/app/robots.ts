import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://roompe.co.in';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'], // Prevent crawling of internal API routes
      },
      {
        // Explicitly allow major AI chatbots and AI search engines
        userAgent: [
          'GPTBot', 
          'ChatGPT-User', 
          'OAI-SearchBot', 
          'Google-Extended', 
          'Anthropic-ai', 
          'Claude-Web', 
          'PerplexityBot', 
          'Cohere-ai', 
          'Applebot-Extended',
          'OmgiliBot',
          'FacebookBot'
        ],
        allow: '/',
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
