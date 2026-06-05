import { askAI } from "@/lib/ai";
import {
  saveAIMessage,
  getRecentAIMessages,
} from "@/services/ai-product.service";

type AIRequestBody = {
  message?: string;
  image?: string; // base64
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AIRequestBody;

    const message = body.message?.trim() || "";
    const imageBase64 = body.image || undefined;

    // Если нет ни текста, ни изображения
    if (!message && !imageBase64) {
      return Response.json(
        { success: false, answer: "Введите вопрос или прикрепите фото" },
        { status: 400 }
      );
    }

    // Сохраняем сообщение пользователя (текст + пометка о фото)
    const userDisplayMessage = message || "[Фото товара]";
    await saveAIMessage("user", userDisplayMessage);

    const history = await getRecentAIMessages(10);

    const answer = await askAI(message || "Посмотри фото", {
      history,
      imageBase64,
    });

    await saveAIMessage("assistant", answer);

    return Response.json({ success: true, answer });
  } catch (error) {
    console.error("AI route error:", error);
    return Response.json(
      { success: false, answer: "Ошибка AI" },
      { status: 500 }
    );
  }
}