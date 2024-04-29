import { useLoaderData } from "react-router-dom";
import ShowCard from "../ShowAllCard/ShowCard";


const AllCard = () => {
    const allCard = useLoaderData();
    console.log(allCard);
    
    return (

        <div>
            <div className="flex justify-center text-red-600">{allCard.length}</div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 lg:w-[80%] mx-auto" data-aos="zoom-in">
            {
            allCard.map(allCard => <ShowCard allCard={allCard} key={allCard._id}></ShowCard>)
            }
        </div>
        </div>
    );
};

export default AllCard;