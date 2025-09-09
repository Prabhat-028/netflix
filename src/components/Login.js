import React, { useState ,useRef} from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import { auth } from "../utils/firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { AVATAR_URL } from "../utils/constants.js";
import { addUser } from "../utils/userSlice.js";
import { useDispatch } from "react-redux";



const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);
     const dispatch = useDispatch();

    const handleButtonclick = () => {
        //validating the data
        const message = checkValidData(email.current.value, password.current.value);
       
        //setting error Message
        setErrorMessage(message);

        if (message) return;
        
        if (!isSignInForm) {
            //sign up logic
            createUserWithEmailAndPassword(
              auth,
              email.current.value,
              password.current.value
            )
              .then((userCredential) => {
                  const user = userCredential.user;
                  updateProfile(user, {
                      displayName: name.current.value,
                      photoURL:AVATAR_URL
                  }).then(() => {
                      const { uid, email, displayName, photoURL } = auth.currentUser;
                      dispatch(
                          addUser({
                              uid: uid,
                              email: email,
                              displayName: displayName,
                              photoURL:photoURL,
                          })
                      )
                  })
              })
              .catch((error) => {
                console.error(error);
                  setErrorMessage("Already an User Please Sign In!");
              });
          
        }
        else {
            //sign in Logic
            signInWithEmailAndPassword(
              auth,
              email.current.value,
              password.current.value
            )
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                  // ...
                  console.log(user);
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                  setErrorMessage("Please Sign Up First!");
              });
        }
    }

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
          <form onSubmit={(e) => {
              e.preventDefault();
      }}
        action="#"
        className=" bg-black bg-opacity-60 w-3/12 p-12 my-36 absolute mx-auto right-0 left-0 text-white"
      >
        <h1 className="font-bold text-3xl">
          {isSignInForm ? " Sign In" : "Sign Up"}
              </h1>


              {/**shown after the sing up */}
        {!isSignInForm && (
                  <div><input
                      ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 w-full bg-gray-700"
                  />
            </div>
        )}

        <input ref={email}
          type="text"
          placeholder="Email or Phone"
          className="p-4 m-2 w-full bg-gray-700"
        />
        <input ref={password}
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full bg-gray-700"
        />

              <p className="text-red-500 px-2 font-bold text-lg">{errorMessage}</p>

        <button className="p-2 m-2 bg-red-700 w-full rounded-lg" onClick={handleButtonclick}>
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
