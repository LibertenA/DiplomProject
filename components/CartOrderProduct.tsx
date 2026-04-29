interface CartOrderProductProps {
    price: number;
    discount: number;
    count: number;
}

export default function CartOrderProduct ({ price, discount, count}: CartOrderProductProps) {
    return(
        <div className="order_place">
            <h3 className="order-place_title"> Заказ</h3>

            <div className="order-place_details">
                <div className="order-place_row">
                    <span className="order-place_label">{count} товара</span>
                    <span className="order-place_price">{price*count} ₽</span>
                </div>

                <div className="order-place_row">
                    <span className="order-place_label">Скидка</span>
                    <span className="order-place_discount-value">-{discount*count} ₽</span>
                </div>

                <div className="order-place_row_total-price">
                    <span className="order-place_label">К оплате</span>
                    <span className="order-place_total-price">{price*count - discount*count} ₽</span>
                </div>
            </div>
                
            <button className="purchase_btn">
                Перейти к оформлению
            </button>
        </div>
    )
}