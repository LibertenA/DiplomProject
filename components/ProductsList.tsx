import ProductCard from "./ProductCard";
import { mockProducts } from "@/data/mockProducts";

export default function ProductList() {
    return(
        <div className="product_place">
            {mockProducts.map((product) => (
            <ProductCard 
                key={product.id} 
                title= {`Видеокарта ${product.title}`}
                price={product.price}
            />
            ))}
        </div>
    )
}