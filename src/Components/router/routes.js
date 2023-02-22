import React from "react";
import ButtonAppBar from "../NavBar/navbar";
import { Routes, Route, Outlet } from "react-router-dom";
import Cart from "../shop/shop";

const Routers = () => {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Navigate replace to = "/login"/>}/> */}
        <Route path="/" element={<><ButtonAppBar /> <Outlet/></>}>
          <Route exact path="home" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
