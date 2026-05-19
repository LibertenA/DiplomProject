import pool from "@/lib/db";

export type AIMessageRole = "user" | "assistant";

export type AIMessage = {
  role: AIMessageRole;
  content: string;
};

export async function saveAIMessage(
  role: AIMessageRole,
  content: string
) {
  await pool.query(
    `
    INSERT INTO ai_messages (role, content)
    VALUES ($1, $2)
    `,
    [role, content]
  );
}

export async function getRecentAIMessages(limit = 10): Promise<AIMessage[]> {
  const result = await pool.query(
    `
    SELECT role, content
    FROM ai_messages
    ORDER BY created_at DESC
    LIMIT $1
    `,
    [limit]
  );

  return result.rows.reverse();
}

export async function clearAIMessages() {
  await pool.query(
    `
    DELETE FROM ai_messages
    `
  );
}