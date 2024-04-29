import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const CardDetails = () => {
    const [viewDetail, setViewDetails] = useState(''); 
    console.log(viewDetail);
    const {id} = useParams();
    useEffect(()=>{

        fetch(`http://localhost:5173/viewDetail/${id}`)
        .then(res => res.json())
        .then(data => {
            setViewDetails(data)
        })
    },[id])

    // const cardDetail = useLoaderData();
    // console.log(cardDetail);
    // const {id} = useParams();
    // const dataInt = parseInt(id);
    // const cardBio = cardDetail.find(item => item.id == dataInt)
    // console.log(cardBio);

    const {name, photo, price, description, itemName, subcategory} = viewDetail;


    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mt-[52px] mb-[52px] w-[80%] mx-auto ">
       
            <title>View Details {id}</title>
      

    <div className="flex justify-center items-center bg-slate-200 border rounded-xl">
        <img src={photo} alt="Card Images" className="lg:p-8 p-2 lg:w-[1000px] w-[300px]"/>
    </div>
<div className="c-details">
    <h2 className="text-[#131313] text-[40px]">{description}</h2>
    <span className="text-[#646262] text-[20px]">Category : {itemName}</span>
  
    <p className="text-[#131313] mt-3"><span className="text-[#131313] text-[16px]">Price : </span>{price}</p>
    <p></p>


<div className="flex gap-[65px] mt-4">
   <div className="text-[16px] text-[#646262]">
   <p>Status :</p>
    <p className="mt-2 mb-2">location :</p>
    <p>Area :</p>
   </div>
   <div className="text-[16px] text-[#646262]">
    <p>{subcategory}</p>
    {/* <p  className="mt-2 mb-2">{location}</p> */}
    <p>{name}</p>
   
   </div>
</div>

<div className="facilities flex gap-2 mt-1">
    {/* <p>#{facilities[1]}</p>
    <p>#{facilities[2]}</p> */}
</div>

    <div className="mt-5">
    <button className="btn bg-[#F60]">Buy Now</button>
    </div>
   

</div>
</div>
    );
};

export default CardDetails;