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
                <img src="/product.png" className="product_icon"/>
            </div>
            <div className="product-card_title">
                <h3>{title}</h3>
                {/*<p>Оценка: {rating} звезд(ы)</p>*/}
            </div>
            <div className="product-card_price">
                <p>{price} ₽</p>                    
            </div>
            {/*<div className="product-card_features">
                <p>Interface: {gpuInterface}</p>
                <p>Frequency: {frequency}</p>
            </div>*/}

            <button className="product-card_button">
                <img src="/busket.png" />
                <p>В корзину</p>
            </button>
        </div>
    )
}