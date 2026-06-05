import { getProductById } from "@/services/product.service";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  request: Request,
  { params }: Params
) {
  try {
    const { id } = await params;

    const productId = Number(id);

    if (Number.isNaN(productId)) {
      return Response.json(
        {
          success: false,
          error: "Invalid id",
        },
        {
          status: 400,
        }
      );
    }

    const product = await getProductById(productId);

    if (!product) {
      return Response.json(
        {
          success: false,
          error: "Product not found",
        },
        {
          status: 404,
        }
      );
    }

    return Response.json({
      success: true,
      product,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: "Failed to fetch product",
      },
      {
        status: 500,
      }
    );
  }
}