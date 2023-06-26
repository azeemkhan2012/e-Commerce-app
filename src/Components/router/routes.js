import React from "react";
import ButtonAppBar from "../NavBar/navbar";
import { Routes, Route, Outlet } from "react-router-dom";
import Shop from "../shop/shop";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<><ButtonAppBar /> <Outlet/></>}>
          <Route exact path="home" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
