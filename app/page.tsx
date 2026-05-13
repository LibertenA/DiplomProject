import Banner from "../components/Banner";
import { ProductsList } from "../components/ProductList/";
import AIChat from "@/components/AIChat";

export default function Page() {
  return (
    <div>
        <Banner />

        <ProductsList title="Специально для вас" />

        <ProductsList title="Рекомендации" />

        <AIChat />
    </div>
  );
}
