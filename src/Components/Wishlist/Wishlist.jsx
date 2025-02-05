import { useContext } from "react";
import { homeContext } from "../Home/Home";
import { FaTimes } from "react-icons/fa";

const Wishlist = () => {

    const { wishlist, setWishlist } = useContext(homeContext);



    const removeItem = (id) => {
        setWishlist(wishlist.filter((item) => item.product_id !== id));
    };

    
    return (
        <div>
            <div className="p-4 border-transparent rounded-lg w-2/3 mx-auto bg-gray-100">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold">WishList</h1>
                    
                </div>

                {wishlist.map((item) => (
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

            </div>
        </div>
    );
};

export default Wishlist;