import { useEffect, useState } from "react";
import { fetchAmiibo } from "../features/fetchAmiibo";
import { Search } from "./Search";
import { Gallery } from "./Gallery";
import { Box } from "@mui/material";

export const Main = () => {
  const [amiibo, setAmiibo] = useState([]);
  const [gameSeries, setGameSeries] = useState([]);
  const [displayCount, setDisplayCount] = useState(20);

  useEffect(() => {
    (async () => {
      fetchAmiibo("gameseries")
        .then((res) => {
          setGameSeries(res);
        })
        .catch((error) => {
          console.log(error);
        });

      fetchAmiibo("amiibo")
        .then((res) => {
          setAmiibo(res);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  return (
    <Box display="flex" justifyContent="space-between" flex={1}>
      <Search />
      <Gallery
        amiibo={amiibo}
        displayCount={displayCount}
        setDisplayCount={setDisplayCount}
      />
    </Box>
  );
};
