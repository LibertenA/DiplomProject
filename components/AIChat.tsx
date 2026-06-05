"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
  imageBase64?: string; // для отображения фото пользователя
};

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Здравствуйте. Я AI-консультант магазина. Помогу с выбором бытовой техники и электроники. Можете также отправить фото товара для поиска похожего.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  function toggleChat() {
    setIsOpen((prev) => !prev);
  }

  function closeChat() {
    setIsOpen(false);
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  function removeImage() {
    setImageBase64(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  async function handleSendMessage() {
    const trimmedInput = input.trim();

    if ((!trimmedInput && !imageBase64) || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: trimmedInput || "[Фото]",
      imageBase64: imageBase64 || undefined,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const body: any = { message: trimmedInput };
      if (imageBase64) {
        body.image = imageBase64;
      }

      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Ошибка запроса к AI");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.answer || "AI не вернул ответ." },
      ]);
    } catch (error) {
      console.error("AI CHAT ERROR:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Произошла ошибка при получении ответа. Попробуйте ещё раз.",
        },
      ]);
    } finally {
      setIsLoading(false);
      setImageBase64(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSendMessage();
  }

  function handleClearChat() {
    setMessages([
      {
        role: "assistant",
        content: "Чат очищен. Я снова готов помочь с выбором техники и электроники.",
      },
    ]);
  }

  return (
    <>
      <button className="ai-chat-toggle" onClick={toggleChat}>
        {isOpen ? "×" : "AI"}
      </button>

      {isOpen && (
        <div className="ai-chat-window">
          <div className="ai-chat-header">
            <div>
              <h3 className="ai-chat-title">AI-консультант</h3>
              <p className="ai-chat-subtitle">Подбор техники и ответы по товарам</p>
            </div>
            <div className="ai-chat-header-actions">
              <button className="ai-chat-clear-btn" onClick={handleClearChat}>
                Очистить
              </button>
              <button className="ai-chat-close-btn" onClick={closeChat}>
                ×
              </button>
            </div>
          </div>

          <div className="ai-chat-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={
                  msg.role === "user"
                    ? "ai-chat-message ai-chat-message-user"
                    : "ai-chat-message ai-chat-message-assistant"
                }
              >
                {msg.imageBase64 && (
                  <img
                    src={msg.imageBase64}
                    alt="Прикреплённое фото"
                    style={{ maxWidth: "100%", borderRadius: "8px", marginBottom: "6px" }}
                  />
                )}
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="ai-chat-message ai-chat-message-assistant">
                AI печатает...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {imageBase64 && (
            <div className="ai-chat-image-preview">
              <img src={imageBase64} alt="Превью" />
              <button onClick={removeImage} className="ai-chat-remove-image-btn">×</button>
            </div>
          )}

          <div className="ai-chat-input-area">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
              id="ai-chat-file-input"
            />
            <button
              className="ai-chat-attach-btn"
              onClick={() => fileInputRef.current?.click()}
              disabled={isLoading}
              title="Прикрепить фото"
            >
              📷
            </button>

            <input
              type="text"
              className="ai-chat-input"
              placeholder="Напишите ваш вопрос..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
            <button
              className="ai-chat-send-btn"
              onClick={handleSendMessage}
              disabled={isLoading}
            >
              Отправить
            </button>
          </div>
        </div>
      )}
    </>
  );
}