import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Menu } from "../components/Menu";
import { MyAlbum } from "../components/MyAlbum";
import { GetLaminates } from "../components/GetLaminates";

export const AppRouter = () => {
  return (
    <>
      <Menu/>
      <Routes>
        <Route path="/" element={<Navigate to="/menu" />} />
        <Route path="menu" element={<MyAlbum/>} />
        <Route path="laminas" element={<GetLaminates />} />
        {/* <Route path="actividades" element={<Activities />} /> */}
        <Route path="*" element={<Navigate to="/menu" />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};
