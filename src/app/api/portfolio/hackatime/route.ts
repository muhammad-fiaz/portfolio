import { NextResponse } from "next/server";
import { getHackatimeStats } from "@/lib/server/portfolio-data";

const CACHE_SECONDS = 60 * 60 * 12;

export async function GET() {
  const stats = await getHackatimeStats();
  return NextResponse.json(stats, {
    headers: {
      "Cache-Control": `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${CACHE_SECONDS}`,
    },
  });
}
