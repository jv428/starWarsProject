import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import Face6Icon from '@mui/icons-material/Face6';
import LazyLoad from "react-lazy-load";

export const Characters = ({ data }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://swapi.dev/api/people/");
      setCharacters(result.data.results);
    };
    fetchData();
  }, []);

  console.log("personajes", characters);
  return (
    <div className="flex justify-between flex-wrap p-5">
      {data?.map((person) => (
          <div className="w-[30%] mb-8 animate-fade animate-once animate-duration-[1500ms] animate-ease-out">
            <LazyLoad threshold={0.1}>
            <Card variant="outlined" key={person?.name}>
              <CardContent>
                <div className="flex items-center space-x-5">
                  <div className="flex justify-center items-center text-white h-8 w-8 rounded-full bg-emerald-500">
                    <Face6Icon />
                  </div>
                  <Typography level="title-md">Nombre: {person?.name}</Typography>
                </div>
                <Typography level="body-sm">
                  Genero: {person?.gender}
                </Typography>
                <Typography level="body-sm">
                  Estatura: {person?.height}
                </Typography>
                <Typography level="body-sm">
                  Año de nacimientos: {person?.birth_year}
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
                    Poducido por {person?.producer}
                  </Typography>
                  <Divider orientation="vertical" />
                  <Typography
                    level="body-xs"
                    fontWeight="md"
                    textColor="text.secondary"
                  >
                    Lámina N° {person?.episode_id}
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
