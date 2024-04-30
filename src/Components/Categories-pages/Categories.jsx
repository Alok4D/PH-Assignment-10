import { limit } from "firebase/firestore";
import HomeDecor from "../../../public/CateGories-Images/01.jpg";
import Basket from "../../../public/CateGories-Images/02.jpg";
import Light from "../../../public/CateGories-Images/03.jpg";
import Cutlery from "../../../public/CateGories-Images/04.jpg";
import Canvas from "../../../public/CateGories-Images/05.jpg";
import Features from "../Fetures-Pages/Features";


// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';




const Categories = () => {

    // useEffect(() => {
    //     AOS.init({
    //       duration: 2000,
    //     });
    //   }, []);

    return (
        <section className="py-6 w-[80%] mx-auto mt-7 dark:bg-gray-100 dark:text-gray-800" data-aos="zoom-in">

        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <p className="max-w-2xl text-center text-[#b18b5e] text-[18px] font-semibold">SHOP BY CATEGORIES</p>
            <h1 className="text-4xl font-bold leading-8 text-center sm:text-5xl">Designed by artists, made <br /> by us, just for you.</h1>
           
            <div className="flex flex-row flex-wrap-reverse justify-center pt-8">
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-50 h-50 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={HomeDecor} />
                    <p className="text-xl font-semibold leading-tight">Home Decor</p>
                    <p className="dark:text-gray-600 mt-2">18 Products</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-50 h-50 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={Basket} />
                    <p className="text-xl font-semibold leading-tight">Basket Storage</p>
                    <p className="dark:text-gray-600 mt-2">19 Products</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-50 h-50 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={Canvas} />
                    <p className="text-xl font-semibold leading-tight">Home Light</p>
                    <p className="dark:text-gray-600 mt-2">16 Products</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-50 h-50 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src= {Cutlery} />
                    <p className="text-xl font-semibold leading-tight">Cultery</p>
                    <p className="dark:text-gray-600 mt-2">10 Products</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-50 h-50 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={Light} />
                    <p className="text-xl font-semibold leading-tight">Canvas and Art Boards</p>
                    <p className="dark:text-gray-600 mt-2">3 Products</p>
                </div>
               
            </div>
        </div>
        <div>
            <Features></Features>
        </div>
    </section>
    );
};

export default Categories;