import pool from "@/lib/db";

export async function getAllProducts() {
  const productsResult = await pool.query(`
    SELECT
      products.*,
      categories.name as category
    FROM products
    JOIN categories
      ON products.category_id = categories.id
    ORDER BY products.id
  `);

  const products = productsResult.rows;

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

    product.colors = colorsResult.rows;

    product.memory = memoryResult.rows;
  }

  return products;
}

export async function getProductById(id: number) {
  const productResult = await pool.query(
    `
    SELECT
      products.*,
      categories.name as category
    FROM products
    JOIN categories
      ON products.category_id = categories.id
    WHERE products.id = $1
    `,
    [id]
  );

  const product = productResult.rows[0];

  if (!product) {
    return null;
  }

  const imagesResult = await pool.query(
    `
    SELECT *
    FROM product_images
    WHERE product_id = $1
    `,
    [id]
  );

  const colorsResult = await pool.query(
    `
    SELECT *
    FROM product_colors
    WHERE product_id = $1
    `,
    [id]
  );

  const memoryResult = await pool.query(
    `
    SELECT *
    FROM product_memory
    WHERE product_id = $1
    `,
    [id]
  );

  product.images = imagesResult.rows;

  product.colors = colorsResult.rows;

  product.memory = memoryResult.rows;

  return product;
}