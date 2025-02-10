import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const cookieStore = cookies();
  (await cookieStore).set("user_token", "abc123", { httpOnly: true });

  return NextResponse.json({ message: "Cookie set!" });
}

// call from Client component: await fetch("/api/set-cookie", { method: "POST" });