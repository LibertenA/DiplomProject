import ProductCardButton from "./ProductCardButton";

interface ProductCardProps {
  title: string;
  price: number;
}

export default function ProductCard ({ title, price }: ProductCardProps) {
    return(
        <div className="product-card">
            <div className="product-card_icon">
                <img src="/products/product1.png" className="product_icon"/>
            </div>

            <div className="product-card_main">
                <h3 className="product-card_title">{title}</h3>

                <p className="product-card_price">{price} ₽</p>                    
            </div>

            <ProductCardButton />
        </div>
    )
}