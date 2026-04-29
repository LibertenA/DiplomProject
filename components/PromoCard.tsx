interface PromoCardProps {
  title: string;
  price: number;
  /*rating: number;
  gpuInterface: string;
  frequency: string;*/
}

export default function PromoCard ({ title, price, /*rating, gpuInterface, frequency*/ }: PromoCardProps) {
    return(
        <div className="product-card">
            <div className="product-card_icon">
                <img src="/product1.png" className="product_icon"/>
            </div>

            <div className="product-card_main">
                <h3 className="product-card_title">{title}</h3>
                {/*<p>Оценка: {rating} звезд(ы)</p>*/}

                <p className="product-card_price">{price} ₽</p>                    
            </div>
            
            {/*<div className="product-card_features">
                <p>Interface: {gpuInterface}</p>
                <p>Frequency: {frequency}</p>
            </div>*/}

            <button className="product-card_button">
                <img src="/cart.png" className="cart_logo"/>
                <p>В корзину</p>
            </button>
        </div>
    )
}