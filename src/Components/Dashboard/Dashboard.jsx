import { useContext, useEffect } from "react";
import { homeContext } from "../Home/Home";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";



const Dashboard = () => {
    const {  cart } = useContext(homeContext);

    console.log(cart);

    const navigate = useNavigate();
    const curr = useLocation().pathname;
    console.log(curr);

    useEffect(()=>{
        navigate("/dashboard/cart");
    } , [navigate]);

    return (
        <div className="cont flex justify-center h-auto  flex-col">
            <div className="header w-[100%] h-[50vh] border-transparent border-2  bg-[#9538E2] ">
                <div className="title px-[15%] pt-10 text-5xl text-center font-bold text-white">
                    Dashboard
                </div>
                <div className="dis px-[20%] pt-10 text-md text-center  text-white">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!

                </div>

                <div className="btn flex mt-5 justify-center">
                    <Link to={'/dashboard/cart'} >
                        <div className={`cart mx-2 border-2  p-3 px-10   rounded-4xl ${curr == '/dashboard/cart' ? 'bg-white text-black border-transparent' : 'border-white text-white' } `}> Cart
                        </div>
                    </Link>
                    <Link to={'/dashboard/wishlist'} >
                        <div className={`cart mx-2 border-2  p-3 px-10   rounded-4xl ${curr == '/dashboard/wishlist' ? 'bg-white text-black border-transparent' : 'border-white text-white' } `}> Wishlist
                        </div>
                    </Link>

                </div>

            </div>

            <Outlet></Outlet>

        </div>
    );
};

export default Dashboard;