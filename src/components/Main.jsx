import { useEffect, useState } from "react";
import { Search } from "./Search";
import { Gallery } from "./Gallery";
import { Box } from "@mui/material";
import { fetchAndSet } from "../features/fetchAndSet";

export const Main = () => {
  const [amiibo, setAmiibo] = useState([]);
  const [gameSeries, setGameSeries] = useState([]);
  const [amiiboType, setAmiiboType] = useState([]);
  const [amiiboSeries, setAmiiboSeries] = useState([]);
  const [displayCount, setDisplayCount] = useState(20);

  const firstFetch = async () => {
    fetchAndSet("gameseries", setGameSeries);
    fetchAndSet("amiibo", setAmiibo);
    fetchAndSet("type", setAmiiboType);
    fetchAndSet("amiiboseries", setAmiiboSeries);
  };

  useEffect(() => {
    (async () => {
      await firstFetch();
    })();
  }, []);

  return (
    <Box display="flex" justifyContent="space-between" flex={1}>
      <Search setAmiibo={setAmiibo} />
      <Gallery
        amiibo={amiibo}
        displayCount={displayCount}
        setDisplayCount={setDisplayCount}
      />
    </Box>
  );
};
