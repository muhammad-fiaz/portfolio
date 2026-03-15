import { NextResponse } from "next/server";
import { getWakaTimeStats } from "@/lib/server/portfolio-data";

export async function GET() {
  const stats = await getWakaTimeStats();
  return NextResponse.json(stats);
}
