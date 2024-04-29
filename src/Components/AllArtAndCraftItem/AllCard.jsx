import { useLoaderData } from "react-router-dom";
import ShowCard from "../ShowAllCard/ShowCard";


const AllCard = () => {
    const allCard = useLoaderData();
    console.log(allCard);
    
    return (

        <div>
            <div>{allCard.length}</div>
          {
            allCard.map(allCard => <ShowCard allCard={allCard} key={allCard._id}></ShowCard>)
          }
        </div>
    );
};

export default AllCard;