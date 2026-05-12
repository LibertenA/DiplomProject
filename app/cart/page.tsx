import { ProductsList } from "@/components/ProductList/";
import { CartProductsPlace } from "@/components/CartPage";

export default function Page() {
  return (
    <div>
        <CartProductsPlace />

        <ProductsList title="Рекомендации" />
    </div>
  );
}
