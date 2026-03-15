import { NextResponse } from "next/server";
import { getGithubRepos } from "@/lib/server/portfolio-data";

const CACHE_SECONDS = 60 * 60 * 12;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const user = searchParams.get("user") ?? undefined;
  const repos = await getGithubRepos(user);
  return NextResponse.json(repos, {
    headers: {
      "Cache-Control": `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${CACHE_SECONDS}`,
    },
  });
}
