import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Menu } from "../components/Menu";
import { MyAlbum } from "../components/MyAlbum";
import { GetLaminates } from "../components/GetLaminates";
import { allData } from "../services";
import { configLetter } from "../constants/ConfigLetter";
import { random } from "lodash";

const letters = [
  { id: 1, disabled: false, open: false },
  { id: 2, disabled: false, open: false },
  { id: 3, disabled: false, open: false },
  { id: 4, disabled: false, open: false },
];
export const AppRouter = () => {
  const [data, setData] = useState([]);
  const [showCounter, setShowCounter] = useState(false);
  const [album, setAlbum] = useState({ films: [], people: [], vehicles: [] });
  const [listLetters, setListLetters] = useState(letters);
  const [randomData, setRandomData] = useState({});
  const [configRandom, setConfigRandom] = useState([]);

  const ramdonConfig = () => {
    const configRan = configLetter[random(1, 2)];
    const listKeys = Object.keys(configRan);
    setConfigRandom(listKeys);
    const finalData = {};
    listKeys.forEach((key) => {
      const auxData = data[key];
      const numKey = configRan[key];
      const listAux = [];
      for (let i = 0; i < numKey; i++) {
        const selectRan = random(auxData.length - 1);
        listAux.push(auxData[selectRan]);
      }
      finalData[key] = listAux;
    });
    setRandomData(finalData);
  };

  useEffect(() => {
    setData(allData());
  }, []);

  const checkAndResetLetters = () => {
    const allOpened = listLetters.every(({ open }) => open);
    if (allOpened) {
      const resetList = listLetters.map(({ id }) => ({
        id,
        disabled: false,
        open: false,
      }));
      setListLetters(resetList);
    }
  };

  useEffect(() => {
    if (!showCounter) {
      const newList = listLetters.map(({ id, open }) => {
        return {
          id,
          disabled: open,
          open,
        };
      });
      setListLetters(newList);
      checkAndResetLetters();
    }
  }, [showCounter]);
  return (
    <>
      <Menu showCounter={showCounter} setShowCounter={setShowCounter} />
      <Routes>
        <Route path="/" element={<Navigate to="/menu" />} />
        <Route path="menu" element={<MyAlbum album={album} />} />
        <Route
          path="laminas"
          element={
            <GetLaminates
              data={data}
              setShowCounter={setShowCounter}
              setAlbum={setAlbum}
              album={album}
              ramdonConfig={ramdonConfig}
              listLetters={listLetters}
              randomData={randomData}
              configRandom={configRandom}
              setListLetters ={setListLetters}
            />
          }
        />
        <Route path="*" element={<Navigate to="/menu" />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};
