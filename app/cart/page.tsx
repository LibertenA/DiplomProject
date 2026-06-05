import { ProductList } from "@/components/ProductList/";
import { CartProductsPlace } from "@/components/CartPage";

export default function Page() {
  return (
    <div>
        <CartProductsPlace />

        <ProductList title="Рекомендации" />
    </div>
  );
}
