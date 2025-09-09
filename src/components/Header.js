import React,{useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";



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
       onAuthStateChanged(auth, (user) => {
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
     });
    

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-44 "
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="flex p-2">
        <img
          className="w-10 h-10 p-2 "
          src="https://tse1.mm.bing.net/th/id/OIP.u3aU45q2Pcum--knQuaiSwHaHa?pid=Api&P=0&h=180"
          alt="#"
        />
        <button
          onClick={handleSignOut}
          className="h-12 bg-emerald-300 font-bold text-white rounded-md p-2"
        >
          Sign Out
        </button>
      </div>
    </div>
  ); 
}

export default Header