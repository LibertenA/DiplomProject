// app/api/ai/route.ts

import { askAI } from "@/lib/ai";

import {
  saveAIMessage,
  getRecentAIMessages,
} from "@/lib/ai-chat.service";

type AIRequestBody = {
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AIRequestBody;

    const message = body.message;

    if (!message || typeof message !== "string") {
      return Response.json(
        {
          success: false,
          answer: "Введите вопрос о технике или электронике",
        },
        {
          status: 400,
        }
      );
    }

    const userMessage = message.trim();

    await saveAIMessage("user", userMessage);

    const history = await getRecentAIMessages(10);

    const answer = await askAI(userMessage, {
      history,
    });

    await saveAIMessage("assistant", answer);

    return Response.json({
      success: true,
      answer,
    });
  } catch (error) {
    console.error("AI route error:", error);

    return Response.json(
      {
        success: false,
        answer: "Ошибка AI",
      },
      {
        status: 500,
      }
    );
  }
}