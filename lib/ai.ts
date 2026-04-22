export async function askAI(message: string) {
    const startTime = Date.now()
    const controller = new AbortController()

    const timeout = setTimeout(() => {
      controller.abort()
    }, 10000)
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",

        signal: controller.signal,

        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "Diploma Project"
        },

        body: JSON.stringify({
          model: "auto",
          temperature: 0.3,
          max_tokens: 150,

          messages: [
            {
              role: "system",
              content:`
              Ты консультант интернет-магазина техники.
              Отвечай только про электронику и бытовую технику.
              Отвечай кратко (до двух предложений)
              Если пользователь затрагивает тему вне твоей области, то отвечай "Я консультант только по бытовой технике или электронике" и ничего другого не добавляй
              Не выдумывай характеристики
              `,
            },
            {
              role: "user",
              content: message
            }
          ]
        })
      }
    )

    clearTimeout(timeout)

    if (!response.ok) {
  console.error(
    "AI API error:",
    response.status
  )

    return "Ошибка сервиса рекомендаций"
  }

    const data = await response.json()

    if (!data.choices) {
      console.error(
      "Invalid AI response:",
      data
    )
      return "Ошибка обработки ответа AI"
    }

    const answer = data.choices[0].message.content

    const endTime = Date.now()

    console.log(
    "AI response time:",
    (endTime - startTime) / 1000,
    "seconds"
    )

    const usage = data.usage

    console.log(
      "Tokens used:",
      usage.total_tokens
    )

    if (usage.total_tokens > 500) {
      console.warn(
        "Too many tokens used:",
        usage.total_tokens
      )
    }

    return answer
  } catch (error: any) {
    if (error.name === "AbortError") {
      console.error("AI timeout")

      return "AI отвечает слишком долго"
    }
    console.error("AI ERROR:", error)

    return "Ошибка AI"
  }
}