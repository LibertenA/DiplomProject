/*"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Здравствуйте. Я AI-консультант магазина. Помогу с выбором бытовой техники и электроники.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

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

  async function handleSendMessage() {
    const trimmedInput = input.trim();

    if (!trimmedInput || isLoading) {
      return;
    }

    const userMessage: Message = {
      role: "user",
      content: trimmedInput,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedInput,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Ошибка запроса к AI");
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.answer || "AI не вернул ответ.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("AI CHAT ERROR:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Произошла ошибка при получении ответа. Попробуйте ещё раз.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  }

  function handleClearChat() {
    setMessages([
      {
        role: "assistant",
        content:
          "Чат очищен. Я снова готов помочь с выбором техники и электроники.",
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
              <p className="ai-chat-subtitle">
                Подбор техники и ответы по товарам
              </p>
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
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === "user"
                    ? "ai-chat-message ai-chat-message-user"
                    : "ai-chat-message ai-chat-message-assistant"
                }
              >
                {message.content}
              </div>
            ))}

            {isLoading && (
              <div className="ai-chat-message ai-chat-message-assistant">
                AI печатает...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="ai-chat-input-area">
            <input
              type="text"
              className="ai-chat-input"
              placeholder="Напишите ваш вопрос..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
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
}*/