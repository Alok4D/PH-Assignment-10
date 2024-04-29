import Swal from "sweetalert2";


const AddCraftItem = () => {
    const handleAddCraftItem = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const email = form.email.value;
        const itemName = form.itemName.value;
        const processingTime = form.processingTime.value;
        const customizationExample = form.customizationExample.value;
        const stockStatus = form.stockStatus.value;
        const description = form.description.value;
        const subcategory = form.subcategory.value;
        const newItem = {name, photo, rating, price, email, description, itemName, customizationExample, processingTime, stockStatus, subcategory}
        console.log(newItem);

        // send data to the server
        fetch('http://localhost:5000/addCraft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  form.reset();
            }
        })
    }
    return (
        <div className="gadgetContainer pt-8 w-[80%] mx-auto mb-8">
        <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
          {/* Heading */}
          <div className="mt-5 mb-8">
            <p className="text-center text-3xl font-semibold">
              <span className="mr-3 text-[#FF497C]">
                <i className="bx bxs-alarm-add"></i>
              </span>
              <span className="dark:text-white">
                <span className="text-[#FF497C]">
                
                </span>
                Add Craft Item
              </span>
            </p>
          </div>

          {/* form */}
          <div  className=" mb-10">
                <form onSubmit={handleAddCraftItem} className=" w-full p-5 bg-gray-300">
                   
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <div  className="mb-6">
                            <h3 className="font-bold">User Name :</h3>
                                <label className="input  input-bordered flex items-center gap-2">
                                    <input type="text" name="name" placeholder="User Name"required/>
                                </label>
                            
                            </div>
                            <div  className="mb-6">
                            <h3 className="font-bold">subcategory Name :</h3>
                                <label className="input  input-bordered flex items-center gap-2">
                                    <input type="text" name="subcategory" placeholder="subcategory Name"required/>
                                </label>
                            
                            </div>

                            <div  className="mb-6">
                            <h3 className="font-bold">Photo URL:</h3>
                                <label className="input input-bordered flex items-center gap-2 mb-4">
                                    <input type="url" name="photo" placeholder="Input Photo URL"  required/>
                                </label>
                            
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold">User Email:</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="email" name="email" placeholder="Email" required/>
                                </label>
                                
                            </div>
                            <div className="mb-10">
                                <h3 className="font-bold">Price :</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text"  name="price" placeholder="Price"  required/>
                                    
                                </label>
                            </div>
                        </div>
                         
                        <div>
                        <div  className="mb-6">
                            <h3 className="font-bold">Item Name:</h3>
                                <label className="input  input-bordered flex items-center gap-2">
                                    <input type="text" name="itemName" placeholder="Item Name"required/>
                                </label>
                            
                            </div>

                            <div  className="mb-6">
                            <h3 className="font-bold">stockStatus :</h3>
                                <label className="input input-bordered flex items-center gap-2 mb-4">
                                    <input type="text" name="stockStatus" placeholder="stockStatus"  required/>
                                </label>
                            
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold">processing time :</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" name="processingTime" placeholder="processing Time" required/>
                                </label>
                                
                            </div>
                            <div className="mb-10">
                                <h3 className="font-bold">Rating :</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text"  name="rating" placeholder="Rating"  required/>
                                    
                                </label>
                                
                            </div>
                            <div className="mb-10">
                                <h3 className="font-bold">customization example :</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text"  name="customizationExample" placeholder="customization example"  required/>
                                    
                                </label>
                                
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <h3 className="font-bold">Short Description:</h3>
                        <textarea className="textarea textarea-bordered w-full" name="description" placeholder="Input Short description"></textarea>
                    </div>
                    <button className="btn bg-emerald-400 w-full text-2xl">Add</button>
                </form>
            </div>





        </div>
      </div>
    );
};

export default AddCraftItem;