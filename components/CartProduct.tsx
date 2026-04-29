interface CartProductProps {
    code: number;
    title: string;
    price: number;
    color: string;
    memory: number;
    ram: number;
    count: number;
}

export default function CartProduct ({code, title, price, color, memory, ram, count}: CartProductProps) {
    return(
        <div className="cart-product_place">
            <div className="cart-product_icon">
                <img src="/products/product1.png" />
            </div>

            <div className="cart-product_info">
                <span className="cart-item_code">
                    Код товара {code}
                </span>
                <h3 className="cart-item_name">
                    {title}, {ram} ГБ, {memory} ГБ SSD, {color}
                </h3>
            </div>

            <div className="cart-item_counter">
                <button type="button" className="counter-btn">
                    <img src="/minus.png" />
                </button>
                <input type="number" className="counter-value" defaultValue={count} />
                <button type="button" className="counter-btn">
                    <img src="/plus.png" />
                </button>
            </div>

            <div className="cart-item_price">
                {price}
            </div>
        </div>
    )
}