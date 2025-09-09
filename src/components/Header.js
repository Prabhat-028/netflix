import React,{useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { AVATAR_URL, LOGO } from '../utils/constants';



const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error");
        })
        
    };
    useEffect(() => {
       const unsubscribe=onAuthStateChanged(auth, (user) => {
         if (user) {
           // User is signed in, see docs for a list of available properties
           // https://firebase.google.com/docs/reference/js/auth.user
           const { uid, email, displayName } = user;
           dispatch(
             addUser({ uid: uid, email: email, displayName: displayName })
             );
             navigate("/browse");
         } else {
           // User is signed out

             dispatch(removeUser());
             navigate("/");
         }
       });
        // unsubscribe when component unmounts
        return () => unsubscribe();
     },[]);
    

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-44 "
        src={LOGO}
        alt="logo"
      />
      <div className="flex p-2">
        <img
          className="w-10 h-10 p-2 "
          src={AVATAR_URL}
          alt="#"
        />
        <button
          onClick={handleSignOut}
          className="h-10 bg-red-700 font-bold text-white rounded-md p-2"
        >
          Sign Out
        </button>
      </div>
    </div>
  ); 
}

export default Header