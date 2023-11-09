import { Link } from "react-router-dom";

import bgSignUp from "../assets/images/bg-sign-up.webp";

function Register() {
  return (
    <div className="auth-page">
      <div className="h-screen flex justify-center items-center">
        <div className="hidden md:block lg:w-1/3 bg-white h-full  rounded-tr-lg rounded-br-lg">
          <img src={bgSignUp} alt="" className="h-full" />
        </div>
        <div className="w-auto md:w-2/4 lg:w-2/3 flex justify-center items-center">
          <div className="w-full lg:w-1/2 px-10 lg:px-0">
            <h2 className="font-normal mb-6 text-3xl text-white">
              Sign Up for an Account
            </h2>
            <div className="mb-6">
              <div className="mb-4">
                <label className="font-normal text-lg text-white block mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  className="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
                  placeholder="Enter Your Full Name"
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="mb-4">
                <label className="font-normal text-lg text-white block mb-3">
                  Occupation
                </label>
                <input
                  type="text"
                  className="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
                  placeholder="Enter Your Occupation"
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="mb-4">
                <label className="font-normal text-lg text-white block mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  className="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
                  placeholder="Enter Your Email Address"
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="mb-4">
                <label className="font-normal text-lg text-white block mb-3">
                  Password
                </label>
                <input
                  type="password"
                  className="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
                  placeholder="Enter Your Password"
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="mb-4">
                <button className="block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full">
                  <Link to="/register-success">Continue Sign Up</Link>
                </button>
              </div>
            </div>
            <div className="text-center">
              <p className="text-white text-md">
                Already have an account?{" "}
                <Link to="/sign-in" className="no-underline text-orange-button">
                  Sign In
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
