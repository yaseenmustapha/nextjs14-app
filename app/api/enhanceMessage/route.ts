import { NextResponse } from "next/server";
import openai from "@/lib/openai";

export async function POST(request: Request) {
  const { prompt } = await request.json();
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Rewrite this social media post to make it more punchy, viral and interesting (keep it under 300 characters and do not add quotes around the text): ${prompt}`,
      },
    ],
    max_tokens: 100,
    n: 1,
  });

  return NextResponse.json(chatCompletion.choices[0].message);
}
