import { useContext } from "react";
import { useParams } from "react-router-dom";
import { homeContext } from "../Home/Home";
import { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import ReactRating from 'react-rating';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GadgetD = () => {
    const { productId } = useParams();
    const { data , cart, wishlist , setCart , setWishlist } = useContext(homeContext);
    // console.log(productId + "ck");

    const adtoCart = (id) =>{
        if(cart.includes(id)){
            toast.warn("Item is already in the cart!");
            return;
        }
        setCart([...cart , id]);
        toast.success("Item added to cart! 🎉");
    }
    
    const adtoWish = (id) =>{
        if(wishlist.includes(id)){
            toast.warn("Item is already in the Wishlist!");
            return;
        }
        setWishlist([...wishlist , id]);
        toast.success("Item added to Wishlist! 🎉");

    }

    const [product, setProduct] = useState();
    // console.log(data);

    useEffect(() => {
        const foundProduct = data.find(item => item.product_id == productId);
        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [productId, data]);

    if (!product) {
        return <div>Loading...</div>;
    } else {
        // console.log(product);
    }

    const {
        product_id,
        product_title,
        product_image,
        category,
        price,
        description,
        specifications,
        availability,
        rating,
        other_field,
    } = product;





    return (

        <div className="cont flex justify-center h-auto  flex-col">
            <div className="header w-[100%] h-[70vh] border-transparent border-2  bg-[#9538E2] ">
                <div className="title px-[15%] pt-10 text-5xl text-center font-bold text-white">
                    Product Details
                </div>
                <div className="dis px-[20%] pt-10 text-md text-center  text-white">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </div>




            </div>

            <div className="gadget-card flex flex-row mx-[15%] absolute top-[45%] bg-white border-2 rounded-lg p-4 w-[70%] m-4 shadow-lg hover:shadow-xl transition-all">
                <div className="banner w-[40%]">
                    <img
                        src={product_image}
                        alt={product_title}
                        className="w-full h-[200px] object-cover rounded-lg"
                    />
                </div>

                <div className="p-4">
                    <h3 className="text-xl font-semibold">{product_title}</h3>
                    <p className="text-sm text-gray-600">{category}</p>
                    <p className="text-md text-gray-800 mt-2">{description}</p>
                    <p className="text-lg font-bold text-blue-600 mt-2">${price}</p>
                    <p className={`text-sm mt-2 ${availability ? 'text-green-500' : 'text-red-500'}`}>
                        {availability ? 'In Stock' : 'Out of Stock'}
                    </p>
                    <div className="mt-4">
                        <strong>Rating: </strong>
                        <ReactRating
                            initialRating={rating}
                            readonly
                            fractions={2}
                            fullSymbol={<FaStar className="text-yellow-400" />}
                            emptySymbol={<FaRegStar className="text-gray-300" />}
                            halfSymbol={<FaStarHalfAlt className="text-yellow-400" />}
                        />
                        <span className="p-1 pr-2 mx-3 border-1 border-transparent bg-gray-200 text-center rounded-full"  > {rating} </span>
                    </div>
                    {other_field && (
                        <p className="text-sm mt-2 text-gray-500">
                            <strong>Other Info: </strong>{other_field}
                        </p>
                    )}
                    <div className="mt-4">
                        <strong>Specifications:</strong>
                        <ul className="list-disc pl-6 text-sm text-gray-700">
                            {specifications.map((spec, index) => (
                                <li key={index}>{spec}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="btn flex flex-row">
                        <div onClick={()=> adtoCart(product_id)} className="select border-2 border-transparent mt-1 cursor-pointer text-center items-center w-40 text-white bg-[#9538E2] flex px-2 rounded-2xl">
                            Add to cart
                            <BsCart3 className="mx-2" size={20} />

                        </div>
                        <div onClick={()=>adtoWish(product_id)} className="select text-center flex flex-cols my-2  justify-center border-2 border-gray-300 cursor-pointer p-2 rounded-full mx-3">
                            <CiHeart size={28} />

                        </div>

                    </div>

                </div>

            </div>

            <div className="filler w-full h-[70vh]"></div>



        </div>




    );
};



export default GadgetD;
