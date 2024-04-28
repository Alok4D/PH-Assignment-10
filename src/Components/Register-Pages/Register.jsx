import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Auth-Provaider/AuthProvaider";


const Register = () => {

    // useEffect(() => {
    //     AOS.init({
    //       duration: 2000,
    //     });
    //   }, []);


    useEffect(() => {
        const clear = setInterval(() => {
            console.log("I am called!");
        }, 1000)

        return () => {
            clearInterval(clear)
        }
    })


    const {registerUser, setUser} = useContext(AuthContext)
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const photo = e.target.photo.value;

        if(password.length < 6){
            setError("Password should be at least must be 6 characters")
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setError('password must contain at least 1 upper case character!')
            return;
        }
        else if(!/[a-z]/.test(password)){
            setError('password must contain at least 1 lower character!')
            return;
        }

        else if(password !== confirmPassword){
            setError("Password didn't match")
            return
        }


        // reset error
        setError('');



        console.log(name, photo, email, password, confirmPassword);
        registerUser(email, password, name)
        .then(result => {
            toast.success('User Create Successfully!')
           // update profile
        //    updateProfile(result.user, {
        //     displayName: name,
        //     photoURL: photo,
        // })
            setUser(result.user)
        })
        .catch(error => {
            console.error(error)
            toast.error('Already account created!');
        })
       
    }
    return (
        <div  className="w-80 md:w-96 lg:w-[500px] mx-auto mt-8 border rounded-xl bg-white flex items-center relative overflow-hidden shadow-xl mb-8"  data-aos="zoom-in">
        {/* <Helmet><title>Create a an account</title></Helmet> */}
            {/* register form  */}
            <div className={`p-8 w-full duration-500` }>
                <h1 className="font-extrabold lg:text-4xl pb-4 flex justify-center items-center">Register Now!</h1>

            <form onSubmit={handleRegister} className="space-y-3">

           <div>
           <p>Name</p>
            <input name='name' type="text" placeholder="Type here" className="input input-bordered w-full " required/>
           </div>
           <div>
           <p>Photo</p>
            <input name='photo' type="text" placeholder="Type here" className="input input-bordered w-full " required/>
           </div>
           <div>
           <p>Email</p>
            <input name='email' type="text" placeholder="Type here" className="input input-bordered w-full " required/>
           </div>
           <div>
           <p>Password</p>
          <div className="relative">
          <input name='password' type={ showPassword ? "text" : "password"} placeholder="Password" className="input input-bordered w-full " required/>
            <span className="absolute top-4 right-3" onClick={ () => setShowPassword(!showPassword)}>
                {
                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
            </span>
          </div>
            
           </div>
           <div>
           <p>Confirm Password</p>
           <div className="relative">
          <input name='confirmPassword' type={ showPasswordConfirm ? "text" : "password"} placeholder="Confirm your password" className="input input-bordered w-full " required/>
            <span className="absolute top-4 right-3" onClick={ () => setShowPasswordConfirm(!showPassword)}>
                {
                    showPasswordConfirm ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
            </span>
          </div>
           </div>

            {
                error && <small className="text-red-600">{error}</small>
            }

           <button type="submit" className="btn bg-[#F60] w-full">Register</button>
           <ToastContainer></ToastContainer>
            </form>



                <p className="mb-2 mt-3 text-center">Already have an account?<Link to="/login" className="underline font-semibold">Login</Link></p>

                
             </div>
    </div>
    );
};

export default Register;