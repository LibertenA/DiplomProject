interface ProductPriceProps {
    price: number;
    discount: number;
    installment: number;
}

export default function ProductPrice({price, discount, installment}: ProductPriceProps) {
    return(
        <div className="product-card">
            <div className="product-card_price-block">
                <span className="old_price"> {price} ₽</span>
                <div className="current_price">
                    {price - discount} ₽
                </div>
            </div>

            <button type="button" className="add-to-cart-btn">
                <img src="/cart.png" />
                <span>В корзину</span>
            </button>

            <div className="installment-info">
                Доступно <a href="">в рассрочку</a> от {installment} ₽/мес
            </div>
        </div>
    )
}