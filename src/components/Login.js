import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState();
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_large.jpg"
          alt="Logo"
        />
      </div>
      <form
        action="#"
        className=" bg-black bg-opacity-60 w-3/12 p-12 my-36 absolute mx-auto right-0 left-0 text-white"
      >
        <h1 className="font-bold text-3xl">
          {isSignInForm ? " Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <div><input
            type="text"
            placeholder="First Name"
            className="p-4 m-2 w-full bg-gray-700"
                  />
            <input
            type="text"
            placeholder="Last Name"
            className="p-4 m-2 w-full bg-gray-700"
                      />
            </div>
        )}

        <input
          type="text"
          placeholder="Email or Phone"
          className="p-4 m-2 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full bg-gray-700"
        />

        <button className="p-2 m-2 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign in" : "Sign Up"}
        </button>
        <p
          className="m-2 underline decoration-red-700 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
