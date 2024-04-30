import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth-Provider/AuthProvaider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const MyList = () => {
    const {user} = useContext(AuthContext)
    
    const [item, setItem] = useState([])

    const handleDelete =_id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
              fetch(`http://localhost:5000/myCardDelete/${_id}`,{
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Spot has been deleted.",
                        icon: "success"
                      });
                }
              })
            }
          });
    }
    
    useEffect(()=>{
        fetch(`http://localhost:5000/addCraft/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setItem(data);
            console.log(data);
        })
    },[user])
    console.log(item);
    return (
        <div>
          <Helmet><title>My Art & Craft List</title></Helmet>
            <div className="mt-10 mb-10 w-[80%] mx-auto">
                {
                    item.map(item =><div key={item._id}>
                        <div className="overflow-x-auto rounded-2xl mb-5 bg-slate-300">
                            <table className="table border">
                                <tr className="border">
                                    <th className="border">Item Name</th>
                                    <th className="border">Rating</th>
                                    <th className="border">Customization</th>
                                    <th className="border">Photo</th>
                                    <th className="border">Travel Time</th>
                                    <th className="border">Email</th>
                                    <th className="border">Average Cost</th>
                                    <th className="border">Seasonality</th>
                                    <th className="border">Description</th>
                                    <th className="border"></th>
                                </tr>
                                <tr>
                                    <td className="border">{item.itemName}</td>
                                    <td className="border">{item.rating}</td>
                                    <td className="border">{item.customizationExample}</td>
                                    <td className="border">
                                        <img src={item.photo} alt=""  className="h-[70px]"/>
                                    </td>
                                    <td className="border">{item.TravelTime}</td>
                                    <td className="border">{item.email}</td>
                                    <td className="border">{item.price}</td>
                                    <td className="border">{item.seasonality}</td>
                                    <td className="border">{item.description.slice(0,90)}</td>
                                    <td className="flex">
                                        <button onClick={()=>handleDelete(item._id)} className="btn text-sm bg-slate-500">Delete</button>
                                        <Link to={`/update/${item._id}`}>
                                            <button className="btn bg-slate-500">Update</button>
                                        </Link>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyList;

