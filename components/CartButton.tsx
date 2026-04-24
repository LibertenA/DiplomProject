interface CartButtonProps {
    count: number;
}

export default function CartButton( { count }: CartButtonProps) {
    return(
        <button className="cart_btn">
            <img src="/busket.png" />
            <div className="busket_count">    
                {count}
            </div>
            <p>Корзина</p>
        </button>
    );
}