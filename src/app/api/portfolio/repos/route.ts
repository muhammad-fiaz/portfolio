import { NextResponse } from "next/server";
import { getGithubRepos } from "@/lib/server/portfolio-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const user = searchParams.get("user") ?? undefined;
  const repos = await getGithubRepos(user);
  return NextResponse.json(repos);
}
