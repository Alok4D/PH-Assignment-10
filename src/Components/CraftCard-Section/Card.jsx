import { Link } from "react-router-dom";


const Card = ({cardList}) => {
    console.log(cardList);
    const {name , email, photo, rating, description} = cardList;
    return (
        <div className=" shadow-2xl  p-6 rounded-3xl">
                <div className="flex justify-center items-center">
                    <img className="w-full h-[300px]" src={photo} alt="" />
                </div>
                <div className="md:h-[220px] pt-3">
                    <div className="flex  justify-between gap-16">
                        <div>
                            <h2 className="font-bold text-xl">{name}</h2>
                            
                        </div>
                        {/* <div className="flex text-xl gap-4">
                            <LuFacebook className="cursor-pointer"/>
                            <FaCameraRetro className="cursor-pointer"/>
                            <FiTwitter className="cursor-pointer"/>
                        </div> */}
                    </div>
                    <div className="pb-3">
                       <h3 className="text-gray-400 font-bold "><span>Country: </span></h3>
                    </div>
                    <hr />
                    <p className="pt-2">{description}</p>
                    <div className="mt-3">
                       {/* <Link to={`/CardDetails/${spots._id}`}>
                           <button className="btn bg-orange-300">View Details</button>
                       </Link> */}
                    </div>
                </div>
                Write to Drissho Roy
            </div>


    );
};

export default Card;