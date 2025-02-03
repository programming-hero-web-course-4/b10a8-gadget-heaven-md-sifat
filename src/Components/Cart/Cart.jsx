import { useContext } from "react";
import { homeContext } from "../Home/Home";


const Cart = () => {
    const { data, cart, wishlist, setCart, setWishlist } = useContext(homeContext);

    return (
        <div>
            This is cart
        </div>
    );
};

export default Cart;