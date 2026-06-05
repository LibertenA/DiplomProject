import pool from "@/lib/db";

type ProductColorRow = {
  id: number;
  color_name: string;
  color_code: string;
};

type ProductMemoryRow = {
  id: number;
  memory_value: number;
};

export async function getAIProducts() {
  const result = await pool.query(`
    SELECT
      products.*,
      categories.name as category
    FROM products
    JOIN categories
      ON products.category_id = categories.id
  `);

  const products = result.rows;

  for (const product of products) {
    const imagesResult = await pool.query(
      `
      SELECT *
      FROM product_images
      WHERE product_id = $1
      `,
      [product.id]
    );

    const colorsResult = await pool.query(
      `
      SELECT *
      FROM product_colors
      WHERE product_id = $1
      `,
      [product.id]
    );

    const memoryResult = await pool.query(
      `
      SELECT *
      FROM product_memory
      WHERE product_id = $1
      `,
      [product.id]
    );

    product.images = imagesResult.rows;

    product.color = (
      colorsResult.rows as ProductColorRow[]
    ).map((color) => ({
      id: color.id,
      color: color.color_name,
      colorCode: color.color_code,
    }));

    product.memory = (
      memoryResult.rows as ProductMemoryRow[]
    ).map((memory) => ({
      id: memory.id,
      memory: memory.memory_value,
    }));
  }

  return products;
}

/**
 * Сохраняет сообщение пользователя или ассистента в БД
 */
export async function saveAIMessage(role: string, content: string) {
  const result = await pool.query(
    `INSERT INTO ai_messages (role, content) VALUES ($1, $2) RETURNING id`,
    [role, content]
  );
  return result.rows[0]?.id;
}

/**
 * Возвращает последние N сообщений
 */
export async function getRecentAIMessages(limit: number = 10) {
  const result = await pool.query(
    `SELECT role, content FROM ai_messages ORDER BY created_at DESC LIMIT $1`,
    [limit]
  );
  return result.rows.reverse();
}

// ---- ДОБАВЛЕННАЯ ФУНКЦИЯ ----

/**
 * Поиск товаров по названию (ILIKE) – используется для явного сравнения
 */
export async function searchProducts(query: string) {
  const result = await pool.query(
    `SELECT products.*, categories.name as category
     FROM products
     JOIN categories ON products.category_id = categories.id
     WHERE products.title ILIKE $1
     ORDER BY products.id
     LIMIT 10`,
    [`%${query}%`]
  );
  return result.rows;
}