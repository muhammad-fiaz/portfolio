import { NextResponse } from "next/server";
import { getWakaTimeStats } from "@/lib/server/portfolio-data";

const CACHE_SECONDS = 60 * 60 * 12;

export async function GET() {
  const stats = await getWakaTimeStats();
  return NextResponse.json(stats, {
    headers: {
      "Cache-Control": `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${CACHE_SECONDS}`,
    },
  });
}
