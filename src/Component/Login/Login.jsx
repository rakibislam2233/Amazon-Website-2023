import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { UserContext } from "../Provider/UserProvider";
const Login = () => {
  const [error,setError] = useState('')
  const {signIn,googleSignup } = useContext(UserContext);
    const handelFormLogin = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        setError('')
        signIn(email,password)
        .then(result=>{
          const user = result.user;
          console.log(user);
          setError('')
          form.reset()
        })
        .catch(error=>{
          setError(error.message);
        })
    }
    const handelLogin = ()=>{
      googleSignup ()
      .then(result=>{
        const user = result.user;
        console.log(user);
      })
      .catch(error=>{
        console.log(error.message);
      })
    }

  return (
    <div className=" h-[100vh] bg-base-200">
      <div className="hero-content flex-col ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelFormLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-xl">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="text-blue-900 link link-hover">
                  Forgot password?
                </a>
              </label>
              <h3 className="text-rose-900">{error}</h3>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <h3>Don't have account? <Link to={"/signUp"}>Sign Up</Link></h3>
         <div className="flex justify-center items-center">
           <div className="h-[2px] w-full bg-slate-500"></div>
            <h2 className="text-center mx-2 ">Or</h2>
            <div className="h-[2px] w-full bg-slate-500"></div>
          </div>
            <button onClick={handelLogin} className=" w-full flex justify-center items-center text-center border p-2 rounded"><FcGoogle className="w-8 h-6"></FcGoogle>Continue With Google</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
