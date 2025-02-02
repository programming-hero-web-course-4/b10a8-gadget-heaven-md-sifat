import { Outlet } from "react-router-dom";
import Nab from "../Nab/Nab";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div className="w-full h-auto min-h-screen">
            <div className="nab w-full h-[20%] border-black border-2">
                <Nab></Nab>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;