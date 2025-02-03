import banner from '../../assets/banner.jpg'
import { useContext, useState } from "react"
import { homeContext } from "../Home/Home"
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {
    const { data } = useContext(homeContext);
    // console.log(data);
    const [selectedCata, setCata] = useState('All Products');

    const selectedGadgets = selectedCata === 'All Products' ? data : data.filter(item => item.category === selectedCata);

    console.log(selectedGadgets);

    return (
        <div className="flex flex-col h-auto mx-[5%] bg-gray-100 ">
            <div className="header w-[100%] h-[70vh] border-transparent border-2 rounded-b-2xl bg-[#9538E2] ">
                <div className="title px-[15%] pt-10 text-5xl text-center font-bold text-white">
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </div>

                <div className="dis px-[20%] pt-10 text-md text-center  text-white">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </div>

                <div className="btn mx-[46%] py-2 text-[#9538E2] bg-white font-bold rounded-3xl my-5 text-center border-2 border-white">
                    Shop Now
                </div>
            </div>

            <div className="banner w-[55%] absolute top-[55%] left-[22%]  h-[60vh] border-6 rounded-3xl border-white ">
                <img className='w-full h-[65vh] border-transparent rounded-3xl' src={banner} alt="" />
            </div>
            <div className="filler w-[55%]   h-[60vh] ">

            </div>


            <div className='text-4xl mb-6 font-bold text-center'>Explore Cutting-Edge Gadgets</div>

            <div className="cont ml-12 flex justify-center w-[90%] h-auto  ">
                <div className="catagory w-[15%] bg-white border-2 border-gray-300 rounded-3xl p-2 h-[55vh]">
                    <div
                        className={`btn border-2 border-transparent rounded-3xl  m-2 p-2 cursor-pointer ${selectedCata === 'All Products' ? 'bg-[#9538E2] text-white' : 'bg-gray-100'}`}
                        onClick={() => setCata('All Products')}>
                        All Products
                    </div>
                    <div
                        className={`btn border-2 border-transparent rounded-3xl  m-2 p-2 cursor-pointer ${selectedCata === 'Laptops' ? 'bg-[#9538E2] text-white' : 'bg-gray-100'}`}
                        onClick={() => setCata('Laptops')}>
                        Laptops
                    </div>
                    <div
                        className={`btn border-2 border-transparent rounded-3xl  m-2 p-2 cursor-pointer ${selectedCata === 'Smartphones' ? 'bg-[#9538E2] text-white' : 'bg-gray-100'}`}
                        onClick={() => setCata('Smartphones')}>
                        Smartphones
                    </div>
                    <div
                        className={`btn border-2 border-transparent rounded-3xl  m-2 p-2 cursor-pointer ${selectedCata === 'Accessories' ? 'bg-[#9538E2] text-white' : 'bg-gray-100'}`}
                        onClick={() => setCata('Accessories')}>
                        Accessories
                    </div>
                    <div
                        className={`btn border-2 border-transparent rounded-3xl  m-2 p-2 cursor-pointer ${selectedCata === 'Smartwatches' ? 'bg-[#9538E2] text-white' : 'bg-gray-100'}`}
                        onClick={() => setCata('Smartwatches')}>
                        Smart Watches
                    </div>
                    <div
                        className={`btn border-2 border-transparent rounded-3xl  m-2 p-2 cursor-pointer ${selectedCata === 'MacBook' ? 'bg-[#9538E2] text-white' : 'bg-gray-100'}`}
                        onClick={() => setCata('MacBook')}>
                        MacBook
                    </div>

                </div>

                <div className="gadgets w-[85%] mx-3 rounded-2xl h-auto border-2 border-transparent grid grid-cols-3 auto-rows-fr gap-4 ">
                    {selectedGadgets.map(gadget => <Gadget key={gadget.product_id} gadget = {gadget}  ></Gadget>)}

                </div>
            </div>







        </div>


    );
};

export default Gadgets;