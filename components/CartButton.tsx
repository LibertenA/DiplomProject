interface CartButtonProps {
    count: number;
}

export default function CartButton( { count }: CartButtonProps) {
    return(
        <button className="cart_btn">
            <img src="/cart.png" />
            <div className="cart_count">    
                {count}
            </div>
            <p>Корзина</p>
        </button>
    );
}