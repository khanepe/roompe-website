import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * On-demand revalidation API route.
 *
 * Call this endpoint to force the site to re-fetch the latest posts from
 * WordPress.com. This revalidates:
 *   - /blogs  (the archive page)
 *   - /       (homepage, in case blog snippets appear there in the future)
 *
 * Usage:
 *   GET /api/revalidate?secret=<REVALIDATION_SECRET>
 *   GET /api/revalidate?secret=<REVALIDATION_SECRET>&slug=my-post-slug
 *
 * You can also set up a cron job / uptime monitor to hit this endpoint
 * every few minutes so new posts appear automatically without waiting
 * for the ISR revalidation window.
 */
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const slug = request.nextUrl.searchParams.get("slug");

  // Validate the secret token
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json(
      { message: "Invalid secret token" },
      { status: 401 }
    );
  }

  try {
    // Always revalidate the blog archive
    revalidatePath("/blogs");

    // If a specific slug was provided, revalidate that post page
    if (slug) {
      revalidatePath(`/${slug}`);
    }

    return NextResponse.json({
      revalidated: true,
      timestamp: Date.now(),
      paths: ["/blogs", ...(slug ? [`/${slug}`] : [])],
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating", error: String(err) },
      { status: 500 }
    );
  }
}
