import CartOrderProduct from "@/components/CartOrderProduct";
import CartProduct from "@/components/CartProduct";
import { mockProducts } from "@/data/mockProducts";

export default function CartProductsPlace() {
    const totalCount = mockProducts.reduce((sum, product) => sum + product.count, 0);
    const totalPrice = mockProducts.reduce(
        (sum, product) => sum + product.price * product.count,
        0
    );
    const totalDiscount = mockProducts.reduce(
        (sum, product) => sum + product.discount * product.count,
        0
    );

    return(
        <div className="cart_place">
            <div className="cart-container">
                <h2 className="cart-title">Корзина</h2>
                {mockProducts.map((product) => (
                <CartProduct
                    key= {product.id} 
                    code= {product.id}
                    title= {product.title}
                    price={product.price}
                    color={product.color}
                    memory={product.memory}
                    ram={product.ram}
                    count={product.count}
                />
                ))}
            </div>
             
            <CartOrderProduct 
                price={totalPrice}
                discount={totalDiscount}
                count={totalCount}
            />
        </div>
    )
}