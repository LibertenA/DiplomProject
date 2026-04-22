import { askAI } from "@/lib/ai"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const message = body.message

    const answer = await askAI(message)

    return Response.json({
      success: true,
      answer: answer
    })
  } catch (error) {
    console.error(error)

    return Response.json({
      success: false,
      error: "AI request failed"
    })
  }
}