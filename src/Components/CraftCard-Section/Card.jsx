import { Link } from "react-router-dom";


const CardData = ({ cardList }) => {

  const {photo, price, description, id} = cardList;

  return (
    <div className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
     <img src={photo} alt="Industrial-Products-Images" className="border rounded-xl h-[190px] " />
      <div className="grid gap-2">
        <h1 className="text-lg font-semibold ">{price}</h1>
        <p className="text-sm text-gray-500 dark:text-white/60 flex-grow">{description}</p>
        <div className="text-lg font-semibold">{price}</div>
      </div>
      <div className="flex gap-4">
        <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">Add to Cart</button>
      
       <Link to={`/cardDetails/${id}`}>
       <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">View Details</button>
       </Link>
     
        
      </div>
    </div>
  );
};

export default CardData;











// import { Link } from "react-router-dom";


// const Card = ({cardList}) => {
//     console.log(cardList);
//     const {name , email, photo, rating, description} = cardList;
//     return (
//         <div className=" shadow-2xl  p-6 rounded-3xl">
//                 <div className="flex justify-center items-center">
//                     <img className="w-full h-[300px]" src={photo} alt="" />
//                 </div>
//                 <div className="md:h-[220px] pt-3">
//                     <div className="flex  justify-between gap-16">
//                         <div>
//                             <h2 className="font-bold text-xl">{name}</h2>
                            
//                         </div>
//                         {/* <div className="flex text-xl gap-4">
//                             <LuFacebook className="cursor-pointer"/>
//                             <FaCameraRetro className="cursor-pointer"/>
//                             <FiTwitter className="cursor-pointer"/>
//                         </div> */}
//                     </div>
//                     <div className="pb-3">
//                        <h3 className="text-gray-400 font-bold "><span>Country: </span></h3>
//                     </div>
//                     <hr />
//                     <p className="pt-2">{description}</p>
//                     <div className="mt-3">
//                        {/* <Link to={`/CardDetails/${spots._id}`}>
//                            <button className="btn bg-orange-300">View Details</button>
//                        </Link> */}
//                     </div>
//                 </div>
               
//             </div>


//     );
// };

// export default Card;