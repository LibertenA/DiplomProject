import { ProductsList } from "@/components/ProductList";
import DirectoryCatalog from "@/components/DirectoryCatalog";
import { ProductPage } from "@/components/ProductPage";
import AIChat from "@/components/AIChat";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function getProduct(id: string) {
  const response = await fetch(
    `http://localhost:3000/api/products/${id}`,
    {
      cache: "no-store",
    }
  );

  const data = await response.json();

  return data.product;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const product = await getProduct(slug);

  if (!product) {
    return <div>Товар с ID {slug} не найден</div>;
  }

  return (
    <div>
      <DirectoryCatalog
        title={product.title}
        category={product.category}
      />

      <ProductPage product={product} />

      <ProductsList title="Аксессуары" />

      {/*<AIChat />*/}
    </div>
  );
}