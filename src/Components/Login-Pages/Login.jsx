import { useContext, useEffect } from "react";
import { AuthContext } from "../Auth-Provider/AuthProvaider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

import AOS from 'aos';
import 'aos/dist/aos.css';


const Login = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);


  const location = useLocation()
  console.log(location);
  const Navigate = useNavigate()
   
   const {loginUser, googleLogin, setUser,  githubLogin} = useContext(AuthContext)
 

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        loginUser(email, password)
        .then( () => {
          Navigate(location?.state ? location.state : '/');
        })
    }


    const handleGoogleLogin = () =>{
      googleLogin()
      .then(result => {
        setUser(result.user)
     
        Navigate(location?.state ? location.state : '/');

      })
    }

    const handleGithubLogin = () => {
      githubLogin()
      .then(result => {
        setUser(result.user)
        toast.success('Github login successfully!')
        
        Navigate(location?.state ? location.state : '/');

      })
      .catch(error => {
        console.error(error);
        toast.error('Github login fail');
      })
    }




    return (
       <div className="hero w-[80%] mx-auto rounded-xl min-h-screen bg-base-200 mb-8 mt-8" data-aos="zoom-in">
        <Helmet><title>Login Page</title></Helmet>
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <form onSubmit={handleLogin} className="card-body">
        <h2 className="text-3xl font-extrabold text-center mb-4">Login Now!</h2>
        <div className="form-control">
            <span className="label-text">Email</span>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
            <span className="label-text">Password</span>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control mt-2">
          <button className="btn bg-[#F60]">Login</button>
        </div>
        
      </form>

      <div className="flex items-center pt-4 space-x-2 p-9">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="text-sm text-gray-600">Login with social accounts</p>
            <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        {/* Social icons */}
        <div className="flex justify-around">
            <button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-full hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7  fill-current"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg>
            </button>
           
            <button onClick={handleGithubLogin}  aria-label="Log in with GitHub" className="p-3 rounded-full hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 fill-current"><path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path></svg>
            </button>
        </div>


      <div>
      <p className="mb-3 text-center">Don&apos;t have an account?<Link to="/register" className="underline font-semibold">Register</Link></p>
        <hr />
      </div>

      

    </div>
  </div>
        </div>
    );
};

export default Login;


