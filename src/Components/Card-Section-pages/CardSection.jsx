import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Card from "../CraftCard-Section/Card";
import Categories from "../Categories-pages/Categories";


const CardSection = () => {
  const craftData = useLoaderData();
  console.log(craftData);

    return (
        <div className="mt-8 mb-8">

         <Banner></Banner>

      <div className="mt-8 mb-8">
        <h2 className="text-[#131313] text-[50px] text-center">Craft Items Section : {craftData.length}</h2>
      </div>

  
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 lg:w-[80%] mx-auto" data-aos="zoom-in">
        {
            craftData.map(cardList => <Card key={cardList.id} cardList={cardList}></Card>)
        }
      </div>

       <div>
       <Categories></Categories>
       </div>
     

    </div>
    );
};

export default CardSection;