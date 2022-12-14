import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import SocialCards from "./components/SocialCards/SocialCards";
import Directory from "./components/Table/Directory";
import { getToken } from "./helpers";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ForgetPassword from "./pages/Forgetpassword/ForgetPassword";
import Footer from "./components/Footer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={getToken() ? <Home /> :<Navigate to="/Home" />}/>
      <Route path="/Signin" element={<SignIn/>}/>
      <Route path="/Signup" element={<SignUp/>}/>
      <Route path="/SocialCards" element={getToken() ? <SocialCards/> :<Navigate to="/signin" />}/>
      <Route path="/Directory" element={getToken() ? <Directory/> :<Navigate to="/signin" />}/>
      <Route path="/Home" element={<Home />}/>
      <Route path="/ForgotPassword" element={<ForgetPassword/>}/>
      <Route
        path="/profile"
        element={getToken() ? <Profile /> : <Navigate to="/signin" />}
      />
      <Route path="/Footer" element={<Footer/>}/>
      
    </Routes>
  );
};

export default AppRoutes;