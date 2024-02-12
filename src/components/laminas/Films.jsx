import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios('https://swapi.dev/api/films/');
        setFilms(result.data.results);
      };
      fetchData();
    },[])

    console.log("Peliculas", films);
  return (
    <div>Filmes</div>
  )
}
