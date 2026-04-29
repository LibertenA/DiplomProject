import CartOrderProduct from "@/components/CartOrderProduct";
import CartProduct from "@/components/CartProduct";

export default function CartProductsPlace() {
    const products = [
        { 
            code: 2090229,
            title: "Apple MacBook Neo 13 (A18 Pro, 6C СPU/5С GPU, 2026)",
            price: 74990,
            color: "синий индиго",
            memory: 256,
            ram: 8,
            discount: 5259,
            count: 2,
        },
        { 
            code: 2090229,
            title: "Apple MacBook Neo 13 (A18 Pro, 6C СPU/5С GPU, 2026)",
            price: 74990,
            color: "синий индиго",
            memory: 256,
            ram: 8,
            discount: 5259,
            count: 2,
        },
    ];

    return(
        <div className="cart_place">
            <div className="cart-container">
                <h2 className="cart-title">Корзина</h2>
                {products.map((product, index) => (
                <CartProduct
                    key={index} 
                    code= {product.code}
                    title= {product.title}
                    price={product.price}
                    color={product.color}
                    memory={product.memory}
                    ram={product.ram}
                />
                ))}
            </div>
             
            <CartOrderProduct 
                price={85980} 
                discount={5259} 
                count={2} 
            />
        </div>
    )
}