import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";



const Root = () => {
    return (
        <div>
          <Helmet>
            <title>Art & Craft Store</title>
          </Helmet>

       <div>
       <Header></Header>
         <Outlet></Outlet>
        
       </div>
       
      <Footer></Footer>
     </div>
    );
};

export default Root;