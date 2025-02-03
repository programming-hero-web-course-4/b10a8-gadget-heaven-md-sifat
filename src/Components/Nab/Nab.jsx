import { Link , useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const Nab = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    return (
        <div className={` ${isHome ? 'flex mx-[5%] border-2 border-[#9538E2] rounded-t-2xl bg-[#9538E2] text-white mt-5 w-[90%] h-16 p-2 justify-around' : 'flex w-full h-16 p-2 justify-around' } `} >
            <div className="title text-3xl font-bold">
                Gadget Heaven
            </div>
            <div className="links my-1.5 text-lg">
                <Link className={`${isHome ? 'px-2 underline decoration-1 pb-1' : 'px-2'}`} to={"/"}>Home</Link>
                <Link className="px-2" to={"/dashboard"}>Dashboard</Link>
                <Link className="px-2" to={"/stats"}>Statistics</Link>
            </div>

            <div className="boxes flex">
                <div className={`${isHome ? 'cart cursor-pointer border-1 bg-white text-black border-transparent p-2 mx-2 rounded-full' : 'cart border-1 cursor-pointer p-2 mx-2 rounded-full'}`}>
                    <BsCart3 size={28} />
                    
                </div>
                <div className={`${isHome ? 'cart cursor-pointer border-1 bg-white text-black border-transparent p-2 mx-2 rounded-full' : 'cart border-1 cursor-pointer p-2 mx-2 rounded-full'}`}>
                    <CiHeart size={28} />
                    
                </div>
            </div>
        </div>
    );
};

export default Nab;