import React,{useEffect} from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
const Signin = () => {
    const {googleSignIn,logOut,user} = UserAuth()
    const navigate = useNavigate()
  const handleGoogleSignIn = async() => {
try{
    await googleSignIn()
    
}catch(error){
console.log(error)
}
  };

  const handleSignOut = async() => {
    try{
        await logOut()
    }catch(error){
    console.log(error)
    }
  }

  useEffect(() => {
    if(user!=null){
        navigate('/profile')
    }
  },[user])
  return (
    <div>
      {user?<button className="p-4 bg-pink-300" onClick={handleSignOut}>log out</button>:
      <button className="p-4 bg-pink-300" onClick={handleGoogleSignIn}>Sign in with google</button>
   } </div>
  );
};

export default Signin;
