import { NextResponse } from "next/server";
import openai from "@/lib/openai";

export async function POST(request: Request) {
  const { prompt } = await request.json();
  const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "user",
        content: `Rewrite this social media post to make it more punchy, viral and interesting (keep it under 300 characters): ${prompt}`,
      },
    ],
  });

  return NextResponse.json(chatCompletion.data.choices[0].message);
}
