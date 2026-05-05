import { ProductsList } from "@/components/ProductList";
import { mockProducts } from "@/data/mockProducts";
import DirectoryCatalog from "@/components/DirectoryCatalog";
import { ProductInfo } from "@/components/ProductPage";
import AIChat from "@/components/AIChat";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = mockProducts.find((p) => p.id === Number(slug));

  if (!product) {
    return <div>Товар с ID {slug} не найден</div>;
  }

  return (
    <div>
      <DirectoryCatalog title={product.title} />

      <ProductInfo product={product} />

      <ProductsList title="Аксессуары" />

      {/*<AIChat />*/}
    </div>
  );
}
