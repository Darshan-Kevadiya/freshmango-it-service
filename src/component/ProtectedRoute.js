import React from 'react'
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
 localStorage.setItem('userdetails' , user)
  console.log("Check user in Private: ", user);
  if (!'userdetails') {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute