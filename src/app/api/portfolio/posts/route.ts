import { NextResponse } from "next/server";
import { getBlogPosts } from "@/lib/server/portfolio-data";

export async function GET() {
  const posts = await getBlogPosts();
  return NextResponse.json(posts);
}
