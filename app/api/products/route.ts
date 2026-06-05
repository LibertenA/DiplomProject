import { getAllProducts } from "@/services/product.service";

export async function GET() {
  try {
    const products = await getAllProducts();

    return Response.json({
      success: true,
      products,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: "Failed to fetch products",
      },
      {
        status: 500,
      }
    );
  }
}