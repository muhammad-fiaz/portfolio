import { NextResponse } from "next/server";
import { getBlogPosts } from "@/lib/server/portfolio-data";

const CACHE_SECONDS = 60 * 60 * 12;

export async function GET() {
  const posts = await getBlogPosts();
  return NextResponse.json(posts, {
    headers: {
      "Cache-Control": `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${CACHE_SECONDS}`,
    },
  });
}
