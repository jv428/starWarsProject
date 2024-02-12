import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import AgricultureIcon from '@mui/icons-material/Agriculture';
import LazyLoad from "react-lazy-load";

export const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://swapi.dev/api/vehicles/");
      setVehicles(result.data.results);
    };
    fetchData();
  }, []);

  console.log("naves", vehicles);
  return (
    <div className="flex justify-between flex-wrap p-5">
      {vehicles.map((nave) => (
          <div className="w-[30%] mb-8 animate-fade animate-once animate-duration-[1500ms] animate-ease-out">
            <LazyLoad threshold={0.1}>
            <Card variant="outlined" key={nave.name}>
              <CardContent>
                <div className="flex items-center space-x-5">
                  <div className="flex justify-center items-center text-white h-8 w-8 rounded-full bg-indigo-500">
                    <AgricultureIcon />
                  </div>
                  <Typography level="title-md">Nombre: {nave.name}</Typography>
                </div>
                <Typography level="body-sm">
                  Modelo: {nave.model}
                </Typography>
                <Typography level="body-sm">
                  Costo en créditos: {nave.cost_in_credits}
                </Typography>
                <Typography level="body-sm">
                  Tripulantes: {nave.crew}
                </Typography>
                <Typography level="body-sm">
                  Pasajeros: {nave.passengers}
                </Typography>
              </CardContent>
              <CardOverflow
                variant="soft"
                sx={{ bgcolor: "background.level1" }}
              >
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                  <Typography
                    level="body-xs"
                    fontWeight="md"
                    textColor="text.secondary"
                  >
                    Fabricado por {nave.manufacturer}
                  </Typography>
                  <Divider orientation="vertical" />
                  <Typography
                    level="body-xs"
                    fontWeight="md"
                    textColor="text.secondary"
                  >
                    Lámina N° {nave.episode_id}
                  </Typography>
                </CardContent>
              </CardOverflow>
            </Card>
            </LazyLoad>
          </div>
      ))}
    </div>
  );
};