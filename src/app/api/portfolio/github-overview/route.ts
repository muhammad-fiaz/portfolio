import { NextResponse } from "next/server";
import { getGithubOverview } from "@/lib/server/portfolio-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const user = searchParams.get("user") ?? undefined;
  const overview = await getGithubOverview(user);
  return NextResponse.json(overview);
}
