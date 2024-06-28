import React from "react";
import {Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Auth = () => {
    const isLogin = useSelector((state) => state.aouth.token);
    return isLogin ? <Outlet/> : <Navigate replace to="/login"/>;
};

export default Auth;
