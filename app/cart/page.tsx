import ProductsList from "@/components/ProductsList";
import CartProductsPlace from "@/components/CartProductsPlace";

export default function Page() {
    return(
        <div>
            <CartProductsPlace />

            <div className="recommendation_place">
                <h2>Рекомендации</h2>
                <ProductsList />
            </div>
        </div>
    )

}