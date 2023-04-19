import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { UserContext } from '../Provider/UserProvider';
const SignUp = () => {
  const {createuser,googleSignup} = useContext(UserContext);
  console.log(createuser);
    const [error,setError] = useState('')
    const handelFormSignUp = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        setError('')
        console.log(name,email,password,confirm);
        if(password!==confirm){
          return  setError("Please enter same password")
        }
        else if(password.length<6){
          return  setError("Please enter 6 Charecters password")
        }
        createuser(email,password)
        .then(result=>{
          const user = result.user;
          console.log(user);
          form.reset()
          setError('')

        })
        .catch(error=>{
          setError(error.message);
          form.reset()
        })
    }
    const GoogleSignUp = ()=>{
      googleSignup()
      .then(result=>{
        const user = result.user;
        console.log(user);
      })
      .catch(error=>{
        setError(error.message);
      })
    }
    return (
        <div className="bg-base-200">
      <div className="hero-content flex-col ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelFormSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-xl">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Your Confirm Password"
                className="input input-bordered"
                name="confirm"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <h3>Already have an account? <Link to={'/login'}>Login</Link></h3>
            <h4 className='text-rose-900'>{error}</h4>
            <div className="flex justify-center items-center">
           <div className="h-[2px] w-full bg-slate-500"></div>
            <h2 className="text-center mx-2 ">Or</h2>
            <div className="h-[2px] w-full bg-slate-500"></div>
          </div>
            <button onClick={GoogleSignUp} className=" w-full flex justify-center items-center text-center border p-2 rounded"><FcGoogle className="w-8 h-6"></FcGoogle>Continue With Google</button>
          </form>
        </div>
      </div>
    </div>
    );
};

export default SignUp;