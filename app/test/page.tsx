"use client";

export default function TestPage() {
  async function handleCheckAI() {
  try {
    const response = await fetch("/api/ai", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        message: "Подскажи мне видеокарту в диапозоне от 400 до 500 долларов"
      })
    })

    const data = await response.json()

    alert(data.answer)
  } catch (error) {
    console.error(error)

    alert("Ошибка")
  }
}

  return (
    <div>
      <button onClick={handleCheckAI}>
        Проверить AI
      </button>
    </div>
  );
}
