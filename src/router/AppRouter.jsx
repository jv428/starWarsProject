import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Menu } from "../components/Menu";
import { MyAlbum } from "../components/MyAlbum";
import { GetLaminates } from "../components/GetLaminates";
import { allData } from "../services";

export const AppRouter = () => {
  const [data, setData] = useState([]);
  const [showCounter, setShowCounter] = useState(false);
  const [album, setAlbum] = useState({films: [], people: [], vehicles: []});
  useEffect(() => {
    setData(allData());
  }, [])
  return (
    <>
      <Menu showCounter={showCounter} setShowCounter={setShowCounter}/>
      <Routes>
        <Route path="/" element={<Navigate to="/menu" />} />
        <Route path="menu" element={<MyAlbum album={album}/>} />
        <Route path="laminas" element={<GetLaminates data={data} setShowCounter={setShowCounter} showCounter={showCounter} setAlbum={setAlbum} album={album}/>} />
        {/* <Route path="actividades" element={<Activities />} /> */}
        <Route path="*" element={<Navigate to="/menu" />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};
