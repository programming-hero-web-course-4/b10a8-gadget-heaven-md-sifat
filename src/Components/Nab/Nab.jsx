import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const Nab = () => {
    return (
        <div className="flex w-full h-16 p-2 justify-around" >
            <div className="title text-3xl font-bold">
                Gadget Heaven
            </div>
            <div className="links my-1.5 text-lg">
                <Link className="px-2" to={"/"}>Home</Link>
                <Link className="px-2" to={"/dashboard"}>Dashboard</Link>
                <Link className="px-2" to={"/stats"}>Statistics</Link>
            </div>

            <div className="boxes flex">
                <div className="cart border-1 p-2 mx-4 rounded-4xl">
                    <BsCart3 size={28} />
                    
                </div>
                <div className="cart border-1 p-2 rounded-full">
                    <CiHeart size={28} />
                    
                </div>
            </div>
        </div>
    );
};

export default Nab;