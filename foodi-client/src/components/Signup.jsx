import React from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="bg-white shadow w-full flex items-center justify-center min-h-screen">
      <div className="modal-box mt-0 bg-white">
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="dialog"
          className="card-body"
        >
          <h3 className="font-bold text-lg">Create Accpunt</h3>
          <div className="form-control">
            {/* email */}
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
              required
              {...register("password")}
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          {/* error text */}
          {/* login button */}
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Signup"
              className="btn bg-green text-white border-green"
              Signup
            />
          </div>
          <p className="text-center my-2">
            Have an account?{" "}
            <button>
                Login
            </button>{" "}
          </p>
        </form>
        <div className="text-center justify-center space-x-3 mb-5">
          <button className="btn btn-circle bg-gray-200 hover:bg-green hover:border-green border-white">
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
    </div>
  );
};

export default Signup;
