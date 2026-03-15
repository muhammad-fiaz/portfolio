import { NextResponse } from "next/server";
import { getGithubOverview } from "@/lib/server/portfolio-data";

const CACHE_SECONDS = 60 * 60 * 12;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const user = searchParams.get("user") ?? undefined;
  const overview = await getGithubOverview(user);
  return NextResponse.json(overview, {
    headers: {
      "Cache-Control": `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${CACHE_SECONDS}`,
    },
  });
}
