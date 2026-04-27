export interface WordPressAuthor {
  ID: number;
  name: string;
  first_name: string;
  last_name: string;
  avatar_URL: string;
}

export interface WordPressPost {
  ID: number;
  site_ID: number;
  date: string;
  modified: string;
  title: string;
  URL: string;
  short_URL: string;
  content: string;
  excerpt: string;
  slug: string;
  featured_image: string;
  post_thumbnail?: {
    URL: string;
    width: number;
    height: number;
  };
  author: WordPressAuthor;
  categories: Record<string, any>;
  tags: Record<string, any>;
}

export interface WordPressPostsResponse {
  found: number;
  posts: WordPressPost[];
}

const SITE_URL = "universityhostelmanagement.wordpress.com";
const API_BASE = `https://public-api.wordpress.com/rest/v1.1/sites/${SITE_URL}`;

export async function getPosts(number = 10, page = 1): Promise<WordPressPostsResponse> {
  const res = await fetch(`${API_BASE}/posts?number=${number}&page=${page}`, {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  const res = await fetch(`${API_BASE}/posts/slug:${slug}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error("Failed to fetch post");
  }

  return res.json();
}

export function decodeHtml(html: string) {
  if (typeof window === "undefined") {
    // Basic server-side decoding for common entities
    return html
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&#8211;/g, "–")
      .replace(/&#8217;/g, "’")
      .replace(/&#8220;/g, "“")
      .replace(/&#8221;/g, "”")
      .replace(/&#8230;/g, "...");
  }
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}
