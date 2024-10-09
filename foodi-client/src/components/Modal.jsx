import React, { useContext, useState } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";
const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUpWithGmail, login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  
  //redirecting to home page or specific page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    // console.log(email,password)
    login(email, password).then((result)=>{
      const user = result.user;
      alert("Login Successfull!!");
      document.getElementById("my_modal_3").close()
      navigate(from,{replace: true})
    })
    .catch((error)=>{
      const errorMessage = error.message
      setErrorMessage("Provide a correct email and password!")
    })
  };

  //google signin
  const handleLogin = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        alert("Login Successfull!!");
        navigate(from, {replace:true})
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal modal-middle sm:modal-middle">
        <div className="modal-box mt-0 bg-white">
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="dialog"
            className="card-body"
          >
            <h3 className="font-bold text-lg">Please Login!</h3>
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-white"
                {...register("example")}
              />
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-white"
                {...register("password")}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* error text */}
            {
              errorMessage ? <p className="text-red text-xs italic">{errorMessage} </p>  : ""
            }

            {/* login button */}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Login"
                className="btn bg-green text-white border-green"
              />
            </div>
            <p className="text-center my-2">
              Don' t have an account?{" "}
              <Link to="/signup" className="underline text-green ml-1">
                Signup Now
              </Link>{" "}
            </p>
            <button
              htmlFor="my_modal_3"
              onClick={() => document.getElementById("my_modal_3").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>

          {/* social signin */}
          <div className="text-center justify-center space-x-3 mb-5">
            <button
              onClick={handleLogin}
              className="btn btn-circle bg-gray-200 hover:bg-green hover:border-green border-white"
            >
              <FaGoogle />
            </button>
            <button className="btn btn-circle bg-gray-200 hover:bg-green hover:border-green border-white">
              <FaFacebookF />
            </button>
            <button className="btn btn-circle bg-gray-200 hover:bg-green hover:border-green border-white">
              <FaGithub />
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
