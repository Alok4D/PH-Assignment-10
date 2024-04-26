import Banner from "../Banner/Banner";


const CardSection = () => {
    return (
        <div className="mt-8 mb-8">

         <Banner></Banner>

      <div className="mt-8 mb-8">
        <h2 className="text-[#131313] text-[50px] text-center">Estate Section</h2>
      </div>

{/*  
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 lg:w-[80%] mx-auto" data-aos="zoom-in">
        {
            data.map(cardList => <CardData key={cardList.id} cardList={cardList}></CardData>)
        }
      </div>


        <div>
          <TeamSection></TeamSection>
        </div> */}

    </div>
    );
};

export default CardSection;