import Banner from "../components/Banner";
import { ProductList } from "../components/ProductList/";
import AIChat from "@/components/AIChat";

export default function Page() {
  return (
    <div>
        <Banner />

        <ProductList title="Специально для вас" />

        <ProductList title="Рекомендации" />

        <AIChat />
    </div>
  );
}
