import { useContext, useEffect } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth-Provider/AuthProvaider";


const CardDetails = () => {

    const locationRoutes = useLocation()
    console.log(locationRoutes );
    const navigate = useNavigate()
     
     const {user} = useContext(AuthContext)

    const viewDetail = useLoaderData();



    const {name, photo, rating, price, email, description, itemName, customizationExample, processingTime, stockStatus, subcategory} = viewDetail;


    useEffect( () => {
        if(user){
          navigate(locationRoutes .state)
        }
       
      }, [user])

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mt-[52px] mb-[52px] w-[80%] mx-auto ">
       
          
      

    <div className="flex justify-center items-center bg-slate-200 border rounded-xl">
        <img src={photo} alt="Card Images" className="lg:p-8 p-2 lg:w-[1000px] w-[300px]"/>
    </div>
<div className="c-details">
    <span className="text-[#646262] text-[20px]">Item Name : {itemName}</span>
    <h2 className="text-[#131313] text-[18px]">Description : {description}</h2>
   
  
    <p className="text-[#131313] mt-3"><span className="text-[#131313] text-[16px]">Price : </span>{price}</p>
        <p>Rating : {rating}</p>
        <p>User Name : {name}</p>



<div className="flex gap-[65px] mt-4">
   <div className="text-[16px] text-[#646262]">
    <p>Email :</p>
    <p className="mt-2 mb-2">Customization :</p>
    <p className="mt-2 mb-2">stockStatus :</p>
    <p>Processing Time :</p>
    <p>subcategory :</p>
   </div>
   <div className="text-[16px] text-[#646262]">
    <p>{email}</p>
    <p  className="mt-2 mb-2">{stockStatus}</p>
    <p>{processingTime}</p>
    <p className="mt-2">{subcategory}</p>
    <p className="mt-[1px]">{customizationExample}</p>
   
   </div>
</div>



    <div className="mt-5">
    <button className="btn bg-[#F60]">Buy Now</button>
    </div>
   

</div>
</div>
    );
};

export default CardDetails;