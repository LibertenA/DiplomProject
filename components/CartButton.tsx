interface CartButtonProps {
    count: number;
}

export default function CartButton( { count }: CartButtonProps) {
    return(
        <button className="cart_btn">
            <img src="/cart(dark).png" className="cart_logo"/>
            <div className="cart_count">    
                {count}
            </div>
            Корзина
        </button>
    );
}