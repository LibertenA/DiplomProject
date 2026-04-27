export default function CartOrderProduct () {
    return(
        <div className="order_place">
            <h3 className="order-place_title"> Заказ</h3>

            <div className="order_place_details">
                <div className="order-place_row">
                    <span className="order-place_label">2 товара</span>
                    <span className="order-place_price">85 980 ₽</span>
                </div>

                <div className="order-place_row">
                    <span className="order-place_label">Скидка</span>
                    <span className="order-place_discount-value">-5 259 ₽</span>
                </div>

                <div className="order-place_row_total-price">
                    <span className="order-place_label">К оплате</span>
                    <span className="order-place_total-price">85 980 ₽</span>
                </div><div className="order-place_row">
                    <span className="order-place_label">2 товара</span>
                    <span className="order-place_price">85 980 ₽</span>
                </div>

                <div className="order-place_row">
                    <span className="order-place_label">Скидка</span>
                    <span className="order-place_discount-value">-5 259 ₽</span>
                </div>

                <div className="order-place_row_total-price">
                    <span className="order-place_label">К оплате</span>
                    <span className="order-place_total-price">85 980 ₽</span>
                </div>
            </div>
                
            <button className="purchase_btn">
                Перейти к оформлению
            </button>
        </div>
    )
}