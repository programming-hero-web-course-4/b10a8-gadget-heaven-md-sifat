import { useContext, useState } from "react";
import { homeContext } from "../Home/Home";
import { FaTimes } from "react-icons/fa";

const Cart = () => {
    const { cart, setCart } = useContext(homeContext);
    const [sorted, setSorted] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const totalCost = cart.reduce((acc, item) => acc + item.price, 0);

    const sortByPrice = () => {
        const sortedCart = [...cart].sort((a, b) => (sorted ? a.price - b.price : b.price - a.price));
        setCart(sortedCart);
        setSorted(!sorted);
    };

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.product_id !== id));
    };

    const handlePurchase = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
            setCart([]);
        }, 2000);
    };

    return (
        <div className="p-4 border-transparent rounded-lg w-2/3 mx-auto bg-gray-100">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">Cart</h1>
                <h2 className="text-lg font-bold">Total cost: ${totalCost}</h2>
                <button onClick={sortByPrice} className="px-4 py-2 bg-purple-600 text-white rounded">
                    Sort by Price
                </button>
                <button onClick={handlePurchase} className="px-4 py-2 bg-purple-700 text-white rounded">
                    Purchase
                </button>
            </div>

            {cart.map((item) => (
                <div key={item.product_id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md my-2">
                    <img src={item.product_image} alt={item.product_title} className="w-20 h-20 object-cover rounded" />
                    <div className="flex-1 px-4">
                        <h2 className="text-lg font-semibold">{item.product_title}</h2>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        <p className="text-md font-bold">Price: ${item.price}</p>
                    </div>
                    <button onClick={() => removeItem(item.product_id)} className="text-red-500 hover:text-red-700">
                        <FaTimes size={20} />
                    </button>
                </div>
            ))}

            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.6)]">
                    <div className="bg-white p-6 rounded-lg text-center shadow-lg">
                        <span className="text-green-500 text-4xl">✅</span>
                        <h2 className="text-xl font-bold">Payment Successfully</h2>
                        <p>Thanks for purchasing.</p>
                        <p className="text-lg font-bold">Total: ${totalCost}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
