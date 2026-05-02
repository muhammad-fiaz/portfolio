import { NextResponse } from "next/server";
import { getHackatimeStats } from "@/lib/server/portfolio-data";

export async function GET() {
  const stats = await getHackatimeStats();
  return NextResponse.json(stats);
}
