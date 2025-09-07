import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const userMessage = body?.message;

  if (!userMessage) {
    return NextResponse.json({ reply: "No message provided." }, { status: 400 });
  }

  // Simple echo bot logic
  return NextResponse.json({ reply: `You said: ${userMessage}` });
}