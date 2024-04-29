import { Link } from "react-router-dom";


const CardData = ({ cardList }) => {

  const {photo, price, description, itemName, _id} = cardList;

  return (
    <div className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
     <img src={photo} alt="Industrial-Products-Images" className="border rounded-xl h-[190px] " />
      <div className="grid gap-2">
        <h1 className="text-lg font-semibold ">{itemName}</h1>
        <p className="text-sm text-gray-500 dark:text-white/60 flex-grow">{description}</p>
        <div className="text-lg font-semibold">${price}</div>
      </div>
      <div className="flex gap-4">
        <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">Add to Cart</button>
      
       <Link to={`/cardDetails/${_id}`}>
       <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">View Details</button>
       </Link>
     
        
      </div>
    </div>
  );
};

export default CardData;