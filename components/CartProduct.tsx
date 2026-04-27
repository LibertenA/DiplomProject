export default function CartProduct () {
    return(
        <div className="cart-container">
            <h2 className="cart-title">Корзина</h2>

            <div className="cart-product_place">
                <div className="cart-product_icon">
                    <img src="/product1.png" />
                </div>

                <div className="cart-product_info">
                    <span className="cart-item_code">
                        Код товара 
                    </span>
                    <h3 className="cart-item_name">
                        Apple MacBook Neo 13" (A18 Pro, 6C СPU/5С GPU, 2026), 8 ГБ, 256 ГБ SSD, синий индиго
                    </h3>
                </div>

                <div className="cart-item_counter">
                    <button type="button" className="counter-btn">-</button>
                    <input type="number" className="counter-value"/>
                    <button type="button" className="counter-btn">+</button>
                </div>

                <div className="cart-item_price">
                    74 990 ₽
                </div>
            </div>
        </div>
    )
}