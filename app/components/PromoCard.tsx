interface PromoCardProps {
  title: string;
  price: number;
  rating: number;
  gpuInterface: string;
  frequency: string;
}

export default function PromoCard ({ title, price, rating, gpuInterface, frequency }: PromoCardProps) {
    return(
        <div className="product-card">
            <div className="product-card_title">
                <h2>{title} </h2>
                <p>Оценка: {rating} звезд(ы)</p>
                <div className=".product-card_price">
                    <p>{price} ₽</p>                    
                </div>
            </div>
            <div className="product-card_features">
                <p>Interface: {gpuInterface}</p>
                <p>Frequency: {frequency}</p>
            </div>
            <div className="product-card_button">
                <button>Купить</button>
            </div>
        </div>
    )
}