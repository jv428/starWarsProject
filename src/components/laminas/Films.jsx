import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import MovieIcon from "@mui/icons-material/Movie";
import LazyLoad from "react-lazy-load";

export const Films = ({ data }) => {
  
  return (
    <div className="flex justify-between flex-wrap p-5">
      {data.map((film) => (
          <div className="w-[30%] mb-8 animate-fade animate-once animate-duration-[1500ms] animate-ease-out" key={film.episode_id}>
            <LazyLoad threshold={0.1}>
            <Card variant="outlined">
              <CardContent>
                <div className="flex items-center space-x-5">
                  <div className="flex justify-center items-center text-white h-8 w-8 rounded-full bg-sky-500">
                    <MovieIcon />
                  </div>
                  <Typography level="title-md">Nombre: {film.title}</Typography>
                </div>
                <Typography level="body-sm">
                  Director: {film.director}
                </Typography>
                <Typography level="body-sm">
                  Fecha de estreno: {film.release_date}
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
                    Poducido por {film.producer}
                  </Typography>
                  <Divider orientation="vertical" />
                  <Typography
                    level="body-xs"
                    fontWeight="md"
                    textColor="text.secondary"
                  >
                    Lámina N° {film.episode_id}
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
