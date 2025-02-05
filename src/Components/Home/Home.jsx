import { Outlet } from "react-router-dom";
import Nab from "../Nab/Nab";
import Footer from "../Footer/Footer";
import { createContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const homeContext = createContext();

const Home = () => {

    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    console.log(data);
    return (
        <homeContext.Provider value={{ data, cart, wishlist , setCart , setWishlist }} >
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="w-full flex flex-col bg-gray-100  h-auto min-h-screen">
                <div className="nab w-full h-[20%]">
                    <Nab></Nab>
                </div>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </homeContext.Provider>
    );
};

export default Home;