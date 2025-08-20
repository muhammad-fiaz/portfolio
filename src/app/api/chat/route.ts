import { NextRequest, NextResponse } from 'next/server';

// In-memory store for demo (replace with DB in production)
type Message = { role: string; content: string };
const conversations: Record<string, Array<Message>> = {};

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const user = url.searchParams.get('user');
  if (!user) {
    return NextResponse.json({ error: 'Missing user' }, { status: 400 });
  }
  return NextResponse.json({ messages: conversations[user] || [] });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { user, message } = body;
  if (!user || !message) {
    return NextResponse.json({ error: 'Missing user or message' }, { status: 400 });
  }
  if (!conversations[user]) conversations[user] = [];
  conversations[user].push(message);
  return NextResponse.json({ success: true });
}
