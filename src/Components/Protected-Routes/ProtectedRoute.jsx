import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Auth-Provider/AuthProvaider";



const ProtectedRoute = ({children}) => {
    console.log(children);

    const locationRoutes  = useLocation()

    const {user} = useContext(AuthContext)
    if(user) {
        return children
    }
    return <Navigate to="/login" state={locationRoutes?.pathname}></Navigate>
   
};

export default ProtectedRoute;