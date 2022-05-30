import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "../pages/feed/Feed";
import Login from "../pages/login/Login";
import Signup from "../pages/register/Signup";
import Coments from "../pages/comments/Comments";
import Header from '../components/Header'
import Footer from "../components/Footer";
import ErrorPage from "../pages/ErrorPage";


const RoutesApp = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/signup' element={<Signup />} /> 
        <Route path='/comments/:id' element={<Coments />} />
        <Route exact path="*" element={<ErrorPage />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default RoutesApp