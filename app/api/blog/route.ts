import { NextResponse } from "next/server";

type SubstackTag = { name: string };
type SubstackPost = {
  title?: string;
  subtitle?: string;
  canonical_url?: string;
  cover_image?: string;
  post_date?: string;
  wordcount?: number;
  slug?: string;
  postTags?: SubstackTag[];
};

export async function GET() {
  try {
    const res = await fetch(
      "https://yashdev.substack.com/api/v1/posts?limit=12&offset=0"
    );

    if (!res.ok) throw new Error(`Substack API responded with ${res.status}`);

    const data: SubstackPost[] = await res.json();

    const posts = data.map((post) => ({
      title: post.title ?? "",
      subtitle: post.subtitle ?? null,
      url: post.canonical_url ?? `https://yashdev.substack.com/p/${post.slug}`,
      coverImage: post.cover_image ?? null,
      date: post.post_date ?? new Date().toISOString(),
      wordcount: post.wordcount ?? 0,
      slug: post.slug ?? "",
      tags: (post.postTags ?? []).map((t) => t.name),
    }));

    return NextResponse.json(posts, {
      headers: {
        // CDN/edge caches the response for 1 hour; serves stale up to 24 h while revalidating
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
