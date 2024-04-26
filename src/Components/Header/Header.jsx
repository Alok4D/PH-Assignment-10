import { NavLink } from "react-router-dom";


const Header = () => {
  
const links = (
  <>
    <li className="text-[#F60] rounded-xl text-[16px]"><NavLink to="/">Home</NavLink></li>
    <li className="text-[#F60] rounded-xl text-[16px]"><NavLink to="/aboutUs">All Art & craft Items</NavLink></li>
    <li className="text-[#F60] rounded-xl text-[16px]"><NavLink to="/contact">Add Craft Item</NavLink></li>
    <li className="text-[#F60] rounded-xl text-[16px]"><NavLink to="/contact">My Art&Craft List</NavLink></li>
  </>
);


  return (
    <div className="navbar bg-base-100 w-[100%] m-auto lg:mt-[68px] mt-6 lg:w-[80%] mx-auto">
      <div className="navbar-start max-sm:w-[74%]">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] lg:p-2 shadow bg-base-100 rounded-box lg:w-52">
            {links}
          </ul>
        </div>

     <div className="flex gap-4 justify-center items-center cursor-pointer">
     <img src="../../../public/Logo-Images/logo.png" alt="industrial-logo-image" />
        {/* <h2 className="lg:text-[40px] font-extrabold">Vactor</h2> */}
     </div>

     
      </div>

      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
      </div>
      <div className="lg:navbar-end lg:gap-4 gap-2 ">
        
      
          <div className="flex gap-4 justify-center items-center">
           

        
            <button className="btn bg-[#F60] text-[16px]">Log Out</button></div>
           <a className="btn bg-[#F60] text-[16px]">Login</a>
      </div>
    </div>
  );
};

export default Header;
